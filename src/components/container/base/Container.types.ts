import type { VariantProps } from 'tailwind-variants';
import type { containerStyles } from './Container.styles';

//-----------------------------------------------------------------------------
// Container Properties

type supportedHtmlTags =
  | 'div'
  | 'section'
  | 'header'
  | 'footer'
  | 'main'
  | 'aside'
  | 'article'
  | 'address'
  | 'span';

export interface ContainerProps extends VariantProps<typeof containerStyles> {
  as?: supportedHtmlTags;
  id?: string;
  className?: string;
  children: React.ReactNode;
  hidden?: boolean;
}
