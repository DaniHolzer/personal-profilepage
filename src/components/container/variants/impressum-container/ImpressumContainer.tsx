import { Container } from "components/container/base/Container";
import { impressumContainerStyles } from "./ImpressumContainer.styles";
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
        className="uppercase mb-[2rem]"
        debug
      />

      <Heading.H2
        text="Website Owner"
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
        Phone: [+39 3441186574]<br />
        Email: <a href="holzerdaniel01@gmail.com"></a>
      </p>

      <Heading.H2
        text="Tax Information"
      />
      <p>
        Codice Fiscale: HLZDNL01P25F132O<br />
      </p>

      <Heading.H2
        text="Technical Information"
      />
      <p>
        Hosting: Netlify<br />
        Development: Self-developed portfolio site<br />
        Domain Registrar: Dynadot (dynadot.com)
      </p>

      <Heading.H2
        text="Disclaimer"
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

      <Heading.H2
        text="Privacy Policy Summary"
      />
      <p>
        No cookies are used. No personal data collection occurs beyond standard
        hosting logs.<br />
        Contact form data (if any) is processed only for direct communication
        and deleted after response.
      </p>

      <Heading.H2
        text="Applicable Law"
      />
      <p>
        Italian law applies. Competent courts: [Bolzano/Bozen] for disputes.
      </p>

      <p className="text-sm text-gray-500 mt-8 border-t pt-4">
        Last updated: February 16, 2026
      </p>
    </Container>
  );
}
