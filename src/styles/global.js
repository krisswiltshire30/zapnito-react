import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Avenir'
  }

  h3,p {
      font-size: 14px;
      margin: 0;
  }

  p {
    color: #9CA3AF;
  }
`;
