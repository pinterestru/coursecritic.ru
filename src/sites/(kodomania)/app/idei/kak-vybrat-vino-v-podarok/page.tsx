import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kak-vybrat-vino-v-podarok')!

export const metadata: Metadata = guideMetadata(guide)

const shelf = [
  { emoji: '🍾', name: 'Игристое', note: 'самый универсальный вариант' },
  { emoji: '🍷', name: 'Красное сухое', note: 'к мясу и плотному столу' },
  { emoji: '🐟', name: 'Белое сухое', note: 'к рыбе и закускам' },
  { emoji: '🫖', name: 'Безалкогольное', note: 'когда человек не пьёт' },
]

/** Hero as a shelf of safe categories — the informational article. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🍷 Как выбрать
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Как выбрать{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              вино в подарок
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
            Где почти невозможно промахнуться
          </p>
          <ul className="mt-4 space-y-2">
            {shelf.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{ background: 'rgb(var(--art-tint) / 0.7)' }}
              >
                <span className="text-2xl" aria-hidden>
                  {item.emoji}
                </span>
                <span className="min-w-0">
                  <span
                    className="block text-sm font-extrabold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {item.name}
                  </span>
                  <span className="block text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                    {item.note}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
