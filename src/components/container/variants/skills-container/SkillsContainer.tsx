import { Container } from "components/container/base/Container";
import { skillsContainerStyles } from "./SkillsContainer.styles";
import type { SkillsContainerProps } from "./SkillsContainer.types";
import { Heading } from "components/typography/headings/Heading";
import { SkillIcon } from "components/icons/SkillIcons";

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
        className="flex-row flex-wrap gap-[2rem] justify-center"
        debug
      >
        <SkillIcon
          id="nvimIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original-wordmark.svg"
          alt="Neovim Icon"
          title="Neovim"
        />
        <SkillIcon
          id="ubuntuIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original-wordmark.svg"
          alt="Ubuntu Icon"
          title="Ubuntu"
        />
        <SkillIcon
         id="jiraIcon"
         src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
         alt="Jira Icon"
         title="Jira"
        />
        <SkillIcon
          id="gitIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
          alt="Git Icon"
          title="Git"
        />
        <SkillIcon
          id="htmlIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
          alt="HTML5 icon"
          title="HTML"
        />
        <SkillIcon
          id="cssIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
          alt="CSS Icon"
          title="CSS"
        />
        <SkillIcon
          id="tailwindCssIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          alt="Tailwindcss Icon"
          title="TailwindCss"
        />
        <SkillIcon
          id="javaScriptIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript Icon"
          title="JavaScript"
        />
        <SkillIcon
          id="reactIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          alt="React Icon"
          title="React"
        />
        <SkillIcon
          id="typeScriptIcon"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          alt="TypeScript Icon"
          title="TypeScript"
        />
      </Container>
    </Container>
  );
}
