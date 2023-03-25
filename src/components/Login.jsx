import styled from 'styled-components';

const LoginContainer = styled.div`
  
`

const LoginForm = styled.div`
  
`

function Login() {
  
  return(
    <LoginContainer>
      <LoginForm>
        <div>Log in</div>
        <input type="text" placeholder="이메일"/>
        <input type="password" placeholder="비밀번호"/>
        <input type="submit" />
      </LoginForm>
    </LoginContainer>
  )
}

export default Login;