import type { ReactNode } from 'react'

// Practicum conversion tracker (edphub). Every Practicum CTA routes through this
// so the advertiser sees attributable clicks from the site.
const TRACKER = 'https://trk.edphub.online/click?o=30&a=410&deep_link=https://practicum.yandex.ru'

function href(path: string): string {
  return `${TRACKER}${path.startsWith('/') ? path : `/${path}`}`
}

/**
 * Route any advertiser URL through the internal /click tracker (edsider pattern):
 *   https://market.yandex.ru/search?text=… → /click/market.yandex.ru/search?text=…
 * The shared /click route records the click and forwards to the CPA network.
 */
export function clickHref(directUrl: string): string {
  return `/click/${directUrl.replace(/^https?:\/\//, '')}`
}

type Kind = 'text' | 'solid' | 'ghost' | 'wrap'

export default function AffiliateLink({
  to = '/',
  kind = 'text',
  children,
}: {
  /** Pathname on practicum.yandex.ru, e.g. '/backend-developer/'. */
  to?: string
  kind?: Kind
  children: ReactNode
}) {
  const url = href(to)
  const common = { href: url, target: '_blank', rel: 'noopener sponsored' as const }

  if (kind === 'wrap') {
    return (
      <a {...common} className="block h-full">
        {children}
      </a>
    )
  }

  if (kind === 'solid') {
    return (
      <a
        {...common}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:scale-[1.03]"
        style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
      >
        {children}
      </a>
    )
  }

  if (kind === 'ghost') {
    return (
      <a
        {...common}
        className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold transition-colors hover:bg-black/5"
        style={{ borderColor: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary))' }}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      {...common}
      className="font-semibold underline underline-offset-[3px] hover:opacity-70"
      style={{ color: 'rgb(var(--color-primary))' }}
    >
      {children}
    </a>
  )
}
