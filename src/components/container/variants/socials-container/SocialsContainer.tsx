import { Container } from "components/container/base/Container";
import { socialsStyles } from "./SocialsContainer.styles";
import type { SocialsProps } from "./SocialsContainer.types";

//------------------------------------------------------------------------------
// Socials Container - Component

export function SocialsContainer({className, debug}: SocialsProps) {

  return(
    <Container id="socialsContainer" className={socialsStyles({className, debug})}>
      <p className="border-1 border-blue-500">icon</p>
      <p className="border-1 border-blue-500">icon</p>
      <p className="border-1 border-blue-500">icon</p>
      <p className="border-1 border-blue-500">icon</p>
      <p className="border-1 border-blue-500">icon</p>
      <p className="border-1 border-blue-500">icon</p>
    </Container>
  )
}
