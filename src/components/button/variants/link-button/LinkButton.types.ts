import type { ButtonVariants } from "components/button/base/Button.types";

//-----------------------------------------------------------------------------
// Link Button Properties

export interface LinkButtonProps extends ButtonVariants, React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children: React.ReactNode;
  id?: string;
}
