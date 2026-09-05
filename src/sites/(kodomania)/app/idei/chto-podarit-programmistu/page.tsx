import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-programmistu')!

export const metadata: Metadata = guideMetadata(guide)

/** Split hero: intro text beside a faux code-editor window. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            👨‍💻 Программисту
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Что подарить{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              программисту
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="overflow-hidden rounded-2xl border shadow-[0_30px_60px_-30px_rgb(104_54_230_/_0.5)]"
          style={{ background: 'rgb(var(--art-ink))', borderColor: 'rgb(255 255 255 / 0.08)' }}
          aria-hidden
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ background: 'rgb(255 255 255 / 0.04)' }}
          >
            <span className="h-3 w-3 rounded-full" style={{ background: '#FF5F56' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: '#27C93F' }} />
            <span className="ml-2 text-[11px] text-white/40">gift.ts</span>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-6">
            <code>
              <span className="text-white/35">{'// подарок, который прокачает карьеру'}</span>
              {'\n'}
              <span style={{ color: 'rgb(var(--art-accent-2))' }}>const</span>
              <span className="text-white/90"> gift </span>
              <span className="text-white/50">=</span>
              <span className="text-white/90"> {'{'}</span>
              {'\n'}
              {'  '}
              <span className="text-white/70">skill</span>
              <span className="text-white/50">:</span>
              <span style={{ color: 'var(--art-grad-2)' }}> &apos;новая профессия&apos;</span>
              <span className="text-white/50">,</span>
              {'\n'}
              {'  '}
              <span className="text-white/70">price</span>
              <span className="text-white/50">:</span>
              <span style={{ color: 'rgb(var(--art-accent-2))' }}> 0</span>
              <span className="text-white/50">,</span>
              <span className="text-white/35"> {'// старт бесплатно'}</span>
              {'\n'}
              {'  '}
              <span className="text-white/70">value</span>
              <span className="text-white/50">:</span>
              <span style={{ color: 'var(--art-grad-2)' }}> &apos;на годы&apos;</span>
              <span className="text-white/50">,</span>
              {'\n'}
              <span className="text-white/90">{'}'}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
