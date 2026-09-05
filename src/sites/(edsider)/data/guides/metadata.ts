/**
 * Shared Next.js `Metadata` builder for the /articles rating guides.
 *
 * Three things every guide needs and none of them got by hand:
 *  - `title.absolute`, so the root layout's `'%s — EDсайдер'` template does NOT
 *    append 11 more characters and push the tab/preview title past ~60 chars.
 *  - a canonical URL — these landers are opened directly from ads and were
 *    previously emitting none at all.
 *  - Open Graph / Twitter tags, since the pages get shared into messengers.
 *
 * Relative URLs here resolve against `metadataBase` set in app/layout.tsx.
 */
import type { Metadata } from 'next'

import { activeSiteConfig } from '@/config/sites/active.generated'

import type { ArticleMeta } from './types'

export function articleMetadata(meta: ArticleMeta): Metadata {
  const url = `/articles/${meta.slug}`

  return {
    title: { absolute: meta.metaTitle },
    description: meta.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: meta.metaTitle,
      description: meta.metaDescription,
      url,
      siteName: activeSiteConfig.brand.name,
      locale: 'ru_RU',
      publishedTime: meta.updated,
      modifiedTime: meta.updated,
    },
    twitter: {
      card: 'summary',
      title: meta.metaTitle,
      description: meta.metaDescription,
    },
  }
}
