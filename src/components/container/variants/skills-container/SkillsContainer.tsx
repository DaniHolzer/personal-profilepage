import { Container } from "components/container/base/Container";
import { skillsContainerStyles, skillIconSize } from "./SkillsContainer.styles";
import type { SkillsContainerProps } from "./SkillsContainer.types";
import { Heading } from "components/typography/headings/Heading";
import ReactIcon from '@devicon/react/react/original-wordmark';
import NeovimIcon from '@devicon/react/neovim/plain-wordmark';
import UbuntuIcon from '@devicon/react/ubuntu/plain-wordmark';
import JiraIcon from "@devicon/react/jira/plain-wordmark";
import GitIcon from "@devicon/react/git/plain-wordmark";
import HtmlIcon from '@devicon/react/html5/plain-wordmark';
import CssIcon from '@devicon/react/css3/plain-wordmark';
import JavaScriptIcon from '@devicon/react/javascript/original';
import TailwindCssIcon from "@devicon/react/tailwindcss/plain-wordmark";
import TypeScriptIcon from "@devicon/react/typescript/original";

//-------------------------------------------------------------------------------------------------
// Skills Container - Component

export function SkillsContainer({className, debug}: SkillsContainerProps ) {

  return(
    <Container
      as="section"
      id="skillsContainer"
      className={skillsContainerStyles({className, debug})}
    >
      <Heading.H1
        id="skillsContainer__h1"
        text="Skills"
        className="uppercase mb-[2rem]"
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
        className="flex-row flex-wrap gap-[2rem] justify-center"
      >
        <UbuntuIcon size={skillIconSize} />
        <NeovimIcon size={skillIconSize} />
        <JiraIcon size={skillIconSize} />
        <GitIcon size={skillIconSize} />
        <HtmlIcon size={skillIconSize} />
        <CssIcon size={skillIconSize} />
        <TailwindCssIcon size={skillIconSize} />
        <JavaScriptIcon size={skillIconSize} />
        <ReactIcon size={skillIconSize} />
        <TypeScriptIcon size={skillIconSize} />

      </Container>
    </Container>
  );
}
