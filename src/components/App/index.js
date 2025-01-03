import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/theme/default';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';
import { Header } from '../Header';
import { ContactList } from '../ContactList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />

        <ContactList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
