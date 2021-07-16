import Link from "next/link";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link href="/">
            <a>Devroll</a>
          </Link>
          <p>A blog about building reliable software.</p>
        </div>
        <nav className={styles.navbar}>
          <Link href="/">All posts</Link>
          <Link href="/">Search</Link>
          <Link href="/">About</Link>
        </nav>
      </div>
    </header>
  );
};
