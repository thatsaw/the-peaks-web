import { style } from "@vanilla-extract/css";
import { sprinkles } from "../styles/sprinkles.css";

export const card = style([
  sprinkles({
    display: "flex",
    paddingX: "small",
    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
    background: {
      lightMode: "background",
      darkMode: "background",
    },
  }),
  {
    ":hover": {
      outline: "2px solid currentColor",
    },
  },
]);