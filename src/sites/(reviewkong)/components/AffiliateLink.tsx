import type { ReactNode } from 'react'

import { affiliateHref, directHref } from '../data/guides/types'

/**
 * Every outbound link to a brand on this site goes through here.
 *
 * For partners it routes the deep-link through /click/<domain>/<path> so the
 * click is recorded before the visitor is forwarded to the advertiser, and the
 * link is marked `rel="sponsored"`. Pass `tracked={false}` for brands we merely
 * compare against: those get a plain nofollow link to their own site and earn
 * us nothing — which is the point of ranking them anyway.
 */
export default function AffiliateLink({
  to,
  children,
  variant = 'primary',
  tracked = true,
  className,
}: {
  /** Direct deep-link, e.g. 'nordvpn.com/pricing'. */
  to: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'inline' | 'card'
  /** False for non-partners — links out directly, nothing recorded. */
  tracked?: boolean
  className?: string
}) {
  const href = tracked ? affiliateHref(to) : directHref(to)
  const rel = tracked ? 'noopener sponsored' : 'noopener nofollow'
  const common = { href, target: '_blank', rel } as const

  if (variant === 'card') {
    return (
      <a {...common} className={className ?? 'block h-full'}>
        {children}
      </a>
    )
  }

  if (variant === 'inline') {
    return (
      <a
        {...common}
        className="underline underline-offset-2 hover:opacity-80"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        {children}
      </a>
    )
  }

  if (variant === 'ghost') {
    return (
      <a
        {...common}
        className="inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-[rgb(var(--color-bg))]"
        style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      {...common}
      className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold shadow-sm transition-transform hover:-translate-y-[1px]"
      style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
    >
      {children}
    </a>
  )
}
