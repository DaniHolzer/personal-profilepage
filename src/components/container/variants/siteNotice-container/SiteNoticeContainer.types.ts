import type { VariantProps } from "tailwind-variants";
import type { siteNoticeContainerStyles } from "./SiteNoticeContainer.styles";

//-----------------------------------------------------------------------------
// Site Notice Container Properties

export interface SiteNoticeContainerProps extends VariantProps<typeof siteNoticeContainerStyles> {
  className?: string;
};


