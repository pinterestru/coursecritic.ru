import Link from 'next/link'

import type { Provider } from '../data/guides/types'

import AffiliateLink from './AffiliateLink'
import { contrastText } from './contrastText'

/**
 * Compact brand tile for the home page and the /brands index.
 *
 * When the brand has its own review page the whole card links there — an
 * internal click we want, because the review converts better than a cold
 * outbound. Brands without a review page link straight out instead.
 */
export default function ProviderCard({ provider }: { provider: Provider }) {
  const inner = (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border-[1.5px] p-6 transition-all hover:shadow-[0_20px_40px_-20px_rgba(22,24,28,0.25)]"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      {/* Accent slab on hover */}
      <span
        className="absolute top-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
        style={{ background: 'rgb(var(--color-primary))' }}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3">
        {/* min-w-0: without it this flex item cannot shrink past its content,
            and a long unbreakable domain (joesnewbalanceoutlet.com) pushes the
            card wider than its grid track. */}
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className="flex h-9 w-9 items-center justify-center rounded text-[11px] font-extrabold tracking-tight"
            style={{ background: provider.color, color: contrastText(provider.color) }}
          >
            {provider.badge}
          </span>
          <div className="min-w-0">
            <p
              className="truncate text-sm font-bold tracking-tight"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {provider.name}
            </p>
            <p className="truncate text-[10px]" style={{ color: 'rgb(var(--color-muted))' }}>
              {provider.siteLabel}
            </p>
          </div>
        </div>
        <span
          className="flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-bold tabular-nums"
          style={{ background: 'rgb(var(--color-accent))', color: 'rgb(var(--color-fg))' }}
        >
          ★ {provider.score.toFixed(1)}
        </span>
      </div>

      <p
        className="font-editorial mt-5 text-[19px] leading-[1.25] font-bold"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {provider.tagline}
      </p>

      <p
        className="mt-3 line-clamp-2 text-sm leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {provider.highlights[0]}
      </p>

      <div className="mt-auto pt-6">
        <div
          className="flex items-end justify-between gap-3 border-t pt-4"
          style={{ borderColor: 'rgb(var(--color-rule))' }}
        >
          {/* Price and reach wrap to two lines rather than truncating — "from $3.39/mo on
              the 2-y…" reads as a bug, not as brevity. */}
          <div className="min-w-0">
            <p
              className="font-editorial line-clamp-2 text-[15px] leading-tight font-bold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {provider.priceNote}
            </p>
            <p
              className="mt-1 line-clamp-2 text-[11px] leading-snug tracking-wide"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {provider.reach}
            </p>
          </div>
          <span
            className="text-xs font-bold tracking-wider whitespace-nowrap uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            {provider.brandSlug ? 'Read review →' : 'Visit site →'}
          </span>
        </div>
      </div>
    </article>
  )

  if (provider.brandSlug) {
    return (
      <Link href={`/brands/${provider.brandSlug}`} className="block h-full">
        {inner}
      </Link>
    )
  }

  return (
    <AffiliateLink to={provider.domain} tracked={provider.tracked !== false} variant="card">
      {inner}
    </AffiliateLink>
  )
}
