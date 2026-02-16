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
        to="impressum"
        className=""
        children="Impressum"
        aria-label="Link to impressum page"
        title="Impressum"
      />
    </footer>
  );
};
