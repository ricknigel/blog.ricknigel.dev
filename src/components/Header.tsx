import React, { Fragment } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import CustomLink from './CustomLink';

const Header = () => (
  <Fragment>
    <AppBar position="static" color="default" variant="outlined">
      <Toolbar>
        <h2>
          <CustomLink href={'/'}>
            {'ricknigel.dev'}
          </CustomLink>
        </h2>
      </Toolbar>
    </AppBar>
  </Fragment>
);

export default Header;
