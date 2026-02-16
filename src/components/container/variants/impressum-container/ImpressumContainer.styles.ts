import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Impressum Container Styles

export const impressumContainerStyles = tv({
  base: "px-[2.5rem] py-[3rem]",
  variants: {
    debug: {
      true: "border-2 border-dashed border-purple-500 bg-purple-300",
    },
  },
});
