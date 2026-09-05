import type { GuideProvider, RankEntry } from '../../data/guides/types'
import { egeSchools } from '../../data/ege/schools'
import Rating from '../Rating'

import AffiliateButton from './AffiliateButton'

/**
 * Full per-school section in a rating guide. The #1 slot (rank === 1) gets the
 * "Выбор редакции" treatment. Each card merges shared brand data from the
 * vertical's provider registry (`schools`, ЕГЭ by default) with the article's
 * own RankEntry (verdict, price, teacher, deep-link).
 */
export default function RankCard({
  rank,
  entry,
  schools = egeSchools,
  teacherLabel = 'Преподаёт предмет',
}: {
  rank: number
  entry: RankEntry
  schools?: Record<string, GuideProvider>
  /** Heading above the star-teacher block ('Ведёт курс' for the finance guides). */
  teacherLabel?: string
}) {
  const school = schools[entry.schoolId]
  if (!school) return null

  const isTop = rank === 1
  const href = entry.deepLink ?? school.domain
  const price = entry.price ?? school.priceNote
  const pros = entry.pros ?? school.pros
  const cons = entry.cons ?? school.cons
  const format = entry.format ?? school.format
  const highlights = entry.highlights ?? school.highlights
  const tagline = entry.tagline ?? school.tagline

  return (
    <article
      id={school.id}
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
          ★ Выбор редакции EDсайдер
        </div>
      )}

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="font-editorial flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl font-bold tabular-nums"
              style={{
                background: isTop ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg))',
                color: 'rgb(var(--color-surface))',
              }}
              aria-label={`Место ${rank}`}
            >
              {rank}
            </span>
            <span
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-sm font-extrabold"
              style={{ background: school.color, color: '#fff' }}
            >
              {school.badge}
            </span>
            <div>
              <h3
                className="font-editorial text-2xl leading-tight font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {school.name}
              </h3>
              <div className="mt-1">
                <Rating value={school.score} />
              </div>
            </div>
          </div>
          <div className="text-right">
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

        {/* Author's subject verdict */}
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

        {/* Highlights */}
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {highlights.map((h) => (
            <li
              key={h}
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

        {entry.teacher && (
          <div
            className="mt-6 rounded-xl border p-4"
            style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-bg))' }}
          >
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              {teacherLabel}
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
              {entry.teacher.name}
            </p>
            <p className="mt-0.5 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              {entry.teacher.bio}
            </p>
          </div>
        )}

        {/* Pros / cons */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <p
              className="text-xs font-bold tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-success))' }}
            >
              Плюсы
            </p>
            <ul className="mt-2 space-y-1.5 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {pros.map((p) => (
                <li key={p} className="flex gap-2">
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
              Минусы
            </p>
            <ul className="mt-2 space-y-1.5 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {cons.map((c) => (
                <li key={c} className="flex gap-2">
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
          <AffiliateButton to={href} tracked={school.tracked !== false}>
            {isTop && school.topCta ? school.topCta : `Перейти на ${school.siteLabel} →`}
          </AffiliateButton>
          <span className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            {school.founded} · {school.students}
          </span>
        </div>

        <p
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {school.ratings.map((r) => (
            <span key={r.source}>
              {r.source}:{' '}
              <strong style={{ color: 'rgb(var(--color-fg))' }}>{r.value.toFixed(1)}</strong>
            </span>
          ))}
        </p>
      </div>
    </article>
  )
}
