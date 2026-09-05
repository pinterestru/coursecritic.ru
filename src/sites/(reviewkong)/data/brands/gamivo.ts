/**
 * Brand page data for Gamivo (route: /brands/gamivo).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.highperformr.ai/company/gamivo and
 *     https://www.gamivo.co/en/company/ — founding (trading since around
 *     2017), Malta registration, Warsaw offices, marketplace model
 *   - https://www.gamivo.com/smart and
 *     https://www.gamivo.com/faq/how-can-i-cancel-my-smart-subscription —
 *     GAMIVO SMART pricing tiers, pre-ticked checkout default, cancellation
 *     path
 *   - https://legalclarity.org/how-to-cancel-gamivo-smart-steps-and-refunds/
 *     and https://kasepo.com/what-is-gamivo-smart-how-to-cancel-gamivo-smart/
 *     — SMART cancellation friction reported by users
 *   - https://www.smartcustomer.com/reviews/gamivo.com (Sitejabber) — rating
 *     and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const gamivo: BrandPage = {
  slug: 'gamivo',
  providerId: 'gamivo',
  metaTitle: 'Gamivo review 2026 — cheap keys, SMART subscription, risk',
  metaDescription:
    'An independent Gamivo review: how the marketplace prices keys, why GAMIVO SMART is pre-ticked at checkout, and the revoked-key risk to know about.',
  intro:
    'Gamivo is a third-party marketplace for game keys and gift cards, the same model as Kinguin and G2A: independent sellers set the prices, Gamivo takes a cut, and an optional protection scheme sits behind it. The twist here is GAMIVO SMART, a paid membership bundling discount codes with buyer protection that is pre-selected at checkout by default. Untick it and you get a plain marketplace purchase; leave it and you have started a recurring subscription without necessarily meaning to.',
  about: [
    'Gamivo has been trading since around 2017 and is run by a Malta-registered company with operational offices in Warsaw. It works the same way as Kinguin and G2A: independent, vetted sellers list game keys, software and gift cards, Gamivo takes a commission, and pricing is set by whichever seller wins the listing. The catalogue spans Steam, Epic, Origin, Ubisoft Connect, Xbox and PlayStation codes alongside gift cards, and the site is built around aggressive, frequently rotating discount codes rather than a single fixed price list.',
    'The most distinctive thing about Gamivo is GAMIVO SMART, a paid membership that bundles daily and monthly discount codes with customer protection on your purchase. It is pre-ticked in the checkout by default, so a buyer who only wants a single key has to actively untick the box or end up enrolled in a rolling monthly charge. Cancelling later works, through a dashboard toggle in account settings, but enough reviewers describe missing confirmation emails and repeated charges that it is worth treating as a genuine friction point rather than a minor inconvenience.',
    'Strip away SMART and Gamivo is a fairly ordinary key marketplace: the same provenance risk applies as with any reseller, a key bought with a stolen card can be revoked after the fact, and Gamivo’s own protection, whether via SMART or a one-off paid add-on, is the practical safeguard against that. The site suits shoppers chasing frequent discount codes who are disciplined about unticking SMART when they do not want it. It does not suit anyone who dislikes pre-selected subscriptions at checkout, or who wants a marketplace with a cleaner buying flow.',
  ],
  facts: [
    { label: 'Trading since', value: 'around 2017' },
    { label: 'Registered in', value: 'Malta' },
    { label: 'Protection', value: 'GAMIVO SMART, opt-out' },
    { label: 'Catalogue', value: 'Steam, Epic, Xbox, PS keys' },
  ],
  plans: {
    title: 'How buying a key actually works',
    note: 'GAMIVO SMART is pre-ticked at checkout by default; buyers who want a single key with no recurring charge have to actively untick it before paying.',
    items: [
      {
        name: 'Single key, SMART unticked',
        price: 'Seller-set marketplace price',
        detail:
          'The plain listing price with no bundled subscription and no add-on protection unless bought separately.',
        pick: true,
      },
      {
        name: 'GAMIVO SMART, monthly',
        price: 'Low first month, then higher',
        detail:
          'Adds daily and monthly discount codes plus buyer protection, and renews automatically until you cancel it in account settings.',
      },
      {
        name: 'GAMIVO SMART, annual',
        price: 'One upfront yearly charge',
        detail:
          'Same SMART benefits for a year, cheaper per month than the rolling plan but paid in a single charge.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely aggressive discount codes',
      body: 'Daily and monthly codes stacked on top of already-cheap marketplace listings routinely push prices for popular titles below most rival key sites, at least during active promotions.',
    },
    {
      title: 'A working buyer-protection option does exist',
      body: 'Between SMART membership and a standalone paid add-on, there is a genuine path to a refund or replacement if a key turns out invalid, unlike marketplaces with no protection at all.',
    },
    {
      title: 'Wide catalogue across major platforms',
      body: 'Steam, Epic, Origin, Ubisoft Connect, Xbox and PlayStation codes sit alongside gift cards in one catalogue, so most mainstream releases turn up somewhere on the site.',
    },
    {
      title: 'Delivery is instant for most orders',
      body: 'Keys are typically issued straight to the account or by email within minutes of payment clearing, with no shipping wait involved at any point, even for gift-card purchases.',
    },
  ],
  cons: [
    {
      title: 'SMART is pre-ticked, not opted into',
      body: 'The checkout defaults to enrolling you in a paid, auto-renewing membership unless you actively opt out. Miss the checkbox and a one-off purchase quietly becomes a recurring monthly charge.',
    },
    {
      title: 'Cancelling is a genuine chore for some buyers',
      body: 'SMART cancellation is a dashboard toggle in theory, but user reviews repeatedly describe confirmation emails that never arrive and charges that continue after cancelling, which is the single biggest complaint in its review history.',
    },
    {
      title: 'Same provenance risk as any key reseller',
      body: 'A key sourced from a compromised card can still be revoked by the publisher after purchase, protection or not, since Gamivo does not originate its own stock.',
    },
  ],
  reputation: [
    {
      source: 'Sitejabber',
      value: 2.0,
      note: '431 reviews, complaints concentrated on the SMART subscription',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.6,
      note: 'aggressive pricing weighed against the pre-ticked subscription and provenance risk',
    },
  ],
  bestFor: [
    'Disciplined bargain hunters who always check the checkout before paying',
    'Shoppers who actively want SMART’s discount codes and are fine with a subscription',
    'Buyers on mainstream titles across Steam, Epic, Xbox or PlayStation',
    'Gift-card buyers who mainly want a low price on a specific code',
  ],
  notFor: [
    'Anyone who skims checkout screens without reading what is pre-selected',
    'Buyers who dislike managing a subscription just to make a single purchase',
    'Anyone unwilling to accept the same revoked-key risk every key marketplace carries',
  ],
  faq: [
    {
      q: 'Is Gamivo legit?',
      a: 'Yes, it is a real, long-running marketplace and most orders arrive without incident. It is a third-party reseller rather than a first-party store, though, so the usual marketplace caveats about key provenance still apply, and reading a seller’s individual rating before buying is worth the extra minute.',
    },
    {
      q: 'What is GAMIVO SMART and do I have to buy it?',
      a: 'No. SMART is an optional paid membership bundling discount codes with buyer protection, but it is pre-ticked at checkout by default. Untick the box before paying if you only want the one key at the plain marketplace price.',
    },
    {
      q: 'How do I cancel GAMIVO SMART?',
      a: 'Through the SMART section of your account dashboard, where a deactivation button ends the recurring charge from your next billing date. Reviewers report it sometimes takes persistence, so keep an eye on your statement after cancelling to confirm it actually stopped.',
    },
    {
      q: 'Can a Gamivo key stop working after I buy it?',
      a: 'Rarely, but yes, in the same way it can on any resale marketplace: if the key was originally purchased with a stolen card, the publisher can revoke it later regardless of how long ago you bought it. Buyer protection is the safeguard against exactly this.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'gamivo.com',
}
