import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kruiz-na-yubiley')!

export const metadata: Metadata = guideMetadata(guide)

const discounts = [
  { k: '10%', v: 'именинникам' },
  { k: '10%', v: 'годовщина от 5 лет' },
  { k: 'до 10%', v: 'пенсионерам' },
]

/** Festive gradient panel — the occasion article leads with its discount. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] px-7 py-11 sm:px-12 sm:py-14"
        style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
      >
        <div
          className="pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="relative">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide text-white uppercase"
            style={{ background: 'rgb(255 255 255 / 0.22)' }}
          >
            🎉 На круглую дату
          </span>
          <h1 className="mt-5 max-w-2xl text-[34px] leading-[1.04] font-extrabold text-white sm:text-[48px]">
            Круиз на юбилей и годовщину свадьбы
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{guide.lead}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {discounts.map((d) => (
              <div
                key={d.v}
                className="rounded-2xl px-4 py-4 backdrop-blur-sm"
                style={{ background: 'rgb(255 255 255 / 0.16)' }}
              >
                <div className="kdm-display text-2xl font-extrabold text-white">{d.k}</div>
                <div className="mt-0.5 text-xs text-white/80">{d.v}</div>
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
