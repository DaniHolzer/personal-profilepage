import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'tailwind-variants';
import { buttonVariants } from './Button.styles';


//-----------------------------------------------------------------------------
// Button - Properties
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
    className?: string,
    variant?: "primary" | "secondary" | "transparent",
    size?: "sm" | "md",
    children?: React.ReactNode,
}


//-----------------------------------------------------------------------------
// Button - Component

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, children, ...props}, ref) => {
      return (
        <button
          ref={ref}
          className={buttonVariants({variant, size, className})}
          {...props}
        >
          {children}
        </button>
      )
    }
)

Button.displayName = "Button";
