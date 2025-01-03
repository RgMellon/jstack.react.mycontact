import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/theme/default';
import GlobalStyles from './assets/styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>oi</h1>
    </ThemeProvider>
  );
}

export default App;
