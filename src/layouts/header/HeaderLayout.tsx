import { headerLayoutStyles } from "./HeaderLayout.styles";
import type { HeaderLayoutProps } from "./HeaderLayout.types";
import { Link } from "components/links/base/Link";
import { HotdogButton } from "components/button/variants/hotdogButton/HotdogButton";

//-------------------------------------------------------------------------------------------------
// HeaderLayout - Component

export function HeaderLayout({ className, debug }: HeaderLayoutProps) {

  return (
    <header id="header" className={headerLayoutStyles({ className, debug })}>
      <Link
        id="header__logo"
        to="#"
        className="text-[2.4rem] underline underline-offset-4 decoration-red-500"
        children="Daniel Holzer"
        aria-label="Logo"
        title="Home"
      />
      <HotdogButton />
    </header>
  );
}

