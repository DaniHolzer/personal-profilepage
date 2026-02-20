import { tagStyles } from "./Tag.styles";
import type { TagProps } from "./Tag.types";
import { useId } from "react";

//-------------------------------------------------------------------------------------------------
// Tag - Component

export function Tag({ id, className, children }: TagProps) {
  const generatedId = useId();

  return(
    <div
      id={ id ?? generatedId }
      className={tagStyles({ className })}
    >
      { children }
    </div>
  );
}
