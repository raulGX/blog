import Head from "next/head";
import { BRAND_NAME } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <link href={`/prism.css`} rel="stylesheet" />
      <meta name="description" content={`A blog by ${BRAND_NAME}.`} />
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
};

export default Meta;
