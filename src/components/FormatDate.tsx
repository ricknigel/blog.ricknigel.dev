import React, { FC } from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) => ({
  text: {
    fontSize: '0.875rem',
    marginRight: theme.spacing(2)
  }
}))

type Props = {
  date: string;
}

const FormatDate: FC<Props> = ({ date }) => {
  const classes = useStyle();
  const formatDate = (targetDate: string) => {
    // YYYYMMDD(8桁)の場合、YYYY/MM/DDに変換
    return /^\d{8}$/.test(targetDate)
      ? `${targetDate.slice(0, 4)}.${targetDate.slice(4, 6)}.${targetDate.slice(6, 8)}`
      : targetDate;
  };

  return (
    <Typography className={classes.text} variant="caption">
      {formatDate(date)}
    </Typography>
  );
};

export default FormatDate;
