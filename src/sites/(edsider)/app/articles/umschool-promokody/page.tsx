import type { Metadata, Route } from 'next'
import Link from 'next/link'

import type { FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import {
  autoDiscount,
  codeFor,
  codesForSubject,
  freeCourses,
  moneyCode,
} from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { russianCourse } from '../../../data/umschool/courses'
import { umschoolSchools } from '../../../data/umschool/school'
import { vera } from '../../../data/umschool/authors'
import { COUPONS_PATH, kitPrice, rub } from '../../../data/umschool/types'
import Aff from '../../../components/articles/Aff'
import ArticleFaq from '../../../components/articles/ArticleFaq'
import ArticleSection from '../../../components/articles/ArticleSection'
import ArticleShell from '../../../components/articles/ArticleShell'
import AuthorCard from '../../../components/articles/AuthorCard'
import AutoDiscountCards from '../../../components/articles/AutoDiscountCards'
import CtaBanner from '../../../components/articles/CtaBanner'
import FreeCourseTable from '../../../components/articles/FreeCourseTable'
import KitTable from '../../../components/articles/KitTable'
import PromoHero from '../../../components/articles/PromoHero'

const meta = getUmschoolArticle('umschool-promokody')!

export const metadata: Metadata = articleMetadata(meta)

/**
 * Русский — the only subject every ЕГЭ candidate sits, so its code is the one
 * with the widest claim on a reader who arrived without naming a subject.
 */
const heroCode = codeFor('russkiy', 11)!

const kitDiscounts = [
  autoDiscount('kit4'),
  autoDiscount('years23'),
  autoDiscount('kit2'),
  autoDiscount('single'),
]
const paymentDiscounts = [
  autoDiscount('installment'),
  autoDiscount('tax'),
  autoDiscount('umcoins'),
  autoDiscount('referral'),
]
const giftDiscounts = [autoDiscount('summer-start'), autoDiscount('final-essay')]

/**
 * The five subjects the most people sit, shown as a sample rather than a dump.
 *
 * Printing all thirty-nine codes here was the obvious thing and the wrong one:
 * a wall of near-identical rows is unreadable, it buries the discounts that
 * actually cost money, and it removes any reason to open the subject article
 * where that code is explained. So the hub shows what a code looks like and
 * routes the reader to their own subject.
 */
const POPULAR = ['russkiy', 'matematika', 'obshchestvoznanie', 'biologiya', 'informatika']
const sampleCodes = POPULAR.map((slug) => codeFor(slug, 11)!)

/** Every subject that has codes, ordered by how many people sit the exam. */
const SUBJECT_ORDER = [
  'russkiy',
  'matematika',
  'obshchestvoznanie',
  'biologiya',
  'fizika',
  'istoriya',
  'informatika',
  'himiya',
  'angliyskiy',
  'literatura',
  'geografiya',
]

const subjectIndex = SUBJECT_ORDER.map((slug) => {
  const subjectCodes = codesForSubject(slug)
  return {
    slug,
    label: subjectCodes[0].subjectLabel,
    count: subjectCodes.length,
    grades: subjectCodes.map((c) => c.grade),
    href: `/articles/umschool-${slug}-promokod`,
  }
})

const totalCodes = freeCourses.length

const kit4 = kitPrice(russianCourse.price, 4)
const kit1 = kitPrice(russianCourse.price, 1)

const lead =
  'Я веду сводку по скидкам онлайн-школ и раз в месяц перепроверяю, что из неё ещё живо. Умскул в этой таблице стоит особняком, и не потому, что скидки у него больше. Просто здесь промокод и скидка — это две разные вещи, которые нигде на сайте не сведены вместе: кодов у школы тридцать девять, и ни один из них не снижает цену ни на рубль, зато скидки, снижающие её вдвое, вообще не требуют кода. Ниже и то и другое.'

const faq: FaqItem[] = [
  {
    q: 'Есть ли у Умскула промокод на скидку?',
    a: 'Практически нет. Единственный код, который давал скидку деньгами, — FM2025 на −12%; он набрал больше тысячи применений, но купонные площадки уже помечают его истёкшим, и мы его не подтверждали. Всё остальное, что вы найдёте по запросу «промокод Умскул», — это коды вида RUSS11_SITEPROMO1_CC, открывающие бесплатный мини-курс. Скидка на платные курсы у школы устроена иначе: она считается автоматически в корзине от количества предметов и лет оплаты, и код для неё не нужен.',
  },
  {
    q: 'Куда вводить промокод Умскул?',
    a: 'Не в корзину. Коды на бесплатные мини-курсы вводятся по иконке с билетиком в правом верхнем углу личного кабинета, в окно «Промокод на бесплатный курс». После отправки курс появляется в разделе «Занятия». В корзине поле «У меня есть промокод» тоже есть, но оно для денежных кодов, которых у школы фактически нет, — если вставить туда предметный код, он не примется. Это самая частая ошибка, и она заставляет людей думать, что код не работает.',
  },
  {
    q: 'Сколько промокодов можно активировать?',
    a: 'На бесплатные мини-курсы — сколько угодно, каждый по одному разу. Коды одноразовые и привязываются к аккаунту, но между собой не конфликтуют: можно забрать курс по русскому, по математике и по обществознанию подряд. А вот в корзине на один заказ действует только один промокод — правило, которое к бесплатным курсам отношения не имеет, потому что они оформляются не через корзину.',
  },
  {
    q: 'Сколько стоит годовой курс Умскул в 2026 году?',
    a: `Один годовой курс — ${rub(russianCourse.price)}, на витрине зачёркнуто ${rub(russianCourse.priceOld)}. В рассрочку это ${rub(russianCourse.perMonth)} в месяц. Цена одинаковая по всем предметам: математика с Шарафиевым стоит ровно столько же, сколько английский или история. В комплекте цена предмета падает: четыре предмета обходятся в ${rub(kit4.total)}, то есть ${rub(kit4.perSubject)} за предмет — почти вдвое дешевле, чем брать один.`,
  },
  {
    q: 'Складываются ли скидки Умскула между собой?',
    a: 'Скидки за количество предметов — нет, они взаимоисключающие: работает та, которая соответствует вашей корзине. Четыре предмета дают −50%, два-три — −15%, один — −10%, и одновременно эти проценты не применяются. А вот всё остальное складывается со скидкой свободно: рассрочка считается уже от сниженной суммы, налоговый вычет возвращает 13% от фактически уплаченного, умкоины списываются поверх, бесплатные мини-курсы по кодам вообще существуют отдельно от корзины.',
  },
  {
    q: 'Промокоды на бесплатные курсы — это правда бесплатно?',
    a: 'Да, и это не вводный урок, а мини-курс целиком: теория, практика и пробник по конкретным темам. Карта при активации не запрашивается, автопродления нет — код просто открывает курс в вашем аккаунте. Расчёт школы прозрачный: вы заводите аккаунт, видите платформу и преподавателя изнутри, и дальше вам продают годовой курс. Это честный обмен, но понимать его стоит: после активации вам будут звонить.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={vera}
      kicker="Сводка · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Разборы цен и промокодов Умскула"
    >
      <PromoHero
        promo={heroCode}
        deepLink={COUPONS_PATH}
        autos={kitDiscounts}
        asOf={meta.updated}
        cta="Забрать бесплатный курс на umschool.net →"
      />

      <ArticleSection prose>
        <p>
          Начну с того, что переворачивает весь поиск.{' '}
          <strong>
            У Умскула промокод не даёт скидку. Скидку даёт корзина, и для неё код не нужен вовсе.
          </strong>{' '}
          Тридцать девять кодов, которые есть у школы, открывают бесплатные мини-курсы — по одному
          на каждый предмет и класс. Они стоят 0 ₽, но и снижают цену годового курса ровно на 0 ₽.
        </p>
        <p>
          Отсюда две ошибки, которые я вижу постоянно. Первая: человек находит код, вставляет его в
          корзину при оплате годового курса, получает «промокод не найден» и решает, что код
          мёртвый. Он живой — просто вводится в другом месте. <strong>Вторая ошибка дороже:</strong>{' '}
          человек тратит вечер на поиск кода и не замечает, что четыре предмета в корзине стоят как
          два, — а это{' '}
          <strong>{rub(kit1.perSubject - kit4.perSubject)} экономии на каждом предмете</strong> и
          никакого кода.
        </p>
        <p>
          Дальше я развела это по разделам: сначала все коды на бесплатные курсы таблицей, потом
          скидки, которые считаются сами, потом остальное — рассрочка, вычет и мелочи, которые в
          сумме дают ещё около пятнадцати процентов.
        </p>
      </ArticleSection>

      <ArticleSection id="codes" title="Как выглядит код и что он открывает">
        <div className="article-prose mb-6">
          <p>
            Кодов у школы {totalCodes} — по одному на каждый предмет и класс, и выкладывать их
            сплошной простынёй бессмысленно: вам нужен ровно один. Ниже пять самых массовых
            предметов для примера, дальше — ссылка на разбор своего.
          </p>
          <p>
            Важно взять код своего класса: они не взаимозаменяемы, и одиннадцатиклассник,
            активировавший код за девятый, потратит его на программу ОГЭ. Вводятся все одинаково —
            иконка с билетиком в правом верхнем углу личного кабинета, окно «Промокод на бесплатный
            курс», курс появляется в разделе «Занятия».{' '}
            <Aff to={COUPONS_PATH}>Страница с акциями</Aff> — там же, где висит таймер скидки.
          </p>
        </div>

        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={sampleCodes}
          showSubject
          caption="Пять предметов ЕГЭ за 11 класс — для примера. Коды за 10, 9, 8 и 7 класс устроены так же, но программы в них другие: ищите свой в разборе предмета ниже."
        />
      </ArticleSection>

      <ArticleSection id="subjects" title="Найдите свой предмет">
        <div className="article-prose mb-6">
          <p>
            В каждом разборе — все коды предмета по классам, что именно внутри мини-курса, кто ведёт
            годовой курс и сколько он стоит.
          </p>
        </div>
        <SubjectIndex />
      </ArticleSection>

      <AuthorCard author={vera} />

      <ArticleSection id="auto" title="Скидки, которые считаются сами">
        <div className="article-prose mb-6">
          <p>
            Вот здесь настоящие деньги. Все четыре скидки ниже{' '}
            <strong>применяются автоматически при переходе в корзину</strong> — поле промокода при
            этом остаётся пустым. Между собой они не складываются: работает та, что соответствует
            вашему набору.
          </p>
        </div>
        <AutoDiscountCards discounts={kitDiscounts} deepLink={COUPONS_PATH} />
      </ArticleSection>

      <ArticleSection id="kit" title="Сколько стоит один предмет">
        <KitTable
          unitPrice={russianCourse.price}
          deepLink={russianCourse.path}
          caption={`Расчёт от цены годового курса ${rub(russianCourse.price)} — она одинаковая по всем предметам. Скидка за два-три года оплаты (−30%) в таблицу не входит: это другая механика, она считается от количества лет, а не предметов.`}
        />
        <div className="article-prose mt-6">
          <p>
            Читать эту таблицу нужно по четвёртому столбцу, а не по третьему.{' '}
            <strong>
              Четвёртый предмет в комплекте не добавляет к чеку — он снижает цену всех остальных
            </strong>
            : три предмета стоят {rub(kitPrice(russianCourse.price, 3).perSubject)} за штуку, четыре
            — {rub(kit4.perSubject)}. Общая сумма при этом падает с{' '}
            {rub(kitPrice(russianCourse.price, 3).total)} до {rub(kit4.total)}, то есть четыре
            предмета обходятся дешевле трёх.
          </p>
          <p>
            Это не опечатка и не ошибка школы, а прямое следствие того, что −50% включается ровно на
            четвёртом предмете. Практический вывод простой:{' '}
            <strong>если вы всерьёз рассматриваете три предмета, берите четыре</strong> — заплатите
            меньше. А если предмет нужен один, скидка составит всего −10%, и тут стоит честно
            сравнить школу с репетитором.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={COUPONS_PATH}
        title="Скидка применяется в корзине, промокод для неё не нужен"
        body="Соберите набор предметов в разделе «Магазин» — цена пересчитается сама при переходе в корзину. Поле промокода оставьте пустым: оно нужно только для отдельных кодов на бесплатные мини-курсы."
        cta="Открыть акции Умскула →"
      />

      <ArticleSection id="money-code" title="Единственный код на скидку деньгами">
        <div
          className="rounded-2xl border-2 border-dashed p-5 sm:p-6"
          style={{ borderColor: 'rgb(var(--color-rule))' }}
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <code
              className="font-mono text-xl font-bold tracking-wider select-all"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {moneyCode.code}
            </code>
            <span
              className="font-editorial text-2xl font-bold"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              {moneyCode.label}
            </span>
            <span
              className="rounded-full border px-3 py-1 text-xs"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
            >
              статус не подтверждён
            </span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
            {moneyCode.note}
          </p>
        </div>
        <div className="article-prose mt-6">
          <p>
            Проверить его ничего не стоит: соберите корзину, нажмите «У меня есть промокод»,
            вставьте код. Примется — хорошо. Но держите в голове масштаб:{' '}
            <strong>
              −12% на один курс это {rub(Math.round((russianCourse.price * 12) / 100))}, а комплект
              из четырёх предметов экономит {rub(kit1.perSubject - kit4.perSubject)} на каждом
            </strong>
            . Искать код ради двенадцати процентов, когда рядом лежит пятьдесят, — плохой размен
            времени.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="payment" title="Что снижает цену после скидки">
        <div className="article-prose mb-6">
          <p>
            Скидкой дело не заканчивается, и вот эти четыре вещи в сумме дают ещё около пятнадцати
            процентов. В отличие от скидок за количество предметов,{' '}
            <strong>они складываются и со скидкой, и друг с другом</strong>.
          </p>
        </div>
        <AutoDiscountCards discounts={paymentDiscounts} />
        <div className="article-prose mt-6">
          <p>
            Самое недооценённое здесь — вычет. Тринадцать процентов от {rub(kit4.total)} — это{' '}
            {rub(Math.round((kit4.total * 13) / 100))}, и вернуть их может любой родитель, который
            официально работает, а форма обучения по договору — очная; это условие для детского
            вычета обязательное, и его стоит уточнить до оплаты.{' '}
            <strong>Документы школа готовит бесплатно</strong>, подать декларацию можно в течение
            трёх лет после оплаты.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="gifts" title="Подарки, которые кладут в корзину без спроса">
        <AutoDiscountCards discounts={giftDiscounts} />
      </ArticleSection>

      <ArticleSection id="how" title="Порядок действий, если коротко" prose>
        <p>
          Сначала бесплатное: возьмите <Aff to={COUPONS_PATH}>код своего предмета и класса</Aff> из
          таблицы выше и пройдите мини-курс. Это единственный способ увидеть платформу и
          преподавателя до того, как вы отдадите за них деньги, и он ничего не стоит.
        </p>
        <p>
          Потом считайте набор.{' '}
          <strong>Определитесь с количеством предметов до того, как откроете корзину</strong> — от
          него зависит вся цена, и разница между тремя и четырьмя предметами противоречит интуиции.
          Поле промокода при оплате оставьте пустым.
        </p>
        <p>
          И в конце — то, что делается уже после оплаты:{' '}
          <strong>рассрочка без переплат, если сумма великовата, и вычет 13%</strong>, который
          вернётся отдельным платежом от налоговой. Ни то, ни другое не требует ждать акцию.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}

/**
 * Grid of links to the eleven subject articles.
 *
 * Local to this page rather than shared: it is the hub's navigation, and it
 * exists so the code table above can stay short. Hrefs are derived from the
 * subject slug instead of hand-listed, so a new subject article cannot end up
 * missing from the index or pointing at a slug that does not exist.
 */
function SubjectIndex() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {subjectIndex.map((s) => (
        <Link
          key={s.slug}
          href={s.href as Route}
          className="flex items-baseline justify-between gap-3 rounded-xl border px-4 py-3 transition-colors hover:bg-[rgb(var(--color-surface))]"
          style={{ borderColor: 'rgb(var(--color-rule))' }}
        >
          <span className="font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
            {s.label}
          </span>
          <span className="text-xs whitespace-nowrap" style={{ color: 'rgb(var(--color-muted))' }}>
            {s.count} {s.count === 1 ? 'код' : s.count < 5 ? 'кода' : 'кодов'} ·{' '}
            {Math.min(...s.grades)}–{Math.max(...s.grades)} классы
          </span>
        </Link>
      ))}
    </div>
  )
}
