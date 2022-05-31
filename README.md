## 리액트 세팅

- node.js 설치(최신버전) 
  - create-react-app 사용하기 위해서
  - npm 툴 사용가능

`npx create-react-app blog`

`cd blog`

`npm start`

- App.js --(index.js)--> index.html



## 블로그 만들기

- `function App() {return ()}` 안에 html 만드는 것처럼 만들기

- html처럼 생긴 JSX

- 태그에 class 주기 : `<div className="클래스명">`

- App.css에 class에 해당하는 스타일 만들기

- 데이터 바인딩 쉽다

  - 데이터를 html에 넣는 작업 : `{변수명}`

  - 자바 스크립트의 경우 `document.getElementById()...` 해야하는데 리액트는 그럴 필요 없음

  - src, id, href 등 속성에도 `{변수명, 함수 등}` 심지어 class명에도 가능

- JSX에서 style 속성 넣을 때
  - `style={object 자료형으로 만든 스타일}` 
  - 속성명은 camelCase 사용(font-size -> fontSize)
  - 클래스 만드는 게 나을수도
  - 데이터 바인딩 가능

- 데이터는 

  1. 변수에 넣거나

  2. state에 넣거나

- state

  - 변수 대신 쓰는 데이터 저장공간
  - useState()를 이용해 만들기
  - 문자 숫자 array object 다 저장 가능

  - `import React, {useState} from 'react';` 상단에 첨부

  - `useState(데이터)` -> `[데이터, 데이터 수정 함수]` 배열 준다

> (참고) ES6 destructuring 문법 : array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
>
> ```
> var [a,b] = [10, 100]; // a에 10, b에 100 넣는다
> ```

- 왜 굳이 state 쓰냐?
  - 웹이 App처럼 동작하게 만들고 싶어서
  - state 변경되면 html이 자동으로 재렌더링된다. html이 새로고침 없이 스무스하게 변경. 
  - 자주 바뀌거나 중요한 데이터는 변수말고 state로 저장해서 쓰기

- 터미널 warning 
  - eslint가 잡아주는 문법 체크사항
  - 보기 싫을 땐 `/* eslint-disable */`

- 좋아요 기능

  - 이벤트 리스너 대신 `onClick={클릴될 때 실행할 함수}` 또는 `onClick={ () => {실행할 내용} }`

  - state로 좋아요 관리, 바로 변경할 수 없고 useState의 변경함수로만 변경 가능

    - 데이터 대체 : `likeFix(대체할 데이터)`

    - 기존 데이터 반영해서 수정 : `likeFix(like + 1)`

- array 데이터 중 하나의 요소만 수정할 때

	1. `titleFix(['대존맛 맛집 추천', '최애 맛집', '존맛탱']);` 하드코딩

	2. ```js
   function titleButton() {
          var newArray = [...title];
          newArray[0] = '대존맛 맛집 추천';
          titleFix(newArray);
      }
  
- state의 복사본(deep copy: 값공유 없이 서로 독립적인 값 가지는 복사)을 만들어서 수정
	
- 그냥 `var newArray = title`하면 복사가 아니고 값 공유(reference data type)

- App return 안에는 하나의 tag만 가능
  - 여러 tag를 나란히 쓰지 않고 하나의 tag로 묶어서 사용하기
  - 묶을 때 의미없는 div 사용하기 싫다면 `<></>`사용

- HTML 한 단어로 줄여서 쓸 수 있는 방법: Component 문법

  1. 함수 만들고 이름 짓기 (이름은 대문자로 시작)

  2. 축약을 원하는 HTML 넣고

  3. 원하는 곳에서 `<함수명/>`

- Component 장점
  - 관리가 편함
  - 반복출현하는 HTML 덩어리를 Component로 만들기
  - 자주 변경되는 HTML UI를 Component로 만들기
  - 다른 페이지 만들 때 Component 만들기
- Component 단점
  - state 쓸 때 복잡해짐(상위 컴포넌트에서 props) 