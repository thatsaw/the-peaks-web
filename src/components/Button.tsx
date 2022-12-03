import { NavLink } from "react-router-dom";
import { HiBookmark } from "react-icons/hi2";
import styles from "./Button.module.css";

type Props = {
  text: string;
  mode?: "primary" | "secondary";
  to?: string;
};

export function Button({ text, mode = "primary", to }: Props) {
  const isPrimary = mode === "primary";
  const element = to ? (
    <NavLink to={to}>
      <HiBookmark />
      <span>{text}</span>
    </NavLink>
  ) : (
    <p>{text}</p>
  );

  return (
    <button className={isPrimary ? styles.primary : styles.secondary}>
      {element}
    </button>
  );
}
