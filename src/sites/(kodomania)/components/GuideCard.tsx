import Link from 'next/link'

import type { Guide } from '../data/guides'

import { pluralIdeas } from './idei/meta'

/** Card linking to a gift-idea guide article. Used on the home page and index. */
export default function GuideCard({ guide }: { guide: Guide }) {
  const [g1, g2] = guide.theme.grad
  return (
    <Link href={`/idei/${guide.slug}`} className="group block h-full no-underline">
      <article
        className="flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgb(104_54_230_/_0.35)]"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div
          className="relative flex h-32 items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
        >
          <span className="text-5xl drop-shadow-sm" aria-hidden>
            {guide.emoji}
          </span>
          <span
            className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold"
            style={{ background: 'rgb(var(--color-surface) / 0.9)', color: 'rgb(var(--color-fg))' }}
          >
            {guide.tag}
          </span>
          {guide.notice && (
            <span
              className="absolute top-3 right-3 rounded-full px-2 py-1 text-[11px] font-extrabold"
              style={{
                background: 'rgb(var(--color-fg) / 0.85)',
                color: 'rgb(var(--color-bg))',
              }}
              title="Материал с возрастным ограничением"
            >
              18+
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3
            className="kdm-display text-lg leading-snug font-extrabold"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {guide.title}
          </h3>
          <p
            className="mt-2 line-clamp-2 text-sm leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {guide.lead}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="text-xs font-semibold" style={{ color: 'rgb(var(--color-muted))' }}>
              {pluralIdeas(guide.ideas.length)}
            </span>
            <span
              className="inline-flex items-center gap-1 text-sm font-bold transition-transform group-hover:translate-x-0.5"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              Читать →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
