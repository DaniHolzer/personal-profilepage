import { Navigation } from "components/navigations/base/Navigation";
import { mainNavigationStyles, navLinkStyles } from "./MainNavigation.styles";
import type { MainNavigationProps } from "./MainNavigation.types";
import { Link } from "components/links/base/Link";

//-----------------------------------------------------------------------------
// Main Navigation - Component

export function MainNavigation({ className, debug, animation, onClose}: MainNavigationProps ) {

  return(
    <Navigation
      id="main-navigation"
      className={mainNavigationStyles({ className, debug, animation })}
      debug={ debug }
    >
      <ul className="flex flex-col items-center justify-start gap-[1rem]">
        <li>
          <Link
            id="mainNavigation__link-home"
            to="/"
            children="Home"
            className={navLinkStyles}
            title="Home"
            aria-label="Link to Home page"
            onClick={onClose}
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-about"
            to="/#aboutContainer"
            children="About"
            className={navLinkStyles}
            title="About"
            aria-label="Link to About page"
            onClick={onClose}
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-projects"
            to="projects"
            children="Projects"
            className={navLinkStyles}
            title="Projects"
            aria-label="Link to Projects page"
            onClick={onClose}
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-skills"
            to="skills"
            children="Skills"
            className={navLinkStyles}
            title="Skills"
            aria-label="Link to Skills page"
            onClick={onClose}
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-documents"
            to="documents"
            children="Documents"
            className={navLinkStyles}
            title="Documents"
            aria-label="Link to Documents page"
            onClick={onClose}
          />
        </li>
        <li>
          <Link
            id="mainNavigation__link-contact"
            to="contact"
            children="Contact"
            className={navLinkStyles}
            title="Contact"
            aria-label="Link to Contact page"
            onClick={onClose}
          />
        </li>
      </ul>
    </Navigation>
  );
};

