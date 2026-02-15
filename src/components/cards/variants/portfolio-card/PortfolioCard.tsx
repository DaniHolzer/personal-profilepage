import { Heading } from "components/typography/headings/Heading";
import { Card } from "~/components/cards/base/Card";
import {
  portfolioCardStyles,
  cardHeadingStyling,
  cardInfoStyling,
  cardTagContainerStyling
} from "./PortfolioCard.styles";

//-------------------------------------------------------------------------------------------------
// Project Card - Component

export function PortfolioCard({className}: {className?: string}) {

  return(
    <Card
      id="portfolioCard"
      className={portfolioCardStyles({className})}
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
    </Card>
  );
}
