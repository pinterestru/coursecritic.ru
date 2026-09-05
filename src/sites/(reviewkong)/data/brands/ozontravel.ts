/**
 * Brand page data for Ozon Travel (route: /brands/ozontravel).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://ru.wikipedia.org/wiki/Ozon_Travel — launch date (2009), the 2010
 *     out-of-beta relaunch, launch-era vs. current scale (hotel count, airline
 *     partner count)
 *   - https://docs.ozon.ru/ozon-travel/miles/ and
 *     https://docs.ozon.ru/legal/terms-of-use/ozon-travel/miles-programme/ —
 *     the Ozon Miles earn/redeem rates and the 180-day expiry
 *   - https://docs.ozon.ru/common/ozon-travel/avia/obmen-i-vozvrat/kak-vernut-bilet/
 *     and https://docs.ozon.ru/common/ozon-travel/hotel/edit-cancel-booking/ —
 *     ticket refund deductions and non-refundable hotel-rate cancellation terms
 *   - https://en.wikipedia.org/wiki/Ozon and investor-relations coverage
 *     (investing.com, MOEX ticker OZON) — parent company, listing, ownership
 *   - Payment-restriction reporting (russiahandbook.com) on foreign Visa/
 *     Mastercard cards not working on Russian platforms since 2022
 *
 * ⚠️ No public Trustpilot/App Store rating could be verified for this specific
 * service, so none is published below — do not add one without opening the
 * source. Prices, mileage rates and terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ozontravel: BrandPage = {
  slug: 'ozontravel',
  providerId: 'ozontravel',
  metaTitle: 'Ozon Travel review 2026 — Russia-only, miles explained',
  metaDescription:
    'An independent Ozon Travel review: what it books, how the Ozon Miles cashback works, and why a foreign payment card rules most international users out.',
  intro:
    'Ozon Travel is the travel-booking arm of Ozon, one of Russia’s largest e-commerce marketplaces, listed on the Moscow Exchange. It books rail, air and hotel stays and pays a small cashback in Ozon Miles rather than points or cash. The market restriction is the fact that matters most here: it prices in rubles and, like other Russian platforms, has been unusable with foreign-issued Visa or Mastercard cards since 2022 — a Russian card or Ozon-linked account is required to pay.',
  about: [
    'Ozon Travel began as a beta booking product in April 2009 and relaunched as a full travel storefront under the Ozon marketplace in February 2010. At launch it listed around 50,000 hotels worldwide and airline partners covering roughly 100 domestic and 460 international routes; both figures have grown substantially since, with current listings citing more than 2 million accommodation options across some 170 countries and partnerships with more than 800 airlines.',
    'The service sits inside Ozon, the Russian e-commerce group listed on the Moscow Exchange under the ticker OZON, with AFK Sistema and Baring Vostok among its largest shareholders. That parentage is the whole commercial logic of the product: booking through Ozon Travel earns Ozon Miles that behave like the marketplace’s own loyalty currency, redeemable against future bookings when paying via an Ozon Card.',
    'Coverage spans rail tickets, domestic and international flights, and hotel or short-let accommodation, bought in a single account alongside whatever else a customer buys on the main Ozon marketplace. Support runs a round-the-clock chat, including a bot that handles ticket returns, hotel-booking cancellations and refund calculations without needing to escalate to a human agent for routine requests.',
  ],
  facts: [
    { label: 'Launched', value: '2009 (relaunched 2010)' },
    { label: 'Market', value: 'Russia only' },
    { label: 'Currency', value: 'Russian ruble (RUB)' },
    { label: 'Payment', value: 'Russian card / Ozon Card' },
  ],
  plans: {
    title: 'How the pricing and miles work',
    note: 'There is no subscription tier for booking itself — the variable is the Ozon Miles cashback rate, which depends on loyalty status and how the miles are later redeemed.',
    items: [
      {
        name: 'Standard booking',
        price: 'Market rate, priced in RUB',
        detail:
          'Base cashback is 1% of the order value in Ozon Miles, credited within one business day once the order is confirmed.',
        pick: true,
      },
      {
        name: 'Ozon Travel Ultra status',
        price: 'Market rate, priced in RUB',
        detail:
          'Higher-tier customers earn 2% cashback in miles instead of 1%, and can redeem a larger share of an order in miles when paying with an Ozon Card.',
      },
      {
        name: 'Miles redemption',
        price: 'Up to 2–10% of order value',
        detail:
          'Redemption caps vary by product: up to 2% on Pobeda airline fares, up to 5% on other airlines (10% for Ultra status), and only when paying via Ozon Card. Miles expire 180 days after being earned.',
      },
    ],
  },
  pros: [
    {
      title: 'Rail, air and hotels in one Ozon account',
      body: 'Booking travel alongside everyday marketplace purchases in a single login and single loyalty currency is a genuine convenience for an existing Ozon customer.',
    },
    {
      title: 'A large and still-growing catalogue',
      body: 'From roughly 50,000 hotels and a few hundred airline routes at launch to a listed inventory above 2 million accommodation options and 800-plus airline partnerships today — real, documented growth rather than a static offer.',
    },
    {
      title: 'Automated support for routine requests',
      body: 'The chat bot handles ticket returns and hotel-cancellation refund calculations directly, which is faster than queuing for a human agent for a straightforward refund.',
    },
    {
      title: 'Backed by a listed, well-capitalised parent',
      body: 'Ozon’s Moscow Exchange listing and institutional shareholders (AFK Sistema, Baring Vostok) give the travel arm more financial backing than a standalone regional OTA typically has.',
    },
  ],
  cons: [
    {
      title: 'Unusable without a Russian payment method',
      body: 'Foreign-issued Visa and Mastercard cards do not work on Russian platforms since 2022. Booking and redeeming miles both assume a Russian card or an Ozon Card, which rules out the large majority of international travellers.',
    },
    {
      title: 'Miles redemption is narrow and time-limited',
      body: 'Miles can only be spent through an Ozon Card, redemption caps differ sharply by airline (as low as 2% on budget carrier Pobeda), and unused miles expire after 180 days — easy to lose if a customer does not book again in time.',
    },
    {
      title: 'No independently verifiable public rating',
      body: 'No Trustpilot or comparable third-party aggregator score for this specific service could be confirmed from outside Russia, so this page cannot cite one. Judge it on the policy detail above, not a star rating.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'strong catalogue growth and automated support, but the score reflects a Russia-only service — no verifiable independent rating exists for it',
    },
  ],
  bestFor: [
    'Existing Ozon marketplace customers who want travel bookings on the same loyalty account',
    'Travellers physically in Russia with a Russian bank card or Ozon Card',
    'Domestic Russian trips combining rail, flights and hotels in one purchase',
    'Buyers who want automated chat support for routine ticket or hotel refunds',
  ],
  notFor: [
    'Anyone without a Russian card or Ozon Card — foreign Visa/Mastercard will not work',
    'International travellers looking for a single cross-border booking platform',
    'Anyone planning to redeem a large share of a fare in miles on a low-cost carrier like Pobeda, where the redemption cap is lowest',
  ],
  faq: [
    {
      q: 'Can I book on Ozon Travel with a foreign credit card?',
      a: 'No. Foreign-issued Visa and Mastercard cards have not worked on Russian platforms, Ozon included, since Western payment networks restricted operations there in 2022. A Russian bank card or Ozon Card is required.',
    },
    {
      q: 'How do Ozon Miles work on a travel booking?',
      a: 'Standard bookings earn 1% of the order value back in miles, rising to 2% with Ozon Travel Ultra status. Miles can only be spent by paying with an Ozon Card, redemption caps vary by airline, and unused miles expire 180 days after being earned.',
    },
    {
      q: 'What happens if I cancel a non-refundable hotel booking?',
      a: 'Ozon Travel’s own policy states that a non-refundable rate keeps the full order cost on cancellation. Refundable rates depend on the property’s own cancellation window, so check the specific rate’s terms before booking.',
    },
    {
      q: 'Are flight tickets fully refundable on Ozon Travel?',
      a: 'It depends on the airline fare, not Ozon Travel. A voluntary return deducts the airline’s own fare penalty (if the ticket has one) plus Ozon Travel’s booking and refund-processing fees. Schedule changes, delays or cancellations by the airline qualify for a fuller refund or a same-airline exchange.',
    },
    {
      q: 'Is Ozon Travel part of the main Ozon marketplace account?',
      a: 'Yes. Bookings run through the same Ozon account and loyalty programme as marketplace shopping, and Ozon Miles earned or spent on travel sit in the same balance as miles from other Ozon purchases.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ozon.ru',
}
