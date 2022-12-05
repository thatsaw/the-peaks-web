import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
import LogoWhite from "../assets/logo-white.svg";

export function Logo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <NavLink to={`/`} className={styles.logo}>
      <img
        src={LogoWhite}
        alt="The Peaks"
        loading="lazy"
        width={120}
        height={100}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <>The Peaks</>}
    </NavLink>
  );
}
