import styled from 'styled-components';
import { useState } from 'react';


const RegisterContainer = styled.div`
  position: relative;

  input::placeholder {
    color: #aaabb5;
  }

  #register-title-text {
    width: 65px;
    height: 23px;
    top: 12.5px;
    margin: 0 auto;
    font-size: 16px;
    color: #888994;
  }

  #welcome-text {
    width: 310px;
    height: 35px;
    position: absolute;
    top: 63px;
    left: 10px;
    font-size: 24px;
  }

  #register-first {
    width: 350px;
    height: 250px;
    position: absolute;
    top: 100px;
    margin: 0 auto;
  }

  #register-second {
    width: 350px;
    height: 400px;
    position: absolute;
    top: 100px;
  }

  .register-input {
    width: 335px;
    height: 48px;
    background: #f4f5f6;
    border-radius: 4px;
    border: none;
  }
`

const RegisterForm = styled.div`
  width: 350px;
  height: 300px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  #register-next-button, #register-submit-button {
    position: absolute;
    top: 510px;
    background-color: #fff;
    border-width: 1px;
  }
`

const RegisterElement = styled.div`
  width: 335px;
  height: 76px;
  margin: 15px 0;
`;

function Register() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [nextClick, setNextClick] = useState(false);
  
  const handleClick = () => {
    setNextClick(true);
  }

  return(
    <RegisterContainer>
        <div id='register-title-text'>회원가입</div>
        <div id='welcome-text'>세이브어스에 오신 것을 환영해요</div>
        <RegisterForm>
          { !nextClick && 
            <div id='register-first'>
              <RegisterElement>
                <div className='register-login-text'>아이디</div>
                <input type="text" className='register-login-input' placeholder='asdd232@gmail.com' onChange={(e) => { setEmail(e.target.value) }}/>
              </RegisterElement>
              <RegisterElement>
                <div className='register-login-text'>비밀번호</div>
                <input type="password" className='register-login-input' placeholder='비밀번호를 입력해주세요' onChange={(e) => { setPwd(e.target.value) }}/>
              </RegisterElement>
              <RegisterElement>
                <div className='register-login-text'>비밀번호 확인</div>
                <input type="password" className='register-login-input' placeholder='비밀번호를 입력해주세요' onChange={(e) => { setPwdConfirm(e.target.value) }}/>
              </RegisterElement>
              <button onClick={handleClick} id='register-next-button' className='common-button' >다음으로</button>
            </div>
          }
          { nextClick &&
            <div id='register-second'>
              <RegisterElement>
                <div className='register-login-text'>닉네임</div>
                <input type="text" className='register-login-input' placeholder='닉네임을 입력해주세요' onChange={(e) => { setNickname(e.target.value) }}/>
              </RegisterElement>
              <input type='submit' value='가입하기' id='register-submit-button' className='common-button' />
            </div>
          }
        </RegisterForm>
    </RegisterContainer>
  )
}

export default Register;