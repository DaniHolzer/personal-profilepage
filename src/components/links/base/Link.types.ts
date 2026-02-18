import type { VariantProps } from "tailwind-variants";
import type { ComponentPropsWithoutRef } from "react";
import type { linkStyles } from "./Link.styles";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

//-----------------------------------------------------------------------------
// Link Properties

export interface LinkProps extends VariantProps<typeof linkStyles>,
  Omit<RouterLinkProps, 'ref' | 'className' | 'to'>,
  ComponentPropsWithoutRef<'a'> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  to: string;
  title?: string;
  'aria-label'?: string;
};

/* LinkProps = VariantProps (your styles)
               + RouterLinkProps (to, replace, state)
               + AnchorHTMLAttributes (onClick, disabled, aria-*)
               - ref (handled by forwardRef)
               + your custom props (id, debug) */
