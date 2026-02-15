import { Container } from "components/container/base/Container";
import { useId } from "react";
import { cardStyles } from "./Card.styles";
import type { CardProps } from "./Card.types";


//-------------------------------------------------------------------------------------------------
// Card - Component

export function Card({ id, className, children, debug }: CardProps) {
  const generatedId = useId();
  return(
    <Container
      id={ id ?? generatedId }
      as="section"
      className={cardStyles({ className, debug })}
    >
      { children }
    </Container>
  );
}
