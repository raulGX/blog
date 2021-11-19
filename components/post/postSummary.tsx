import Link from "next/link";
import React from "react";

import { IPost } from "../../types";
import { DateDisplay } from "../dateDisplay";
import { Tag } from "../tag";

import styles from "./postSummary.module.css";

export const PostSummary = (props: { post: IPost }) => {
  const { post } = props;
  const { date, author, slug, tags } = post;
  return (
    <article className={styles.wrapper}>
      <div className={styles.titleBox}>
        <div className={styles.date}>
          <DateDisplay dateString={date} />
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.tags}>
          {tags.map((t) => (
            <Tag key={t} tag={t} />
          ))}
        </div>
      </div>
      <section className={styles.postMeta}></section>
      <section className={styles.postMeta}>
        <p>{post.excerpt}</p>
        <div className={styles.postCTA}>
          <Link href={`/posts/${slug}`}>read more</Link>
        </div>
      </section>
    </article>
  );
};
