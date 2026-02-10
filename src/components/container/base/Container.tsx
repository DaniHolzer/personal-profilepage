//------------------------------------------------------------------------------
// Container.tsx - Base of all container components

import { useId } from 'react';
import { containerStyles } from './Container.styles';
import type { ContainerProps } from './Container.types';

//------------------------------------------------------------------------------
// Container - Component

export function Container({
  as: HtmlTag = 'div',
  id,
  className,
  children,
  hidden,
  debug,
}: ContainerProps) {
  const generatedId = useId();

  return (
    <HtmlTag
      id={id ?? generatedId}
      className={containerStyles({ className, debug })}
      hidden={hidden}
    >
      {children}
    </HtmlTag>
  );
}
