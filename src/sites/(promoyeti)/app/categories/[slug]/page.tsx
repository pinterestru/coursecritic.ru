import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { activeSiteConfig } from '@/config/sites/active.generated'

import Breadcrumbs from '../../../components/Breadcrumbs'
import StoreCard from '../../../components/StoreCard'
import { categories, type CategoryId } from '../../../data/categories'
import { siteUrl } from '../../../data/site'
import { storesByCategory } from '../../../data/stores'

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.id }))
}

export const dynamicParams = false

function find(slug: string) {
  return categories.find((c) => c.id === (slug as CategoryId))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = find(slug)
  if (!category) return {}

  const title = `${category.name} discount codes`
  const url = `/categories/${category.id}`

  return {
    title,
    description: category.intro,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description: category.intro,
      url,
      siteName: activeSiteConfig.brand.name,
      locale: 'en_US',
    },
    twitter: { card: 'summary', title, description: category.intro },
  }
}

export default async function CategoryPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = find(slug)
  if (!category) notFound()

  const list = storesByCategory(category.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Categories', item: `${siteUrl}/categories` },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `${siteUrl}/categories/${category.id}`,
      },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="border-b"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
          <Breadcrumbs
            trail={[
              { label: 'Home', href: '/' },
              { label: 'Categories', href: '/categories' },
              { label: category.label },
            ]}
          />
          <span
            className="mt-6 inline-block h-1.5 w-14 rounded-full"
            style={{ background: category.accent }}
            aria-hidden
          />
          <h1
            className="font-display mt-4 max-w-3xl text-[36px] leading-[1.07] font-extrabold tracking-tight sm:text-[48px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {category.name}
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {category.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-14">
        <section>
          <h2 className="font-display text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            What to check before you pay
          </h2>
          <ul className="mt-5 space-y-3">
            {category.watchFor.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border px-5 py-4 text-[15px] leading-relaxed"
                style={{
                  borderColor: 'rgb(var(--color-rule))',
                  background: 'rgb(var(--color-surface))',
                  color: 'rgb(var(--color-fg))',
                }}
              >
                <span
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: category.accent }}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {list.length} store{list.length === 1 ? '' : 's'} in {category.label.toLowerCase()}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
