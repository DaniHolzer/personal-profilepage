import { Button } from "../../root/Button";
import { useState } from "react";
import { HamburgerButton2LinesStyling } from "./HamburgerButton2Lines.styles";
import { cx } from "tailwind-variants";


//-------------------------------------------------------------------------------------------------
// Animated Menu Button Component


export function HamburgerButton2Lines({ className }: { className?: string}) {
  const [open, setOpen] = useState(false);
  const { base, line, lineTop, lineBottom, animationTop, animationBottom } = HamburgerButton2LinesStyling({ size: "md" });

  return (
    <Button
      onClick={() => setOpen(!open)}
      className={ cx(className, base()) }
      variant="transparent"
    >
      {/* line top */}
      <span
        className={ cx(line(), lineTop(), open && animationTop()) }
      />
      {/* line bottom */}
      <span
        className={ cx(line(), lineBottom(), open && animationBottom()) }
      />
    </Button>
  )
}
