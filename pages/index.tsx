import React from 'react';
import Link from 'next/link';
import { getArticleList } from '../src/services/blogService';
import { NextPage } from 'next';
import { Article } from '../src/types';
import { Typography } from '@material-ui/core';

const ArticleListPage: NextPage<Article> = ({ contents }) => {

  return(
    <div>
      <Typography variant="h5">{'記事一覧'}</Typography>
      <ul>
        {contents && contents.map(item => (
          <li key={item.id}>
            <Link href={`/articles/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const { contents } = await getArticleList();
  return {
    props: {
      contents: contents
    }
  };
};

export default ArticleListPage;
