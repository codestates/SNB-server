# 🎤 SNB

<img src="https://songnumberbook.ga/static/media/snb_logo.3845d09d.png" height="100px" />

[SongNumberBook](https://songnumberbook.shop)

노래방에서 노래부르는 시간보다 노래를 고르는 시간이 더 많지 않으셨나요?   
다른사람이 노래를 부를때 핸드폰만 만지며 어떤 노래를 부를지 고민하지 않으셨나요?   
결국 선택된 노래가 어제 부른 그 노래가 아니었나요?   

이제 노래를 검색하고 나만의 리스트에 저장해보세요!

# 🎙 SSP

프로젝트 멤버를 소개해 드립니다!

|팀원|역활|
|:------:|:---:|
|백광호|🏅 Frontend|
|김유상|🏅 Frontend|
|임혜림|🏆 Fullstack|
|이은정|🎖 Backend|

## Retrospection

이은정 (백엔드) /  
내 인생 첫번째 프로젝트.  
의욕은 가득했지만 기획을 하며 점점 커지는 work flow 에 부담스러웠습니다.  
저희는 프론트와 백엔드 역할만 정해두고 각자 테스크카드에서 하나씩 골라서 구현했는데, 이게 좋은 결과를 불러왔다고 생각합니다.  
하고싶은 부분을 고르기 때문에 흥미를 가지고 즐겁게 코딩을 할 수 있었기 때문입니다.  
하루 2번 회의에서 코드리뷰를 통해 더 좋은 코드를 작성할 수 있었고, 원활한 소통으로 프로젝트의 완성도가 높아졌습니다.  
이번 일을 계기로 협업하며 개발하는 것에 두려움이 사라지게 되었습니다. 그리고 우리 팀원들과 함께 할 수 있어서 너무 좋았습니다.  
이 경험이 제 개발자인생의 단단한 기반이 될 것이라고 생각합니다.

<details>
<summary>이은정의 Worklog 📘</summary>
<div markdown="1">    
  
  <div>[백엔드]</div>
  
- 메인서버 구축
  - 세션설정
  - express를 통해 HTTPS 구축
- 회원가입, 로그인, 로그아웃 (세션 기반 인증)
  - 라우팅 및 로직 구현
  - 회원정보와 데이터베이스와 비교 후 추가
- Oauth 2.0 Github 로그인
  - 라우팅 및 로직 구현 
  - 깃허브에서 토큰교환 후 유저정도 클라이언트로 전송
  - 강제 회원가입 구현
- 유저 정보
  - 라우팅 및 로직 구현 
  - 세션확인 후 요청받은 정보 클라이언트에 전송
- 메인서버 최종 점검
  - API 문서와 비교
  - 효율적인 로직으로 리팩토링
  
<div>[프론트엔드]</div>

- Songs
  - 노래목록 UI 구현 및 css
- Search
  - UI 수정 (비율 조정)
- 게스트 로그인 구현
  - UI 및 서버에 요청
- Songlist
  - 노래목록 css 적용
- 로그인, 회원가입
  - 로고 및 css
- Home
  - 로딩화면 구현 
  - 개발자 정보 추가
- Header
  - UI 수정 (비율)

</div>
</details>

김유상 (프론트엔드) /  
Advanced HA를 치루면서 sprint들의 연관성에 대해 조금 알게되었고, 이번 First Project를 하면서 정말 많이 느꼈다.테스트 케이스와 목업 데이터가 없는 상황에서 로직을 구현하고, 잘 작동하는지 확인하는 작업이 처음에 감을 잡기 힘들었고 어색했는데 반복되는 작업을 통해 익숙해지면서 실력이 성장했다고 생각한다. 또 베이스가 없는 상태에서 프론트엔드를 구현하는게 굉장히 할일이 많구나 라는것을 느꼈고 CSR의 한계와 개선점을 느끼게된 순간도 있었다. 그리고 Github를 통한 협업의 중요성과 팀원들의 조화로움이 전체적인 시너지를 낼 수 있다는 것을 실제로 느꼈으며, 장점이 뚜렷한 팀원들과 함께하여 시야의 폭이 넓어졌다는게 체감이 된 뜻깊은 인생 첫 프로젝트였다. 함께한 모두에게 감사하다.

<details>
<summary>김유상의 Worklog 📘</summary>
<div markdown="1">   
  
- Signup Page
  - axios 사용하여 서버에 input value에 따른 회원가입 요청
  - 회원가입 요청후 서버 응답에 따라 Login상태 변경
  - history API 이용하여 routing
  - css: 기본 UI구현
- Header Component
  - input값을 입력받아 해당하는 라우트로 scrap서버에 get 검색 요청
  - 로그아웃 버튼 클릭시 서버에 POST요청 및 state 변경
  - 마이페이지, 로그아웃 버튼에 따른 routing
- Search Page
  - 유저가 헤더에서의 입력한 input value를 받아와 react-hooks를 통해 state관리
  - 이전/다음 버튼 클릭시 axios이용하여 scrap서버에 get요청 및 응답 결과 Song 컴포넌트에 전달
  - 이전/다음 버튼 클릭시 유효성 검사
  - css: flex사용하여 레이아웃 배치
- Addsong Component
  - 선택된 노래를 react-hooks를 이용해 state로 관리
  - 리스트를 입력받아 노래와 함께 axios를 이용해 서버에 POST요청
  - 노래 추가시 유효성 검사
  - css: Addsong 컴포넌트 UI구현
- Song Component
  - Header와 Addsong 컴포넌트에서 전달받은 값을 react-hooks를 이용해 state로 관리
  - 체크박스에 체크된 value를 구분하여 Search페이지에 전달
  - css: Song 컴포넌트 UI구현
- Mypage
  - css: flex사용하여 페이지 레이아웃 배치
  - css: flex사용하여 userInfo 레이아웃 배치
  
</div>
</details>

임혜림 (풀스택) /  
벌써 퍼스트 프로젝트가 끝나다니.. 정말 열심히 했구나 라는 뿌듯함과과 더 열심히 할껄이라는 아쉬움이 공존한다. 우리가 기획한 서비스를 교육기간동안 배운 기술을 베이스로 구현하려 시도했고 부족한 부분들을 스스로 구글링 하여 적용시키기 위해 노력하는 과정에서 말그대로 주말도 없이 밤을 새며 코딩만 한 2주였다. 그러나 지금 보면 아쉬운 점들도 너무 많다. 특히 처음에 빨리 코딩을 하고 싶은 마음에 부족하게 의논이 된 상태로 기획단계를 지나쳐버린 것 같다. 그러다 보니 자꾸 추가적으로 의논해야할 사항들이 발생하고 결과적으로 개발 속도가 조금 더뎌졌다고 생각한다. 하지만 이러한 점들을 기간의 1/3 정도는 회의로 보냈다 생각이 들정도의 지속적인 회의를 통해 극복할 수 있었던 것 같다. 또한 힘들 때 항상 새벽에도 Slack에 들어와 있는 팀원들의 불을 보며 나도 더 열심히 해야겠다 하고 마음을 다잡을 수 있었다ㅎㅎ 지난 2주동안 힘들었지만 소통이 잘 되고 책임감 있는 동료들이 있어서 정말 즐거운 시간이었다.

<details>
<summary>임혜림의 Worklog 📘</summary>
<div markdown="1">   
  
<div>[기획]</div>
  
- 서비스 기획
- UI/UX 디자인

<div>[백엔드]</div>
  
- 크롤링 서버
  - TJ 미디어 검색 결과 크롤링 모듈 구현(axios, cheerio)
  - 크롤링 서버 라우팅 및 구축
  - 오류 발생 시 로그 기록 생성(windston)
  - Let's Encrypt를 이용한 https 인증 구현
- 메인서버
  - 데이터베이스 구축
    - Database 스키마 작성
    - Sequelize 모델 생성 및 관계 설정
    - Sequelize 시드 생성
  - 마이리스트 관리
    - 마이리스트 생성/조회/삭제 요청 처리
    - 마이리스트 내의 노래 추가/제거 요청 처리

<div>[프론트엔드]</div>

- Home
  - 메인 홈페이지 라우팅 및 애니메이션 작성
- Header
  - CSS 및 애니메이션 구현
  - 필터 선택 툴팁 구현
- Modal
  - Modal 컴포넌트 구현
  - props에 따라 다른 종류의 모달 디자인이 적용되도록 수정
- Mypage
  - 컴포넌트 분리 리팩토링
  - 선택된 리스트 Props 관리

</div>
</details>

백광호 (프론트엔드) /  
첫번째 프로젝트 명단을 받았을때부터 팀장을 맡아야 겠다고 생각했었다.  
내가 기술이 뛰어나서가 아니라 내 커뮤니케이션 능력이 어디까지인지 보고싶었다.  
프로젝트를 진행하는동안 다른 팀원들의 기술이 뛰어나 조금은 쭈그러진면도 있고  
상의없이 사용한 라이브러리로 팀원들을 고생시켜 너무 미안하기도 했다.  
아직도 많은 부분에서 부족함이 느껴지고 반성해야될 부분도 상기될 수 있었던 프로젝트였다.  
개인적으로는 프로젝트 결과물에 만족스럽다 고쳐야될 부분들이 부분부분 보이긴 하지만  
첫 프로젝트를 임할때 어떻게든 완성해서 배포라도 하면 선방은 하는것이라고 생각했기 때문이다.  
나는 운이 좋다 이런 부족한 팀장을 따라주는 팀원들을 만난건 이번 프로젝트에서 가장 좋았던 부분이다.  
팀원분들에게 프로젝트를 함께 할수 있어 감사하다고 전한다.

<details>
<summary>백광호의 Worklog 📘</summary>
<div markdown="1">       

- UI Design 문서 작성
  - 로그인, 홈, 검색페이지, 마이 페이지의 와이어 프레임 작성
  - 구현된 와이어 프레임을 바탕으로 데이터 흐름에 대한 내용 정립
- GIthub Repository 관리
  - Issues 생성 및 Pull Requests, branch 관리
  - Reademe.md, wiki 작성
- Deploy 환경 구축
  - AWS EC2, RDS, S3를 사용하여 클라이언트와 서버 배포 환경 세팅
  - Freenom, AWS Route53을 사용하여 도메인 설정을 한 후, Lets Encrypt, AWS Cloud Front로 HTTPS 적용
- 백엔드, 프론트엔드 작업 환경 설정
  - Node.js, React, Dotenv, ESLint의 환경 설정 및 연결 작업 진행
- Login & Signup
  - Login, Signup UI 제작
  - 회원가입, 로그인 시 유효성 검사 기능 추가
  - Oauth 2.0 Github 로그인 Authorization Code 발급 구현
- Mypage
  - Mypage UI 구현
  - Mylist 추가, 삭제 기능 구현 및 UI 제작
  - Songlist 노래 삭제 기능 구현 및 UI 제작
- Songs
  - 체크박스 UI 제작

</div>
</details>

# 💾 Tech Stack

## Common
- ESLint
- Dotenv
- Axios

## Front
- React
- React Hooks
- React Route Dom
- Styled Components

## Back
- Node.js
- MySQL
- Sequelize
- PM2
- AWS(EC2, RDS, S3, Route53, CloudFront)
- Cheerio

# 🛠 Architecture

### Frontend Flowchart

![Flowchart-front](https://user-images.githubusercontent.com/72400381/112439584-a2ba7a80-8d8c-11eb-8404-7d1f71c6a9ca.jpeg)

### Main-Server Flowchart

![Flowchart](https://user-images.githubusercontent.com/72400381/112439224-33dd2180-8d8c-11eb-8150-088b0a3c717d.jpeg)

### Scrap-Server Flowchart

![Flowchart-scrap](https://user-images.githubusercontent.com/72400381/112439434-70a91880-8d8c-11eb-9a26-ec4aca82a9b0.jpeg)

# Project Detail

[SNB Wiki](https://github.com/codestates/SNB-server/wiki)
