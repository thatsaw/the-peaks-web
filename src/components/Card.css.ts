import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

export const wrapperBase = style({
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: "red",
});

export const wrapper = [
  style([
    wrapperBase,
    {
      borderBottom: `4px solid ${vars.color.green}`,
    },
  ]),
  style([
    wrapperBase,
    {
      borderBottom: `4px solid ${vars.color.red}`,
    },
  ]),
  style([
    wrapperBase,
    {
      borderBottom: `4px solid ${vars.color.yellow}`,
    },
  ]),
  style([
    wrapperBase,
    {
      borderBottom: `4px solid ${vars.color.blue}`,
    },
  ]),
  style([
    wrapperBase,
    {
      borderBottom: `4px solid ${vars.color.green}`,
    },
  ]),
];

export const imageCx = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const overlayBase = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "12px 10px 15px",
  color: "white",
  backgroundColor: vars.color.brandTransparent,
});

export const overlaySmall = style([
  overlayBase,
  {
    height: "30%",
  },
]);

export const overlayLarge = style([
  overlayBase,
  {
    top: 0,
  },
]);

export const titleLargeCx = style({
  fontSize: "24px",
});

export const titleSmallCx = style({
  fontSize: "18px",
});

export const subtitleCx = style({
  marginTop: "8px",
});
