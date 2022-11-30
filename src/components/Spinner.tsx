import { ring } from "./Spinner.css";

export function Spinner() {
  return <span data-testid="spinner" className={ring} />;
}
