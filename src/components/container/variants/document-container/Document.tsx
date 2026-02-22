import { Container } from "components/container/base/Container";
import { documentStyles } from "./Document.styles";
import type {DocumentProps} from "./Document.types";
import { Heading } from "components/typography/headings/Heading";
import { CvCard } from "components/cards/variants/document-cards/CvCard";
import { CompTIAACard } from "components/cards/variants/document-cards/CompTIAACard";
import { CompTIAITFCard } from "components/cards/variants/document-cards/CompTIAITFCard";

//-------------------------------------------------------------------------------------------------
// Document Container - Component

export function DocumentContainer({className, debug}: DocumentProps ) {

  return(
    <Container
      as="section"
      id="documentContainer"
      className={documentStyles({className, debug})}
    >
      <Heading.H1
        id="documentContainer__h1"
        text="Documents"
        className="uppercase mb-[3rem]"
      />
      <p
        id="documentContainer__intro"
        className="text-center mb-[3rem]"
      >
        Here are my Documents. You can download them below.
      </p>
      <Container
        as="section"
        id="documentContainer__cardsContainer"
        className="items-center gap-[1.5rem]"
      >
        <CvCard />
        <CompTIAACard />
        <CompTIAITFCard />

      </Container>
    </Container>
  );
}
