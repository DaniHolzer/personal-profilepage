import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: ['inline-flex items-center justify-center pointer-events-auto',
  ],
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      tertiary: "bg-transparent",
    },
    size: {
      sm: "h-8 px-3 text-sm rounded-md",
      md: "h-10 px-4 text-base rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
