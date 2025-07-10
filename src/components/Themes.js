import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#13274F',
    },
    secondary: {
      main: '#f39c12',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;