import type { Metadata } from 'next'

import { activeSiteConfig } from '@/config/sites/active.generated'

import type { Guide } from '../../data/guides'

const BASE = activeSiteConfig.seo.canonicalUrl.replace(/\/$/, '')

/** Canonical + OpenGraph metadata for a hardcoded guide page. */
export function guideMetadata(guide: Guide): Metadata {
  const url = `${BASE}/idei/${guide.slug}`
  return {
    // `absolute` обходит titleTemplate: с суффиксом «— Kodomania» заголовки
    // гайдов упирались в 62–73 символа и обрезались в выдаче.
    title: { absolute: guide.metaTitle },
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
    },
  }
}

export { BASE as CANONICAL_BASE }

/** Russian-pluralized "N идея/идеи/идей", e.g. 3 → «3 идеи», 5 → «5 идей». */
export function pluralIdeas(n: number): string {
  const d = n % 10
  const dd = n % 100
  if (d === 1 && dd !== 11) return `${n} идея`
  if (d >= 2 && d <= 4 && (dd < 12 || dd > 14)) return `${n} идеи`
  return `${n} идей`
}
