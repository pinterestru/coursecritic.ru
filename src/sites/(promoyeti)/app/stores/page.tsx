import type { Metadata } from 'next'
import Link from 'next/link'

import Breadcrumbs from '../../components/Breadcrumbs'
import StoreCard from '../../components/StoreCard'
import { categories } from '../../data/categories'
import { SITE } from '../../data/site'
import { offerCount, stores, storesAlphabetical, storesByCategory } from '../../data/stores'

const TITLE = 'All stores'
const DESCRIPTION = `Every shop covered on ${SITE.name}, with the codes and no-code deals we could actually confirm — and the country each storefront serves.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/stores' },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: '/stores',
    siteName: SITE.name,
    locale: 'en_US',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export default function StoresIndexPage() {
  const alphabetical = storesAlphabetical()

  return (
    <main>
      <section
        className="border-b"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Stores' }]} />

          <p className="pp-eyebrow mt-6" style={{ color: 'rgb(var(--color-accent))' }}>
            {stores.length} stores · {offerCount()} offers
          </p>
          <h1
            className="font-display mt-4 max-w-3xl text-[38px] leading-[1.06] font-extrabold tracking-tight sm:text-[52px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Every store we cover
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Each page lists what is genuinely available at that shop right now, the market its
            storefront serves, and the condition that most often stops a discount at the checkout.
          </p>

          {/* Plain A–Z index for anyone who arrived looking for one specific
              shop. The card grids below are for browsing. */}
          <ul className="mt-10 columns-2 gap-x-8 text-sm sm:columns-3 lg:columns-4">
            {alphabetical.map((store) => (
              <li key={store.slug} className="mb-2 break-inside-avoid">
                <Link
                  href={`/stores/${store.slug}`}
                  className="hover:underline"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {store.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {categories.map((category) => {
          const list = storesByCategory(category.id)
          if (list.length === 0) return null
          return (
            <section key={category.id} id={category.id} className="mb-16 scroll-mt-20">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2
                    className="font-display text-2xl font-bold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {category.name}
                  </h2>
                  <p
                    className="mt-2 max-w-2xl text-sm"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {category.blurb}
                  </p>
                </div>
                <Link
                  href={`/categories/${category.id}`}
                  className="text-sm font-bold hover:underline"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  How to save here →
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((store) => (
                  <StoreCard key={store.slug} store={store} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
