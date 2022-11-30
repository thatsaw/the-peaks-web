import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "2fr repeat(2, 1fr)",
  gridTemplateRows: "2fr 1fr",
  gap: "30px",
  gridTemplateAreas: `"area1 area2 area3" "area1 area4 area5"`,
});
