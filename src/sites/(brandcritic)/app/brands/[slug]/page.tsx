import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BrandView from '../../../components/brand/BrandView'
import { brandPages, getBrandPage } from '../../../data/brands'

/**
 * Один маршрут на все разборы брендов. Контент лежит в data/brands/<slug>.ts и
 * рисуется компонентом components/brand/BrandView — новый разбор не требует
 * работы с маршрутами, только файл данных и строку в data/brands/index.ts.
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
      locale: 'ru_RU',
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
