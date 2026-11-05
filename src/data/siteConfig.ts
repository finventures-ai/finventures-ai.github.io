/**
 * Site publish flags.
 * Per-page indexation is controlled by indexPolicy.ts (~35 hub pages indexed;
 * everything else stays live with noindex,follow and is excluded from the sitemap).
 */
export const siteConfig = {
  /** Global kill-switch: when true, every page is noindex regardless of allowlist */
  noindex: false,
} as const;
