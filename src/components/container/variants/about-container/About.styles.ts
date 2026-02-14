import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// About Container Styles

export const aboutStyles = tv({
  base: "px-[2.5rem] py-[3rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-violet-500 bg-violet-300",
    },
  },
});
