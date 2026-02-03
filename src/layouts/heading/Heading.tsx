import { headingStyles } from './Heading.styles';

//-------------------------------------------------------------------------------------------------
// Heading Component

export function Heading() {
  const { base, logo} = headingStyles();
  return (
    <section aria-description="Heading" className={base()}>
      <a href="/" className={logo()}>Daniel Holzer</a>
      <button className="">nav</button>
    </section>
  );
}
