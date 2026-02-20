import { footerLayoutStyles } from "./FooterLayout.styles";
import type { FooterLayoutProps } from "./FooterLayout.types";
import { Link } from "components/links/base/Link";

//-------------------------------------------------------------------------------------------------
// Footer Layout - Component

export function FooterLayout({className, debug}: FooterLayoutProps) {
  const currentYear = new Date().getFullYear();

  return(
    <footer
      id="footer"
      className={footerLayoutStyles({className, debug})}
    >
      <p
        id="footer__copyright"
        className=""
      >
        &copy; {currentYear} Daniel Holzer
      </p>
      <Link
        id="footer__link"
        to="sitenotice"
        className="text-textTertiary hover:text-textPrimary"
        children="Site Notice"
        aria-label="Link to site notice page"
        title="Site Notice"
      />
    </footer>
  );
};
