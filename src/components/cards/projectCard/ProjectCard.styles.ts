import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Project Card Styles

export const projectCardStyles = tv({
  base: "items-center h-auto p-[2rem] rounded-3xl shadow-xl",
  variants: {
    debug: {
      true: "border-2 border-dashed border-amber-500 bg-amber-300"
    }
  }
})
