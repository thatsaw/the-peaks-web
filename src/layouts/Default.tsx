import { useState } from "react";
import { dark } from "../styles/dark.css";
import { light } from "../styles/light.css";

type Props = {
  children: React.ReactNode;
};

export function Default({ children }: Props) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div id="app" className={isDark ? dark : light}>
      <header>Header</header>
      <main>
        {children}
        <button onClick={() => setIsDark((currentTheme) => !currentTheme)}>
          {isDark ? "Dark" : "Light"}
        </button>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
