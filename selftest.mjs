import worker from './index.js';

function assert(cond, msg) { if (!cond) throw new Error(msg); }
function dbStub() {
  return {
    prepare(sql) {
      const stmt = {
        bind() { return stmt; },
        async run() { return { meta: { changes: 1, last_row_id: 1 } }; },
        async first() { return /SELECT 1 AS ok/i.test(sql) ? { ok: 1 } : null; },
        async all() { return { results: [] }; }
      };
      return stmt;
    }
  };
}

const envBase = {
  DB: dbStub(),
  ADMIN_KEY: 'admin-test',
  IG_ACCESS_TOKEN: 'IGAA_TEST',
  META_API_VERSION: 'v26.0',
  VERIFY_TOKEN: 'verify-test'
};
const ctx = { waitUntil(p) { Promise.resolve(p).catch(() => {}); } };

let mode = 'success';
globalThis.fetch = async (input, init = {}) => {
  const url = String(input);
  if (!url.startsWith('https://graph.instagram.com/')) throw new Error(`unexpected outbound ${url}`);
  if (mode === 'network') throw new TypeError('simulated network failure');
  if (mode === 'graph400') return new Response(JSON.stringify({ error: { message: 'Invalid OAuth access token.', code: 190 } }), { status: 400, headers: { 'content-type': 'application/json' } });
  if (url.includes('/me/media')) return new Response(JSON.stringify({ data: [{ id: 'm1', media_type: 'REELS' }] }), { status: 200, headers: { 'content-type': 'application/json' } });
  if (url.includes('/subscribed_apps')) return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'content-type': 'application/json' } });
  if (url.includes('/me?')) {
    assert(url.includes('fields=user_id%2Cusername') || url.includes('fields=user_id,username'), 'account test must request user_id,username');
    return new Response(JSON.stringify({ user_id: '17840000000000000', username: 'safetygwajang' }), { status: 200, headers: { 'content-type': 'application/json' } });
  }
  return new Response(JSON.stringify({ is_user_follow_business: true, username: 'tester' }), { status: 200, headers: { 'content-type': 'application/json' } });
};

async function req(path, opts = {}, env = envBase) {
  const r = await worker.fetch(new Request(`https://example.test${path}`, opts), env, ctx);
  const text = await r.text();
  let body; try { body = JSON.parse(text); } catch { body = text; }
  return { status: r.status, body };
}

// Health + D1 schema
{
  const r = await req('/api/health');
  assert(r.status === 200, 'health status');
  assert(r.body.db === true, 'D1 health');
  assert(r.body.apiVersion === 'v26.0', 'API v26.0');
}

// Webhook verification
{
  const r = await req('/webhook?hub.mode=subscribe&hub.verify_token=verify-test&hub.challenge=abc123');
  assert(r.status === 200 && r.body === 'abc123', 'webhook challenge');
}

// Account success: no APP_SECRET / no IG_USER_ID / no IG_USERNAME required
{
  mode = 'success';
  const r = await req('/api/account', { headers: { 'x-admin-key': 'admin-test' } });
  assert(r.status === 200, `account success status ${r.status}`);
  assert(r.body.account.user_id === '17840000000000000', 'user_id auto discovery');
  assert(r.body.account.username === 'safetygwajang', 'username auto discovery');
}

// Graph API HTTP error must be returned as JSON 502, never crash/1101
{
  mode = 'graph400';
  const r = await req('/api/account', { headers: { 'x-admin-key': 'admin-test' } });
  assert(r.status === 502, `graph error status ${r.status}`);
  assert(r.body.error.includes('code=190'), 'graph error detail');
}

// Network failure must also be caught
{
  mode = 'network';
  const r = await req('/api/account', { headers: { 'x-admin-key': 'admin-test' } });
  assert(r.status === 502, `network error status ${r.status}`);
  assert(r.body.error.includes('네트워크 호출 실패'), 'network error detail');
}

// Media and subscribe success
{
  mode = 'success';
  const media = await req('/api/media', { headers: { 'x-admin-key': 'admin-test' } });
  assert(media.status === 200 && media.body.media[0].id === 'm1', 'media route');
  const sub = await req('/api/subscribe', { method: 'POST', headers: { 'x-admin-key': 'admin-test' } });
  assert(sub.status === 200 && sub.body.result.success === true, 'subscribe route');
}

// Campaign validation errors must return 400, not 500
{
  mode = 'success';
  const bad = await req('/api/campaigns', {
    method: 'POST',
    headers: { 'x-admin-key': 'admin-test' },
    body: JSON.stringify({ name: 'x', resource_url: 'http://not-https.example', resource_text: 'y' })
  });
  assert(bad.status === 400, `non-https resource_url should 400, got ${bad.status}`);

  const malformed = await req('/api/campaigns', {
    method: 'POST',
    headers: { 'x-admin-key': 'admin-test' },
    body: '{not json'
  });
  assert(malformed.status === 400, `malformed JSON body should 400, got ${malformed.status}`);
}

console.log('PASS: syntax, D1 health, webhook verify, Meta /me, Graph error handling, network error handling, media, subscribe, campaign validation');
