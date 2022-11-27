import React, { FC } from 'react';

import { styled } from '@mui/material';
import { Box } from '@mui/system';

import CategoryLabel from 'components/CategoryLabel';
import CustomLink from 'components/CustomLink';
import FormatDate from 'components/FormatDate';
import { Content } from 'modules/types/types';

const Article = styled('article')(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #e1e4e8',
  '&:hover': {
    backgroundColor: '#f6f8fa'
  }
}));

const Title = styled(Box)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(1)
}));

type Props = {
  article: Content
};

const ArticleCard: FC<Props> = ({ article }) => {
  const { id, date, title, category } = article;
  return (
    <Article>
      <Title>
        {/* <CustomLink href={`/articles/${id}`}> */}
          <span>{title}</span>
        {/* </CustomLink> */}
      </Title>
      <FormatDate date={date} />
      {category.map(item => (
        <CategoryLabel key={item} category={item} />
      ))}
    </Article>
  );
};

export default ArticleCard;
