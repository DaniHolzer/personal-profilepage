import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'tailwind-variants';
import { buttonVariants } from './Button.styles';


//-------------------------------------------------------------------------------------------------
// Button Properties
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
    className?: string,
    variant?: "primary" | "secondary" | "tertiary",
    size?: "sm" | "md",
    children?: React.ReactNode,
}


//-------------------------------------------------------------------------------------------------
// Button Component

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, children}, ref) => {
      return (
        <button
          type="button"
          ref={ref}
          className={buttonVariants({variant, size, className})}
        >
          {children}
        </button>
      )
    }
)
