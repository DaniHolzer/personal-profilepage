import { headerLayoutStyles } from "./HeaderLayout.styles";
import type { HeaderLayoutProps } from "./HeaderLayout.types";

//-------------------------------------------------------------------------------------------------
// HeaderLayout - Component

export function HeaderLayout({ className, debug }: HeaderLayoutProps) {

  return (
    <header id="header" className={headerLayoutStyles({ className, debug })}>
      I'm the header
    </header>
  );
}

