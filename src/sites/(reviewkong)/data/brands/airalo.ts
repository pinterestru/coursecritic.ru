/**
 * Brand page data for Airalo (route: /brands/airalo).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://www.airalo.com/ and the in-app catalogue — country coverage,
 *     local, regional and global plan pricing, validity windows
 *   - https://www.airalo.com/help — installation, activation and the data-only
 *     limitation (no phone number, no SMS)
 *   - https://www.trustpilot.com/review/airalo.com and the iOS App Store listing
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * airalo.com before launch and before each campaign. eSIM pricing is set per
 * country and changes without notice, so the "from" figures date quickly.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const airalo: BrandPage = {
  slug: 'airalo',
  providerId: 'airalo',
  metaTitle: 'Airalo review 2026 — coverage, per-GB cost, no number',
  metaDescription:
    'An independent Airalo review: the widest eSIM coverage of any app, how the pricing compares per gigabyte, and the limitation nobody warns you about before you land.',
  intro:
    'Airalo is the closest thing the travel eSIM market has to a default. It sells data plans in more than 200 countries and regions, the app installs the eSIM before you fly, and top-ups reuse the same profile so you are not reinstalling on every trip. The catch is one every eSIM shares and few explain: it is data only, with no phone number.',
  about: [
    'Airalo launched in 2019 as a marketplace rather than a carrier: it resells data from local network operators, packaged as prepaid eSIM profiles you install on your phone. The practical consequence is that quality varies by country according to which local partner is behind the plan — mostly excellent in dense markets, occasionally patchy in smaller ones.',
    'The workflow is the real product. You buy a plan before you leave, install the eSIM over Wi-Fi at home, and it activates when you connect to a network at your destination. You land with data already working, which is precisely when you need it: booking a ride, calling accommodation, opening a map. Anyone who has queued at an airport kiosk for a physical SIM will recognise the value.',
    'Pricing sits mid-market. There are cheaper per-gigabyte options, and on long stays the difference adds up. What you pay Airalo for is that a plan exists at all for the country you are going to, that the app works, and that support answers when a profile fails to activate. For most travellers that is the right trade; for a three-month stay in one country, buying a local SIM on arrival is still cheaper.',
  ],
  facts: [
    { label: 'Launched', value: '2019' },
    { label: 'Coverage', value: '200+ countries' },
    { label: 'Plan type', value: 'Data only' },
    { label: 'Top-ups', value: 'Reuse the same eSIM' },
  ],
  plans: {
    title: 'How the plans are priced',
    note: 'Local plans are almost always cheaper per gigabyte than the regional and global bundles. Only buy a regional plan if you are genuinely crossing several borders on one trip.',
    items: [
      {
        name: 'Local plans',
        price: 'from around $4.50 for 1 GB',
        detail:
          'One country, validity from 7 to 30 days. The best value if your trip is in a single place.',
        pick: true,
      },
      {
        name: 'Regional plans',
        price: 'from around $5 per GB',
        detail:
          'Europe, Asia, Latin America and other regions on one profile. Convenient for multi-country trips, worse value per gigabyte.',
      },
      {
        name: 'Global plans',
        price: 'from around $9 per GB',
        detail:
          'Coverage across a large list of countries. Priced accordingly — for constant, unpredictable travel only.',
      },
    ],
  },
  pros: [
    {
      title: 'If a country has eSIM service, Airalo sells it',
      body: 'The catalogue is the broadest in the category. For anyone travelling somewhere off the standard tourist track, that alone settles the decision.',
    },
    {
      title: 'You land already connected',
      body: 'Install over Wi-Fi before departure and the plan activates on arrival. No kiosk queue, no passport photocopy, no hunting for a shop that is open.',
    },
    {
      title: 'One eSIM, topped up forever',
      body: 'Return to a country and you top up the existing profile instead of installing a new one. Small thing, but it keeps your phone tidy after a dozen trips.',
    },
    {
      title: 'Support that understands carrier problems',
      body: 'When a profile fails to attach to a network, the answer is a technical one. Airalo publishes troubleshooting for exactly these carrier-side failures, and its support reputation on public review sites reflects that.',
    },
  ],
  cons: [
    {
      title: 'No phone number, and that bites',
      body: 'Data-only means no SMS. Banks, ride-hailing apps and two-factor codes that insist on a text will not reach you. Keep your home SIM active for SMS, or expect friction.',
    },
    {
      title: 'Not the cheapest per gigabyte',
      body: 'Nomad and Saily undercut Airalo on several routes. If you are buying 20 GB for a long stay, comparing per-gigabyte prices is worth the five minutes.',
    },
    {
      title: 'Quality follows the local partner',
      body: 'You are riding on a local operator’s network, so performance in a given country depends on which one Airalo signed. Mostly fine, occasionally a slow partner in a smaller market.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.4, note: 'high volume, consistent over several years' },
    { source: 'App Store (iOS)', value: 4.6, note: 'very large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.6,
      note: 'our composite across coverage, app quality and value',
    },
  ],
  bestFor: [
    'Travellers crossing several countries who want one app for all of them',
    'Anyone visiting a destination the smaller eSIM apps do not cover',
    'Short trips where landing connected matters more than saving $3',
  ],
  notFor: [
    'Anyone who needs a local phone number for SMS verification',
    'Long stays in a single country — a local SIM is cheaper',
    'Heavy tethering, where an unlimited plan from Holafly works out better',
  ],
  faq: [
    {
      q: 'Will my phone work with an eSIM?',
      a: 'Most phones from roughly 2019 onward support eSIM, but the handset must also be carrier-unlocked. Check both before you buy — an eSIM cannot be installed on a locked phone.',
    },
    {
      q: 'Can I keep my normal number while using it?',
      a: 'Yes. The eSIM sits alongside your physical SIM, so you can leave your home number active for calls and SMS while all data runs over the travel plan. Turn off data roaming on the home SIM or you will pay for both.',
    },
    {
      q: 'What happens if I run out of data?',
      a: 'You top up in the app, and the top-up applies to the same eSIM. Do it before you run out if you can: buying a top-up needs a connection, which is awkward when the connection is what expired.',
    },
    {
      q: 'Is a travel eSIM cheaper than roaming?',
      a: 'Almost always, unless your home carrier includes free roaming at your destination. Check your own plan first — some European and North American plans include enough roaming that an eSIM is unnecessary.',
    },
  ],
  updated: '2026-08-10',
  deepLink: 'airalo.com',
}
