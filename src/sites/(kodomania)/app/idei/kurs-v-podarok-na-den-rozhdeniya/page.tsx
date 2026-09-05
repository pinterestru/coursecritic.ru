import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kurs-v-podarok-na-den-rozhdeniya')!

export const metadata: Metadata = guideMetadata(guide)

// Confetti dots: [top%, left%, color-var, size]
const confetti: [string, string, string, number][] = [
  ['12%', '8%', 'var(--art-grad-1)', 10],
  ['24%', '88%', 'var(--art-grad-2)', 14],
  ['64%', '5%', 'var(--art-grad-2)', 8],
  ['74%', '92%', 'var(--art-grad-1)', 12],
  ['6%', '68%', 'rgb(var(--art-accent-2))', 8],
  ['82%', '30%', 'rgb(var(--art-accent-2))', 10],
]

/** Playful centred gift-box hero with confetti. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] border px-6 py-14 text-center sm:py-16"
        style={{ background: 'rgb(var(--art-tint))', borderColor: 'rgb(var(--art-accent) / 0.15)' }}
      >
        {confetti.map(([top, left, color, size], i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{ top, left, width: size, height: size, background: color, opacity: 0.7 }}
            aria-hidden
          />
        ))}
        <div className="relative">
          <span
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] text-5xl shadow-[0_20px_40px_-16px_rgb(224_57_139_/_0.6)]"
            style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
            aria-hidden
          >
            🎂
          </span>
          <span
            className="mt-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
          >
            🎁 Курс на день рождения
          </span>
          <h1
            className="mx-auto mt-4 max-w-2xl text-[34px] leading-[1.06] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Курс в подарок на день рождения
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {guide.lead}
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
