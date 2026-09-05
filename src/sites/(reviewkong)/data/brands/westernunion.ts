/**
 * Brand page data for Western Union (route: /brands/westernunion).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://apps.apple.com/gb/app/western-union-money-transfer/id1045347175 —
 *     App Store rating and review count, opened directly
 *   - https://ir.westernunion.com/news/archived-press-releases/press-release-details/2011/Western-Union-Celebrates-160-Years-of-Innovation/default.aspx
 *     and https://www.fundinguniverse.com/company-histories/western-union-financial-services-inc-history/
 *     — 1851 founding as a telegraph company, 1871 start of money-transfer
 *     service, historical growth of the agent network
 *   - https://wise.com/us/blog/western-union-international-fees and
 *     https://www.monito.com/en/wiki/how-much-is-the-western-union-fee —
 *     third-party breakdowns confirming the two-part cost structure (a stated
 *     transfer fee plus an undisclosed exchange-rate margin) and that both
 *     vary by corridor, amount and payment/payout method; used to describe
 *     the shape of the pricing, not to print a specific fee or margin figure
 *
 * ⚠️ Fees, exchange-rate margins and corridor-specific detail are working
 * values and MUST be re-verified on westernunion.com for the specific send
 * and receive country before any campaign — this is a brand where the actual
 * cost genuinely cannot be stated without a corridor and amount. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const westernunion: BrandPage = {
  slug: 'westernunion',
  providerId: 'westernunion',
  metaTitle: 'Western Union review 2026 — real cost, speed, cash pickup',
  metaDescription:
    'An independent Western Union review: why the advertised fee is only half the cost, how the exchange-rate margin works, and how payout speed varies by corridor and method.',
  intro:
    'Western Union is the oldest and most widely reachable money-transfer network in the world, built on physical agent locations rather than bank accounts. That reach is the whole case for using it. The cost is two separate things: a stated transfer fee and a second, unstated margin built into the exchange rate, and both move enormously depending on the corridor, amount and payment method you pick.',
  about: [
    'Western Union began in 1851 as a telegraph company and added money transfer in 1871, which makes it considerably older than every digital-first competitor it is now compared against. That history is also the source of its main asset: a retail agent network run into small towns, corner shops and bank branches across more countries than most challengers can match, built up over more than a century rather than a decade of expansion.',
    'A transfer can be funded by bank account, debit or credit card, or cash at an agent location, and paid out by bank deposit, mobile wallet, or cash pickup at another agent location on the receiving end. Cash-in, cash-out is where Western Union is genuinely hard to beat: for a recipient without a bank account, in a country where agent density is high, nothing digital-only competes on immediacy, and that combination is still common across much of the world.',
    'The cost structure is the part to understand before sending. There is a stated transfer fee, shown at checkout, that varies by how you pay and how the recipient collects. Separately, Western Union sets its own exchange rate for the currency pair, and that rate includes a margin over the mid-market rate that is not itemised as a line item — it simply means the recipient gets less local currency than a mid-market conversion would produce. Both the fee and the margin vary by corridor, and neither should be assumed constant between two country pairs.',
  ],
  facts: [
    { label: 'Founded', value: '1851 (transfers since 1871)' },
    { label: 'Reach', value: '200+ countries/territories' },
    { label: 'Payout methods', value: 'Cash, bank, mobile wallet' },
    { label: 'Real cost', value: 'Fee + exchange-rate margin' },
  ],
  plans: {
    title: 'What it actually costs to send money',
    note: 'Western Union does not have "plans" in the subscription sense — every transfer is priced individually by corridor, amount, funding method and payout method. The categories below are the levers that change the price, not fixed tiers.',
    items: [
      {
        name: 'Cash pickup payout',
        price: 'Stated fee + exchange-rate margin',
        detail:
          'The fastest payout method and the reason to choose Western Union at all — often available within minutes at a physical agent, especially valuable where the recipient has no bank account.',
        pick: true,
      },
      {
        name: 'Bank account payout',
        price: 'Stated fee + exchange-rate margin',
        detail:
          'Usually slower than cash pickup and, on many corridors, the fee is lower — the trade is speed for cost. Timing depends entirely on the receiving bank and corridor.',
      },
      {
        name: 'Mobile wallet payout',
        price: 'Stated fee + exchange-rate margin',
        detail:
          'Available on a growing but not universal list of corridors and wallet providers. Where it exists it combines much of the speed of cash pickup with no physical collection trip.',
      },
      {
        name: 'Funding by card vs bank transfer',
        price: 'Card funding typically costs more',
        detail:
          'Paying with a debit or credit card is usually faster to send but carries a higher fee than funding from a bank account, on top of whatever your own card issuer charges for the transaction.',
      },
    ],
  },
  pros: [
    {
      title: 'Cash pickup reach nothing digital-only can match',
      body: 'A retail agent network built over more than a century still means the widest cash-collection coverage in the category, especially in markets where a large share of recipients are unbanked.',
    },
    {
      title: 'Genuinely fast for cash-in, cash-out transfers',
      body: 'Where both sender and recipient use a physical location, funds can be available for collection within minutes rather than the multi-day timelines typical of bank-to-bank transfers.',
    },
    {
      title: 'Multiple payout options, not just one',
      body: 'Bank deposit, mobile wallet and cash pickup are all available depending on corridor, which lets a sender match the payout method to what the recipient can actually use.',
    },
    {
      title: 'Long-standing brand recognition among recipients',
      body: 'In many countries, "Western Union" is the generic term recipients already trust and know how to collect from, which lowers the friction of a first-time transfer more than an unfamiliar app does.',
    },
  ],
  cons: [
    {
      title: 'The advertised fee is not the whole cost',
      body: 'Western Union sets its own exchange rate with a margin built in above the mid-market rate. That margin is not shown as a line item, so the number at checkout understates what the recipient actually loses in the conversion.',
    },
    {
      title: 'Pricing swings enormously by corridor and method',
      body: 'The same amount sent to two different countries, or paid out two different ways, can carry very different total costs. There is no single "the fee is X" answer — you have to price the specific transfer.',
    },
    {
      title: 'Digital-first competitors often beat it on cost',
      body: 'Providers built around the mid-market rate with a transparent fee, and no physical agent network to fund, frequently land cheaper for bank-to-bank transfers where cash pickup is not needed.',
    },
  ],
  reputation: [
    {
      source: 'App Store',
      value: 4.7,
      note: 'based on roughly 36,000 ratings, UK app store listing',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'unmatched cash-pickup reach, offset by an opaque exchange-rate margin and corridor-dependent pricing',
    },
  ],
  bestFor: [
    'Sending cash to a recipient who has no bank account',
    'Corridors and countries where agent density is genuinely the widest option',
    'Transfers where speed of collection matters more than shaving the last percent of cost',
    'Recipients already familiar with collecting from a Western Union location',
  ],
  notFor: [
    'Anyone who wants a transparent, mid-market exchange rate with no embedded margin',
    'Routine bank-to-bank transfers where a digital-first provider is likely cheaper',
    'Senders who will not compare the fee and the exchange rate together before choosing a provider',
  ],
  faq: [
    {
      q: 'Why does the fee shown at checkout not match what I read online?',
      a: 'The stated transfer fee varies by corridor, amount, funding method and payout method, so a figure quoted for one route will not hold for another. Always check the actual fee for your specific send and receive country in the app or on the site.',
    },
    {
      q: 'Is the exchange rate the same as the mid-market rate?',
      a: 'No. Western Union sets its own rate for each currency pair, and that rate includes a margin above the mid-market rate. It is not broken out as a separate charge — it shows up only as fewer units of local currency reaching the recipient.',
    },
    {
      q: 'How fast is a cash pickup transfer?',
      a: 'Often within minutes once the sender completes the transaction, though this depends heavily on the corridor and the specific agent location chosen for pickup. Bank deposit and mobile wallet payouts are typically slower and vary by the receiving institution rather than by Western Union alone, so check the estimate shown for your specific route.',
    },
    {
      q: 'Does the payment method I choose change the cost?',
      a: 'Yes. Funding a transfer by debit or credit card is usually faster to process than funding from a bank account, but it carries a higher stated fee, independent of any separate charge your own card issuer applies to the transaction. Paying from a bank account is typically slower but cheaper.',
    },
    {
      q: 'Is Western Union the cheapest way to send money?',
      a: 'Not usually for a routine bank-to-bank transfer, where digital-first competitors pricing off the mid-market rate with a transparent fee tend to be cheaper overall. Western Union’s real advantage is reach and speed for cash pickup, particularly to recipients without a bank account, not being the lowest-cost option on every corridor.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'westernunion.com',
}
