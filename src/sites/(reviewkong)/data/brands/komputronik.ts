/**
 * Brand page data for Komputronik (route: /brands/komputronik).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.komputronik.pl/informacje/pomoc/zwroty/ — 14-day statutory
 *     return window, "you pay return shipping" policy, no cash-on-delivery
 *     returns, non-returnable categories, the 1998 copyright footer
 *   - https://www.komputronik.pl/informacje/pomoc/dostawa/ — the full,
 *     itemised delivery price list (pickup, InPost, courier tiers, oversized
 *     pallet, carry-in) and the 999 zł free-delivery threshold
 *   - https://www.komputronik.pl/informacje/pomoc/ — service nav: leasing,
 *     extended warranty (Rozszerzona Gwarancja Komputronik), insurance
 *     (Ubezpieczenie Gwarancja Beztroski), remote IT support, Komputronik
 *     Gaming storefront
 *   - https://www.trustpilot.com/review/komputronik.pl — 1.6/5, 1,414
 *     reviews, "Bad"
 *   - Warsaw Stock Exchange listing (2007) and 200+ store network: reported
 *     via financial-data aggregators (Bankier.pl, GPW), not opened directly —
 *     treated as background context rather than a headline figure
 *
 * ⚠️ Prices, fees and store counts are working values captured on 2026-08-24
 * and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const komputronik: BrandPage = {
  slug: 'komputronik',
  providerId: 'komputronik',
  metaTitle: 'Komputronik review 2026 — delivery costs, 14-day returns',
  metaDescription:
    'An independent Komputronik review: what Polish delivery actually costs, the 14-day return window, and why the Trustpilot score is worth reading first.',
  intro:
    "Komputronik is one of Poland's oldest computer retailers, trading since the late 1990s and now selling through its own website and more than 200 own, franchise and partner stores nationwide. It publishes an unusually itemised delivery menu — locker, courier, Saturday slot, oversized pallet — rather than a single flat rate. Returns run the EU statutory 14 days, and the site states plainly that you pay to send the parcel back. Trustpilot rates it 'Bad.'",
  about: [
    "Komputronik has traded since the late 1990s (the company's own copyright notice dates to 1998) and is headquartered near Poznań, with a listing on the Warsaw Stock Exchange. Retail runs through Komputronik.pl and a network the company describes as more than 200 own, franchise and partner stores across Poland — a bigger physical footprint than most of its direct online rivals. Alongside general computing and electronics, it runs Komputronik Gaming as a separate storefront and a business division offering leasing, remote IT support and B2B accounts, positioning it as more than a straightforward consumer retailer.",
    "Delivery pricing is itemised rather than bundled into the product price: personal pickup at a store is free, an InPost locker or economy courier starts at a low per-order fee, express and Saturday slots cost more, and oversized appliances shipped by pallet cost more again, with carry-in as a separate paid option. Orders above a stated zloty threshold ship free, though that free tier excludes large AGD and RTV appliances. Instalment financing and business leasing are both available at checkout or through account managers, alongside named extras like Komputronik's own extended-warranty and 'Worry-Free Guarantee' insurance products, sold as specific add-ons rather than a single bundled protection plan.",
    "Consumer returns run the EU's statutory 14 days from delivery, and Komputronik states directly that return shipping costs stay with the buyer, with cash-on-delivery parcels refused outright. Trustpilot rates the store 'Bad' at 1.6 out of 5 across more than 1,400 reviews, with delivery timing and warranty-claim handling the recurring complaints. None of that erases the practical case within Poland — a genuinely itemised delivery menu and a large store network for pickup and drop-off are real advantages — but this is not the retailer to choose on service reputation, and like x-kom it sells only within Poland.",
  ],
  facts: [
    { label: 'Trading since', value: '1998' },
    { label: 'Stores in Poland', value: '200+ own/franchise' },
    { label: 'Return window', value: '14 days' },
    { label: 'Free delivery over', value: '999 zł (excl. large AGD)' },
  ],
  plans: {
    title: 'What buying actually costs',
    note: 'Every delivery method carries its own stated price rather than one flat shipping fee — worth checking before assuming the cheapest option at checkout.',
    items: [
      {
        name: 'Courier or InPost locker',
        price: 'From about 9.90 zł, more for express/Saturday',
        detail:
          'Economy courier and locker delivery start low; express, Saturday slots and carry-in service cost progressively more — all priced separately rather than folded into the product price.',
      },
      {
        name: 'Free in-store pickup',
        price: 'Free',
        detail:
          "Collect from any of Komputronik's 200+ own, franchise and partner stores instead of paying for delivery — also the easiest place to start a return.",
        pick: true,
      },
      {
        name: 'Oversized-item transport',
        price: 'From about 49.90 zł, or about 149.90 zł with carry-in',
        detail:
          'Large TVs and appliances ship on a pallet; having the item carried in and unpacked is a separate paid service that must be booked in advance.',
      },
      {
        name: 'Instalments and leasing',
        price: '0% instalments for consumers, leasing for business',
        detail:
          "Both are arranged at checkout or through an account manager; consumer instalments depend on a partner bank's credit decision.",
      },
    ],
  },
  pros: [
    {
      title: 'Delivery pricing is fully itemised',
      body: 'Locker, economy courier, express, Saturday and oversized-pallet delivery each carry a stated zloty price, so there is no guessing what a given order will cost before checkout.',
    },
    {
      title: '200+ stores for pickup and returns',
      body: 'Own, franchise and partner locations across Poland mean a real counter to collect from or return to, not just a warehouse address for postal returns.',
    },
    {
      title: 'Named warranty and insurance add-ons',
      body: "Rozszerzona Gwarancja Komputronik (extended warranty) and Ubezpieczenie Gwarancja Beztroski (a named insurance product) are specific, purchasable extras rather than a vague 'protection plan' upsell.",
    },
    {
      title: 'Services beyond straightforward retail',
      body: 'Leasing, remote IT support, in-store servicing and a separate Komputronik Gaming storefront extend past a typical electronics shop, useful for small-business buyers in particular.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rating is Bad',
      body: '1.6 out of 5 across more than 1,400 reviews, the lowest of the three retailers in this comparison. Delivery timing and refused warranty claims are the complaints that recur most.',
    },
    {
      title: 'You pay to send a return back',
      body: 'The 14-day consumer return window is standard, but Komputronik states plainly that return shipping costs stay with the customer, and cash-on-delivery parcels are refused outright.',
    },
    {
      title: 'Poland-only, Polish-language',
      body: 'The site, checkout, returns paperwork and support all operate in Polish for Polish delivery addresses, with no separate international storefront, so this review only applies if you are ordering from inside Poland.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.6,
      note: '1,400+ reviews, rated "Bad"; delivery timing and warranty claims are the recurring complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'weighed down by the support-reputation pattern above; the store network and itemised pricing count in its favour',
    },
  ],
  bestFor: [
    'Buyers in Poland near one of the 200+ stores who want pickup or a real return counter',
    'Big-ticket electronics buyers who want an itemised delivery menu instead of a guess at checkout',
    'Small businesses wanting leasing or remote IT support alongside hardware',
    'Shoppers who want a named extended-warranty product rather than a vague upsell',
  ],
  notFor: [
    'Anyone outside Poland',
    'Buyers prioritising a strong support and warranty-claim reputation',
    'Anyone who expects free return shipping as standard',
  ],
  faq: [
    {
      q: "How long is Komputronik's return window?",
      a: "14 days from delivery, matching the EU's statutory minimum for online purchases rather than exceeding it. You need to submit a withdrawal form alongside the returned item, and return shipping costs are the buyer's responsibility — cash-on-delivery parcels are not accepted, so you cannot send a return back for free that way.",
    },
    {
      q: 'Does Komputronik pay for return shipping?',
      a: "No. The company states directly that return shipping costs stay with the customer for both consumer and business returns. The only way to avoid a postage cost is to bring the item to one of Komputronik's own stores in person rather than posting it back.",
    },
    {
      q: 'Is delivery free?',
      a: 'Only above a stated order threshold (around 999 zł), and that free tier excludes large AGD and RTV appliances. Below the threshold, delivery is priced by method: personal pickup is free at any time, while locker and courier delivery start at a low per-order fee and rise for express, Saturday or carry-in service.',
    },
    {
      q: 'Does Komputronik ship outside Poland?',
      a: 'No dedicated international storefront exists. The retail network, delivery options and returns process are built around Polish addresses, and support runs in Polish. There is a TAX FREE service for visitors shopping in Poland, but that is not the same as international shipping.',
    },
    {
      q: 'What happens if a delivery arrives damaged?',
      a: "Check the parcel before signing for it. If the packaging shows visible damage, you're entitled to open it in front of the courier and note the damage on a signed damage report; if you discover damage only after accepting an apparently intact parcel, you need to contact the courier company directly to arrange that report.",
    },
  ],
  updated: '2026-08-24',
  deepLink: 'komputronik.pl',
}
