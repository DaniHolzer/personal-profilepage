import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";
import { documentCardStyles } from "./DocumentCard.styles";
import { LinkButton } from "components/button/variants/link-button/LinkButton";
import { FileDownloadIcon } from "components/icons/Icons";

//-------------------------------------------------------------------------------------------------
// Document Card - Component

export function CompTIAITFCard({className}: {className?: string}){
  return(
    <Card
      id="CompTIA-ITF+Card"
      className={documentCardStyles({className})}
      debug
    >
      <Heading.H2
        id="CompTIA-ITF+Card__heading"
        text="CompTIA ITF+"
        className="mb-[1rem]"
      />
      <p
        id="CompTIA-ITF+Card__info"
        className=" text-[1.4rem] mb-[0.5rem]"
      >
        12-16-2023
      </p>
      <LinkButton
        href="/CompTIA-ITF+-cert.pdf"
        download
        id="CompTIA-ITF+Card__linkButton"
        fullWidth
        variant="primary"
        size="icon"
        className="p-[0.5rem] h-auto"
      >
        <FileDownloadIcon size={20} />
      </LinkButton>
    </Card>
  );
};
