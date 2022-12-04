import { useMemo } from "react";
import styles from "./Card.module.css";

type Props = {
  headline: string;
  trailText?: string;
  thumbnail?: string;
};

export function Card({ headline, trailText, thumbnail }: Props) {
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
      <img src={thumbnail} alt={headline} className={styles.thumbnail} />
      <figcaption className={styles.figcaption}>
        <p className={styles.webTitle}>{headline}</p>
        <p className={styles.subtitle}>{trailText}</p>
      </figcaption>
    </figure>
  );
}
