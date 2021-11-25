import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { authors, IPost } from "../types";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): IPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const author = authors[data.author];
  return {
    author,
    content,
    coverImage: data.coverImage,
    date: data.date,
    excerpt: data.excerpt,
    slug: realSlug,
    title: data.title,
    tags: data.tags,
  };
}

export function getAllPosts(): IPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
