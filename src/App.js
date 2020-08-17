import React from 'react';

import Search from './pages/Search';
import { Container } from './assets/styles/global';
import UserProvider from './context/user';
import ThemeSelectedProvider from './context/theme';

function App() {
  return (
    <ThemeSelectedProvider>
      <UserProvider>

        <Container>

          <Search />

        </Container>

      </UserProvider>
    </ThemeSelectedProvider>

  );
}

export default App;
