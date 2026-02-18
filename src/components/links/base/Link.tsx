import { forwardRef, useId } from "react";
import { Link as RouterLink } from "react-router-dom";
import { linkStyles } from "./Link.styles";
import type { LinkProps } from "./Link.types";
import { isExternalUrl } from "./Link.utils";

//------------------------------------------------------------------------------
// Link - Component

export const Link = forwardRef<HTMLAnchorElement, LinkProps> (
  ({ id, to, children, className, title, debug, 'aria-label': ariaLabel, ...props}, ref) => {
    const generatedId = useId();
    const classes = linkStyles({ className, debug });
    const externalLink = isExternalUrl(to);

    if(externalLink){
      return(
        <a
          ref={ref}
          id={id ?? generatedId}
          href={to}
          className={classes}
          title={title}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferer"
          {...props}
        >
          { children }
        </a>
      );
    }

    // Internal link:
    return (
      <RouterLink
        ref={ref}
        id={id ?? generatedId}
        to={to}
        className={classes}
        title={title}
        aria-label={ariaLabel}
        {...props}
      >
        { children }
      </RouterLink>
    );
  }
);

Link.displayName = "Link";
