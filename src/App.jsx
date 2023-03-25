import React from 'react';
import { Route, Routes } from 'react-router-dom'
import GlobalStyle from './global/GlobalStyle';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
      <div className="App">
        <GlobalStyle />
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
  )
}

export default App
