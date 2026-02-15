import type { VariantProps } from "tailwind-variants";
import type { projectCardStyles } from "./ProjectCard.styles";

//-----------------------------------------------------------------------------
// Project Card Properties

export interface ProjectCardProps extends VariantProps<typeof projectCardStyles> {
  className?: string;
  id?: string;
  children: React.ReactNode;
}
