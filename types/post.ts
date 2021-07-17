import Author from "./author";

export type IPost = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  content: string;
};
