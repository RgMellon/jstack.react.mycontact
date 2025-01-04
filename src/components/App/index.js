import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/theme/default';
import GlobalStyles from '../../assets/styles/global';

import { Header } from '../Header';

import { Container } from './styles';
import { AppRoutes } from '../../Routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
