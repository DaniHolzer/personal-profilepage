import { tv } from "tailwind-variants";

//-----------------------------------------------------------------------------
// ImageLink - Styles

export const imageLinkVariants = tv({
  base: ["inline-flex items-center justify-center px-4 py-2"],
  variants: {
    variant: {
      primary: "bg-transparent fill-[#999] hover:fill-[#ddd] w-[2.4rem] h-[2.4rem]"
    },
  },
  defaultVariants: { variant: "primary"},
});
