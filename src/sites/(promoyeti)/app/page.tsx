import type { Metadata } from 'next'
import Link from 'next/link'

import BrandTile from '../components/BrandTile'
import OfferCard from '../components/OfferCard'
import StoreSearch, { type SearchEntry } from '../components/StoreSearch'
import { categories, getCategory } from '../data/categories'
import { SITE, siteUrl } from '../data/site'
import {
  codeCount,
  featuredOffers,
  offerCount,
  stores,
  storesAlphabetical,
  storesByCategory,
} from '../data/stores'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

/** Stores with a wordmark short enough to read in a tile, for the preview grid. */
const TILE_COUNT = 18
/** One offer per brand in the feed — the site's whole premise on one screen. */
const FEED_COUNT = 8

/**
 * The home page has one job that is not obvious.
 *
 * Almost nobody arrives here — the traffic this site is built for lands
 * directly on a store page from a "<brand> promo code" search or a paid click.
 * So the home page is not a funnel entrance; it is the thing that makes the
 * site look like a real publication to a human, to an ad reviewer and to a
 * crawler deciding whether the store pages are part of something or floating
 * alone. Hence: search first, brands you recognise second, and one real offer
 * per brand third — no fabricated urgency, no countdown timers, no "412 people
 * used this today".
 */
export default function HomePage() {
  const alphabetical = storesAlphabetical()

  const searchEntries: SearchEntry[] = alphabetical.map((store) => ({
    slug: store.slug,
    name: store.name,
    badge: store.badge,
    color: store.color,
    category: getCategory(store.category).label,
    offers: store.offers.length,
  }))

  const tiles = featuredOffers(TILE_COUNT).map((f) => f.store)
  const feed = featuredOffers(FEED_COUNT)
  // A handful of well-known names as one-click entries into the index.
  const trending = ['shein', 'nordvpn', 'trip-com', 'lenovo', 'udemy', 'walmart', 'airalo', 'hm']
    .map((slug) => alphabetical.find((s) => s.slug === slug))
    .filter((s): s is (typeof alphabetical)[number] => !!s)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: siteUrl,
    description: `Discount codes and deals for ${stores.length} online stores.`,
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="border-b"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-18">
          <h1
            className="font-display text-[38px] leading-[1.03] font-extrabold sm:text-[54px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Discount codes,
            <br />
            minus the dead ones.
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {stores.length} shops, {offerCount()} offers, every one dated and tied to the country it
            actually works in. Where a shop has no code worth printing, we say so.
          </p>

          <div className="mx-auto mt-8 max-w-xl text-left">
            <StoreSearch entries={searchEntries} />
          </div>

          {/* The count is the positioning, stated as a number rather than a
              claim: right now it is small, and saying so is the point. */}
          <p className="mt-4 text-[13px]" style={{ color: 'rgb(var(--color-muted))' }}>
            {codeCount() > 0
              ? `${codeCount()} confirmed codes · ${offerCount() - codeCount()} no-code deals`
              : 'Every offer listed today works without a code — which is why none are shown.'}{' '}
            <Link
              href="/about"
              className="underline"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              Why that number is what it is
            </Link>
          </p>

          <div className="pp-rail mt-5 justify-center px-1 py-1">
            {trending.map((store) => (
              <Link
                key={store.slug}
                href={`/stores/${store.slug}`}
                className="shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold whitespace-nowrap transition-colors hover:bg-[rgb(var(--color-bg))]"
                style={{
                  borderColor: 'rgb(var(--color-rule))',
                  color: 'rgb(var(--color-fg))',
                }}
              >
                {store.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* ── Brand previews ─────────────────────────────────────────────── */}
        <section>
          <SectionHead
            eyebrow="Browse by shop"
            title="Every brand has its own page"
            href="/stores"
            linkLabel={`All ${stores.length} stores →`}
          >
            One page per shop, with the offers we could confirm, the market its storefront serves
            and the small print that decides whether a discount survives the checkout.
          </SectionHead>

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {tiles.map((store) => (
              <BrandTile key={store.slug} store={store} />
            ))}
          </div>
        </section>

        {/* ── One offer per brand ────────────────────────────────────────── */}
        <section className="mt-16">
          <SectionHead
            eyebrow="One pick per shop"
            title="What we would use today"
            href="/stores"
            linkLabel="See every offer →"
          >
            The single offer we would take at each of these shops — not the biggest number we could
            find, the one that is actually worth the click.
          </SectionHead>

          <div className="mt-7 space-y-4">
            {feed.map(({ store, offer }) => (
              <OfferCard key={`${store.slug}-${offer.id}`} store={store} offer={offer} showBrand />
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/stores"
              className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-bold transition-colors hover:bg-[rgb(var(--color-surface))]"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
            >
              {`Browse all ${stores.length} shops →`}
            </Link>
          </div>
        </section>

        {/* ── Categories ─────────────────────────────────────────────────── */}
        <section className="mt-16">
          <SectionHead
            eyebrow="Browse by market"
            title="Every category discounts differently"
            href="/categories"
            linkLabel="All categories →"
          >
            A code is the mechanic in some of these markets and a decoration in others. Each
            category page says which, and what to check before you pay.
          </SectionHead>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 transition-all hover:-translate-y-[1px]"
                style={{
                  borderColor: 'rgb(var(--color-rule))',
                  background: 'rgb(var(--color-surface))',
                }}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span
                    className="inline-block h-6 w-1 shrink-0 rounded-full"
                    style={{ background: category.accent }}
                    aria-hidden
                  />
                  <span
                    className="truncate text-[14px] font-bold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {category.label}
                  </span>
                </span>
                <span className="text-[12px]" style={{ color: 'rgb(var(--color-muted))' }}>
                  {storesByCategory(category.id).length}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Positioning ────────────────────────────────────────────────── */}
        <section
          className="mt-16 overflow-hidden rounded-2xl"
          style={{ background: 'rgb(var(--color-fg))', color: 'rgb(var(--color-bg))' }}
        >
          <div className="px-7 py-10 sm:px-12 sm:py-14">
            <p className="pp-eyebrow" style={{ color: 'rgb(var(--color-accent))' }}>
              The short version
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-2xl leading-tight font-extrabold sm:text-[32px]">
              Most coupon sites are a wall of codes that do not work. Here is why this one is not.
            </h2>
            <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <Point title="No invented codes">
                A code appears here only if somebody read it on the merchant’s own page, in the
                affiliate feed, or in the merchant’s e-mail. The build fails if a code offer has
                nothing behind it — that check is in the repository, not in a promise.
              </Point>
              <Point title="No invented numbers">
                The big label on each offer is a published percentage or the kind of saving it is.
                Nobody here writes “50% OFF” because it looks good in a list.
              </Point>
              <Point title="The catch, in writing">
                Sale exclusions, spend minimums, per-passenger caps, renewal prices. If an offer has
                a condition that commonly kills it at the till, it is under the offer.
              </Point>
            </div>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center rounded-lg px-5 py-3 text-sm font-bold"
              style={{
                background: 'rgb(var(--color-accent))',
                color: 'rgb(var(--color-accent-fg))',
              }}
            >
              How we work →
            </Link>
          </div>
        </section>

        {/* ── A–Z ────────────────────────────────────────────────────────── */}
        <section className="mt-16">
          <SectionHead eyebrow="Index" title="All shops, A to Z" />
          <ul className="mt-6 columns-2 gap-x-8 text-[14px] sm:columns-3 lg:columns-5">
            {alphabetical.map((store) => (
              <li key={store.slug} className="mb-1.5 break-inside-avoid">
                <Link
                  href={`/stores/${store.slug}`}
                  className="hover:underline"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {store.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

function SectionHead({
  eyebrow,
  title,
  children,
  href,
  linkLabel,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
  href?: string
  linkLabel?: string
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="max-w-2xl">
        <p className="pp-eyebrow" style={{ color: 'rgb(var(--color-primary))' }}>
          {eyebrow}
        </p>
        <h2
          className="font-display mt-2 text-[26px] leading-tight font-extrabold sm:text-[32px]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {title}
        </h2>
        {children && (
          <p
            className="mt-3 text-[15px] leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {children}
          </p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="text-sm font-bold whitespace-nowrap hover:underline"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          {linkLabel}
        </Link>
      )}
    </div>
  )
}

function Point({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-base font-bold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed opacity-75">{children}</p>
    </div>
  )
}
