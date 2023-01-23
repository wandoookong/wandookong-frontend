<img width="1200" alt="Main Banner" src="https://user-images.githubusercontent.com/26430232/212911988-18aa282b-b774-4474-857c-205e109ddebe.png">


## 완두콩 프로젝트 개요

해커톤에서 모르는 사람과 팀이 되어 빠르게 프로젝트를 진행하는 것 처럼 완두콩에서 빠르고 쉽게 사이드 프로젝트와 원하는 팀원을 구할 수 있는 완두콩 플랫폼입니다. 

###### 2022.05.21 ~ 2023.01.31
###### https://wandookongproject.com

## 팀원

<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="width="100px;" alt=""/><br /><sub><b>프로덕트 디자이너</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>프론트엔드 엔지니어</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>백엔드 엔지니어</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>

---
        
## 사용 기술

##### General

- Slack
- Zoom
- Google Meet
- Figma
- Google Analytics
        
##### Development
        
- React
- Typescript
- Emotion
- Nest
- ESLint
- Prettier
- NPM
- Yarn
- Github

## 프로젝트 파일 구조

```
┌── src    
│   ├── @types
│   │    ├── dto              (데이터 전송 객체 타입들의 집합)
│   │    ├── model            ()
│   │    ├── utility          (유틸성 타입들의 집합)
│   ├──  api
│   │    ├── config           (axios config를 관리하기 위한 파일)
│   │    ├── [domain api]     (도메인별 페이지 안에서 호출하는 api 로직들)
│   ├── assets                (전역적으로 사용되는 공통 이미지들의 집합)
│   ├── components            (전역적으로 사용되는 공통 컴포넌트들의 집합)
│   ├── hooks                 (hook의 집합) 
│   ├── modules               (비즈니스 로직과는 상관없는 유틸성 함수들의 집합)         
│   ├── pages                 (react-router의 라우터랑 직접적으로 연결되는 컴포넌트들의 집합)
│   │    ├── configuration    (각 페이지 별로 인증된 사용자)
│   │    ├── [domain page]       
│   │    │     └── components (해당 페이지 안에서만 사용되는 컴포넌트들의 집합)
│   ├── services              (전역적으로 사용되는 비즈니스 로직을 포함하는 함수들의 집합)         
│   └── styles                (각 컴포넌트 내에서 사용되는 공통 스타일 변수들의 집합)
```
