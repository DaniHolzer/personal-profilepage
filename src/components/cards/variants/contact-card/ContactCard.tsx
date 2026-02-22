import { contactCardStyles } from "./ContactCard.styles";
import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";
import { Link } from "components/links/base/Link";
import {
  LinkedInIcon,
  XIcon,
} from "components/icons/Icons";

//-------------------------------------------------------------------------------------------------
// Contact Card - Component

export function ContactCard({className}: {className?: string}){
  return(
    <Card
      id="contactCard"
      className={contactCardStyles({ className })}
    >
      <Heading.H4
        id="contactContainer__contact__heading"
        text="Daniel Holzer"
        className=""
      />
      <p id="contactContainer__contact-address" className="">
        Italy - Innerprags 37 - 39030 Prags
      </p>
      <p id="contactContainer__contact-mail" className="">
        holzerdaniel01@gmail.com
      </p>
      <ul id="contactContainer__contact-socials" className="flex justify-center items-center flex-wrap gap-[2rem]">
        <li>
          <Link
            id="contactContainer__contact-socials__link-linkedIn"
            to="https://linkedin.com/in/daniel-holzer-9963262a1"
            children=<LinkedInIcon size={24}/>
            className=""
            title="LinkedIn"
            aria-label="Link to LinkedIn account"
          />
        </li>
        <li>
          <Link
            id="contactContainer__contact-socials__link-x"
            to="https://x.com/DanielHolz19614"
            children=<XIcon size={24}/>
            className=""
            title="X"
            aria-label="Link to X account"
          />
        </li>
      </ul>
    </Card>
  )
}
