import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Skills Container Styles

export const skillsContainerStyles = tv({
  base: "px-[2.5rem] py-[3rem] items-center",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});
