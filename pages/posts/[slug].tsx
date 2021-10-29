import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Layout } from "../../components/layout/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { IPost } from "../../types/post";
import { BRAND_NAME } from "../../lib/constants";

type Props = {
  post: IPost;
  preview?: boolean;
};

const Post = ({ post, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Head>
        <title>
          {BRAND_NAME} - {post.title}
          {/* <meta property="og:image" content={post.ogImage.url} /> */}
        </title>
      </Head>
      {router.isFallback ? null : (
        <>
          <h1>{post.title}</h1>
          <article
            className="mb-32"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
        </>
      )}
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
