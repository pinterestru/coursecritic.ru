/**
 * Article framework types + the lightweight registry of ЕГЭ rating guides.
 *
 * The registry holds only what the /articles index and cross-links need (slug,
 * subject, title, blurb, intent keyword, dates). Each article's full body —
 * exam facts, the ranked schools with subject-specific verdicts, FAQ and any
 * bespoke sections — is hardcoded in its own app/articles/<slug>/page.tsx using
 * the shared components in components/articles. That keeps every article
 * individually customisable while sharing one template.
 */

import type { ArticleMeta, FactItem } from '../guides/types'

export type { ArticleMeta, FaqItem, RankEntry } from '../guides/types'

/** Historic alias — the facts strip is generic, ЕГЭ guides use it for exam structure. */
export type ExamFact = FactItem

export const articles: ArticleMeta[] = [
  {
    slug: 'kursy-ege-matematika',
    subject: 'по профильной математике',
    shortSubject: 'Профильная математика',
    title: 'Лучшие курсы подготовки к ЕГЭ по профильной математике 2027',
    metaTitle: 'Курсы ЕГЭ по математике 2027 — рейтинг 5 онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ подготовки к ЕГЭ по профильной математике: цены, форматы, преподаватели и личный разбор методиста. Сравниваем Фоксфорд, Умскул, Вебиум и Сотку.',
    intent: 'курсы ЕГЭ по математике',
    blurb:
      'Где готовиться к профилю на 80+: 19 заданий, вторая часть и преподаватели, которые сами составляют варианты.',
    updated: '2026-06-29',
    readingTime: '11 мин',
    accent: '#FF6B2C',
  },
  {
    slug: 'kursy-ege-russkiy',
    subject: 'по русскому языку',
    shortSubject: 'Русский язык',
    title: 'Лучшие курсы подготовки к ЕГЭ по русскому языку 2027',
    metaTitle: 'Курсы ЕГЭ по русскому языку 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ подготовки к ЕГЭ по русскому языку: сочинение, 27 заданий, цены и проверка по критериям ФИПИ. Личный разбор методиста EDсайдер.',
    intent: 'курсы ЕГЭ по русскому языку',
    blurb:
      'Сочинение и 27 заданий: где научат писать на максимум и проверят сочинение по критериям ФИПИ.',
    updated: '2026-06-29',
    readingTime: '10 мин',
    accent: '#D1492A',
  },
  {
    slug: 'kursy-ege-obshchestvoznanie',
    subject: 'по обществознанию',
    shortSubject: 'Обществознание',
    title: 'Лучшие курсы подготовки к ЕГЭ по обществознанию 2027',
    metaTitle: 'Курсы ЕГЭ по обществознанию 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ для ЕГЭ по обществознанию: пять блоков теории, вторая часть, план и эссе. Цены, форматы и личный разбор методиста.',
    intent: 'курсы ЕГЭ по обществознанию',
    blurb:
      'Пять блоков теории и капризная вторая часть: где не утонуть в определениях и набрать на план и мини-сочинение.',
    updated: '2026-06-29',
    readingTime: '10 мин',
    accent: '#2E784C',
  },
  {
    slug: 'kursy-ege-fizika',
    subject: 'по физике',
    shortSubject: 'Физика',
    title: 'Лучшие курсы подготовки к ЕГЭ по физике 2027',
    metaTitle: 'Курсы ЕГЭ по физике 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ подготовки к ЕГЭ по физике: задачи второй части, эксперимент и расчёты. Цены, преподаватели и личный разбор методиста EDсайдер.',
    intent: 'курсы ЕГЭ по физике',
    blurb:
      'Механика, электродинамика и задачи второй части: где научат решать, а не заучивать формулы.',
    updated: '2026-06-29',
    readingTime: '10 мин',
    accent: '#1E63D6',
  },
  {
    slug: 'kursy-ege-informatika',
    subject: 'по информатике',
    shortSubject: 'Информатика',
    title: 'Лучшие курсы подготовки к ЕГЭ по информатике 2027',
    metaTitle: 'Курсы ЕГЭ по информатике 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ для ЕГЭ по информатике: задания на Python, КЕГЭ за компьютером, 27 задача. Цены, форматы и личный разбор методиста.',
    intent: 'курсы ЕГЭ по информатике',
    blurb:
      'КЕГЭ на компьютере и Python: где научат программировать под 25–27 задания, а не только теории.',
    updated: '2026-06-29',
    readingTime: '10 мин',
    accent: '#0E9E83',
  },
  {
    slug: 'kursy-ege-biologiya',
    subject: 'по биологии',
    shortSubject: 'Биология',
    title: 'Лучшие курсы подготовки к ЕГЭ по биологии 2027',
    metaTitle: 'Курсы ЕГЭ по биологии 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ подготовки к ЕГЭ по биологии: огромный объём теории, задачи по генетике и вторая часть. Цены и личный разбор методиста.',
    intent: 'курсы ЕГЭ по биологии',
    blurb:
      'Огромный объём теории и генетика: где структурируют материал и разберут вторую часть для медвузов.',
    updated: '2026-06-29',
    readingTime: '10 мин',
    accent: '#2E9E4B',
  },
  {
    slug: 'kursy-ege-himiya',
    subject: 'по химии',
    shortSubject: 'Химия',
    title: 'Лучшие курсы подготовки к ЕГЭ по химии 2027',
    metaTitle: 'Курсы ЕГЭ по химии 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ для ЕГЭ по химии: цепочки превращений, задачи и вторая часть на 100 баллов. Цены, форматы и личный разбор методиста.',
    intent: 'курсы ЕГЭ по химии',
    blurb:
      'Цепочки превращений и расчётные задачи: где доведут реакции до автоматизма и разберут вторую часть.',
    updated: '2026-06-29',
    readingTime: '10 мин',
    accent: '#C0392B',
  },
  {
    slug: 'kursy-ege-angliyskiy',
    subject: 'по английскому языку',
    shortSubject: 'Английский язык',
    title: 'Лучшие курсы подготовки к ЕГЭ по английскому языку 2027',
    metaTitle: 'Курсы ЕГЭ по английскому 2027 — рейтинг онлайн-школ',
    metaDescription:
      'Рейтинг онлайн-школ подготовки к ЕГЭ по английскому: письмо, говорение и аудирование. Цены, преподаватели и личный разбор методиста EDсайдер.',
    intent: 'курсы ЕГЭ по английскому языку',
    blurb:
      'Письмо, говорение и аудирование: где поставят разговорную часть и проверят эссе по критериям.',
    updated: '2026-06-29',
    readingTime: '9 мин',
    accent: '#7B61FF',
  },
]

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug)
}

/** Other articles for the "ещё подборки" cross-link block. */
export function otherArticles(slug: string, limit = 4): ArticleMeta[] {
  const idx = articles.findIndex((a) => a.slug === slug)
  return articles.filter((_, i) => i !== idx).slice(0, limit)
}
