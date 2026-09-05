import type { ReactNode } from 'react'

/**
 * Inline link to an advertiser other than Практикум.
 *
 * `AffiliateLink` hard-codes the edphub tracker and only ever points at
 * practicum.yandex.ru, which is right for the posts about my own course but
 * useless for anything else. Everything else goes through the site's internal
 * /click redirect — the same route the ranked listicles already use — so a
 * школьная ссылка in body copy is recorded and disclosed exactly like a card CTA.
 */
export default function OfferLink({
  to,
  children,
}: {
  /** Bare host + path, e.g. 'umschool.net/coupons/'. */
  to: string
  children: ReactNode
}) {
  const clean = to.replace(/^https?:\/\//, '').replace(/^www\./, '')
  return (
    <a
      href={`/click/${clean}`}
      target="_blank"
      rel="noopener sponsored"
      className="underline underline-offset-2 hover:opacity-70"
      style={{ color: 'rgb(var(--color-link))' }}
    >
      {children}
    </a>
  )
}
