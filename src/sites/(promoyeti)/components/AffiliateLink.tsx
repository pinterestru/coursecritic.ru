import type { ReactNode } from 'react'

import { affiliateHref } from '../data/types'

/**
 * Every outbound link to a merchant goes through here.
 *
 * It routes the destination through /click/<domain>/<path> so the click is
 * recorded before the visitor is forwarded, and marks the link `sponsored`.
 * The /click route only forwards to hosts in `offerHosts` (config.ts), which is
 * derived from this site's own store data — so a typo in a deep-link fails
 * closed rather than turning the domain into an open redirect.
 */
export default function AffiliateLink({
  to,
  children,
  variant = 'primary',
  className,
}: {
  /** Direct deep-link, e.g. 'shein.com/sale'. */
  to: string
  children: ReactNode
  variant?: 'primary' | 'accent' | 'ghost' | 'inline'
  className?: string
}) {
  const common = {
    href: affiliateHref(to),
    target: '_blank',
    rel: 'noopener sponsored',
  } as const

  if (variant === 'inline') {
    return (
      <a
        {...common}
        className={className ?? 'underline underline-offset-2 hover:opacity-80'}
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
        className={
          className ??
          'inline-flex items-center justify-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors hover:bg-[rgb(var(--color-bg))]'
        }
        style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </a>
    )
  }

  const filled =
    variant === 'accent'
      ? { background: 'rgb(var(--color-accent))', color: 'rgb(var(--color-accent-fg))' }
      : { background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }

  return (
    <a
      {...common}
      className={
        className ??
        'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold shadow-sm transition-transform hover:-translate-y-[1px]'
      }
      style={filled}
    >
      {children}
    </a>
  )
}
