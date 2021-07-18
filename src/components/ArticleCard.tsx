import { makeStyles, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Content } from '../types';
import CategoryLabel from './CategoryLabel';
import CustomLink from './CustomLink';
import FormatDate from './FormatDate';

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    padding: theme.spacing(2),
    borderTop: '1px solid #e1e4e8',
    '&:hover': {
      backgroundColor: '#f6f8fa'
    }
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1)
  }
}));

type Props = {
  article: Content
};

const ArticleCard: FC<Props> = ({ article }) => {
  const { id, date, title, category } = article;
  const classes = useStyles();
  return (
    <article className={classes.item}>
      <div className={classes.title}>
        <CustomLink href={`/articles/${id}`}>
          <span>{title}</span>
        </CustomLink>
      </div>
      <FormatDate date={date} />
      {category.map(item => (
        <CategoryLabel key={item} category={item} />
      ))}
    </article>
  );
};

export default ArticleCard;
