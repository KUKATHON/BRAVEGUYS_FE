import styled from 'styled-components';
import { useState } from 'react';
import emailState from '../../states/emailState';
import passwordState from '../../states/passwordState';
import nicknameState from '../../states/nicknameState';
import { useRecoilState, useRecoilValue } from 'recoil';

const RegisterContainer = styled.div`
  position: relative;

  #register-text {
    width: 65px;
    height: 23px;
    top: 12.5px;
    margin: 0 auto;
    font-size: 16px;
    color: #888994;
  }

  #welcome-text {
    width: 297px;
    height: 35px;
    font-size: 24px;
  }

  .register-input {
    width: 335px;
    height: 48px;
    background: #f4f5f6;
    border-radius: 4px;
    border: none;
  }
`

function Register() {
  const [email, setEmail] = useRecoilState(emailState);
  const [pwd, setPwd] = useRecoilState(passwordState);
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [nextClick, setNextClick] = useState(false);
  
  const handleClick = () => {
    setNextClick(true);
  }

  return(
    <RegisterContainer>
        <div id='register-text'>회원가입</div>
        <div id='welcome-text'>세이브어스에 오신 것을 환영해요</div>
        { !nextClick && 
          <div id='register-first' >
            <div>이메일</div>
            <input type="text" className='register-input' placeholder='asdd232@gmail.com' onChange={(e) => { setEmail(e.target.value) }}/>
            <div>비밀번호</div>
            <input type="password" className='register-input' placeholder='비밀번호를 입력해주세요' onChange={(e) => { setPwd(e.target.value) }}/>
            <div>비밀번호 확인</div>
            <input type="password" className='register-input' placeholder='비밀번호를 입력해주세요' onChange={(e) => { setPwdConfirm(e.target.value) }}/>
            <button onClick={handleClick} className='register-login-button' >다음으로</button>
          </div>
        }
        { nextClick &&
          <div id='register-second' >
            <div>이메일</div>
            <input type="text" className='register-input' placeholder='닉네임을 입력해주세요' onChange={(e) => { setNickname(e.target.value) }}/>
            <input type='submit' value='가입하기' className='register-login-button' />
          </div>
        }
    </RegisterContainer>
  )
}

export default Register;