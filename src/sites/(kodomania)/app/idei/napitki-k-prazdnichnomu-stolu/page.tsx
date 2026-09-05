import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('napitki-k-prazdnichnomu-stolu')!

export const metadata: Metadata = guideMetadata(guide)

const glasses = [
  { emoji: '🍾', name: 'Игристое', temp: '6–8 °C', when: 'на старт' },
  { emoji: '🥂', name: 'Белое', temp: '8–10 °C', when: 'к закускам' },
  { emoji: '🍷', name: 'Красное', temp: '16–18 °C', when: 'к горячему' },
  { emoji: '🫖', name: 'Безалкогольное', temp: 'охлаждённое', when: 'для всех' },
]

/** Hero as a table setting — the occasion article is about the whole table. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
          >
            🎄 К празднику
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Напитки к{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              праздничному столу
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-5"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.18)',
          }}
        >
          <p
            className="px-1 text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Порядок и температура подачи
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {glasses.map((g) => (
              <div
                key={g.name}
                className="rounded-2xl px-4 py-4 text-center"
                style={{ background: 'rgb(var(--art-tint) / 0.7)' }}
              >
                <div className="text-3xl" aria-hidden>
                  {g.emoji}
                </div>
                <div
                  className="mt-2 text-sm font-extrabold"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {g.name}
                </div>
                <div
                  className="kdm-display text-xs font-bold tabular-nums"
                  style={{ color: 'rgb(var(--art-accent))' }}
                >
                  {g.temp}
                </div>
                <div className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
                  {g.when}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
