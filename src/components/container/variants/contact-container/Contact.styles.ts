import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Contact Container Styles

export const contactStyles = tv({
  base: "px-[2.5rem] py-[3rem] items-center gap-[3rem] text-[1.6rem] bg-bgPrimary text-textPrimary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-lime-500 bg-lime-300",
    },
  },
});
