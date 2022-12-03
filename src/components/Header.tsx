import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
      </div>
    </header>
  );
}
