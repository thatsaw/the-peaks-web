import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <NavLink to={`/`} className={styles.logo}>
      The Peaks
    </NavLink>
  );
}
