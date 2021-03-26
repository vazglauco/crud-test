import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Header from './components/Header';
import usePersistedState from './utils/usePersistedState';
import dark from './UI/themes/dark';
import light from './UI/themes/light';
import GlobalStyle from './UI/global'
import { Container } from './UI/components/Grid';
import { AuthProvider } from './contexts/useAuth';
import { BrowserRouter } from 'react-router-dom';
import Routes from './config/routes';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthProvider>
            <ReactNotification />
            <Header toogleTheme={toogleTheme}></Header>
            <Container>
              <Routes></Routes>
            </Container>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
