import { tv } from 'tailwind-variants';

//-----------------------------------------------------------------------------
// Container Styles

export const containerStyles = tv({
  base: 'w-full flex flex-col',
  variants: {
    debug: {
      true: 'border-2 border-dashed border-red-500 bg-red-300',
    },
  },
});
