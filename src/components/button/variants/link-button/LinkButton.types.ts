import type { ButtonVariants } from "components/button/base/Button.types";
import type { VariantProps } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Link Button Properties

export interface LinkButtonProps extends ButtonVariants, React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children: React.ReactNode;
}
