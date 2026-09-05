import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { activeSiteConfig } from '@/config/sites/active.generated'

import BrandView from '../../../components/brand/BrandView'
import { brandPages, getBrandPage } from '../../../data/brands'

/**
 * One route for every brand review. Content lives in data/brands/<slug>.ts and
 * is rendered by components/brand/BrandView — adding a review needs no route
 * work, only a data file and a line in data/brands/index.ts.
 */
export function generateStaticParams() {
  return brandPages.map((page) => ({ slug: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getBrandPage(slug)
  if (!page) return {}

  const url = `/brands/${page.slug}`
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: activeSiteConfig.brand.name,
      locale: 'en_US',
      publishedTime: page.updated,
      modifiedTime: page.updated,
    },
    twitter: { card: 'summary', title: page.metaTitle, description: page.metaDescription },
  }
}

export default async function BrandPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getBrandPage(slug)
  if (!page) notFound()

  return <BrandView page={page} />
}
