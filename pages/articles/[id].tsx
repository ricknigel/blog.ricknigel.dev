import React from 'react';
import { NextPage } from 'next';
import { getArticleList, getArticleById } from '../../src/services/blogService';
import { Content } from '../../src/types';
import { Typography, Card, CardContent } from '@material-ui/core';
import unified from 'unified';
import markdown from 'remark-parse';
import gfm from 'remark-gfm';
import footnotes from 'remark-footnotes';
import html from 'remark-html';
const hljs = require('remark-highlight.js');
import { markdownStyle } from '../../src/styles/theme';

const useStyles = markdownStyle;

const ArticlePage: NextPage<Content> = (props) => {
  const classes = useStyles();
  const { title, content, createdAt } = props;
  return (
    <div className={classes.markdown}>
      <Card>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <p>{createdAt}</p>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
      </Card>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { contents } = await getArticleList();
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
  
  const contentHtml = 
    await unified()
      .use(markdown)
      .use(footnotes, {inlineNotes: true})
      .use(hljs)
      .use(gfm)
      .use(html)
      .process(data.content);

  data.content = contentHtml.contents.toString();

  const a = data.createdAt;
  const convA = new Date(a);
  const dateTime = `${convA.getFullYear()}/${convA.getMonth() + 1}/${convA.getDate()} ${convA.getHours()}:${convA.getMinutes()}`;
  data.createdAt = dateTime;
  console.log(dateTime);

  return {
    props: { ...data }
  };
};

export default ArticlePage;
