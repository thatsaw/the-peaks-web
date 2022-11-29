import { globalStyle } from "@vanilla-extract/css";
import { global } from "./global.css";
import { contract } from "./contract.css";

export const vars = { ...global, ...contract };

globalStyle("#app", {
  padding: vars.space.large,
  fontFamily: vars.font.body,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  minHeight: "100vh",
});
