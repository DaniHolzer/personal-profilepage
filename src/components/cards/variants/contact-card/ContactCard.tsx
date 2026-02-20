import { contactCardStyles } from "./ContactCard.styles";
import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";
import { Container } from "components/container/base/Container";
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
      <p id="contactContainer__contact-address" className="text-[1rem]">
        Italy - Innerprags 37 - 39030 Prags
      </p>
      <p id="contactContainer__contact-mail" className="text-[1rem]">
        holzerdaniel01@gmail.com
      </p>
      <ul id="contactContainer__contact-socials" className="flex justify-center items-center flex-wrap gap-[2rem]">
        <li>
          <Link
            id="contactContainer__contact-socials__link-github"
            to="https://github.com/DaniHolzer"
            children=<LinkedInIcon size={18}/>
            className=""
            title="GitHub"
            aria-label="Link to GitHub account"
          />
        </li>
        <li>
          <Link
            id="contactContainer__contact-socials__link-gitlab"
            to="https://gitlab.com/DaniHolzer"
            children=<XIcon size={18}/>
            className=""
            title="GitLab"
            aria-label="Link to GitLab account"
          />
        </li>
      </ul>
    </Card>
  )
}
