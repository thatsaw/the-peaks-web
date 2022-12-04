import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";
import React from "react";

type Props = {
  text: string;
  mode?: "primary" | "secondary";
  to?: string;
  children?: React.ReactNode;
  // onClick?: (event: Event) => void;
  onClick?: () => void;
};

export function Button({
  text,
  mode = "primary",
  to,
  children,
  onClick,
}: Props) {
  const isPrimary = mode === "primary";
  const element = to ? (
    <NavLink to={to}>
      {children}
      <span>{text}</span>
    </NavLink>
  ) : (
    <p>
      {children} {text}
    </p>
  );

  return (
    <button
      className={isPrimary ? styles.primary : styles.secondary}
      onClick={onClick}
    >
      {element}
    </button>
  );
}
