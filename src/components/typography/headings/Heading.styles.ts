import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Heading Styles

export const headingStyles = tv({
  base: "font-bold text-textPrimary",
  variants: {
    level: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "tet-base",
    },
    debug: {
      true: "border-2 border-dashed border-pink-500 bg-pink-300",
    },
  },
});
