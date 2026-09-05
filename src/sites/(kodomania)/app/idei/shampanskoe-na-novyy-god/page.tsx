import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('shampanskoe-na-novyy-god')!

export const metadata: Metadata = guideMetadata(guide)

const sweetness = [
  { name: 'Брют', note: 'сухое · под весь стол', w: '20%' },
  { name: 'Полусухое', note: 'компромисс', w: '45%' },
  { name: 'Полусладкое', note: 'к десерту', w: '80%' },
]

/** Hero as a sweetness scale plus the bottles-per-guest answer. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.14)', color: 'rgb(var(--art-ink))' }}
          >
            🎆 На Новый год
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Какое{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              шампанское
            </span>{' '}
            купить на Новый год
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.25)',
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-bold tracking-wide uppercase"
              style={{ color: 'rgb(var(--art-ink))' }}
            >
              Шкала сладости
            </span>
            <span className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
              слаще →
            </span>
          </div>
          <ul className="mt-4 space-y-2.5">
            {sweetness.map((s) => (
              <li key={s.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                    {s.name}
                  </span>
                  <span className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
                    {s.note}
                  </span>
                </div>
                <div
                  className="mt-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgb(var(--art-accent) / 0.15)' }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{ width: s.w, background: 'rgb(var(--art-accent))' }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p
            className="mt-5 rounded-2xl px-4 py-3 text-xs font-semibold"
            style={{ background: 'rgb(var(--art-tint))', color: 'rgb(var(--art-ink))' }}
          >
            Плюс безалкогольное — для тех, кто за рулём. На 8 гостей: 3–4 бутылки игристого и 1–2
            безалкогольного.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
