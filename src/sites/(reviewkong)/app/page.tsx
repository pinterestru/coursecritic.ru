import type { Metadata } from 'next'
import Link from 'next/link'

import { activeSiteConfig } from '@/config/sites/active.generated'

import { type BrandPreview } from '../components/BrandCard'
import BrandTicker from '../components/BrandTicker'
import ProviderCard from '../components/ProviderCard'
import { articles } from '../data/articles'
import { brandPages } from '../data/brands'
import { faq, hero, policy } from '../data/home'
import { providers, providersByVertical, providersWithBrandPage } from '../data/providers'
import { getVertical, verticals } from '../data/verticals'

/**
 * The home page inherits its title and description from the root layout, but a
 * canonical and Open Graph block have to be declared here: `metadataBase` alone
 * emits neither, so without this the most-linked page on the site had no
 * self-referencing canonical (every `?utm_*`/`?fbclid` variant was a separate
 * URL to Google) and no share card at all.
 */
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${activeSiteConfig.brand.name} — independent buying guides`,
    description: activeSiteConfig.seo.defaultDescription,
    url: '/',
    siteName: activeSiteConfig.brand.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `${activeSiteConfig.brand.name} — independent buying guides`,
    description: activeSiteConfig.seo.defaultDescription,
  },
}

/**
 * The most recently revisited reviews, newest first.
 *
 * Dates are formatted here rather than in the slider because that component is
 * a client component: formatting there would use the visitor's locale and the
 * hydrated markup would not match what the server sent.
 *
 * Most pages share a review date, so the tiebreak is the editorial score — that
 * keeps the order stable between builds instead of falling back to whatever
 * order the registry happens to be in.
 */
function latestReviews(limit = 14): BrandPreview[] {
  return [...brandPages]
    .sort((a, b) => {
      if (a.updated !== b.updated) return a.updated < b.updated ? 1 : -1
      const scoreA = providers[a.providerId]?.score ?? 0
      const scoreB = providers[b.providerId]?.score ?? 0
      if (scoreA !== scoreB) return scoreB - scoreA
      return a.slug.localeCompare(b.slug)
    })
    .slice(0, limit)
    .flatMap((page) => {
      const provider = providers[page.providerId]
      if (!provider) return []
      return [
        {
          slug: page.slug,
          name: provider.name,
          badge: provider.badge,
          color: provider.color,
          score: provider.score,
          category: getVertical(provider.vertical).label,
          tagline: provider.tagline,
          reviewed: new Date(page.updated).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        },
      ]
    })
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Guides />
      <VerticalNav />
      <VerticalSections />
      <BrandDirectory />
      <Policy />
      <Faq />
    </main>
  )
}

function Hero() {
  const reviews = latestReviews()

  return (
    <section className="relative overflow-hidden">
      {/*
        Both tracks are minmax(0,…) and both children carry min-w-0. Without
        that, a grid item's automatic minimum size is its content's max-content
        width — and the ticker track is `width: max-content`, i.e. every card
        laid end to end. The column then stretched to ~7,300px, and because the
        grid is centred with mx-auto, the overflow pushed the hero copy off the
        left of the screen instead of simply being clipped.
      */}
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-12 px-6 pt-16 pb-16 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-16">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: 'rgb(var(--color-primary))' }}
              aria-hidden
            />
            <span
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {hero.eyebrow}
            </span>
          </div>

          <h1
            className="font-editorial mt-8 max-w-4xl text-[42px] leading-[1.05] font-bold tracking-tight sm:text-[64px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {hero.titleLead}
            <br />
            <span style={{ color: 'rgb(var(--color-primary))' }}>{hero.titleAccent}</span>
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg leading-[1.65]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {hero.body}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs">
            {hero.pills.map((label, i) => (
              <Pill key={i} label={label} />
            ))}
          </div>
        </div>

        {/*
          Below lg the grid collapses and this lands under the copy, where the
          ticker runs sideways; from lg it is the column beside it, running
          upward. Same block, same heading, both widths.
        */}
        <div className="min-w-0">
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Latest reviews
          </p>
          <h2
            className="font-editorial mt-2 mb-5 text-2xl leading-tight font-bold tracking-tight"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Most recently revisited
          </h2>
          <BrandTicker items={reviews} />
        </div>
      </div>
    </section>
  )
}

function Pill({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2" style={{ color: 'rgb(var(--color-muted))' }}>
      <span
        className="inline-block h-[1px] w-6"
        style={{ background: 'rgb(var(--color-fg))' }}
        aria-hidden
      />
      <span className="font-medium tracking-wide uppercase">{label}</span>
    </span>
  )
}

/**
 * One section per vertical, each listing that vertical's brands by editorial
 * score. Brands with a review page link inward; the rest link out through the
 * tracked redirect.
 */
function VerticalSections() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="space-y-24">
        {verticals.map((vertical, idx) => {
          const list = providersByVertical(vertical.id)
          if (list.length === 0) return null
          const avg = (list.reduce((s, p) => s + p.score, 0) / list.length).toFixed(1)
          return (
            <div key={vertical.id} id={vertical.id} className="relative scroll-mt-6">
              <header className="rule-dot pt-10">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-editorial text-[13px] font-bold tabular-nums"
                      style={{ color: 'rgb(var(--color-primary))' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2
                      className="font-editorial text-[34px] leading-none font-bold tracking-tight sm:text-[42px]"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {vertical.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase">
                    <span style={{ color: 'rgb(var(--color-muted))' }}>average score</span>
                    <span
                      className="rounded-sm px-2 py-0.5 font-bold tabular-nums"
                      style={{
                        background: 'rgb(var(--color-fg))',
                        color: 'rgb(var(--color-bg))',
                      }}
                    >
                      ★ {avg}
                    </span>
                  </div>
                </div>
                <p
                  className="mt-4 max-w-2xl text-sm leading-relaxed"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {vertical.blurb}
                </p>
              </header>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((provider) => (
                  <ProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/**
 * Jump links to the vertical sections below.
 *
 * The home page carries every brand we review, which makes it long by design —
 * a reader (or a partner checking their own listing) should not have to scroll
 * thirteen sections to find the one they came for.
 */
/**
 * A short strip of ranked buying guides.
 *
 * Note what this links to: the individual guides, never the `/articles` index.
 * The index is `noindex` and is not part of the browsable site; the guides
 * themselves are indexable and in the sitemap, so linking them from the home
 * page is what the rest of the site already assumed about them.
 *
 * One guide per vertical rather than the four newest overall — three of the
 * four most recent are in the same vertical, which would read as a security
 * site rather than a general one.
 */
function Guides() {
  const newestPerVertical = verticals
    .map((vertical) => {
      const inVertical = articles
        .filter((a) => a.vertical === vertical.id)
        .sort((a, b) => (a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : 0))
      return inVertical[0]
    })
    .filter((a) => !!a)
    .sort((a, b) => (a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : 0))
    .slice(0, 4)

  if (newestPerVertical.length === 0) return null

  return (
    <section
      className="border-y"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.22em] uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              Ranked guides
            </p>
            <h2
              className="font-editorial mt-2 text-2xl leading-tight font-bold tracking-tight sm:text-3xl"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              When you want the whole category compared
            </h2>
          </div>
          <p className="max-w-md text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            Longer pieces that rank every brand in one category against published criteria, rather
            than reviewing one at a time.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {newestPerVertical.map((article) => {
            const vertical = getVertical(article.vertical)
            return (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block border-t pt-4"
                style={{ borderColor: 'rgb(var(--color-fg))' }}
              >
                <p
                  className="text-[11px] font-bold tracking-[0.14em] uppercase"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  {vertical.label}
                </p>
                <h3
                  className="font-editorial mt-2 text-[17px] leading-[1.25] font-bold group-hover:underline"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {article.title.split(':')[0]}
                </h3>
                <p
                  className="mt-2 line-clamp-2 text-[13px] leading-relaxed"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {article.blurb}
                </p>
                <p
                  className="mt-3 text-[11px] tracking-wide"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {article.readingTime} read
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function VerticalNav() {
  return (
    <nav
      aria-label="Categories"
      className="border-y"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 px-6 py-5">
        {verticals.map((vertical) => {
          const count = providersByVertical(vertical.id).length
          if (count === 0) return null
          return (
            <a
              key={vertical.id}
              href={`#${vertical.id}`}
              className="flex items-baseline gap-1.5 text-[13px] font-semibold hover:underline"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {vertical.name}
              <span
                className="text-[11px] tabular-nums"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {count}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}

/**
 * Every reviewed brand, A-Z, as plain links.
 *
 * The cards above are browsable but slow to scan. This block exists so that
 * anyone looking for one specific brand — including an advertiser checking how
 * we describe them — can find its review in one screen.
 */
function BrandDirectory() {
  const reviewed = providersWithBrandPage().sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
  )

  return (
    <section
      className="border-y"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p
          className="text-[11px] font-bold tracking-[0.22em] uppercase"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          Index
        </p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2
            className="font-editorial text-[34px] leading-none font-bold tracking-tight sm:text-[42px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Every brand we review, A-Z
          </h2>
          <span className="text-xs tabular-nums" style={{ color: 'rgb(var(--color-muted))' }}>
            {reviewed.length} reviews
          </span>
        </div>
        <ul className="mt-8 columns-2 gap-x-8 text-sm sm:columns-3 lg:columns-4">
          {reviewed.map((provider) => (
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
  )
}

function Policy() {
  return (
    <section
      className="border-y"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p
          className="text-[11px] font-bold tracking-[0.22em] uppercase"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          Editorial policy
        </p>
        <h2
          className="font-editorial mt-4 max-w-2xl text-[40px] leading-[1.1] font-bold tracking-tight sm:text-[52px]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          How we rank things.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {policy.map((item) => (
            <div key={item.title} className="relative">
              <span
                className="font-editorial text-6xl leading-none font-bold tabular-nums"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                {item.num}
              </span>
              <h3
                className="font-editorial mt-6 text-2xl leading-[1.2] font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
          The criteria we apply in each category, and who writes them, are on the{' '}
          <Link href="/about" className="underline" style={{ color: 'rgb(var(--color-fg))' }}>
            about
          </Link>{' '}
          page.
        </p>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p
        className="text-[11px] font-bold tracking-[0.22em] uppercase"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        Questions
      </p>
      <h2
        className="font-editorial mt-4 text-[38px] leading-[1.1] font-bold tracking-tight"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        What readers ask most.
      </h2>
      <div className="mt-10 divide-y" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        {faq.map((item) => (
          <details
            key={item.q}
            className="group py-6"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
          >
            <summary
              className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              <span className="font-editorial font-bold">{item.q}</span>
              <span
                className="mt-1 inline-block h-5 w-5 flex-shrink-0 text-center leading-5 transition-transform group-open:rotate-45"
                style={{ color: 'rgb(var(--color-primary))' }}
                aria-hidden
              >
                +
              </span>
            </summary>
            <p
              className="mt-4 text-[15px] leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
