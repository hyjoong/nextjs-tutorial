## [리액트 딥다이브 스터디](https://github.com/diving-react/study-react-deepdive/tree/master) 4장 서버사이드 렌더링 프로젝트

## 프로젝트 목적

### 1. 실전 경험으로 서버사이드 렌더링 이해

프로젝트를 통해 Next.js의 SSR, SSG, ISR, On-Demand Revalidation 방식을 직접 적용하며 서버사이드 렌더링에 대해 이해한다.

### 2. 토론글 실습

4장 [토론](https://github.com/diving-react/study-react-deepdive/discussions)에 작성된 토론글에 대해 실습하여 스터디 시간에 의견을 나누고 공유한다.

- [언제 SSR, SSG, ISR방식을 사용할까?](https://github.com/diving-react/study-react-deepdive/discussions/51)
- [Next.js에서 next/image을 사용하는게 좋을까?](https://github.com/diving-react/study-react-deepdive/discussions/53)
- [Next.js에서 next/link를 사용하는게 좋을까?](https://github.com/diving-react/study-react-deepdive/discussions/52)

## ⚠️ 주의 사항

- 루트 경로에 `.env.local`파일을 생성하고 스터디 채팅 방에 공유드린 API키를 추가해주세요

  ```javascript
  // .env.local
  NEXT_PUBLIC_BASE_URL = "https://apiKey";
  ```

- 해당 프로젝트는 Next.js 14버전으로 설정됐습니다. Next.js 13버전부터 next/image의 성능이 개선되어 12버전에서 사용하는 next/image를 사용하고 싶으면 `LegacyImage` 을 이용하세요

  ```javascript
  ❌  // next js 14버전의 next/image
  import Image from "next/image";

  ✅  // next js 12버전의 next/image
  import LegacyImage from "next/legacy/image";
  ```

- next/link의 prefetch는 production 환경에서만 작동하기 때문에 개발 환경이 아닌 prod에서 실행해 주세요.

  ```javascript
  ❌
  yarn dev

  ✅
  yarn build
  yarn start
  ```
