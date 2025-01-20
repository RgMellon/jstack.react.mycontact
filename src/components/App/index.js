import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/theme/default';
import GlobalStyles from '../../assets/styles/global';

import { Header } from '../Header';

import { Container } from './styles';
import { AppRoutes } from '../../Routes';
import { ToastContainer } from '../Toast/ToastContainer';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <GlobalStyles />
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
