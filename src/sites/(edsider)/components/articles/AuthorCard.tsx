import type { Author } from '../../data/guides/types'
import { author as egeAuthor } from '../../data/ege/schools'

/**
 * Expert byline block — establishes who ranked the schools and why. Defaults to
 * the ЕГЭ methodist; finance guides pass their own author.
 */
export default function AuthorCard({ author = egeAuthor }: { author?: Author }) {
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
          {author.initials}
        </span>
        <div>
          <p className="text-base font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {author.name}
          </p>
          <p className="text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
            {author.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
        {author.bio}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {author.credentials.map((c) => (
          <li
            key={c}
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
