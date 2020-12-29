import { Article, Content } from "../types";

const articleApiUrl = process.env.MICRO_CMS_API_URL || '';
const articleApiKey = process.env.MICRO_CMS_API_KEY || '';

export const getArticleList = async () => {

  const data: Article =  await fetch(articleApiUrl, {
    headers: {
      'X-API-KEY': articleApiKey
    }
  }).then(res => {
    return res.json();
  });

  return data;
};

export const getArticleById = async (id: string) => {
  const data: Content = await fetch(articleApiUrl + '/' + id, {
    headers: {
      'X-API-KEY': articleApiKey
    }
  }).then(res => {
    return res.json();
  });

  return data;
};
