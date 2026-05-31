import type { Review } from '../data/practicum-reviews'

import Rating from './Rating'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="rounded-2xl border p-6"
      style={{
        borderColor: 'rgb(var(--color-rule))',
        background: 'rgb(var(--color-surface))',
      }}
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
          style={{
            background: 'rgb(var(--color-primary) / 0.15)',
            color: 'rgb(var(--color-primary))',
          }}
        >
          {review.initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
              {review.author}
            </p>
            <time
              className="text-xs tabular-nums"
              dateTime={review.date}
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {formatDate(review.date)}
            </time>
          </div>
          <div
            className="mt-1 flex flex-wrap items-center gap-2 text-xs"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            <Rating value={review.rating} compact />
            <span>·</span>
            <span>{review.courseName}</span>
          </div>
        </div>
      </div>

      <h3 className="mt-4 text-base font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
        {review.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
        {review.body}
      </p>

      {(review.pros?.length || review.cons?.length) && (
        <dl className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
          {review.pros && review.pros.length > 0 && (
            <div>
              <dt className="font-semibold" style={{ color: 'rgb(var(--color-success))' }}>
                Плюсы
              </dt>
              <dd style={{ color: 'rgb(var(--color-muted))' }}>{review.pros.join(', ')}</dd>
            </div>
          )}
          {review.cons && review.cons.length > 0 && (
            <div>
              <dt className="font-semibold" style={{ color: 'rgb(var(--color-danger))' }}>
                Минусы
              </dt>
              <dd style={{ color: 'rgb(var(--color-muted))' }}>{review.cons.join(', ')}</dd>
            </div>
          )}
        </dl>
      )}
    </article>
  )
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}
