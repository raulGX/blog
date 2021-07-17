import { Layout } from "../components/layout/layout";
import { PostSummary } from "../components/post";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { IPost } from "../types/post";
import { BRAND_NAME } from "../lib/constants";

type Props = {
  allPosts: IPost[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{BRAND_NAME} - All posts</title>
      </Head>
      {allPosts.map((p) => {
        return <PostSummary key={p.slug} post={p}></PostSummary>;
      })}
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
