import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('podarok-dlya-smeny-professii')!

export const metadata: Metadata = guideMetadata(guide)

/** Big-type hero with a «было → стало» transformation strip. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
        style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
      >
        🔄 Смена профессии
      </span>
      <h1
        className="mt-5 max-w-3xl text-[38px] leading-[1.02] font-extrabold sm:text-[58px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Подарок тому, кто хочет{' '}
        <span
          className="inline decoration-[6px] underline-offset-[6px]"
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: 'rgb(var(--art-accent-2))',
          }}
        >
          сменить профессию
        </span>
      </h1>
      <p
        className="mt-6 max-w-xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {guide.lead}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span
          className="rounded-2xl border px-4 py-2.5 text-sm font-semibold line-through"
          style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
        >
          нелюбимая работа
        </span>
        <span
          className="kdm-display text-xl font-extrabold"
          style={{ color: 'rgb(var(--art-accent))' }}
          aria-hidden
        >
          →
        </span>
        <span
          className="rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white"
          style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
        >
          новая профессия в IT
        </span>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
