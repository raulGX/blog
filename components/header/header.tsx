import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";

import { ThemeContext } from "../theme/themeContext";

import styles from "./header.module.css";

let _routes: {
  route: string;
  displayName: string;
  active: boolean;
}[] = [
  { route: "/", displayName: "home", active: false },
  { route: "/contact", displayName: "contact", active: false },
];

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { route } = useRouter();

  const routes = useMemo(() => {
    return _routes.map((r) => ({
      ...r,
      active: r.route === route,
    }));
  }, [route]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link href="/">
            <img
              className={styles.brandingLogo}
              src={`/images/logo-${theme}.png`}
            />
          </Link>
        </div>
        <nav className={styles.navbar}>
          {routes.map((r) => (
            <Link key={r.displayName} href={r.route}>
              <a className={`${r.active === true ? styles.activeRoute : ""}`}>
                {r.displayName}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
