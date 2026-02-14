import type { VariantProps } from "tailwind-variants";
import type { aboutStyles } from "./About.styles";

//-----------------------------------------------------------------------------
// About Container Properties

export interface AboutProps extends VariantProps<typeof aboutStyles> {
  className?: string;
};
