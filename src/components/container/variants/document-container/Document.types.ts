import type { VariantProps } from "tailwind-variants";
import type { documentStyles } from "./Document.styles";

//-----------------------------------------------------------------------------
// Document Container Properties

export interface DocumentProps extends VariantProps<typeof documentStyles> {
  className?: string;
};


