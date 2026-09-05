/**
 * Brand page data for KKday (route: /brands/kkday).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/KKday — founding year, founder, headquarters,
 *     funding history, country/catalogue scale, Rezio/FineDayClub/ActivityJapan
 *   - https://help.kkday.com/en/support/solutions/16000059981 — cancellation
 *     policy: set per product, refund exceptions can require supporting proof
 *   - https://www.kkday.com/static/en/appdownload/ and related help pages —
 *     instant vs manual confirmation timing
 *   - https://www.trustpilot.com/review/www.kkday.com — TrustScore and review
 *     volume, including recurring complaints about post-payment cancellations
 *   - https://apps.apple.com/us/app/kkday-your-travel-companion/id1248267356 —
 *     App Store rating and ratings count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const kkday: BrandPage = {
  slug: 'kkday',
  providerId: 'kkday',
  metaTitle: 'KKday review 2026 — catalogue, fees and the Trustpilot gap',
  metaDescription:
    'An independent KKday review: catalogue size and coverage next to Klook, how cancellation and refunds actually work, and why the Trustpilot score is so weak.',
  intro:
    'KKday is Klook’s closest rival: a Taipei-founded marketplace covering roughly 350,000 activities in 92 countries, strongest in Japan, Korea and Taiwan. It is worth checking whenever Klook is sold out of a specific slot or date. The catch is what happens when a booking goes wrong — KKday’s Trustpilot score is weak, driven by cancellation and refund disputes, so read a listing’s cancellation terms before you pay rather than after something goes sideways.',
  about: [
    'KKday launched in Taipei in 2014, founded by Ming Chen, who had already taken two earlier Taiwanese travel companies, Star Travel and Ezfly, public before starting it. Like Klook, it operates as a marketplace rather than an operator: local tour companies, ticket offices and transport providers list on the platform, and KKday takes a cut and handles payment and support. The result is a catalogue that runs to roughly 350,000 experiences across 92 countries, with particular depth in Japan, Korea, Taiwan and the rest of East Asia, reinforced by its 2021 acquisition of the Japan-specialist site ActivityJapan.',
    'Booking follows the same shape as any activities marketplace: pick a date, pay at checkout, and receive an e-voucher by e-mail or in the app. Listings with the instant-confirmation icon confirm in about five minutes; everything else is checked manually with the operator and can take 24 to 48 hours. KKday has also built out beyond the consumer marketplace — Rezio, its business-to-business booking software, is sold directly to tour operators, and FineDayClub is a separate paid membership for curated, higher-end trips launched in 2020.',
    'The trade-off shows up when something goes wrong. KKday’s Trustpilot page carries a “Poor” rating of 2.1 out of 5 from 242 reviews, with recurring complaints about bookings that were paid for, confirmed, and then cancelled a day later as sold out, plus refund exceptions that ask for supporting documentation. Its own App Store rating tells a different story — 4.8 out of 5 from several thousand raters — which suggests the booking flow itself is fine and the friction concentrates around cancellations and post-purchase disputes.',
  ],
  facts: [
    { label: 'Founded', value: '2014, Taipei' },
    { label: 'Coverage', value: '92 countries' },
    { label: 'Catalogue', value: '350,000+ experiences' },
    { label: 'Confirmation', value: 'Instant or 24–48h' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Every product sets its own cancellation window and refund terms, so the fine print on each listing matters more than any blanket KKday policy.',
    items: [
      {
        name: 'Per-booking price',
        price: 'Pay per activity, no membership',
        detail:
          'The standard route: pick a date, pay at checkout. Operator pricing plus KKday’s margin, comparable in shape to Klook’s.',
        pick: true,
      },
      {
        name: 'FineDayClub',
        price: 'Separate subscription tier',
        detail:
          'A paid membership for curated, higher-end trips, launched in 2020 and run apart from the main marketplace — most buyers will never touch it.',
      },
      {
        name: 'Instant vs manual confirmation',
        price: 'No extra cost either way',
        detail:
          'The instant-confirmation icon means a voucher inside about five minutes; anything else needs 24 to 48 hours, and reviewers report bookings occasionally cancelled afterward as sold out.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuine second catalogue to Klook’s',
      body: 'Roughly 350,000 experiences across 92 countries with heavy strength in Japan, Korea and Taiwan through the acquired ActivityJapan brand — useful when Klook is sold out of a slot.',
    },
    {
      title: 'Rezio gives small operators their own booking system',
      body: 'KKday’s B2B arm, Rezio, sells software directly to tour operators, which is part of why its Asia-Pacific inventory runs deep rather than just wide.',
    },
    {
      title: 'A founder with real travel-industry pedigree',
      body: 'Ming Chen built and floated two earlier Taiwanese travel companies before starting KKday in 2014, which shows in how deliberately the platform expanded market by market.',
    },
    {
      title: 'App experience rated well by people who used it',
      body: 'A 4.8-star App Store rating across several thousand reviews suggests the booking flow itself works; the friction shows up later, at cancellation and refund time.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rates it “Poor”',
      body: 'A 2.1 out of 5 TrustScore from 242 reviews, with 45% one-star. Recurring complaints describe bookings accepted and paid for, then cancelled the next day as sold out.',
    },
    {
      title: 'Refunds can require proof',
      body: 'Some cancellation exceptions ask for supporting documentation, such as a medical certificate, before KKday will process a full refund — slower than a straightforward opt-out.',
    },
    {
      title: 'Confirmation is not always instant',
      body: 'Listings without the instant-confirmation icon take 24 to 48 hours to verify, which is too slow if you are booking for tomorrow morning.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.1, note: '"Poor" rating, 242 reviews' },
    { source: 'App Store (iOS)', value: 4.8, note: 'around 4,400 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite across catalogue depth, pricing and support reliability',
    },
  ],
  bestFor: [
    'Travellers who want a second Asia-first marketplace when Klook is sold out',
    'Frequent flyers wanting a Japan, Korea and Taiwan-heavy inventory',
    'Buyers happy to read the fine print on a listing’s cancellation window',
    'People who prioritise catalogue depth over dispute-resolution reputation',
  ],
  notFor: [
    'Anyone who wants a blanket free-cancellation guarantee up front',
    'Travellers who might need a same-day refund without paperwork',
    'Buyers who weight aggregator ratings heavily — the Trustpilot score is genuinely poor',
  ],
  faq: [
    {
      q: 'Is KKday legit?',
      a: 'Yes — it is a real, funded travel marketplace operating in 92 countries, not a scam site. But its Trustpilot score is weak (2.1/5), driven mostly by cancellation and refund disputes, so read the cancellation terms on a listing before paying rather than after something goes wrong.',
    },
    {
      q: 'How is KKday different from Klook?',
      a: 'Both are Asia-first activity marketplaces founded in Taipei and Hong Kong in 2014, with heavily overlapping inventories. KKday’s edge is deeper coverage in Japan, Korea and Taiwan through its ActivityJapan acquisition; Klook’s catalogue is larger overall.',
    },
    {
      q: 'What happens if my KKday booking gets cancelled after payment?',
      a: 'Reviewers report this happening when a listing turns out to be sold out after payment clears, particularly on manually-confirmed products. KKday says it refunds in that case, but response times vary — contact support immediately and keep the confirmation email as evidence.',
    },
    {
      q: 'Does KKday offer instant confirmation?',
      a: 'On listings marked with the instant-confirmation icon, yes — a voucher lands within about five minutes. Anything else is manually verified with the operator and can take 24 to 48 hours, so avoid booking those for the next morning.',
    },
    {
      q: 'What is FineDayClub?',
      a: 'A separate paid membership KKday launched in 2020 for curated, higher-end trips. It runs apart from the main marketplace and is not something most people booking a single activity will ever need to know about.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'kkday.com',
}
