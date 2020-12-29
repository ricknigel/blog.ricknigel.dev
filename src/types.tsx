export type Article = {
  contents: Content[]
  limit: number
  offset: number
  totalCount: number
};

export type Content = {
  category: string
  content: string
  createdAt: string
  id: string
  path: string
  publishedAt: string
  taglist: []
  title: string
  updatedAt: string
};
