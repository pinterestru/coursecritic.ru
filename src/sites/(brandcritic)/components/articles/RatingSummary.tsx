import type { RankEntry } from '../../data/guides/types'
import { providers as allProviders } from '../../data/providers'
import AffiliateLink from '../AffiliateLink'
import ScoreMeter from '../ScoreMeter'
import { contrastText } from '../contrastText'

/**
 * Сводное табло в начале каждого разбора: позиция, бренд, кому подходит,
 * оценка, цена и размеченная кнопка в каждой строке, плюс якорь к полному
 * разбору ниже. Читатель получает вывод и ссылку на первом экране.
 *
 * Сервисы резолвятся по id из data/providers.ts, поэтому разбор может смешивать
 * вертикали без дополнительной проводки.
 */
export default function RatingSummary({
  entries,
  providers = allProviders,
  title = 'Итог разбора',
}: {
  entries: RankEntry[]
  providers?: typeof allProviders
  title?: string
}) {
  return (
    <section
      className="bc-corners border"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div
        className="flex items-center justify-between gap-3 border-b px-5 py-3"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-bg))' }}
      >
        <p
          className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          {title}
        </p>
        <p
          className="bc-mono text-[10px] tracking-[0.12em] uppercase"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          оценка из 5
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
          const score = entry.score ?? provider.score
          return (
            <li
              key={provider.id}
              className="flex flex-col gap-4 border-b px-5 py-4 last:border-b-0 lg:flex-row lg:items-center lg:gap-6"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: isTop ? 'rgb(var(--color-primary) / 0.05)' : 'transparent',
              }}
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className="bc-mono w-6 flex-shrink-0 text-base font-bold tabular-nums"
                  style={{
                    color: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg) / 0.55)',
                  }}
                >
                  {String(rank).padStart(2, '0')}
                </span>
                <span
                  className="bc-mono flex h-9 w-9 flex-shrink-0 items-center justify-center text-[11px] font-bold"
                  style={{ background: provider.color, color: contrastText(provider.color) }}
                >
                  {provider.badge}
                </span>
                <div className="min-w-0">
                  <a
                    href={`#${provider.id}`}
                    className="text-[15px] font-bold transition-colors hover:text-[rgb(var(--color-primary))]"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {provider.name}
                  </a>
                  <p
                    className="mt-0.5 text-xs leading-snug"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {entry.bestFor}
                  </p>
                </div>
              </div>

              {/* Фиксированная ширина правой колонки: в разборе это табло стоит в
                  узкой колонке рядом с сайдбаром, и колонка по содержимому съедала
                  бы ширину у названия и строки «кому подходит». */}
              <div className="flex flex-shrink-0 flex-col gap-2 lg:w-56 lg:items-end">
                <ScoreMeter value={score} size="sm" />
                <span
                  className="bc-mono text-[11px] leading-snug lg:text-right"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {price}
                </span>
                <AffiliateLink
                  to={href}
                  variant={isTop ? 'primary' : 'ghost'}
                  tracked={provider.tracked !== false}
                >
                  {isTop ? 'Перейти →' : 'Открыть'}
                </AffiliateLink>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
