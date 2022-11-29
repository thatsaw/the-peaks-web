import { useState } from "react";
import { Outlet } from "react-router-dom";
import { dark } from "../styles/dark.css";
import { light } from "../styles/light.css";
import { Nav } from "../components/Nav";

export function Default() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div id="app" className={isDark ? dark : light}>
      <header>Header</header>
      <main>
        <Nav />
        <Outlet />
        <button onClick={() => setIsDark((currentTheme) => !currentTheme)}>
          {isDark ? "Dark" : "Light"}
        </button>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
