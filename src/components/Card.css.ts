import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

export const wrapper = style({
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: "red",
  borderBottom: "4px solid green",
});

export const container = style({
  padding: "12px 10px 15px",
  color: "white",
  backgroundColor: vars.color.brandTransparent,
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
});

export const titleCx = style({
  fontSize: "24px",
});

export const subtitleCx = style({
  marginTop: "8px",
});

export const imageCx = style({
  width: "100%",
  height: "100%",
});
