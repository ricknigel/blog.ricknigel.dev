import { createMuiTheme, makeStyles, Theme } from "@material-ui/core";

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

export const markdownStyle = makeStyles((theme: Theme) => ({
  markdown: {
    '& .line-numbers': {
      padding: '1rem 0 1rem .5rem',
    },
    '& .line-numbers-rows': {
      padding: '1rem 0 1rem .5rem',
    },
    '& .gatsby-highlight': {
      width: '95%',
      margin: '0 auto',
      '& pre': {
        borderRadius: 5,
      },
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& h1, h2, h3, h4, h5, h6': {
      fontWeight: 'bold',
    },
    '& h2': {
      borderLeft: `2px solid ${theme.palette.secondary.main}`,
      paddingLeft: '1rem',
      borderBottom: `0.5px solid ${theme.palette.divider}`,
    },
    '& table': {
      width: '95%',
      margin: '0 auto',
      borderCollapse: 'collapse',
    },
    '& th': {
      border: `1px solid grey`,
      backgroundColor: theme.palette.secondary.light,
    },
    '& td': {
      border: `1px solid grey`,
    },
    '& tr': {
      '&:nth-child(odd)': {
        backgroundColor: theme.palette.grey[300],
      },
    },
    '& blockquote': {
      borderLeft: `5px solid ${theme.palette.secondary.main}`,
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.text.secondary,
      padding: '1em',
    },
    '& p': {
      '& code': {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.text.secondary,
        padding: '0.1em 0.4em',
      },
    },
    '& ul, ol': {
      paddingLeft: '1.5em',
    },
    '& li': {
      '& p': {
        marginBlockEnd: 0,
      },
    },
    '& code': {
      fontFamily: theme.typography.fontFamily
    }
  },
}));
