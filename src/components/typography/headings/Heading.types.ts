import type { VariantProps } from "tailwind-variants";
import type { headingStyles } from "./Heading.styles";

//-----------------------------------------------------------------------------
// Heading Properties

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingElement = `h${HeadingLevel}`;

export interface HeadingProps extends Omit<VariantProps<typeof headingStyles>, 'level'> {
  id?: string;
  text: string;
  className: string;
};

export interface HeadingBaseProps extends HeadingProps {
  as: HeadingElement;
};
