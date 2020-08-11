import React from 'react';
import Search from './pages/Search'
import { Container, GlobalStyle } from './assets/styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>

        <Search />

      </Container>
    </>
  );
}

export default App;
