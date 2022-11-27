import React, { FC } from 'react';

import { styled } from '@mui/material';

const Lable = styled('span')(({ theme }) => ({
  fontSize: '0.75rem',
  marginRight: theme.spacing(2),
  padding: theme.spacing(0.75),
  border: '1px solid rgb(191,191,191)',
  borderRadius: '2em',
}));

type Props = {
  category: string;
}

const CategoryLabel: FC<Props> = ({ category }) => {
  return (
    <Lable>
      {'#' + category}
    </Lable>
  );
};

export default CategoryLabel;
