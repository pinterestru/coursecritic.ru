import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-rukovoditelyu')!

export const metadata: Metadata = guideMetadata(guide)

const scale = [
  { name: 'Подарочная карта', note: 'нейтрально', level: 1 },
  { name: 'Безалкогольный набор', note: 'нейтрально', level: 1 },
  { name: 'Игристое в упаковке', note: 'уместно почти всегда', level: 2 },
  { name: 'Коньяк или бренди', note: 'для значимого повода', level: 3 },
  { name: 'Виски', note: 'только если знаете вкус', level: 4 },
]

/** Hero as an «уместность» scale — the audience-intent article. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
          >
            🥃 Руководителю
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Что подарить{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              руководителю
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
            borderColor: 'rgb(var(--art-accent) / 0.2)',
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-bold tracking-wide uppercase"
              style={{ color: 'rgb(var(--art-accent))' }}
            >
              Шкала уместности
            </span>
            <span className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
              личнее →
            </span>
          </div>
          <ul className="mt-4 space-y-2.5">
            {scale.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                    {item.name}
                  </span>
                  <span className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
                    {item.note}
                  </span>
                </div>
                <div
                  className="mt-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgb(var(--art-accent) / 0.12)' }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${item.level * 25}%`,
                      background: 'rgb(var(--art-accent))',
                    }}
                  />
                </div>
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
