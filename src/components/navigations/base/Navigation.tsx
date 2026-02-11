import { useId } from "react";
import { navigationStyles } from "./Navigation.styles";
import type { NavigationProps } from "./Navigation.types";

//------------------------------------------------------------------------------
// Navigation - Component

export function Navigation({ id, className, children, debug }: NavigationProps) {
    const generatedId = useId();

    return(
      <nav id={id ?? generatedId} className={navigationStyles({ className, debug })}>
        { children }
      </nav>
    );
};
