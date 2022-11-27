import React, { FC, ReactNode } from 'react';

import { ThemeProvider, CssBaseline, styled } from '@mui/material';
import { Box } from '@mui/system';

import Header from 'components/Header';
import { myTheme } from 'modules/styles/theme';

const RootDiv = styled(Box)({
  display: 'flex'
});

const Main = styled('main')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15),
    marginBottom: theme.spacing(5)
  },
  width: '100%'
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
