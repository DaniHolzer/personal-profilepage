import type { VariantProps } from "tailwind-variants";
import type { socialsStyles } from "./SocialsContainer.styles";

//-----------------------------------------------------------------------------
// Socials Container Properties

export interface SocialsProps extends VariantProps<typeof socialsStyles> {
  className?: string;
};
