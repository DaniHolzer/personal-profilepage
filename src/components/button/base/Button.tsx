import { buttonStyles } from './Button.styles';
import type { ButtonProps } from "./Button.types";

//-----------------------------------------------------------------------------
// Button - Component

export function Button({ className, variant, size, fullWidth, children }: ButtonProps) {

  return (
    <button
      className={buttonStyles({ variant, size, fullWidth, className })}
    >
      {children}
    </button>
  );
};
