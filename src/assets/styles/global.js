import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Oswald', sans-serif;
   
 }
  :root{
    font-size: 60%;
    
  }

  html, body{
    /* height: 100vh; */
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    
   }

  body,
  input,
  button,
  textarea {
    font: 1.6rem Oswald;
    color: #CCC;
    outline: 0;
  }

  

`

export const Container = styled.div`

 margin: 0 auto;
    width: 90vw;
    max-width: 800px;
`

export const FlexDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`