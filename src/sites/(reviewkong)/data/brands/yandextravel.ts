/**
 * Brand page data for Yandex Travel (route: /brands/yandextravel).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://travel.yandex.ru/journal/yandeks-puteshestviya-vozvrashchayut-do-20-procentov-ballami-plyusa-za-oplatu-otelya/
 *     and https://yandex.ru/support/travel/ru/yandex-plus.html — the Yandex
 *     Plus cashback tiers (up to 5%/10%, up to 20% in promotions)
 *   - Search-indexed coverage of travel.yandex.ru’s own pages (direct fetch was
 *     blocked by a bot-check on the live site) — launch year, room/property
 *     count, hotel/rail/air scope, the Business Trips product
 *   - https://www.themoscowtimes.com/2024/01/23/tech-giant-yandex-gets-new-russian-owner-ahead-of-restructuring-a83817
 *     — the 2024 sale of the Russian business to a Russian investor consortium
 *     and the separation from the international entity (now Nebius Group)
 *   - Payment-restriction reporting (russiahandbook.com, russiable.com) on
 *     foreign Visa/Mastercard cards not working on Russian platforms since 2022
 *
 * ⚠️ No public Trustpilot/App Store rating could be verified for this specific
 * service, so none is published below — do not add one without opening the
 * source. Prices, cashback rates and terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const yandextravel: BrandPage = {
  slug: 'yandextravel',
  providerId: 'yandextravel',
  metaTitle: 'Yandex Travel review 2026 — Russia-only booking, explained',
  metaDescription:
    'An independent Yandex Travel review: what it books, the Yandex Plus cashback, and the restriction that rules it out for anyone without a Russian bank card.',
  intro:
    'Yandex Travel books hotels, rail and air tickets across Russia and, for hotels, worldwide — but it is a Russian-market service through and through. Since Western payment networks left Russia in 2022, paying on it needs a MIR card or a Russian bank account; a foreign-issued Visa or Mastercard will not work. Read that as the headline before anything else on this page: this is not a booking option for a traveller without Russian payment infrastructure.',
  about: [
    'Yandex Travel launched in 2015 as part of Yandex, the Russian search and internet-services group. Following Yandex’s 2024 restructuring, the Russian business — including Yandex Travel — was sold to a consortium of Russian investors and now operates as a standalone domestic company, separate from the international entity that rebranded as Nebius Group. That split matters here: Yandex Travel is squarely part of the Russian side of that division.',
    'The service lists hotel and short-let accommodation in Russia and abroad, alongside rail tickets and domestic and international flights, and folds in a Business Trips product for booking hotels, tickets, taxis and food delivery for work travel in one account. Search-indexed listings put the accommodation inventory above a million rooms across hotels, sanatoriums, apartments and guesthouses.',
    'Payment and loyalty run through Yandex’s own ecosystem. Bookings earn cashback as Yandex Plus loyalty points rather than cash, and the site prices in Russian rubles. Since 2022, Visa and Mastercard cards issued outside Russia do not work on Russian platforms including this one — a MIR card or a Russian bank account is required to pay.',
  ],
  facts: [
    { label: 'Launched', value: '2015' },
    { label: 'Market', value: 'Russia only' },
    { label: 'Currency', value: 'Russian ruble (RUB)' },
    { label: 'Payment', value: 'MIR / Russian cards only' },
  ],
  plans: {
    title: 'How the pricing and cashback work',
    note: 'There is no subscription — the only tiered element is the Yandex Plus loyalty cashback, and it is paid in points redeemable inside the Yandex ecosystem, not cash.',
    items: [
      {
        name: 'Standard hotel booking',
        price: 'Market rate, priced in RUB',
        detail:
          'Base Yandex Plus tier earns up to 5% cashback in loyalty points on hotel bookings, credited within days of checkout.',
        pick: true,
      },
      {
        name: 'Higher Yandex Plus tier',
        price: 'Market rate, priced in RUB',
        detail:
          'The upper loyalty tier lifts hotel cashback to up to 10% in points, capped per booking.',
      },
      {
        name: 'Promotional hotel offers',
        price: 'Market rate, priced in RUB',
        detail:
          'Selected promotions advertise cashback as high as 20% in points; these are time-limited and property-specific, not the standard rate.',
      },
    ],
  },
  pros: [
    {
      title: 'One account for hotels, rail and air inside Russia',
      body: 'Combining domestic accommodation, train and flight booking in a single Russian-language service is genuinely convenient for someone travelling within the country.',
    },
    {
      title: 'Cashback that compounds with everyday Yandex use',
      body: 'For an existing Yandex Plus subscriber, hotel cashback in loyalty points stacks with the rest of the ecosystem — rides, food delivery, streaming — rather than sitting as an isolated perk.',
    },
    {
      title: 'A dedicated business-travel workflow',
      body: 'The Business Trips product bundles hotels, tickets and local transport for work travel into one booking flow, which is more built-out than a bolt-on corporate feature.',
    },
    {
      title: 'Large accommodation inventory for the market it serves',
      body: 'Search-indexed listings put room and property coverage above a million, spanning hotel chains down to guesthouses and glamping — a genuinely deep catalogue for Russian domestic travel.',
    },
  ],
  cons: [
    {
      title: 'Unusable without a Russian payment method',
      body: 'Foreign-issued Visa and Mastercard cards do not work on Russian platforms since 2022. Booking requires a MIR card or a Russian bank account, which rules out the overwhelming majority of international travellers outright.',
    },
    {
      title: 'No independently verifiable public rating',
      body: 'No Trustpilot or comparable third-party aggregator score for this specific service could be confirmed from outside Russia, so this page cannot cite one. Judge it on the policy detail above, not a star rating.',
    },
    {
      title: 'Cashback pays out in points, not cash',
      body: 'The advertised 5–20% cashback is credited as Yandex Plus points, useful only if you already spend inside the Yandex ecosystem — it is not a cash discount on the booking.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 4,
      note: 'strong domestic catalogue and cashback, but the score reflects a Russia-only service — no verifiable independent rating exists for it',
    },
  ],
  bestFor: [
    'Travellers physically in Russia with a MIR card or Russian bank account',
    'Existing Yandex Plus subscribers who want hotel cashback to stack with the rest of the ecosystem',
    'Domestic Russian trips combining hotels, rail and air in one booking',
    'Business travellers inside Russia who want hotels and transport in one account',
  ],
  notFor: [
    'Anyone without a MIR card or Russian bank account — foreign Visa/Mastercard will not work',
    'International travellers looking for a single cross-border booking platform',
    'Anyone who wants a cash refund on loyalty cashback rather than in-ecosystem points',
  ],
  faq: [
    {
      q: 'Can I book on Yandex Travel with a foreign credit card?',
      a: 'No. Since Western payment networks restricted operations in Russia in 2022, foreign-issued Visa and Mastercard cards do not work on Russian platforms, Yandex Travel included. Payment needs a MIR card or a Russian bank account.',
    },
    {
      q: 'Does Yandex Travel book hotels outside Russia?',
      a: 'The hotel search includes listings abroad as well as domestic Russian properties, but the payment restriction still applies regardless of where the hotel is located — you still need a Russian payment method to complete the booking.',
    },
    {
      q: 'What is Yandex Plus cashback worth on a hotel booking?',
      a: 'The base loyalty tier earns up to 5% back in Yandex Plus points, rising to up to 10% at the higher tier, with some promotions advertising as much as 20%. It is credited in points usable across the Yandex ecosystem, not as cash.',
    },
    {
      q: 'Is Yandex Travel still connected to Yandex’s international business?',
      a: 'No. Following Yandex’s 2024 restructuring, the Russian business — including Yandex Travel — was sold to a Russian investor consortium and now operates separately from the international entity, which rebranded as Nebius Group.',
    },
    {
      q: 'What does Yandex Travel’s Business Trips product do?',
      a: 'It lets a company book hotels, rail and air tickets plus local transport like taxis and food delivery for work trips through one account, aimed at simplifying expense tracking for domestic Russian business travel.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'travel.yandex.ru',
}
