import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Socials Container Styles

export const socialsStyles = tv({
  base: "flex-row justify-center flex-wrap gap-x-[2rem] gap-y-[1rem] p-[1rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-teal-500 bg-teal-300"
    },
  },
});
