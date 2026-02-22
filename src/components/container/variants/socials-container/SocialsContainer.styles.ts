import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Socials Container Styles

export const socialsStyles = tv({
  base: "p-[1rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-teal-500 bg-teal-300"
    },
  },
});

export const iconStyles = "fill-textSecondary hover:fill-textPrimary hover:scale-110";
export const iconSize = "28";
