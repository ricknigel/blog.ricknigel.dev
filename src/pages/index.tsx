import React from 'react';

import { NextPage } from 'next';

import { styled } from '@mui/material';
import { Box } from '@mui/system';

import ArticleCard from 'components/ArticleCard';
import { getArticleList } from 'modules/services/blogService';
import { Article } from 'modules/types/types';


const Title = styled('h2')(({ theme }) => ({
  marginLeft: theme.spacing(2)
}));

const Outline = styled(Box)(() => ({
  border: '1px solid #e1e4e8',
  borderRadius: '6px',
  backgroundColor: 'white'
}));

const ListHeader = styled('header')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#f6f8fa',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px'
}));

const ArticleListPage: NextPage<Article> = ({ contents }) => {
  return(
    <div>
      <Title>{'記事一覧'}</Title>
      <Outline>
        <ListHeader>{'カテゴリ'}</ListHeader>
        {contents && contents.map(item => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </Outline>
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
