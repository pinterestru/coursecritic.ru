import type { GuideProvider, RankEntry } from '../../data/guides/types'
import { egeSchools } from '../../data/ege/schools'

import AffiliateButton from './AffiliateButton'

/**
 * The high-conversion block at the top of every guide: a compact ranked table
 * of all schools with score, price and a tracked CTA in each row, plus an
 * anchor jump to the full card below. The reader gets the verdict and a link
 * to click within the first screen. `schools` selects the vertical's provider
 * registry (ЕГЭ by default).
 */
export default function RatingSummary({
  entries,
  schools = egeSchools,
}: {
  entries: RankEntry[]
  schools?: Record<string, GuideProvider>
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
          Рейтинг школ — кратко
        </p>
        <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
          оценка по 5-балльной шкале
        </p>
      </div>

      <ol>
        {entries.map((entry, i) => {
          const school = schools[entry.schoolId]
          if (!school) return null
          const rank = i + 1
          const isTop = rank === 1
          const href = entry.deepLink ?? school.domain
          const price = entry.price ?? school.priceNote
          return (
            <li
              key={school.id}
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
                  style={{ background: school.color, color: '#fff' }}
                >
                  {school.badge}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <a
                      href={`#${school.id}`}
                      className="font-editorial text-base font-bold hover:underline"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {school.name}
                    </a>
                    <span
                      className="rounded px-1.5 py-0.5 text-[11px] font-bold tabular-nums"
                      style={{ background: 'rgb(var(--color-accent))', color: '#fff' }}
                    >
                      ★ {school.score.toFixed(1)}
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
                <AffiliateButton
                  to={href}
                  variant={isTop ? 'primary' : 'ghost'}
                  tracked={school.tracked !== false}
                >
                  {isTop ? 'Выбрать →' : 'Перейти'}
                </AffiliateButton>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
