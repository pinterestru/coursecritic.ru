import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kruizy-iz-peterburga')!

export const metadata: Metadata = guideMetadata(guide)

const north = [
  { emoji: '⛪', name: 'Валаам', days: '3–5 дней' },
  { emoji: '🪵', name: 'Кижи', days: '4–7 дней' },
  { emoji: '🏝️', name: 'Соловки', days: '8–11 дней' },
]

/** Dark northern panel — three flagship destinations, by distance. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] px-7 py-11 sm:px-12 sm:py-14"
        style={{ background: 'rgb(var(--art-ink))' }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-35"
          style={{ background: 'radial-gradient(circle, var(--art-grad-2) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="relative">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{
              background: 'rgb(var(--art-accent-2) / 0.2)',
              color: 'rgb(var(--art-accent-2))',
            }}
          >
            🌉 Из Петербурга
          </span>
          <h1 className="mt-5 max-w-2xl text-[32px] leading-[1.05] font-extrabold text-white sm:text-[46px]">
            Речные круизы из Санкт-Петербурга
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{guide.lead}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {north.map((n) => (
              <div
                key={n.name}
                className="rounded-2xl px-4 py-4"
                style={{ background: 'rgb(255 255 255 / 0.07)' }}
              >
                <div className="text-3xl" aria-hidden>
                  {n.emoji}
                </div>
                <div className="kdm-display mt-2 text-lg font-extrabold text-white">{n.name}</div>
                <div className="text-xs text-white/60">{n.days}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-white/50">
            Причалы «Обуховская оборона», пр. Обуховской обороны, 106 и 195
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
