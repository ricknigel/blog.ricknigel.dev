import { makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Content } from '../types';
import CustomLink from './CustomLink';

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    padding: theme.spacing(2),
    borderTop: '1px solid #e1e4e8',
    '&:hover': {
      backgroundColor: '#f6f8fa'
    }
  },
  title: {
    margin: theme.spacing(0)
  }
}));

type Props = {
  article: Content
};

const ArticleCard: FC<Props> = ({ article }) => {
  const { id, date, title, category } = article;
  const classes = useStyles();
  return (
    <CustomLink href={`/articles/${id}`}>
    <article className={classes.item}>
        <h2 className={classes.title}>{title}</h2>
        <Typography variant="caption">{date}</Typography>
        {category.map(item => (
          <Typography key={item} variant="caption">{item}</Typography>
        ))}
    </article>
    </CustomLink>
  );
};

export default ArticleCard;
