import type { FaqItem } from '../../data/guides/types'

/**
 * Native <details> FAQ — collapsible, no client JS.
 *
 * Deliberately emits NO FAQPage JSON-LD. Since September 2023 Google has limited
 * FAQ rich results to well-known authoritative government and health sites, so
 * the markup could never produce a rich result here — it was ~1.5 KB of dead
 * weight on every brand page and guide, all of which carry paid traffic.
 */
export default function ArticleFaq({
  items,
  title = 'Frequently asked',
}: {
  items: FaqItem[]
  title?: string
}) {
  return (
    <section>
      <h2
        className="font-editorial text-2xl font-bold tracking-tight"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {title}
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
    </section>
  )
}
