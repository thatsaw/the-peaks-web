import { createTheme } from "@vanilla-extract/css";
import { contract } from "./contract.css";

export const dark = createTheme(contract, {
  color: {
    brand: "blue",
    text: "rgba(255, 255, 255, 0.85)",
    background: "black",
  },
});
