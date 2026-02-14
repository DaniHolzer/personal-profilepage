import { useId } from "react";
import { headingStyles } from "./Heading.styles";
import type { HeadingProps, HeadingBaseProps } from "./Heading.types";

//------------------------------------------------------------------------------
// Heading Internal - Component

function HeadingBase({as: Tag, id, text, className, debug}: HeadingBaseProps){
  const generatedId = useId();
  const level = Number(Tag.charAt(1)) as 1 | 2 | 3 | 4 | 5 | 6;

  return(
    <Tag id={id ?? generatedId} className={headingStyles({level, className, debug})}>
      { text }
    </Tag>
  );
};

//------------------------------------------------------------------------------
// Heading Compound - Component

const H1 = ({id, text, className, debug}: HeadingProps) => (
  <HeadingBase as="h1" id={id} text={text} className={className} debug={debug} />
);
const H2 = ({id, text, className, debug}: HeadingProps) => (
  <HeadingBase as="h2" id={id} text={text} className={className} debug={debug} />
);
const H3 = ({id, text, className, debug}: HeadingProps) => (
  <HeadingBase as="h3" id={id} text={text} className={className} debug={debug} />
);
const H4 = ({id, text, className, debug}: HeadingProps) => (
  <HeadingBase as="h4" id={id} text={text} className={className} debug={debug} />
);
const H5 = ({id, text, className, debug}: HeadingProps) => (
  <HeadingBase as="h4" id={id} text={text} className={className} debug={debug} />
);
const H6 = ({id, text, className, debug}: HeadingProps) => (
  <HeadingBase as="h4" id={id} text={text} className={className} debug={debug} />
);

export const Heading = {H1, H2, H3, H4, H5, H6} as const;

