/**
 * Оценка сервиса как сегментная шкала, а не как звёзды.
 *
 * Звёзды на этом сайте не используются намеренно: они читаются как отзывы
 * пользователей, которых мы не собираем, и плохо показывают разницу между 4.2 и
 * 4.5. Десять сегментов дают полбалла на деление — ровно ту точность, с которой
 * мы и выставляем оценки.
 */
const SEGMENTS = 10

export default function ScoreMeter({
  value,
  size = 'md',
  showValue = true,
  label,
}: {
  /** Балл 0–5. */
  value: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  /** Подпись слева от шкалы (используется в разбивке по критериям). */
  label?: string
}) {
  const filled = Math.round(Math.min(5, Math.max(0, value)) * 2)
  const dims = {
    sm: { h: 'h-1.5', w: 'w-1.5', text: 'text-[13px]' },
    md: { h: 'h-2.5', w: 'w-2', text: 'text-[15px]' },
    lg: { h: 'h-4', w: 'w-2.5', text: 'text-lg' },
  }[size]

  return (
    <div className="flex items-center gap-3">
      {label && (
        <span className="min-w-0 flex-1 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
          {label}
        </span>
      )}
      <div
        className="flex items-center gap-[3px]"
        role="img"
        aria-label={`Оценка ${value.toFixed(1)} из 5`}
      >
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <span
            key={i}
            className={`${dims.h} ${dims.w}`}
            style={{
              background: i < filled ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg) / 0.14)',
            }}
            aria-hidden
          />
        ))}
      </div>
      {showValue && (
        <span
          className={`bc-mono ${dims.text} font-semibold tabular-nums`}
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {value.toFixed(1)}
        </span>
      )}
    </div>
  )
}
