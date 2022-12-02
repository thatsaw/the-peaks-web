import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import "./Default.css";

export function Default() {
  const [isDark, setIsDark] = useState(false);
  const navigation = useNavigation();

  return (
    <div id="app" className={isDark ? "dark" : "light"}>
      <Header />
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
      <Footer />
    </div>
  );
}
