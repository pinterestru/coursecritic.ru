import type { FaqItem } from '../../data/ege/articles'
import { ldJson } from '../../data/guides/ldJson'

/** Native <details> FAQ — collapsible, no client JS, renders a FAQPage schema. */
export default function ArticleFaq({ items }: { items: FaqItem[] }) {
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
      <h2
        className="font-editorial text-2xl font-bold tracking-tight"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Частые вопросы
      </h2>
      <div className="mt-6 divide-y" style={{ borderColor: 'rgb(var(--color-rule))' }}>
        {items.map((item) => (
          <details
            key={item.q}
            className="group py-5"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
          >
            <summary
              className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              <span className="font-editorial">{item.q}</span>
              <span
                className="mt-0.5 inline-block h-5 w-5 flex-shrink-0 text-center leading-5 transition-transform group-open:rotate-45"
                style={{ color: 'rgb(var(--color-primary))' }}
                aria-hidden
              >
                +
              </span>
            </summary>
            <p
              className="mt-3 text-[15px] leading-relaxed"
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
