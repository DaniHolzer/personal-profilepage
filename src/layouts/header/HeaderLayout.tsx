import { useState, useEffect } from "react";
import { headerLayoutStyles } from "./HeaderLayout.styles";
import type { HeaderLayoutProps } from "./HeaderLayout.types";
import { Link } from "components/links/base/Link";
import { HotdogButton } from "components/button/variants/hotdogButtonNew/HotdogButton";
import { MainNavigation } from "components/navigations/variants/main-navigation/MainNavigation";

//-------------------------------------------------------------------------------------------------
// HeaderLayout - Component

export function HeaderLayout({ className, debug }: HeaderLayoutProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle function
  const toggleNav = () => setIsNavOpen((prev) => !prev);

  // Body scroll lock (prevent background scroll)
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ''; };
  }, [isNavOpen]);

  return (
    <>
      <header id="header" className={headerLayoutStyles({ className, debug })}>
        <Link
          id="header__logo"
          to="/"
          className="text-[2.4rem] underline underline-offset-4 decoration-red-500"
          children="Daniel Holzer"
          aria-label="Logo"
          title="Home"
        />
        <HotdogButton
          isOpen={isNavOpen}
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-controls="main-navigation"
        />
      </header>

      {isNavOpen && (
        <MainNavigation
          debug={debug}
        />
      )}
    </>
  );
}

