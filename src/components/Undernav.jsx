import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { menuState } from '../assets/atom'

function Undernav() {
    const [selectedMenu, setSelectedMenu] = useRecoilState(menuState)
    const menu = [" ", "북극곰", "공유커뮤", "큐레이션"]

    const UndernavItem = styled.div`
    #undernav-wrapper{
        position: relative;
        display: flex;
        justify-content: space-around;
    }

    #undernav-button{
        flex: 1;
        background: none;
        border: none;
        margin-top: 50px;
    }

    #undernav-upload{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0; left: 0; top: -1; bottom: 0;
        margin-left: 20px;
        height: 50px;
        width: 50px;
        padding: 10px auto;
        border: 1px solid black;
        border-radius: 50%;
    }
    `

  return (
    <div>
    <UndernavItem>
    <div id="undernav-wrapper">
        <div id="undernav-upload">
            <div>인증</div>
        </div>
        {menu.map((item, idx)=>(
            <button id="undernav-button" key={idx} onClick={()=>setSelectedMenu(item)} style={selectedMenu===item?{"color":"blue"}:{color:"black"}}>{item}</button>
        ))}
    </div>
    </UndernavItem>
    </div>
  )
}

export default Undernav