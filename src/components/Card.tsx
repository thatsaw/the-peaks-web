import { useMemo, memo } from "react";
import styles from "./Card.module.css";
import LogoGray from "../assets/logo-gray.svg";

type Props = {
  headline: string;
  trailText?: string;
  thumbnail?: string;
};

export function Card({ headline, trailText, thumbnail }: Props) {
  const colors = ["yellow", "green", "red", "blue"];
  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    /**
     * Do not add colors as dependency here, otherwise it will rerender
     * and change the color on click.
     */
    []
  );

  return (
    <figure
      className={styles.figure}
      style={{
        borderBottom: `5px solid ${color}`,
      }}
    >
      <img
        src={thumbnail || LogoGray}
        alt={headline}
        className={thumbnail ? styles.thumbnail : styles.placeholder}
      />
      <figcaption className={styles.figcaption}>
        <p className={styles.webTitle}>{headline}</p>
        <p className={styles.subtitle}>{trailText}</p>
      </figcaption>
    </figure>
  );
}
