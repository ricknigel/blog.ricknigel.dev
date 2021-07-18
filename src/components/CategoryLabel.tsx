import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '0.75rem',
    marginRight: theme.spacing(2),
    padding: theme.spacing(0.75),
    border: '1px solid rgb(191,191,191)',
    borderRadius: '2em',
  }
}))

type Props = {
  category: string;
}

const CategoryLabel: FC<Props> = ({ category }) => {
  const classes = useStyle();

  return (
    <span className={classes.text}>
      {'#' + category}
    </span>
  );
};

export default CategoryLabel;
