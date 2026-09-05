import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('podarok-na-den-rozhdeniya-podrostku')!

export const metadata: Metadata = guideMetadata(guide)

const range = [
  { k: '0 ₽', v: 'мини-курс по промокоду' },
  { k: '1–9 тыс.', v: 'вещь, которой пользуются каждый день' },
  { k: '45 315 ₽', v: 'год подготовки к экзамену' },
]

/** Hero built as a price ladder — the article's own organising idea. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
        style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
      >
        🎂 День рождения
      </span>
      <h1
        className="mt-5 max-w-2xl text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Что подарить подростку на день рождения
      </h1>
      <p
        className="mt-5 max-w-xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {guide.lead}
      </p>

      <div
        className="mt-9 overflow-hidden rounded-[28px] border"
        style={{ borderColor: 'rgb(var(--art-accent) / 0.2)' }}
      >
        {range.map((r, i) => (
          <div
            key={r.k}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 py-4"
            style={{
              background: i % 2 === 0 ? 'rgb(var(--art-tint))' : 'rgb(var(--color-surface))',
            }}
          >
            <span className="text-xl font-extrabold" style={{ color: 'rgb(var(--art-accent))' }}>
              {r.k}
            </span>
            <span className="text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              {r.v}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
