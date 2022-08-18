import React from "react";
import './Nav.scss';

function Nav(){
  return(
    <header className="headerWrap">

    <div>
      <img className="logoImg" src="./images/instagram.png"/>
      <span className="header-text">Justgram</span>
    </div>

    <div className="v-center">
      <input className="headerSearch paddingLeft" type="search" placeholder="검색"/>
    </div>

    <div className="icon-img v-center">
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
      <img className="custom-marginL" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
      <img className="custom-marginL" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
    </div>
  </header>
  )
}
export default Nav;