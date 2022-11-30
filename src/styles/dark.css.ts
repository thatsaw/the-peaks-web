import { createTheme } from "@vanilla-extract/css";
import { contract } from "./contract.css";

export const dark = createTheme(contract, {
  color: {
    brand: "#1e2e79",
    brandTransparent: "rgba(9, 53, 123, 0.8)",
    heading: "rgba(0, 0, 0, 1)",
    datetime: "rgba(0, 0, 0, 0.6)",
    caption: "rgba(0, 0, 0, 0.4)",
    content: "rgba(255, 255, 255, 0.85)",
    background: "black",
    yellow: "#f2c833",
    green: "#528e42",
    red: "#be4435",
    blue: "#548def",
  },
});
