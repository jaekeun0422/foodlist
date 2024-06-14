import React, { useState } from 'react'
import Foodlist from './Foodlist';
import imgLogo from '../SeoulLogo.png';

const Navbar = () => {

  const [area, setArea] = useState("");
  /*
  const onChange = (e) => {
    setArea(e.target.value);
    console.log(`전달할 값 (${area}) at onChange 함수`);
  }
  const onClick = () => {
    console.log(`전달할 값 (${area}) at onClick 함수`);
    if (area === '') { // input value의 초기값('')을 비교해야 함
      alert("\"서울 구 이름\" 입력하세요 !!!");
      return;
    } 
  }
  */
  function inputArea(e) { // 함수를 실행시킨 Element의 정보를 event로 받아온다(Form)
    e.preventDefault()	
    if (e.target.area.value === '') { // input value의 초기값('')을 비교해야 함
      alert("\"서울 구 이름\" 입력하세요 !!!");
      return;
    } 			
		setArea(e.target.area.value) // event.target.아래에서 지정한 name값.value로 text input에 입력된 값을 사용할 수 있다.
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
          <div className="container px-4 px-lg-5">
            <img className="logo-img" src={imgLogo} alt="로고" />
              <a className="navbar-brand" href="/">서울 관광 음식 정보</a>
              <form className="d-flex" onSubmit={inputArea}>
                <input className="form-control me-2 pop_input" type="text" name="area" placeholder="서울 구 이름" autoFocus />
                <input className="btn btn-outline-success" type="submit" value="검색"/>
              </form>
          </div>
      </nav>
      <header className="bg-white py-5">
          <div className="container px-4 px-lg-5">
              <div className="text-center text-white">
                <li className="imgList">
                  <img className="card-img-top" src="https://www.sto.or.kr/comm/getImage?srvcId=STOMAINBANNER&parentSn=46&fileTy=BANNERTHUMB&fileNo=2" alt="사람들" />
                  <img className="card-img-top" src="https://www.sto.or.kr/comm/getImage?srvcId=STOSMALLBANNER&parentSn=20&fileTy=BANNERTHUMB&fileNo=1" alt="가이드" />
                </li>
              </div>
          </div>
      </header>
      <Foodlist area={area}/>
    </>
  )
}

export default Navbar