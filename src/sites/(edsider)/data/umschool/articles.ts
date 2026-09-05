/**
 * Registry of the Умскул promo-code landers.
 *
 * Same contract as ../netology/articles.ts: these pages are opened directly
 * from ads on «промокод умскул» and its variants, so every `intent` is a promo
 * query rather than a course one, and none of them are surfaced on the
 * /articles index — they cross-link only to each other.
 *
 * Two families. Eleven subject articles, one per subject, each covering every
 * grade the school has a code for — the reader arrives wanting a code for one
 * subject, and the article gives them that code plus the price of the year
 * course behind it. Five money articles on the discounts that need no code,
 * which is where the actual saving is.
 *
 * `subject` completes «Промокод Умскул {subject}», and `shortSubject` is the
 * breadcrumb and cross-link label.
 */
import type { ArticleMeta } from '../guides/types'

const UPDATED = '2026-08-31'

export const umschoolArticles: ArticleMeta[] = [
  // ——— Деньги: скидки, которые применяются без кода ———
  {
    slug: 'umschool-promokody',
    subject: 'на все предметы',
    shortSubject: 'Все промокоды',
    title: 'Промокоды Умскул 2026: что они дают на самом деле и где реальная скидка',
    metaTitle: 'Промокоды Умскул 2026 — коды на бесплатные курсы и скидки',
    metaDescription:
      'Промокоды Умскул открывают бесплатный мини-курс, а не скидку. Разбираю, как они работают, где найти код своего предмета и почему деньги экономят автоскидки −50%, −30% и −15% без всякого кода.',
    intent: 'промокод умскул',
    blurb:
      'Почему код не снижает цену, где искать свой предмет и что на самом деле экономит деньги.',
    updated: UPDATED,
    readingTime: '11 мин',
    accent: '#FF8A3D',
  },
  {
    slug: 'umschool-4-predmeta-po-cene-2',
    subject: 'на комплект из четырёх предметов',
    shortSubject: '4 предмета по цене 2',
    title: '«4 предмета по цене 2» в Умскул: как 181 260 ₽ превращаются в 90 630 ₽',
    metaTitle: 'Акция Умскул «4 предмета по цене 2» — расчёт цены 2026',
    metaDescription:
      'Считаю комплект из четырёх годовых курсов Умскул: 45 315 ₽ за предмет по отдельности против 22 658 ₽ в комплекте. Где скидка перестаёт быть выгодной и что не так с ценой на витрине.',
    intent: 'скидка умскул',
    blurb: 'Главная скидка школы, которой не нужен промокод: считаем цену предмета в комплекте.',
    updated: UPDATED,
    readingTime: '10 мин',
    accent: '#E4572E',
  },
  {
    slug: 'umschool-skidka-30-na-dva-goda',
    subject: 'на двухлетнюю подготовку',
    shortSubject: 'Скидка 30% на два года',
    title: 'Скидка 30% в Умскул за оплату на два года: почему в 9 классе это выгоднее комплекта',
    metaTitle: 'Скидка Умскул 30% на 2–3 года подготовки — разбор',
    metaDescription:
      'Разбираю скидку Умскул до 30% при оплате подготовки сразу на два или три года: кому она подходит, чем рискуете и как это считается против обычного комплекта −15%.',
    intent: 'акция умскул',
    blurb:
      'Вдвое больше комплектной скидки — но платить надо за два года вперёд. Считаем, кому это подходит.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#2E7D6E',
  },
  {
    slug: 'umschool-rassrochka-i-nalogovyy-vychet',
    subject: 'на оплату курса',
    shortSubject: 'Рассрочка и вычет 13%',
    title: 'Как платить за Умскул: рассрочка, вычет 13% и бонусы, о которых забывают',
    metaTitle: 'Умскул: рассрочка, налоговый вычет 13% и умкоины',
    metaDescription:
      'Рассрочка Умскул на 12 месяцев без переплат, Яндекс Сплит, возврат 13% через налоговый вычет, умкоины и 3 000 ₽ за друга. Считаю, во что обходится курс после всего этого.',
    intent: 'умскул рассрочка',
    blurb: 'Скидка — только половина дела: вычет, умкоины и рефералка снимают ещё около 15%.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#1F5FA8',
  },
  {
    slug: 'umschool-promokod-fm2025',
    subject: 'FM2025',
    shortSubject: 'Код FM2025',
    title: 'Промокод FM2025 в Умскул: единственный код на скидку — и почему он вам не нужен',
    metaTitle: 'Промокод FM2025 Умскул −12% — работает или нет',
    metaDescription:
      'FM2025 — единственный промокод Умскул, который даёт скидку деньгами, а не бесплатный курс. Проверяю, жив ли он, и считаю, почему −50% в корзине выгоднее этих −12%.',
    intent: 'купон умскул',
    blurb: 'Единственный денежный код школы: разбираем, работает ли он и стоит ли его искать.',
    updated: UPDATED,
    readingTime: '7 мин',
    accent: '#7A5AF8',
  },

  // ——— Предметы ———
  {
    slug: 'umschool-russkiy-promokod',
    subject: 'на русский язык',
    shortSubject: 'Русский язык',
    title: 'Русский язык в Умскул: промокод на бесплатный курс и сколько стоит годовой',
    metaTitle: 'Промокод Умскул на русский язык — бесплатный курс',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по русскому языку для 7–11 классов, цена годового курса с Александром Долгих и подарочный курс по итоговому сочинению.',
    intent: 'промокод умскул русский',
    blurb: 'Пять кодов от 7 класса до ЕГЭ, курс Долгих за 45 315 ₽ и сочинение в подарок.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#D1492A',
  },
  {
    slug: 'umschool-matematika-promokod',
    subject: 'на математику',
    shortSubject: 'Математика',
    title: 'Математика в Умскул: промокод на бесплатный курс Шарафиева и цена годового',
    metaTitle: 'Промокод Умскул на математику — бесплатный мини-курс',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по математике для 7–11 классов, цена годового курса ЕГЭ с Артуром Шарафиевым и расчёт комплекта с физикой.',
    intent: 'промокод умскул математика',
    blurb: 'Тригонометрия за 0 ₽ по коду, профиль с Шарафиевым за 45 315 ₽ и связка с физикой.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#FF6B2C',
  },
  {
    slug: 'umschool-fizika-promokod',
    subject: 'на физику',
    shortSubject: 'Физика',
    title: 'Физика в Умскул: пять бесплатных курсов по промокоду и цена подготовки к ЕГЭ',
    metaTitle: 'Промокод Умскул на физику — бесплатный курс по коду',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по физике с 7 по 11 класс, годовой курс ЕГЭ с Максом Теслой за 45 315 ₽ и почему физику берут в комплекте с математикой.',
    intent: 'промокод умскул физика',
    blurb: 'Самая длинная линейка кодов школы: с 7 класса до второй части ЕГЭ.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#1E63D6',
  },
  {
    slug: 'umschool-obshchestvoznanie-promokod',
    subject: 'на обществознание',
    shortSubject: 'Обществознание',
    title: 'Обществознание в Умскул: промокод на бесплатный курс с пробником и цена годового',
    metaTitle: 'Промокод Умскул на обществознание — курс бесплатно',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по обществознанию для 9–11 классов с полноценным пробником, цена годового курса с Анастасией Маловой и разбор второй части.',
    intent: 'промокод умскул обществознание',
    blurb: 'Самый насыщенный мини-курс школы: шесть тем и полный пробный вариант за 0 ₽.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#2E784C',
  },
  {
    slug: 'umschool-istoriya-promokod',
    subject: 'на историю',
    shortSubject: 'История',
    title: 'История в Умскул: промокоды на бесплатные курсы с 7 класса и цена подготовки к ЕГЭ',
    metaTitle: 'Промокод Умскул на историю — бесплатный мини-курс',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по истории для 7–11 классов, годовой курс ЕГЭ с Алей Виноградовой за 45 315 ₽ и связка истории с обществознанием.',
    intent: 'промокод умскул история',
    blurb: 'Даты, карты и опорные схемы: пять кодов и курс, который хвалят даже критики школы.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#8B5A2B',
  },
  {
    slug: 'umschool-biologiya-promokod',
    subject: 'на биологию',
    shortSubject: 'Биология',
    title: 'Биология в Умскул: бесплатный курс по генетике за промокод и цена годового',
    metaTitle: 'Промокод Умскул на биологию — курс по генетике за 0 ₽',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по биологии для 9–11 классов: генетика с нуля и задание №28. Цена годового курса с Жанной Казанской и комплект с химией.',
    intent: 'промокод умскул биология',
    blurb: 'Генетика и оформление задания №28 бесплатно — самая полезная тема в открытом доступе.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#3E8E5A',
  },
  {
    slug: 'umschool-himiya-promokod',
    subject: 'на химию',
    shortSubject: 'Химия',
    title: 'Химия в Умскул: промокод на бесплатный курс Чагина и сколько стоит подготовка',
    metaTitle: 'Промокод Умскул на химию — бесплатный курс по коду',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по химии для 9–11 классов, годовой курс ЕГЭ с Богданом Чагиным за 45 315 ₽ и расчёт комплекта «химия + биология» для медвуза.',
    intent: 'промокод умскул химия',
    blurb: 'Курс, который в отзывах связывают с результатами за 90: три кода и цена годового.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#0E7C86',
  },
  {
    slug: 'umschool-informatika-promokod',
    subject: 'на информатику',
    shortSubject: 'Информатика',
    title: 'Информатика в Умскул: промокод на бесплатный курс программирования и цена ЕГЭ-курса',
    metaTitle: 'Промокод Умскул на информатику — курс бесплатно',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по информатике для 9–11 классов, годовой курс ЕГЭ с Викторией Ланской за 45 315 ₽ и почему по информатике стоит начинать в 10 классе.',
    intent: 'промокод умскул информатика',
    blurb: 'Самый быстрорастущий предмет ЕГЭ: три кода и разбор, чему там реально учат.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#5B4BC4',
  },
  {
    slug: 'umschool-angliyskiy-promokod',
    subject: 'на английский язык',
    shortSubject: 'Английский язык',
    title: 'Английский в Умскул: бесплатный курс по всем разделам экзамена и цена годового',
    metaTitle: 'Промокод Умскул на английский — бесплатный мини-курс',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по английскому для 9 и 11 классов: все пять разделов экзамена и пробник. Цена годового курса с Шерин Келли и разбор устной части.',
    intent: 'промокод умскул английский',
    blurb: 'Редкий мини-курс, где есть устная часть — та, которую на курсах проходят последней.',
    updated: UPDATED,
    readingTime: '9 мин',
    accent: '#B03A6E',
  },
  {
    slug: 'umschool-literatura-promokod',
    subject: 'на литературу',
    shortSubject: 'Литература',
    title: 'Литература в Умскул: бесплатный курс по «Недорослю» и «Горю от ума» за промокод',
    metaTitle: 'Промокод Умскул на литературу — курс бесплатно',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по литературе для 9–11 классов: ключевые темы, образы и цитаты под сочинение. Цена подготовки и связка с русским языком.',
    intent: 'промокод умскул литература',
    blurb: 'Два произведения из кодификатора с цитатами под сочинение — бесплатно по коду.',
    updated: UPDATED,
    readingTime: '8 мин',
    accent: '#7D3C98',
  },
  {
    slug: 'umschool-geografiya-promokod',
    subject: 'на географию',
    shortSubject: 'География',
    title: 'География в Умскул: два промокода на бесплатные курсы и что делать с редким предметом',
    metaTitle: 'Промокод Умскул на географию — бесплатный мини-курс',
    metaDescription:
      'Промокоды Умскул на бесплатные мини-курсы по географии для 9 и 11 классов, цена подготовки к ЕГЭ по редкому предмету и как добрать его в комплект со скидкой.',
    intent: 'промокод умскул география',
    blurb: 'Предмет, под который сложно найти курс: два кода и честный разбор вариантов.',
    updated: UPDATED,
    readingTime: '8 мин',
    accent: '#1E8A7A',
  },
]

export function getUmschoolArticle(slug: string): ArticleMeta | undefined {
  return umschoolArticles.find((a) => a.slug === slug)
}

/**
 * The other Умскул landers, for the cross-link block.
 *
 * The hub and the kit-discount piece are pinned to the front: whatever subject
 * a reader came for, the two things that change what they pay are the full code
 * table and the arithmetic of the four-subject kit.
 */
export function otherUmschoolArticles(slug: string, limit = 4): ArticleMeta[] {
  const pinned = ['umschool-promokody', 'umschool-4-predmeta-po-cene-2']
  const rest = umschoolArticles.filter((a) => a.slug !== slug)
  return [
    ...rest.filter((a) => pinned.includes(a.slug)),
    ...rest.filter((a) => !pinned.includes(a.slug)),
  ].slice(0, limit)
}
