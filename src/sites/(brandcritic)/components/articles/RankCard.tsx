import Link from 'next/link'

import type { RankEntry } from '../../data/guides/types'
import { providers as allProviders } from '../../data/providers'
import AffiliateLink from '../AffiliateLink'
import Advisory from '../Advisory'
import ScoreMeter from '../ScoreMeter'
import { contrastText } from '../contrastText'

/**
 * Полный блок сервиса внутри разбора. Первое место получает оформление
 * редакционного выбора. Карточка сводит общие данные бренда из
 * data/providers.ts с `RankEntry` этого конкретного разбора (вердикт, цена,
 * ссылка, вынесенный факт) — поэтому один и тот же бренд может появляться в
 * нескольких разборах с разным аргументом.
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
  // Балл по оси разбора, если он задан; иначе общий редакционный балл.
  const score = entry.score ?? provider.score
  const isAxisScore = typeof entry.score === 'number'

  return (
    <article
      id={provider.id}
      className="scroll-mt-28 border"
      style={{
        borderColor: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      {isTop && (
        <div
          className="bc-mono px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase"
          style={{ background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }}
        >
          выбор редакции
        </div>
      )}

      <div className="p-5 sm:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-4">
            <span
              className="bc-mono flex h-12 w-12 flex-shrink-0 items-center justify-center text-lg font-bold tabular-nums"
              style={{
                background: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-raised))',
                color: isTop ? 'rgb(var(--color-primary-fg))' : 'rgb(var(--color-fg))',
              }}
              aria-label={`Место ${rank}`}
            >
              {String(rank).padStart(2, '0')}
            </span>
            <span
              className="bc-mono flex h-12 w-12 flex-shrink-0 items-center justify-center text-sm font-bold"
              style={{ background: provider.color, color: contrastText(provider.color) }}
            >
              {provider.badge}
            </span>
            <div>
              <h3
                className="text-xl leading-tight font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {provider.name}
              </h3>
              <div className="mt-1.5">
                <ScoreMeter value={score} size="sm" />
              </div>
              {isAxisScore && (
                <p
                  className="bc-mono mt-1 text-[10px] tracking-[0.1em] uppercase"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  балл по теме разбора
                </p>
              )}
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-[15px] font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {price}
            </p>
            <p className="bc-mono mt-1 text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
              {format}
            </p>
          </div>
        </div>

        <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
          {tagline}
        </p>

        {/* Вердикт редактора именно в этом разборе */}
        <blockquote
          className="mt-5 border-l-2 py-1 pl-4 text-[15px] leading-relaxed"
          style={{
            borderColor: 'rgb(var(--color-primary))',
            color: 'rgb(var(--color-fg) / 0.85)',
          }}
        >
          {entry.verdict}
        </blockquote>

        {/* Разбивка общего балла по критериям. В разборах с собственной осью
            оценки её не показываем: она объясняет общий балл сервиса и к оси
            этого разбора отношения не имеет — рядом они противоречили бы друг
            другу. Общий балл там доступен на странице бренда. */}
        {!isAxisScore && (
          <div
            className="mt-6 border p-4"
            style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-bg))' }}
          >
            <p
              className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              из чего сложился балл
            </p>
            <div className="mt-3 space-y-2">
              {provider.scorecard.map((line) => (
                <ScoreMeter key={line.label} label={line.label} value={line.value} size="sm" />
              ))}
            </div>
          </div>
        )}

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm"
              style={{ color: 'rgb(var(--color-fg) / 0.86)' }}
            >
              <span className="bc-mono" style={{ color: 'rgb(var(--color-primary))' }} aria-hidden>
                ▸
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {entry.spotlight && (
          <div
            className="mt-6 border-l-2 py-3 pl-4"
            style={{
              borderColor: 'rgb(var(--color-accent))',
              background: 'rgb(var(--color-accent) / 0.06)',
            }}
          >
            <p
              className="bc-mono text-[10px] font-bold tracking-[0.16em] uppercase"
              style={{ color: 'rgb(var(--color-accent))' }}
            >
              {entry.spotlight.label}
            </p>
            <p className="mt-1.5 text-sm" style={{ color: 'rgb(var(--color-fg) / 0.86)' }}>
              {entry.spotlight.body}
            </p>
          </div>
        )}

        {/* Плюсы и минусы */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <p
              className="bc-mono text-[10px] font-bold tracking-[0.16em] uppercase"
              style={{ color: 'rgb(var(--color-success))' }}
            >
              что работает
            </p>
            <ul
              className="mt-2.5 space-y-2 text-sm"
              style={{ color: 'rgb(var(--color-fg) / 0.86)' }}
            >
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
              className="bc-mono text-[10px] font-bold tracking-[0.16em] uppercase"
              style={{ color: 'rgb(var(--color-danger))' }}
            >
              что нет
            </p>
            <ul
              className="mt-2.5 space-y-2 text-sm"
              style={{ color: 'rgb(var(--color-fg) / 0.86)' }}
            >
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

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <AffiliateLink to={href} tracked={tracked}>
            {isTop && provider.topCta ? provider.topCta : `На сайт ${provider.siteLabel} →`}
          </AffiliateLink>
          {provider.brandSlug && (
            <Link
              href={`/brands/${provider.brandSlug}`}
              className="bc-mono text-[11px] font-semibold tracking-[0.1em] uppercase underline underline-offset-4"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              полный разбор {provider.name}
            </Link>
          )}
        </div>

        <p
          className="bc-mono mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px]"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          <span>{provider.founded}</span>
          {provider.ratings.map((r) => (
            <span key={r.source}>
              {r.source}:{' '}
              <strong style={{ color: 'rgb(var(--color-fg))' }}>{r.value.toFixed(1)}</strong>
            </span>
          ))}
          {!tracked && <span>· не наш партнёр — ссылка не приносит нам ничего</span>}
        </p>

        {provider.advisory && (
          <div className="mt-4">
            <Advisory text={provider.advisory} />
          </div>
        )}
      </div>
    </article>
  )
}
