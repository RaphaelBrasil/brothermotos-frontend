import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  font-family: 'Roboto-Bold', 'Helvetica', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-radius: 8px
}

body {
  background: #e0e0e0;
  display: flex;
  justify-content: center;
}

`;

export default GlobalStyle;
