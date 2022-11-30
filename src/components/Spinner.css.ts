import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

const rotation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const ring = style({
  width: "48px",
  height: "48px",
  border: `5px solid ${vars.color.brand}`,
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: `${rotation} 1s linear infinite`,
});
