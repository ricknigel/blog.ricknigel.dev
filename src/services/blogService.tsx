import fs from'fs';
import path from 'path';
import matter from 'gray-matter';
import { Matter } from '../types';

const dir = path.join(process.cwd(), 'contents/articles');

export const getArticleList = async () => {
  const fileNames = fs.readdirSync(dir);
  const articles = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(dir, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContent);

    return {
      id,
      ...matterResult.data
    };
  });

  return articles;
};

export const getArticleById = async (id: string) => {

  const fullPath = path.join(dir, `${id}.md`);

  let fileContent = null;
  try {
    fileContent = fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    return null;
  }

  if (!fileContent) {
    return null;
  }

  const matterResult = matter(fileContent);
  const a: Matter = matterResult.data;

  const data = {
    content: matterResult.content,
    ...a
  }

  return data;
};
