/**
 * Все разборы сайта, слитые по вертикалям.
 *
 * ⚠️ Разборы под /articles — лендинги прямого открытия для платного трафика.
 * На них намеренно НЕ ведут ссылки из шапки, футера и с главной: просматриваемый
 * сайт — это главная, страницы /brands и юридические страницы. Перелинковка
 * между разборами разрешена и делается через `relatedArticles()` ниже.
 */
import type { ArticleMeta } from './guides/types'
import type { VerticalId } from './verticals'
import { cruiseArticles } from './cruise/articles'
import { educationArticles } from './education/articles'
import { retailArticles } from './retail/articles'

export const articles: ArticleMeta[] = [...retailArticles, ...cruiseArticles, ...educationArticles]

/**
 * Найти разбор по слагу. Бросает исключение вместо undefined: каждое место
 * вызова — страница, которая без него не отрисуется, и опечатка должна ронять
 * сборку, а не выдавать пустой заголовок.
 */
export function getArticle(slug: string): ArticleMeta {
  const article = articles.find((a) => a.slug === slug)
  if (!article) throw new Error(`Неизвестный слаг разбора: ${slug}`)
  return article
}

export function articlesByVertical(vertical: VerticalId): ArticleMeta[] {
  return articles.filter((a) => a.vertical === vertical)
}

/**
 * Куда вести из подвала разбора: сначала другие разборы той же вертикали,
 * затем добор из остальных, если своих один-два.
 */
export function relatedArticles(slug: string, limit = 4): ArticleMeta[] {
  const current = getArticle(slug)
  const sameVertical = articles.filter((a) => a.slug !== slug && a.vertical === current.vertical)
  const otherVerticals = articles.filter((a) => a.slug !== slug && a.vertical !== current.vertical)
  return [...sameVertical, ...otherVerticals].slice(0, limit)
}
