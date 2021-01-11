import React from 'react';
import { getArticleList } from '../src/services/blogService';
import { NextPage } from 'next';
import { Article } from '../src/types';
import ArticleCard from '../src/components/ArticleCard';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  outline: {
    border: '1px solid #e1e4e8',
    borderRadius: '6px',
    backgroundColor: 'white'
  },
  header: {
    padding: theme.spacing(2),
    backgroundColor: '#f6f8fa',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px'
  }
}));

const ArticleListPage: NextPage<Article> = ({ contents }) => {
  const classes = useStyles();
  return(
    <div>
      <h2>{'記事一覧'}</h2>
      <div className={classes.outline}>
        <header className={classes.header}>
          {'カテゴリ'}
        </header>
        {contents && contents.map(item => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const contents = await getArticleList();

  return {
    props: {
      contents: contents
    }
  };
};

export default ArticleListPage;
