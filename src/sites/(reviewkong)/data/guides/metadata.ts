/**
 * Shared Next.js `Metadata` builder for the ranked guides under /articles.
 *
 * Three things every guide needs and none of them get by hand:
 *  - `title.absolute`, so the root layout's `'%s — ReviewKong'` template does NOT
 *    append 11 more characters and push the tab/preview title past ~60 chars.
 *  - a canonical URL — these are landers opened straight from ads, and a page
 *    without a canonical is a page duplicated by every tracking parameter.
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
      locale: 'en_US',
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
