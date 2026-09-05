/** Anchor-link table of contents. Plain anchors, no client JS. */
export default function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      className="rounded-2xl border p-5"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      aria-label="Contents"
    >
      <p
        className="text-xs font-bold tracking-[0.16em] uppercase"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        On this page
      </p>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((it, i) => (
          <li key={it.id} className="flex gap-2.5">
            <span className="tabular-nums" style={{ color: 'rgb(var(--color-primary))' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <a
              href={`#${it.id}`}
              className="hover:underline"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
