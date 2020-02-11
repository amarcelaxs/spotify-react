//import { injectGlobal }  from 'styled-components';
import { createGlobalStyle } from 'styled-components';

//injectGlobal`
//createGlobalStyle`
export default createGlobalStyle `
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html, body, #root{
      height:100%;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color:#FFF;
  }
`;