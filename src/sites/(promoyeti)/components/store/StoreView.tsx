import Link from 'next/link'

import { getCategory } from '../../data/categories'
import { SITE, siteUrl } from '../../data/site'
import { storesByCategory } from '../../data/stores'
import { sortOffers, type Store } from '../../data/types'
import AffiliateLink from '../AffiliateLink'
import BrandMark from '../BrandMark'
import Breadcrumbs from '../Breadcrumbs'
import Faq from '../Faq'
import { formatDate } from '../format'
import OfferCard from '../OfferCard'
import StoreCard from '../StoreCard'

/**
 * One template renders all 77 store pages. Adding a shop is a data entry.
 *
 * The layout is the two-column shape the category has settled on — offers in
 * the main column, a sticky sidebar of facts beside them — because it puts the
 * two things a visitor arrived for (the offers, and whether this page applies
 * to them) on the same screen without scrolling.
 *
 * Structured data is FAQPage and BreadcrumbList only. There is deliberately no
 * Offer or Product markup: we have no prices, no currencies and no validity
 * dates for most of these, and inventing them to win a rich result is exactly
 * the misrepresentation the structured-data guidelines are about.
 */
export default function StoreView({ store }: { store: Store }) {
  const category = getCategory(store.category)
  const offers = sortOffers(store.offers)
  const codes = offers.filter((o) => o.kind === 'code').length
  const deals = offers.length - codes
  const related = storesByCategory(store.category)
    .filter((s) => s.slug !== store.slug)
    .slice(0, 3)

  // The best published figure across this store's offers, if any of them
  // carries one at all. Most do not — see the `value` note in data/types.ts.
  const bestFigure = offers
    .map((o) => o.value)
    .filter((v) => /^\d/.test(v))
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))[0]

  const period = monthYear(store.updated)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Stores', item: `${siteUrl}/stores` },
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `${siteUrl}/categories/${category.id}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: store.name,
          item: `${siteUrl}/stores/${store.slug}`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: store.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Brand band ───────────────────────────────────────────────────── */}
      <section
        className="border-b"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-bg))',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
          <Breadcrumbs
            trail={[
              { label: 'Home', href: '/' },
              { label: 'Stores', href: '/stores' },
              { label: category.label, href: `/categories/${category.id}` },
              { label: store.name },
            ]}
          />

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <BrandMark name={store.name} badge={store.badge} color={store.color} size="lg" />
            <div className="min-w-0 flex-1">
              <h1
                className="font-display text-[30px] leading-[1.06] font-extrabold sm:text-[40px]"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {`${store.name} promo codes & deals`}
              </h1>
              <p className="mt-2.5 text-[15px]" style={{ color: 'rgb(var(--color-muted))' }}>
                <strong style={{ color: 'rgb(var(--color-fg))' }}>
                  {offers.length} offer{offers.length === 1 ? '' : 's'}
                </strong>{' '}
                checked on {formatDate(store.updated)} · {category.name.toLowerCase()}
              </p>
            </div>
            <div className="shrink-0">
              <AffiliateLink to={store.domain} variant="primary">
                {`Visit ${store.name} →`}
              </AffiliateLink>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_312px]">
        {/* ── Offers ─────────────────────────────────────────────────────── */}
        <div className="min-w-0">
          <h2 className="font-display text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {`Top ${store.name} offers for ${period}`}
          </h2>

          <div className="mt-5 space-y-4">
            {offers.map((offer) => (
              <OfferCard key={offer.id} store={store} offer={offer} />
            ))}
          </div>

          {codes === 0 && (
            <p
              className="mt-5 rounded-xl border px-5 py-4 text-sm leading-relaxed"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: 'rgb(var(--color-surface))',
                color: 'rgb(var(--color-muted))',
              }}
            >
              <strong style={{ color: 'rgb(var(--color-fg))' }}>
                No code is listed here right now, and that is on purpose.
              </strong>{' '}
              We had no code for {store.name} that we could confirm, so we are not printing one.
              Everything above works without typing anything into a coupon box. If you find a
              working code, send it to us and we will check it and credit you.
            </p>
          )}

          {/* ── About ────────────────────────────────────────────────────── */}
          <section className="mt-12">
            <h2
              className="font-display text-xl font-bold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {`How discounting works at ${store.name}`}
            </h2>
            <div className="store-prose mt-4">
              {store.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* ── Saving tips ──────────────────────────────────────────────── */}
          <section className="mt-12">
            <h2
              className="font-display text-xl font-bold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Ways to pay less that are not codes
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {store.savingTips.map((tip) => (
                <li
                  key={tip.title}
                  className="rounded-xl border p-5"
                  style={{
                    borderColor: 'rgb(var(--color-rule))',
                    background: 'rgb(var(--color-surface))',
                  }}
                >
                  <p className="text-[15px] font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                    {tip.title}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {tip.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <div className="mt-12">
            <Faq items={store.faq} title={`${store.name}: questions people actually ask`} />
          </div>

          {/* ── Honesty note ─────────────────────────────────────────────── */}
          <section
            className="mt-12 rounded-xl border p-6"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <p className="pp-eyebrow" style={{ color: 'rgb(var(--color-accent))' }}>
              How this page is made
            </p>
            <p
              className="mt-3 text-[15px] leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {`Everything above was written from ${store.name}'s own published pages — the
              promotions page, the terms, the delivery and returns policy — and last checked on `}
              <strong style={{ color: 'rgb(var(--color-fg))' }}>{formatDate(store.updated)}</strong>
              {`. We do not run a scraper that fills the page with codes nobody has tried, and we
              do not publish a code we have not seen. Retail terms move; if something here is
              wrong, tell us and we will fix it and re-date the page. `}
              <Link
                href="/about"
                className="underline"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                {`More on how ${SITE.name} works`}
              </Link>
              .
            </p>
          </section>
        </div>

        {/* ── Sidebar ────────────────────────────────────────────────────── */}
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          {/* The market line comes first. For the single-country storefronts it
              is the fact that decides whether this page is useful at all, and
              it is worth more to the reader than any offer under it. */}
          <div
            className="rounded-xl border-l-4 p-4"
            style={{
              borderColor: 'rgb(var(--color-accent))',
              background: 'rgb(var(--color-surface))',
              boxShadow: 'inset 0 0 0 1px rgb(var(--color-rule))',
            }}
          >
            <p className="pp-eyebrow" style={{ color: 'rgb(var(--color-accent))' }}>
              Where this works
            </p>
            <p
              className="mt-1.5 text-[14px] leading-relaxed font-semibold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {store.markets}
            </p>
          </div>

          <SidebarCard title="Offer summary">
            <StatRow label="Total offers" value={String(offers.length)} />
            <StatRow label="Confirmed codes" value={String(codes)} />
            <StatRow label="No-code deals" value={String(deals)} />
            {/* Only rendered when a merchant actually published a percentage.
                Most have not, and a row reading "None published" on 70 of 77
                pages is noise rather than information. */}
            {bestFigure && <StatRow label="Biggest published cut" value={bestFigure} />}
            <StatRow label="Last checked" value={formatDate(store.updated)} />
          </SidebarCard>

          <SidebarCard title="Before you check out">
            <dl className="space-y-3">
              {store.facts.map((fact) => (
                <div key={fact.label}>
                  <dt
                    className="text-[10px] font-bold tracking-[0.14em] uppercase"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className="mt-0.5 text-[14px] leading-snug font-semibold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SidebarCard>

          <SidebarCard title={`How to use a ${store.name} code`}>
            <ol className="space-y-2.5 text-[13px] leading-relaxed">
              {[
                'Pick an offer above. Orange means there is a code; green means the discount applies without one.',
                'Click through — the shop opens in a new tab and the code is copied for you.',
                'Fill your basket, then look for the promo or voucher box at checkout.',
                'Paste, apply, and check the total actually changed before you pay.',
              ].map((step, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    className="mt-px inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      background: 'rgb(var(--color-primary))',
                      color: 'rgb(var(--color-primary-fg))',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span style={{ color: 'rgb(var(--color-muted))' }}>{step}</span>
                </li>
              ))}
            </ol>
          </SidebarCard>

          <p
            className="mt-4 px-1 text-[12px] leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            When you buy through a link on this page we may earn a commission.{' '}
            <Link
              href="/disclosure"
              className="underline"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              How that works
            </Link>
            .
          </p>
        </aside>
      </div>

      {/* ── Related ──────────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-4">
          <h2 className="font-display text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {`More in ${category.name.toLowerCase()}`}
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <StoreCard key={s.slug} store={s} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function SidebarCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section
      className="mt-4 rounded-xl border p-5"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <h2 className="pp-eyebrow" style={{ color: 'rgb(var(--color-primary))' }}>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-baseline justify-between gap-3 border-b py-2 text-[13px] last:border-b-0"
      style={{ borderColor: 'rgb(var(--color-rule))' }}
    >
      <span style={{ color: 'rgb(var(--color-muted))' }}>{label}</span>
      <span className="text-right font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
        {value}
      </span>
    </div>
  )
}

/** '2026-08-25' → 'August 2026'. Used in headings so the page reads as current. */
function monthYear(iso: string): string {
  const parts = formatDate(iso).split(' ')
  return parts.length === 3 ? `${parts[1]} ${parts[2]}` : formatDate(iso)
}
