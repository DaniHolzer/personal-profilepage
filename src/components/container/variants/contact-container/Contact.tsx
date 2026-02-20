import { Container } from "components/container/base/Container";
import { contactStyles } from "./Contact.styles";
import type { ContactProps } from "./Contact.types";
import { Heading } from "components/typography/headings/Heading";
import profilefoto from "src/assets/profilefoto.jpg";
import { ContactCard } from "components/cards/variants/contact-card/ContactCard";

//-------------------------------------------------------------------------------------------------
// Contact Container - Component

export function ContactContainer({ className, debug}: ContactProps) {

  return(
    <Container
      as="section"
      id="contactContainer"
      className={contactStyles({className, debug})}
    >
      <Heading.H1
        id="contactContainer__h1"
        text="Contact"
        className="uppercase"
      />
      <img
        id="contactContainer__profilefoto"
        src={ profilefoto }
        alt="Profile foto of me"
        className="w-[10rem] h-[10rem] rounded-4xl self-center"
      />
      <p
        id="contactContainer__intro"
        className="text-[1rem] text-center"
      >
        Let's work together
      </p>
      <ContactCard />
    </Container>
  );
}
