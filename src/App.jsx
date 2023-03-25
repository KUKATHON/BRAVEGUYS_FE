import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './global/GlobalStyle';
import GlobalFonts from './fonts/fonts';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
      <div className="App">
        <div style={{ width: "375px", height: '44px' }}></div>
        <GlobalStyle />
        <GlobalFonts />
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
 )
}

export default App
