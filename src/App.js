import React from 'react';
import Search from './pages/Search';
import { Container, GlobalStyle } from './assets/styles/global';

import UserProvider from './context/user';

function App() {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <Container>

          <Search />

        </Container>
      </UserProvider>
    </>
  );
}

export default App;
