import type { PracticumCourse } from '../data/practicum-courses'

import AffiliateLink from './AffiliateLink'

export default function CourseCard({
  course,
  mode,
}: {
  course: PracticumCourse
  /** 'direct' uses practicum.yandex.ru URL; 'affiliate' routes through the tracker. */
  mode: 'direct' | 'affiliate'
}) {
  const directHref = `https://practicum.yandex.ru${course.practicumPath}`

  const cardInner = (
    <article
      className="flex h-full flex-col rounded-2xl border p-6 transition-shadow hover:shadow-lg"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <div className="flex items-center gap-2 text-xs">
        <span
          className="rounded-full px-2.5 py-1 font-medium"
          style={{
            background: 'rgb(var(--color-primary) / 0.12)',
            color: 'rgb(var(--color-primary))',
          }}
        >
          {course.category}
        </span>
        <span style={{ color: 'rgb(var(--color-muted))' }}>· {course.level}</span>
      </div>

      <h3 className="mt-4 text-lg leading-snug font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
        {course.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
        {course.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {course.tags.map((t) => (
          <span
            key={t}
            className="rounded-md px-2 py-0.5 text-xs"
            style={{
              background: 'rgb(var(--color-bg))',
              color: 'rgb(var(--color-muted))',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className="mt-6 flex items-baseline justify-between border-t pt-4"
        style={{ borderColor: 'rgb(var(--color-rule))' }}
      >
        <div>
          <p
            className="text-[11px] tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            От {course.price.toLocaleString('ru-RU')}&nbsp;₽/мес
          </p>
          <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            {course.duration}
          </p>
        </div>
        <span className="text-sm font-semibold" style={{ color: 'rgb(var(--color-primary))' }}>
          Подробнее →
        </span>
      </div>
    </article>
  )

  if (mode === 'affiliate') {
    return (
      <AffiliateLink deepLink={course.practicumPath} variant="card">
        {cardInner}
      </AffiliateLink>
    )
  }

  return (
    <a href={directHref} target="_blank" rel="noopener" className="block h-full">
      {cardInner}
    </a>
  )
}
