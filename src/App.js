import { ThemeProvider } from '@emotion/react';
// import { Typography } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import theme from './styles/theme';
import './styles/globalStyles.css';
import RouterSwitch from './components/router/Router';
import Footer from './components/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <RouterSwitch />
        </BrowserRouter>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
