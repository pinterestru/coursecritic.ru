import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { activeSiteConfig } from '@/config/sites/active.generated'

import StoreView from '../../../components/store/StoreView'
import { getStore, stores } from '../../../data/stores'

/**
 * One route for every store page. Content lives in data/stores/<category>.ts
 * and is rendered by components/store/StoreView — adding a shop needs no route
 * work, only a data entry.
 */
export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const store = getStore(slug)
  if (!store) return {}

  const title = `${store.name} discount codes & deals`
  const description = `${store.name} promo codes and offers we could actually confirm, what each one excludes, and which country's storefront it works on. Last checked ${store.updated}.`
  const url = `/stores/${store.slug}`

  return {
    title: { absolute: `${title} — ${activeSiteConfig.brand.name}` },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: activeSiteConfig.brand.name,
      locale: 'en_US',
      modifiedTime: store.updated,
    },
    twitter: { card: 'summary', title, description },
  }
}

export default async function StorePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const store = getStore(slug)
  if (!store) notFound()

  return <StoreView store={store} />
}
