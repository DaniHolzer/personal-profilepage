import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// HeaderLayout Styles

export const headerLayoutStyles = tv({
  base: "fixed top-0 left-0 right-0 h-14 flex justify-between items-center p-[1rem] h-auto bg-bgSecondary",
  variants: {
    debug: {
      true: "border-2 border-dashed border-blue-500 bg-blue-300",
    },
  },
});
