import React from 'react'
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil'
import { categoryState, navbarState } from '../assets/atom'
function Navbar() {
    const navbarContent = useRecoilValue(navbarState);
    const NavbarItem = styled.div`
    #navbar-wrapper{
        padding-bottom: 10px;
        padding: 0 20px;
    }

    #navbar-title{
        font-size: 20px;
        display: flex;
        justify-content: space-between; 
    }
    `

  return (
    <div>
    <NavbarItem>
        <div id="navbar-wrapper">
            <div id="navbar-title">
                <div>{navbarContent}</div>
                <div>🦹‍♀️</div>
            </div>
        </div>
    </NavbarItem>
    </div>
  )
}

export default Navbar