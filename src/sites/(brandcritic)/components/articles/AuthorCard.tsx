import type { Author } from '../../data/guides/types'
import type { VerticalId } from '../../data/verticals'
import { authors } from '../../data/providers'

/**
 * Блок с автором — кто составил рейтинг и на каком основании. Передайте либо
 * вертикаль (автор резолвится из data/providers.ts), либо конкретного автора
 * для разового разбора.
 */
export default function AuthorCard({
  vertical,
  author,
  compact = false,
}: {
  vertical?: VerticalId
  author?: Author
  /** Узкий вариант для колонки-сайдбара. */
  compact?: boolean
}) {
  const person = author ?? (vertical ? authors[vertical] : undefined)
  if (!person) return null

  return (
    <aside
      className="border p-5"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <p
        className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        автор разбора
      </p>
      <div className="mt-4 flex items-start gap-3.5">
        <span
          className="bc-mono flex h-11 w-11 flex-shrink-0 items-center justify-center text-sm font-bold"
          style={{
            background: 'rgb(var(--color-primary) / 0.14)',
            color: 'rgb(var(--color-primary))',
          }}
        >
          {person.initials}
        </span>
        <div className="min-w-0">
          <p className="font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {person.name}
          </p>
          <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            {person.role}
          </p>
        </div>
      </div>
      <p
        className={`mt-4 leading-relaxed ${compact ? 'text-[13px]' : 'text-sm'}`}
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {person.bio}
      </p>
      <ul className="mt-4 space-y-1.5">
        {person.credentials.map((c, i) => (
          <li
            key={i}
            className="bc-mono flex gap-2 text-[11px]"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            <span style={{ color: 'rgb(var(--color-primary))' }} aria-hidden>
              ·
            </span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
