import { Container } from "components/container/base/Container";
import { socialsStyles } from "./SocialsContainer.styles";
import type { SocialsProps } from "./SocialsContainer.types";

//------------------------------------------------------------------------------
// Socials Container - Component

export function SocialsContainer({className, debug}: SocialsProps) {

  return(
    <Container as="aside" id="socialsContainer" className={socialsStyles({className, debug})}>
      <ul className="flex justify-between items-center flex-wrap gap-y-[2rem]">
        <li>
          <p className="border-1 border-blue-500">icon</p>
        </li>
        <li>
          <p className="border-1 border-blue-500">icon</p>
        </li>
        <li>
          <p className="border-1 border-blue-500">icon</p>
        </li>
        <li>
          <p className="border-1 border-blue-500">icon</p>
        </li>
        <li>
          <p className="border-1 border-blue-500">icon</p>
        </li>
        <li>
          <p className="border-1 border-blue-500">icon</p>
        </li>
      </ul>
    </Container>
  )
}
