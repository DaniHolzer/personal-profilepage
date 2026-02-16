import type { VariantProps } from "tailwind-variants";
import type { footerLayoutStyles } from "./FooterLayout.styles";

//-----------------------------------------------------------------------------
// Footer Layout Properties

export interface FooterLayoutProps extends VariantProps<typeof footerLayoutStyles> {
  className?: string;
};
