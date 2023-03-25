import React from 'react'
import styled from 'styled-components'
import { navbarState } from '../assets/atom'
import { useRecoilState } from 'recoil'

function Titletoggle() {
  const [navbarContent, setNavbarContent] = useRecoilState(navbarState)
  const navbar = ["커뮤니티", "나의 인증"]
  const Toggle = styled.div`
  #toggle-wrapper{
      padding-top: 40px;
      display: flex;
      justify-content: center;
  }

  #toggle-button{
      background: none;
      border: none;
      padding: 10px;
  }
`

  return (
    <div>
    <Toggle>
        <div id="toggle-wrapper">
            {navbar.map((item, idx)=>(
                <button id="toggle-button" key={idx}
                onClick={()=>{setNavbarContent(item)}}
                style={item===navbarContent?{"color": "white", "backgroundColor": "black"}:{"color":"black", "background-color":"grey"}}>{item}</button>
            ))}
        </div>
    </Toggle>
    </div>
  )
}

export default Titletoggle