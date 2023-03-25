import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import styled  from 'styled-components'
export default function Upload() {
    
  const Topbar = styled.div`
    #topbar-wrapper{
        position: relative;
        padding: 0 20px;
        text-align: center;
        font-size: 16px;
    }

    #topbar-title{
        margin-bottom: 16px;
    }

    #topbar-x{
        position: absolute;
        right: 20px; top: 0;
        background: none;
        border: none;
    }
  `
  const Contents = styled.div`
    #contents-wrapper{
        padding: 0 20px;
        font-size: 14px;
        color: var(--gray-700)
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
        background-color: var(--gray-50);
        border-radius: 8px;
        border: none;
        margin-bottom: 20px;
    }
    
    #contents-title:focus{
        outline:none;
    }

    #contents-message{
        background-color: var(--gray-50);
        border-radius: 8px;
        border: none;
        resize: none;
        height: 140px;
    }

    #contents-message:focus{
        outline:none;
    }

    #contents-pic{
        width: 100%;
        text-align: center;
        border: 1px solid var(--blue-400);
        border-radius: 8px;
        background: none;
        color: var(--blue-400);
        padding: 12px; 
    }

    #contents-wrapper > label{
        display: block;
    }
    #contents-warning{
        margin: 0 auto;
        padding: 0;
        font-size: 14px;
        color: var(--gray-500);
    }

    #contents-score > span{
        padding-right: 8px;
        color: var(--gray-600);
    }

    #contents-upload{
        position: fixed;
        margin: 0 20px;
        box-sizing: border-box;
        left: 0;
        width: 335px;
        bottom: 20px;
        height: 60px;
        background-color: var(--blue-400);
        border-radius: 8px;
        border: 0;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }

    #navbar-category{
        display: flex;
        gap: 8px;
        white-space: nowrap;
        overflow-x: scroll;
        scrollbar-width: none;
        padding: 0 20px;
        margin-bottom: 8px;
        margin-top: 16px;
    }

    #navbar-category::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    #navbar-category button{
        background: none;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
    }

`
    const [selectedCategory, setSelectedCategory] = useState("용기내챌린지")
    const [uploaded, setUploaded] = useState(false);
    const category = ["용기내챌린지", "플로깅", "비건라이프", "분리배출", "친환경물품"]

    const navigate = useNavigate();

    const handleUploadClick = () => {
      navigate('/community')
    }
  return (
    <div>
        <Topbar>
            <div id="topbar-wrapper">
                <div id="topbar-title">인증하기</div>
                <button id="topbar-x">❎</button>
            </div>
        </Topbar>
        <Contents>
            <div id="navbar-category">
                {category.map((item, idx)=>(
                    <button key={idx} onClick={()=>setSelectedCategory(item)} style={selectedCategory===item?{"color":"var(--blue-600)", "background":"var(--blue-200)"}:{"color":"var(--gray-500)", "border":"1px solid var(--gray-100)"}}>{item}</button>
                ))}
            </div>
            <div id="contents-wrapper">
                인증 제목
                <input placeholder="제목을 적어주세요" id="contents-title" type="text"></input>
                인증 한줄
                <textarea placeholder="오늘의 인증 내용을 적어주세요" id="contents-message"/>
                {uploaded?<div id="contents-pic">1/1</div>:""}
                <label for="content-fileselect" id="contents-pic">{uploaded?"사진 올리기":"올린 사진 삭제"}</label>
                <input type="file" id="content-fileselect" onClick={(e)=>console.log(e)}onChange={(e)=>(setUploaded(true))} style={{display:"none"}}/>

                <div id="contents-warning">허위인증 시 서비스 사용에 제한이 있을 수 있습니다.</div>
                <div id="contents-score"><span>받을 인증점수</span> {selectedCategory=="플로깅"?"2":"1"}점</div>
                <button id="contents-upload" onClick={handleUploadClick}>인증 올리기</button>
            </div>
        </Contents>
    </div>
  )
}
