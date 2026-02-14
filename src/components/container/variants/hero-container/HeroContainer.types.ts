import type { VariantProps } from "tailwind-variants";
import type { heroStyles } from "./HeroContainer.styles";

//-----------------------------------------------------------------------------
// Hero Section Properties

export interface HeroProps extends VariantProps<typeof heroStyles> {
  className?: string;
};
