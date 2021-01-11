import { createMuiTheme } from "@material-ui/core";

export const myTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#eef0f1'
    },
    secondary: {
      main: '#3b49df'
    }
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'Noto Sans JP',
    ].join(',')
  }
});
