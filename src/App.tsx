import { Default } from "./layouts/Default";
import { Counter } from "./components/Counter";

function App() {
  return (
    <Default>
      <h1>The Peaks</h1>
      <Counter />
    </Default>
  );
}

export default App;
