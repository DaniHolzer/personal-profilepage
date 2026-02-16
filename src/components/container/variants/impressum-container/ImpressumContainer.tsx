import { Container } from "components/container/base/Container";
import {
  impressumContainerStyles,
  impressumHeadingStyles
} from "./ImpressumContainer.styles";
import type { ImpressumContainerProps } from "./ImpressumContainer.types";
import { Heading } from "components/typography/headings/Heading";

//-------------------------------------------------------------------------------------------------
// Skills Container - Component

export function ImpressumContainer({className, debug}: ImpressumContainerProps ) {

  return(
    <Container
      as="section"
      id="impressumContainer"
      className={impressumContainerStyles({className, debug})}
      debug
    >
      <Heading.H1
        id="impressumContainer__h1"
        text="Impressum"
        className="uppercase"
        debug
      />
      <section
        id="impressumContainer__ownerInfo"
      >
        <Heading.H5
          text="Website Owner"
          className={impressumHeadingStyles}
        />
        <p
          id="impressumContainer__address"
        >
          <strong>Daniel Holzer</strong><br />
          Innerprags 37<br />
          39030 Prags, South Tyrol (Alto Adige)<br />
          Italy
        </p>
        <p
          id="impressumContainer__contact"
        >
          <strong>Contact Information:</strong><br />
          Phone: +39 3441186574<br />
          Email: <a href="holzerdaniel01@gmail.com"></a>
        </p>
      </section>
      <section
        id="impressumContainer__taxInfo"
      >
        <Heading.H5
          text="Tax Information"
          className={impressumHeadingStyles}
        />
        <p>
          Codice Fiscale: HLZDNL01P25F132O<br />
        </p>
      </section>
      <section
        id="impressumContainer__techInfo"
      >
        <Heading.H5
          text="Technical Information"
          className={impressumHeadingStyles}
        />
        <p>
          Hosting: Netlify<br />
          Development: Self-developed portfolio site<br />
          Domain Registrar: Dynadot (dynadot.com)
        </p>
      </section>
      <section
        id="impressumContainer__disclaimer"
      >
        <Heading.H5
          text="Disclaimer"
          className={impressumHeadingStyles}
        />
        <p>
          This website serves personal and informational purposes only.
          No professional services, consulting, or commercial activities
          are offered.
        </p>
        <p>
          We are not liable for external links or third-party content.
          All content is provided "as is" without warranty.
        </p>
      </section>
      <section
        id="impressumContainer__privacy"
      >
        <Heading.H5
          text="Privacy Policy Summary"
          className={impressumHeadingStyles}
        />
        <p>
          No cookies are used. No personal data collection occurs beyond standard
          hosting logs.<br />
          Contact form data (if any) is processed only for direct communication
          and deleted after response.
        </p>
      </section>
      <section
        id="impressumContainer__law"
      >
        <Heading.H5
          text="Applicable Law"
          className={impressumHeadingStyles}
        />
        <p>
          Italian law applies. Competent courts: [Bolzano/Bozen] for disputes.
        </p>
      </section>
      <p className="text-sm text-gray-500 border-t pt-4">
        Last updated: February 16, 2026
      </p>
    </Container>
  );
}
