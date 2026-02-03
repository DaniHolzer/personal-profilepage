import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'tailwind-variants';
import { buttonStyles } from './Button.styles';


//-------------------------------------------------------------------------------------------------
// Button Properties
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonStyles> {
    variant?: "primary",
    size?: "md",
    children?: React.ReactNode,
}


//-------------------------------------------------------------------------------------------------
// Button Component
