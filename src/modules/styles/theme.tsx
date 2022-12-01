import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d1117',
      paper: '#161b22'
    },
    primary: {
      main: '#3367D6'
    },
    text: {
      primary: grey[300]
    }
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Google Sans',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(',')
  }
});
