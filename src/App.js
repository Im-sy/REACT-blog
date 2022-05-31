/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleFix] = useState(['맛집 추천', '최애 맛집', '존맛탱']);
  let [like, likeFix] = useState(0);
  let posts = '곱창 막창 먹고 싶다';

  function titleButton() {
    var newArray = [...title];
    newArray[0] = '대존맛 맛집 추천';
    titleFix(newArray);
    // titleFix(['대존맛 맛집 추천', '최애 맛집', '존맛탱']);
  }
  
  function titleSort() {
    var newArray = [...title];
    newArray.sort();
    titleFix(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'green', fontSize:'30px'}}>Blog</div>
      </div>
      <button onClick={titleButton}>글제목변경</button>
      <button onClick={titleSort}>글제목정렬</button>
      <div className="list">
        <h3>{title[0]} <span onClick={() => {likeFix(like+1)}}>👍</span> {like} </h3>
        <p>2022-05-31</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2022-05-31</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2022-05-31</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
