import { Layout } from "../components/layout/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import { BRAND_NAME } from "../lib/constants";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{BRAND_NAME} - All posts</title>
      </Head>
      {allPosts.map((p) => {
        return <p key={p.slug}>{p.slug}</p>;
      })}
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
