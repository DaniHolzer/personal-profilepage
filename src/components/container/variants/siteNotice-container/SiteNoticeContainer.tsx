import { Container } from "components/container/base/Container";
import {
  siteNoticeContainerStyles,
  siteNoticeHeadingStyles
} from "./SiteNoticeContainer.styles";
import type { SiteNoticeContainerProps } from "./SiteNoticeContainer.types";
import { Heading } from "components/typography/headings/Heading";

//-------------------------------------------------------------------------------------------------
// Site Notice Container - Component

export function SiteNoticeContainer({className, debug}: SiteNoticeContainerProps ) {

  return(
    <Container
      as="section"
      id="siteNoticeContainer"
      className={siteNoticeContainerStyles({className, debug})}
    >
      <Heading.H1
        id="siteNoticeContainer__h1"
        text="site Notice"
        className="uppercase"
      />
      <section
        id="siteNotice__ownerInfo"
      >
        <Heading.H5
          text="Website Owner"
          className={siteNoticeHeadingStyles}
        />
        <p
          id="siteNotice__address"
        >
          <strong>Daniel Holzer</strong><br />
          Innerprags 37<br />
          39030 Prags, South Tyrol (Alto Adige)<br />
          Italy
        </p>
        <p
          id="siteNotice__contact"
        >
          <strong>Contact Information:</strong><br />
          Phone: +39 3441186574<br />
          Email: holzerdaniel01@gmail.com
        </p>
      </section>
      <section
        id="siteNotice__taxInfo"
      >
        <Heading.H5
          text="Tax Information"
          className={siteNoticeHeadingStyles}
        />
        <p>
          Codice Fiscale: HLZDNL01P25F132O<br />
        </p>
      </section>
      <section
        id="siteNotice__techInfo"
      >
        <Heading.H5
          text="Technical Information"
          className={siteNoticeHeadingStyles}
        />
        <p>
          Hosting: Netlify<br />
          Development: Self-developed portfolio site<br />
          Domain Registrar: Dynadot (dynadot.com)
        </p>
      </section>
      <section
        id="siteNotice__disclaimer"
      >
        <Heading.H5
          text="Disclaimer"
          className={siteNoticeHeadingStyles}
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
        id="siteNotice__privacy"
      >
        <Heading.H5
          text="Privacy Policy Summary"
          className={siteNoticeHeadingStyles}
        />
        <p>
          No cookies are used. No personal data collection occurs beyond standard
          hosting logs.<br />
          Contact form data (if any) is processed only for direct communication
          and deleted after response.
        </p>
      </section>
      <section
        id="siteNotice__law"
      >
        <Heading.H5
          text="Applicable Law"
          className={siteNoticeHeadingStyles}
        />
        <p>
          Italian law applies. Competent courts: [Bolzano/Bozen] for disputes.
        </p>
      </section>
      <p className="text-sm text-textTertiary border-t pt-4">
        Last updated: February 20, 2026
      </p>
    </Container>
  );
}
