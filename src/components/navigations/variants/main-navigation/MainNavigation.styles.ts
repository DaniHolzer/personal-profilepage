import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Main Navigation Styles

export const mainNavigationStyles = tv({
  base: "justify-center px-[2.5rem] py-[3rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});
