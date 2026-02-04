import { forwardRef } from "react";
import { cx } from "tailwind-variants";
import { Link, type LinkProps } from "../../root/Link";
import { imageLinkVariants } from "./ImageLink.styles";


//-----------------------------------------------------------------------------
// ImageLink - Properties

export interface ImageLinkProps extends LinkProps {
    variant?: "primary";
}

//-----------------------------------------------------------------------------
// ImageLink - Component

export const ImageLink = forwardRef<HTMLAnchorElement, ImageLinkProps>(
    ({ className, ...props }, ref) => {
      return (
        <Link
          ref={ref}
          className={cx(imageLinkVariants({ className }) )}
          {...props}
        />
      );
    }
);
