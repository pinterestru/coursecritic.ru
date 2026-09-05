/**
 * Registry of the /articles rating guides on financial professions.
 *
 * Same contract as ../ege/articles.ts: this holds only what the /articles index
 * and the cross-link block need. Each guide's body — facts strip, ranked
 * providers with their verdicts, FAQ — is hardcoded in its own
 * app/articles/<slug>/page.tsx using the shared components.
 */
import type { ArticleMeta } from '../guides/types'

export const financeArticles: ArticleMeta[] = [
  {
    slug: 'kursy-finansovogo-analitika',
    subject: 'финансового аналитика',
    shortSubject: 'Финансовый аналитик',
    title: 'Лучшие курсы финансового аналитика 2026: рейтинг 5 онлайн-школ',
    metaTitle: 'Курсы финансового аналитика 2026 — рейтинг 5 онлайн-школ',
    metaDescription:
      'Рейтинг курсов финансового аналитика 2026: цены, сроки, преподаватели и документы. Сравниваем Eduson Academy, SF Education, Нетологию, Skillbox и РШУ.',
    intent: 'курсы финансового аналитика',
    blurb:
      'Финмодели, DCF и юнит-экономика: где за 2–6 месяцев научат читать отчётность и считать проекты.',
    updated: '2026-08-03',
    readingTime: '8 мин',
    accent: '#1E1B4B',
  },
  {
    slug: 'kursy-finansovogo-direktora',
    subject: 'финансового директора',
    shortSubject: 'Финансовый директор',
    title: 'Курсы финансового директора 2026: рейтинг 5 программ для CFO',
    metaTitle: 'Курсы финансового директора 2026 — рейтинг 5 программ',
    metaDescription:
      'Рейтинг курсов финансового директора 2026: цены, сроки, документы и преподаватели-CFO. Сравниваем Eduson Academy, SF Education, Нетологию, Skillbox и РШУ.',
    intent: 'курсы финансового директора',
    blurb:
      'От аналитика до CFO: где научат финансовой стратегии, МСФО и разговору с собственником на языке денег.',
    updated: '2026-08-03',
    readingTime: '9 мин',
    accent: '#2E4A7D',
  },
  {
    slug: 'kursy-buhgaltera-s-nulya',
    subject: 'бухгалтера с нуля',
    shortSubject: 'Бухгалтер с нуля',
    title: 'Курсы бухгалтера с нуля 2026: рейтинг 4 онлайн-школ',
    metaTitle: 'Курсы бухгалтера с нуля 2026 — рейтинг 4 онлайн-школ',
    metaDescription:
      'Рейтинг курсов бухгалтера с нуля 2026: «1С:Бухгалтерия» и «1С:ЗУП», дипломы, цены и сроки. Eduson Academy, Нетология, Skillbox и Контур.Школа.',
    intent: 'курсы бухгалтера с нуля',
    blurb:
      '1С, проводки и отчётность: где действительно дадут поработать в программе, а не только рассказать о ней.',
    updated: '2026-08-03',
    readingTime: '8 мин',
    accent: '#1B7F4B',
  },
  {
    slug: 'kursy-investicionnogo-analitika',
    subject: 'инвестиционного аналитика',
    shortSubject: 'Инвестиционный аналитик',
    title: 'Курсы инвестиционного аналитика 2026: рейтинг 4 программ',
    metaTitle: 'Курсы инвестиционного аналитика 2026 — рейтинг 4 программ',
    metaDescription:
      'Рейтинг курсов инвестиционного аналитика 2026: DCF и оценка бизнеса, цены, сроки и преподаватели с CFA. Eduson Academy, SF Education, Skillbox и РШУ.',
    intent: 'курсы инвестиционного аналитика',
    blurb:
      'DCF, NPV и оценка сделок: где научат считать проекты так, как этого ждут в фондах и на M&A.',
    updated: '2026-08-03',
    readingTime: '7 мин',
    accent: '#6D4AA6',
  },
  {
    slug: 'kursy-excel-dlya-finansistov',
    subject: 'Excel для финансистов',
    shortSubject: 'Excel для финансистов',
    title: 'Курсы Excel для финансистов 2026: рейтинг 4 программ',
    metaTitle: 'Курсы Excel для финансистов 2026 — рейтинг 4 программ',
    metaDescription:
      'Рейтинг курсов Excel для финансистов 2026: тренажёры, Power Query, Power BI и VBA. Цены от 1 254 ₽/мес. Eduson, SF Education, Нетология и Skillbox.',
    intent: 'курсы excel для финансистов',
    blurb:
      'Формулы, сводные и Power Query: самый дешёвый способ поднять свою ценность как финансиста.',
    updated: '2026-08-03',
    readingTime: '7 мин',
    accent: '#1D6F42',
  },
  {
    slug: 'kursy-glavnogo-buhgaltera',
    subject: 'главного бухгалтера',
    shortSubject: 'Главный бухгалтер',
    title: 'Курсы главного бухгалтера 2026: рейтинг 4 онлайн-школ',
    metaTitle: 'Курсы главного бухгалтера 2026 — рейтинг 4 онлайн-школ',
    metaDescription:
      'Рейтинг курсов главного бухгалтера 2026: налоговые риски, «1С», цены и сроки. Eduson Academy, Нетология, Skillbox и Контур.Школа — разбор методиста.',
    intent: 'курсы главного бухгалтера',
    blurb:
      'Шаг от бухгалтера к главбуху: ответственность, налоговые риски и разговор с директором на равных.',
    updated: '2026-08-03',
    readingTime: '7 мин',
    accent: '#0E7C66',
  },
  {
    slug: 'kursy-mba-finansy',
    subject: 'MBA по финансам',
    shortSubject: 'MBA: финансы',
    title: 'MBA по финансам 2026: рейтинг 4 онлайн-программ',
    metaTitle: 'MBA по финансам 2026 — рейтинг 4 онлайн-программ',
    metaDescription:
      'Рейтинг онлайн-программ MBA по финансам 2026: сроки, дипломы, аккредитации и кто вообще публикует цену. Eduson, SF Education, «Синергия», City Business School.',
    intent: 'mba финансы онлайн',
    blurb:
      'Программы для руководителей: где за MBA просят понятную цену, а где сначала зовут на разговор с менеджером.',
    updated: '2026-08-03',
    readingTime: '8 мин',
    accent: '#8A6A1F',
  },
]

export function getFinanceArticle(slug: string): ArticleMeta | undefined {
  return financeArticles.find((a) => a.slug === slug)
}

/** Other finance guides for the "ещё подборки" cross-link block. */
export function otherFinanceArticles(slug: string, limit = 4): ArticleMeta[] {
  return financeArticles.filter((a) => a.slug !== slug).slice(0, limit)
}
