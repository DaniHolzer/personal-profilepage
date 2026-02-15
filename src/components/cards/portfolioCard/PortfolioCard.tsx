import { Heading } from "components/typography/headings/Heading";
import { ProjectCard } from "components/cards/projectCard/ProjectCard";

//-------------------------------------------------------------------------------------------------
// Project Card - Component

export function PortfolioCard({className}: {className?: string}) {
  const cardHeadingStyling = "mb-[1rem]";
  const cardInfoStyling = "text-[1rem] mb-[1rem]";
  const cardTagContainerStyling = "flex justify-center items-center gap-[0.5rem] flex-wrap";

  return(
    <ProjectCard
      id="portfolioCard"
      className={className}
      debug
    >
      <Heading.H5
        id="projectsContainer__cardsContainer__card-profilePage__heading"
        text="Protfolio Website"
        className={cardHeadingStyling}
      />
      <p
        id="projectsContainer__cardsContainer__card-profilePage__info"
        className={cardInfoStyling}
      >
        A personal portfolio build using ...
      </p>
      <div
        id="projectsCotnainer__cardsContainer-card-profilePage__tagContainer"
        className={cardTagContainerStyling}
      >
        <p
          id="projectsContainer__cardsContainer__card-profilePage__tag-js"
          className="py-[0.5rem] px-[1rem] text-[0.8rem] bg-[#3178C6] rounded-full"
        >
          TypeScript
        </p>
        <p
          id="projectsContainer__cardsContainer__card-profilePage__tag-css3"
          className="py-[0.5rem] px-[1rem] text-[0.8rem] bg-[#38BDF8] rounded-full"
        >
          TailwindCSS
        </p>
        <p
          id="projectsContainer__cardsContainer__card-profilePage__tag-css3"
          className="py-[0.5rem] px-[1rem] text-[0.8rem] bg-[#0081A3] rounded-full"
        >
          React
        </p>
      </div>
    </ProjectCard>
  );
}
