import React, { FC } from 'react';

import Link from 'next/link';

import { styled } from '@mui/material';

import { ChildrenProp } from 'modules/types/types';

const CustomA = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:visited': {
    color: 'inherit'
  },
  '&:hover': {
    color: theme.palette.grey[500],
  },
}));

type Props = ChildrenProp & {
  href: string;
};

const CustomLink: FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <CustomA>{children}</CustomA>
    </Link>
  );
};

export default CustomLink;
