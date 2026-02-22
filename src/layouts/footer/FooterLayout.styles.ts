import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Footer Layout Styles

export const footerLayoutStyles = tv({
  base:"flex flex-col items-center gap-[0.3rem] w-full text-[1.4rem] mb-[1rem] bg-bgPrimary text-textSecondary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-green-500 bg-green-300",
    },
  },
});
