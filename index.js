const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };
const INDEX_HTML = "<!doctype html>\n<html lang=\"ko\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>IG Auto DM</title>\n  <style>\n:root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;color:#111827;background:#f5f7fb}*{box-sizing:border-box}body{margin:0}.topbar{height:72px;background:#fff;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;justify-content:space-between;padding:0 24px;position:sticky;top:0;z-index:5}.brand{font-weight:800;font-size:20px}.sub{font-size:12px;color:#6b7280;margin-top:3px}.top-actions,.row{display:flex;align-items:center;gap:10px}.layout{display:grid;grid-template-columns:220px 1fr;min-height:calc(100vh - 72px)}.sidebar{background:#fff;border-right:1px solid #e5e7eb;padding:18px 12px}.nav{width:100%;border:0;background:transparent;padding:12px 14px;border-radius:10px;text-align:left;font-weight:700;color:#4b5563;cursor:pointer;margin-bottom:6px}.nav.active{background:#eef2ff;color:#4f46e5}.content{padding:24px}.panel{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;box-shadow:0 8px 24px rgba(15,23,42,.04)}h1{margin:0 0 6px;font-size:26px}.muted{color:#6b7280;margin-top:0}.grid2{display:grid;grid-template-columns:minmax(520px,1fr) 410px;gap:24px;align-items:start}label{display:block;font-weight:700;margin:16px 0 7px}input,textarea{width:100%;border:1px solid #d1d5db;border-radius:10px;padding:12px 13px;font:inherit;background:#fff}textarea{resize:vertical}.section-title{font-weight:800;font-size:16px;margin:24px 0 10px}.choice-row{display:flex;gap:12px}.choice{border:1px solid #d1d5db;padding:10px 12px;border-radius:10px;margin:0;font-weight:600}.choice input{width:auto;margin-right:6px}.switch-line{display:flex;gap:10px;align-items:center;background:#f9fafb;padding:12px;border-radius:10px}.switch-line input{width:auto}.primary,.secondary,.ghost{border-radius:10px;padding:10px 14px;font-weight:800;cursor:pointer}.primary{background:#4f46e5;color:#fff;border:1px solid #4f46e5}.secondary{background:#111827;color:#fff;border:1px solid #111827}.ghost{background:#fff;color:#374151;border:1px solid #d1d5db}.end{justify-content:flex-end;margin-top:20px}.between{justify-content:space-between}.badge{font-size:12px;padding:7px 10px;border-radius:999px;background:#fff7ed;color:#c2410c;border:1px solid #fed7aa}.badge.ok{background:#ecfdf5;color:#047857;border-color:#a7f3d0}.badge.bad{background:#fef2f2;color:#b91c1c;border-color:#fecaca}.phone-wrap{position:sticky;top:96px}.phone{background:#0b0f14;border:10px solid #1f2937;border-radius:42px;min-height:640px;overflow:hidden;color:#fff;box-shadow:0 24px 50px rgba(15,23,42,.2)}.phone-head{height:62px;border-bottom:1px solid #222b36;display:flex;align-items:center;justify-content:center;font-weight:700}.chat{padding:22px;display:flex;flex-direction:column;gap:10px}.bubble{background:#1f2937;border-radius:18px 18px 18px 6px;padding:14px;line-height:1.45}.bubble.success{margin-top:28px}.dm-button{display:block;width:100%;border:0;border-radius:10px;background:#343b46;color:#fff;text-align:center;padding:12px;text-decoration:none;font-weight:800;cursor:pointer}.user-bubble{background:#5b45f8;align-self:flex-end;padding:11px 14px;border-radius:18px 18px 6px 18px;margin-top:4px}.callout{margin-top:14px;background:#fffbeb;border:1px solid #fde68a;color:#92400e;padding:14px;border-radius:12px;font-size:13px;line-height:1.5}.media-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px}.media-card{border:2px solid transparent;border-radius:12px;overflow:hidden;background:#f3f4f6;cursor:pointer;aspect-ratio:1;position:relative}.media-card.selected{border-color:#4f46e5}.media-card img{width:100%;height:100%;object-fit:cover}.media-caption{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.75));color:#fff;font-size:11px;padding:24px 6px 6px}.setup-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.setup-card{border:1px solid #e5e7eb;border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:5px}.setup-card span{font-size:13px;color:#6b7280}.codebox{background:#111827;color:#e5e7eb;padding:12px;border-radius:10px;word-break:break-all}.result{background:#0b1020;color:#d1fae5;border-radius:12px;padding:14px;min-height:80px;white-space:pre-wrap}.campaign-card{border:1px solid #e5e7eb;border-radius:12px;padding:15px;margin-top:10px}.campaign-card .meta{color:#6b7280;font-size:12px;margin-top:6px}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;margin-top:16px}th,td{text-align:left;border-bottom:1px solid #e5e7eb;padding:10px;font-size:13px}th{color:#6b7280}.notice{padding:12px 14px;border-radius:10px;margin-bottom:14px;background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe}.notice.error{background:#fef2f2;color:#b91c1c;border-color:#fecaca}.hidden{display:none!important}dialog{border:0;border-radius:16px;padding:0;box-shadow:0 30px 70px rgba(0,0,0,.25)}.dialog-card{padding:22px;width:420px}code{background:#f3f4f6;padding:2px 5px;border-radius:5px}@media(max-width:980px){.layout{grid-template-columns:1fr}.sidebar{display:flex;overflow:auto;border-right:0;border-bottom:1px solid #e5e7eb}.nav{min-width:140px}.grid2{grid-template-columns:1fr}.phone-wrap{position:static}.media-grid{grid-template-columns:repeat(3,1fr)}}\n\n</style>\n</head>\n<body>\n  <header class=\"topbar\">\n    <div>\n      <div class=\"brand\">IG Auto DM</div>\n      <div class=\"sub\">댓글 → 자동 DM → 팔로우 확인 → 자료 전송</div>\n    </div>\n    <div class=\"top-actions\">\n      <span id=\"healthBadge\" class=\"badge\">연결 확인 중</span>\n      <button id=\"adminBtn\" class=\"ghost\">관리자 키</button>\n    </div>\n  </header>\n\n  <main class=\"layout\">\n    <aside class=\"sidebar\">\n      <button class=\"nav active\" data-view=\"builder\">자동화 만들기</button>\n      <button class=\"nav\" data-view=\"campaigns\">자동화 목록</button>\n      <button class=\"nav\" data-view=\"setup\">연동 설정</button>\n      <button class=\"nav\" data-view=\"logs\">실행 로그</button>\n    </aside>\n\n    <section class=\"content\">\n      <div id=\"notice\" class=\"notice hidden\"></div>\n\n      <section id=\"view-builder\" class=\"view\">\n        <div class=\"grid2\">\n          <div class=\"panel\">\n            <h1>댓글 자동 DM</h1>\n            <p class=\"muted\">ManyChat처럼 릴스/게시물을 고르고, 댓글 조건과 DM 흐름을 설정합니다.</p>\n\n            <label>자동화 이름</label>\n            <input id=\"name\" value=\"안전자료 자동 DM\" />\n\n            <div class=\"section-title\">1. 어떤 게시물/릴스?</div>\n            <div class=\"row\">\n              <button id=\"loadMediaBtn\" class=\"secondary\">내 게시물 불러오기</button>\n              <button id=\"allMediaBtn\" class=\"ghost\">모든 게시물</button>\n            </div>\n            <input id=\"mediaId\" placeholder=\"게시물 ID (모든 게시물은 *)\" value=\"*\" />\n            <div id=\"mediaGrid\" class=\"media-grid\"></div>\n\n            <div class=\"section-title\">2. 어떤 댓글?</div>\n            <div class=\"choice-row\">\n              <label class=\"choice\"><input type=\"radio\" name=\"trigger\" value=\"any\" checked /> 모든 댓글</label>\n              <label class=\"choice\"><input type=\"radio\" name=\"trigger\" value=\"keywords\" /> 특정 단어 포함</label>\n            </div>\n            <input id=\"keywords\" placeholder=\"예: 자료, 프롬프트, 안전 (쉼표 구분)\" disabled />\n\n            <div class=\"section-title\">3. 첫 DM</div>\n            <textarea id=\"openingText\" rows=\"4\">댓글 감사합니다! 요청하신 자료를 보내드릴게요. 먼저 팔로우 여부를 확인해주세요 👇</textarea>\n\n            <label class=\"switch-line\">\n              <input id=\"requireFollow\" type=\"checkbox\" checked />\n              <span>자료 전 팔로우 확인</span>\n            </label>\n\n            <div class=\"section-title\">4. 자료 전달</div>\n            <textarea id=\"resourceText\" rows=\"3\">팔로우 확인 완료! 요청하신 자료입니다 👇</textarea>\n            <input id=\"resourceUrl\" placeholder=\"https://... 자료 링크\" />\n\n            <label class=\"switch-line\">\n              <input id=\"active\" type=\"checkbox\" checked />\n              <span>자동화 활성화</span>\n            </label>\n\n            <div class=\"row end\">\n              <button id=\"resetBtn\" class=\"ghost\">초기화</button>\n              <button id=\"saveBtn\" class=\"primary\">자동화 저장</button>\n            </div>\n          </div>\n\n          <div class=\"phone-wrap\">\n            <div class=\"phone\">\n              <div class=\"phone-head\">Instagram DM 미리보기</div>\n              <div class=\"chat\">\n                <div class=\"bubble\" id=\"previewOpening\"></div>\n                <a id=\"previewFollow\" class=\"dm-button\" href=\"#\">팔로우하기</a>\n                <button class=\"dm-button\" type=\"button\">팔로우 확인</button>\n                <div class=\"user-bubble\">팔로우 확인</div>\n                <div class=\"bubble success\" id=\"previewResource\"></div>\n                <a id=\"previewResourceBtn\" class=\"dm-button\" href=\"#\">자료 받기</a>\n              </div>\n            </div>\n            <div class=\"callout\">\n              <strong>중요</strong><br />\n              인스타그램 정책상 외부 사이트가 사용자를 자동으로 팔로우시키는 것은 불가합니다. 대신 “팔로우하기” 버튼으로 프로필을 열고, “팔로우 확인”을 누르면 API가 실제 팔로우 상태를 검사합니다.\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"view-campaigns\" class=\"view hidden\">\n        <div class=\"panel\">\n          <div class=\"row between\"><div><h1>자동화 목록</h1><p class=\"muted\">저장된 캠페인을 켜고 끌 수 있습니다.</p></div><button id=\"refreshCampaigns\" class=\"secondary\">새로고침</button></div>\n          <div id=\"campaignList\"></div>\n        </div>\n      </section>\n\n      <section id=\"view-setup\" class=\"view hidden\">\n        <div class=\"panel\">\n          <h1>Instagram 연동 설정</h1>\n          <p class=\"muted\">사이트 배포 후 Cloudflare Worker의 Variables and Secrets에 아래 값을 설정합니다.</p>\n          <div class=\"setup-grid\">\n            <div class=\"setup-card\"><b>IG_ACCESS_TOKEN</b><span>Meta에서 발급한 Instagram 사용자 액세스 토큰</span></div>\n            <div class=\"setup-card\"><b>IG_USER_ID</b><span>선택 사항: 토큰에서 자동 확인 가능</span></div>\n            <div class=\"setup-card\"><b>IG_USERNAME</b><span>선택 사항: 토큰에서 자동 확인 가능</span></div>\n            <div class=\"setup-card\"><b>VERIFY_TOKEN</b><span>웹훅 검증용 임의 문자열</span></div>\n            <div class=\"setup-card\"><b>META_APP_SECRET 또는 APP_SECRET</b><span>Meta 앱 설정 → 기본 설정의 App Secret (Instagram 앱 시크릿 아님)</span></div>\n            <div class=\"setup-card\"><b>ADMIN_KEY</b><span>이 관리화면 보호용 비밀번호</span></div>\n          </div>\n          <div class=\"section-title\">Meta Webhook</div>\n          <div class=\"codebox\"><span id=\"webhookUrl\"></span></div>\n          <p>Meta 앱의 Callback URL에 위 주소를 넣고, Verify token은 <code>VERIFY_TOKEN</code>과 동일하게 입력합니다.</p>\n          <div class=\"row\">\n            <button id=\"testAccountBtn\" class=\"secondary\">Instagram 연결 테스트</button>\n            <button id=\"subscribeBtn\" class=\"primary\">웹훅 구독 자동 설정</button>\n          </div>\n          <pre id=\"setupResult\" class=\"result\"></pre>\n        </div>\n      </section>\n\n      <section id=\"view-logs\" class=\"view hidden\">\n        <div class=\"panel\">\n          <div class=\"row between\"><div><h1>실행 로그</h1><p class=\"muted\">최근 댓글 수신/DM 전송 상태를 확인합니다.</p></div><button id=\"refreshLogs\" class=\"secondary\">새로고침</button></div>\n          <div class=\"table-wrap\">\n            <table><thead><tr><th>시간</th><th>사용자</th><th>미디어</th><th>상태</th><th>내용</th></tr></thead><tbody id=\"logBody\"></tbody></table>\n          </div>\n        </div>\n      </section>\n    </section>\n  </main>\n\n  <dialog id=\"adminDialog\">\n    <form method=\"dialog\" class=\"dialog-card\">\n      <h2>관리자 키</h2>\n      <p class=\"muted\">Cloudflare에 설정한 ADMIN_KEY를 입력하세요. 브라우저에만 저장됩니다.</p>\n      <input id=\"adminKeyInput\" type=\"password\" placeholder=\"ADMIN_KEY\" />\n      <div class=\"row end\"><button value=\"cancel\" class=\"ghost\">취소</button><button id=\"saveAdminKey\" value=\"default\" class=\"primary\">저장</button></div>\n    </form>\n  </dialog>\n\n  <script>\nconst $ = (s) => document.querySelector(s);\nconst $$ = (s) => [...document.querySelectorAll(s)];\nlet editingId = null;\nlet adminKey = localStorage.getItem(\"ig_admin_key\") || \"\";\n\nfunction headers(json = false) {\n  const h = { \"x-admin-key\": adminKey };\n  if (json) h[\"content-type\"] = \"application/json\";\n  return h;\n}\n\nasync function api(path, opts = {}) {\n  const r = await fetch(path, { ...opts, headers: { ...headers(Boolean(opts.body)), ...(opts.headers || {}) } });\n  const raw = await r.text();\n  let data = {};\n  try { data = raw ? JSON.parse(raw) : {}; } catch { data = { raw }; }\n  if (!r.ok || data.ok === false) throw new Error(data.error || data.raw || `HTTP ${r.status}`);\n  return data;\n}\n\nfunction notice(msg, error = false) {\n  const n = $(\"#notice\");\n  n.textContent = msg;\n  n.classList.toggle(\"error\", error);\n  n.classList.remove(\"hidden\");\n  setTimeout(() => n.classList.add(\"hidden\"), 4500);\n}\n\nasync function refreshHealth() {\n  try {\n    const h = await fetch(\"/api/health\").then((r) => r.json());\n    const badge = $(\"#healthBadge\");\n    if (h.db && h.metaConfigured && h.webhookConfigured && h.adminConfigured) {\n      badge.textContent = \"준비 완료\"; badge.className = \"badge ok\";\n    } else {\n      const missing = [];\n      if (!h.db) missing.push(\"DB\");\n      if (!h.metaConfigured) missing.push(\"Instagram\");\n      if (!h.webhookConfigured) missing.push(\"Webhook\");\n      if (!h.adminConfigured) missing.push(\"Admin\");\n      badge.textContent = `설정 필요: ${missing.join(\", \")}`; badge.className = \"badge\";\n    }\n  } catch {\n    $(\"#healthBadge\").textContent = \"연결 오류\";\n    $(\"#healthBadge\").className = \"badge bad\";\n  }\n}\n\nfunction showView(name) {\n  $$(\".view\").forEach((v) => v.classList.add(\"hidden\"));\n  $(`#view-${name}`).classList.remove(\"hidden\");\n  $$(\".nav\").forEach((n) => n.classList.toggle(\"active\", n.dataset.view === name));\n  if (name === \"campaigns\") loadCampaigns();\n  if (name === \"logs\") loadLogs();\n}\n\nfunction updatePreview() {\n  $(\"#previewOpening\").textContent = $(\"#openingText\").value || \"첫 DM\";\n  $(\"#previewResource\").textContent = $(\"#resourceText\").value || \"자료 메시지\";\n  $(\"#previewFollow\").style.display = $(\"#requireFollow\").checked ? \"block\" : \"none\";\n  $(\"#previewResourceBtn\").href = $(\"#resourceUrl\").value || \"#\";\n}\n\nfunction formData() {\n  return {\n    name: $(\"#name\").value,\n    media_id: $(\"#mediaId\").value || \"*\",\n    trigger_mode: $(\"input[name=trigger]:checked\").value,\n    keywords: $(\"#keywords\").value.split(\",\").map((s) => s.trim()).filter(Boolean),\n    opening_text: $(\"#openingText\").value,\n    require_follow: $(\"#requireFollow\").checked,\n    resource_text: $(\"#resourceText\").value,\n    resource_url: $(\"#resourceUrl\").value,\n    active: $(\"#active\").checked\n  };\n}\n\nasync function saveCampaign() {\n  if (!adminKey) return $(\"#adminDialog\").showModal();\n  try {\n    const data = formData();\n    if (!data.resource_url) throw new Error(\"자료 링크를 입력해주세요.\");\n    if (data.trigger_mode === \"keywords\" && !data.keywords.length) throw new Error(\"댓글 키워드를 하나 이상 입력해주세요.\");\n    if (editingId) await api(`/api/campaigns/${editingId}`, { method: \"PUT\", body: JSON.stringify(data) });\n    else await api(\"/api/campaigns\", { method: \"POST\", body: JSON.stringify(data) });\n    notice(editingId ? \"자동화를 수정했습니다.\" : \"자동화를 저장했습니다.\");\n    resetForm();\n  } catch (e) { notice(e.message, true); }\n}\n\nfunction resetForm() {\n  editingId = null;\n  $(\"#name\").value = \"안전자료 자동 DM\";\n  $(\"#mediaId\").value = \"*\";\n  $(\"input[name=trigger][value=any]\").checked = true;\n  $(\"#keywords\").value = \"\"; $(\"#keywords\").disabled = true;\n  $(\"#openingText\").value = \"댓글 감사합니다! 요청하신 자료를 보내드릴게요. 먼저 팔로우 여부를 확인해주세요 👇\";\n  $(\"#requireFollow\").checked = true;\n  $(\"#resourceText\").value = \"팔로우 확인 완료! 요청하신 자료입니다 👇\";\n  $(\"#resourceUrl\").value = \"\";\n  $(\"#active\").checked = true;\n  $$(\".media-card\").forEach((x) => x.classList.remove(\"selected\"));\n  updatePreview();\n}\n\nasync function loadMedia() {\n  if (!adminKey) return $(\"#adminDialog\").showModal();\n  const g = $(\"#mediaGrid\");\n  g.innerHTML = \"불러오는 중...\";\n  try {\n    const data = await api(\"/api/media\");\n    g.innerHTML = \"\";\n    for (const m of data.media) {\n      const c = document.createElement(\"div\"); c.className = \"media-card\"; c.dataset.id = m.id;\n      const img = document.createElement(\"img\"); img.src = m.thumbnail_url || m.media_url || \"\"; img.alt = \"\";\n      const cap = document.createElement(\"div\"); cap.className = \"media-caption\"; cap.textContent = (m.caption || m.media_type || \"게시물\").slice(0, 40);\n      c.append(img, cap);\n      c.onclick = () => { $$(\".media-card\").forEach((x) => x.classList.remove(\"selected\")); c.classList.add(\"selected\"); $(\"#mediaId\").value = m.id; };\n      g.appendChild(c);\n    }\n  } catch (e) { g.innerHTML = \"\"; notice(e.message, true); }\n}\n\nasync function loadCampaigns() {\n  const box = $(\"#campaignList\");\n  if (!adminKey) { box.innerHTML = \"관리자 키를 먼저 입력해주세요.\"; return; }\n  box.innerHTML = \"불러오는 중...\";\n  try {\n    const data = await api(\"/api/campaigns\");\n    box.innerHTML = \"\";\n    if (!data.campaigns.length) box.innerHTML = '<p class=\"muted\">저장된 자동화가 없습니다.</p>';\n    for (const c of data.campaigns) {\n      const el = document.createElement(\"div\"); el.className = \"campaign-card\";\n      el.innerHTML = `<div class=\"row between\"><div><b>${esc(c.name)}</b><div class=\"meta\">미디어: ${esc(c.media_id)} · 조건: ${c.trigger_mode === \"any\" ? \"모든 댓글\" : esc(c.keywords.join(\", \"))} · ${c.active ? \"활성\" : \"꺼짐\"}</div></div><div class=\"row\"><button class=\"ghost edit\">수정</button><button class=\"ghost del\">삭제</button></div></div>`;\n      el.querySelector(\".edit\").onclick = () => editCampaign(c);\n      el.querySelector(\".del\").onclick = () => deleteCampaign(c.id);\n      box.appendChild(el);\n    }\n  } catch (e) { box.innerHTML = \"\"; notice(e.message, true); }\n}\n\nfunction editCampaign(c) {\n  editingId = c.id;\n  $(\"#name\").value = c.name; $(\"#mediaId\").value = c.media_id;\n  $(`input[name=trigger][value=${c.trigger_mode}]`).checked = true;\n  $(\"#keywords\").disabled = c.trigger_mode !== \"keywords\"; $(\"#keywords\").value = (c.keywords || []).join(\", \");\n  $(\"#openingText\").value = c.opening_text; $(\"#requireFollow\").checked = c.require_follow;\n  $(\"#resourceText\").value = c.resource_text; $(\"#resourceUrl\").value = c.resource_url; $(\"#active\").checked = c.active;\n  updatePreview(); showView(\"builder\"); notice(\"수정 후 ‘자동화 저장’을 누르세요.\");\n}\n\nasync function deleteCampaign(id) {\n  if (!confirm(\"이 자동화를 삭제할까요?\")) return;\n  try { await api(`/api/campaigns/${id}`, { method: \"DELETE\" }); await loadCampaigns(); }\n  catch (e) { notice(e.message, true); }\n}\n\nasync function loadLogs() {\n  const body = $(\"#logBody\");\n  if (!adminKey) { body.innerHTML = '<tr><td colspan=\"5\">관리자 키를 먼저 입력해주세요.</td></tr>'; return; }\n  try {\n    const data = await api(\"/api/logs\");\n    body.innerHTML = data.logs.map((l) => `<tr><td>${esc(l.created_at || \"\")}</td><td>${esc(l.username || \"-\")}</td><td>${esc(l.media_id || \"-\")}</td><td>${esc(l.status)}</td><td>${esc(l.detail || \"\")}</td></tr>`).join(\"\") || '<tr><td colspan=\"5\">아직 로그가 없습니다.</td></tr>';\n  } catch (e) { notice(e.message, true); }\n}\n\nasync function testAccount() {\n  try { const d = await api(\"/api/account\"); $(\"#setupResult\").textContent = JSON.stringify(d, null, 2); }\n  catch (e) { $(\"#setupResult\").textContent = e.message; }\n}\n\nasync function subscribe() {\n  try { const d = await api(\"/api/subscribe\", { method: \"POST\" }); $(\"#setupResult\").textContent = JSON.stringify(d, null, 2); }\n  catch (e) { $(\"#setupResult\").textContent = e.message; }\n}\n\nfunction esc(s) { return String(s ?? \"\").replace(/[&<>'\"]/g, (c) => ({\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",\"'\":\"&#39;\",'\"':\"&quot;\"}[c])); }\n\n$$(\".nav\").forEach((n) => n.onclick = () => showView(n.dataset.view));\n$(\"#adminBtn\").onclick = () => { $(\"#adminKeyInput\").value = adminKey; $(\"#adminDialog\").showModal(); };\n$(\"#saveAdminKey\").onclick = () => { adminKey = $(\"#adminKeyInput\").value.trim(); localStorage.setItem(\"ig_admin_key\", adminKey); setTimeout(refreshHealth, 50); };\n$(\"#loadMediaBtn\").onclick = loadMedia;\n$(\"#allMediaBtn\").onclick = () => { $(\"#mediaId\").value = \"*\"; $$(\".media-card\").forEach((x) => x.classList.remove(\"selected\")); };\n$(\"#saveBtn\").onclick = saveCampaign;\n$(\"#resetBtn\").onclick = resetForm;\n$(\"#refreshCampaigns\").onclick = loadCampaigns;\n$(\"#refreshLogs\").onclick = loadLogs;\n$(\"#testAccountBtn\").onclick = testAccount;\n$(\"#subscribeBtn\").onclick = subscribe;\n$$(\"input[name=trigger]\").forEach((r) => r.onchange = () => { $(\"#keywords\").disabled = r.value !== \"keywords\" || !r.checked; });\n[\"#openingText\", \"#resourceText\", \"#requireFollow\", \"#resourceUrl\"].forEach((id) => $(id).addEventListener(\"input\", updatePreview));\n$(\"#webhookUrl\").textContent = `${location.origin}/webhook`;\nupdatePreview(); refreshHealth();\n\n</script>\n</body>\n</html>\n";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    try {
      if (url.pathname === "/webhook" && request.method === "GET") {
        return verifyWebhook(url, env);
      }

      if (url.pathname === "/webhook" && request.method === "POST") {
        const raw = await request.text();
        const appSecret = getMetaAppSecret(env);
        if (appSecret) {
          const ok = await verifyMetaSignature(raw, request.headers.get("x-hub-signature-256"), appSecret);
          if (!ok) return json({ ok: false, error: "invalid webhook signature" }, 401);
        }
        let payload;
        try { payload = JSON.parse(raw); }
        catch { return json({ ok: false, error: "invalid json" }, 400); }
        ctx.waitUntil(processWebhook(payload, env).catch((e) => console.error("webhook background error", e)));
        return new Response("EVENT_RECEIVED", { status: 200 });
      }

      if ((url.pathname === "/" || url.pathname === "/index.html") && request.method === "GET") {
        return new Response(INDEX_HTML, { status: 200, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
      }
      if (url.pathname === "/favicon.ico") return new Response(null, { status: 204 });

      if (url.pathname.startsWith("/api/")) {
        if (url.pathname === "/api/campaigns" || url.pathname.startsWith("/api/campaigns/") || url.pathname === "/api/logs") {
          requireDB(env);
          await ensureSchema(env);
        }
        return await handleApi(request, env, url);
      }
      return new Response("Not Found", { status: 404 });
    } catch (err) {
      console.error("worker route error", { path: url.pathname, message: errorMessage(err), stack: err?.stack });
      const status = Number.isInteger(err?.status) ? err.status : 500;
      return json({ ok: false, error: errorMessage(err), stage: url.pathname }, status);
    }
  }
};

async function handleApi(request, env, url) {
  if (url.pathname === "/api/health" && request.method === "GET") {
    const dbState = await dbHealth(env);
    return json({
      ok: true,
      db: dbState.ok,
      dbError: dbState.error || "",
      metaConfigured: Boolean(env.IG_ACCESS_TOKEN),
      webhookConfigured: Boolean(env.VERIFY_TOKEN && getMetaAppSecret(env)),
      appSecretConfigured: Boolean(getMetaAppSecret(env)),
      adminConfigured: Boolean(env.ADMIN_KEY),
      apiVersion: apiVersion(env)
    });
  }

  if (url.pathname === "/api/account" && request.method === "GET") {
    requireAdmin(request, env);
    requireToken(env);
    const own = await getOwnAccount(env, true);
    return json({
      ok: true,
      account: own,
      message: "Instagram 토큰 연결 성공",
      note: "IG_USER_ID/IG_USERNAME은 선택 사항이며 토큰에서 자동 확인됩니다."
    });
  }

  if (url.pathname === "/api/diagnostics" && request.method === "GET") {
    requireAdmin(request, env);
    const result = {
      ok: true,
      apiVersion: apiVersion(env),
      hasAccessToken: Boolean(env.IG_ACCESS_TOKEN),
      hasAdminKey: Boolean(env.ADMIN_KEY),
      hasVerifyToken: Boolean(env.VERIFY_TOKEN),
      hasMetaAppSecret: Boolean(getMetaAppSecret(env)),
      configuredUserId: env.IG_USER_ID || "",
      configuredUsername: env.IG_USERNAME || ""
    };
    if (env.IG_ACCESS_TOKEN) {
      try { result.account = await getOwnAccount(env, true); }
      catch (e) { result.ok = false; result.metaError = errorMessage(e); }
    }
    return json(result, result.ok ? 200 : 502);
  }

  if (url.pathname === "/api/media" && request.method === "GET") {
    requireAdmin(request, env);
    requireToken(env);
    const data = await metaRequest(env, "/me/media", {
      query: { fields: "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp", limit: "30" }
    });
    return json({ ok: true, media: data.data || [] });
  }

  if (url.pathname === "/api/subscribe" && request.method === "POST") {
    requireAdmin(request, env);
    requireToken(env);
    const own = await getOwnAccount(env);
    const result = await metaRequest(env, `/${encodeURIComponent(own.user_id)}/subscribed_apps`, {
      method: "POST",
      body: { subscribed_fields: ["comments", "messages", "messaging_postbacks"] }
    });
    return json({ ok: true, result, ig_user_id: own.user_id });
  }

  if (url.pathname === "/api/campaigns" && request.method === "GET") {
    requireAdmin(request, env);
    const { results } = await env.DB.prepare("SELECT * FROM campaigns ORDER BY id DESC").all();
    return json({ ok: true, campaigns: results.map(normalizeCampaign) });
  }

  if (url.pathname === "/api/campaigns" && request.method === "POST") {
    requireAdmin(request, env);
    const body = await readJsonBody(request);
    const c = sanitizeCampaign(body);
    const r = await env.DB.prepare(`INSERT INTO campaigns (name, media_id, trigger_mode, keywords_json, opening_text, require_follow, resource_text, resource_url, active, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`)
      .bind(c.name, c.media_id, c.trigger_mode, JSON.stringify(c.keywords), c.opening_text, c.require_follow ? 1 : 0, c.resource_text, c.resource_url, c.active ? 1 : 0).run();
    return json({ ok: true, id: r.meta?.last_row_id });
  }

  const campaignMatch = url.pathname.match(/^\/api\/campaigns\/(\d+)$/);
  if (campaignMatch && request.method === "PUT") {
    requireAdmin(request, env);
    const id = Number(campaignMatch[1]);
    const c = sanitizeCampaign(await readJsonBody(request));
    await env.DB.prepare(`UPDATE campaigns SET name=?, media_id=?, trigger_mode=?, keywords_json=?, opening_text=?, require_follow=?, resource_text=?, resource_url=?, active=?, updated_at=datetime('now') WHERE id=?`)
      .bind(c.name, c.media_id, c.trigger_mode, JSON.stringify(c.keywords), c.opening_text, c.require_follow ? 1 : 0, c.resource_text, c.resource_url, c.active ? 1 : 0, id).run();
    return json({ ok: true });
  }

  if (campaignMatch && request.method === "DELETE") {
    requireAdmin(request, env);
    await env.DB.prepare("DELETE FROM campaigns WHERE id=?").bind(Number(campaignMatch[1])).run();
    return json({ ok: true });
  }

  if (url.pathname === "/api/logs" && request.method === "GET") {
    requireAdmin(request, env);
    const { results } = await env.DB.prepare("SELECT id,event_key,username,media_id,campaign_id,status,detail,created_at FROM event_logs ORDER BY id DESC LIMIT 100").all();
    return json({ ok: true, logs: results });
  }

  if (url.pathname === "/api/test-follower" && request.method === "POST") {
    requireAdmin(request, env);
    requireToken(env);
    const { igsid } = await readJsonBody(request);
    if (!igsid) return json({ ok: false, error: "igsid required" }, 400);
    const profile = await getFollowerState(env, String(igsid));
    return json({ ok: true, profile });
  }

  return json({ ok: false, error: "not found" }, 404);
}

function verifyWebhook(url, env) {
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  if (mode === "subscribe" && env.VERIFY_TOKEN && token === env.VERIFY_TOKEN) {
    return new Response(challenge || "", { status: 200, headers: { "content-type": "text/plain; charset=utf-8" } });
  }
  return new Response("Forbidden", { status: 403 });
}

async function processWebhook(payload, env) {
  if (!env.DB) { console.error("Webhook ignored: D1 binding DB is missing"); return; }
  await ensureSchema(env);
  const entries = Array.isArray(payload?.entry) ? payload.entry : [];
  for (const entry of entries) {
    if ((entry.field === "comments" || entry.field === "live_comments") && entry.value) await processComment(entry.value, env);
    for (const change of Array.isArray(entry.changes) ? entry.changes : []) {
      if ((change.field === "comments" || change.field === "live_comments") && change.value) await processComment(change.value, env);
    }
    for (const m of Array.isArray(entry.messaging) ? entry.messaging : []) await processMessagingEvent(m, env);
  }
}

async function processComment(value, env) {
  const commentId = String(value?.id || "");
  const mediaId = String(value?.media?.id || value?.media_id || "");
  const text = String(value?.text || "");
  const username = String(value?.from?.username || "");
  const commenterIgsid = String(value?.from?.id || "");

  console.log("COMMENT WEBHOOK RECEIVED", {
    commentId,
    mediaId,
    username,
    text,
    commenterIgsid
  });

  if (!commentId || !mediaId) {
    console.warn("COMMENT IGNORED: missing commentId or mediaId", JSON.stringify(value));
    return;
  }

  // 같은 프로페셔널 계정이 자기 게시물에 단 댓글은 제외합니다.
  // 팔로워/비팔로워 여부는 여기서 검사하지 않습니다.
  const own = await getOwnAccount(env).catch(() => null);
  if (own && commenterIgsid && commenterIgsid === String(own.user_id)) {
    console.log("COMMENT IGNORED: self comment", { commentId, username });
    return;
  }
  if (own && username && username.toLowerCase() === String(own.username || "").toLowerCase()) {
    console.log("COMMENT IGNORED: self username", { commentId, username });
    return;
  }

  const eventKey = `comment:${commentId}`;

  // Meta가 같은 Webhook을 재전송해도 같은 댓글에는 DM을 중복 발송하지 않습니다.
  const insert = await env.DB.prepare(
    "INSERT OR IGNORE INTO event_logs(event_key,username,media_id,status,detail,created_at) VALUES(?,?,?,'received',?,datetime('now'))"
  ).bind(eventKey, username, mediaId, text.slice(0, 500)).run();

  if (!insert.meta?.changes) {
    console.log("COMMENT IGNORED: duplicate webhook", { commentId });
    return;
  }

  // 선택한 릴스/게시물 또는 * 전체 게시물 자동화를 찾습니다.
  const { results } = await env.DB.prepare(
    "SELECT * FROM campaigns WHERE active=1 AND (media_id=? OR media_id='*') ORDER BY id DESC"
  ).bind(mediaId).all();

  const campaignRaw = results.find((row) => campaignMatches(row, text));

  if (!campaignRaw) {
    await updateLog(env, eventKey, "ignored", `no campaign matched / comment=${text}`);
    console.log("COMMENT IGNORED: no campaign matched", { mediaId, text });
    return;
  }

  const campaign = normalizeCampaign(campaignRaw);

  try {
    // 핵심: 댓글 직후에는 팔로우 여부를 조회하지 않습니다.
    // 팔로워/비팔로워 관계없이 댓글 ID를 사용해 첫 Private Reply DM을 보냅니다.
    if (campaign.require_follow) {
      const sent = await sendOpeningPrivateReply(env, commentId, campaign);
      const igsid = String(sent?.recipient_id || commenterIgsid || "");

      await savePending(env, igsid, username, campaign.id, commentId, false);
      await updateCampaignLog(
        env,
        eventKey,
        campaign.id,
        "dm_sent",
        `recipient:${igsid || "unknown"} / message:${sent?.message_id || "unknown"}`
      );

      console.log("AUTO DM SENT", {
        username,
        commentId,
        igsid,
        messageId: sent?.message_id || "",
        campaignId: campaign.id
      });
      return;
    }

    // 팔로우 확인 옵션을 끈 자동화는 첫 Private Reply에서 자료를 바로 보냅니다.
    const sent = await sendResourcePrivateReply(env, commentId, campaign);
    const igsid = String(sent?.recipient_id || commenterIgsid || "");

    await savePending(env, igsid, username, campaign.id, commentId, true);
    await updateCampaignLog(
      env,
      eventKey,
      campaign.id,
      "resource_sent",
      `recipient:${igsid || "unknown"} / message:${sent?.message_id || "unknown"}`
    );

    console.log("RESOURCE PRIVATE REPLY SENT", {
      username,
      commentId,
      igsid,
      messageId: sent?.message_id || "",
      campaignId: campaign.id
    });
  } catch (err) {
    const message = errorMessage(err);
    await updateLog(env, eventKey, "error", message.slice(0, 900));
    console.error("AUTO DM FAILED", {
      username,
      commentId,
      mediaId,
      error: message
    });
  }
}

async function processMessagingEvent(m, env) {
  if (m?.message?.is_echo) return;
  const senderId = String(m?.sender?.id || "");
  if (!senderId) return;
  const payload = String(m?.postback?.payload || m?.message?.quick_reply?.payload || "");
  const text = String(m?.message?.text || "").trim();

  if (payload.startsWith("FOLLOW_CHECK:")) {
    const campaignId = Number(payload.split(":")[1]);
    if (campaignId) await verifyAndDeliver(env, senderId, campaignId);
    return;
  }
  if (/팔로우\s*확인|팔로우\s*완료|follow\s*(check|done)/i.test(text)) {
    const pending = await env.DB.prepare("SELECT campaign_id FROM pending_users WHERE igsid=?").bind(senderId).first();
    if (pending?.campaign_id) await verifyAndDeliver(env, senderId, Number(pending.campaign_id));
  }
}

async function verifyAndDeliver(env, igsid, campaignId) {
  const campaignRaw = await env.DB.prepare("SELECT * FROM campaigns WHERE id=? AND active=1").bind(campaignId).first();
  if (!campaignRaw) return;
  const campaign = normalizeCampaign(campaignRaw);
  if (!campaign.require_follow) { await sendResource(env, igsid, campaign); return; }

  const profile = await getFollowerState(env, igsid);
  if (profile?.is_user_follow_business === true) {
    await sendResource(env, igsid, campaign);
    await env.DB.prepare("UPDATE pending_users SET delivered_at=datetime('now'),updated_at=datetime('now') WHERE igsid=?").bind(igsid).run();
  } else {
    await sendFollowPrompt(env, igsid, campaign.id, "아직 팔로우가 확인되지 않았어요. 팔로우한 뒤 아래 버튼을 다시 눌러주세요 👇");
  }
}

async function sendOpeningPrivateReply(env, commentId, campaign) {
  const own = await getOwnAccount(env);
  const profileUrl = `https://www.instagram.com/${encodeURIComponent(own.username)}/`;

  // 댓글 Private Reply의 첫 메시지는 가장 단순한 text-only 형식으로 보냅니다.
  // 사용자가 이 DM에 응답한 뒤에는 기존 processMessagingEvent()가 후속 흐름을 처리합니다.
  const messageText = [
    campaign.opening_text,
    "",
    `팔로우하기: ${profileUrl}`,
    "",
    "팔로우하셨다면 이 DM에 '팔로우 완료'라고 답장해주세요."
  ].join("\n");

  const body = {
    recipient: { comment_id: commentId },
    message: { text: messageText }
  };

  console.log("PRIVATE REPLY REQUEST", { commentId, campaignId: campaign.id });
  const result = await graphMessage(env, body);
  console.log("PRIVATE REPLY SUCCESS", result);
  return result;
}

async function sendResourcePrivateReply(env, commentId, campaign) {
  const text = campaign.resource_url ? `${campaign.resource_text}\n${campaign.resource_url}` : campaign.resource_text;
  return graphMessage(env, { recipient: { comment_id: commentId }, message: { text } });
}

async function sendFollowPrompt(env, igsid, campaignId, text) {
  const own = await getOwnAccount(env);
  const profileUrl = `https://www.instagram.com/${encodeURIComponent(own.username)}/`;
  const body = {
    recipient: { id: igsid },
    messaging_type: "RESPONSE",
    message: {
      text: `${text}\n${profileUrl}`,
      quick_replies: [{ content_type: "text", title: "팔로우 확인", payload: `FOLLOW_CHECK:${campaignId}` }]
    }
  };
  await graphMessage(env, body);
}

async function sendResource(env, igsid, campaign) {
  const body = campaign.resource_url ? {
    recipient: { id: igsid },
    messaging_type: "RESPONSE",
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: campaign.resource_text,
          buttons: [{ type: "web_url", url: campaign.resource_url, title: "자료 받기" }]
        }
      }
    }
  } : { recipient: { id: igsid }, messaging_type: "RESPONSE", message: { text: campaign.resource_text } };
  try { return await graphMessage(env, body); }
  catch (e) {
    const text = campaign.resource_url ? `${campaign.resource_text}\n${campaign.resource_url}` : campaign.resource_text;
    return graphMessage(env, { recipient: { id: igsid }, messaging_type: "RESPONSE", message: { text } });
  }
}

async function getFollowerState(env, igsid) {
  requireToken(env);
  return metaRequest(env, `/${encodeURIComponent(igsid)}`, {
    query: { fields: "name,username,profile_pic,is_user_follow_business,is_business_follow_user" }
  });
}

let ownAccountCache = null;
async function getOwnAccount(env, force = false) {
  requireToken(env);
  if (!force && ownAccountCache && ownAccountCache.token === env.IG_ACCESS_TOKEN) return ownAccountCache.value;
  if (!force && env.IG_USER_ID && env.IG_USERNAME) {
    const value = { user_id: String(env.IG_USER_ID), username: String(env.IG_USERNAME) };
    ownAccountCache = { token: env.IG_ACCESS_TOKEN, value };
    return value;
  }
  const data = await metaRequest(env, "/me", { query: { fields: "user_id,username" } });
  const userId = String(data?.user_id || data?.id || "");
  const username = String(data?.username || env.IG_USERNAME || "");
  if (!userId || !username) {
    const e = new Error(`Meta /me 응답에 user_id 또는 username이 없습니다: ${JSON.stringify(data)}`);
    e.status = 502;
    throw e;
  }
  const value = { user_id: userId, username };
  ownAccountCache = { token: env.IG_ACCESS_TOKEN, value };
  return value;
}

async function graphMessage(env, body) {
  const own = await getOwnAccount(env);
  return metaRequest(env, `/${encodeURIComponent(own.user_id)}/messages`, { method: "POST", body });
}

async function metaRequest(env, path, { method = "GET", query = {}, body } = {}) {
  requireToken(env);
  const version = apiVersion(env);
  const url = new URL(`https://graph.instagram.com/${version}${path}`);
  for (const [k, v] of Object.entries(query || {})) {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, String(v));
  }
  const headers = { Authorization: `Bearer ${env.IG_ACCESS_TOKEN}`, Accept: "application/json" };
  const init = { method, headers };
  if (body !== undefined) { headers["content-type"] = "application/json"; init.body = JSON.stringify(body); }

  let response;
  try {
    response = await fetch(url.toString(), init);
  } catch (cause) {
    const e = new Error(`Meta API 네트워크 호출 실패: ${cause?.message || String(cause)}`);
    e.status = 502;
    throw e;
  }

  const text = await response.text();
  let data = {};
  try { data = text ? JSON.parse(text) : {}; }
  catch { data = { raw: text.slice(0, 2000) }; }

  if (!response.ok) {
    const metaMessage = data?.error?.message || data?.error?.error_user_msg || data?.raw || `HTTP ${response.status}`;
    const metaCode = data?.error?.code ? ` code=${data.error.code}` : "";
    const e = new Error(`Meta API 오류 (${response.status}${metaCode}): ${metaMessage}`);
    e.status = 502;
    throw e;
  }
  return data;
}

function apiVersion(env) {
  const raw = String(env.META_API_VERSION || "v26.0").trim();
  return /^v\d+\.\d+$/.test(raw) ? raw : "v26.0";
}

function getMetaAppSecret(env) {
  return String(env.META_APP_SECRET || env.APP_SECRET || "").trim();
}

function campaignMatches(row, text) {
  if (row.trigger_mode === "any") return true;
  let keywords = [];
  try { keywords = JSON.parse(row.keywords_json || "[]"); } catch {}
  const lower = String(text || "").toLowerCase();
  return keywords.some((k) => lower.includes(String(k).trim().toLowerCase()));
}

function sanitizeCampaign(body) {
  const trigger_mode = body.trigger_mode === "keywords" ? "keywords" : "any";
  const keywords = Array.isArray(body.keywords) ? body.keywords.map(String).map((s) => s.trim()).filter(Boolean).slice(0, 30) : String(body.keywords || "").split(",").map((s) => s.trim()).filter(Boolean).slice(0, 30);
  const resource_url = String(body.resource_url || "").trim();
  if (resource_url && !/^https:\/\//i.test(resource_url)) {
    const e = new Error("자료 링크는 https:// 로 시작해야 합니다.");
    e.status = 400;
    throw e;
  }
  return {
    name: String(body.name || "새 자동화").trim().slice(0, 100),
    media_id: String(body.media_id || "*").trim() || "*",
    trigger_mode, keywords,
    opening_text: String(body.opening_text || "댓글 감사합니다! 자료를 보내드릴게요.").trim().slice(0, 1000),
    require_follow: body.require_follow !== false,
    resource_text: String(body.resource_text || "팔로우 확인 완료! 요청하신 자료입니다 👇").trim().slice(0, 1000),
    resource_url,
    active: body.active !== false
  };
}

function normalizeCampaign(row) {
  let keywords = [];
  try { keywords = JSON.parse(row.keywords_json || "[]"); } catch {}
  return { ...row, id: Number(row.id), keywords, require_follow: Boolean(row.require_follow), active: Boolean(row.active) };
}

function requireDB(env) {
  if (!env.DB) { const e = new Error("D1 binding DB가 없습니다. Cloudflare Settings > Bindings에서 DB를 연결하세요."); e.status = 500; throw e; }
}

async function ensureSchema(env) {
  requireDB(env);
  const statements = [
    "CREATE TABLE IF NOT EXISTS campaigns (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, media_id TEXT NOT NULL DEFAULT '*', trigger_mode TEXT NOT NULL DEFAULT 'any', keywords_json TEXT NOT NULL DEFAULT '[]', opening_text TEXT NOT NULL, require_follow INTEGER NOT NULL DEFAULT 1, resource_text TEXT NOT NULL, resource_url TEXT NOT NULL DEFAULT '', active INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)",
    "CREATE TABLE IF NOT EXISTS pending_users (igsid TEXT PRIMARY KEY, username TEXT, campaign_id INTEGER NOT NULL, comment_id TEXT, delivered_at TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)",
    "CREATE TABLE IF NOT EXISTS event_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, event_key TEXT NOT NULL UNIQUE, username TEXT, media_id TEXT, campaign_id INTEGER, status TEXT NOT NULL, detail TEXT, created_at TEXT NOT NULL)",
    "CREATE INDEX IF NOT EXISTS idx_campaign_media ON campaigns(media_id,active)",
    "CREATE INDEX IF NOT EXISTS idx_logs_created ON event_logs(created_at)"
  ];
  for (const sql of statements) await env.DB.prepare(sql).run();
}

async function dbHealth(env) {
  if (!env.DB) return { ok: false, error: "D1 binding DB가 없습니다." };
  try { await ensureSchema(env); const r = await env.DB.prepare("SELECT 1 AS ok").first(); return { ok: r?.ok === 1, error: r?.ok === 1 ? "" : "SELECT 1 검사 실패" }; }
  catch (err) { return { ok: false, error: errorMessage(err) }; }
}

async function savePending(env, igsid, username, campaignId, commentId, delivered) {
  if (!igsid) return;
  await env.DB.prepare("INSERT INTO pending_users(igsid,username,campaign_id,comment_id,delivered_at,created_at,updated_at) VALUES(?,?,?,?,?,datetime('now'),datetime('now')) ON CONFLICT(igsid) DO UPDATE SET username=excluded.username,campaign_id=excluded.campaign_id,comment_id=excluded.comment_id,delivered_at=excluded.delivered_at,updated_at=datetime('now')")
    .bind(igsid, username, campaignId, commentId, delivered ? new Date().toISOString() : null).run();
}

async function updateLog(env, eventKey, status, detail) {
  await env.DB.prepare("UPDATE event_logs SET status=?,detail=? WHERE event_key=?").bind(status, detail, eventKey).run();
}

async function updateCampaignLog(env, eventKey, campaignId, status, detail) {
  await env.DB.prepare("UPDATE event_logs SET campaign_id=?,status=?,detail=? WHERE event_key=?").bind(campaignId, status, detail, eventKey).run();
}

function requireAdmin(request, env) {
  if (!env.ADMIN_KEY) { const e = new Error("ADMIN_KEY secret이 설정되지 않았습니다."); e.status = 401; throw e; }
  const got = request.headers.get("x-admin-key") || "";
  if (got !== env.ADMIN_KEY) { const e = new Error("관리자 키가 올바르지 않습니다."); e.status = 401; throw e; }
}

function requireToken(env) {
  if (!env.IG_ACCESS_TOKEN) { const e = new Error("IG_ACCESS_TOKEN secret이 설정되지 않았습니다."); e.status = 400; throw e; }
}

async function verifyMetaSignature(raw, signature, appSecret) {
  if (!signature?.startsWith("sha256=")) return false;
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(appSecret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(raw));
  const hex = [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return timingSafeEqual(hex, signature.slice(7));
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

async function readJsonBody(request) {
  const raw = await request.text();
  if (!raw) return {};
  try { return JSON.parse(raw); }
  catch {
    const e = new Error("요청 본문이 올바른 JSON이 아닙니다.");
    e.status = 400;
    throw e;
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function errorMessage(err) {
  return err instanceof Error ? err.message : String(err);
}
