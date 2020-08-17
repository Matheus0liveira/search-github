import styled, { createGlobalStyle } from 'styled-components';

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

   transition:background .5s ease-in;
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    background:${(props) => props.theme.colors.background};

   }

  body,
  input,
  button,
  textarea,
  hr {
    font: 1.6rem Oswald;
    color: #CCC;
    outline: 0;
  }
  input,
  button,
  textarea {
    transition:color background .2s ease-in;
  }



`;

export const Container = styled.div`

 margin: 0 auto;
    width: 90vw;
    max-width: 800px;
`;

export const FlexDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
`;
