/**
 * Brand page data for ASUS Store (route: /brands/asus), reviewed via its
 * country-specific eShop (asus.com storefronts, e.g. shop.asus.com/us).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://eshop.asus.com/us/faq/article/return-policy — 30-day return
 *     window, 15% restocking fee conditions, excluded items
 *   - https://www.asus.com/us/support/faq/1041573/ and
 *     https://www.asus.com/us/site/APC/ — ASUS Premium Care / Accidental
 *     Damage Protection terms, activation window, exclusions
 *   - https://eshop.asus.com/us/faq/category/payment-faq and
 *     https://eshop.asus.com/us/faq/article/What-payment-methods-can-I-use
 *     — Affirm financing at checkout, no Klarna
 *   - https://shop.asus.com/us/faq/article/Do-you-ship-internationally —
 *     country-locked eShop, no cross-border shipping
 *   - Company background: ASUS/ASUSTeK founding (1989, Taipei), Taiwan Stock
 *     Exchange listing, global rank in motherboards, gaming laptops and GPUs
 *     (Wikipedia and industry reporting)
 *   - Standard warranty length by category (1 year laptops/desktops/AIOs,
 *     3 years standard motherboards and graphics cards, 5 years on TUF-series
 *     motherboards) — ASUS support pages and manufacturer warranty documents
 *   - Independent Trustpilot review volume for www.asus.com was checked but
 *     the exact current TrustScore could not be confirmed from an openable
 *     page, so no numeric rating is printed for that source; the recurring
 *     complaint themes cited (repair turnaround, customer service) are drawn
 *     from the visible review content in search results
 *
 * ⚠️ Prices, financing terms and warranty lengths are working values captured
 * on 2026-08-24 and MUST be re-verified against the relevant country eShop
 * before any campaign — ASUS warranty terms in particular vary by product
 * category and region. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const asus: BrandPage = {
  slug: 'asus',
  providerId: 'asus',
  metaTitle: 'ASUS Store review 2026 — warranty, returns, financing',
  metaDescription:
    'An independent ASUS Store review: how the 30-day return window and 15% restocking fee work, what the warranty covers by product, and Affirm financing.',
  intro:
    'ASUS is best known for motherboards and graphics cards, but its own eShop sells the full range direct: laptops, monitors, peripherals and components, priced without a marketplace seller in between. The store backs purchases with a 30-day return window and Affirm financing, and warranty length actually varies by category — three to five years on motherboards and GPUs, one year on laptops and desktops. That gap catches buyers who assume one warranty covers everything ASUS sells.',
  about: [
    'ASUS was founded in Taipei in 1989 by four engineers who had worked together at Acer, starting out as a motherboard design house before diversifying into graphics cards, laptops, monitors and networking gear. The company remains a Taiwan Stock Exchange-listed manufacturer with a footprint in more than 50 countries, and by shipment volume it ranks among the world’s largest PC vendors — it holds the top spot in motherboards outright and competes for second place in gaming laptops and graphics cards behind or alongside MSI. That manufacturing scale is what the eShop is built to sell direct.',
    'The eShop is not one global storefront but a set of country-specific stores under regional subdomains — shop.asus.com/us, for example, ships only within the United States, and the same restriction applies elsewhere; there is no single international checkout. Within a given country’s store the catalogue spans the full ASUS range: ROG and TUF gaming laptops, Zenbook and Vivobook consumer laptops, motherboards, graphics cards, monitors, routers and peripherals, all sold at ASUS’s own list price rather than a marketplace bid. Payment includes major cards and, in the US store, Affirm instalment financing at checkout.',
    'Warranty length is not uniform: standard consumer laptops, desktops and all-in-ones carry one year of hardware cover, while motherboards and graphics cards ship with three years as standard (five years on TUF-series boards), a split that trips up buyers who assume a single ASUS warranty applies across the catalogue. ASUS Premium Care is the paid extension, adding accidental-damage cover for drops, spills and power surges if activated within six months of purchase, though it excludes battery, software and bundled accessories. Returns run 30 days from delivery, with a 15% restocking fee on items sent back with cosmetic damage, missing packaging or missing accessories.',
  ],
  facts: [
    { label: 'Founded', value: '1989, Taipei' },
    { label: 'Returns', value: '30 days, 15% restock fee' },
    { label: 'Warranty', value: '1yr laptops, 3-5yr boards' },
    { label: 'Financing', value: 'Affirm instalments (US)' },
  ],
  plans: {
    title: 'What it costs to buy on asus.com',
    note: 'There is no subscription — the real variable is which country’s eShop you buy from, since only Affirm financing (US store) and the Premium Care add-on change the price you actually pay.',
    items: [
      {
        name: 'Standard purchase',
        price: 'listed price, no financing',
        detail:
          'Comes with a hardware warranty that varies by product: one year on laptops, desktops and AIOs, three years (five on TUF boards) on motherboards and graphics cards.',
        pick: true,
      },
      {
        name: 'Affirm financing',
        price: 'listed price split into instalments',
        detail:
          'Available at checkout on the US eShop; ASUS does not publish a Klarna or comparable buy-now-pay-later option beyond Affirm.',
      },
      {
        name: 'ASUS Premium Care',
        price: 'add-on protection plan',
        detail:
          'Extends the standard warranty and, on eligible laptops, adds accidental-damage cover if activated within six months of purchase — not available on desktops, AIOs or handhelds.',
      },
    ],
  },
  pros: [
    {
      title: 'Warranty length matches what you bought',
      body: 'Motherboards and graphics cards carry three years of cover as standard, five on TUF-series boards — genuinely competitive terms for the categories ASUS is best known for.',
    },
    {
      title: 'One store for the whole ASUS range',
      body: 'ROG and TUF gaming laptops, Zenbook and Vivobook models, motherboards, GPUs, monitors and routers all sit in the same checkout, at ASUS’s own listed price rather than a reseller markup.',
    },
    {
      title: 'Affirm spreads the cost of a flagship build',
      body: 'US buyers can split a laptop or GPU purchase into instalments through Affirm at checkout, without needing a separate store card or a third-party retailer.',
    },
    {
      title: 'Premium Care actually covers accidents',
      body: 'The paid extension adds cover for drops, spills and power surges on eligible laptops, a genuine step up from the bare hardware-defect warranty most buyers start with.',
    },
  ],
  cons: [
    {
      title: 'Laptops get a thinner warranty than components',
      body: 'Standard cover on laptops, desktops and all-in-ones is one year, hardware defects only — a fraction of the three-to-five years ASUS gives its own motherboards and graphics cards.',
    },
    {
      title: 'Independent reviews cluster around slow repairs',
      body: 'ASUS’s own Trustpilot page carries thousands of reviews and the recurring complaint theme is repair turnaround and customer-service responsiveness rather than the hardware itself — read the recent ones before you buy something you might need serviced.',
    },
    {
      title: 'The eShop will not ship across borders',
      body: 'Each country’s store is locked to that market — the US eShop will not ship outside the US, so buyers elsewhere are routed to a separate, differently priced regional storefront.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'weighted for category breadth and warranty terms on components against a weak support reputation',
    },
  ],
  bestFor: [
    'Buyers who want motherboards or GPUs backed by a genuine 3-5 year warranty',
    'US-based shoppers who want to spread a laptop or GPU purchase with Affirm',
    'Anyone who wants ROG, TUF, Zenbook and component ranges from one checkout',
    'Buyers willing to add Premium Care rather than rely on the 1-year base cover',
  ],
  notFor: [
    'Buyers outside a given eShop’s home country looking for one international checkout',
    'Anyone who has read the Trustpilot service complaints and wants reassurance first',
    'Shoppers who plan to open, test and possibly return items — the 15% restocking fee bites',
  ],
  faq: [
    {
      q: 'How long is the ASUS warranty?',
      a: 'It depends what you buy. Laptops, desktops and all-in-ones carry a one-year hardware warranty as standard, while motherboards and graphics cards ship with three years (five on TUF-series boards) — check the specific product page rather than assuming one policy covers everything.',
    },
    {
      q: 'Can I return an opened ASUS product?',
      a: 'Yes, within 30 days of delivery, but expect a 15% restocking fee if the item comes back with cosmetic damage, missing packaging or missing accessories. Software, driver discs and products with scratched warranty-card activation codes are not returnable at all.',
    },
    {
      q: 'Does ASUS offer financing?',
      a: 'The US eShop offers Affirm at checkout, splitting the cost into instalments. ASUS does not currently support Klarna or a comparable buy-now-pay-later option, and financing availability depends on which country’s store you are buying from.',
    },
    {
      q: 'Is ASUS Premium Care worth adding?',
      a: 'If you want cover for drops, liquid damage or power surges, yes — the base warranty is defects-only and does not include accidental damage. Premium Care must be activated within six months of purchase, and it excludes battery, software and bundled accessories.',
    },
    {
      q: 'Can I buy from the ASUS eShop outside my own country?',
      a: 'No. Each country’s ASUS eShop, for example the US store at shop.asus.com/us, ships only within that country. Buyers elsewhere need to use their own region’s store or a third-party retailer that carries ASUS products.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'asus.com',
}
