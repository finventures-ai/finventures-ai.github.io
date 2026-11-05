/**
 * Site publish flags. Flip noindex to false once affiliate /go/ links
 * are approved and wired (mailing address is already set).
 */
export const siteConfig = {
  /** When true, every page sends <meta name="robots" content="noindex,nofollow"> */
  noindex: false,
} as const;
