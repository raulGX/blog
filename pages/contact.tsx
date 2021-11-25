import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { PostSummary } from "../components/post";
import { BRAND_NAME } from "../lib/constants";
import { ThemeProvider } from "../components/theme/themeContext";

const Contact = () => {
  return (
    <ThemeProvider>
      <Layout>
        <div>Contact</div>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;
