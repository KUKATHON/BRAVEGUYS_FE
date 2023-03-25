import React, {useState} from 'react'
import styled  from 'styled-components'

export default function Upload() {
  const [category, setCategory] = useState("인증 카테고리 🔽")
  const Topbar = styled.div`
    #topbar-wrapper{
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
  `
  const Contents = styled.div`
    #contents-wrapper{
        padding: 10px;
        text-align: center;
    }

    #contents-wrapper > *{
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        box-sizing: border-box;
    }

    #contents-category{
        text-align: left;
    }

    #contents-title{
        background-color: grey;
    }

    #contents-message{
        background-color: grey;
    }

    #contents-pic{
        background-color: grey;
    }

    #contents-warning{
        padding: 10px 0;
    }

    #contents-score{
        background-color: grey;
    }

    #contents-upload{
        background-color: black;
        color: white;
    }
  `
  
  return (
    <div>
        <Topbar>
            <div id="topbar-wrapper">
                <div>인증하기</div>
                <div>❎</div>
            </div>
        </Topbar>
        <Contents>
            <div id="contents-wrapper">
                <div id="contents-category" placeholder="오늘의 인증 제목을 입력해주세요">{category}</div>
                <input id="contents-title" type="text"></input>
                <textarea id="contents-message"></textarea>
                <button id="contents-pic">사진 올리기</button>
                <div id="contents-warning">허위인증의 경우, ㅁㄴㅇㄹ</div>
                <div id="contents-score">점수 {}점</div>
                <button id="contents-upload">인증 올리기</button>
            </div>
        </Contents>
    </div>
  )
}
