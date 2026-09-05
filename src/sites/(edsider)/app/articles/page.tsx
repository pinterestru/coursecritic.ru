import type { Metadata } from 'next'
import Link from 'next/link'

import { articles } from '../../data/ege/articles'
import { financeArticles } from '../../data/finance/articles'
import { author } from '../../data/ege/schools'

export const metadata: Metadata = {
  title: 'Подборки курсов — рейтинги онлайн-школ по предметам и профессиям',
  description:
    'Рейтинги онлайн-школ: подготовка к ЕГЭ по восьми предметам и курсы финансовых профессий. Цены, форматы, преподаватели и личный разбор экспертов EDсайдер.',
}

export default function ArticlesIndexPage() {
  return (
    <main>
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            Подборки · Подготовка к ЕГЭ 2027
          </p>
          <h1
            className="font-editorial mt-5 max-w-3xl text-[40px] leading-[1.06] font-bold tracking-tight sm:text-[56px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Где готовиться к ЕГЭ: рейтинги онлайн-школ по предметам
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            По каждому предмету мы прошли демо-уроки школ, сверили программы с критериями ФИПИ и
            собрали честный рейтинг с ценами и личным мнением методиста. Выбирайте предмет — и
            переходите к подробному разбору.
          </p>
          <div
            className="mt-8 flex items-center gap-3 text-sm"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
              style={{
                background: 'rgb(var(--color-primary) / 0.15)',
                color: 'rgb(var(--color-primary))',
              }}
            >
              {author.initials}
            </span>
            <span>
              Автор подборок —{' '}
              <strong style={{ color: 'rgb(var(--color-fg))' }}>{author.name}</strong>,{' '}
              {author.role}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2
          className="font-editorial text-2xl font-bold tracking-tight"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          Подготовка к ЕГЭ
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex h-full flex-col rounded-2xl border-[1.5px] p-6 transition-all hover:shadow-[0_20px_40px_-20px_rgba(24,24,22,0.25)]"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: 'rgb(var(--color-surface))',
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-editorial text-[13px] font-bold tabular-nums"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase"
                  style={{ background: a.accent, color: '#fff' }}
                >
                  ЕГЭ
                </span>
              </div>
              <h3
                className="font-editorial mt-4 text-[22px] leading-[1.15] font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {a.shortSubject}
              </h3>
              <p
                className="mt-3 flex-1 text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {a.blurb}
              </p>
              <div
                className="mt-5 flex items-center justify-between border-t pt-4 text-xs"
                style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
              >
                <span>{a.readingTime} чтения</span>
                <span
                  className="font-bold tracking-wider uppercase"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  Открыть рейтинг →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <h2
          className="font-editorial mt-16 text-2xl font-bold tracking-tight"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          Финансовые профессии
        </h2>
        <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
          Курсы для взрослых: финансовый анализ, управленческий учёт и всё, что спрашивают в
          вакансиях на hh.ru. Программы разобраны построчно.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {financeArticles.map((a, i) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex h-full flex-col rounded-2xl border-[1.5px] p-6 transition-all hover:shadow-[0_20px_40px_-20px_rgba(24,24,22,0.25)]"
              style={{
                borderColor: 'rgb(var(--color-rule))',
                background: 'rgb(var(--color-surface))',
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-editorial text-[13px] font-bold tabular-nums"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase"
                  style={{ background: a.accent, color: '#fff' }}
                >
                  Финансы
                </span>
              </div>
              <h3
                className="font-editorial mt-4 text-[22px] leading-[1.15] font-bold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {a.shortSubject}
              </h3>
              <p
                className="mt-3 flex-1 text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {a.blurb}
              </p>
              <div
                className="mt-5 flex items-center justify-between border-t pt-4 text-xs"
                style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
              >
                <span>{a.readingTime} чтения</span>
                <span
                  className="font-bold tracking-wider uppercase"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  Открыть рейтинг →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
