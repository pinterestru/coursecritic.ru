import Link from 'next/link'

import { activeSiteConfig } from '@/config/sites/active.generated'

import type { BrandPage } from '../../data/brands/types'
import { ldJson } from '../../data/guides/ldJson'
import { providers } from '../../data/providers'
import { getVertical } from '../../data/verticals'
import AffiliateLink from '../AffiliateLink'
import { contrastText } from '../contrastText'
import Rating from '../Rating'
import ArticleFaq from '../articles/ArticleFaq'

/**
 * The single template behind every /brands/<slug> page.
 *
 * Brand pages are data (data/brands/*.ts) rather than bespoke JSX because they
 * all answer the same questions in the same order. The JSON-LD emitted here is
 * a `Review` carrying OUR editorial score — not an aggregate of user ratings we
 * did not collect.
 */
export default function BrandView({ page }: { page: BrandPage }) {
  const provider = providers[page.providerId]
  if (!provider) return null

  const vertical = getVertical(provider.vertical)
  const href = page.deepLink ?? provider.domain
  const tracked = provider.tracked !== false
  const updated = new Date(page.updated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  /**
   * Review JSON-LD for the brand being reviewed.
   *
   * This is a third-party critic review — we rate someone else's product — which
   * is the supported use of `Review`. Google's restriction covers an entity
   * marking up reviews of ITSELF, which is not what happens here.
   *
   * Two deliberate choices:
   *  - `@type` comes from the page data rather than being hardcoded to Product,
   *    because typing a company (an airline) as a Product purely so it can carry
   *    a star rating misrepresents the page.
   *  - Organization subtypes are emitted WITHOUT a rating, since a rated
   *    Organization is precisely the restricted case.
   *  - `dateModified`, not `datePublished`: `page.updated` is the last editorial
   *    review date, so reporting it as a publication date would claim the page
   *    was first published afresh on every revision.
   */
  const schemaType = page.schemaType ?? 'Product'
  const isOrganizationSubtype = schemaType === 'Airline'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': schemaType,
      name: provider.name,
      url: `https://${provider.domain}`,
    },
    ...(isOrganizationSubtype
      ? {}
      : {
          reviewRating: {
            '@type': 'Rating',
            ratingValue: provider.score,
            bestRating: 5,
            worstRating: 1,
          },
        }),
    dateModified: page.updated,
    author: { '@type': 'Organization', name: activeSiteConfig.brand.name },
    publisher: { '@type': 'Organization', name: activeSiteConfig.brand.name },
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
          <nav
            className="text-xs"
            style={{ color: 'rgb(var(--color-muted))' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/brands"
              className="hover:underline"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              Brands
            </Link>
            <span className="mx-2">/</span>
            <span>{provider.name}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-extrabold"
                style={{ background: provider.color, color: contrastText(provider.color) }}
              >
                {provider.badge}
              </span>
              <div>
                <p
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  {vertical.name} · review
                </p>
                <h1
                  className="font-editorial mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {provider.name}
                </h1>
                <div className="mt-3">
                  <Rating value={provider.score} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <AffiliateLink to={href} tracked={tracked}>
                {provider.topCta ?? `Visit ${provider.siteLabel} →`}
              </AffiliateLink>
              <span className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                Independent review · last checked {updated}
              </span>
            </div>
          </div>

          <p
            className="mt-8 max-w-3xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {page.intro}
          </p>
          <p className="mt-4 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            Last reviewed {updated} · scored {provider.score.toFixed(1)}/5 by our editors
          </p>
        </div>
      </section>

      {/* Key facts */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {page.facts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border p-4"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: 'rgb(var(--color-surface))',
              }}
            >
              <dt
                className="text-xs tracking-wider uppercase"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {f.label}
              </dt>
              <dd
                className="font-editorial mt-1 text-xl font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-6 pb-4">
        <h2
          className="font-editorial text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          About {provider.name}
        </h2>
        <div className="article-prose mt-5">
          {/* Index keys throughout this file and the article components: these lists are
              authored prose, rendered statically and never reordered or filtered, so the
              index is stable — while keying off the text itself silently drops an item
              whenever two bullets happen to match. */}
          {page.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2
          className="font-editorial text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {page.plans.title}
        </h2>
        {/* auto-fit rather than a fixed 3 columns: brands carry 3, 4 or 5 tiers and a
            comparison set reads badly when the last tier is orphaned on its own row. */}
        <div className="mt-6 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,13rem),1fr))] gap-4">
          {page.plans.items.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl border p-5"
              style={{
                borderColor: plan.pick ? 'rgb(var(--color-primary))' : 'rgb(var(--color-rule))',
                borderWidth: plan.pick ? 2 : 1,
                background: 'rgb(var(--color-surface))',
              }}
            >
              {plan.pick && (
                <span
                  className="mb-3 self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em] uppercase"
                  style={{
                    background: 'rgb(var(--color-primary))',
                    color: 'rgb(var(--color-primary-fg))',
                  }}
                >
                  What we’d buy
                </span>
              )}
              <p
                className="font-editorial text-lg font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {plan.name}
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                {plan.price}
              </p>
              {plan.renews && (
                <p className="mt-0.5 text-xs" style={{ color: 'rgb(var(--color-danger))' }}>
                  {plan.renews}
                </p>
              )}
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {plan.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
          {page.plans.note}
        </p>
      </section>

      {/* Pros / cons */}
      <section
        className="border-y"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: 'rgb(var(--color-success))' }}
            >
              What works
            </p>
            <div className="mt-5 space-y-5">
              {page.pros.map((p) => (
                <div key={p.title}>
                  <p
                    className="font-editorial text-lg font-bold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: 'rgb(var(--color-danger))' }}
            >
              What doesn’t
            </p>
            <div className="mt-5 space-y-5">
              {page.cons.map((c) => (
                <div key={c.title}>
                  <p
                    className="font-editorial text-lg font-bold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {c.title}
                  </p>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reputation + fit */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2
              className="font-editorial text-2xl font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              How it scores elsewhere
            </h2>
            <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              Aggregate public scores, with the source named. We do not publish individual
              testimonials — we have no way to verify them.
            </p>
            <ul className="mt-5 space-y-3">
              {page.reputation.map((r) => (
                <li
                  key={r.source}
                  className="flex items-center justify-between gap-4 rounded-xl border px-4 py-3"
                  style={{
                    borderColor: 'rgb(var(--color-rule))',
                    background: 'rgb(var(--color-surface))',
                  }}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                      {r.source}
                    </p>
                    <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                      {r.note}
                    </p>
                  </div>
                  <Rating value={r.value} compact />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h2
                className="font-editorial text-2xl font-bold tracking-tight"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                Buy it if
              </h2>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
                {page.bestFor.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: 'rgb(var(--color-success))' }} aria-hidden>
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className="font-editorial text-2xl font-bold tracking-tight"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                Skip it if
              </h2>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
                {page.notFor.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: 'rgb(var(--color-danger))' }} aria-hidden>
                      −
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-4">
        <ArticleFaq items={page.faq} title={`${provider.name}: common questions`} />
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div
          className="rounded-2xl border p-6 text-center sm:p-10"
          style={{
            borderColor: 'rgb(var(--color-primary))',
            background: 'rgb(var(--color-primary) / 0.06)',
          }}
        >
          <h2
            className="font-editorial mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Ready to try {provider.name}?
          </h2>
          <p
            className="mx-auto mt-3 max-w-2xl text-base leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {provider.trust.join(' · ')}
          </p>
          <div className="mt-6">
            <AffiliateLink to={href} tracked={tracked}>
              {provider.topCta ?? `Visit ${provider.siteLabel} →`}
            </AffiliateLink>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(jsonLd) }} />
    </main>
  )
}
