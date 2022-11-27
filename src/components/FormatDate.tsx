import React, { FC } from 'react';

import { Typography } from '@mui/material';

type Props = {
  date: string;
}

const FormatDate: FC<Props> = ({ date }) => {
  const formatDate = (targetDate: string) => {
    // YYYYMMDD(8桁)の場合、YYYY/MM/DDに変換
    return /^\d{8}$/.test(targetDate)
      ? `${targetDate.slice(0, 4)}.${targetDate.slice(4, 6)}.${targetDate.slice(6, 8)}`
      : targetDate;
  };

  return (
    <Typography variant="caption" sx={{ fontSize: '0.875rem', mr: 2 }}>
      {formatDate(date)}
    </Typography>
  );
};

export default FormatDate;
