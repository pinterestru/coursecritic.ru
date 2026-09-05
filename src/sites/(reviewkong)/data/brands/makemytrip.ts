/**
 * Brand page data for MakeMyTrip (route: /brands/makemytrip).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/MakeMyTrip and SEC filings (Form 20-F) —
 *     founded 2000, Nasdaq listing (MMYT) since 2010, Gurugram HQ, the 2017
 *     acquisition of ibibo Group from Naspers/Tencent
 *   - https://promos.makemytrip.com/mmtblack-program-details.html and
 *     https://promos.makemytrip.com/mmtblack-program-faqs.html — the
 *     invitation/spend-based MMTBLACK loyalty tiers and myCash cashback rates
 *   - https://tripmoneycmshtmlak.mmtcdn.com/html/GI_DS_CFAR_700c451afb.html and
 *     gulfnews.com coverage — the paid "Zero Cancellation" add-on, and that the
 *     convenience fee is non-refundable even under it
 *   - https://www.trustpilot.com/review/www.makemytrip.com — TrustScore and
 *     review volume (verified via cached search results after the live page
 *     was inaccessible directly)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const makemytrip: BrandPage = {
  slug: 'makemytrip',
  providerId: 'makemytrip',
  metaTitle: 'MakeMyTrip review 2026 — fees, refunds and MMTBLACK',
  metaDescription:
    'An independent MakeMyTrip review: how flight changes and refunds are handled, what Zero Cancellation covers, and a Trustpilot record worth reading first.',
  intro:
    'MakeMyTrip is India’s largest listed online travel agency, built for flights, hotels, buses and holiday packages inside and out of India. It has scale most rivals in the market do not: a Nasdaq listing since 2010 and full ownership of ibibo Group, the parent of goibibo and redBus. It also carries one of the worst public support records of any brand in this category, and that is the fact to weigh before booking anything non-refundable.',
  about: [
    'Founded in 2000 and listed on Nasdaq under the ticker MMYT in 2010, MakeMyTrip is headquartered in Gurugram, India, and operates as the country’s biggest online travel agency by most public measures. In January 2017 it bought 100% of ibibo Group from Naspers and Tencent, folding in goibibo and redBus and, in the process, making Naspers and Tencent large shareholders in MakeMyTrip itself. The combined group now spans flights, hotels, holiday packages, buses and rail across a single corporate structure, giving it more owned inventory than most rivals in the Indian market can assemble.',
    'The core business is the standard OTA model: it books through airlines, hotels and bus operators and adds its own convenience fee on top, which is non-refundable regardless of what happens to the underlying booking afterwards. Refunds for the ticket or room follow the supplier’s own fare rules and timelines, with MakeMyTrip acting as the intermediary that processes the paperwork rather than the party that decides the final refund amount or when it arrives. That distinction is easy to miss until a booking actually needs cancelling.',
    'MakeMyTrip sells a paid add-on called Zero Cancellation, starting from a small per-passenger fee, which waives the airline’s and MakeMyTrip’s own cancellation penalties if bought at the time of booking. It does not cover date changes, seat and meal add-ons, or non-airline purchases like insurance, and the underlying convenience fee is still kept whether or not the add-on is used. It is a real, working product with published terms, but a narrower one than the reassuring name on the checkout page suggests it will be.',
  ],
  facts: [
    { label: 'Founded', value: '2000' },
    { label: 'Listed', value: 'Nasdaq: MMYT since 2010' },
    { label: 'Owns', value: 'ibibo, goibibo, redBus' },
    { label: 'Loyalty', value: 'MMTBLACK, invite/spend tiers' },
  ],
  plans: {
    title: 'What actually gets added to the fare',
    note: 'The convenience fee charged at booking is non-refundable in every scenario below, including a full airline refund and the paid cancellation waiver.',
    items: [
      {
        name: 'Standard booking',
        price: 'Fare plus a non-refundable convenience fee',
        detail:
          'Charged on flights, hotels and buses alike. It is kept even if the underlying ticket is cancelled and fully refunded by the airline.',
        pick: true,
      },
      {
        name: 'Zero Cancellation add-on',
        price: 'From a small per-passenger fee at booking',
        detail:
          'Waives the airline’s and MakeMyTrip’s cancellation penalty. Excludes date changes, seat/meal add-ons and non-airline purchases; the convenience fee is still not refunded.',
      },
      {
        name: 'MMTBLACK membership',
        price: 'Free, invitation or spend-qualified',
        detail:
          'Gold from roughly ₹50,000 spend and 4+ trips a year, Platinum above ₹200,000 with the same trip count. Members earn myCash and get discounts on add-ons and select hotels.',
      },
    ],
  },
  pros: [
    {
      title: 'The largest inventory in the Indian market',
      body: 'Between MakeMyTrip, goibibo and redBus under one parent company, coverage of Indian domestic flights, hotels and buses is about as complete as any single OTA group in this market gets.',
    },
    {
      title: 'A real paid cancellation waiver, clearly scoped',
      body: 'Zero Cancellation genuinely removes the airline’s and MakeMyTrip’s own penalty for a small upfront fee, provided you read the exclusions on date changes and add-ons before assuming it covers everything.',
    },
    {
      title: 'MMTBLACK rewards genuinely frequent travellers',
      body: 'Cashback paid as myCash and priority support access are real, published, tiered benefits for anyone who already books four or more trips a year through the platform rather than a vague marketing promise.',
    },
    {
      title: 'Listed-company scale and financial transparency',
      body: 'As a Nasdaq-listed group filing SEC disclosures under US securities law, MakeMyTrip’s finances, ownership structure and shareholding are publicly auditable in a way most regional OTAs simply are not.',
    },
  ],
  cons: [
    {
      title: 'A Trustpilot record among the worst in the category',
      body: 'MakeMyTrip carries a "Bad" TrustScore on Trustpilot, driven by consistent complaints about unresponsive support and refunds that never arrive. This is not a fringe view among a handful of reviewers; it is the dominant, repeated pattern across the sample.',
    },
    {
      title: 'The convenience fee survives every refund scenario',
      body: 'Whether the airline cancels the flight, you cancel it, or you buy the Zero Cancellation add-on specifically to avoid a penalty, the platform’s own convenience fee is never returned under any of those outcomes.',
    },
    {
      title: 'Support is the recurring complaint, not a one-off',
      body: 'Reviewers repeatedly describe difficulty reaching a live agent and refunds that stall for weeks without explanation. Budget for that realistic risk before booking anything non-refundable that you might genuinely need to change.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.2, note: 'rated "Bad", over 2,000 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'inventory and scale are real; the reputation score below is the reason it is not higher',
    },
  ],
  bestFor: [
    'Domestic Indian trips where MakeMyTrip, goibibo or redBus has the only convenient inventory',
    'Frequent Indian travellers who already qualify for MMTBLACK',
    'Bookings where you buy Zero Cancellation and read its exclusions first',
    'Anyone comparing headline fares who will also check the convenience fee before paying',
  ],
  notFor: [
    'Anyone who has previously needed a fast refund and cannot risk a repeat',
    'Non-refundable, uninsured bookings on a fare you might need to cancel',
    'Travellers who read Trustpilot first and want a support record to match',
  ],
  faq: [
    {
      q: 'Is the convenience fee refundable if I cancel?',
      a: 'No. MakeMyTrip’s own convenience fee is kept regardless of the outcome of the underlying booking, including scenarios where you receive a full refund of the fare itself from the airline or hotel. Treat it as a fixed cost of booking through the platform rather than something you can claw back later.',
    },
    {
      q: 'What does Zero Cancellation actually cover?',
      a: 'It waives the airline’s and MakeMyTrip’s own cancellation penalty if bought at the time of booking. It does not cover date changes, seat or meal add-ons, or non-airline purchases such as insurance, and the underlying convenience fee is still charged regardless of whether you use it.',
    },
    {
      q: 'Why does MakeMyTrip have such a low Trustpilot score?',
      a: 'The reviews consistently cite slow or unresponsive customer support and refunds that stall for extended periods, particularly around cancellations and disrupted trips. It is a recurring pattern across a large review sample spanning several years, not an isolated or one-off complaint.',
    },
    {
      q: 'Who owns MakeMyTrip?',
      a: 'MakeMyTrip is a Nasdaq-listed company trading as MMYT that also owns ibibo Group, the parent of goibibo and redBus, following a 2017 deal with Naspers and Tencent. Those two companies in turn hold a large combined stake in MakeMyTrip itself as a result of that transaction.',
    },
    {
      q: 'How do I qualify for MMTBLACK?',
      a: 'Gold and Platinum tiers each require a minimum annual spend threshold alongside at least four completed trips within 12 months. Membership cannot simply be bought outright; it is earned through sustained booking activity over that period, or occasionally granted directly by invitation from MakeMyTrip itself.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'makemytrip.com',
}
