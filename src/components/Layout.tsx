import React, { FC, ReactNode } from 'react';

import { ThemeProvider, CssBaseline, styled } from '@mui/material';
import { Box } from '@mui/system';

import Header from 'components/Header';
import { myTheme } from 'modules/styles/theme';

const RootDiv = styled(Box)({
  display: 'flex'
});

const Main = styled('main')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Header />
      <RootDiv>
        <Main>
          {children}
        </Main>
      </RootDiv>
    </ThemeProvider>
  );
};

export default Layout;
