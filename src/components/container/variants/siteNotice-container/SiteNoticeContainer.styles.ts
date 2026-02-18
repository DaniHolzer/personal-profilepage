import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Site Notice Container Styles

export const siteNoticeContainerStyles = tv({
  base: "px-[2.5rem] py-[3rem] gap-[2rem] text-[0.8rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});

export const siteNoticeHeadingStyles = "mb-[0.5rem]";
