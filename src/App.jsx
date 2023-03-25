import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { topBar } from './assets/atom';
import GlobalStyle from './global/GlobalStyle';
import GlobalFonts from './fonts/fonts';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProloguePage from './pages/ProloguePage';
import MainPage from './pages/MainPage';
import CommunityPage from './pages/CommunityPage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
      <div className="App">
        <div style={{ width: "375px", height: '44px', backgroundColor: `${useRecoilValue(topBar)}` }}></div>
        <GlobalStyle />
        <GlobalFonts />
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/prologue" element={<ProloguePage />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
        </Routes>
      </div>
 )
}

export default App
