import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const links = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "about",
    name: "About",
  },
];

export function Nav() {
  return (
    <nav>
      <ul>
        {links.map(({ to, name }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive, isPending }) =>
                isActive ? styles.active : isPending ? styles.pending : ""
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
