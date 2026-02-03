import { headingStyles } from './Heading.styles';
import { Button } from '../../components/button/root/Button';
import { IconButton } from '../../components/button/variants/iconButton/IconButton';
import { AnimatedHamburgerButton } from "../../components/button/variants/animatedMenuButton/AnimatedMenuButton";

//-------------------------------------------------------------------------------------------------
// Heading Component

export function Heading() {
  const { base, logo} = headingStyles();
  return (
    <section aria-description="Heading" className={base()}>
      <a href="/" className={logo()}>Daniel Holzer</a>
      <AnimatedHamburgerButton />
    </section>
  )
}
