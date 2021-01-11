export type Article = {
  contents: Content[]
};

export type Content = Matter & {
  content: string
  id: string
};

export type Matter = {
  title: string
  date: string
  category: string[]
};
