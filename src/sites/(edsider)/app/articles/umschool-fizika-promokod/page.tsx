import type { Metadata } from 'next'
import Link from 'next/link'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { mathCourse, physicsCourse } from '../../../data/umschool/courses'
import { nikita } from '../../../data/umschool/authors'
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

const meta = getUmschoolArticle('umschool-fizika-promokod')!

export const metadata: Metadata = articleMetadata(meta)

const course = physicsCourse
const codes = codesForSubject('fizika')
const heroCode = codeFor('fizika', 11)!
const oge = codeFor('fizika', 9)!
const kitDiscounts = [autoDiscount('kit4'), autoDiscount('kit2')]
const tryDiscounts = [autoDiscount('free-lesson'), autoDiscount('umcoins')]

const two = kitPrice(course.price, 2)
const four = kitPrice(course.price, 4)

const lead =
  'Я сдавал физику и профиль, поступил на прикладную физику. Курс мне оплачивали родители, но выбирал я сам, и решающим оказалось не сравнение программ, а три недели в бесплатном мини-курсе — там сразу стало видно, чей формат мне заходит, а чей нет. Промокод, который его открывает, ничего не стоит, и это единственная вещь в подготовке, которую я советую сделать сегодня же, независимо от того, будете вы потом платить или нет.'

const facts: FactItem[] = [
  { label: 'Годовой курс', value: rub(course.price) },
  { label: 'С математикой в паре', value: `${rub(two.perSubject)} / шт` },
  { label: 'Мини-курс по коду', value: '0 ₽' },
  { label: 'Кодов по физике', value: `${codes.length} — с 7 по 11 класс` },
]

const faq: FaqItem[] = [
  {
    q: 'Какой промокод Умскул на физику?',
    a: `Пять, по одному на класс с седьмого по одиннадцатый. Для ЕГЭ в 11 классе — ${heroCode.code}, для 10 класса — PHYS10_SITEPROMO1_CC, для ОГЭ в девятом — ${oge.code}. Каждый открывает бесплатный мини-курс своего уровня и активируется в кабинете, в окне под значком билета, а не в корзине. Цену платного курса они не меняют.`,
  },
  {
    q: 'Что внутри бесплатного мини-курса по физике?',
    a: `В одиннадцатом классе разбирают ${heroCode.inside} — школа не раскрывает какие именно, узнаёте при активации. В десятом дают более полезную вещь для старта: ${codeFor('fizika', 10)!.inside}. А самый насыщенный код здесь девятый: ${oge.inside}. Внутри везде теория, практика и пробник.`,
  },
  {
    q: 'Сколько стоит курс по физике в Умскул?',
    a: `${rub(course.price)} за год, на витрине зачёркнуто ${rub(course.priceOld)}, в рассрочку ${rub(course.perMonth)} в месяц. Цена такая же, как у любого другого годового курса школы. В паре с профильной математикой — ${rub(two.total)} за оба, то есть ${rub(two.perSubject)} за предмет.`,
  },
  {
    q: 'Можно ли готовиться к физике без математики?',
    a: 'Формально да, практически — нет. Вторая часть ЕГЭ по физике — это задачи, и половина потерянных там баллов уходит не на физику, а на алгебру: не свёл систему, потерял корень, запутался в степенях. Поэтому физику почти всегда берут в паре с профилем, и это удобно совпадает со скидкой за комплект. Если бюджет позволяет только один курс, а математика хромает, я бы начал с математики.',
  },
  {
    q: 'Хватит ли курса на 90+ по физике?',
    a: 'Курс даёт разбор задач второй части и систему, но 90+ по физике — это объём самостоятельного решения, который никакой формат не заменит. У меня результат вырос там, где я решал сам и приносил разбирать ошибки, а не там, где смотрел вебинары. Массовый курс хорошо доводит с 50 до 75 и заметно хуже — с 85 до 95: на верхнем крае нужна адресная работа с вашими конкретными ошибками.',
  },
  {
    q: 'Что делать, если преподаватель не подошёл?',
    a: 'Понять это лучше до оплаты, и ровно для этого существует бесплатный мини-курс: он идёт на той же платформе и в той же манере, что и годовой. Я потратил на два таких курса по разным предметам три недели и один из них после этого не купил. Кроме мини-курса, у школы есть бесплатный вводный урок — берите оба, они не конфликтуют и вместе дают довольно полную картину.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={nikita}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы Умскула"
    >
      <PromoHero promo={heroCode} deepLink={course.path} autos={kitDiscounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Сразу разберусь с главным недоразумением, из-за которого я сам потерял вечер.{' '}
          <strong>Промокод по физике — это не скидка.</strong> Он открывает отдельный бесплатный
          мини-курс и вводится в личном кабинете, по иконке с билетиком. В корзину его вставлять
          бесполезно: там он не примется, и вы решите, что код мёртвый.
        </p>
        <p>
          Скидка на платный курс у Умскула работает совсем иначе — она считается в корзине сама, от
          количества предметов, и код для неё не нужен вообще. То есть{' '}
          <strong>бесплатный курс и скидка — это две разные, независимые вещи</strong>, и получить
          можно обе.
        </p>
        <p>
          Если интересно, как та же механика работает на других предметах, —{' '}
          <Link href="/articles/umschool-promokody">общий разбор кодов и скидок</Link> лежит
          отдельно.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Физика в Умскул: цифры">
        <ExamFacts facts={facts} />
      </ArticleSection>

      <ArticleSection id="codes" title="Пять кодов по физике">
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={codes}
          caption="Код своего класса — программы разные. Одноразовые, привязываются к аккаунту, но между собой не конфликтуют: можно взять и физику, и математику."
        />
        <div className="article-prose mt-6">
          <p>
            Если выбирать, с какого начинать, я бы советовал не одиннадцатый.{' '}
            <strong>
              В коде для 11 класса школа не раскрывает темы — обещаны «три темы, которые встречаются
              чаще всего», и что там окажется, вы узнаете после активации
            </strong>
            . А код за десятый класс честно перечисляет содержимое: формулы, математический минимум
            и равномерное движение. Для старта это полезнее.
          </p>
          <p>
            Самый плотный курс тут девятый, для ОГЭ: {oge.inside}. По объёму он ближе всего к
            настоящему мини-курсу, и если вы в девятом — берите не раздумывая.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={nikita} />

      <ArticleSection id="why-free" title="Зачем я советую начать с бесплатного" prose>
        <p>
          Скажу неприятную вещь про выбор курсов.{' '}
          <strong>
            Программы у всех школ описаны примерно одинаково, и по лендингу отличить хороший курс от
            среднего невозможно
          </strong>
          . Разница — в том, как человек объясняет, и это выясняется на первом же занятии, а не в
          списке тем.
        </p>
        <p>
          Мини-курс по промокоду идёт{' '}
          <strong>на той же платформе, с тем же интерфейсом и в той же манере</strong>, что и
          платный. Три недели — и у меня было готовое решение по обоим предметам. По физике я взял
          годовой курс, по второму предмету — не стал, хотя изначально собирался.
        </p>
        <p>
          Стоило это ноль рублей. Единственная плата — звонки: после регистрации на платформе с вами
          свяжутся, и не один раз.{' '}
          <strong>
            Это честный обмен, но лучше знать о нём заранее и завести аккаунт на тот номер, который
            не жалко
          </strong>
          .
        </p>
      </ArticleSection>

      <ArticleSection id="course" title="Годовой курс: что за него платят" prose>
        <p>
          <Aff to={course.path}>Годовой курс ЕГЭ по физике</Aff> ведёт{' '}
          <strong>{course.teacher}</strong> — {course.teacherNote.toLowerCase()}. Это существенное
          отличие: физику часто преподают как набор формул под первую часть, а баллы наверху берутся
          задачами.
        </p>
        <p>
          Что реально работало у меня:{' '}
          <strong>
            куратор в чате, который отвечает за пять минут, и кнопка «Непонятно» прямо во время
            занятия
          </strong>
          . Звучит как маркетинг, но на потоке в несколько тысяч человек это единственный способ не
          потеряться. Что работало хуже — проверка домашних заданий: одни разборы подробные, другие
          формальные. На это жалуются в отзывах, и жалуются справедливо.
        </p>
        <p>
          И честная граница формата.{' '}
          <strong>Массовый курс отлично двигает с 50 до 75 и заметно хуже — с 85 до 95</strong>. На
          верхнем крае нужна работа именно с вашими ошибками, а не с типовыми, и здесь либо
          репетитор, либо очень много самостоятельного решения. Я выбрал второе.
        </p>
      </ArticleSection>

      <ArticleSection id="pair" title="Физика идёт в паре — и это дешевле">
        <KitTable
          unitPrice={course.price}
          deepLink={course.path}
          highlight={2}
          caption={`Расчёт от цены годового курса ${rub(course.price)}. Физику почти никогда не сдают в одиночку: на технических направлениях она идёт вместе с профильной математикой.`}
        />
        <div className="article-prose mt-6">
          <p>
            Физика плюс <Aff to={mathCourse.path}>профильная математика</Aff> — самая частая пара на
            технических направлениях, и она автоматически даёт скидку за комплект:{' '}
            {rub(two.perSubject)} за предмет вместо {rub(course.price)}.
          </p>
          <p>
            И арифметика, которая ломает интуицию:{' '}
            <strong>
              четыре предмета стоят дешевле трёх — {rub(four.total)} против{' '}
              {rub(kitPrice(course.price, 3).total)}
            </strong>
            , потому что на четвёртом скидка прыгает с 15% до 50%. Если ваш набор — три предмета,
            имеет смысл добавить четвёртый.
          </p>
        </div>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={course.path}
        title="Годовой курс ЕГЭ по физике с Максом Теслой"
        body="Промокод открывает бесплатный мини-курс в личном кабинете, а скидка на годовой курс считается в корзине сама. Одно другому не мешает — можно взять и то и другое."
        cta="Посмотреть цену курса →"
      />

      <ArticleSection id="try" title="Что ещё можно посмотреть бесплатно">
        <AutoDiscountCards discounts={tryDiscounts} deepLink={course.path} />
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я сказал себе год назад" prose>
        <p>
          <strong>Забери бесплатные мини-курсы по обоим предметам в первый же день.</strong> Не
          через месяц сравнения лендингов, а сразу: они ничего не стоят и отвечают на единственный
          вопрос, который лендинги не закрывают.
        </p>
        <p>
          <strong>Не покупай физику без математики.</strong> Половина потерянных на второй части
          баллов — это алгебра, а не физика. Если денег хватает на один курс, а математика хромает,
          бери математику.
        </p>
        <p>
          <strong>Решай сам и приноси разбирать.</strong> Ни один курс — ни за сорок пять тысяч, ни
          за сто — не поднимет балл, если решать за тебя. Всё, что курс может дать, — это система и
          человек, который объяснит, почему у тебя не сошлось.{' '}
          <Aff to={course.path}>Посмотри программу</Aff> и считай не вебинары, а количество задач.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
