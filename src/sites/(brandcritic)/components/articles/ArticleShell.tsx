import Link from 'next/link'
import type { ReactNode } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'

import type { ArticleMeta } from '../../data/guides/types'
import { ldJson } from '../../data/guides/ldJson'
import { relatedArticles } from '../../data/articles'
import { authors } from '../../data/providers'
import { getVertical } from '../../data/verticals'
import Advisory from '../Advisory'

import AuthorCard from './AuthorCard'
import ReadingProgress from './ReadingProgress'
import Toc from './Toc'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Общая обвязка каждого разбора: полоса прогресса, первый экран с хлебными
 * крошками, H1, лидом и подписью автора, две колонки тела (текст + липкий
 * сайдбар с оглавлением и автором) и подвал со ссылками на другие разборы.
 *
 * Две колонки — сознательный выбор: в разборе оглавление нужно постоянно, а не
 * один раз в начале, и на длинной странице липкий сайдбар держит навигацию под
 * рукой. Секции тела передаются детьми из страницы конкретного разбора.
 *
 * Автор, рубрика и список «ещё разборы» берутся из вертикали разбора, поэтому
 * новой странице достаточно передать `meta`, `lead` и `toc`. Хлебные крошки
 * намеренно не ведут на /articles: это лендинги платного трафика, и индекс не
 * часть просматриваемого сайта.
 */
export default function ArticleShell({
  meta,
  lead,
  toc,
  children,
  kicker,
  advisory,
  related,
  relatedTitle = 'Другие разборы',
}: {
  meta: ArticleMeta
  lead: string
  /** Пункты оглавления для липкого сайдбара. */
  toc: { id: string; label: string }[]
  children: ReactNode
  /** Рубрика над H1. По умолчанию — рубрика вертикали. */
  kicker?: string
  /** Обязательная оговорка категории, например 18+ для алкоголя. */
  advisory?: string
  /** Карточки перелинковки. По умолчанию — разборы той же вертикали. */
  related?: ArticleMeta[]
  relatedTitle?: string
}) {
  const vertical = getVertical(meta.vertical)
  const author = authors[meta.vertical]
  const others = related ?? relatedArticles(meta.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.metaDescription,
    datePublished: meta.updated,
    dateModified: meta.updated,
    inLanguage: 'ru-RU',
    author: { '@type': 'Person', name: author.name, jobTitle: author.role },
    publisher: { '@type': 'Organization', name: activeSiteConfig.brand.name },
  }

  return (
    <main>
      <ReadingProgress />

      {/* Первый экран */}
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <nav
            className="bc-mono text-[11px]"
            style={{ color: 'rgb(var(--color-muted))' }}
            aria-label="Хлебные крошки"
          >
            <Link
              href="/"
              className="hover:text-[rgb(var(--color-primary))]"
              style={{ color: 'inherit' }}
            >
              Главная
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span>{vertical.name}</span>
            <span className="mx-2 opacity-50">/</span>
            <span style={{ color: 'rgb(var(--color-fg))' }}>{meta.shortTopic}</span>
          </nav>

          <div className="mt-7 max-w-3xl">
            <span className="bc-kicker">{kicker ?? vertical.kicker}</span>
            <h1
              className="mt-5 text-[30px] leading-[1.12] font-bold sm:text-[42px]"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {meta.title}
            </h1>
            <p
              className="mt-5 text-lg leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {lead}
            </p>

            <div
              className="bc-mono mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-5 text-[11px] tracking-[0.06em] uppercase"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
            >
              <span style={{ color: 'rgb(var(--color-fg))' }}>{author.name}</span>
              <span>обновлено {formatDate(meta.updated)}</span>
              <span>чтение {meta.readingTime}</span>
            </div>

            {advisory && (
              <div className="mt-5">
                <Advisory text={advisory} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Тело: текст + липкий сайдбар */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-12">
        <div className="min-w-0 space-y-12">{children}</div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-5">
            <Toc items={toc} />
            <AuthorCard vertical={meta.vertical} compact />
          </div>
        </aside>
      </div>

      {/* Перелинковка */}
      {others.length > 0 && (
        <section
          className="border-t"
          style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
        >
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {relatedTitle}
            </h2>
            <div
              className="mt-6 grid gap-px sm:grid-cols-2"
              style={{ background: 'rgb(var(--color-rule))' }}
            >
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.slug}`}
                  className="group block p-5 transition-colors"
                  style={{ background: 'rgb(var(--color-bg))' }}
                >
                  <p
                    className="bc-mono text-[10px] tracking-[0.16em] uppercase"
                    style={{ color: 'rgb(var(--color-primary))' }}
                  >
                    {a.shortTopic}
                  </p>
                  <p
                    className="mt-2 font-bold transition-colors group-hover:text-[rgb(var(--color-primary))]"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {a.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(jsonLd) }} />
    </main>
  )
}
