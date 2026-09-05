/**
 * Single source of truth for the site's identity.
 *
 * Everything that mentions the domain or the brand — canonical URLs, e-mail
 * addresses, legal pages, footer, sitemap, JSON-LD publisher — derives from the
 * values below. Changing them here changes them everywhere; the only other
 * places the domain is written down are `nginx.conf.reviewkong` and
 * `.env.local.reviewkong` at the repo root.
 */
export const SITE = {
  name: 'ReviewKong',
  /** Bare domain — no protocol, no www. */
  domain: 'reviewkong.com',
  /**
   * Editorial one-liner. Nothing renders it today — the strip above the header
   * that used to carry it was removed — but it is kept as the brand's declared
   * positioning for share cards and future chrome. Wire it up or delete it;
   * do not leave a second, contradictory one-liner somewhere else.
   */
  tagline: 'Independent buying guides for the global web',
  /**
   * The market the editorial team writes for.
   *
   * Deliberately says nothing about language: the site starts in English but is
   * not committed to staying single-language, and a "· English" here would have
   * to be found and removed from the footer and the home-page eyebrow the day
   * that changes. Naming the audience, not the language, survives that.
   */
  market: 'Worldwide',
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
