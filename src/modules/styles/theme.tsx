import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#eef0f1'
    },
    secondary: {
      main: '#3b49df'
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
