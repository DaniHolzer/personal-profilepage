import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";
import {
  documentCardStyles,
  downloadButtonClass,
  downloadIconSize,
  downloadIconClass
} from "./DocumentCard.styles";
import { LinkButton } from "components/button/variants/link-button/LinkButton";
import { FileDownloadIcon } from "components/icons/Icons";

//-------------------------------------------------------------------------------------------------
// Document Card - Component

export function CvCard({className}: {className?: string}){
  return(
    <Card
      id="cvCard"
      className={documentCardStyles({className})}
    >
      <Heading.H2
        id="cvCard__heading"
        text="CV"
        className="mb-[1rem]"
      />
      <p
        id="cvCard__info"
        className=" text-[1.4rem] mb-[0.5rem]"
      >
        Daniel Holzer
      </p>
      <LinkButton
        href="/CV.pdf"
        download
        id="cvCard__linkButton"
        fullWidth
        variant="primary"
        className={downloadButtonClass}
      >
        <FileDownloadIcon size={downloadIconSize} className={downloadIconClass}/>
      </LinkButton>
    </Card>
  );
};
