import type { ReactNode } from 'react'

import { affiliateHref, directHref } from '../data/guides/types'

/**
 * Любая исходящая ссылка на бренд проходит через этот компонент.
 *
 * Для партнёров прямая ссылка заворачивается в /click/<domain>/<path>: клик
 * фиксируется до перехода, а сама ссылка помечается `rel="sponsored"`.
 * `tracked={false}` — для брендов, с которыми мы просто сравниваем: у них
 * обычная ссылка с nofollow, и она не приносит нам ничего. Это и делает
 * остальной рейтинг осмысленным.
 */
export default function AffiliateLink({
  to,
  children,
  variant = 'primary',
  tracked = true,
  className,
}: {
  /** Прямая ссылка, например 'winelab.ru/catalog'. */
  to: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'inline' | 'card'
  /** false для непартнёров — прямая ссылка, ничего не фиксируется. */
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
        className={`bc-mono inline-flex items-center gap-1.5 border px-4 py-2 text-xs font-semibold tracking-[0.08em] uppercase transition-colors hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))] ${className ?? ''}`}
        style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      {...common}
      className={`bc-mono inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold tracking-[0.08em] uppercase transition-transform hover:-translate-y-[1px] ${className ?? ''}`}
      style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
    >
      {children}
    </a>
  )
}
