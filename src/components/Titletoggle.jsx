import React from 'react'
import styled from 'styled-components'
import { navbarState } from '../assets/atom'
import { useRecoilState } from 'recoil'

function Titletoggle() {
  const [navbarContent, setNavbarContent] = useRecoilState(navbarState)
  const navbar = ["커뮤니티", "나의 인증"]
  const Toggle = styled.div`
  #toggle-wrapper{
      width: 156px;
      margin: 0 auto;
      margin-top: 40px;
      padding: 4px;
      display: flex;
      justify-content: center;
      background-color: var(--gray-50);
      border-radius: 8px;
      margin-bottom: 8px;
  }

  #toggle-button{
      height: 40px;
      font-size: 16px;
      background: none;
      border: none;
      padding: 10px;
      border-radius: 8px;
  }
`

  return (
    <div>
    <Toggle>
        <div id="toggle-wrapper">
            {navbar.map((item, idx)=>(
                <button id="toggle-button" key={idx}
                onClick={()=>{setNavbarContent(item)}}
                style={item===navbarContent?{"color": "white", "backgroundColor": "var(--blue-400)"}:{"color":"var(--gray-300)"}}>{item}</button>
            ))}
        </div>
    </Toggle>
    </div>
  )
}

export default Titletoggle