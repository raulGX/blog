import Link from "next/link";

import { IPost } from "../../types";
import { DateFormatter } from "../dateFormatter";

import styles from "./postSummary.module.css";

export const PostSummary = (props: { post: IPost }) => {
  const { post } = props;
  const { date, author, slug, tags } = post;
  console.log(tags);
  return (
    <article className={styles.wrapper}>
      <h1 className={styles.title}>{post.title}</h1>
      <section className={styles.postMeta}>
        <DateFormatter dateString={date} />
      </section>
      <section className={styles.postMeta}>
        <p>{post.excerpt}</p>
        <Link href={`/posts/${slug}`}>Read more about it</Link>
      </section>
    </article>
  );
};
