import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Projects Container - Styles

export const projectsContainerStyles = tv({
  base: "px-[2.5rem] py-[3rem] items-center",
  variants: {
    debug: {
      true: "border-2 border-dashed border-indigo-500 bg-indigo-300"
    },
  },
});
