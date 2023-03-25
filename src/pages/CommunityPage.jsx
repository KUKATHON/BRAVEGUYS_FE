import React, {useState} from 'react'
import Post from '../components/Post'
import Mypost from '../components/Mypost';
import Navbar from '../components/Navbar';
import Undernav from '../components/Undernav';
import {navbarState} from '../assets/atom.js';
import {useRecoilValue} from 'recoil';

function Community() {
  const selectedNavbar = useRecoilValue(navbarState);

  return (
    <div>
    <Navbar></Navbar>
    {selectedNavbar==="커뮤니티"?
        <Post></Post>
        :<Mypost></Mypost>
    }
    <Undernav></Undernav>
    </div>     
  )
}

export default Community