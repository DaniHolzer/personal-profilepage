import { tv } from 'tailwind-variants';

//-----------------------------------------------------------------------------
// Heading - Styles

export const headingStyles = tv({
  slots: {
    base: 'bg-green-300 w-full flex flex-row justify-between items-center h-auto p-[1rem]',
    logo: 'text-[2.4rem] font-[400]',
  }
});
