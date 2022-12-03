import { useMemo } from "react";
import styles from "./Card.module.css";

type Props = {
  webTitle: string;
  subtitle?: string;
  thumbnail?: string;
};

export function Card({ webTitle, subtitle, thumbnail }: Props) {
  const colors = ["yellow", "green", "red", "blue"];
  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    [colors]
  );

  return (
    <figure
      className={styles.figure}
      style={{
        borderBottom: `5px solid ${color}`,
      }}
    >
      <img src={thumbnail} alt={webTitle} className={styles.thumbnail} />
      <figcaption className={styles.figcaption}>
        <p className={styles.webTitle}>{webTitle}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </figcaption>
    </figure>
  );
}
