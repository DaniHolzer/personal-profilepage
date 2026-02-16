import { Container } from "components/container/base/Container";
import { skillsContainerStyles } from "./SkillsContainer.styles";
import type { SkillsContainerProps } from "./SkillsContainer.types";
import { Heading } from "components/typography/headings/Heading";

//-------------------------------------------------------------------------------------------------
// Skills Container - Component

export function SkillsContainer({className, debug}: SkillsContainerProps ) {

  return(
    <Container
      as="section"
      id="skillsContainer"
      className={skillsContainerStyles({className, debug})}
      debug
    >
      <Heading.H1
        id="skillsContainer__h1"
        text="Skills"
        className="uppercase mb-[2rem]"
        debug
      />
      <p
        id="skillsContainer__intro"
        className="text-[1rem] text-center mb-[2rem]"
      >
        Here are my skills i gained in my 2 years of studying.
      </p>
      <Container
        as="div"
        id="skillsContainer__container"
        className=""
        debug
      >

      </Container>
    </Container>
  );
}
