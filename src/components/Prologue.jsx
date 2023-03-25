import styled from 'styled-components';
import onboarding1 from '../images/img-onboarding1.png';
import onboarding2 from '../images/img-onboarding2.png';
import onboarding3 from '../images/img-onboarding3.png';
import onboarding4 from '../images/img-onboarding4.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrologueContainer = styled.div`
  position: relative;

  #prologue-text {
    width: 80px;
    height: 32px;
    border-radius: 8px;
    background-color: #e5eeff;
    text-align: center;
    color: #4371cc;
    line-height: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  #prologue-description {
    white-space: pre-wrap;
    width: 335px;
    height: 219px;
    text-align: center;
    position: absolute;
    top: 110px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    line-height: 170%;
  }

  #prologue-img-front {
    width: 335px;
    height: 219px;
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
  }

  #prologue-img-back {
    width: 335px;
    height: 219px;
    position: absolute;
    top: 335px;
    left: 50%;
    transform: translateX(-50%);
  }

  #prologue-input {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 15px;
  }

  #prologue-next-button {
    background-color: #fefefe;
    border: 1px solid #548dff;
    color: #548dff;
    position: absolute;
    top: 610px;
    left: 50%;
    transform: translateX(-50%);
  }

  #prologue-skip-button {
    background-color: #fff;
    border: none;
    color: #9596a3;
    position: absolute;
    top: 680px;
    left: 50%;
    transform: translateX(-50%);
  }

  #prologue-decide-button {
    background-color: #fff;
    color: #b8b9c1;
    border: 1px solid #b8b9c1;
    position: absolute;
    top: 610px;
    left: 50%;
    transform: translateX(-50%);
  }

  #prologue-help-button {
    background-color: #548dff;
    color: #fff;
    border: none;
    position: absolute;
    top: 610px;
    left: 50%;
    transform: translateX(-50%);
  }

`;

function Prologue() {
  const [pageNum, setPageNum] = useState(0);
  const [bearName, setBearName] = useState('');

  const navigate = useNavigate();

  const description = [
    '북극해로 흘러드는 플라스틱 쓰레기,\n살 곳을 잃어가는 북극곰!\n우리가 할 수 있는 일이 없을까요?',
    '일상 속에서 제로웨이스트를 실천하면\n북극곰을 도울 수 있어요!',
    '그럼 만나기 전에,\n먼저 북극곰 이름을 정해주세요',
    '그럼 북극곰을\n만나러 가볼까요?'
  ]

  const handleNextClick = () => {
    setPageNum(pageNum + 1);
  }

  const handleSubmitClick = () => {
    navigate('/main');
  }

  return (
    <PrologueContainer>
      <div id='prologue-text'>프롤로그</div>
      <div id='prologue-description'>{description[pageNum]}</div>
      { pageNum == 0 &&
        <div>
          <img src={onboarding1} alt='first-onboarding' id='prologue-img-front'/>
          <button id='prologue-next-button' className='common-button' onClick={handleNextClick}>다음으로</button>
          <button id='prologue-skip-button' className='common-button'>건너뛰기</button>
        </div>
      }
      { pageNum == 1 &&
        <div>
          <img src={onboarding2} alt='second-onboarding' id='prologue-img-front'/>
          <button id='prologue-next-button' className='common-button' onClick={handleNextClick}>다음으로</button>
          <button id='prologue-skip-button' className='common-button'>건너뛰기</button>
        </div>
      }
      { pageNum == 2 &&
        <div>
          <input 
            type="text" 
            placeholder='5자 이하' 
            id='prologue-input' 
            className='common-input'
            onChange={(e) => setBearName(e.target.value)} />
          <img src={onboarding3} alt='third-onboarding' id='prologue-img-back'/>
          <button id='prologue-decide-button' className='common-button' onClick={handleNextClick}>정했어요</button>
        </div>
      }
      { pageNum == 3 &&
        <div>
          <img src={onboarding4} alt='fourth-onboarding' id='prologue-img-back'/>
          <button id='prologue-help-button' className='common-button' onClick={handleSubmitClick}>도와주러 가기</button>
        </div>
      }
    </PrologueContainer>
  )
}

export default Prologue;