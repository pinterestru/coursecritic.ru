/**
 * Brand page data for Movida (route: /brands/movida).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.movida.com.br/institucional/ and the company’s press kit at
 *     https://www.movida.com.br/press-kit — founded 2006, acquired by Grupo
 *     JSL in 2013, Movida Participações formed 2015, fleet and store counts
 *   - https://mobility-turismo.zendesk.com/hc/pt-br/articles/41658691244699-Movida-Perguntas-Frequentes-sobre-Aluguel-de-Carros
 *     and https://www.mercadoeeventos.com.br/noticias/servicos/movida-rent-a-car-passa-a-alugar-carro-para-jovens-de-19-e-20-anos/
 *     — minimum age (19), the “Locação Jovem” young-driver fee for 19–20,
 *     own-name card requirement, no cross-border travel policy
 *   - Third-party rental aggregators (discovercars.com, rental24h.com) —
 *     deposit-on-a-physical-card requirement and full-to-full fuel policy shape
 *   - https://www.reclameaqui.com.br (search-indexed listing) and
 *     https://www.trustpilot.com/review/www.movida.com.br — Reclame Aqui score
 *     and complaint volume, and the separate, much harsher Trustpilot rating
 *   - https://www.terra.com.br/mobilidade/movida-tem-pior-avaliacao-entre-grandes-locadoras-aponta-ranking
 *     — Movida ranked worst of Brazil’s three largest rental brands on Reclame Aqui
 *
 * ⚠️ Fees, deposit shape and the fuel surcharge rate are working values
 * captured on 2026-08-24 and move with fuel prices and location. Re-verify at
 * movida.com.br before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const movida: BrandPage = {
  slug: 'movida',
  providerId: 'movida',
  metaTitle: 'Movida review 2026 — Brazil car rental deposit and rules',
  metaDescription:
    'An independent Movida review: the physical-card deposit rule, the no-cross-border policy, and what the youth fee and reputation scores actually say.',
  intro:
    'Movida is a Brazilian rental company, not an international one — every rental starts and ends inside Brazil, and its own contract flatly forbids taking the car across a border, no exceptions made. That single rule, plus a strict own-name physical-card deposit requirement, matters more to whether your rental goes smoothly than the headline daily rate does.',
  about: [
    'Movida has operated in Brazil since 2006 and was acquired by logistics group Grupo JSL in 2013, which folded it into Movida Participações in 2015 to run car rental, used-car sales and fleet-outsourcing as separate lines under one listed company. It has since grown into one of Brazil’s largest rental brands by store count, with a network spanning major cities and airports nationwide and a fleet the company markets as one of the newest in the country.',
    'The business is domestic by design. Movida does not operate a cross-border programme: its rental contract prohibits taking a vehicle outside Brazilian territory, and doing so voids the insurance and protection coverage on the rental. For a reader outside Brazil, the practical takeaway is that this is a company to book with once you are already inside the country, not a way to plan a trip that crosses into a neighbouring one.',
    'Two conditions catch renters out more than the price does. The deposit must be secured with a physical card issued in the driver’s own name — no virtual cards, no borrowing a family member’s card, no exceptions reported. And the minimum age is 19, with drivers aged 19 and 20 paying an additional “Locação Jovem” young-driver fee that older programmes at other Brazilian rental firms do not always offer at all.',
  ],
  facts: [
    { label: 'Founded', value: '2006, Brazil' },
    { label: 'Parent company', value: 'Movida Participações' },
    { label: 'Minimum age', value: '19 (fee applies 19–20)' },
    { label: 'Cross-border travel', value: 'Not permitted' },
  ],
  plans: {
    title: 'What a rental actually requires beyond the daily rate',
    note: 'This is a car-rental company, not a subscription — the items below are the conditions a renter meets at pickup rather than pricing tiers. Movida does not publish one fixed deposit figure; it depends on vehicle class and location.',
    items: [
      {
        name: 'Standard rental, full-to-full fuel',
        price: 'Daily rate + refundable deposit on a physical card',
        detail:
          'Collect with a full tank, return it full, and no fuel charge applies. The deposit must be on a physical card in the main driver’s own name.',
        pick: true,
      },
      {
        name: 'Prepaid fuel',
        price: 'One tank charged at pickup',
        detail:
          'Pay for a full tank upfront and return the car empty — the alternative to returning it full yourself, priced as a convenience rather than a saving.',
      },
      {
        name: 'Protection add-ons',
        price: 'Priced per day on top of the base rate',
        detail:
          'Proteção Super reduces the damage excess, Proteção Contra Terceiros covers third-party claims, and Proteção Completa bundles both and extends to glass, lights and mirrors.',
      },
      {
        name: 'Locação Jovem (19–20-year-old drivers)',
        price: 'Daily rate + young-driver fee',
        detail:
          'Minimum age is 19; renters aged 19 and 20 pay this additional fee and must present a valid CNH.',
      },
    ],
  },
  pros: [
    {
      title: 'One of Brazil’s largest domestic networks',
      body: 'A large store count across major cities and airports makes one-way and last-minute domestic bookings genuinely practical, even outside the biggest hubs like São Paulo and Rio.',
    },
    {
      title: 'A relatively young fleet',
      body: 'The company markets its fleet age as a differentiator against older-fleet competitors, backed by large, sustained investment in new vehicles over the past few years.',
    },
    {
      title: 'Rents to 19-year-olds at all',
      body: 'The Locação Jovem programme opens rentals to 19- and 20-year-old drivers for an extra fee, an age band some competitors do not serve at all.',
    },
    {
      title: 'Clear, layered protection add-ons',
      body: 'The Super, Contra Terceiros and Completa tiers are distinct and named, rather than a single vague “insurance” line item bundled quietly into the daily rate.',
    },
  ],
  cons: [
    {
      title: 'No cross-border travel, full stop',
      body: 'The contract prohibits leaving Brazil in a Movida car and voids protection coverage if you do. Anyone planning a trip into a neighbouring country needs a different rental company entirely.',
    },
    {
      title: 'The card rule has no flexibility',
      body: 'Only a physical card in the driver’s own name is accepted for the deposit — no virtual wallets, no using a partner’s or parent’s card. Arrive without the right card and the rental does not happen.',
    },
    {
      title: 'Weak public reputation on independent review sites',
      body: 'Movida’s Trustpilot rating is poor, and Brazilian coverage has separately named it the lowest-rated of the country’s three largest rental brands on Reclame Aqui, the local complaints platform.',
    },
  ],
  reputation: [
    {
      // Reclame Aqui scores out of 10; the template renders every reputation
      // value on a five-star scale, so it is rescaled here (7.04/10 → 3.5/5)
      // and the original figure kept in the note.
      source: 'Reclame Aqui',
      value: 3.5,
      note: '7.04 out of 10 rescaled to five, from 3,000+ evaluated complaints, around 85% reported resolved',
    },
    { source: 'Trustpilot', value: 1.3, note: 'far smaller review volume, rated “Bad”' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'solid domestic network and fleet age, marked down for the reputation split and the rigid card rule',
    },
  ],
  bestFor: [
    'Travellers already inside Brazil who need a domestic, one-way-friendly rental',
    'Drivers aged 19 or 20 who cannot rent at all from stricter competitors',
    'Renters who hold a physical card in their own name and can show it',
    'Anyone who wants named, separate protection tiers rather than one bundled option',
  ],
  notFor: [
    'Anyone planning to drive into a neighbouring country — it is contractually not allowed',
    'Renters who only have a virtual card or a card in someone else’s name',
    'Readers weighing public reputation heavily — the scores here are mixed at best',
  ],
  faq: [
    {
      q: 'Can I take a Movida rental car out of Brazil?',
      a: 'No. Movida’s rental contract prohibits crossing into another country, and doing so voids the insurance and protection coverage on the vehicle entirely. If your trip crosses a border at any point, you need to book with a different rental company instead.',
    },
    {
      q: 'What card do I need for the deposit?',
      a: 'A physical credit card issued in the main driver’s own name, with enough available limit to cover the deposit. Movida does not accept virtual cards such as Google Pay or Apple Pay, or a card belonging to someone else, even a family member.',
    },
    {
      q: 'How old do I need to be to rent, and does age cost extra?',
      a: 'The minimum age is 19. Drivers aged 19 and 20 pay an additional young-driver fee under the Locação Jovem programme and must present a valid CNH; the fee no longer applies once the driver turns 21 years of age at any location.',
    },
    {
      q: 'What happens if I do not return the car with a full tank?',
      a: 'Movida charges a per-litre refuelling surcharge above the pump price for any fuel missing at return, unless you chose the prepaid-fuel option at pickup instead. Returning the tank full yourself avoids the surcharge entirely and is usually the cheaper choice.',
    },
    {
      q: 'Is Movida trustworthy?',
      a: 'The evidence is mixed. Reclame Aqui, Brazil’s dedicated complaints platform, scores Movida in the mid-range with a majority of complaints reported resolved, while its Trustpilot rating is considerably harsher on a much smaller review volume. Read both before deciding what weight to give either.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'movida.com.br',
}
