import BrandCard, { type BrandPreview } from './BrandCard'

/**
 * Recent reviews, scrolling on their own.
 *
 * One widget at every width: it runs sideways under the hero copy on small
 * screens and upward in the column beside it from `lg`. Both directions are the
 * same markup — only the axis changes, in CSS (see .rk-ticker-* in theme.css) —
 * so there is nothing here that needs JavaScript, and no second implementation
 * to keep in step with this one.
 *
 * The list is rendered twice and the track travels -50%, which puts the second
 * copy exactly where the first began. The copy is `aria-hidden`: it exists for
 * the loop, not for the reader, and without that every review would be
 * announced twice.
 */
export default function BrandTicker({ items }: { items: BrandPreview[] }) {
  if (items.length === 0) return null

  return (
    <div className="rk-ticker-mask">
      <div className="rk-ticker-track">
        {[false, true].map((isClone) => (
          <ul
            key={String(isClone)}
            className="flex shrink-0 lg:flex-col"
            aria-hidden={isClone || undefined}
            aria-label={isClone ? undefined : 'Recently reviewed brands'}
          >
            {/*
             * Spacing lives on every item, including the last, rather than in a
             * `gap` on the list. A gap would leave no space between one copy's
             * last card and the next copy's first, and the seam would show up
             * once a loop.
             */}
            {items.map((item) => (
              <li key={item.slug} className="w-[260px] shrink-0 pr-4 lg:w-full lg:pr-0 lg:pb-4">
                <BrandCard item={item} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
