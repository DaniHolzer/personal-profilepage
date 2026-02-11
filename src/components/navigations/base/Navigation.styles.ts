import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Navigation Styles

export const navigationStyles = tv({
  base: "flex",
  variants: {
    debug: {
      true: "border-2 border-dashed border-green-500 bg-green-300",
    },
  },
});
