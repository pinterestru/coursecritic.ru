import type { Metadata } from 'next'

import type { FactItem, FaqItem } from '../../../data/guides/types'
import type { PriceStep } from '../../../data/umschool/types'
import { articleMetadata } from '../../../data/guides/metadata'
import { autoDiscount, codeFor, codesForSubject } from '../../../data/umschool/codes'
import { getUmschoolArticle, otherUmschoolArticles } from '../../../data/umschool/articles'
import { russianCourse } from '../../../data/umschool/courses'
import { yuliya } from '../../../data/umschool/authors'
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
import PriceLadder from '../../../components/articles/PriceLadder'
import PromoHero from '../../../components/articles/PromoHero'

const meta = getUmschoolArticle('umschool-skidka-30-na-dva-goda')!

export const metadata: Metadata = articleMetadata(meta)

const heroCode = codeFor('matematika', 9)!
const discounts = [autoDiscount('years23'), autoDiscount('kit2')]
const afterDiscounts = [autoDiscount('installment'), autoDiscount('tax')]

const UNIT = russianCourse.price
/** Two subjects, one year, ordinary kit discount. */
const perYear = kitPrice(UNIT, 2).total
/** The same two subjects bought two years ahead, at the school's «до 30%». */
const twoYearsList = UNIT * 2 * 2
const twoYearsPrepaid = Math.round((twoYearsList * 70) / 100)
const naiveTwoYears = perYear * 2
const prepaySaving = naiveTwoYears - twoYearsPrepaid

/** Codes a 7–9 grader can redeem free while deciding. */
const earlyCodes = codesForSubject('matematika').filter((c) => c.grade <= 9)

const lead =
  'Сын в девятом классе. Впереди ОГЭ, а за ним ещё два года до ЕГЭ, и когда я открыла прайс, стало ясно: платить придётся не один раз, а трижды. Тогда я и наткнулась на механику, о которой Умскул почти не говорит вслух, — оплату подготовки сразу на два или три года со скидкой до 30%. Процент вдвое выше обычной скидки на комплект. Я эту схему выбрала, но сначала честно расскажу, кому она не подходит, потому что риск здесь совершенно конкретный.'

const facts: FactItem[] = [
  { label: 'Два предмета, год', value: rub(perYear) },
  { label: 'Два года по отдельности', value: rub(naiveTwoYears) },
  { label: 'Два года вперёд, −30%', value: rub(twoYearsPrepaid) },
  { label: 'Разница', value: rub(prepaySaving) },
]

const ladder: PriceStep[] = [
  {
    label: 'Два предмета на два года по прайсу',
    detail: `${rub(UNIT)} × 2 предмета × 2 года`,
    amount: twoYearsList,
    kind: 'base',
  },
  {
    label: 'Скидка за оплату сразу на два года — до 30%',
    detail: 'Считается в корзине при выборе оплаты за два года, промокод не нужен',
    amount: twoYearsPrepaid,
    delta: twoYearsPrepaid - twoYearsList,
    kind: 'discount',
  },
  {
    label: 'Налоговый вычет 13% за первый год',
    detail:
      'Лимит — 110 000 ₽ в год на ребёнка, поэтому крупная предоплата в него может не влезть целиком',
    amount: twoYearsPrepaid - 14_300,
    delta: -14_300,
    kind: 'refund',
  },
  {
    label: 'Итог за два года подготовки',
    detail: `${rub(Math.round((twoYearsPrepaid - 14_300) / 4))} за один предмет в год`,
    amount: twoYearsPrepaid - 14_300,
    kind: 'total',
  },
]

const faq: FaqItem[] = [
  {
    q: 'Как получить скидку 30% в Умскул?',
    a: 'Она включается не промокодом, а способом оплаты. Наберите курсы в разделе «Магазин», перейдите в корзину и выберите оплату сразу за два или за три года — процент подставится сам. Доступна механика ученикам 7–10 классов, то есть тем, у кого до экзамена действительно остаётся больше одного года. Поле промокода при этом остаётся пустым.',
  },
  {
    q: 'Скидка 30% складывается со скидкой на комплект?',
    a: `Школа этого нигде не подтверждает, и мы исходим из того, что не складывается: работает один процент — больший. Считать поэтому надо так: два предмета на два года по прайсу — это ${rub(twoYearsList)}, минус 30% выходит ${rub(twoYearsPrepaid)}. Сравнивать эту сумму нужно не с прайсом, а с тем, во что обошлись бы два отдельных года со скидкой на комплект, — ${rub(naiveTwoYears)}. Реальная выгода — ${rub(prepaySaving)}, а не тридцать процентов от прайса.`,
  },
  {
    q: 'Что будет, если ребёнок передумает сдавать предмет?',
    a: 'Это главный риск схемы, и в девятом классе он высокий: набор предметов на ЕГЭ у половины детей меняется между девятым и одиннадцатым классом. Оплаченный вперёд курс по предмету, который ребёнок сдавать не будет, придётся либо возвращать по условиям договора, либо менять — а при возврате части заказа скидка на оставшееся пересчитывается, и вернётся меньше ожидаемого. Прочитайте раздел договора про возврат до оплаты, а не после.',
  },
  {
    q: 'Есть ли смысл в этой скидке для 10 класса?',
    a: `Есть, и риск там заметно ниже: в десятом классе набор предметов обычно уже устоялся, а до экзамена остаётся ровно два года — как раз под механику. Для десятиклассника это, пожалуй, самая выгодная схема школы: ${rub(prepaySaving)} экономии при почти определённом наборе. Для семиклассника всё наоборот — платить за три года вперёд, когда ребёнок ещё не выбрал профиль, я бы не стала ни при какой скидке.`,
  },
  {
    q: 'Можно ли оплатить два года в рассрочку?',
    a: `Да, и на крупной сумме это, пожалуй, единственный разумный вариант. Рассрочка оформляется после того, как скидка применилась, поэтому платёж считается от сниженной суммы: ${rub(twoYearsPrepaid)} на 12 месяцев — это около ${rub(Math.round(twoYearsPrepaid / 12))} в месяц без переплат. Отдельно в банк идти не нужно, анкета заполняется прямо в заказе.`,
  },
  {
    q: 'Как проверить школу до того, как платить за два года?',
    a: 'Взять бесплатный мини-курс по промокоду. Для девятого класса коды есть по одиннадцати предметам, для седьмого и восьмого — по четырём, и внутри не вводный урок, а полноценный курс с теорией, практикой и пробником. Это единственный способ увидеть платформу, преподавателя и формат проверки домашних заданий до того, как вы вносите шестизначную сумму. Стоит это ноль рублей и один вечер.',
  },
]

export default function Page() {
  return (
    <ArticleShell
      meta={meta}
      lead={lead}
      author={yuliya}
      kicker="Личный опыт · Умскул 2026"
      related={otherUmschoolArticles(meta.slug)}
      relatedTitle="Другие разборы цен Умскула"
    >
      <PromoHero promo={heroCode} deepLink={COUPONS_PATH} autos={discounts} asOf={meta.updated} />

      <ArticleSection prose>
        <p>
          Механика выглядит так: ученик 7–10 класса оплачивает подготовку не на год, а сразу на два
          или три, и получает до 30% скидки.{' '}
          <strong>Это вдвое больше обычной скидки за комплект из двух предметов</strong> и вторая по
          величине скидка школы после «четырёх предметов по цене двух». Промокод для неё не нужен —
          процент подставляется в корзине сам, когда вы выбираете срок оплаты.
        </p>
        <p>
          Но считать её надо аккуратно, потому что тридцать процентов здесь — это процент от прайса,
          а не от той суммы, которую вы заплатили бы иначе.
        </p>
      </ArticleSection>

      <ArticleSection id="numbers" title="Два предмета на два года в цифрах">
        <ExamFacts facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Вторая и третья цифры — это и есть настоящее сравнение.{' '}
            <strong>
              {rub(naiveTwoYears)}, если платить по годам, против {rub(twoYearsPrepaid)}, если
              внести сразу
            </strong>
            . Разница {rub(prepaySaving)} — примерно{' '}
            {Math.round((prepaySaving / naiveTwoYears) * 100)}
            %, а не тридцать. Тридцать процентов школа считает от прайса без всяких скидок, а вы бы
            в любом случае получили как минимум комплектные −15%.
          </p>
          <p>
            Это не упрёк школе — так устроена почти любая скидка «до N%». Просто{' '}
            <strong>сравнивать надо с реальной альтернативой, а не с ценником на витрине</strong>.
            {rub(prepaySaving)} — сумма всё ещё хорошая, и я схему выбрала. Но ожидания стоит
            выровнять до оплаты: посчитайте свой набор{' '}
            <Aff to={russianCourse.path}>на странице курса</Aff> — корзина пересчитывает цену до
            того, как вы выберете срок оплаты.
          </p>
        </div>
      </ArticleSection>

      <AuthorCard author={yuliya} />

      <ArticleSection id="ladder" title="Мой чек за два года">
        <PriceLadder
          steps={ladder}
          caption={`Два предмета на два года подготовки. Цены с umschool.net на 31 августа 2026 года. Вычет посчитан по лимиту 110 000 ₽ в год на одного ребёнка — крупная предоплата в него, скорее всего, не влезет целиком, и это отдельный минус схемы.`}
        />
        <div className="article-prose mt-6">
          <p>
            Обратите внимание на предпоследнюю строку — это неочевидный минус предоплаты.{' '}
            <strong>
              Вычет за обучение ребёнка даётся только при очной форме обучения и ограничен 110 000 ₽
              в год, то есть {rub(14_300)} к возврату
            </strong>
            . Если вы вносите {rub(twoYearsPrepaid)} одним платежом, для налоговой это расход одного
            года, и всё, что выше лимита, из вычета выпадает. Оплата по годам в этом смысле
            выгоднее: два раза по лимиту вместо одного.
          </p>
          <p>
            Считать надо на своих числах, но порядок такой: предоплата за два года дала мне{' '}
            {rub(prepaySaving)} скидки и <strong>отняла часть вычета</strong>. У меня разница всё
            равно осталась в плюсе, но у семьи с четырьмя предметами расклад может перевернуться.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="risk" title="Кому эта схема не подходит" prose>
        <p>
          <strong>Семиклассникам и восьмиклассникам.</strong> Платить за три года вперёд, когда
          ребёнок ещё не выбрал профиль, — это ставка на решение, которое он не принял. Набор
          предметов на ЕГЭ меняется у половины детей между девятым и одиннадцатым классом, и
          оплаченный курс по предмету, который в итоге не сдают, — это не экономия, а списанные
          деньги.
        </p>
        <p>
          <strong>Тем, кто не читал договор про возврат.</strong> Способы оплаты школа описывает{' '}
          <Aff to="umschool.net/sposoby-oplaty/">в отдельном разделе</Aff>, но конкретика — в вашем
          экземпляре договора. При возврате части заказа скидка на оставшееся пересчитывается: вы
          вернули один предмет из двух — и на второй уже нет комплектного процента. Вернётся меньше,
          чем кажется по пропорции. Это нормальная практика, но узнавать о ней лучше до оплаты.
        </p>
        <p>
          <strong>Тем, у кого впритык с деньгами.</strong> Шестизначная предоплата за услугу,
          которая будет оказываться два года, — это доверие школе на два года вперёд. Рассрочка
          снимает нагрузку на бюджет, но не снимает этот риск: платить банку вы будете в любом
          случае.
        </p>
        <p>
          <strong>Кому подходит:</strong> десятиклассникам с определившимся набором предметов. Два
          года до экзамена, состав понятен, {rub(prepaySaving)} экономии — здесь схема работает
          ровно так, как заявлена.
        </p>
      </ArticleSection>

      <CtaBanner
        schoolId="umschool"
        schools={umschoolSchools}
        deepLink={COUPONS_PATH}
        title="Скидка за два года считается в корзине, а не по промокоду"
        body="Наберите курсы в разделе «Магазин», перейдите в корзину и выберите оплату сразу за два или три года — процент подставится сам. Механика доступна ученикам 7–10 классов."
        cta="Посмотреть условия на umschool.net →"
      />

      <ArticleSection id="free" title="Что взять бесплатно, пока решаете">
        <div className="article-prose mb-6">
          <p>
            Прежде чем вносить деньги за два года, я потратила вечер на бесплатные мини-курсы.
            Промокод открывает не вводный урок, а{' '}
            <strong>курс целиком: теория, практика и пробник</strong>. Для седьмого, восьмого и
            девятого класса по математике коды выглядят так:
          </p>
        </div>
        <FreeCourseTable
          deepLink={COUPONS_PATH}
          codes={earlyCodes}
          caption="Коды вводятся по иконке с билетиком в личном кабинете, а не в корзине. Одноразовые, но между собой не конфликтуют — можно забрать курсы по нескольким предметам."
        />
        <div className="article-prose mt-6">
          <p>
            Смысл именно в этом порядке.{' '}
            <strong>
              Сначала посмотреть, как школа объясняет и как проверяет домашние задания, и только
              потом обсуждать двухлетнюю предоплату
            </strong>
            . У нас после мини-курса по математике вопрос о школе снялся, а вот по второму предмету
            мы поменяли решение — и это сэкономило больше, чем любая скидка.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="after" title="Рассрочка и вычет поверх скидки">
        <AutoDiscountCards discounts={afterDiscounts} deepLink={COUPONS_PATH} />
      </ArticleSection>

      <ArticleSection id="verdict" title="Что бы я сделала на вашем месте" prose>
        <p>
          <strong>В девятом классе — не платить за три года.</strong> Два, если набор предметов уже
          понятен, и только по тем предметам, в которых вы уверены. Остальное — обычным годовым
          курсом, его всегда можно добрать.
        </p>
        <p>
          <strong>Считать не проценты, а разницу.</strong> Тридцать процентов от прайса и{' '}
          {rub(prepaySaving)} реальной экономии — это разные величины, и вторая честнее.
        </p>
        <p>
          <strong>Проверить вычет на своих суммах.</strong> Если предоплата выходит сильно больше
          110 000 ₽, часть возврата вы теряете, и схема с оплатой по годам может оказаться не хуже.
        </p>
        <p>
          И перед всем этим —{' '}
          <Aff to={COUPONS_PATH}>забрать бесплатный мини-курс по своему предмету</Aff>. Он стоит
          ноль рублей и отвечает на единственный вопрос, ради которого стоит всё считать: подходит
          вам эта школа или нет.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
