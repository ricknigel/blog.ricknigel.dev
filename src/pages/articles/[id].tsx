import React from 'react';

import { NextPage } from 'next';

import { Card, CardContent, Divider, Typography } from '@mui/material';
import footnotes from 'remark-footnotes';
import gfm from 'remark-gfm';
import hljs from 'remark-highlight.js';
import html from 'remark-html';
import markdown from 'remark-parse';
import { unified } from 'unified';

import CategoryLabel from 'components/CategoryLabel';
import FormatDate from 'components/FormatDate';
import { getArticleList, getArticleById } from 'modules/services/blogService';
import { Content } from 'modules/types/types';

const ArticlePage: NextPage<Content> = (props) => {
  const { title, content, date, category } = props;
  console.log(category);
  return (
    <Card className="markdown-body" variant="outlined">
      <CardContent>
        <Typography variant="h1">{title}</Typography>
        <FormatDate date={date} />
        {category && category.map(item => (
          <CategoryLabel key={item} category={item} />
        ))}
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
    </Card>
  );
};

export const getStaticPaths = async () => {
  const contents = await getArticleList();
  console.log(contents);
  const paths = contents.map(item => `/articles/${item.id}`);

  return {
    paths,
    fallback: true
  };
};

type ParamProps = {
  params: {
    id: string;
  };
};

export const getStaticProps = async (props: ParamProps) => {
  const { id } = props.params;
  const data = await getArticleById(id);
  if (!data) {
    return {
      notFound: true
    };
  }

  const contentHtml = 
    await unified()
      .use(markdown)
      .use(footnotes, {inlineNotes: true})
      .use(hljs)
      .use(gfm)
      .use(html)
      .process(data.content);

  data.content = contentHtml.value.toString();

  return {
    props: { ...data }
  };
};

export default ArticlePage;
