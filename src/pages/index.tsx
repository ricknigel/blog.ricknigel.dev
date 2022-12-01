import React from 'react';

import { NextPage } from 'next';

import { styled } from '@mui/material';
import { Box } from '@mui/system';

import ArticleCard from 'components/ArticleCard';
import { getArticleList } from 'modules/services/blogService';
import { Article } from 'modules/types/types';

const Title = styled('h1')(() => ({
  fontSize: '25px'
}));

const Outline = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '6px',
}));

const ListHeader = styled('header')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px'
}));

const ArticleListPage: NextPage<Article> = ({ contents }) => {
  return(
    <Box>
      <Title>{'記事一覧'}</Title>
      <Outline>
        <ListHeader>{'カテゴリ'}</ListHeader>
        {contents && contents.map(item => (
          <ArticleCard key={item.id} article={item} />
        ))}
      </Outline>
    </Box>
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
