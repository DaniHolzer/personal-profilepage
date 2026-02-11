import type { VariantProps } from "tailwind-variants";
import type { headerLayoutStyles } from "./HeaderLayout.styles";

//-----------------------------------------------------------------------------
// Header Layout Properties

export interface HeaderLayoutProps extends VariantProps<typeof headerLayoutStyles> {
  className?: string;
};
