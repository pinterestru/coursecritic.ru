import type { FaqItem } from '../data/types'

/**
 * FAQ block, rendered as open <details>.
 *
 * Open by default rather than collapsed: the answers are short, they are part
 * of what the page is for, and a crawler reading collapsed content it cannot
 * see is a worse trade than a slightly longer page.
 */
export default function Faq({
  items,
  title = 'Questions people actually ask',
}: {
  items: FaqItem[]
  title?: string
}) {
  if (items.length === 0) return null
  return (
    <section>
      <h2 className="font-display text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
        {title}
      </h2>
      <dl className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-xl border p-5"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <dt className="text-[15px] font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {item.q}
            </dt>
            <dd
              className="mt-2 text-[15px] leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
