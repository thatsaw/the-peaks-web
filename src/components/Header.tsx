import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  const navigate = useNavigate();
  const [q, setQ] = useState<string>();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`search?q=${q}`);
  }

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <form onSubmit={onSubmit} className={styles.search}>
          <input
            id="q"
            aria-label="Search all news"
            placeholder="Search all news"
            type="search"
            name="q"
            key="q"
            autoFocus={q ? true : false}
            onChange={(event) => setQ(event.target.value)}
          />
        </form>
      </div>
    </header>
  );
}
