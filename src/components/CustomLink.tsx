import { makeStyles, Theme } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit'
    },
    '&:hover': {
      color: theme.palette.grey[500],
    },
  }
}));

type Props = {
  href: string
}

const CustomLink: FC<Props> = ({ href, children }) => {
  const classes = useStyles();
  return (
    <Link href={href}>
      <a className={classes.link}>{children}</a>
    </Link>
  );
};

export default CustomLink;
