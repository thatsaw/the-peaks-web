import { createTheme } from "@vanilla-extract/css";
import { contract } from "./contract.css";

export const light = createTheme(contract, {
  color: {
    brand: "#1e2e79",
    heading: "",
    datetime: "",
    caption: "",
    content: "rgba(0, 0, 0, 0.8)",
    background: "white",
    yellow: "#f2c833",
    green: "#528e42",
    red: "#be4435",
    blue: "#548def",
  },
});
