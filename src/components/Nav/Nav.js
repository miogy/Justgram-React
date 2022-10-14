import React, { useState } from "react";
import './Nav.scss';
import Profile from "../../pages/Main/Profile";
import { NavLink, useNavigate, useEffect} from "react-router-dom";

function Nav(){
  const [profile,setProfile] = useState();
  const navigate = useNavigate();

  const profilePage=()=>{
    setProfile(<Profile />)
  }

  const [userEmail,setUserEmail]=useState();

//postman에서 토큰을 가져옴
  useEffect(()=>{
    fetch('http://auth.jaejun.me:10010/me',{
      method:'GET',
      headers:{
        Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0NiwiaWF0IjoxNjYxMjI2NjExLCJleHAiOjE2NjM5MDUwMTF9.X_OvYFqndX7RQomOl0Xn4qy4RX28s2kvkPXWhsKo_Uc"
      },
    })
    .then((res)=>res.json())
    .then((data)=> data.email !== undefined
    ? setUserEmail(data)
    : navigate('/login'))
  },[])
  //true일때와 false일때 동작이 달라짐 => 삼항연산자 사용

  return(
    <header className="headerWrap">

    <div>
      <NavLink to="/"><img className="logoImg" src="./images/instagram.png"/></NavLink>
      <span className="header-text">Justgram</span>
    </div>

    <div className="v-center">
      <input className="headerSearch paddingLeft" type="search" placeholder="검색"/>
    </div>

    <div className="icon-img v-center">
      <a href="" >
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" /></a>
      <a href="">
      <img className="custom-marginL" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/></a>
      <NavLink to="/profile">
      <img className="custom-marginL" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />{setUserEmail && data.email}
      </NavLink>
    </div>
  </header>
  )
}
export default Nav;