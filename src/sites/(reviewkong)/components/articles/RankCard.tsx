import Link from 'next/link'

import type { RankEntry } from '../../data/guides/types'
import { providers as allProviders } from '../../data/providers'
import AffiliateLink from '../AffiliateLink'
import { contrastText } from '../contrastText'
import Rating from '../Rating'

/**
 * Full per-provider section in a ranked guide. The #1 slot gets the editor's
 * pick treatment. Each card merges the shared brand data from
 * data/providers.ts with this guide's own RankEntry (verdict, price, deep-link,
 * spotlight), so the same brand can appear in several guides with a different
 * argument each time.
 */
export default function RankCard({
  rank,
  entry,
  providers = allProviders,
}: {
  rank: number
  entry: RankEntry
  providers?: typeof allProviders
}) {
  const provider = providers[entry.providerId]
  if (!provider) return null

  const isTop = rank === 1
  const href = entry.deepLink ?? provider.domain
  const tracked = provider.tracked !== false
  const price = entry.price ?? provider.priceNote
  const pros = entry.pros ?? provider.pros
  const cons = entry.cons ?? provider.cons
  const format = entry.format ?? provider.format
  const highlights = entry.highlights ?? provider.highlights
  const tagline = entry.tagline ?? provider.tagline

  return (
    <article
      id={provider.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border"
      style={{
        borderColor: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-rule))',
        borderWidth: isTop ? 2 : 1,
        background: 'rgb(var(--color-surface))',
      }}
    >
      {isTop && (
        <div
          className="px-6 py-2 text-center text-[11px] font-bold tracking-[0.18em] uppercase"
          style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
        >
          ★ Editor’s pick
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Stacks under the title in the narrow article column; sits beside it when there
            is room. Explicit column/row beats flex-wrap here — a wrapped price block ends
            up indented rather than flush left. */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <span
              className="font-editorial flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl font-bold tabular-nums"
              style={{
                background: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg))',
                color: 'rgb(var(--color-surface))',
              }}
              aria-label={`Rank ${rank}`}
            >
              {rank}
            </span>
            <span
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-sm font-extrabold"
              style={{ background: provider.color, color: contrastText(provider.color) }}
            >
              {provider.badge}
            </span>
            <div>
              <h3
                className="font-editorial text-2xl leading-tight font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {provider.name}
              </h3>
              <div className="mt-1">
                <Rating value={provider.score} />
              </div>
            </div>
          </div>
          <div className="text-left md:text-right">
            <p
              className="font-editorial text-lg font-bold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {price}
            </p>
            <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
              {format}
            </p>
          </div>
        </div>

        <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
          {tagline}
        </p>

        {/* The editor's verdict on this product, in this ranking */}
        <blockquote
          className="mt-5 rounded-xl border-l-4 py-3 pr-3 pl-4 text-[15px] leading-relaxed italic"
          style={{
            borderColor: 'rgb(var(--color-primary))',
            background: 'rgb(var(--color-bg))',
            color: 'rgb(var(--color-fg))',
          }}
        >
          {entry.verdict}
        </blockquote>

        <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              <span style={{ color: 'rgb(var(--color-success))' }} aria-hidden>
                ✓
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {entry.spotlight && (
          <div
            className="mt-6 rounded-xl border p-4"
            style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-bg))' }}
          >
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              {entry.spotlight.label}
            </p>
            <p className="mt-1 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {entry.spotlight.body}
            </p>
          </div>
        )}

        {/* Pros / cons */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-success))' }}
            >
              What works
            </p>
            <ul className="mt-2 space-y-1.5 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: 'rgb(var(--color-success))' }} aria-hidden>
                    +
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-danger))' }}
            >
              What doesn’t
            </p>
            <ul className="mt-2 space-y-1.5 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {cons.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: 'rgb(var(--color-danger))' }} aria-hidden>
                    −
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <AffiliateLink to={href} tracked={tracked}>
            {isTop && provider.topCta ? provider.topCta : `Visit ${provider.siteLabel} →`}
          </AffiliateLink>
          {provider.brandSlug && (
            <Link
              href={`/brands/${provider.brandSlug}`}
              className="text-sm font-semibold underline underline-offset-2"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              Full {provider.name} review
            </Link>
          )}
          <span className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            {provider.founded} · {provider.reach}
          </span>
        </div>

        <p
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {provider.ratings.map((r) => (
            <span key={r.source}>
              {r.source}:{' '}
              <strong style={{ color: 'rgb(var(--color-fg))' }}>{r.value.toFixed(1)}</strong>
            </span>
          ))}
          {!tracked && <span>· not an affiliate partner — this link earns us nothing</span>}
        </p>
      </div>
    </article>
  )
}
