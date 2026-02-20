import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";
import {
  documentCardStyles,
  headingClass,
  infoClass,
  downloadButtonClass,
  downloadIconSize,
  downloadIconClass
} from "./DocumentCard.styles";
import { LinkButton } from "components/button/variants/link-button/LinkButton";
import { FileDownloadIcon } from "components/icons/Icons";

//-------------------------------------------------------------------------------------------------
// Document Card - Component

export function CompTIAITFCard({className}: {className?: string}){
  return(
    <Card
      id="CompTIA-ITF+Card"
      className={documentCardStyles({className})}
    >
      <Heading.H3
        id="CompTIA-ITF+Card__heading"
        text="CompTIA ITF+"
        className={headingClass}
      />
      <p
        id="CompTIA-ITF+Card__info"
        className={infoClass}
      >
        12-16-2023
      </p>
      <LinkButton
        href="/CompTIA-ITF+-cert.pdf"
        download
        id="CompTIA-ITF+Card__linkButton"
        fullWidth
        variant="primary"
        className={downloadButtonClass}
      >
        <FileDownloadIcon size={downloadIconSize} className={downloadIconClass}/>
      </LinkButton>
    </Card>
  );
};
