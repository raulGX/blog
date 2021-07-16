import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};

export { Footer };
