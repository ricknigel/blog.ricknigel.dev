import React from 'react';
import { NextPage } from 'next';
import { getArticleList, getArticleById } from '../../src/services/blogService';
import { Content } from '../../src/types';
import { Card, CardContent, Divider, Typography } from '@material-ui/core';
import unified from 'unified';
import markdown from 'remark-parse';
import gfm from 'remark-gfm';
import footnotes from 'remark-footnotes';
import html from 'remark-html';
import FormatDate from '../../src/components/FormatDate';
import CategoryLabel from '../../src/components/CategoryLabel';
const hljs = require('remark-highlight.js');

const ArticlePage: NextPage<Content> = (props) => {
  const { title, content, date, category } = props;
  return (
    <Card className="markdown-body" variant="outlined">
      <CardContent>
        <Typography variant="h1">{title}</Typography>
        <FormatDate date={date} />
        {category.map(item => (
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

  data.content = contentHtml.contents.toString();

  return {
    props: { ...data }
  };
};

export default ArticlePage;
