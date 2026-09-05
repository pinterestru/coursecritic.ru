import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { biologyCourse, chemistryCourse } from '../../../data/umschool/courses'
import { olga } from '../../../data/umschool/authors'
import { umschoolSchools } from '../../../data/umschool/school'
import { COUPONS_PATH, kitPrice, rub } from '../../../data/umschool/types'
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

const meta = getUmschoolArticle('umschool-himiya-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = chemistryCourse
const codes = codesForSubject('himiya')
const heroCode = codeFor('himiya', 11)!
const grade10 = codeFor('himiya', 10)!
const oge = codeFor('himiya', 9)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const extras = [autoDiscount('free-lesson'), autoDiscount('installment')]

const two = kitPrice(course.price, 2)
const three = kitPrice(course.price, 3)
const four = kitPrice(course.price, 4)

const lead =
  'Химия — предмет, где разрыв между «понимаю» и «решаю» самый большой из всех школьных. Можно уверенно рассказать про степень окисления и не собрать электронный баланс. Дочь готовилась к медицинскому, химию мы брали в паре с биологией, и я довольно быстро выяснила две вещи: промокод школы даёт не скидку, а бесплатный курс, а курс с Богданом Чагиным — тот самый, вокруг которого крутятся отзывы про 90+. Разбираю и то и другое.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С биологией в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Оценка курса', value: `${course.rating} · ${course.reviews.toLocaleString('ru-RU')}` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на химию?',
    a: `Три: ${heroCode.code} для ЕГЭ в 11 классе, ${grade10.code} для 10 класса и ${oge.code} для ОГЭ в девятом. Все они открывают бесплатный мини-курс своего уровня и активируются через билетик в кабинете; корзина для них не подходит. На цену годового курса они не влияют: скидку считает корзина от количества предметов, и код для неё не нужен.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по химии?',
    a: `В одиннадцатом классе — ${heroCode.inside}. Тема узкая, но базовая: без уверенной классификации не пойдут ни свойства, ни цепочки превращений. В десятом классе курс шире — ${grade10.inside}. А самый практичный из трёх девятый: ${oge.inside}, то есть ровно те расчётные навыки, на которых теряют баллы и в ОГЭ, и потом в ЕГЭ.`,
  },
  {
    q: 'Сколько стоит курс по химии в Умскул?',
    a: `${rub(course.price)} за год, зачёркнутая цена ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Столько же стоит любой другой годовой курс школы. В паре с биологией — ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет.`,
  },
  {
    q: 'Кто ведёт курс по химии?',
    a: 'Богдан Чагин. В отзывах его называют причиной результатов за 90, но обратите внимание на формулировку: чаще всего хвалят именно мастер-группу, а не годовой курс. Это разные продукты с разным форматом и разной ценой. Прежде чем ориентироваться на чужой результат, уточните, о каком именно формате идёт речь в отзыве.',
  },
  {
    q: 'Чем мастер-группа отличается от годового курса?',
    a: 'Годовой курс — это массовый поток с вебинарами, куратором в чате и проверкой домашних заданий. Мастер-группа — меньший формат с более плотной работой, и стоит она иначе. Отзывы про 96 баллов, которые вы встретите по химии, чаще относятся именно к ней. Ничего плохого в годовом курсе это не говорит, но ожидания стоит выравнивать: покупая поток, вы покупаете поток.',
  },
  {
    q: 'Химию можно брать без биологии?',
    a: `Можно, но почти никто так не делает: химия сдаётся на медицинские, фармацевтические и химико-технологические направления, где биология идёт следом. Практически это означает комплект и автоматическую скидку: два предмета — ${rub(two.perSubject)} за каждый вместо ${rub(course.price)}. А если предметов набирается три, стоит посчитать четыре: они в этой школе дешевле.`,
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={olga}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Начну с того, что сбивает всех.{' '}
          <strong>Промокод по химии — не скидка, а бесплатный мини-курс.</strong> Вводится он по
          иконке с билетиком в личном кабинете, и цену годового курса не двигает. Скидку на платное
          Умскул считает в корзине сам, от количества предметов, — код для неё не нужен вовсе.
        </p>
        <p>
          Механики независимые, так что получить можно обе. Ниже — что даёт код и во что обходится
          курс.
        </p>
        <p>
          Полный список механик — и кодов, и скидок без кода —{' '}
          <Link href="/articles/umschool-promokody">в общем разборе</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Химия в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Три кода: ОГЭ, 10 и 11 класс">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Программы разные — берите код своего класса. Коды одноразовые, но не конфликтуют между собой: биологию можно забрать в тот же вечер."
        />
        <div className="article-prose mt-6">
          <p>
            Если бы я выбирала один код для человека, который уже в одиннадцатом, я бы всё равно
            советовала посмотреть девятый.{' '}
            <strong>
              Массовая доля, расчёт по уравнению реакции, степень окисления и метод электронного
              баланса — это расчётная база, на которой теряют баллы и в ОГЭ, и потом в ЕГЭ
            </strong>
            . Курс за одиннадцатый класс даёт классификацию неорганических веществ: тема нужная, но
            узкая.
          </p>
          <p>
            И общий принцип по химии, который я вынесла из этого года:{' '}
            <strong>провалы почти никогда не в теории, а в счёте и в оформлении</strong>. Ребёнок
            понимает механизм реакции и теряет балл на коэффициентах. Смотрите, сколько в курсе
            расчётной практики, а не сколько часов лекций.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={olga} />

      <ArticleSection id="format" title="Про отзывы на 96 баллов и что за ними стоит" prose>
        <p>
          По химии вам обязательно попадётся отзыв в таком духе: «очень довольна мастер-группой с
          Богданом Чагиным, занималась с августа — сдала ЕГЭ на 96 баллов, о которых не мечтала».
          Отзыв настоящий и приятный, но <strong>обратите внимание на слово «мастер-группа»</strong>
          .
        </p>
        <p>
          <strong>
            Мастер-группа и годовой курс — это разные продукты школы, с разным форматом и разной
            ценой
          </strong>
          . Годовой курс — массовый поток: вебинары, куратор в чате, проверка домашних заданий.
          Мастер-группа — меньший формат с более плотной работой. Результаты за 90+, которыми
          пестрят отзывы по химии, чаще относятся к ней.
        </p>
        <p>
          Это не претензия к школе и не повод отказываться от{' '}
          <Aff to={course.path}>годового курса</Aff> — просто{' '}
          <strong>ожидания стоит выровнять до оплаты</strong>. Покупая поток, вы покупаете поток: он
          уверенно доводит до крепких 75–85, а верхний край берётся объёмом самостоятельного
          решения. Оценка курса на сайте школы — {course.rating} при{' '}
          {course.reviews.toLocaleString('ru-RU')} оценках, но это площадка самой школы.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Химия и биология: цена в паре">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. Химия почти всегда идёт с биологией — медицинские и фармацевтические направления требуют оба.`}
        />
        <div className="article-prose mt-6">
          <p>
            Мы брали химию вместе с <Aff to={biologyCourse.path}>биологией у Жанны Казанской</Aff> —
            это {rub(two.total)} за оба, {rub(two.perSubject)} за предмет.
          </p>
          <p>
            Но если считать честный медицинский набор — русский, химия, биология, —{' '}
            <strong>
              получается три предмета за {rub(three.total)}, тогда как четыре стоят{' '}
              {rub(four.total)}
            </strong>
            . Разница {rub(three.total - four.total)} в пользу большего набора, потому что на
            четвёртом предмете скидка прыгает с 15% до 50%. Проверьте это в корзине на своём наборе:
            расчёт занимает минуту.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по химии с Богданом Чагиным"
        body="Промокод открывает бесплатный мини-курс в личном кабинете. Скидка на годовой курс к промокоду отношения не имеет — она считается в корзине от количества предметов."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="extras" title="Что посмотреть и как заплатить">
        <AutoDiscountCards discounts={extras} deepLink={course.path} />
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я посоветовала" prose>
        <p>
          <strong>Взять бесплатный код и посмотреть на расчётную часть.</strong> Не на то, как
          объясняют теорию, — с теорией у всех хорошо. На то, как разбирают решение задачи и
          требования к записи. В химии баллы теряются именно там.
        </p>
        <p>
          <strong>Уточнять формат в отзывах.</strong> Мастер-группа и годовой курс — разные вещи, и
          самые впечатляющие результаты по химии обычно про первую.
        </p>
        <p>
          <strong>Считать набор на четыре предмета.</strong> Медицинский набор трёхпредметный, а три
          предмета в этой школе — худшая из возможных покупок: дороже четырёх при меньшем объёме.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
