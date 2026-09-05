import type { RankEntry } from '../../data/guides/types'
import { providers as allProviders } from '../../data/providers'
import AffiliateLink from '../AffiliateLink'
import { contrastText } from '../contrastText'

/**
 * The high-conversion block near the top of every guide: a compact ranked table
 * with score, price and a tracked CTA on each row, plus an anchor jump to the
 * full write-up below. The reader gets the verdict and a link within the first
 * screen. Providers resolve by id from data/providers.ts, so a guide can mix
 * verticals without any extra wiring.
 */
export default function RatingSummary({
  entries,
  providers = allProviders,
  title = 'The ranking at a glance',
}: {
  entries: RankEntry[]
  providers?: typeof allProviders
  title?: string
}) {
  return (
    <section
      className="overflow-hidden rounded-2xl border"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div
        className="flex items-center justify-between gap-3 border-b px-5 py-3"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-bg))' }}
      >
        <p
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          {title}
        </p>
        <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
          scored out of 5
        </p>
      </div>

      <ol>
        {entries.map((entry, i) => {
          const provider = providers[entry.providerId]
          if (!provider) return null
          const rank = i + 1
          const isTop = rank === 1
          const href = entry.deepLink ?? provider.domain
          const price = entry.price ?? provider.priceNote
          return (
            <li
              key={provider.id}
              className="flex flex-col gap-4 border-b px-5 py-4 last:border-b-0 sm:flex-row sm:items-center"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: isTop ? 'rgb(var(--color-primary) / 0.06)' : 'transparent',
              }}
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className="font-editorial flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-base font-bold tabular-nums"
                  style={{
                    background: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg))',
                    color: 'rgb(var(--color-surface))',
                  }}
                >
                  {rank}
                </span>
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold"
                  style={{ background: provider.color, color: contrastText(provider.color) }}
                >
                  {provider.badge}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <a
                      href={`#${provider.id}`}
                      className="font-editorial text-base font-bold hover:underline"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {provider.name}
                    </a>
                    <span
                      className="rounded px-1.5 py-0.5 text-[11px] font-bold tabular-nums"
                      style={{
                        background: 'rgb(var(--color-accent))',
                        color: 'rgb(var(--color-fg))',
                      }}
                    >
                      ★ {provider.score.toFixed(1)}
                    </span>
                  </div>
                  <p
                    className="mt-0.5 truncate text-xs"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {entry.bestFor}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <span
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {price}
                </span>
                <AffiliateLink
                  to={href}
                  variant={isTop ? 'primary' : 'ghost'}
                  tracked={provider.tracked !== false}
                >
                  {isTop ? 'Get it →' : 'Visit'}
                </AffiliateLink>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
