import Link from 'next/link'

import type { Provider } from '../data/guides/types'

import AffiliateLink from './AffiliateLink'
import ScoreMeter from './ScoreMeter'
import { contrastText } from './contrastText'

/**
 * Горизонтальная строка бренда — основной элемент главной и индекса /brands.
 *
 * Не карточка в сетке, а строка сводной таблицы: так соседние бренды стоят
 * друг под другом одними и теми же полями, и сравнение читается по вертикали, а
 * не прыжками по плитке. Если у бренда есть свой разбор, вся строка ведёт
 * внутрь сайта; если нет — наружу, через размеченный редирект.
 */
export default function BrandRow({ provider, rank }: { provider: Provider; rank?: number }) {
  const hasPage = !!provider.brandSlug

  return (
    <article
      className="group relative border transition-colors hover:border-[rgb(var(--color-primary))]"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
        {/* Позиция + плитка бренда */}
        <div className="flex items-center gap-4">
          {typeof rank === 'number' && (
            <span
              className="bc-mono text-[26px] leading-none font-bold tabular-nums"
              style={{ color: 'rgb(var(--color-fg) / 0.55)' }}
              aria-hidden
            >
              {String(rank).padStart(2, '0')}
            </span>
          )}
          <span
            className="bc-mono flex h-12 w-12 flex-shrink-0 items-center justify-center text-sm font-bold"
            style={{ background: provider.color, color: contrastText(provider.color) }}
          >
            {provider.badge}
          </span>
        </div>

        {/* Название, позиционирование, факты */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {hasPage ? (
                <Link
                  href={`/brands/${provider.brandSlug}`}
                  className="transition-colors group-hover:text-[rgb(var(--color-primary))]"
                  style={{ color: 'inherit' }}
                >
                  {provider.name}
                </Link>
              ) : (
                provider.name
              )}
            </h3>
            {provider.tracked === false && (
              <span
                className="bc-mono border px-1.5 py-0.5 text-[9px] tracking-[0.12em] uppercase"
                style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
              >
                не партнёр
              </span>
            )}
          </div>
          <p className="mt-1.5 text-sm leading-snug" style={{ color: 'rgb(var(--color-muted))' }}>
            {provider.tagline}
          </p>
          <dl
            className="bc-mono mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px]"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            <div className="flex gap-1.5">
              <dt className="opacity-70">масштаб:</dt>
              <dd style={{ color: 'rgb(var(--color-fg))' }}>{provider.reach}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="opacity-70">цена:</dt>
              <dd style={{ color: 'rgb(var(--color-fg))' }}>{provider.priceNote}</dd>
            </div>
          </dl>
        </div>

        {/* Оценка и действие */}
        <div className="flex flex-col gap-3 lg:w-56 lg:items-end">
          <ScoreMeter value={provider.score} size="sm" />
          {hasPage ? (
            <Link
              href={`/brands/${provider.brandSlug}`}
              className="bc-mono border px-4 py-2 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors group-hover:border-[rgb(var(--color-primary))] group-hover:text-[rgb(var(--color-primary))]"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
            >
              Читать разбор →
            </Link>
          ) : (
            <AffiliateLink
              to={provider.domain}
              tracked={provider.tracked !== false}
              variant="ghost"
            >
              На сайт →
            </AffiliateLink>
          )}
        </div>
      </div>
    </article>
  )
}
