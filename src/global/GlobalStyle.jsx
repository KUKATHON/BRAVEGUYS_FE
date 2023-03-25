import { createGlobalStyle } from "styled-components";
import React from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    width: 375px;
    height: 812px;
    margin: 0;
    font-family: Pretendard;
  }
  .common-input {
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

  :root{
    --blue-100: #eef4ff;
    --blue-200: #e5eeff;
    --blue-300: #cadcff;
    --blue-400: #548dff;
    --blue-500: #4c7fe6;
    --blue-600: #4371cc;
    --blue-700: #3f6abf
    --blue-800: #325599;
    --blue-900: #263f73;
    --gray-50: #f4f5f6;
    --gray-100: #dedee2;
    --gray-200: #cecfd5;
    --gray-300: #b8b9c1;
    --gray-400: #aaabb5;
    --gray-500: #9596a3;
    --gray-600: #888994;
    --gray-700: #6a6b74;
    --gray-800: #52535a;
    --gray-900: #3f3f44;
  }
`;

export default GlobalStyle;