import type { ReactNode } from 'react'

// Affiliate tracker that deep-links into practicum.yandex.ru.
// `deep_link` is appended without URL-encoding — that's the format edphub expects.
const TRACKER_BASE =
  'https://trk.edphub.online/click?o=30&a=700&deep_link=https://practicum.yandex.ru'

function buildHref(deepLink: string): string {
  const path = deepLink.startsWith('/') ? deepLink : `/${deepLink}`
  return `${TRACKER_BASE}${path}`
}

export default function AffiliateLink({
  deepLink = '/',
  children,
}: {
  /** Pathname on practicum.yandex.ru, e.g. '/backend-developer/'. Defaults to '/'. */
  deepLink?: string
  children: ReactNode
}) {
  return (
    <a
      href={buildHref(deepLink)}
      target="_blank"
      rel="noopener sponsored"
      className="underline decoration-[1.5px] underline-offset-2 transition-colors"
      style={{
        color: 'rgb(var(--color-link))',
        textDecorationColor: 'rgb(var(--color-link) / 0.35)',
      }}
    >
      {children}
    </a>
  )
}
