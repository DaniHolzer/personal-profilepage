import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Main Navigation Styles

export const mainNavigationStyles = tv({
  base: "flex-col fixed inset-0 mt-[6rem] z-40 p-[3rem] bg-bgPrimary backdrop-blur-sm ",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});

export const navLinkStyles = "text-3xl text-textPrimary hover:text-textSecondary";
