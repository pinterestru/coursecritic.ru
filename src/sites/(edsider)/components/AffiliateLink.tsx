import type { ReactNode } from 'react'

const TRACKER_BASE =
  'https://trk.edphub.online/click?o=30&a=41&deep_link=https://practicum.yandex.ru'

function buildHref(deepLink: string): string {
  const path = deepLink.startsWith('/') ? deepLink : `/${deepLink}`
  return `${TRACKER_BASE}${path}`
}

export default function AffiliateLink({
  deepLink = '/',
  variant = 'inline',
  children,
}: {
  /** Pathname on practicum.yandex.ru, e.g. '/backend-developer/'. */
  deepLink?: string
  /** Visual style. 'inline' for links inside text, 'button' for CTAs, 'card' for whole cards. */
  variant?: 'inline' | 'button' | 'card'
  children: ReactNode
}) {
  const href = buildHref(deepLink)

  if (variant === 'button') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener sponsored"
        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-[1px]"
        style={{
          background: 'rgb(var(--color-primary))',
          color: 'rgb(var(--color-primary-fg))',
        }}
      >
        {children}
      </a>
    )
  }

  if (variant === 'card') {
    return (
      <a href={href} target="_blank" rel="noopener sponsored" className="block h-full">
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored"
      className="underline underline-offset-2 hover:opacity-80"
      style={{ color: 'rgb(var(--color-primary))' }}
    >
      {children}
    </a>
  )
}
