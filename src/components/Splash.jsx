import styled from 'styled-components';
import splashIcon from '../images/splash_icon.png';
import { useNavigate } from 'react-router-dom';

const SplashContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 71.58px;
    object-fit: contain;
    left: 152px;
    top: 360px;
  }
`

function Splash() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/login');
  }, 3000);

  return (
    <SplashContainer>
        <img src={splashIcon} alt="splash-icon" />
    </SplashContainer>
  )
}

export default Splash;