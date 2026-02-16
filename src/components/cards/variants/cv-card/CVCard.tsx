import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";
import { documentCardStyles } from "./DocumentCard.styles";

//-------------------------------------------------------------------------------------------------
// Document Card - Component

export function DocumentCard({className}: {className?: string}){
  return(
    <Card
      id="cvCard"
      className={documentCardStyles({className})}
      debug
    >
      <Heading.H2
        id="cvCard__heading"
        text="CV"
      />
      <p
        id="cvCard__info"
        className=""
      >
        Daniel Holzer
      </p>
    </Card>
  );
};
