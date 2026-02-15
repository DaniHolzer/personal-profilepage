import { Container } from "components/container/base/Container";
import { projectsContainerStyles } from "./ProjectContainer.styles";
import type { ProjectsCotainerProps } from "./ProjectContainer.types";
import { Heading } from "components/typography/headings/Heading";
import { PortfolioCard } from "~/components/cards/variants/portfolio-card/PortfolioCard";

//-------------------------------------------------------------------------------------------------
// Projects Container - Component

export function ProjectsContainer({ className, debug }: ProjectsCotainerProps){

  return(
    <Container
      id="projectContainer"
      as="section"
      className={projectsContainerStyles({className, debug})}
    >
      <Heading.H1
        id="projectsContainer__h1"
        text="Projects"
        className="mb-[2rem]"
      />
      <p id="projectsContainer__intro" className="text-[1rem] text-center mb-[2rem]">
        Here are some of my recent works showcasing my development skills.
      </p>
      <Container
        id="projectsContainer__cardsContainer"
        as="section"
        className="p-[1rem] bg-rose-300 h-auto gap-[1rem]"
      >
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </Container>
    </Container>
  );
};
