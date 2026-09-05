export default function Rating({
  value,
  count,
  compact = false,
  label = 'reviews',
}: {
  value: number
  count?: number
  compact?: boolean
  /** Noun after the count, e.g. 'reviews' or 'sources'. */
  label?: string
}) {
  const filled = Math.round(value)
  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="inline-flex" aria-label={`Rated ${value.toFixed(1)} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width={compact ? 14 : 16}
            height={compact ? 14 : 16}
            viewBox="0 0 24 24"
            fill={i < filled ? 'rgb(var(--color-accent))' : 'rgb(var(--color-rule))'}
            aria-hidden
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
        {value.toFixed(1)}
      </span>
      {typeof count === 'number' && (
        <span className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
          ({count.toLocaleString('en-US')} {count === 1 ? label.replace(/s$/, '') : label})
        </span>
      )}
    </div>
  )
}
