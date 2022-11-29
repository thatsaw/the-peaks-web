import { NavLink } from "react-router-dom";
import { active, pending } from "./Nav.css";

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
                isActive ? active : isPending ? pending : ""
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
