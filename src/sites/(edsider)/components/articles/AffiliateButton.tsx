import type { ReactNode } from 'react'

import { affiliateHref, directHref } from '../../data/guides/types'

/**
 * CTA link for the article rating guides. For monetised schools it routes the
 * direct deep-link through /click/<domain> so the click is recorded before the
 * visitor is forwarded to the advertiser. Pass `tracked={false}` for schools we
 * merely compare against: those get a plain nofollow link to their own site.
 */
export default function AffiliateButton({
  to,
  children,
  variant = 'primary',
  tracked = true,
}: {
  /** Direct deep-link, e.g. 'eduson.academy/fin-analyst'. */
  to: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  /** False for non-partner schools — links out directly, nothing recorded. */
  tracked?: boolean
}) {
  const href = tracked ? affiliateHref(to) : directHref(to)
  const rel = tracked ? 'noopener sponsored' : 'noopener nofollow'

  if (variant === 'ghost') {
    return (
      <a
        href={href}
        target="_blank"
        rel={rel}
        className="inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-[rgb(var(--color-bg))]"
        style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold shadow-sm transition-transform hover:-translate-y-[1px]"
      style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
    >
      {children}
    </a>
  )
}
