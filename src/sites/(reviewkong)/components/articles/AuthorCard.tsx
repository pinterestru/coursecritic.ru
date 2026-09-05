import type { Author } from '../../data/guides/types'
import type { VerticalId } from '../../data/verticals'
import { authors } from '../../data/providers'

/**
 * Expert byline block — establishes who ranked these products and on what
 * basis. Pass either the vertical (byline resolved from data/providers.ts) or
 * an explicit author for a one-off guide.
 */
export default function AuthorCard({
  vertical,
  author,
}: {
  vertical?: VerticalId
  author?: Author
}) {
  const person = author ?? (vertical ? authors[vertical] : undefined)
  if (!person) return null

  return (
    <aside
      className="rounded-2xl border p-5 sm:p-6"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold"
          style={{
            background: 'rgb(var(--color-primary) / 0.15)',
            color: 'rgb(var(--color-primary))',
          }}
        >
          {person.initials}
        </span>
        <div>
          <p className="text-base font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {person.name}
          </p>
          <p className="text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            {person.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
        {person.bio}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {person.credentials.map((c, i) => (
          <li
            key={i}
            className="rounded-full border px-3 py-1 text-xs"
            style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
          >
            {c}
          </li>
        ))}
      </ul>
    </aside>
  )
}
