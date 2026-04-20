export default function Rating({
  value,
  count,
  compact = false,
}: {
  value: number
  count?: number
  compact?: boolean
}) {
  const filled = Math.round(value)
  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="inline-flex" aria-label={`Рейтинг ${value.toFixed(1)} из 5`}>
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
          ({count} отзыв{pluralize(count)})
        </span>
      )}
    </div>
  )
}

function pluralize(n: number): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return ''
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'а'
  return 'ов'
}
