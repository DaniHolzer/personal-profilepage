import type { VariantProps } from "tailwind-variants";
import type { skillsContainerStyles } from "./SkillsContainer.styles";

//-----------------------------------------------------------------------------
// Skills Container Properties

export interface SkillsContainerProps extends VariantProps<typeof skillsContainerStyles> {
  className?: string;
};


