import type { FaqItem } from '../../data/guides/types'
import { ldJson } from '../../data/guides/ldJson'

/** FAQ на нативном <details> — сворачивается без JS и отдаёт разметку FAQPage. */
export default function ArticleFaq({
  items,
  title = 'Частые вопросы',
}: {
  items: FaqItem[]
  title?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
  return (
    <section>
      <h2 className="text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
        {title}
      </h2>
      <div className="mt-6 border-t" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        {items.map((item, i) => (
          <details
            key={item.q}
            className="group border-b py-4"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
          >
            <summary
              className="flex cursor-pointer list-none items-start gap-3 text-base font-semibold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              <span
                className="bc-mono mt-0.5 flex-shrink-0 text-xs tabular-nums"
                style={{ color: 'rgb(var(--color-primary))' }}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">{item.q}</span>
              <span
                className="mt-0.5 inline-block h-5 w-5 flex-shrink-0 text-center leading-5 transition-transform group-open:rotate-45"
                style={{ color: 'rgb(var(--color-primary))' }}
                aria-hidden
              >
                +
              </span>
            </summary>
            <p
              className="mt-3 pl-8 text-[15px] leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(jsonLd) }} />
    </section>
  )
}
