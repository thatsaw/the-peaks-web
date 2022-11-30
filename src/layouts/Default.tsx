import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { dark } from "../styles/dark.css";
import { light } from "../styles/light.css";
import { Nav } from "../components/Nav";

export function Default() {
  const [isDark, setIsDark] = useState(false);
  const navigation = useNavigation();

  return (
    <div id="app" className={isDark ? dark : light}>
      <header>Header</header>
      <main>
        <Nav />
        <div
          id="outlet"
          className={navigation.state === "loading" ? "loading" : ""}
        >
          <Outlet />
        </div>
        <button onClick={() => setIsDark((currentTheme) => !currentTheme)}>
          {isDark ? "Dark" : "Light"}
        </button>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
