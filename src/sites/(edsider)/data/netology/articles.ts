/**
 * Registry of the Нетология promo-code landers.
 *
 * Same contract as ../ege/articles.ts and ../finance/articles.ts. These pages
 * are opened directly from ads on «промокод нетология» and its variants, so
 * every `intent` here is a promo query, not a course one, and the guides are
 * NOT surfaced on the /articles index — they cross-link only to each other.
 */
import type { ArticleMeta } from '../guides/types'

export const netologyArticles: ArticleMeta[] = [
  {
    slug: 'netology-python-promokod',
    subject: 'Python в Нетологии',
    shortSubject: 'Python',
    title: 'Курс Python в Нетологии: сколько я заплатил на самом деле и какой промокод сработал',
    metaTitle: 'Промокод Нетология на Python — мой расчёт цены 2026',
    metaDescription:
      'Разбираю цену курса «Python-разработчик с нуля» в Нетологии: три тарифа, акция −45%, промокод на 20 000 ₽ и налоговый вычет. Полный расчёт итогового чека.',
    intent: 'промокод нетология',
    blurb:
      'Три тарифа, акция, именной код на 20 000 ₽ и вычет 13% — из чего сложился мой итоговый платёж.',
    updated: '2026-08-28',
    readingTime: '9 мин',
    accent: '#00857A',
  },
  {
    slug: 'netology-menedzher-proektov-promokod',
    subject: 'менеджера проектов в Нетологии',
    shortSubject: 'Менеджер проектов',
    title: 'Менеджер проектов в Нетологии: как я собрала смету на своё обучение и сбила цену',
    metaTitle: 'Промокод Нетология на курс проджекта — расчёт цены',
    metaDescription:
      'Считаю стоимость курса «Менеджер проектов» в Нетологии: тарифы от 198 780 ₽, акция до −50%, именной промокод на 20 000 ₽, вычет 13% и правило «нашли дешевле».',
    intent: 'скидка нетология',
    blurb:
      'Смета на собственное обучение: три тарифа, цена часа практики и код, который срезал 20 000 ₽.',
    updated: '2026-08-28',
    readingTime: '9 мин',
    accent: '#1F5FA8',
  },
  {
    slug: 'netology-analitik-dannyh-promokod',
    subject: 'аналитика данных в Нетологии',
    shortSubject: 'Аналитик данных',
    title: 'Аналитик данных в Нетологии: пересчитала все промокоды и выбрала не самый очевидный',
    metaTitle: 'Промокод Нетология на аналитика данных — что выгоднее',
    metaDescription:
      'На курс «Аналитик данных» в Нетологии нет именного промокода — считаю универсальные: −15%, −8%, −5% поверх акции. Какой из них выигрывает на каждом тарифе.',
    intent: 'купон нетология',
    blurb:
      'Именного кода на эту программу нет — разбираю, какой из универсальных даёт больше на каждом тарифе.',
    updated: '2026-08-28',
    readingTime: '8 мин',
    accent: '#7A3E9D',
  },
  {
    slug: 'netology-ux-ui-dizayner-promokod',
    subject: 'UX/UI-дизайнера в Нетологии',
    shortSubject: 'UX/UI-дизайнер',
    title: 'UX/UI-дизайнер в Нетологии: 366 000 ₽ на витрине и 137 000 ₽ в чеке',
    metaTitle: 'Промокод Нетология на UX/UI-дизайнера — расчёт цены',
    metaDescription:
      'Самый большой разрыв между ценой и чеком во всём каталоге Нетологии. Считаю курс «UX/UI-дизайнер»: акция −50%, скидка за оплату сразу, промокод и лимит налогового вычета.',
    intent: 'акция нетология',
    blurb:
      'Единственный тариф, три скидки подряд и первый курс, где сумма упирается в лимит налогового вычета.',
    updated: '2026-08-28',
    readingTime: '9 мин',
    accent: '#B03A6E',
  },
  {
    slug: 'netology-ii-razrabotchik-promokod',
    subject: 'ИИ-разработчика в Нетологии',
    shortSubject: 'ИИ-разработчик',
    title: 'ИИ-разработчик в Нетологии: два кода на один курс и разница между ними в 600 ₽',
    metaTitle: 'Промокод Нетология на ИИ-разработчика — что выгоднее',
    metaDescription:
      'На курс «ИИ-разработчик: от API до агентов» с МТУСИ действуют сразу два промокода — именной на 15 000 ₽ и процентный на 10%. Считаю, какой из них выгоднее и почему разрыв такой узкий.',
    intent: 'промокод нетология',
    blurb:
      'Редкий случай: именной код и процентный сошлись почти вплотную. Разбираю, какой выбрать.',
    updated: '2026-08-28',
    readingTime: '8 мин',
    accent: '#0F766E',
  },
  {
    slug: 'netology-devsecops-promokod',
    subject: 'DevSecOps в Нетологии',
    shortSubject: 'DevSecOps',
    title: 'DevSecOps в Нетологии: курс, на котором именной промокод перестаёт быть выгодным',
    metaTitle: 'Промокод Нетология на DevSecOps — какой код выгоднее',
    metaDescription:
      'Самая дорогая программа школы: 450 000 ₽ без акции. Считаю курс DevSecOps с ВШЭ и показываю, почему именной код на 10 000 ₽ здесь проигрывает даже пятипроцентному.',
    intent: 'скидка нетология',
    blurb:
      'Правило «фиксированный код лучше процентного» здесь ломается. Показываю, на какой сумме это происходит.',
    updated: '2026-08-28',
    readingTime: '8 мин',
    accent: '#9A3412',
  },
  {
    slug: 'netology-rukovoditel-ii-proektov-promokod',
    subject: 'руководителя ИИ-проектов в Нетологии',
    shortSubject: 'Руководитель ИИ-проектов',
    title: 'Руководитель ИИ-проектов с МФТИ: как 277 500 ₽ превращаются в 91 241 ₽',
    metaTitle: 'Промокод Нетология на курс с МФТИ — расчёт цены',
    metaDescription:
      'Максимальная акция школы −55%, крупнейший именной промокод на 20 000 ₽ и два удостоверения МФТИ. Полный расчёт стоимости курса «Руководитель проектов в области ИИ».',
    intent: 'купон нетология',
    blurb: 'Лучшее сочетание во всём каталоге: максимальная акция плюс самый крупный именной код.',
    updated: '2026-08-28',
    readingTime: '8 мин',
    accent: '#4C1D95',
  },
]

export function getNetologyArticle(slug: string): ArticleMeta | undefined {
  return netologyArticles.find((a) => a.slug === slug)
}

/** The other Нетология landers, for the cross-link block. */
export function otherNetologyArticles(slug: string, limit = 4): ArticleMeta[] {
  return netologyArticles.filter((a) => a.slug !== slug).slice(0, limit)
}
