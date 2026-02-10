import { headerLayoutStyles } from "./HeaderLayout.styles";

//------------------------------------------------------------------------------
// HeaderLayout - Component

export function HeaderLayout({ debug }: {debug?: boolean}) {
  return (
    <header id="header" className={headerLayoutStyles({ debug })}>
            I'm the header
    </header>
  );
}

