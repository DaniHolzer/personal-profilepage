import { Navigation } from "components/navigations/base/Navigation";
import { mainNavigationStyles } from "./MainNavigation.styles";
import type { MainNavigationProps } from "./MainNavigation.types";

//-----------------------------------------------------------------------------
// Main Navigation - Component

export function MainNavigation({ className, debug }: MainNavigationProps ) {

  return(
    <Navigation
      id="main-navigation"
      className={mainNavigationStyles({ className, debug })}
      debug={ debug }
    >
      Hi I'm the Main Navigation
    </Navigation>
  );
};

