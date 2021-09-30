import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css"; 

export const GlobalStyle = createGlobalStyle`
    :root {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Avenir'
  }

  html {
      background-color: #F5F6F8;
  }

  h3,p {
      font-size: 14px;
      line-height: 1.25rem;
      margin: 0;
      padding-bottom: 0.25rem;
  }

  p {
    color: #9CA3AF;
  }

  input {
    color: #9CA3AF;
    font-family: 'Avenir';
  }

  label, input {
      display: inline-block;
  }
`;
