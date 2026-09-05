import type { Metadata } from 'next'
import Link from 'next/link'

import ProviderCard from '../../components/ProviderCard'
import { providersByVertical, providersWithBrandPage } from '../../data/providers'
import { SITE } from '../../data/site'
import { verticals } from '../../data/verticals'

export const metadata: Metadata = {
  title: 'Brand reviews',
  description:
    'Independent reviews of the services we cover: what each one is good at, what it costs at renewal, and who should skip it.',
  alternates: { canonical: '/brands' },
  openGraph: {
    type: 'website',
    title: 'Brand reviews',
    description:
      'Independent reviews of the services we cover: what each one is good at, what it costs at renewal, and who should skip it.',
    url: '/brands',
    siteName: SITE.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Brand reviews',
    description:
      'Independent reviews of the services we cover: what each one is good at, what it costs at renewal, and who should skip it.',
  },
}

export default function BrandsIndexPage() {
  const reviewed = providersWithBrandPage()

  return (
    <main>
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <nav
            className="text-xs"
            style={{ color: 'rgb(var(--color-muted))' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Brands</span>
          </nav>

          <p
            className="mt-6 text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Reviews · one brand at a time
          </p>
          <h1
            className="font-editorial mt-5 max-w-3xl text-[40px] leading-[1.06] font-bold tracking-tight sm:text-[56px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Brand reviews, drawbacks included
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Each review covers the same ground: what the brand actually does well, what it costs
            once the fees and the renewal are counted, how it scores on public review sites, and the
            list of people who should buy somewhere else instead.
          </p>

          {/* Plain A-Z index. The grid below is browsable; this is for anyone who
              arrived looking for one specific brand. */}
          <ul className="mt-10 columns-2 gap-x-8 text-sm sm:columns-3 lg:columns-4">
            {[...reviewed]
              .sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))
              .map((provider) => (
                <li key={provider.id} className="mb-2 break-inside-avoid">
                  <Link
                    href={`/brands/${provider.brandSlug}`}
                    className="hover:underline"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {provider.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        {verticals.map((vertical) => {
          const list = providersByVertical(vertical.id).filter((p) => !!p.brandSlug)
          if (list.length === 0) return null
          return (
            <div key={vertical.id} id={vertical.id} className="mb-16 scroll-mt-6">
              <h2
                className="font-editorial text-2xl font-bold tracking-tight"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {vertical.name}
              </h2>
              <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
                {vertical.blurb}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((provider) => (
                  <ProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
