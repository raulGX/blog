import styles from "./tag.module.css";

const Tag = ({ tag }: { tag: string }) => {
  return <div className={styles.tag}>#{tag}</div>;
};

export { Tag };
