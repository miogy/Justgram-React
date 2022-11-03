import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [btn, setBtn] = useState({
    email: "",
    password: "",
  });

  //4-1.value값을 담을 state를 만듬
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleIdInput = (e) => {
    //3.handleIdInput=>이벤트를 인자로 받음
    const idValue = e.target.value; //e.target.value:이벤트가 일어난 타겟의 value(input의 value값)
    setId(idValue); //4.이벤트가 일어난 요소에 value값(e.target.value)을 가져옴
    // => 이벤트onChange가 일어날때마다 input의 value값을 가져옴
    idValue.includes("@") && pw.length >= 5
      ? setIsValid(true)
      : setIsValid(false); //id => 변경되는 idValue의 값을 받아서 비교
  };
  const handlePwInput = (e) => {
    //3.handlePwInput=>이벤트를 인자로 받음
    const pwValue = e.target.value;
    setPw(pwValue); //4.이벤트가 일어난 요소에 담긴 value값(e.target.value)을 가져옴
    id.includes("@") && pwValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false); //pw => 변경되는 pwValue의 값을 받아서 비교
  };

  const body = {
    username: "jjangrl@gmail.com",
    password: "123456",
  };
  fetch("http://localhost:3000/auth", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => {
      localStorage.setItem("token", json.access_token);
    });

  //1.input에 onChange이벤트 발생, 2.발생시 handleIdInput함수 실행
  return (
    <div className="container">
      <div className="logoWrap">
        <span className="logo-text">Justgram</span>
      </div>

      <div className="formWrap">
        <div className="flex-center loginWrap">
          <input
            id="idForm"
            className="login-input"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
        </div>
        <div className="flex-center loginWrap">
          <input
            id="pwForm"
            className="login-input"
            type="text"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
        </div>

        <div className="btnWrap ">
          <button
            className="btn"
            style={{ backgroundColor: isValid ? "#1f8fff" : "#1f8fff80" }}
            onClick={() => navigate("/main")}
          >
            로그인
          </button>
        </div>
      </div>
      <div className="text">
        <a href="">비밀번호를 잊으셨나요?</a>{" "}
      </div>
    </div>
  );
}

export default Login;
