import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Main Navigation Styles

export const mainNavigationStyles = tv({
  base: "flex-col fixed inset-0 mt-[6rem] z-40 backdrop-blur-sm p-[3rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
    animation: {
      open: "translate-y-0",
      closed: "-translate-y-full",
    },
  },
});

export const navLinkStyles = "test-2xl";
