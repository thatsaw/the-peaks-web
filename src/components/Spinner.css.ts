import { style, keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const ring = style({
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  position: "relative",
  animation: `${rotate} 1s linear infinite`,
  ":before": {
    content: "",
    boxSizing: "border-box",
    position: "absolute",
    inset: "0px",
    borderRadius: "50%",
    border: "5px solid rgba(0, 0, 0, 0.5)",
    animation: "prixClipFix 2s linear infinite",
  },
});
