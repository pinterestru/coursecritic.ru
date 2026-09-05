import type { Course } from '../data/home'
import { schools, resolveHref } from '../data/home'

import AffiliateLink from './AffiliateLink'

export default function CourseCard({
  course,
  mode,
}: {
  course: Course
  mode: 'home' | 'affiliate'
}) {
  const school = schools[course.schoolId]

  const directUrl = course.practicumPath
    ? `https://practicum.yandex.ru${course.practicumPath}`
    : (course.externalUrl ?? school.url)
  // Affiliate schools route through /click/<domain>/<path>; others link direct.
  const directHref = resolveHref(directUrl, course.schoolId)

  const inner = (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border-[1.5px] p-6 transition-all hover:shadow-[0_20px_40px_-20px_rgba(24,24,22,0.25)]"
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
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded text-[10px] font-extrabold tracking-tight"
            style={{ background: school.color, color: '#181816' }}
          >
            {school.short}
          </span>
          <div className="min-w-0">
            <p
              className="truncate text-[10px] font-bold tracking-[0.08em] uppercase"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {school.name}
            </p>
            <p className="truncate text-[10px]" style={{ color: 'rgb(var(--color-muted))' }}>
              {course.category}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="rgb(var(--color-accent))"
            aria-hidden
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="font-semibold tabular-nums" style={{ color: 'rgb(var(--color-fg))' }}>
            {course.rating.toFixed(1)}
          </span>
          <span className="tabular-nums" style={{ color: 'rgb(var(--color-muted))' }}>
            ({course.reviews})
          </span>
        </div>
      </div>

      <h3
        className="font-editorial mt-5 text-[22px] leading-[1.15] font-bold"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {course.title}
      </h3>

      <p
        className="mt-3 line-clamp-2 text-sm leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {course.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1">
        {course.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-sm px-1.5 py-0.5 text-[10px] font-medium tracking-wide"
            style={{
              background: 'rgb(var(--color-bg))',
              color: 'rgb(var(--color-muted))',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <div
          className="flex items-end justify-between border-t pt-4"
          style={{ borderColor: 'rgb(var(--color-rule))' }}
        >
          <div>
            <p
              className="font-editorial text-lg leading-none font-bold tabular-nums"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              от {course.price.toLocaleString('ru-RU')}&nbsp;₽
            </p>
            <p
              className="mt-1 text-[11px] tracking-wide"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {course.duration} · {course.level}
            </p>
          </div>
          <span
            className="text-xs font-bold tracking-wider whitespace-nowrap uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Подробнее →
          </span>
        </div>
      </div>
    </article>
  )

  if (mode === 'affiliate' && course.practicumPath) {
    return (
      <AffiliateLink deepLink={course.practicumPath} variant="card">
        {inner}
      </AffiliateLink>
    )
  }

  return (
    <a
      href={directHref}
      target="_blank"
      rel={school.affiliate ? 'noopener sponsored' : 'noopener'}
      className="block h-full"
    >
      {inner}
    </a>
  )
}
