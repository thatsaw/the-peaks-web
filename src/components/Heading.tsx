import styles from "./Heading.module.css";

type Props = {
  text: string;
};

export function Heading({ text }: Props) {
  return <h1 className={styles.heading}>{text}</h1>;
}
