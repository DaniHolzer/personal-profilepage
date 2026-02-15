import type { VariantProps } from "tailwind-variants";
import type { cardStyles } from "./Card.styles";

//-----------------------------------------------------------------------------
// Project Card Properties

export interface CardProps extends VariantProps<typeof cardStyles> {
  className?: string;
  id?: string;
  children: React.ReactNode;
}
