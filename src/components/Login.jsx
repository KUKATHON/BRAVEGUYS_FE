import styled from 'styled-components';
import { emailState, passwordState, nicknameState } from '../assets/atom';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  position: relative;

  #login-title-text {
    width: 110px;
    height: 35px;
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Pretendard;
    font-weight: 500;
    font-size: 24px;
  }

  #login-button {
    position: absolute;
    top: 600px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    border: none;
  }

  #register-button {
    background-color: #fff;
    color: #548dff;
    border-color: #548dff;
    border-width: 1px;
    position: absolute;
    top: 680px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const LoginForm = styled.div`
  width: 350px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
`

const LoginElement = styled.div`
  margin: 15px 0;
`

function Login() {
  const [userId, setUserId] = useRecoilState(emailState);
  const [userPwd, setUserPwd] = useRecoilState(passwordState);
  const [userName, setUserName] = useRecoilState(nicknameState);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // 아이디(이메일), 비밀번호 일치 여부 확인
    // 맞으면 /prologue 경로로 이동
    navigate('/prologue')
  }

  const handleRegisterClick = () => {
    navigate('/register');
  }
  
  return(
    <LoginContainer>
      <div id='login-title-text'>세이브어스</div>
      <LoginForm>
        <LoginElement>
          <div className='register-login-text'>아이디</div>
          <input type="text" className='register-login-input' placeholder='asdd232@gmail.com' onChange={(e) => { setUserId(e.target.value) }}/>
        </LoginElement>
        <LoginElement>
          <div className='register-login-text'>비밀번호</div>
          <input type="password" className='register-login-input' placeholder='비밀번호를 입력해주세요' onChange={(e) => { setUserPwd(e.target.value) }}/>
        </LoginElement>
      </LoginForm>
      <input type="button" value='로그인하기' id='login-button' className='register-login-button' onClick={handleLoginClick} />
      <input type="button" value='회원가입' id='register-button' className='register-login-button' onClick={handleRegisterClick}/>
    </LoginContainer>
  )
}

export default Login;