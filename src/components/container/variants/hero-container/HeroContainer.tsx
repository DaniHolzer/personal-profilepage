import { Container } from "components/container/base/Container";
import { heroStyles } from "./HeroContainer.styles";
import type { HeroProps } from "./HeroContainer.types";
import { Link } from "components/links/base/Link";
import portrait from "src/assets/portrait.jpg";
import { SocialsContainer } from "components/container/variants/socials-container/SocialsContainer";


//-----------------------------------------------------------------------------
// Hero Section Component

export function HeroContainer({className, debug}: HeroProps) {

  return(
    <Container
      as="div"
      id="heroContainer"
      className={heroStyles({className, debug})}
    >
      <p className="text-[2.8rem] text-center mb-[1rem] text-textPrimary" id="heroContainer__intro">
        Software Engineer from South Tyrol.
      </p>
      <Link
        id="heroContainer__link"
        to="#aboutContainer"
        className="uppercase underline underline-offset-6 decoration-red-400 text-[1.6rem] text-textSecondary hover:text-textPrimary"
        aria-label="Link to About page"
        title="About"
      >
        More about me
      </Link>
      <img src={ portrait } className="w-[20rem] h-[20rem] my-[6.5rem] rounded-2xl"/>
      <SocialsContainer/>
    </Container>
  )
}



