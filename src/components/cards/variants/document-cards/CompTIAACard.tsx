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

export function CompTIAACard({className}: {className?: string}){
  return(
    <Card
      id="CompTIA-A+Card"
      className={documentCardStyles({className})}
    >
      <Heading.H2
        id="CompTIA-A+Card__heading"
        text="CompTIA A+"
        className="mb-[1rem]"
      />
      <p
        id="CompTIA-A+Card__info"
        className=" text-[1.4rem] mb-[0.5rem]"
      >
        05-17-2025
      </p>
      <LinkButton
        href="/CompTIA-A+-cert.pdf"
        download
        id="CompTIA-A+Card__linkButton"
        fullWidth
        variant="primary"
        className={downloadButtonClass}
      >
        <FileDownloadIcon size={downloadIconSize} className={downloadIconClass}/>
      </LinkButton>
    </Card>
  );
};
