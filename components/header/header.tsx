import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import { Theme, ThemeContext } from "../theme/themeContext";

import styles from "./header.module.css";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link href="/">
            <img
              className={styles.brandingLogo}
              src={`images/logo-${theme}.png`}
            />
          </Link>
          <p>A blog about building reliable software.</p>
        </div>
        <nav className={styles.navbar}>
          <Link href="/">home</Link>
          <Link href="/contact">contact</Link>
          <span>| </span>

          <div>
            <span onClick={toggleTheme}>
              {theme === Theme.light ? "D" : "L"}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};
