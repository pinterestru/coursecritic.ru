import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kruizy-iz-moskvy')!

export const metadata: Metadata = guideMetadata(guide)

const berths = [
  { name: 'Северный речной вокзал', addr: 'Ленинградское ш., 51', note: 'причалы 2, 3, 4, 14, 16' },
  { name: 'Южный речной вокзал', addr: 'Пр-т Андропова, 11к2', note: 'метро «Коломенская»' },
]

/** Hero as a berth board — the geo article answers «откуда отправляются». */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🏛️ Из Москвы
          </span>
          <h1
            className="mt-5 text-[32px] leading-[1.06] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Речные круизы{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              из Москвы
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
            Откуда отправляются
          </p>
          <ul className="mt-4 space-y-3">
            {berths.map((b) => (
              <li
                key={b.name}
                className="rounded-2xl px-4 py-3"
                style={{ background: 'rgb(var(--art-tint) / 0.7)' }}
              >
                <div className="text-sm font-extrabold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {b.name}
                </div>
                <div className="mt-0.5 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                  {b.addr}
                </div>
                <div
                  className="mt-1 text-[11px] font-semibold"
                  style={{ color: 'rgb(var(--art-accent))' }}
                >
                  {b.note}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
            Навигация — с конца апреля по октябрь
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
