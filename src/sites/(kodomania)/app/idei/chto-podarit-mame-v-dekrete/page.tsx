import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-mame-v-dekrete')!

export const metadata: Metadata = guideMetadata(guide)

const slots = [
  ['Утро', 'пока малыш спит'],
  ['День', 'прогулка + аудио'],
  ['Вечер', '30 минут практики'],
]

/** Split hero with a «гибкий график» card. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🍼 Маме в декрете
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Что подарить{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              маме в декрете
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6 shadow-[0_24px_50px_-28px_rgb(244_63_94_/_0.4)]"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.15)',
          }}
          aria-hidden
        >
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Учусь, когда удобно
          </p>
          <div className="mt-4 space-y-3">
            {slots.map(([when, what]) => (
              <div key={when} className="flex items-center gap-3">
                <span
                  className="flex h-11 w-16 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold text-white"
                  style={{
                    background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))',
                  }}
                >
                  {when}
                </span>
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {what}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-5 rounded-xl px-3 py-2.5 text-center text-[12px] font-bold"
            style={{ background: 'rgb(var(--art-tint))', color: 'rgb(var(--art-accent))' }}
          >
            👶 Гибкий график · рассрочка · удалёнка
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
