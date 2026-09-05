/**
 * Общий конструктор `Metadata` для разборов под /articles.
 *
 * Три вещи, которые нужны каждому разбору и ни одна не появляется сама:
 *  - `title.absolute`, чтобы шаблон корневого layout `'%s — BrandCritic'` не
 *    дописывал ещё 14 символов и не уводил заголовок вкладки за ~60 знаков;
 *  - canonical — это лендинги, открываемые прямо из объявлений, а страница без
 *    canonical дублируется каждым рекламным параметром;
 *  - Open Graph / Twitter, потому что такие страницы пересылают в мессенджерах.
 *
 * Относительные URL резолвятся относительно `metadataBase` из app/layout.tsx.
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
