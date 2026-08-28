# IG Auto DM v5

댓글 → 자동 DM(팔로우 확인) → 자료 전송을 처리하는 개인용 Cloudflare Worker입니다.
2026-08-28 기준 Meta "Instagram API with Instagram Login" + Cloudflare Workers + D1 구성입니다.

## 이번 수정에서 고친 것

이전 zip은 **코드 자체는 문법 오류 없이 정상**이었지만(`node --check`, `selftest.mjs` 모두 통과),
**Cloudflare 배포 설정이 미완성**이라 배포/연동이 끝까지 진행되지 못하는 상태였습니다. 구체적으로:

1. **`wrangler.jsonc`에 D1 `database_id`가 없었습니다.** Cloudflare는 이 값이 없으면 빌드/배포를
   그 자리에서 거부합니다("실행이 안 됨"의 가장 유력한 원인). → 아래 D1 생성 절차로 해결.
2. `wrangler.jsonc`의 워커 이름이 `ig-dm-automation-v3`로 남아 있어 실제 배포되는 프로젝트(v5)와
   이름이 어긋나 있었습니다. → `ig-dm-automation-v5`로 통일.
3. 캠페인 저장(`/api/campaigns`) 시 입력값 검증 오류(예: `https://`로 시작하지 않는 링크, 잘못된 JSON)가
   500으로 뭉뚱그려져 원인 파악이 어려웠습니다. → 400 + 명확한 메시지로 분리.
4. Meta API 호출부(`graph.instagram.com`, `/{ig-user-id}/messages`, 웹훅 서명 검증 등)는 공식 문서
   기준으로 다시 확인했고 문제없습니다.

## 준비물 (이미 발급받으신 값)

| 이름 | 필수 여부 | 용도|
|---|---|---|
| `IG_ACCESS_TOKEN` | 필수 | Instagram 사용자 액세스 토큰 |
| `ADMIN_KEY` | 필수 | 관리자 화면(본인) 보호용 임의 비밀번호 |
| `VERIFY_TOKEN` | 웹훅 연결 시 필수 | Meta 웹훅 검증 문자열(직접 정한 임의 값) |
| `APP_SECRET` | 웹훅 연결 시 필수 | Meta 앱 **기본 설정 > App Secret** (Instagram App Secret 아님) |
| `IG_USER_ID` | 선택 | 비워둬도 토큰에서 자동 확인됨 |
| `IG_USERNAME` | 선택 | 비워둬도 토큰에서 자동 확인됨 |

## 배포 절차 (GitHub → Cloudflare, 이후 자동 배포)

### 1) GitHub에 올리기

```bash
git init
git add .
git commit -m "IG Auto DM v5"
git branch -M main
git remote add origin https://github.com/<내계정>/<저장소이름>.git
git push -u origin main
```

### 2) D1 데이터베이스 생성 (한 번만)

로컬에 Node.js가 있다면:

```bash
npm install
npx wrangler login
npx wrangler d1 create ig-dm-automation-db
```

실행하면 아래처럼 `database_id`가 출력됩니다. 이 값을 복사해서 `wrangler.jsonc`의
`"database_id": "REPLACE_WITH_YOUR_D1_DATABASE_ID"` 부분에 그대로 붙여넣고 다시 GitHub에 push하세요.

```jsonc
"d1_databases": [
  { "binding": "DB", "database_name": "ig-dm-automation-db", "database_id": "xxxxxxxx-xxxx-...-xxxx" }
]
```

> 로컬에 Node가 없다면 Cloudflare 대시보드 **Workers & Pages → D1 → Create database**에서 만든 뒤
> 상세 화면에 보이는 Database ID를 같은 방식으로 붙여넣으면 됩니다.

### 3) Cloudflare에서 저장소 연동 (여기서부터 자동화됨)

1. Cloudflare 대시보드 → **Workers & Pages → Create → Workers → Import a repository (Git 연동)**
2. 방금 push한 GitHub 저장소 선택
3. Build command는 비워두거나 기본값 사용 (이 프로젝트는 별도 빌드가 필요 없습니다)
4. 배포 완료 후 **Settings → Bindings**에서 D1 바인딩 `DB`가 `wrangler.jsonc` 설정대로 잡혀 있는지 확인

이렇게 연동해두면 이후에는 **GitHub에 push만 하면 Cloudflare가 자동으로 재배포**합니다(요청하신 자동화).

### 4) 비밀 값(Secrets) 등록

Cloudflare 대시보드 → 방금 만든 Worker → **Settings → Variables and Secrets → Add**에서
아래 값을 **Secret** 타입으로 등록합니다(코드/Git에는 절대 넣지 않습니다):

- `IG_ACCESS_TOKEN`
- `ADMIN_KEY`
- `VERIFY_TOKEN`
- `APP_SECRET`
- (선택) `IG_USER_ID`, `IG_USERNAME`

로컬 CLI로 하고 싶다면:

```bash
npx wrangler secret put IG_ACCESS_TOKEN
npx wrangler secret put ADMIN_KEY
npx wrangler secret put VERIFY_TOKEN
npx wrangler secret put APP_SECRET
```

Secret은 `wrangler.jsonc`(`vars`)와 별개로 Cloudflare 쪽에 저장되므로, 이후 GitHub push로 재배포되어도
**지워지지 않습니다.**

### 5) 배포된 사이트 접속 확인

`https://ig-dm-automation-v5.<본인계정>.workers.dev` 로 접속해 상단 배지를 확인합니다.

- **준비 완료**: 정상. 바로 자동화를 만들면 됩니다.
- **설정 필요: DB**: 2)번 D1 연결이 안 된 것. `database_id` 재확인.
- **설정 필요: Instagram**: `IG_ACCESS_TOKEN` Secret 누락/오타.
- **설정 필요: Webhook**: `VERIFY_TOKEN` 또는 `APP_SECRET` 누락.
- **설정 필요: Admin**: `ADMIN_KEY` Secret 누락.
- 우측 상단 **관리자 키** 버튼을 눌러 방금 등록한 `ADMIN_KEY` 값을 입력해야 캠페인 저장/조회가 됩니다.

### 6) Meta 웹훅 연결

1. Meta 개발자 콘솔 → 해당 앱 → Webhooks (또는 Instagram 제품 설정의 Webhooks)
2. Callback URL: `https://<워커주소>/webhook`
3. Verify token: Cloudflare에 등록한 `VERIFY_TOKEN`과 **동일한 값**
4. 구독 필드: `comments`, `messages`, `messaging_postbacks`
5. 사이트의 **연동 설정** 탭 → **웹훅 구독 자동 설정** 버튼을 누르면 내 Instagram 계정을 앱에
   구독시켜 줍니다(직접 API 호출 대신 버튼으로 자동 처리).
6. **Instagram 연결 테스트** 버튼으로 토큰이 유효한지 바로 확인할 수 있습니다.

### 7) 자동화 만들기

**자동화 만들기** 탭에서 게시물 선택 → 댓글 조건 → 첫 DM 문구 → 팔로우 확인 여부 →
자료 링크(반드시 `https://`)를 입력하고 저장하면 끝입니다.

## 로컬에서 빠르게 검증하기 (선택)

```bash
npm install
npm run check   # 문법 검사
npm test        # index.js 동작을 가짜 Meta API로 검증 (selftest.mjs)
npm run dev      # wrangler dev로 로컬 실행 (.dev.vars 파일에 위 값들을 넣어두면 됩니다)
```

`.dev.vars` 예시(로컬 전용, Git에 커밋하지 마세요):

```
IG_ACCESS_TOKEN=...
ADMIN_KEY=...
VERIFY_TOKEN=...
APP_SECRET=...
```

## 참고 사항

- 개인 계정 1개만 쓰는 용도이므로, Meta 앱을 "테스트 모드"에 두고 본인 계정을 **Instagram 테스터**로
  추가해 발급받은 토큰이면 별도 앱 심사(App Review) 없이 그대로 동작합니다.
- 인스타그램 정책상 외부에서 사용자를 강제로 팔로우시킬 수 없으므로, 이 프로젝트는 "팔로우하기" 버튼
  안내 + "팔로우 확인" API 조회 방식으로 동작합니다(자동 팔로우 유도 아님).
- DM 발송은 Meta의 24시간/사설답장(Private Reply) 정책을 따릅니다. 댓글에는 Private Reply로,
  이후 사용자가 먼저 메시지를 보내야 후속 메시지를 보낼 수 있습니다(코드에 이미 반영됨).
