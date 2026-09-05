/**
 * Brand page data for Platinumlist (route: /brands/platinumlist).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://platinumlist.net/for-organisers/about-us/ — founded 2009 in
 *     Dubai, started as a guest-list tool before adding ticketing, more than
 *     1,000 organisers in 20 countries, self-funded since a $10,000 seed
 *   - https://platinumlist.net/for-organisers/uae-ticketing/ — GCC/Gulf
 *     coverage across UAE, Saudi Arabia, Oman, Bahrain, Qatar and Kuwait
 *   - https://platinumlist.net/terms-and-conditions/TermsandConditionsCustomers
 *     and https://platinumlist.net/terms-and-conditions/RG-terms — tickets
 *     are non-refundable by default except where the paid Refund Guarantee
 *     add-on applies, refund claims must be filed within 30 days, and no
 *     refund is due for non-attendance or force-majeure cancellations
 *   - Google Play listing for "Platinumlist: Events & Tickets" — app rating
 *     and review volume
 *   - Trustpilot listing for platinumlist.net — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const platinumlist: BrandPage = {
  slug: 'platinumlist',
  providerId: 'platinumlist',
  metaTitle: 'Platinumlist review 2026 — Gulf ticketing, refunds explained',
  metaDescription:
    'An independent Platinumlist review: the Dubai-founded events ticketing platform covering the Gulf, why tickets are non-refundable by default, and what the paid Refund Guarantee actually buys.',
  intro:
    'Platinumlist is the largest event-ticketing platform in the Gulf, built in Dubai and now covering concerts, sports and cultural events across the UAE, Saudi Arabia, Oman, Bahrain, Qatar and Kuwait. It is a genuinely useful default for anyone attending events in that region. The detail that catches buyers out is the refund policy: tickets are non-refundable by default, and getting money back if an event changes usually depends on a paid add-on bought before that becomes a problem.',
  about: [
    'Platinumlist started in 2009 as a guest-list tool for a single Dubai club night before its founders added a simple ticketing feature that year, backed by just $10,000 in seed capital that remains, by the company’s own account, its only external funding to date. From that start it grew into the largest event-ticketing provider in the GCC, now used by more than 1,000 organisers across 20 countries, from concert promoters to museums and sports leagues.',
    'Its core coverage is the Gulf: UAE, Saudi Arabia, Oman, Bahrain, Qatar and Kuwait, with Dubai as its home market and the deepest event catalogue. For anyone outside that region, Platinumlist is worth knowing about mainly if you are travelling to or living in one of those countries — it is not a global ticketing marketplace in the way Eventbrite or Ticketmaster are, and its strongest inventory reflects that regional focus.',
    'Platinumlist’s default position, stated plainly in its own customer terms, is that purchased tickets cannot be refunded, exchanged or transferred except in specific circumstances. Where an event is cancelled or postponed, a refund claim can be filed within a set window, but non-attendance for any personal reason is explicitly excluded, as are cancellations caused by weather, fire, flood or other force-majeure events outside the organiser’s reasonable control, however disappointing that is for the ticket-holder.',
  ],
  facts: [
    { label: 'Founded', value: '2009, Dubai' },
    { label: 'Core markets', value: 'UAE, Saudi Arabia, Oman, Qatar, more' },
    { label: 'Organisers served', value: '1,000+ across 20 countries' },
    { label: 'Default refund policy', value: 'Non-refundable except by claim' },
  ],
  plans: {
    title: 'How ticket protection is priced',
    note: 'Standard tickets are non-refundable outside specific covered circumstances; the paid Refund Guarantee add-on is the main way to buy flexibility, and it must be added at checkout, not afterwards.',
    items: [
      {
        name: 'Standard ticket',
        price: 'Face value plus a processing/service fee',
        detail:
          'Non-refundable, non-exchangeable and non-transferable outside the specific circumstances set out in Platinumlist’s customer terms, chiefly event cancellation or postponement.',
        pick: true,
      },
      {
        name: 'Refund Guarantee add-on',
        price: 'An optional fee added at checkout',
        detail:
          'Must be selected before completing the order — it cannot be added after purchase. Refund claims are still submitted through customer support and may require supporting documents, and an administrative fee of up to 5% of ticket value can apply even when a refund is granted.',
      },
      {
        name: 'Event cancellation or postponement',
        price: 'Refund claim within 30 days of the announcement',
        detail:
          'The main scenario where a standard, non-guaranteed ticket can still be refunded. Processing and service fees stay non-refundable except where the event itself was cancelled or the service was never delivered.',
      },
    ],
  },
  pros: [
    {
      title: 'The dominant ticketing platform in its home region',
      body: 'Being the largest GCC provider means Platinumlist carries event inventory that smaller or international platforms simply do not have listed for Gulf venues and promoters.',
    },
    {
      title: 'A named, purchasable route to a refund',
      body: 'The Refund Guarantee add-on is a concrete product, not a vague promise — buyers who value flexibility can pay for it upfront rather than hoping goodwill applies later.',
    },
    {
      title: 'A strong mobile app rating on real volume',
      body: 'The Platinumlist app holds a solid rating on Google Play across thousands of reviews, suggesting the day-to-day ticket-buying experience itself is generally reliable, distinct from the refund process.',
    },
    {
      title: 'Self-funded and long-running rather than a recent entrant',
      body: 'Growing from a $10,000 seed in 2009 to the region’s largest provider without repeated external funding rounds points to a business with real, sustained demand behind it.',
    },
  ],
  cons: [
    {
      title: 'Non-refundable is the default position',
      body: 'Standard tickets cannot be refunded, exchanged or transferred outside specific covered circumstances, and simply not attending an event is explicitly excluded from any refund claim.',
    },
    {
      title: 'Force-majeure cancellations are not covered either',
      body: 'Event abandonment due to weather, fire, flood or similar circumstances outside the organiser’s control is explicitly stated as not qualifying for a refund, even though the event itself did not happen as planned.',
    },
    {
      title: 'Refund complaints recur even where a claim should apply',
      body: 'Public reviews describe promised refunds for cancelled or rescheduled events taking far longer than the stated processing window, or not materialising at all without repeated follow-up.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.1, note: 'around 550 reviews' },
    { source: 'Google Play', value: 4.1, note: 'app rating, roughly 8,800 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'strong regional coverage undercut by a narrow refund policy and recurring claim delays',
    },
  ],
  bestFor: [
    'Anyone attending concerts, sports or cultural events in the UAE, Saudi Arabia or other GCC markets',
    'Buyers who add the Refund Guarantee upfront when there is a real chance their plans could change',
    'Organisers and promoters wanting distribution across the Gulf’s largest ticketing audience',
    'Event-goers comfortable with a firm no-refund default for a simple change of mind',
  ],
  notFor: [
    'Anyone outside the Gulf looking for a general international ticketing marketplace',
    'Buyers who assume a standard ticket is refundable if an event is merely delayed rather than cancelled',
    'Anyone unwilling to pay extra for the Refund Guarantee who still wants a realistic path to a refund',
  ],
  faq: [
    {
      q: 'Can I get a refund if I just change my mind?',
      a: 'No. Platinumlist’s customer terms state that standard tickets are non-refundable, non-exchangeable and non-transferable outside specific covered circumstances, and personal non-attendance for any reason is explicitly excluded from any refund claim you might otherwise try to file after the event has passed.',
    },
    {
      q: 'What does the Refund Guarantee actually cover?',
      a: 'It is a paid add-on, selected at checkout, that opens a route to a refund claim beyond the standard non-refundable policy. Claims still go through customer support and may need supporting documents, and an administrative fee of up to 5% of ticket value can still apply.',
    },
    {
      q: 'What happens if the event is cancelled or postponed?',
      a: 'You can apply in writing for a refund within 30 days of the event, or within 30 days of a cancellation or postponement announcement, whichever applies to your situation. Processing and service fees generally stay non-refundable even then, unless the paid Refund Guarantee applies to that specific order.',
    },
    {
      q: 'Does Platinumlist operate outside the Gulf?',
      a: 'Its core, deepest coverage is the UAE, Saudi Arabia, Oman, Bahrain, Qatar and Kuwait, serving organisers in 20 countries in total. It is not a general global ticketing marketplace, so check event availability for your specific country before relying on it.',
    },
    {
      q: 'Is the Platinumlist app trustworthy?',
      a: 'The app carries a solid rating on Google Play across several thousand reviews, suggesting the buying flow itself works reliably for most users most of the time. Reviews about refunds after a cancellation are noticeably more mixed than reviews about the purchase experience itself, which is worth separating out.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'platinumlist.net',
}
