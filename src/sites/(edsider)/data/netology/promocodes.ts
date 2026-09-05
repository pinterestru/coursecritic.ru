/**
 * Нетология promo codes and the code-free discounts that sit beside them.
 *
 * Sourced from the brand's own coupon dataset (kuponizer.ru, August 2026) and
 * cross-checked against netology.ru course pages the same week.
 *
 * Two families of codes, and the difference decides which one is worth using:
 *  - NAMED codes take a FIXED number of roubles off one specific programme.
 *    Because the sale price is already low, a fixed code beats a percentage —
 *    20 000 ₽ comes off in full, while a percentage would be computed from the
 *    already-reduced base.
 *  - UNIVERSAL codes take a PERCENTAGE off almost the whole catalogue. Weaker
 *    per rouble, but they apply where no named code exists.
 *
 * `stacking` is the field that actually decides the outcome, and it is recorded
 * honestly: only two codes are documented by the school as landing on top of a
 * running sale. Everything else is 'unverified' — the articles tell readers to
 * check at the till rather than promising a saving we cannot confirm.
 */
import type { AutoOffer, PromoCode } from './types'

/** Named codes: one programme each, fixed rouble discount. */
export const namedCodes: PromoCode[] = [
  {
    code: 'ПИТОН',
    kind: 'fixed',
    value: 20_000,
    label: '−20 000 ₽',
    scope: 'Только «Разработчик на Python»',
    path: 'programs/python-basic',
    note: 'Флагманская программа школы по бэкенду. Как и остальные именные коды, действует ровно на свой курс и вводится при оформлении заявки.',
    stacking: 'unverified',
    expires: '2026-08-31',
  },
  {
    code: 'ПРОДЖЕКТ-МЕНЕДЖЕР',
    kind: 'fixed',
    value: 20_000,
    label: '−20 000 ₽',
    scope: 'Только «Управление проектами и командами в IT»',
    path: 'programs/project',
    note: 'Одна из самых востребованных профессий каталога. Код работает только на эту программу, на другие курсы его не применить — указывается при оформлении заявки до выставления счёта.',
    stacking: 'unverified',
    expires: '2026-08-31',
  },
  {
    code: 'РУКОВОДИТЕЛЬ',
    kind: 'fixed',
    value: 20_000,
    label: '−20 000 ₽',
    scope: 'Только «Руководитель проектов в области ИИ»',
    note: 'Программа для менеджеров, которые ведут ИИ-проекты и собирают под них команды. На курсах такого уровня фиксированная скидка снимается с итоговой суммы, а не с прайса, — если цена уже акционная, это заметно выгоднее процента.',
    stacking: 'unverified',
    expires: '2026-08-31',
  },
  {
    code: 'ИИ-РАЗРАБОТЧИК',
    kind: 'fixed',
    value: 15_000,
    label: '−15 000 ₽',
    scope: 'Только «ИИ-разработчик: от API до агентов»',
    note: 'Свежая программа про работу с большими языковыми моделями, RAG и агентными системами — то есть про инженерную сторону ИИ, а не про промпты.',
    stacking: 'unverified',
    expires: '2026-08-31',
  },
  {
    code: 'РАЗРАБОТКА ПО',
    kind: 'fixed',
    value: 10_000,
    label: '−10 000 ₽',
    scope: 'Только «Безопасная разработка ПО»',
    note: 'Курс по application security: как писать и проверять код, чтобы он не стал дырой в периметре. Рассчитан на разработчиков и инженеров по безопасности.',
    stacking: 'unverified',
    expires: '2026-08-31',
  },
]

/** Universal codes: whole catalogue (with exceptions), percentage discount. */
export const universalCodes: PromoCode[] = [
  {
    code: 'PROGRAM-STUDENT',
    kind: 'percent',
    value: 55,
    label: '−55%',
    scope: 'Второй курс — для студентов и выпускников школы',
    note: 'Самая крупная скидка Нетологии, но с чётким адресатом: 55% на следующий курс тем, кто уже учится в школе или закончил любую её программу. Вторая профессия выходит больше чем вдвое дешевле первой. Код называют менеджеру или указывают при оформлении заявки на второй курс.',
    stacking: 'replaces',
    expires: '2026-08-31',
  },
  {
    code: 'ADMITADBTS',
    kind: 'percent',
    value: 15,
    label: '−15%',
    scope: 'Весь каталог, кроме программ высшего образования',
    note: 'Лучший процентный код для тех, кто приходит впервые: берёт профессии, отдельные курсы и повышение квалификации. Единственное исключение — бакалавриат и магистратура с дипломом вуза-партнёра.',
    stacking: 'replaces',
    expires: '2026-09-12',
  },
  {
    code: 'AIFORYOU',
    kind: 'percent',
    value: 10,
    label: '−10%',
    scope: 'Программы про нейросети и генеративный ИИ',
    note: 'Десять процентов сверх текущей цены направления — от «Нейросетей для бизнеса» до продвинутых курсов по машинному обучению. Обкатанный код: больше 90 применений.',
    stacking: 'confirmed',
    expires: '2026-08-31',
  },
  {
    code: 'PROMOLAND',
    kind: 'percent',
    value: 8,
    label: '−8%',
    scope: 'Любая программа каталога',
    note: 'Процент средний, зато срок рекордный — код живёт до 31 декабря 2028 года. Выручает, если вы выбираете направление не спеша, ждёте решения работодателя об оплате или планируете обучение на следующий год: сезонные коды к тому моменту сгорят, а этот нет. Больше 200 применений.',
    stacking: 'unverified',
    expires: '2028-12-31',
  },
  {
    code: 'CHANGES',
    kind: 'percent',
    value: 5,
    label: '−5%',
    scope: 'Любая программа, поверх действующей акции',
    note: 'Единственный код, про который школа сама пишет, что он складывается с автоматической скидкой: сначала считается акционная цена, потом с неё уходят ещё пять процентов. Опубликован на главной странице netology.ru, вводится в корзине в поле «У меня есть промокод». Действует и для новых, и для действующих клиентов.',
    stacking: 'confirmed',
    expires: '2026-12-31',
  },
  {
    code: 'WELCOME',
    kind: 'percent',
    value: 5,
    label: '−5%',
    scope: 'Любой онлайн-курс каталога',
    note: 'Самый обкатанный код школы — больше 400 применений. Цифра небольшая, зато это надёжный запасной вариант: если крупная скидка не прошла по вашей программе, этот обычно принимают без вопросов.',
    stacking: 'unverified',
    expires: '2026-08-31',
  },
]

/**
 * Discounts that need no code — and on this school they move the price more
 * than any code does.
 */
export const autoOffers: AutoOffer[] = [
  {
    title: 'Автоматическая скидка до −50% на флагманы',
    detail:
      'На «Python-разработчика», Data Scientist, ML-инженера и UX/UI-дизайнера действует автоматическая акция до 50% от первоначальной цены. Промокод вводить не нужно — цена пересчитывается в корзине, и поверх неё школа разрешает применить CHANGES.',
  },
  {
    title: 'Автоматическая −40% на основной каталог',
    detail:
      'Фронтенд, Java, аналитика данных, тестирование, менеджер проектов, интернет-маркетолог и большинство остальных профессий идут с автоматической скидкой 40% от старой цены. Тоже без кода.',
  },
  {
    title: 'Дополнительные −10% за оплату одним платежом',
    detail:
      'Если выбрать единовременную оплату вместо рассрочки, цена в корзине снижается ещё на 10% автоматически. На дорогих программах это крупнее любого универсального промокода.',
  },
  {
    title: 'Рассрочка 0% на 24–36 месяцев',
    detail:
      'Беспроцентная рассрочка от банков-партнёров, оформляется на сайте за пару минут без визита в банк. Сумма платежей за срок рассрочки равна акционной цене — переплаты действительно нет.',
  },
  {
    title: 'Возврат 13% через налоговый вычет',
    detail:
      'У школы лицензия на образовательную деятельность, поэтому часть стоимости возвращается социальным вычетом. Документы для ФНС школа выдаёт по запросу в личном кабинете.',
  },
  {
    title: 'Курс в подарок к программе-профессии',
    detail:
      'Большинство годовых профессий идут с подарочным мини-курсом: к Python-разработчику — курс по нейросетям и LLM, к фронтендеру — основы бэкенда, к аналитику данных — визуализация в Power BI. Активируется автоматически после оплаты.',
  },
  {
    title: 'Бесплатные мини-курсы и вводные модули',
    detail:
      'Десятки бесплатных мини-курсов: основы Python, базы SQL, введение в маркетинг, английский для IT, ChatGPT для работы. Способ проверить формат школы до того, как платить за профессию.',
    path: 'learn-free',
  },
  {
    title: 'Реферальная программа',
    detail:
      'Персональная ссылка из личного кабинета: когда приглашённый оплачивает курс, вам начисляется бонус — его можно потратить на следующее обучение или превратить в скидку. Доступна всем активным студентам.',
  },
  {
    title: 'Корпоративное обучение от 5 сотрудников',
    detail:
      'Индивидуальные тарифы для компаний, закрытая группа со своим треком, отчётность для HR и кастомные проекты. Если обучение оплачивает работодатель, это почти всегда выгоднее розничной цены с любым кодом.',
    path: 'b2b',
  },
]

export const allCodes: PromoCode[] = [...namedCodes, ...universalCodes]

export function codeByName(name: string): PromoCode {
  const found = allCodes.find((c) => c.code === name)
  if (!found) throw new Error(`Unknown Нетология promo code: ${name}`)
  return found
}
