import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { russianCourse } from '../../../data/umschool/courses'
import { ksenia } from '../../../data/umschool/authors'
import { umschoolSchools } from '../../../data/umschool/school'
import { CATALOG_PATH, COUPONS_PATH, kitPrice, rub } from '../../../data/umschool/types'
import Aff from '../../../components/articles/Aff'
import ArticleFaq from '../../../components/articles/ArticleFaq'
import ArticleSection from '../../../components/articles/ArticleSection'
import ArticleShell from '../../../components/articles/ArticleShell'
import AuthorCard from '../../../components/articles/AuthorCard'
import AutoDiscountCards from '../../../components/articles/AutoDiscountCards'
import CtaBanner from '../../../components/articles/CtaBanner'
import ExamFacts from '../../../components/articles/ExamFacts'
import FreeCourseTable from '../../../components/articles/FreeCourseTable'
import KitTable from '../../../components/articles/KitTable'
import PromoHero from '../../../components/articles/PromoHero'

const meta = getUmschoolArticle('umschool-literatura-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const codes = codesForSubject('literatura')
const heroCode = codeFor('literatura', 11)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const extras = [autoDiscount('final-essay'), autoDiscount('free-lesson')]

/** Every year course the school lists is priced identically, so this is the unit. */
const UNIT = russianCourse.price
const two = kitPrice(UNIT, 2)
const four = kitPrice(UNIT, 4)

const lead =
  'Литература — предмет, где курсов мало, а тех, где реально учат писать сочинение, ещё меньше. Я сдавала литературу с русским и поступила на филологию. Выбор у меня начался не с рейтингов, а с бесплатного мини-курса по промокоду: он оказался разбором «Недоросля» и «Горя от ума» с цитатами под сочинение, то есть ровно тем, чем я и собиралась заниматься весь год. Рассказываю, что в этом коде внутри и как считается цена, если решите брать годовой курс.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(UNIT) },
  { label: 'С русским в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Кодов по предмету', value: `${codes.length} — 9, 10 и 11 класс` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на литературу?',
    a: `Три: ${heroCode.code} для ЕГЭ в 11 классе, LIT10_SITEPROMO1_CC для 10 класса и LIT9_SITEPROMO1_CC для ОГЭ в девятом. Каждый открывает бесплатный мини-курс и вводится в кабинете, в окне под билетиком, а не на шаге оплаты. Скидку на платный курс они не дают: её считает корзина от количества предметов.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по литературе?',
    a: `Для 11 класса — ${heroCode.inside}. Это самое конкретное описание из всех бесплатных курсов школы: не «основы предмета», а два произведения из кодификатора, разобранные под сочинение. Для 10 и 9 классов формулировки общие — «старт подготовки» и «база для экзамена», содержимое станет понятно при активации.`,
  },
  {
    q: 'Сколько стоит курс по литературе в Умскул?',
    a: `Годовые курсы школы стоят одинаково независимо от предмета — ${rub(UNIT)} за год, в рассрочку ${rub(russianCourse.perMonth)} в месяц. Курс именно по литературе стоит смотреть в каталоге: он не входит в число девяти программ, которые школа выносит на витрину, и состав преподавателей по нему стоит уточнить до оплаты. В паре с русским цена предмета падает до ${rub(two.perSubject)}.`,
  },
  {
    q: 'Зачем разбирать «Недоросля» и «Горе от ума» отдельно?',
    a: 'Потому что оба входят в кодификатор и оба стабильно всплывают в сопоставительных заданиях, где нужно привести пример из другого произведения. Для этого не требуется помнить весь текст — нужны темы, образы и несколько точных цитат, которые ложатся под нужный тезис. Мини-курс собран именно так, и в этом его практическая ценность: он даёт готовый материал, а не пересказ.',
  },
  {
    q: 'Литературу берут вместе с русским?',
    a: `Почти всегда: русский обязателен, а на филологические и журналистские направления к ним добавляется третий предмет. Практически это означает комплект и автоматическую скидку. И проверьте арифметику на своём наборе: три предмета в этой школе стоят ${rub(kitPrice(UNIT, 3).total)}, а четыре — ${rub(four.total)}, то есть дешевле.`,
  },
  {
    q: 'Хватит ли курса, чтобы писать сочинения на максимум?',
    a: 'Курс даёт структуру, критерии и материал, но литература — предмет, где балл растёт от количества написанного и разобранного, а не прослушанного. Мой опыт: сдвиг начался, когда я стала сдавать сочинение каждую неделю и получать разбор по критериям. До этого я месяц слушала лекции и не улучшила ничего.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={ksenia}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero
        promo={heroCode}
        deepLink={CATALOG_PATH}
        autos={kitDiscounts}
        asOf={meta.updated}
      />

      <ArticleSection prose>
        <p>
          Первое, что стоит знать про промокоды этой школы.{' '}
          <strong>Код по литературе не снижает цену — он открывает бесплатный курс.</strong>{' '}
          Вводится он по иконке с билетиком в личном кабинете, не в корзину. Скидка на платные курсы
          считается корзиной сама, от количества предметов, и код ей не нужен.
        </p>
        <p>
          Для литературы бесплатный курс особенно кстати: предмет редкий, курсов под него мало, и
          понять качество по описанию почти невозможно.
        </p>
        <p>
          Общий разбор промокодов школы и её скидочной механики —{' '}
          <Link href="/articles/umschool-promokody">здесь</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Литература в Умскул: цифры">
        <ExamFacts facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Оговорка про первую цифру.{' '}
            <strong>
              Все девять годовых курсов, которые школа выносит на витрину, стоят одинаково —{' '}
              {rub(UNIT)}, независимо от предмета
            </strong>
            . Литературы среди этих девяти нет, поэтому цену и состав преподавателей по ней{' '}
            <Aff to={CATALOG_PATH}>смотрите в каталоге</Aff> и уточняйте до оплаты. Скидочная
            механика при этом общая для всех курсов.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="codes" title="Три кода по литературе">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Коды одноразовые и привязываются к аккаунту, но между собой не конфликтуют: русский можно забрать в тот же вечер."
        />
        <div className="article-prose mt-6">
          <p>
            Обратите внимание на разницу в описаниях, она о многом говорит.{' '}
            <strong>
              За одиннадцатый класс школа называет конкретику: «Недоросль» и «Горе от ума», ключевые
              темы, образы и цитаты под сочинение
            </strong>
            . За десятый и девятый — «старт подготовки» и «база для экзамена», то есть общие слова.
          </p>
          <p>
            Из этого следует практический совет:{' '}
            <strong>берите код за одиннадцатый класс независимо от того, в каком вы учитесь</strong>
            . Разбор двух произведений из кодификатора полезен и в десятом, а формулировки без
            конкретики означают, что содержимое вы узнаете только после активации одноразового кода.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={ksenia} />

      <ArticleSection id="citations" title="Почему цитаты важнее пересказа" prose>
        <p>
          Объясню, почему именно такой мини-курс — удачный выбор для литературы.{' '}
          <strong>
            На экзамене не требуется помнить весь текст. Требуется привести пример, который
            подтверждает ваш тезис, и подтвердить его точной цитатой
          </strong>
          . Сопоставительные задания устроены так, что нужно вытащить второе произведение по
          заданному признаку, а не пересказать его.
        </p>
        <p>
          Отсюда рабочая стратегия, к которой я пришла к декабрю:{' '}
          <strong>
            не читать всё подряд, а собирать по каждому произведению кодификатора карточку — темы,
            образы, три-четыре цитаты
          </strong>
          . «Недоросль» и «Горе от ума» удобны тем, что закрывают сразу несколько частых тем:
          воспитание, конфликт поколений, общество и личность.
        </p>
        <p>
          И главное, чего курс за вас не сделает.{' '}
          <strong>
            Балл по литературе растёт от количества написанных и разобранных сочинений
          </strong>
          , а не от прослушанных лекций. Первый месяц я слушала и не сдвинулась никуда; сдвиг пошёл,
          когда я стала сдавать работу каждую неделю.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Цена в комплекте">
        <KitTable
          unitPrice={UNIT}
          deepLink={CATALOG_PATH}
          highlight={2}
          cta="Открыть каталог курсов Умскула →"
          caption={`Расчёт от цены годового курса ${rub(UNIT)} — она одинакова для всех курсов на витрине школы. Литературу и её цену уточняйте в каталоге.`}
        />
        <div className="article-prose mt-6">
          <p>
            Литература идёт минимум с обязательным <Aff to={russianCourse.path}>русским</Aff>, а на
            журналистику и филологию к ним обычно добавляется третий предмет. Это комплект, и{' '}
            <strong>
              цена предмета падает с {rub(UNIT)} до {rub(two.perSubject)}
            </strong>{' '}
            автоматически.
          </p>
          <p>
            Если предметов выходит три — посчитайте четыре.{' '}
            <strong>
              {rub(four.total)} против {rub(kitPrice(UNIT, 3).total)}
            </strong>
            : на четвёртом предмете скидка прыгает с 15% до 50%, и больший набор оказывается
            дешевле.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={CATALOG_PATH}
        title="Мини-курс по «Недорослю» и «Горю от ума» — бесплатно"
        body="Промокод открывает разбор двух произведений кодификатора с цитатами под сочинение и вводится в личном кабинете. Годовой курс по литературе и его цену смотрите в каталоге школы."
        cta="Открыть каталог курсов →"
      />

      <ArticleSection id="extras" title="Что прилагается к русскому">
        <AutoDiscountCards discounts={extras} deepLink={CATALOG_PATH} />
        <div className="article-prose mt-6">
          <p>
            Для тех, кто сдаёт литературу, первый пункт почти всегда срабатывает:{' '}
            <strong>
              годовой курс по русскому плюс любой второй предмет — и подготовка к итоговому
              сочинению подключается бесплатно
            </strong>
            . Декабрьский допуск иначе пришлось бы покупать отдельно, а для литературы он ещё и
            разминка перед основным экзаменом.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я посоветовала себе год назад" prose>
        <p>
          <strong>Забрать код за одиннадцатый класс сразу, в каком бы классе ты ни была.</strong>{' '}
          Это единственный мини-курс школы с конкретной программой, и разбор двух произведений
          кодификатора не устареет.
        </p>
        <p>
          <strong>Собирать карточки, а не читать всё подряд.</strong> Темы, образы, три-четыре
          цитаты — этого хватает для сопоставительных заданий, а полный пересказ не нужен никому.
        </p>
        <p>
          <strong>Писать каждую неделю.</strong> Никакой курс — ни за сорок пять тысяч, ни за сто —
          не поднимет балл по литературе, если сочинения не пишутся регулярно и не разбираются по
          критериям.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
