import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Link Styles

export const linkStyles = tv({
  base: "",
  variants: {
    debug: {
      true: "border-2 border-dashed border-orange-500 bg-orange-300",
    },
  },
});
