import type { VariantProps } from "tailwind-variants";
import type { mainNavigationStyles } from "./MainNavigation.styles";

//-----------------------------------------------------------------------------
// Main Vavigation Properties

export interface MainNavigationProps extends VariantProps<typeof mainNavigationStyles> {
  className?: string;
  onLinkClick?: () => void;
};
