import { forwardRef} from "react";
import { Link as RouterLink, type LinkProps as RouterLinkProps } from "react-router-dom";


//-----------------------------------------------------------------------------
// Link - Properties

export interface LinkProps extends RouterLinkProps {
    classname?: string;
    children?: React.ReactNode;
}

//-----------------------------------------------------------------------------
// Link - Component

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => (
    <RouterLink
      ref={ref}
      className={className}
      {...props}
    >
      { children }
    </RouterLink>
  )
);

Link.displayName = "Link";    // For React DevTools (shows "Link" not "forwardRef")
