import type { VariantProps } from "tailwind-variants";
import type { navigationStyles } from "./Navigation.styles";

//-----------------------------------------------------------------------------
// Navigation Properties

export interface NavigationProps extends VariantProps<typeof navigationStyles> {
  id?: string;
  className?: string;
  children: React.ReactNode;
};
