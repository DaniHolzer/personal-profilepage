import type { LinkButtonProps } from "./LinkButton.types";
import { buttonStyles } from "components/button/base/Button.styles";
import { useId } from "react";

//-------------------------------------------------------------------------------------------------
// Link Button - Component

export function LinkButton({
  id,
  className,
  variant,
  size,
  fullWidth,
  children}: LinkButtonProps) {
  const generatedId = useId();

  return(
    <a
      id={ id ?? generatedId }
      className={buttonStyles({ className, variant, size, fullWidth })}
    >
      { children }
    </a>
  );
};
