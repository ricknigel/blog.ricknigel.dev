import React, { FC } from 'react';

import { UrlObject } from 'url';

import Link from 'next/link';

import { styled } from '@mui/material';

import { ChildrenProp } from 'modules/types/types';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    color: theme.palette.grey[500]
  },
}));

type Props = ChildrenProp & {
  href: string | UrlObject;
};

const CustomLink: FC<Props> = ({ href, children }) => {
  return (
    <StyledLink href={href} passHref>
      {children}
    </StyledLink>
  );
};

export default CustomLink;
