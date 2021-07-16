import { Footer } from "../footer";
import { Header } from "../header";
import Meta from "../meta";
import styles from "./layout.module.css";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const theme = "light";
  return (
    <div className={`${styles.layout} ${theme}-theme`}>
      <Meta />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export { Layout };
