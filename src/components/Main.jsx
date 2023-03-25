import styled from "styled-components";
import lowLevelBg from '../images/bear-low-level/bg.png';
import lowLevelCh from '../images/bear-low-level/ch.png';
import highLevelBg from '../images/bear-high-level/total.png';
import leaveBg from '../images/bear-left/total.png';
import addIcon from '../images/icons/add.png';
import petIcon from '../images/icons/pet-1.png';
import likeIcon from '../images/icons/like.png';
import shopIcon from '../images/icons/shop.png';
import { topBar } from "../assets/atom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';

const MainContainer = styled.div`
  position: relative;

  .background {
    position: absolute;
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

  .guide-message {
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

  .polarBear-info {
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

  #bottom-bar {
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 78px;
    position: absolute;
    top: 690px;
    background-color: #fff;
    border-radius: 8px 8px 0px 0px;

    .bottom-element {
      width: 72px;
      height: 62px;
      text-align: center;
      margin-top: 12px;

      .bottom-image {
        width: 24px;
        height: 24px;
      }

      .bottom-text {
        height: 20px;
        font-size: 14px;
        text-align: center;
      }
    }
  }

  #high-level-background {
    background-image: url(${highLevelBg});
  }

  #low-level-background {
    background-image: url(${lowLevelBg});
  }

  #leave-background {
    background-image: url(${leaveBg});
  }

  #polarBear-info-next {
    top: 24px;
    z-index: 1;

    #polarBear-name-next {
      color: #4c7fe6;
      font-size: 16px;
      margin-right: 8px;
      font-weight: 600;
    }

    #polarBear-level-next {
      color: #aaabb5;
      font-size: 14px;
    }
  }

  #guide-message-next {
    width: 200px;
    top: 230px;
    left: 90px;
  }

  #leave-button {
    position: absolute;
    background-color: #548dff;
    color: #fff;
    border: none;
    top: 605px;
    left: 20px;
    z-index: 1;
  }

  #leave-container {
    position: absolute;

    #reward-message {
      position: absolute;
      width: 219px;
      height: 62px;
      top: 104px;
      left: 78px;
      border-radius: 16px;
      background-color: #fff;
      text-align: center;
      line-height: 28px;
      z-index: 1;
    }

    #thanks-message {
      top: 230px;
    }
  }

`

function Main() {
  const [testNum, setTestNum] = useState(0);
  const [leaveClick, setLeaveClick] = useState(false);
  const setTopbarColor = useSetRecoilState(topBar);

  const navigate = useNavigate();

  useEffect(() => {
    setTopbarColor('#5b91ff');
  }, [])

  // 시연을 위해 클릭시 인증값 증가하도록 구현
  const bearInfoClick = () => {
    setTestNum(testNum + 2);
  }

  const leaveClickHandler  = () => {
    setLeaveClick(true);
    setTopbarColor('#8ac3f3');
  }

  return (
    <MainContainer>
      { (!leaveClick && testNum < 10) &&
        <div>
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
          <div id="low-level-background" className="background"></div>
          <div className="guide-message">얼음이 너무 작아요 😭</div>
          <img id='low-level-character' src={lowLevelCh} alt="low-level-character" />
          <div className="polarBear-info" onClick={bearInfoClick}>
            <div id="polarBear-name">고미</div>
            <div id="polarBear-level">1레벨</div>
          </div>
        </div>
      }
      { (!leaveClick && testNum >= 10) &&
        <div>
          <div id="polarBear-info-next" className="polarBear-info">
            <div id="polarBear-name-next">고미</div>
            <div id="polarBear-level-next">3레벨</div>
          </div>
          <div id="guide-message-next" className="guide-message">고미는 이제 독립할 수 있어요 😄</div>
          <button id="leave-button" className="common-button" onClick={leaveClickHandler}>이제 북극곰을 보내줄까요?</button>
          <div id="high-level-background" className="background"></div>
        </div>
      }
      { leaveClick &&
        <div id="leave-container">
          <div id='reward-message'>북극곰이 고맙다며<br />OO님에게 물고기를 건네주네요</div>
          <div id='thanks-message' className="guide-message">고마웠어요! 😄</div>
          <div id="leave-background" className="background"></div>
        </div>
      }
      <div id="bottom-bar">
        <div className="bottom-element">
          <img src={addIcon} alt="add-icon" className="bottom-image" />
          <div className="bottom-text">인증</div>
        </div>
        <div className="bottom-element">
          <img src={petIcon} alt="pet-icon" className="bottom-image" />
          <div className="bottom-text">북극곰</div>
        </div>
        <div className="bottom-element">
          <img src={likeIcon} alt="like-icon" className="bottom-image" />
          <div className="bottom-text">커뮤니티</div>
        </div>
        <div className="bottom-element">
          <img src={shopIcon} alt="shop-icon" className="bottom-image" />
          <div className="bottom-text">친환경샵</div>
        </div>
      </div>
    </MainContainer>
  )
}

export default Main;