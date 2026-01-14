import { forwardRef, type ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

//-----------------------------------------------------------------------------
// Button - styles

export const buttonVariants = tv({
    base: [

    ],
    variants: {

    },
    defaultVariants: {

    }
});

//-----------------------------------------------------------------------------
// Button - properties

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants>{

    className: string;
    children: React.ReactNode;
};


//-----------------------------------------------------------------------------
// Button - component

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className },ref) => {

        return (
            <button
                type="button"
                ref={ref}
                className={buttonVariants({className})}
            >
                { children }
            </button>
        )
    }
)
