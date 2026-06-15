import type { ReactNode } from 'react'

import Logo from '../Logo'
import CourseCard from './CourseCard'
import ReadingProgress from './ReadingProgress'
import { REVIEWS } from './reviews'
import TableOfContents from './TableOfContents'
import type { Article } from './types'

// Renders a complete data-driven "Top-N courses" listicle: progress bar,
// hero, narrative intro, interactive comparison table, ranked course cards,
// a scrollspy table of contents and an affiliate disclosure footer.
export default function CourseListicle({ article }: { article: Article }) {
  const toc = [
    { id: 'start', label: article.introHeading },
    { id: 'role', label: article.role.heading },
    { id: 'criteria', label: article.criteriaHeading },
    { id: 'compare', label: 'Сравнение курсов' },
    ...article.courses.map((c) => ({ id: `course-${c.rank}`, label: `${c.rank}. ${c.provider}` })),
    { id: 'match', label: article.matchHeading },
  ]

  // Affiliate URL per provider, so the recap can link each school too.
  const urlByProvider = new Map(article.courses.map((c) => [c.provider, c.url]))

  return (
    <>
      <ReadingProgress />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-10 flex items-center justify-between">
          <Logo linkHome />
          <time
            className="text-sm tabular-nums"
            dateTime={article.date}
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {article.dateLabel}
          </time>
        </header>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-12">
          <article className="min-w-0">
            <div className="max-w-2xl">
              <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-[44px] sm:leading-[1.1]">
                {article.title}
              </h1>
              <p className="mt-5 text-lg italic" style={{ color: 'rgb(var(--color-muted))' }}>
                {article.lede}
              </p>
              <div
                className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                <span>{article.author}</span>
                <span aria-hidden>·</span>
                <span>{article.readingTime}</span>
              </div>
            </div>

            <figure
              className="mt-8 overflow-hidden rounded-3xl"
              style={{ boxShadow: '0 1px 0 rgb(var(--color-rule)), 0 0 0 1px rgb(var(--color-rule))' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.hero.src}
                alt={article.hero.alt}
                width={1040}
                height={585}
                className="w-full"
              />
            </figure>

            <div className="max-w-2xl">
              <section id="start" className="scroll-mt-24">
                <Heading>{article.introHeading}</Heading>
                <div
                  className="space-y-5 text-[17px] leading-[1.75]"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {article.intro.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? 'first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-[52px] first-letter:leading-[0.7] first-letter:font-semibold first-letter:[color:rgb(var(--color-primary))]'
                          : undefined
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>

              <Section id="role" heading={article.role.heading}>
                {article.role.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Section>

              <Section id="criteria" heading={article.criteriaHeading}>
                {article.criteriaIntro && <p>{article.criteriaIntro}</p>}
                {article.criteria.map((c, i) => (
                  <p key={i}>
                    <strong>{c.title}</strong> {c.body}
                  </p>
                ))}
              </Section>

              <div id="compare" className="mt-14 scroll-mt-24">
                <Heading>Коротко — в одной таблице</Heading>
                <p className="-mt-2 text-[15px]" style={{ color: 'rgb(var(--color-muted))' }}>
                  Чтобы не листать туда-сюда: место в подборке, срок, цена и рейтинг на независимом
                  сервисе отзывов. Название — ссылка на разбор ниже.
                </p>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[15px]">
                    <thead>
                      <tr style={{ color: 'rgb(var(--color-muted))' }}>
                        <th className="w-8 py-2 pr-2 text-xs font-medium tracking-wide uppercase">#</th>
                        <th className="px-3 py-2 text-xs font-medium tracking-wide uppercase">Курс</th>
                        <th className="px-3 py-2 text-xs font-medium tracking-wide uppercase">Срок</th>
                        <th className="px-3 py-2 text-xs font-medium tracking-wide uppercase">Цена</th>
                        <th className="py-2 pl-3 text-xs font-medium tracking-wide uppercase">Отзывы</th>
                      </tr>
                    </thead>
                    <tbody>
                      {article.courses.map((c) => {
                        const review = REVIEWS[c.provider]
                        return (
                          <tr key={c.rank} style={{ borderTop: '1px solid rgb(var(--color-rule))' }}>
                            <td
                              className="py-2.5 pr-2 font-serif font-semibold tabular-nums"
                              style={{ color: 'rgb(var(--color-primary))' }}
                            >
                              {c.rank}
                            </td>
                            <td className="px-3 py-2.5">
                              <a
                                href={`#course-${c.rank}`}
                                className="no-underline hover:underline"
                                style={{ color: 'rgb(var(--color-fg))' }}
                              >
                                {c.provider}
                              </a>
                            </td>
                            <td
                              className="px-3 py-2.5 whitespace-nowrap"
                              style={{ color: 'rgb(var(--color-muted))' }}
                            >
                              {c.duration}
                            </td>
                            <td
                              className="px-3 py-2.5 whitespace-nowrap"
                              style={{ color: 'rgb(var(--color-muted))' }}
                            >
                              {c.price}
                            </td>
                            <td className="py-2.5 pl-3 whitespace-nowrap">
                              {review ? (
                                <a
                                  href={review.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-2"
                                  style={{ color: 'rgb(var(--color-link))' }}
                                  title={`${review.count} отзывов · ${review.source ?? 'iRecommend'}`}
                                >
                                  ★ {review.rating.toFixed(1)}
                                </a>
                              ) : (
                                <span style={{ color: 'rgb(var(--color-muted))' }}>—</span>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {article.courses.map((c) => (
                <CourseCard key={c.rank} course={c} />
              ))}

              <Section id="match" heading={article.matchHeading}>
                <ul className="space-y-2.5">
                  {article.match.map((m, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span aria-hidden className="flex-none" style={{ color: 'rgb(var(--color-primary))' }}>
                        →
                      </span>
                      <span>
                        <strong>
                          {urlByProvider.has(m.provider) ? (
                            <a
                              href={urlByProvider.get(m.provider)}
                              target="_blank"
                              rel="noopener sponsored"
                              className="underline underline-offset-2"
                              style={{ color: 'rgb(var(--color-link))' }}
                            >
                              {m.provider}
                            </a>
                          ) : (
                            m.provider
                          )}
                        </strong>{' '}
                        — {m.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>

              <div
                className="mt-10 space-y-5 text-[17px] leading-[1.75]"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {article.closing.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <footer
                className="mt-16 border-t pt-10 text-sm leading-relaxed"
                style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
              >
                <p>
                  В тексте есть партнёрские ссылки: если вы перейдёте по ним и оформите курс, я могу
                  получить небольшую комиссию. На цену для вас это не влияет, а мне помогает писать
                  такие разборы.
                </p>
                <p className="mt-4">
                  Вопросы и свой опыт пишите на{' '}
                  <a
                    href="mailto:anya@coursecritic.ru"
                    className="underline underline-offset-2"
                    style={{ color: 'rgb(var(--color-link))' }}
                  >
                    anya@coursecritic.ru
                  </a>
                  .
                </p>
                <p className="mt-6">© 2026 {article.author}</p>
              </footer>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-12">
              <p
                className="mb-3 text-xs font-semibold tracking-wide uppercase"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                Содержание
              </p>
              <TableOfContents items={toc} />
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}

function Section({ id, heading, children }: { id: string; heading: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <Heading className="mt-14">{heading}</Heading>
      <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: 'rgb(var(--color-fg))' }}>
        {children}
      </div>
    </section>
  )
}

// Section heading with a small brand-colored accent square in the left margin.
function Heading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mb-5 font-serif text-2xl leading-snug font-semibold sm:text-[28px] ${className}`}>
      <span
        aria-hidden
        className="mr-3 inline-block h-2 w-2 translate-y-[-3px] rounded-[2px]"
        style={{ background: 'rgb(var(--color-primary))' }}
      />
      {children}
    </h2>
  )
}
