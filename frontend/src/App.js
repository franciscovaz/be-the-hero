import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import lightTheme from './styles/lightTheme';
import darkTheme from './styles/darkTheme';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersistedState('theme', lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
