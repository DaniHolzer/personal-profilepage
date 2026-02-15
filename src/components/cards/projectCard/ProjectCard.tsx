import { Container } from "components/container/base/Container";
import { useId } from "react";
import { projectCardStyles } from "./ProjectCard.styles";
import type { ProjectCardProps } from "./ProjectCard.types";


//-------------------------------------------------------------------------------------------------
// Project Card - Component

export function ProjectCard({ id, className, children, debug }: ProjectCardProps) {
  const generatedId = useId();
  return(
    <Container
      id={ id ?? generatedId }
      as="section"
      className={projectCardStyles({ className, debug })}
    >
      { children }
    </Container>
  );
}
