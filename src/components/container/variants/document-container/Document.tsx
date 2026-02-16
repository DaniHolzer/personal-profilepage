import { Container } from "components/container/base/Container";
import { documentStyles } from "./Document.styles";
import type {DocumentProps} from "./Document.types";
import { Heading } from "components/typography/headings/Heading";
import { CvCard } from "components/cards/variants/document-cards/CvCard";

//-------------------------------------------------------------------------------------------------
// Document Container - Component

export function DocumentContainer({className, debug}: DocumentProps ) {

  return(
    <Container
      as="section"
      id="documentContainer"
      className={documentStyles({className, debug})}
      debug
    >
      <Heading.H1
        id="documentContainer__h1"
        text="Documents"
        className="uppercase mb-[2rem]"
        debug
      />
      <p
        id="documentContainer__intro"
        className="text-[1rem] text-center mb-[2rem]"
      >
        Here are my Documents. You can download them below.
      </p>

    </Container>
  );
}
