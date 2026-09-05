/**
 * Single source of truth for the site's identity.
 *
 * Everything that mentions the brand or the domain — canonical URLs, mailboxes,
 * legal pages, the footer, the sitemap, the JSON-LD publisher — derives from
 * the values below. Changing them here changes them everywhere; the only other
 * places the domain is written down are `nginx.conf.promoyeti` and
 * `.env.local.promoyeti` at the repo root, and both say so in their own
 * comments.
 *
 * If the brand ever moves again: change `name` and `domain` here, rename the
 * folder `src/sites/(promoyeti)` and the SITE_CONFIG value, rename those two
 * root files, and redraw public/mark.svg, logo.svg and favicon.svg.
 */
export const SITE = {
  name: 'PromoYeti',
  /** Bare domain — no protocol, no www. */
  domain: 'promoyeti.com',
  /** Editorial one-liner, used in share cards and the footer strip. */
  tagline: 'Discount codes that actually work — and the ones that do not',
  /** The market the site is written for. English-language, worldwide. */
  market: 'Worldwide · English',
  /** Year the project started — used in the footer copyright range. */
  since: 2026,
} as const

/** `https://` + the current domain. Used for canonical URLs and JSON-LD. */
export const siteUrl = `https://${SITE.domain}`

/** Build a mailbox on the site domain: mailbox('hello') → hello@<domain>. */
export function mailbox(box: string): string {
  return `${box}@${SITE.domain}`
}

/** The public inboxes referenced across the footer, contact and legal pages. */
export const inboxes = {
  editorial: mailbox('hello'),
  partnerships: mailbox('partners'),
  privacy: mailbox('privacy'),
} as const
