import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Main Navigation Styles

export const mainNavigationStyles = tv({
  base: "",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});
