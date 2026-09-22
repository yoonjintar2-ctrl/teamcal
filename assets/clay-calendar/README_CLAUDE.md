# 팀 캘린더 클레이 에셋 — 통합 122종

이 폴더는 1~3차 72종과 4차 신규 50종을 합친 통합본입니다.
아바타 61종, 관심사 61종입니다. PNG와 WebP는 같은 에셋의 두 포맷이며 수량을 중복 집계하지 않습니다.

## 적용

1. 이 폴더의 내용을 프로젝트 `public/assets/clay-calendar/`에 복사하세요.
2. `/assets/clay-calendar/manifest.json`을 불러오고 `avatars`와 `interests` 배열을 사용하세요.
3. 화면에서는 `webp` 경로를 기본으로 사용하고 PNG는 고해상도용으로 사용하세요.
4. URL은 `/assets/clay-calendar/` 뒤에 매니페스트의 상대 경로를 붙입니다.
5. 저장된 사용자 선택은 파일명 대신 고유 `id`로 관리하세요. 이전 ID는 그대로 유지했습니다.
6. `object-fit: contain`을 사용하세요. 원형 마스크나 배경 배지를 씌우지 마세요.
7. 한·영 이름과 tags로 검색하세요. 각 파일은 1개 독립 이미지입니다.

```tsx
<img src={`/assets/clay-calendar/${asset.webp}`} alt={asset.titleKo}
     width={64} height={64} style={{objectFit:'contain'}} />
```

## 구성

- `avatars/png`, `interests/png`: 투명 PNG 1024×1024
- `avatars/webp`, `interests/webp`: 투명 WebP 512×512
- `manifest.json`: 전체 122종 통합 목록
- `batch-004-manifest.json`: 이번 신규 50종만 추린 목록
- `preview.html`: 인터넷 연결 없이 열 수 있는 검색형 미리보기
- `clay-assets.ts`: TypeScript 경로·검색 도우미
- `generation-prompts.json`: 신규 제작 명세
- `validation.json`: 수량·투명도·해상도·파일 해시 검증 결과

신규 아바타는 avatar-037~avatar-061이며 모두 사복입니다.
기존 1~3차 이미지는 그대로 포함했습니다. 최초 SVG 팩은 이 래스터 통합본에 포함하지 않았습니다.
