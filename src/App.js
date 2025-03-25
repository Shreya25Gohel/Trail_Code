import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home1 from './pages/Home1';
import Header from './components/Header/Header';
import './App.css'

const theme = createTheme({
  palette: {
    error: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: '"Arial", sans-serif',
    h2: {
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home1 />
      <Header />
    </ThemeProvider>
  );
}

export default App;