import { layoutStyles } from './Layout.styles';

//-------------------------------------------------------------------------------------------------
// Layout - Properties

export interface LayoutProps {
  children: React.ReactNode;
}

//-------------------------------------------------------------------------------------------------
// Layout - Component

export function Layout({ children }: LayoutProps) {
  return <section className={layoutStyles()}>{children}</section>;
}
