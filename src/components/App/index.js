import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/theme/default';
import GlobalStyles from '../../assets/styles/global';

import { Header } from '../Header';
import { Routes } from '../../Routes';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
