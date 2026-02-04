import { tv } from "tailwind-variants";

//-------------------------------------------------------------------------------------------------
// Animated Menu Button Styling

export const HamburgerButton2LinesStyling = tv({
  slots: {
    base:  "relative",
    line: "absolute left-0 w-full bg-gray-900 transition-transform duration-500",
    lineTop: "",
    lineBottom: "",
    animationTop: "",
    animationBottom: "",
  },
  variants: {
    size: {
      sm: {
        base: "h-[2rem] w-[2rem]",
        line: "h-[2px]",
        lineTop: "top-[5px]",
        lineBottom: "bottom-[5px]",
        animationTop: "translate-y-[4px] rotate-[-225deg]",
        animationBottom: "translate-y-[-4px] rotate-[225deg]",
      },
      md: {
        base: "h-[3.2rem] w-[3.2rem]",
        line: "h-[3px]",
        lineTop: "top-[9px]",
        lineBottom: "bottom-[9px]",
        animationTop: "translate-y-[5.5px] rotate-[-225deg]",
        animationBottom: "translate-y-[-5.5px] rotate-[225deg]",
      },
      lg: {
        base: "h-[4rem] w-[4rem]",
        line: "h-[4px]",
        lineTop: "top-[11px]",
        lineBottom: "bottom-[11px]",
        animationTop: "translate-y-[7px] rotate-[-225deg]",
        animationBottom: "translate-y-[-7px] rotate-[225deg]",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

