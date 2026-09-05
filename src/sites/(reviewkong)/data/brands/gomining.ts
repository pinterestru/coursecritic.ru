/**
 * Brand page data for GoMining (route: /brands/gomining).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://gomining.com/ — GOMINING token, exchange listings, named US data
 *     centres (Mesquite Bluff, Texas; Silver Fox Run, South Carolina)
 *   - https://gomining.com/for-investors — CertiK and Cyberscope audit
 *     mentions, claimed total hosted hashrate, claimed total BTC mined
 *   - https://gomining.com/terms — the three operating entities and their
 *     registration numbers/jurisdictions, the no-guaranteed-returns and
 *     not-a-regulated-crypto-service disclaimers
 *   - https://gomining.com/about — "started in 2021", SIA GoMining
 *     (Riga, Latvia), team/community claims
 *   - https://academy.gomining.com/articles/digital-miner-product-guide —
 *     what a digital miner NFT represents, TH/s range, upgrade mechanics
 *   - https://academy.gomining.com/articles/how-to-start-earning-with-gomining
 *     — the GOMINING-token maintenance discount, withdrawal flow
 *   - https://help.nft.gomining.com/faq/maintenance-fees-and-discounts —
 *     discount ranges (token, VIP tier, service)
 *   - https://help.nft.gomining.com/faq/mining — miner-as-share-of-ASIC
 *     explanation
 *   - https://help.token.gomining.com/faq/tokenomics/burn-and-mint-cycles —
 *     weekly burn/mint cycle and new-token distribution split
 *   - https://apps.apple.com/us/app/gomining-btc-mining-finance/id1622100275
 *     — App Store rating and review count
 *
 * Trustpilot returned a 403 on every fetch attempt and Google Play's rating
 * could not be confirmed by opening the listing directly, so neither is
 * quoted anywhere on this page. No proof-of-reserves attestation was found
 * anywhere in GoMining's own materials.
 *
 * ⚠️ Every figure here is a working value captured on 2026-08-24 and MUST be
 * re-verified against gomining.com before any campaign — crypto fee
 * structures and token mechanics change without notice. See ../../README.md.
 * This page carries no return, yield or payback claim by design: see the
 * editorial note in plans.note and every cons/notFor entry.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const gomining: BrandPage = {
  slug: 'gomining',
  providerId: 'gomining',
  metaTitle: 'GoMining review 2026 — the fees, the token, the risk',
  metaDescription:
    'An independent GoMining review: how the NFT miner and GOMINING token work, the daily maintenance fee, and the risks cloud-hosted mining carries.',
  intro:
    'GoMining sells tokenised shares of Bitcoin mining hardware it hosts in its own data centres: buy a digital miner NFT sized in terahashes, pay a daily fee that covers electricity and upkeep, and the hashpower it represents mines BTC credited to your wallet. It operates through audited smart contracts and registered entities in Cyprus, the British Virgin Islands and Latvia, and publishes total BTC mined. It is also, structurally, cloud mining: the fee is due whether the miner is profitable, and the buyer holds a claim, not the machine.',
  about: [
    'GoMining says it started in 2021, building hosted Bitcoin mining that does not require buying or housing an ASIC yourself. It operates through several registered entities rather than one: GoMining (Cyprus) Limited (HE450955) builds and runs the platform and its apps, GoMining (BVI) Limited issues the GOMINING token, BMINE (BVI) Limited issues the digital miner NFTs, and SIA GoMining is registered in Riga, Latvia. The company names two US mining sites, in Mesquite Bluff, Texas, and Silver Fox Run, South Carolina, and says it also runs further capacity across North America, Africa and Central Asia, without naming those additional locations.',
    'A digital miner is an NFT: it represents a share of physical ASIC hardware GoMining hosts and operates on the buyer’s behalf, sized in terahashes of power from small fractions up to large multi-thousand-TH holdings. GoMining deducts a daily maintenance fee covering electricity and service, scaled to the miner’s power and its efficiency rating in watts per terahash; the fee can be settled in BTC or in the platform’s own GOMINING token, which carries a published discount of up to 20%. GOMINING tokens collected as fees are burned weekly and partly re-minted under a governance-voted ratio, a deflationary design the company documents in its own tokenomics pages.',
    'GoMining’s own terms describe the product as “a technical software platform only, provided as is without guaranteed returns or fiduciary duties”, and say it does not offer regulated services such as custody or portfolio management. Its smart contracts have been reviewed by CertiK and Cyberscope, and the company publishes a running total of BTC mined and total hosted hashrate, though this review found no independent proof-of-reserves attestation confirming those figures. That gap matters: cloud and hosted mining, as a category, has a long record of operators overstating capacity or disappearing with deposits. Nothing found here suggests GoMining has done that, but the structure gives a buyer no way to check.',
  ],
  facts: [
    { label: 'Started', value: '2021' },
    { label: 'Entities', value: 'Cyprus, BVI, Latvia' },
    { label: 'Product', value: 'NFT miner + daily fee' },
    { label: 'Audits', value: 'CertiK, Cyberscope' },
  ],
  plans: {
    title: 'How the cost structure works',
    note: 'This is what a buyer pays, not what they might get back. GoMining’s own terms state the platform offers no guaranteed returns, and neither does this page — there is no projected yield or payback figure below.',
    items: [
      {
        name: 'Digital miner purchase',
        price: 'Scales with the terahash and efficiency chosen',
        detail:
          'The upfront cost is set per unit of hashpower and efficiency (W/TH) at the time of purchase, shown in the app rather than published as a fixed price list.',
      },
      {
        name: 'Daily maintenance fee',
        price: 'Charged per TH per day, in BTC or GOMINING',
        detail:
          'Covers electricity and service on the hosted hardware. It is deducted daily regardless of that day’s mining output, and can exceed the BTC the miner earns.',
      },
      {
        name: 'Paying maintenance in GOMINING tokens',
        price: 'Up to 20% cheaper than paying in BTC',
        detail:
          'The published discount for settling the fee in the platform’s own token, on top of separate VIP-tier and service discounts, at the cost of exposure to a second, more volatile asset.',
        pick: true,
      },
      {
        name: 'Upgrades and withdrawal',
        price: 'Upgrade cost varies; BTC withdrawal carries a network fee',
        detail:
          'Power and efficiency upgrades are bought individually inside the app. Withdrawing mined BTC to an external wallet incurs a Bitcoin network fee that moves with network conditions.',
      },
    ],
  },
  pros: [
    {
      title: 'Smart contracts have been through outside audits',
      body: 'CertiK and Cyberscope have both reviewed GoMining’s contracts and platform architecture, and the reports are published. That covers code security, not custody of funds or what the app displays.',
    },
    {
      title: 'A published, multi-year mining track record',
      body: 'GoMining reports a running total of BTC mined since 2021 and names two specific US data-centre sites, rather than describing hosting only in the abstract.',
    },
    {
      title: 'No hardware, hosting contract or noise to manage',
      body: 'A buyer gets exposure to hashpower without shipping an ASIC anywhere or negotiating an electricity contract themselves, which is the entire pitch of hosted mining.',
    },
    {
      title: 'The fee can be paid in either asset',
      body: 'The daily maintenance fee is settleable in BTC or in GOMINING tokens, and paying in the token carries a published discount of up to 20% on top of separate loyalty tiers.',
    },
  ],
  cons: [
    {
      title: 'The fee runs whether the miner is profitable or not',
      body: 'Bitcoin’s price and network difficulty move independently of anything a buyer controls, and the daily maintenance fee is charged regardless of what the miner actually produced that day.',
    },
    {
      title: 'A token claim on hosted hardware, not the hardware itself',
      body: 'A digital miner is an NFT representing a share of equipment in GoMining’s data centres. It cannot be delivered, and its value depends on the company continuing to operate and honour it.',
    },
    {
      title: 'Cloud mining is a category with a documented bad history',
      body: 'Hosted and cloud mining schemes industry-wide have a long record of failures and outright scams. GoMining publishes audits and named facilities, but no proof-of-reserves attestation was found, so a buyer cannot independently verify holdings against the claims.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.5, note: 'around 14,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.2,
      note: 'a real, audited operation built on a structurally risky model',
    },
  ],
  bestFor: [
    'Bitcoin holders curious about mining exposure who do not want to run ASICs themselves',
    'Buyers who read the fee and token mechanics closely before paying, not after',
    'Existing GOMINING token holders who want the maintenance-fee discount it unlocks',
    'Anyone treating this as a small, speculative position rather than a core holding',
  ],
  notFor: [
    'Anyone who cannot treat the purchase price and ongoing fees as money they could lose entirely',
    'Anyone reading this page, or GoMining’s own marketing, as investment advice or a return forecast',
    'Anyone who wants to own physical mining hardware rather than a token claim on someone else’s',
  ],
  faq: [
    {
      q: 'What does a GoMining digital miner actually represent?',
      a: 'It is an NFT recorded on-chain that represents a share of physical mining hardware GoMining hosts in its own data centres, measured in terahashes of power. A buyer does not receive or control the hardware itself; the company operates it and credits BTC rewards to the miner.',
    },
    {
      q: 'How is the maintenance fee charged?',
      a: 'GoMining deducts a daily fee covering electricity and service, scaled to the terahash and efficiency (W/TH) of the miner held. It can be paid in BTC or in GOMINING tokens, and the token route carries a published discount of up to 20%. The fee applies whether or not the miner’s output covers it that day.',
    },
    {
      q: 'What happens if the fee costs more than the miner earns?',
      a: 'GoMining’s public materials do not spell out an automatic stop-loss, and this review found no published minimum-balance or auto-liquidation policy. Bitcoin’s price and mining difficulty both move independently of the buyer, so a rewards shortfall is a real, not theoretical, scenario.',
    },
    {
      q: 'Is GoMining regulated or audited?',
      a: 'Its smart contracts have been reviewed by CertiK and Cyberscope, and it operates through registered entities in Cyprus, the British Virgin Islands and Latvia. Its own terms state it does not provide regulated crypto-asset services such as custody or portfolio management, and no proof-of-reserves attestation was found.',
    },
    {
      q: 'Is this page telling readers to buy a miner?',
      a: 'No. This is not investment advice and carries no return forecast. GoMining’s own terms state the product offers no guaranteed returns; this review describes how the fees and token model work so a buyer can judge the structure themselves before spending anything.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'gomining.com',
}
