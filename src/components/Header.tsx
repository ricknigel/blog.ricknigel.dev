import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';

const Header = () => (
  <Fragment>
    <AppBar position="static" color="default" variant="outlined">
      <Toolbar>
        <Typography variant="h6">
          <Link href={'/'}>{'ricknigel.dev'}</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);

export default Header;
