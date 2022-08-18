import React,{useState} from "react";
import './Login.scss';
import { useNavigate} from "react-router-dom"; //a태그와 같이 ling가 들어감


function Login(){

  const navigate = useNavigate();

  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [isValid,setIsValid] = useState(false);

  const handleIdInput = (e)=>{
    const idValue = e.target.value;
    setId(idValue);
    //console.log(id)
    idValue.includes('@') && pw.length >=5 ? setIsValid(true) : setIsValid(false)
  } //id => 변경되는 idValue의 값을 받아서 비교
  const handlePwInput = (e)=>{
    const pwValue = e.target.value;
    setPw(pwValue);
    //console.log(pw)
    id.includes('@') && pwValue.length >= 5 ? setIsValid(true) : setIsValid(false);
  }//pw => 변경되는 pwValue의 값을 받아서 비교
  
  
  return(
    <div className="container">
      <div className="logoWrap">
      <span className="logo-text">Justgram</span>
    </div>

    <div className="formWrap">
      <div className="flex-center loginWrap">
        <input id="idForm" className="login-input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" 
        onChange={handleIdInput} 
        />
      </div>
      <div className="flex-center loginWrap">
        <input id="pwForm" className="login-input" type="text" placeholder="비밀번호"
        onChange={handlePwInput} 
        />
        
      </div>  
      
      <div className="btnWrap ">
        <button className="btn"
        //활성화 스타일
        style={{backgroundColor : isValid ? "#1f8fff" : "#1f8fff80" }}
        >로그인</button>
      </div>
    </div>
    <div className="text">
      <a href="">비밀번호를 잊으셨나요?
    </a> </div>
  </div>
  )
}


export default Login;