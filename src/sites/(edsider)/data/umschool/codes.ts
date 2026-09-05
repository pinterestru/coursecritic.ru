/**
 * Умскул's promo codes: forty codes that open a free mini-course, and the
 * discounts that need no code at all.
 *
 * The split is the whole point of this vertical, and every promo aggregator
 * gets it backwards. On Нетология a code takes roubles off the price. Here the
 * money discounts — −50% for a four-subject kit, −30% for paying two or three
 * years up front, −15% for two subjects, −10% for one — apply THEMSELVES in the
 * basket and have no code at all. What the codes actually unlock is a complete
 * mini-course for 0 ₽: theory, practice and a mock paper, one code per subject
 * and grade. They go in through the ticket icon in the account, not the basket,
 * and they change the price of nothing.
 *
 * So a reader hunting for «промокод Умскул» is looking for the wrong object,
 * and the honest thing to hand them is both: the free course their code really
 * opens, and the automatic discount that is the actual money.
 *
 * Sourced from the brand's coupon dataset (kuponizer.ru, August 2026).
 * GENERATED from widget.json — see scratchpad/gen_codes.py.
 */
import type { AutoDiscount, FreeCourse, MoneyCode } from './types'

/** One code per subject and grade; each opens a full mini-course for 0 ₽. */
export const freeCourses: FreeCourse[] = [
  {
    code: 'ENG11_SITEPROMO1_CC',
    subject: 'английский язык',
    subjectLabel: 'Английский язык',
    subjectSlug: 'angliyskiy',
    grade: 11,
    exam: 'ЕГЭ',
    inside:
      'все разделы экзамена — аудирование, чтение, грамматика, лексика и устная речь, плюс пробный вариант',
    expires: '2026-12-31',
  },
  {
    code: 'ENG9_SITEPROMO1_CC',
    subject: 'английский язык',
    subjectLabel: 'Английский язык',
    subjectSlug: 'angliyskiy',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'прокачка навыков под формат ОГЭ',
    expires: '2026-12-31',
  },
  {
    code: 'BIO11_SITEPROMO1_CC',
    subject: 'биология',
    subjectLabel: 'Биология',
    subjectSlug: 'biologiya',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'генетика с нуля: терминология, правильное оформление задач и решение задания №28',
    expires: '2026-12-31',
  },
  {
    code: 'BIO10_SITEPROMO1_CC',
    subject: 'биология',
    subjectLabel: 'Биология',
    subjectSlug: 'biologiya',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'жизненный цикл клетки за три занятия — интерфаза, митоз и мейоз',
    expires: '2026-12-31',
  },
  {
    code: 'BIO9_SITEPROMO1_CC',
    subject: 'биология',
    subjectLabel: 'Биология',
    subjectSlug: 'biologiya',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'база для экзамена по основным разделам',
    expires: '2026-12-31',
  },
  {
    code: 'PHYS11_SITEPROMO1_CC',
    subject: 'физика',
    subjectLabel: 'Физика',
    subjectSlug: 'fizika',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'три темы, которые встречаются на экзамене чаще всего',
    expires: '2026-12-31',
  },
  {
    code: 'PHYS10_SITEPROMO1_CC',
    subject: 'физика',
    subjectLabel: 'Физика',
    subjectSlug: 'fizika',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'нужные на экзамене формулы, математический минимум и равномерное движение',
    expires: '2026-12-31',
  },
  {
    code: 'PHYS9_SITEPROMO1_CC',
    subject: 'физика',
    subjectLabel: 'Физика',
    subjectSlug: 'fizika',
    grade: 9,
    exam: 'ОГЭ',
    inside:
      'от механики до ядерной физики, задания всех частей экзамена и самостоятельное решение задач',
    expires: '2026-12-31',
  },
  {
    code: 'PHYS8_SITEPROMO1_CC',
    subject: 'физика',
    subjectLabel: 'Физика',
    subjectSlug: 'fizika',
    grade: 8,
    exam: 'Школа',
    inside: 'основы для ОГЭ: три шага 8 класса до уверенной пятёрки',
    expires: '2026-12-31',
  },
  {
    code: 'PHYS7_SITEPROMO1_CC',
    subject: 'физика',
    subjectLabel: 'Физика',
    subjectSlug: 'fizika',
    grade: 7,
    exam: 'Школа',
    inside: 'все ключевые темы 7 класса за три урока',
    expires: '2026-12-31',
  },
  {
    code: 'GEO11_SITEPROMO1_CC',
    subject: 'география',
    subjectLabel: 'География',
    subjectSlug: 'geografiya',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'основы экзамена',
    expires: '2026-12-31',
  },
  {
    code: 'GEO9_SITEPROMO1_CC',
    subject: 'география',
    subjectLabel: 'География',
    subjectSlug: 'geografiya',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'географическое положение России, природа и население страны, плюс практика',
    expires: '2026-12-31',
  },
  {
    code: 'CHEM11_SITEPROMO1_CC',
    subject: 'химия',
    subjectLabel: 'Химия',
    subjectSlug: 'himiya',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'классификация неорганических веществ',
    expires: '2026-12-31',
  },
  {
    code: 'CHEM10_SITEPROMO1_CC',
    subject: 'химия',
    subjectLabel: 'Химия',
    subjectSlug: 'himiya',
    grade: 10,
    exam: 'ЕГЭ',
    inside:
      'строение атома, таблица Менделеева, химические связи, типы веществ и реакций, запись уравнений',
    expires: '2026-12-31',
  },
  {
    code: 'CHEM9_SITEPROMO1_CC',
    subject: 'химия',
    subjectLabel: 'Химия',
    subjectSlug: 'himiya',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'массовая доля, расчёт реакции, степень окисления и метод электронного баланса',
    expires: '2026-12-31',
  },
  {
    code: 'INF11_SITEPROMO1_CC',
    subject: 'информатика',
    subjectLabel: 'Информатика',
    subjectSlug: 'informatika',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'базовые задания экзамена',
    expires: '2026-12-31',
  },
  {
    code: 'INF10_SITEPROMO1_CC',
    subject: 'информатика',
    subjectLabel: 'Информатика',
    subjectSlug: 'informatika',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'основы программирования — старт для самого быстрорастущего предмета ЕГЭ',
    expires: '2026-12-31',
  },
  {
    code: 'INF9_SITEPROMO1_CC',
    subject: 'информатика',
    subjectLabel: 'Информатика',
    subjectSlug: 'informatika',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'база для экзамена по ключевым разделам',
    expires: '2026-12-31',
  },
  {
    code: 'HIST11_SITEPROMO1_CC',
    subject: 'история',
    subjectLabel: 'История',
    subjectSlug: 'istoriya',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'хронология и опорные даты, внутренняя и внешняя политика, работа с картами',
    expires: '2026-12-31',
  },
  {
    code: 'HIST10_SITEPROMO1_CC',
    subject: 'история',
    subjectLabel: 'История',
    subjectSlug: 'istoriya',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'фундамент, на который потом ложится вся программа 11 класса',
    expires: '2026-12-31',
  },
  {
    code: 'HIST9_SITEPROMO1_CC',
    subject: 'история',
    subjectLabel: 'История',
    subjectSlug: 'istoriya',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'рабочие правила подготовки и базовый массив дат и событий',
    expires: '2026-12-31',
  },
  {
    code: 'HIST8_SITEPROMO1_CC',
    subject: 'история',
    subjectLabel: 'История',
    subjectSlug: 'istoriya',
    grade: 8,
    exam: 'Школа',
    inside: 'самая сложная тема 8 класса и три шага к максимуму на ОГЭ',
    expires: '2026-12-31',
  },
  {
    code: 'HIST7_SITEPROMO1_CC',
    subject: 'история',
    subjectLabel: 'История',
    subjectSlug: 'istoriya',
    grade: 7,
    exam: 'Школа',
    inside: 'как перестать терять баллы на контрольных за три урока',
    expires: '2026-12-31',
  },
  {
    code: 'LIT11_SITEPROMO1_CC',
    subject: 'литература',
    subjectLabel: 'Литература',
    subjectSlug: 'literatura',
    grade: 11,
    exam: 'ЕГЭ',
    inside:
      '«Недоросль» Фонвизина и «Горе от ума» Грибоедова: ключевые темы, образы и цитаты под сочинение',
    expires: '2026-12-31',
  },
  {
    code: 'LIT10_SITEPROMO1_CC',
    subject: 'литература',
    subjectLabel: 'Литература',
    subjectSlug: 'literatura',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'старт подготовки к экзамену',
    expires: '2026-12-31',
  },
  {
    code: 'LIT9_SITEPROMO1_CC',
    subject: 'литература',
    subjectLabel: 'Литература',
    subjectSlug: 'literatura',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'база для экзамена',
    expires: '2026-12-31',
  },
  {
    code: 'MATH11_SITEPROMO1_CC',
    subject: 'математика',
    subjectLabel: 'Математика',
    subjectSlug: 'matematika',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'основы тригонометрии',
    expires: '2026-12-31',
  },
  {
    code: 'MATH10_SITEPROMO1_CC',
    subject: 'математика',
    subjectLabel: 'Математика',
    subjectSlug: 'matematika',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'ранний старт подготовки к ЕГЭ',
    expires: '2026-12-31',
  },
  {
    code: 'MATH9_SITEPROMO1_CC',
    subject: 'математика',
    subjectLabel: 'Математика',
    subjectSlug: 'matematika',
    grade: 9,
    exam: 'ОГЭ',
    inside: 'свойства степеней и корней, уравнения и всё про треугольники, в конце — пробник',
    expires: '2026-12-31',
  },
  {
    code: 'MATH8_SITEPROMO1_CC',
    subject: 'математика',
    subjectLabel: 'Математика',
    subjectSlug: 'matematika',
    grade: 8,
    exam: 'Школа',
    inside: 'три шага 8 класса, после которых ОГЭ по математике сдаётся на максимум',
    expires: '2026-12-31',
  },
  {
    code: 'MATH7_SITEPROMO1_CC',
    subject: 'математика',
    subjectLabel: 'Математика',
    subjectSlug: 'matematika',
    grade: 7,
    exam: 'Школа',
    inside: 'как перестать терять баллы на контрольных: с нуля до пятёрки за три урока',
    expires: '2026-12-31',
  },
  {
    code: 'SOC11_SITEPROMO1_CC',
    subject: 'обществознание',
    subjectLabel: 'Обществознание',
    subjectSlug: 'obshchestvoznanie',
    grade: 11,
    exam: 'ЕГЭ',
    inside:
      'познание, издержки производства, налоги, форма государства, правоотношения и семейное право, плюс полноценный пробный вариант',
    expires: '2026-12-31',
  },
  {
    code: 'SOC10_SITEPROMO1_CC',
    subject: 'обществознание',
    subjectLabel: 'Обществознание',
    subjectSlug: 'obshchestvoznanie',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'базовые темы курса перед выпускным годом',
    expires: '2026-12-31',
  },
  {
    code: 'SOC9_SITEPROMO1_CC',
    subject: 'обществознание',
    subjectLabel: 'Обществознание',
    subjectSlug: 'obshchestvoznanie',
    grade: 9,
    exam: 'ОГЭ',
    inside:
      'разделы «Человек и общество» и «Духовная культура», лайфхаки и алгоритмы решения заданий',
    expires: '2026-12-31',
  },
  {
    code: 'RUSS11_SITEPROMO1_CC',
    subject: 'русский язык',
    subjectLabel: 'Русский язык',
    subjectSlug: 'russkiy',
    grade: 11,
    exam: 'ЕГЭ',
    inside: 'основы орфографии и пунктуации, плюс первый заход на сочинение ЕГЭ',
    expires: '2026-12-31',
  },
  {
    code: 'RUSS10_SITEPROMO1_CC',
    subject: 'русский язык',
    subjectLabel: 'Русский язык',
    subjectSlug: 'russkiy',
    grade: 10,
    exam: 'ЕГЭ',
    inside: 'из чего собран экзамен и какие термины нужно знать, чтобы не путаться в формулировках',
    expires: '2026-12-31',
  },
  {
    code: 'RUSS9_SITEPROMO1_CC',
    subject: 'русский язык',
    subjectLabel: 'Русский язык',
    subjectSlug: 'russkiy',
    grade: 9,
    exam: 'ОГЭ',
    inside:
      'задания №1, 6–7 и 11: изложение, глагольные формы, приставки, ПОЛ/ПОЛУ и средства выразительности, разбор частых ошибок и пробник',
    expires: '2026-12-31',
  },
  {
    code: 'RUSS8_SITEPROMO1_CC',
    subject: 'русский язык',
    subjectLabel: 'Русский язык',
    subjectSlug: 'russkiy',
    grade: 8,
    exam: 'Школа',
    inside: 'три шага, которые нужно сделать в 8 классе, чтобы выйти на максимум по ОГЭ',
    expires: '2026-12-31',
  },
  {
    code: 'RUSS7_SITEPROMO1_CC',
    subject: 'русский язык',
    subjectLabel: 'Русский язык',
    subjectSlug: 'russkiy',
    grade: 7,
    exam: 'Школа',
    inside: 'с нуля до твёрдой пятёрки за три урока — база 7 класса для контрольных',
    expires: '2026-12-31',
  },
]

/**
 * The discounts that are actually worth money, none of which need a code.
 *
 * Ordered by size, because that is the order a reader should consider them in
 * and the reverse of the order a promo page usually presents them.
 */
export const autoDiscounts: AutoDiscount[] = [
  {
    id: 'kit4',
    title: '«4 предмета по цене 2»',
    label: '−50%',
    percent: 50,
    detail:
      'Самая крупная скидка школы: четыре годовых курса стоят как два. Действует на всех направлениях, кроме олимпиадных, и привязана к старту занятий — на сайте под неё идёт таймер.',
    how: [
      'Зарегистрируйтесь на платформе Умскул — регистрация бесплатная',
      'Откройте раздел «Магазин» и наберите курсы',
      'Соберите в корзине ровно четыре предмета — цена встанет как за два',
      'Поле «У меня есть промокод» оставьте пустым: оно не для скидок',
    ],
    expires: '2026-09-01',
  },
  {
    id: 'years23',
    title: 'Оплата подготовки сразу на два или три года',
    label: 'до −30%',
    percent: 30,
    detail:
      'Для 7–10 классов: оплачиваете не один год, а два или три вперёд. Процент вдвое выше обычной скидки на комплект, поэтому в 8–9 классе это самая выгодная механика школы — при условии, что вы и так собираетесь доучиться до экзамена.',
    how: [
      'Наберите курсы в разделе «Магазин»',
      'В корзине выберите оплату сразу за два или три года',
      'Процент подставится сам — код не нужен',
    ],
    expires: '2026-09-01',
  },
  {
    id: 'kit2',
    title: 'Комплект из двух и более предметов',
    label: '−15%',
    percent: 15,
    detail:
      'Базовая скидка на набор, без таймера и без спешки: два курса и больше — цена пересчитывается на 15% ниже. Держится до конца года, поэтому решение можно не торопить.',
    how: [
      'Добавьте в корзину два курса или больше',
      'Сумма пересчитается сама при переходе в корзину',
    ],
    expires: '2026-12-31',
  },
  {
    id: 'single',
    title: 'Один предмет',
    label: '−10%',
    percent: 10,
    detail:
      'Минимум, ниже которого цена на сайте не опускается: десять процентов на единственный годовой курс, без условий по количеству и до конца года.',
    how: ['Добавьте в корзину один курс — скидка уже учтена в цене на витрине'],
    expires: '2026-12-31',
  },
  {
    id: 'summer-start',
    title: 'Годовой курс по ценам до повышения + «Летний старт» в подарок',
    detail:
      'Школа держит сниженные цены на годовой курс до 1 сентября, дальше прайс поднимается вместе со стартом занятий. Вторая половина предложения важнее первой: при записи на год курс «Летний старт» добавляется бесплатно, то есть часть программы проходится ещё до первого занятия.',
    how: [
      'Выберите годовой курс в разделе «Магазин»',
      '«Летний старт» упадёт в корзину сам — отдельно его искать не нужно',
      'Оплатите до 1 сентября: после этой даты действует новый прайс',
    ],
    expires: '2026-09-01',
  },
  {
    id: 'final-essay',
    title: 'Курс по итоговому сочинению в подарок',
    detail:
      'К годовому курсу ЕГЭ по русскому языку плюс любому второму предмету бесплатно подключается подготовка к итоговому сочинению — тому самому допуску к ЕГЭ. Отдельно этот курс стоит денег.',
    how: [
      'Добавьте в корзину годовой курс ЕГЭ по русскому языку',
      'Добавьте туда же любой второй предмет',
      'Курс по сочинению появится в «Занятиях» после оплаты',
    ],
  },
  {
    id: 'free-lesson',
    title: 'Вводный урок и первое занятие — бесплатно',
    detail:
      'До покупки школа отдаёт бесплатный вводный урок, а на направлении с репетитором — первое занятие целиком. Логично связать это с бесплатным мини-курсом: сначала забираете курс по своему предмету, потом смотрите живое занятие и только затем решаете про годовой.',
    how: [
      'Откройте карточку нужного курса в каталоге',
      'Нажмите кнопку записи на бесплатный урок',
      'Оставьте телефон — оплата на этом шаге не требуется, карта не запрашивается',
    ],
    expires: '2026-09-30',
  },
  {
    id: 'installment',
    title: 'Рассрочка до 12 месяцев без переплат и Яндекс Сплит',
    detail:
      'Годовой курс разбивается на равные платежи без процентов, оформляется прямо в заказе — отдельно в банк идти не нужно. Важная деталь: рассрочка не отменяет автоматические скидки, платёж считается от уже сниженной цены.',
    how: [
      'Соберите корзину и убедитесь, что скидка применилась',
      'На шаге оплаты выберите рассрочку или Яндекс Сплит',
      'Заполните анкету банка прямо на странице заказа',
      'После одобрения доступ открывается сразу, платежи идут помесячно',
    ],
    expires: '2026-12-31',
  },
  {
    id: 'tax',
    title: 'Возврат 13% через налоговый вычет',
    detail:
      'У школы образовательная лицензия, поэтому оплата проходит по социальному вычету: 13% возвращаются из уплаченного НДФЛ. Складывается с любой акцией — сначала берёте курс со скидкой, потом возвращаете 13% от фактически уплаченной суммы.',
    how: [
      'Уточните до оплаты, будет ли в договоре указана очная форма: без неё вычет за ребёнка не дадут',
      'Запросите в поддержке договор, копию лицензии и чеки — их готовят бесплатно',
      'Подайте декларацию 3-НДФЛ в личном кабинете налогоплательщика',
      'Деньги приходят на счёт после камеральной проверки',
    ],
    expires: '2026-12-31',
  },
  {
    id: 'umcoins',
    title: 'Умкоины за домашки и занятия',
    detail:
      'Внутренняя валюта: за просмотренные занятия и сданные домашние задания на счёт капают умкоины, которые принимают в счёт будущих курсов, купонов или мерча. Механика незаметная на старте и ощутимая к продлению — но только если ребёнок действительно делает домашние задания.',
    how: [
      'Занимайтесь и сдавайте домашние задания — начисление автоматическое',
      'Баланс смотрите в личном кабинете, рядом с иконкой билетика',
      'Списание работает вместе со скидками, одно другому не мешает',
    ],
    expires: '2026-12-31',
  },
  {
    id: 'referral',
    title: '3 000 ₽ за каждого приглашённого друга',
    detail:
      'Персональная ссылка из личного кабинета: друг покупает курс — вам на баланс падает 3 000 ₽. Пятеро приглашённых закрывают часть оплаты следующего года.',
    how: [
      'Откройте раздел «Пригласи друга» в личном кабинете',
      'Отправьте другу персональную ссылку — переход должен быть именно по ней',
      'После оплаты его заказа 3 000 ₽ зачисляются вам на баланс',
    ],
    expires: '2026-12-31',
  },
]

/**
 * The only code that discounts money rather than opening a course.
 *
 * Recorded as 'disputed' rather than quietly listed as working: the code is
 * real and has over a thousand redemptions behind it, but aggregators now flag
 * it expired and we have not confirmed it ourselves. It costs nothing to try,
 * and it is worth less than the automatic kit discount either way — which is
 * the point the articles make instead of promising −12%.
 */
export const moneyCode: MoneyCode = {
  code: 'FM2025',
  label: '−12%',
  percent: 12,
  note: 'Общий код без привязки к предмету: месячный курс или пакет занятий, любой класс. Вводится в корзине, в поле «У меня есть промокод». Больше тысячи применений — код настоящий, но купонные площадки уже помечают его истёкшим.',
  status: 'disputed',
}

/** All codes for one subject, newest grade first. */
export function codesForSubject(subjectSlug: string): FreeCourse[] {
  return freeCourses.filter((c) => c.subjectSlug === subjectSlug)
}

/** One code by subject slug and grade, when an article needs a specific one. */
export function codeFor(subjectSlug: string, grade: number): FreeCourse | undefined {
  return freeCourses.find((c) => c.subjectSlug === subjectSlug && c.grade === grade)
}

/** An automatic discount by id — throws in dev if the id is a typo. */
export function autoDiscount(id: string): AutoDiscount {
  const found = autoDiscounts.find((d) => d.id === id)
  if (!found) throw new Error(`Unknown Умскул auto-discount: ${id}`)
  return found
}
