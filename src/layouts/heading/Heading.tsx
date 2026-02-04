import { headingStyles } from './Heading.styles';
import { HamburgerButton2Lines } from "../../components/button/variants/hamburgerButton2Lines/HamburgerButton2Lines";

//-------------------------------------------------------------------------------------------------
// Heading Component

export function Heading() {
  const { base, logo} = headingStyles();
  return (
    <section aria-description="Heading" className={base()}>
      <a href="/" className={logo()}>Daniel Holzer</a>
      <HamburgerButton2Lines />
    </section>
  )
}
