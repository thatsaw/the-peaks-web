import { createSprinkles } from "@vanilla-extract/sprinkles";
import { responsiveProperties } from "./responsive.css";
import { colorProperties } from "./color.css";

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
