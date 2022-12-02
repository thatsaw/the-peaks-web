import { useMemo } from "react";
import styles from "./Card.module.css";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  showImage?: boolean;
  showSubtitle?: boolean;
};

export function Card({ title, subtitle, image }: Props) {
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
      <img src={image} alt={title} className={styles.image} style={{}} />
      <figcaption className={styles.figcaption}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </figcaption>
    </figure>
  );
}
