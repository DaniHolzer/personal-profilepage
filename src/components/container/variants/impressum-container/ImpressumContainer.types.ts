import type { VariantProps } from "tailwind-variants";
import type { impressumContainerStyles } from "./ImpressumContainer.styles";

//-----------------------------------------------------------------------------
// Skills Container Properties

export interface ImpressumContainerProps extends VariantProps<typeof impressumContainerStyles> {
  className?: string;
};


