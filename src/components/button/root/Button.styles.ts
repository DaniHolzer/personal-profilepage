import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: ['inline-flex items-center justify-center font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50 h-12',
  ],
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
    },
    size: {
      md: "h-10 px-4 text-base rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
