import React from "react";
import "./Signup.scss";

function Signup(){
  return(
    <div>
      <input id="userId" className="" type="text" placeholder="ID를 입력하세요"/>
      <input id="userPassword" className="" type="text" placeholder="비밀번호를 입력하세요"/>
      <input id="userPasswordCheck" className="" type="text" placeholder="비밀번호를 입력하세요"/>
    </div>
  )
}

export default Signup;