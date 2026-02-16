import type { VariantProps } from "tailwind-variants";
import type { buttonStyles } from "./Button.styles";
import type { ButtonHTMLAttributes } from "react";

//-----------------------------------------------------------------------------
// Button - Properties

export type ButtonVariants = VariantProps<typeof buttonStyles>;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  className?: string;
  children?: React.ReactNode;
};
