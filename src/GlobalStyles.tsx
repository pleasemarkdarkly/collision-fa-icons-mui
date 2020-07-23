import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  #root{
    padding:30px 0
  }
 
`