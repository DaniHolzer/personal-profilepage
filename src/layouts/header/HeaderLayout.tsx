import { headerLayoutStyles } from "./HeaderLayout.styles";

//------------------------------------------------------------------------------
// HeaderLayout - Component

export function HeaderLayout({ debug, className }: {debug?: boolean, className?: string}) {
  return (
    <header id="header" className={headerLayoutStyles({ debug, className })}>
            I'm the header
    </header>
  );
}

