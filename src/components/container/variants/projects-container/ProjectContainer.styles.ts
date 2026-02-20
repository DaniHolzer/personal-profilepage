import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Projects Container - Styles

export const projectsContainerStyles = tv({
  base: "px-[2.5rem] py-[3rem] items-center bg-bgPrimary text-textPrimary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300"
    },
  },
});
