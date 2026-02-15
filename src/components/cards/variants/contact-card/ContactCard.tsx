import { contactCardStyles } from "./ContactCard.styles";
import { Card } from "components/cards/base/Card";
import { Heading } from "components/typography/headings/Heading";

//-------------------------------------------------------------------------------------------------
// Contact Card - Component

export function ContactCard({className}: {className?: string}){
  return(
    <Card
      id="contactCard"
      className={contactCardStyles({ className })}
      debug
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
    </Card>
  )
}
