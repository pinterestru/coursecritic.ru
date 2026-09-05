import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { russianCourse, socialCourse } from '../../../data/umschool/courses'
import { tatiana } from '../../../data/umschool/authors'
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

const meta = getUmschoolArticle('umschool-geografiya-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const codes = codesForSubject('geografiya')
const heroCode = codeFor('geografiya', 9)!
const ege = codeFor('geografiya', 11)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const extras = [autoDiscount('free-lesson'), autoDiscount('installment')]

const UNIT = russianCourse.price
const two = kitPrice(UNIT, 2)
const three = kitPrice(UNIT, 3)
const four = kitPrice(UNIT, 4)

const lead =
  'География — предмет, о котором вспоминают в последний момент, и найти под неё нормальную подготовку сложнее, чем под математику. Курсов мало, преподавателей ещё меньше, а сравнить их не по чему: описания у всех одинаковые. Мы искали долго. Здесь я собрала то, что выяснила про Умскул: два промокода на бесплатные мини-курсы, честный расклад по тому, чего у школы по географии нет, и арифметика цены, если вы всё же решите брать курс.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(UNIT) },
  { label: 'В комплекте из 2', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Кодов по предмету', value: `${codes.length} — 9 и 11 класс` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на географию?',
    a: `Два: ${heroCode.code} для ОГЭ в девятом классе и ${ege.code} для ЕГЭ в одиннадцатом. Десятого класса в линейке по географии нет. Оба кода открывают бесплатный мини-курс и активируются через значок билета в кабинете; корзина для них не работает, и на цену платного курса они не влияют.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по географии?',
    a: `Для девятого класса — ${heroCode.inside}. Описание конкретное, и курс по нему разумно оценить. Для одиннадцатого школа обещает «основы экзамена» — формулировка общая, что за ней стоит, узнаете при активации. Код одноразовый, так что если вы в одиннадцатом, я бы взяла оба: девятый даст хотя бы понятный материал по России.`,
  },
  {
    q: 'Сколько стоит курс по географии в Умскул?',
    a: `Годовые курсы школы стоят одинаково независимо от предмета — ${rub(UNIT)} за год, в рассрочку ${rub(russianCourse.perMonth)} в месяц. Но география не входит в число девяти программ, которые школа выносит на витрину, поэтому наличие годового курса, преподавателя и текущую цену нужно проверять в каталоге. Скидочная механика при этом общая для всех курсов.`,
  },
  {
    q: 'Что делать, если курса по географии нет?',
    a: 'Реалистичный план для редкого предмета: взять бесплатный мини-курс, чтобы закрыть базу по России, дальше работать по демоверсиям ФИПИ и добирать пробелы репетитором почасово. География — предмет с довольно предсказуемой структурой заданий, и годовой курс здесь нужен меньше, чем в математике или химии. Деньги разумнее направить на предметы, где формат действительно решает.',
  },
  {
    q: 'С чем география идёт в комплекте?',
    a: `С обязательным русским, а на профильных направлениях — с обществознанием или математикой. Это уже комплект, и скидка применяется сама: два предмета — ${rub(two.perSubject)} за каждый вместо ${rub(UNIT)}. Если предметов набирается три, посчитайте четыре: ${rub(four.total)} против ${rub(three.total)}, больший набор дешевле.`,
  },
  {
    q: 'Стоит ли начинать с ОГЭ в девятом классе?',
    a: 'Если ребёнок в девятом и география ему в перспективе нужна — да, и код за девятый класс здесь как раз содержательный: географическое положение России, природа и население плюс практика. Это тот материал, который потом никуда не денется: в ЕГЭ он входит целиком. Одна из немногих ситуаций, когда подготовка к ОГЭ действительно работает на будущий ЕГЭ, а не просто закрывает текущий экзамен.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={tatiana}
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
          Сначала про механику, потому что она у Умскула нетипичная и её стоит понять до поисков.{' '}
          <strong>Промокод по географии не даёт скидку — он открывает бесплатный мини-курс.</strong>{' '}
          Вводится в личном кабинете, по иконке с билетиком. Скидка на платные курсы считается
          корзиной сама, от количества предметов, и код для неё не нужен.
        </p>
        <p>
          Дальше — то, что я обычно не встречаю в статьях про курсы, но что по редкому предмету
          важнее всего: чего у школы по географии нет.
        </p>
        <p>
          Как школа считает скидки на остальных предметах, разобрано{' '}
          <Link href="/articles/umschool-promokody">в общей статье про промокоды</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="География в Умскул: цифры">
        <ExamFacts facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Оговорка к первой цифре, и она существенная.{' '}
            <strong>
              Девять годовых курсов, которые школа выносит на витрину, стоят одинаково — {rub(UNIT)}
              , независимо от предмета. Географии среди этих девяти нет
            </strong>
            . Значит, наличие годового курса, преподавателя и текущую цену нужно{' '}
            <Aff to={CATALOG_PATH}>проверять в каталоге</Aff>, а не принимать по аналогии.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="codes" title="Два кода: ОГЭ и ЕГЭ">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Кода за 10 класс по географии нет. Коды одноразовые, но между собой не конфликтуют — можно взять оба."
        />
        <div className="article-prose mt-6">
          <p>
            Разница в описаниях здесь показательна, и я советую читать её буквально.{' '}
            <strong>
              Код за девятый класс называет конкретику: географическое положение России, природа и
              население, плюс практика
            </strong>
            . Код за одиннадцатый обещает «основы экзамена» — формулировка, за которой может стоять
            что угодно.
          </p>
          <p>
            Практический вывод для одиннадцатиклассника: <strong>берите оба</strong>. Материал
            девятого класса по России входит в ЕГЭ целиком, а одиннадцатый вы всё равно узнаете
            только после активации.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={tatiana} />

      <ArticleSection id="rare" title="Честный расклад по редкому предмету" prose>
        <p>
          Скажу то, что не скажет ни одна школа.{' '}
          <strong>
            География — предмет, где годовой курс за сорок пять тысяч нужен меньше, чем в
            математике, химии или обществознании
          </strong>
          . Структура заданий предсказуема, вторая часть не требует специального алгоритма ответа, а
          основной массив материала — это карта и статистика, которые набиваются самостоятельной
          работой.
        </p>
        <p>
          Отсюда план, к которому мы пришли и который я советую всем, кто пишет мне про географию.{' '}
          <strong>
            Взять бесплатный мини-курс, чтобы закрыть базу по России. Дальше работать по демоверсиям
            ФИПИ. Пробелы, которые останутся, добрать репетитором почасово
          </strong>
          — это выходит дешевле годового курса и точнее по попаданию.
        </p>
        <p>
          А деньги, которые вы на этом сэкономите, разумнее направить в предмет, где формат
          действительно решает. Если у ребёнка география идёт с{' '}
          <Aff to={socialCourse.path}>обществознанием</Aff>, вкладываться стоит в обществознание:
          там вторая часть устроена алгоритмически, и без разбора критериев баллы теряются
          систематически.
        </p>
      </ArticleSection>

      <ArticleSection id="kit" title="Если берёте курс — цена в комплекте">
        <KitTable
          unitPrice={UNIT}
          deepLink={CATALOG_PATH}
          highlight={2}
          cta="Открыть каталог курсов Умскула →"
          caption={`Расчёт от цены годовых курсов на витрине школы — ${rub(UNIT)}. Наличие и цену курса по географии уточняйте в каталоге.`}
        />
        <div className="article-prose mt-6">
          <p>
            География не сдаётся в одиночку: рядом обязательный{' '}
            <Aff to={russianCourse.path}>русский</Aff>, а часто ещё обществознание или математика.
            Комплект даёт скидку автоматически —{' '}
            <strong>
              {rub(two.perSubject)} за предмет вместо {rub(UNIT)}
            </strong>
            .
          </p>
          <p>
            И арифметика, которую стоит проверить на своём наборе:{' '}
            <strong>
              четыре предмета стоят {rub(four.total)}, а три — {rub(three.total)}
            </strong>
            . Больший набор дешевле, потому что на четвёртом предмете скидка прыгает с 15% до 50%.
            Для семьи, у которой география — третий предмет, это прямой повод пересчитать корзину.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={CATALOG_PATH}
        title="Мини-курс по географии России — бесплатно по промокоду"
        body="Код открывает разбор географического положения, природы и населения страны с практикой. Вводится в личном кабинете; наличие и цену годового курса смотрите в каталоге школы."
        cta="Открыть каталог курсов →"
      />

      <ArticleSection id="extras" title="Что можно посмотреть до оплаты">
        <AutoDiscountCards discounts={extras} deepLink={CATALOG_PATH} />
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я посоветовала" prose>
        <p>
          <strong>Взять оба бесплатных кода.</strong> Они ничего не стоят, а материал девятого
          класса по России входит в ЕГЭ целиком — это не «облегчённая версия», это тот же
          кодификатор.
        </p>
        <p>
          <strong>Не покупать годовой курс по географии автоматически.</strong> Предмет
          предсказуемый, и связка «демоверсии ФИПИ плюс репетитор почасово» по нему часто работает
          лучше и дешевле.
        </p>
        <p>
          <strong>Вкладываться в предмет, где формат решает.</strong> Если в наборе есть
          обществознание, химия или профиль — деньги полезнее там. А если предметов всё-таки три,
          посчитайте четыре: в этой школе они дешевле.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
