import { createGlobalStyle } from "styled-components";
import React from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    width: 375px;
    height: 768px;
    margin: 0;
    font-family: Pretendard;
  }
  .register-login-button {
    width: 277px;
    height: 50px;
  }
`;

export default GlobalStyle;