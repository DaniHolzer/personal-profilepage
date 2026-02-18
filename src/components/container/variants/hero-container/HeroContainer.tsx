import { Container } from "components/container/base/Container";
import { heroStyles } from "./HeroContainer.styles";
import type { HeroProps } from "./HeroContainer.types";
import { Link } from "components/links/base/Link";
import skiingImage from "src/assets/skiing.jpg";
import { SocialsContainer } from "components/container/variants/socials-container/SocialsContainer";

//-----------------------------------------------------------------------------
// Hero Section Component

export function HeroContainer({className, debug}: HeroProps) {

  return(
    <Container
      as="div"
      id="heroContainer"
      className={heroStyles({className, debug})}
      debug
    >
      <p className="text-[1.8rem] text-center mb-[1rem]" id="heroContainer__intro">
        Lorem ipsum dolor sit amet, consta adipiscing elit.
      </p>
      <Link
        id="heroContainer__link"
        to="#aboutContainer"
        className="uppercase underline underline-offset-4 decoration-red-500"
        aria-label="Link to About page"
        title="About"
      >
        More about me
      </Link>
      <img src={ skiingImage } className="w-[20rem] h-[20rem] my-[6.5rem]"/>
      <SocialsContainer debug />

    </Container>
  )
}



