import type { VariantProps } from "tailwind-variants";
import type { contactStyles } from "./Contact.styles";

//-----------------------------------------------------------------------------
// Contact Container Properties

export interface ContactProps extends VariantProps<typeof contactStyles> {
  className?: string;
};
