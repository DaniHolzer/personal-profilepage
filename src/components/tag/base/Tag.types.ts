import type { VariantProps } from "tailwind-variants";
import type { tagStyles } from "./Tag.styles.ts";

//-----------------------------------------------------------------------------
// Tag Properties

export interface TagProps extends VariantProps<typeof tagStyles> {
  id?: string;
  className?: string;
  children: string;
}
