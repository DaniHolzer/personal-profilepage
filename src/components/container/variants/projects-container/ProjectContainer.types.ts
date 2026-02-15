import type { VariantProps } from "tailwind-variants";
import type { projectsContainerStyles } from "./ProjectContainer.styles";

//-----------------------------------------------------------------------------
// Projects Container Properties

export interface ProjectsCotainerProps extends VariantProps<typeof projectsContainerStyles> {
  className?: string;
};
