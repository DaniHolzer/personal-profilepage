import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Card Styles

export const cardStyles = tv({
  base: "h-auto p-[2rem] rounded-xl shadow-lg",
  variants: {
    debug: {
      true: "border-2 border-dashed border-amber-500 bg-amber-300"
    }
  }
})
