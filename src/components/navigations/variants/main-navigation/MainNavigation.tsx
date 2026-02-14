import { Navigation } from "components/navigations/base/Navigation";
import { mainNavigationStyles } from "./MainNavigation.styles";
import type { MainNavigationProps } from "./MainNavigation.types";
import { Link } from "components/links/base/Link";

//-----------------------------------------------------------------------------
// Main Navigation - Component

export function MainNavigation({ className, debug }: MainNavigationProps ) {

  return(
    <Navigation
      id="main-navigation"
      className={mainNavigationStyles({ className, debug })}
      debug={ debug }
    >
      <ul className="flex flex-col items-center justify-start gap-[1rem]">
        <li>
          <Link
            id="mainNavigation__link-home"
            to="#"
            children="Home"
            className="text-2xl"
            title="Home"
            aria-label="Link to Home page"
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-home"
            to="#"
            children="Home"
            className="text-2xl"
            title="Home"
            aria-label="Link to Home page"
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-home"
            to="#"
            children="Home"
            className="text-2xl"
            title="Home"
            aria-label="Link to Home page"
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-home"
            to="#"
            children="Contact"
            className=""
            title="Home"
            aria-label="Link to Home page"
          />
        </li>
      </ul>
    </Navigation>
  );
};

