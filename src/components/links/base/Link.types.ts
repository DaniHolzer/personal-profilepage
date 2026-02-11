import type { VariantProps } from "tailwind-variants";
import type { linkStyles } from "./Link.styles";

//-----------------------------------------------------------------------------
// Link Properties

export interface LinkProps extends VariantProps<typeof linkStyles> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  to: string;
  title?: string;
  'aria-label'?: string;
};
