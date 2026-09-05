import type { ExamFact } from '../../data/ege/articles'

/** Compact grid of the subject's exam structure facts (заданий, время, порог…). */
export default function ExamFacts({ title, facts }: { title?: string; facts: ExamFact[] }) {
  return (
    <section>
      {title && (
        <h2
          className="font-editorial text-2xl font-bold tracking-tight"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {title}
        </h2>
      )}
      <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {facts.map((f) => (
          <div
            key={f.label}
            className="rounded-xl border p-4"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <dt
              className="text-xs tracking-wider uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {f.label}
            </dt>
            <dd
              className="font-editorial mt-1 text-xl font-bold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
