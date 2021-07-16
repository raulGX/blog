import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>© Devroll - {new Date().getFullYear()}</p>
        <p>
          Licensed under{" "}
          <a
            target="_blank"
            href={"https://creativecommons.org/licenses/by/4.0/"}
          >
            CC BY 4.0
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
