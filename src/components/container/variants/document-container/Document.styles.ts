import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Document Container Styles

export const documentStyles = tv({
  base: "px-[2.5rem] py-[3rem] items-center text-[1.6rem] bg-bgPrimary text-textPrimary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});
