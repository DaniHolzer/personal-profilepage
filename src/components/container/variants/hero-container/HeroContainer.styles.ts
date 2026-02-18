import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Hero Section Styles

export const heroStyles = tv({
  base: "items-center justify-between py-[3rem] px-[2.5rem] bg-bgPrimary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-yellow-500 bg-yellow-300",
    },
  },
});
