import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Skills Container Styles

export const skillsContainerStyles = tv({
  base: "px-[2.5rem] py-[3rem] items-center text-[1.6rem] bg-bgPrimary text-textPrimary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});

export const skillIconSize = "5rem";
export const skillIconClass ="hover:scale-110";
