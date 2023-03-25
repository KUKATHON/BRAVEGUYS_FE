import { createGlobalStyle } from "styled-components";
import React from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    width: 375px;
    height: 812px;
    margin: 0;
    font-family: Pretendard;
  }
  .register-login-input {
    width: 335px;
    height: 48px;
    background: #f4f5f6;
    border-radius: 4px;
    border: none;
  }
  .common-button {
    width: 335px;
    height: 60px;
    border-width: none;
    border-radius: 8px;
  }
`;

export default GlobalStyle;