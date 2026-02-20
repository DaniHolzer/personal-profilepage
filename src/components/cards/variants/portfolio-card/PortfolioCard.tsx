import { Heading } from "components/typography/headings/Heading";
import { Card } from "components/cards/base/Card";
import { Tag } from "components/tag/base/Tag";
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
        <Tag
          id="projectsContainer__cardsContainer__card-profilePage__tag-js"
          className="bg-typeScript"
        >
          Type Script
        </Tag>
        <Tag
          id="projectsContainer__cardsContainer__card-profilePage__tag-tailwindCss"
          className="bg-tailwindCss"
        >
          TailwindCss
        </Tag>
        <Tag
          id="projectsContainer__cardsContainer__card-profilePage__tag-css3"
          className="bg-react"
        >
          React
        </Tag>


      </div>
    </Card>
  );
}
