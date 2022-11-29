import { createGlobalTheme } from "@vanilla-extract/css";

export const global = createGlobalTheme("#app", {
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  font: {
    heading: "Georgia, Times New Roman, serif",
    body: "system-ui",
  },
});
