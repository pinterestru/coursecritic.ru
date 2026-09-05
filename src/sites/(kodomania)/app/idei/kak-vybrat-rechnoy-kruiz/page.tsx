import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kak-vybrat-rechnoy-kruiz')!

export const metadata: Metadata = guideMetadata(guide)

const decks = [
  { name: 'Солнечная', note: 'панорама и шезлонги', width: '100%' },
  { name: 'Шлюпочная', note: 'светло и тихо · дороже', width: '92%' },
  { name: 'Средняя', note: 'оптимум · базовая цена', width: '84%' },
  { name: 'Главная', note: 'экономия · шумнее', width: '76%' },
]

/** Hero as a deck cross-section — the article is a choice between palubas. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
          >
            🧭 Как выбрать
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Как выбрать{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              речной круиз
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.18)',
          }}
        >
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Палубы теплохода
          </p>
          <div className="mt-4 space-y-2">
            {decks.map((deck, i) => (
              <div
                key={deck.name}
                className="mx-auto rounded-xl px-4 py-3"
                style={{
                  width: deck.width,
                  background: `rgb(var(--art-accent) / ${0.06 + i * 0.05})`,
                }}
              >
                <div className="text-sm font-extrabold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {deck.name}
                </div>
                <div className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                  {deck.note}
                </div>
              </div>
            ))}
          </div>
          <div
            className="mx-auto mt-2 h-3 rounded-b-[20px]"
            style={{ width: '70%', background: 'rgb(var(--art-ink) / 0.85)' }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
