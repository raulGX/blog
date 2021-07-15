import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import marked from "marked";

export interface Post {
  slug: string;
  title: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
}

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs(): Promise<string[]> {
  let posts = fs.readdirSync(postsDirectory);
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  let post: Post = {
    slug: "",
    title: "",
    author: "",
    content: "",
    coverImage: "",
    date: "",
  };

  Object.keys(post).forEach((field: string) => {
    if (field === "slug") {
      post[field] = realSlug;
    }
    if (field === "content") {
      post[field] = content;
    }

    if (data[field]) {
      (post as any)[field] = data[field];
    }
  });

  return post;
}
