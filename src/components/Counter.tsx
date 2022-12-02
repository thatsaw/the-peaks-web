import { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}
