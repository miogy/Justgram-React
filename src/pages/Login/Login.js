import React from "react";
import './Login.scss';
import { Link, useNavigate , useState} from "react-router-dom"; //a태그와 같이 ling가 들어감


function Login(){
  const navigate = useNavigate();
  const goToMain = () =>{
    navigate("/main");
  };

  return(
    <div className="container">
      <div className="logoWrap">
      <span className="logo-text">Justgram</span>
    </div>

    <div className="formWrap">
      <div className="flex-center loginWrap">
        <input id="idForm" className="login-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
      </div>
      <div className="flex-center loginWrap">
        <input id="pwForm" className="login-input" type="text" placeholder="비밀번호" />
      </div>  
      
      <div className="flex-center btnWrap">
        <button className="btn" onClick={goToMain}>로그인</button>
      </div>
    </div>
    <div className="text">
      <Link to="/Signup" /> 비밀번호를 잊으셨나요?
    </div>
  </div>
  )
}


export default Login;