import React, { ReactElement } from 'react';
import { ThemeProvider, makeStyles, Theme, CssBaseline } from '@material-ui/core';
import Header from './Header';
import { myTheme } from '../styles/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2)
    },
    width: '100%',
  }
}));

type Props = {
  children: ReactElement;
};

const Layout = (props: Props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <main className={classes.content}>
          {props.children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
