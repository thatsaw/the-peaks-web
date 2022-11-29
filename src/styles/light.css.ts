import { createTheme } from "@vanilla-extract/css";
import { contract } from "./contract.css";

export const light = createTheme(contract, {
  color: {
    brand: "blue",
    text: "rgba(0, 0, 0, 0.8)",
    background: "white",
  },
});
