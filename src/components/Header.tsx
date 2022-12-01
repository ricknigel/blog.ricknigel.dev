import React from 'react';

import { AppBar, Toolbar } from '@mui/material';

import CustomLink from 'components/CustomLink';

const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <h2>
        <CustomLink href={'/'}>
          {'ricknigel.dev'}
        </CustomLink>
      </h2>
    </Toolbar>
  </AppBar>
);

export default Header;
