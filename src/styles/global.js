import { createGlobalStyle } from "styled-components";
import "./fonts/fonts.css"; 

export const GlobalStyle = createGlobalStyle`
    :root, button, input {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Avenir'
  }

  html {
      background-color: ${(props) => props.theme.colors.grey[0]};;
  }

  h3 {
    color: ${(props) => props.theme.colors.black};;
  }

  h3,p {
      font-size: 14px;
      line-height: 20px;
      margin: 0;
      padding-bottom: 4px;
  }

  p {
    color: ${(props) => props.theme.colors.accent1};
  }

  input {
    color: ${(props) => props.theme.colors.accent1};;
  }


  label, input {
      display: inline-block;
  }
`;
