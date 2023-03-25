import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { menuState } from '../assets/atom'
import Titletoggle from './Titletoggle'

function Undernav() {
    const [selectedMenu, setSelectedMenu] = useRecoilState(menuState)
    const menu = ["인증", "북극곰", "공유커뮤", "큐레이션"]
    const navigate = useNavigate();

    const handleUploadClick = () => {
      navigate('/upload')
    }

    const UndernavItem = styled.div`
    #undernav-wrapper{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    #undernav-menu{
        font-size: 14px;
        position: relative;
        display: flex;
        justify-content: space-around;
        padding-bottom:34px;
        background: white;
    }

    #undernav-button{
        flex: 1;
        height: 70px;
        background: none;
        border: none;
        padding: 4px;
    }

    #undernav-button:nth-of-type(1){
        background-color: var(--blue-200);
        border-radius: 16px;
        color: var(--blue-500)
    }

`

  return (
    <div>
    <UndernavItem>
    <div id="undernav-wrapper">
    <Titletoggle></Titletoggle>
    <div id="undernav-menu">
        {menu.map((item, idx)=>(
            <button id="undernav-button" key={idx} onClick={idx==0?()=>{handleUploadClick()}:()=>{setSelectedMenu(item)}} style={selectedMenu===item?{"color":"var(--blue-500)"}:idx!==0?{"color":"var(--gray-300)"}:{"color":"var(--blue-500)"}}>{item}</button>
        ))}
    </div>
    </div>
    </UndernavItem>
    </div>
  )
}

export default Undernav