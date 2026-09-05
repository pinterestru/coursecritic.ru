/**
 * Brand page data for Kinguin (route: /brands/kinguin).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.kinguin.net/about-us — launch year, headquarters, catalogue
 *     size, registered-account count, marketplace model
 *   - Kinguin's own Buyer Protection terms, corroborated via
 *     https://www.game-key-compare.com/en/guides/is-kinguin-legit and
 *     https://techguided.com/is-kinguin-legit-windows-games/ — Buyer
 *     Protection is a paid, optional, per-order add-on, not a subscription
 *   - https://secureblitz.com/kinguin-review-safe-legit-or-scam/ and
 *     https://www.digitalcitizen.life/is-kinguin-legit-should-you-buy-keys/ —
 *     the 2015 Ubisoft Far Cry 4 fraudulently-sourced key cancellation
 *   - https://www.smartcustomer.com/reviews/kinguin.net (Sitejabber) — rating
 *     and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const kinguin: BrandPage = {
  slug: 'kinguin',
  providerId: 'kinguin',
  metaTitle: 'Kinguin review 2026 — cheap keys, Buyer Protection, risk',
  metaDescription:
    'An independent Kinguin review: how the third-party key marketplace works, what Buyer Protection covers, and the revoked-key risk it does not remove.',
  intro:
    'Kinguin is a third-party marketplace for game keys, software licences and gift cards, not a store that owns its own stock. Independent sellers list the products, Kinguin takes a cut and offers an optional paid Buyer Protection scheme on top. The result is routinely the cheapest price for a given title, and routinely the least certain: a key can be region-locked, sourced from a compromised account, or revoked by a publisher months after you paid.',
  about: [
    'Kinguin launched its marketplace in January 2013 and is registered in Hong Kong, with operational hubs in Poland and Germany. It does not sell games itself; it hosts listings from thousands of independent sellers, ranging from small resellers to businesses, and takes a commission on every sale. The company says it has more than 150,000 products live and over 20 million registered accounts, which makes it one of the largest key marketplaces by catalogue size, though scale is exactly why quality varies so much between one listing and the next.',
    'The core risk with any key resale site is provenance: a stolen credit card can buy a key that a publisher later cancels, leaving the buyer with nothing. Kinguin’s answer is Buyer Protection, a fee added at checkout, paid per order rather than as a subscription, that promises a working key or a refund. Crucially it is optional. Skip it and the cheapest listing gets cheaper still, but a revoked or invalid key becomes a dispute with an individual seller rather than a guaranteed refund, and Ubisoft’s 2015 cancellation of fraudulently sourced Far Cry 4 keys is the case most often cited against the model.',
    'Keys are also frequently region-locked, tagged for a specific country or bloc, and activating one outside that region can fail outright or fall foul of a platform’s own terms. None of this makes Kinguin a scam: most orders complete without incident, and the site suits anyone chasing the lowest possible price on a mainstream or older title who is willing to either pay for protection or accept the residual risk on a cheap indie key. It does not suit anyone who wants the certainty of a first-party store, or who is uncomfortable with a marketplace model that publishers have publicly criticised for enabling stolen-card resale.',
  ],
  facts: [
    { label: 'Site launched', value: '2013' },
    { label: 'Registered in', value: 'Hong Kong' },
    { label: 'Catalogue', value: '150,000+ products' },
    { label: 'Accounts', value: '20M+ registered' },
  ],
  plans: {
    title: 'How buying a key actually works',
    note: 'Every listed price is set by an independent seller, not Kinguin; Buyer Protection is a separate paid add-on charged per order, never a subscription.',
    items: [
      {
        name: 'Marketplace key, no protection',
        price: 'Seller-set, usually cheapest',
        detail:
          'The lowest headline price on the site. If the key is invalid or later revoked, resolving it means disputing the order with that seller.',
      },
      {
        name: 'Marketplace key + Buyer Protection',
        price: 'Small fee added at checkout',
        detail:
          'An optional per-order add-on that promises a working key or a refund if it fails or is revoked.',
        pick: true,
      },
      {
        name: 'Kinguin-fulfilled stock',
        price: 'Usually a premium over listings',
        detail:
          'A smaller slice of inventory ships from Kinguin itself rather than a third-party seller, at a higher price than the cheapest listing.',
      },
    ],
  },
  pros: [
    {
      title: 'Usually the cheapest listing for a given title',
      body: 'With thousands of independent sellers competing on price, mainstream and older PC titles routinely undercut official storefronts and most other resale marketplaces, sometimes by a wide margin.',
    },
    {
      title: 'A real paid refund path exists if you want one',
      body: 'Buyer Protection is not bundled or hidden. Add it at checkout and a revoked or invalid key gets a working replacement or a refund rather than a support argument.',
    },
    {
      title: 'Catalogue covers what bigger stores drop',
      body: 'Older titles, regional editions and niche software that mainstream digital stores stop listing often stay available here, sold by whichever independent seller still holds stock.',
    },
    {
      title: 'Delivery is instant for the vast majority of orders',
      body: 'Keys and licences are typically emailed or pushed to the account within minutes of payment clearing, with no physical shipping step and no time-zone delay to wait on.',
    },
  ],
  cons: [
    {
      title: 'Protection costs extra, and it is opt-in',
      body: 'The cheapest price on the page assumes you skip Buyer Protection. Do that and a revoked or dead key is a dispute with a stranger, not a guaranteed refund from Kinguin itself.',
    },
    {
      title: 'Keys can be region-locked',
      body: 'Some listings only activate in a specific country or bloc. Buy the wrong region by mistake and you are relying on the seller, not Kinguin, to sort it out.',
    },
    {
      title: 'Publishers have criticised the model directly',
      body: 'Stolen-card fraud has fed the marketplace before, most visibly Ubisoft’s 2015 cancellation of Far Cry 4 keys, and some studios still discourage fans from buying resold keys at all.',
    },
  ],
  reputation: [
    {
      source: 'Sitejabber',
      value: 2.8,
      note: '4,034 reviews, polarised between fast cheap orders and dispute complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'value and catalogue weighed against provenance risk on the unprotected price',
    },
  ],
  bestFor: [
    'Budget PC gamers buying mainstream or older titles who add Buyer Protection',
    'Shoppers comfortable checking a seller’s rating before they click buy',
    'Anyone hunting a title an official store has already delisted',
    'Gift-key buyers who just want the cheapest working code for a specific game',
  ],
  notFor: [
    'Anyone who wants a guaranteed-genuine key with zero dispute risk',
    'Buyers unwilling to pay extra for protection or handle a seller dispute',
    'Shoppers who will not check a key’s region tag before paying',
  ],
  faq: [
    {
      q: 'Is Kinguin legit?',
      a: 'Yes, in the sense that it is a real, long-running marketplace and most orders complete without issue. It is not first-party, though: every key comes from an independent seller, and quality depends on which seller you buy from.',
    },
    {
      q: 'What does Buyer Protection actually cover?',
      a: 'It is a paid, per-order add-on that promises a working key or a refund if the one you receive is invalid, already used or later revoked by the publisher. Skip it and any problem becomes a dispute with the individual seller instead.',
    },
    {
      q: 'Why are Kinguin’s prices so much lower than Steam or the PlayStation Store?',
      a: 'Prices are set by competing independent sellers rather than the publisher, and some inventory originates from regions or bulk deals with lower list prices. That competition is genuine, but it is also why provenance and Buyer Protection matter more here than on a first-party store.',
    },
    {
      q: 'Can a key I bought stop working later?',
      a: 'Rarely, but yes: if a key was originally bought with a stolen card, the publisher can revoke it after the fact, even from a buyer who did nothing wrong. Buyer Protection is the safeguard against exactly this scenario.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'kinguin.net',
}
