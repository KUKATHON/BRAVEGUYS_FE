import styled from "styled-components";
import lowLevelBg from '../images/bear-low-level/bg.png';
import lowLevelCh from '../images/bear-low-level/ch.png';
import { topBar } from "../assets/atom";
import { useSetRecoilState } from 'recoil';

const MainContainer = styled.div`
  position: relative;

  #low-level-background {
    position: absolute;
    background-image: url(${lowLevelBg});
    width: 375px;
    height: 486px;
    background-size: contain;
  }

  #low-level-character {
    position: absolute;
    width: 180px;
    object-fit: cover;
    top: 160px;
    left: 25px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 13px); }
    100%   { transform: translate(0, -0px); } 
  }
`

function Main() {
  const setTopbarColor = useSetRecoilState(topBar);
  setTopbarColor('#5b91ff');

  return (
    <MainContainer>
      <div id="low-level-background"></div>
      <img id='low-level-character' src={lowLevelCh} alt="low-level-character" />
    </MainContainer>
  )
}

export default Main;