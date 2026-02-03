import { Button } from "../../root/Button";
import { useState } from "react";
import { lineStyling } from "./AnimatedMenuButton.styles";
import { cx } from "tailwind-variants";


//-------------------------------------------------------------------------------------------------
// Animated Menu Button Component


export function AnimatedHamburgerButton({ className }: { className?: string}) {
  const [open, setOpen] = useState(false);

  return (
    <Button
      onClick={() => setOpen(!open)}
      className={cx(className, "relative h-[3.2rem] w-[3.2rem]")}
      variant="tertiary"
    >
      {/* line 1 */}
      <span
        className={cx(lineStyling(), "top-[11px]", open && "translate-y-[4px] rotate-[-225deg]")}
      />
      {/* line 2 */}
      <span
        className={cx(lineStyling(), "bottom-[11px]", open && "translate-y-[-4px] rotate-[225deg]")}
      />
    </Button>
  )
}
