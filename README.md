# 팀 워크스페이스

팀 일정 · 중고거래 · 활용툴 · 맛집을 한곳에서 관리하는 사내용 페이지입니다.

## 구성

| 경로 | 설명 |
|---|---|
| `index.html` | 본체 (단일 파일) |
| `config.js` | Supabase 연결 정보 — **배포 전에 채워 넣으세요** |
| `assets.js` | 클레이 아바타·관심사 아이콘 목록 |
| `assets/clay-calendar/` | 이미지 원본 (WebP) |

## 로컬에서 열기

`index.html` 을 브라우저로 열면 됩니다. 별도 빌드가 필요 없습니다.

## 배포

GitHub Pages / Cloudflare Pages / Netlify 등 정적 호스팅이면 어디든 올라갑니다.
루트에 그대로 두면 됩니다.

## 주의

- 이 페이지는 로그인이 없습니다. **주소를 아는 사람은 누구나 열람·수정할 수 있습니다.**
- 반드시 사내 접근 제한(Cloudflare Access 등)을 걸거나, 주소를 팀 밖으로 공유하지 마세요.
- `config.js` 에는 Supabase **anon public key** 만 넣으세요. `service_role` key 는 절대 금지입니다.
