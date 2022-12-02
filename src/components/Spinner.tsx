import styles from "./Spinner.module.css";

export function Spinner() {
  return <span data-testid="spinner" className={styles.ring} />;
}
