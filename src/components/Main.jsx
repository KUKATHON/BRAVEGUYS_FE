import styled from "styled-components";
import lowLevelBg from '../images/bear-low-level/bg.png';
import lowLevelCh from '../images/bear-low-level/ch.png';
import { topBar } from "../assets/atom";
import { useEffect } from "react";
import { useSetRecoilState } from 'recoil';

const MainContainer = styled.div`
  position: relative;

  #low-level-background {
    position: absolute;
    background-image: url(${lowLevelBg});
    width: 375px;
    height: 812px;
    background-size: contain;
  }

  #low-level-character {
    position: absolute;
    width: 250px;
    object-fit: cover;
    top: 320px;
    left: 75px;

    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating {
    0% { transform: translate(0, 0px); }
    50%  { transform: translate(0, 13px); }
    100%   { transform: translate(0, -0px); } 
  }

  #mission-box {
    position: absolute;
    width: 334px;
    height: 127px;
    background-color: #fff;
    border-radius: 8px;
    top: 60px;
    left: 20px;
    z-index: 1;

    #mission-num {
      position: absolute;
      width: 309px;
      height: 40px;
      font-size: 14px;
      color: #9596a3;
      line-height: 40px;
      top: 12px;
      left: 12.5px;
    }

    #mission-content-score {
      display: flex;
      position: absolute;
      top: 52px;
      left: 12px;
      border-radius: 8px;

      #mission-content {
        width: 225px;
        height: 63px;
        background-color: #eef4ff;
        color: #9596a3;
        display: flex;
        line-height: 63px;
        padding-left: 10px;
        margin-right: 10px;

        #mission-detail {
          width: 128px;
          height: 23px;
          color: #3f3f44;
          margin-left: 10px;
        }
      }

      #mission-score{
        width: 63px;
        height: 60px;
        background-color: #eef4ff;
        color: #548dff;
        text-align: center;
        line-height: 60px;
      }
    }
  }

  #guide-message {
    width: 154px;
    height: 36px;
    border-radius: 16px;
    background-color: #fff;
    position: absolute;
    top: 273px;
    left: 110px;
    font-size: 14px;
    color: #4c7fe6;
    z-index: 2;
    text-align: center;
    line-height: 36px;
  }

  #polarBear-info {
    width: 101px;
    height: 31px;
    border-radius: 8px;
    background-color: #fff;
    position: absolute;
    top: 645px;
    left: 137px;
    display: flex;
    justify-content: center;
    line-height: 31px;

    #polarBear-name {
      color: #4c7fe6;
      font-size: 16px;
      margin-right: 8px;
      font-weight: 600;
    }

    #polarBear-level {
      color: #aaabb5;
      font-size: 14px;
    }
  }
`

function Main() {
  const setTopbarColor = useSetRecoilState(topBar);

  useEffect(() => {
    setTopbarColor('#5b91ff');
  }, [])

  return (
    <MainContainer>
      <div id="mission-box">
        <div id="mission-num">오늘 남은 인증횟수 2회</div>
        <div id="mission-content-score">
          <div id="mission-content">
            미션
            <div id="mission-detail">플로깅 1회 인증하기</div>
          </div>
          <div id="mission-score">2점</div>
        </div>
      </div>
      <div id="low-level-background"></div>
      <div id="guide-message">얼음이 너무 작아요 😭</div>
      <img id='low-level-character' src={lowLevelCh} alt="low-level-character" />
      <div id="polarBear-info">
        <div id="polarBear-name">고미</div>
        <div id="polarBear-level">1레벨</div>
      </div>
    </MainContainer>
  )
}

export default Main;