/** Оглавление на якорях. Обычные ссылки, без клиентского JS. */
export default function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      className="border p-5"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      aria-label="Содержание"
    >
      <p
        className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
        style={{ color: 'rgb(var(--color-primary))' }}
      >
        содержание
      </p>
      <ol className="mt-4 space-y-2.5 text-sm">
        {items.map((it, i) => (
          <li key={it.id} className="flex gap-2.5">
            <span className="bc-mono tabular-nums" style={{ color: 'rgb(var(--color-fg) / 0.55)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <a
              href={`#${it.id}`}
              className="leading-snug transition-colors hover:text-[rgb(var(--color-primary))]"
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
