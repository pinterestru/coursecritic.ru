/**
 * Ranked guide: six one-stop carriers for Europe/Americas ↔ Asia.
 *
 * SOURCES (checked 21 August 2026 for the original four; 24 August 2026 for
 * Air India and Malaysia Airlines) — fare families and baggage from each
 * carrier's own conditions, certifications from Skytrax, awards from the
 * awarding body itself:
 *   - https://www.qatarairways.com/tradeportal/en/NewFareFamilies.html
 *   - https://www.qatarairways.com/en/baggage/allowance.html
 *   - https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/
 *   - https://www.emirates.com/us/english/information/optional-services/
 *   - https://www.etihad.com/en-us/help/baggage-information
 *   - https://www.turkishairlines.com/en-int/any-questions/fare-rules/
 *   - https://www.turkishairlines.com/en-int/any-questions/seat-selection-terms-and-conditions/
 *   - https://skytraxratings.com/a-z-of-airline-ratings
 *   - https://skytraxratings.com/airlines/air-india-rating
 *   - https://skytraxratings.com/airlines/malaysia-airlines-rating
 *   - https://www.airhelp.co.uk/airlines/air-india/reviews/
 *   - https://www.trustpilot.com/review/malaysiaairlines.com
 *   - https://www.worldairlineawards.com/airline-of-the-year-winners/
 *   - https://www.airlineratings.com/articles/worlds-best-airlines-for-2026-by-airline-ratings
 *
 * ⚠️ Fares are route- and date-dependent and fare rules change without notice,
 * so nothing here is a quotable price and the whole page needs re-verifying
 * before any campaign. Note in particular that Skytrax certifies Emirates,
 * Etihad, Turkish, Air India and Malaysia Airlines at four stars and only
 * Qatar at five (Malaysia Airlines held five-star certification in the past),
 * and that the 2026 Skytrax World Airline Awards are not announced until 18
 * September 2026. Air India and Malaysia Airlines are ranked below the
 * original four on the evidence in their own brand pages
 * (../../brands/airindia.ts, ../../brands/malaysiaairlines.ts) — an
 * unresolved, contested investigation into the June 2025 Ahmedabad crash for
 * Air India, and a 1.7/5 Trustpilot score built on delay and service
 * complaints for Malaysia Airlines — not because either lacks a real network
 * or a genuine fare advantage. See ../../../README.md.
 */
import type { Metadata } from 'next'

import ArticleFaq from '../../../components/articles/ArticleFaq'
import ArticleSection from '../../../components/articles/ArticleSection'
import ArticleShell from '../../../components/articles/ArticleShell'
import AuthorCard from '../../../components/articles/AuthorCard'
import CtaBanner from '../../../components/articles/CtaBanner'
import FactStrip from '../../../components/articles/FactStrip'
import RankCard from '../../../components/articles/RankCard'
import RatingSummary from '../../../components/articles/RatingSummary'
import Toc from '../../../components/articles/Toc'
import { getArticle } from '../../../data/articles'
import { articleMetadata } from '../../../data/guides/metadata'
import type { FactItem, FaqItem, RankEntry } from '../../../data/guides/types'

const meta = getArticle('best-airlines-europe-asia')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Four airlines dominate the one-stop routings between Europe or the Americas and Asia, and a fare search puts them on one screen as though the numbers meant the same thing. They do not. The cheapest ticket on each of these carriers excludes something different — a bag on one, the right to change your dates on another, your seat on all but one — so the cheapest fare on the screen is rarely the cheapest fare for your trip. Two more airlines belong on this page for a different reason: Air India and Malaysia Airlines do not match that network breadth, but for a fare search that starts or ends in India or Malaysia, or routes through Kuala Lumpur to Australia, they are often the cheapest and most direct option going — and it would be dishonest to leave them out just because their reputations are more complicated than the four above them.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'normalise', label: 'What the cheapest fare leaves out' },
  { id: 'detail', label: 'The six airlines in detail' },
  { id: 'hubs', label: 'Which hub hurts least' },
  { id: 'money', label: 'What we earn, and from whom' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Airlines compared', value: '6' },
  { label: 'Bag in the cheapest fare', value: '0–23 kg' },
  { label: 'Skytrax 5-star', value: '1 of the 6' },
  { label: 'Free advance seat', value: 'Rare across all six' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'qatarairways',
    bestFor: 'Fixed dates, a checked bag and the strongest independent ratings',
    verdict:
      'Qatar is the only one of these six that Skytrax certifies at five stars, it took the Skytrax World’s Best Airline title for 2025 and AirlineRatings named it world’s best for 2026 — and its cheapest fare still includes a checked bag, a meal and seat-back entertainment. Doha is a single terminal with no shuttle to catch, which is a real advantage on a tight connection. The catch is not luggage but rigidity: Qatar’s own fare table marks Economy Lite as neither changeable nor refundable, so if your dates might move, price Economy Classic and compare that instead. Do that and Qatar is usually still the airline to beat.',
    spotlight: {
      label: 'Lite means locked',
      body: 'Economy Lite includes 20 kg — or one 23 kg piece to and from the Americas and Africa — but permits no changes and no refunds at any price. Classic is the cheapest fare you can actually alter.',
    },
  },
  {
    providerId: 'emirates',
    bestFor: 'Travellers with luggage, and routes the smaller networks cannot reach in one stop',
    verdict:
      'Emirates has no hand-baggage-only fare at all: Economy Special, the entry ticket, carries 20 kg on most routes and one 23 kg piece to and from the Americas and Africa. Combined with 152 cities in 80 countries, that makes it the most forgiving airline here to book badly. Two things hold it below Qatar. Skytrax certifies it at four stars, and its own retrofit programme covers 219 aircraft with only about half due to be finished by December 2026 — so the cabin you get is genuinely unpredictable. Advance seat selection on the two cheapest fares runs from roughly US$7 to US$260 a sector, though a standard seat is free once check-in opens.',
    spotlight: {
      label: 'The bag is included; the seat is not',
      body: 'Emirates publishes seat-selection fees of about US$7–260 per passenger per sector on Special and Saver fares. A couple flying return can add a meaningful sum to a fare that looked competitive.',
    },
  },
  {
    providerId: 'etihad',
    bestFor: 'Hand-luggage travellers who would rather connect through Abu Dhabi than Dubai',
    verdict:
      'Etihad is the one carrier here whose cheapest fare carries no checked baggage anywhere on the network — Economy Basic is cabin bag only, and Etihad Guest status does not add an allowance to it. Read that way, its headline fares are not comparable with the other three at all; Economy Value is. What you get in exchange is the least punishing transfer of the four Gulf and Turkish options, one of the youngest long-haul fleets flying, and a stopover programme that turns a layover into a couple of nights in Abu Dhabi, subject to its published conditions. Skytrax certifies Etihad at four stars, and its network is the smallest here, so check the whole routing rather than the first fare.',
    spotlight: {
      label: 'The only fare here with no bag at all',
      body: 'Economy Basic is cabin baggage only, on every route. Compare Etihad’s Economy Value against the others’ entry fares if you are checking anything.',
    },
  },
  {
    providerId: 'turkishairlines',
    bestFor: 'Secondary cities nobody else reaches in one stop, and Star Alliance collectors',
    verdict:
      'Turkish flies to more countries than any other airline — Guinness certified 131 in December 2024 — and for a great many secondary cities in Africa, Central Asia and eastern Europe it is the only realistic one-stop option. It is also the hardest of the four Gulf and Turkish carriers to price, because EcoFly’s checked allowance is route-dependent: Turkish’s own fare rules acknowledge routes with no checked baggage in the package at all, and the figure for yours only appears at booking. Seat selection is chargeable on EcoFly and ExtraFly, the terminal is vast with no internal train, and Turkish ranked 45th of 117 airlines in the 2025 AirHelp Score, with claims processing its weakest measure.',
    spotlight: {
      label: 'Open the baggage panel before you compare',
      body: 'EcoFly can be hand baggage only on an intra-Europe sector and carry an allowance on a long-haul one. There is no single published figure — only the one shown for your route.',
    },
  },
  {
    providerId: 'malaysiaairlines',
    bestFor:
      'A genuinely free Kuala Lumpur stopover en route to Australia or New Zealand, and a bag on every fare',
    verdict:
      'Malaysia Airlines earns its place on this list for a narrower reason than the four above it: Kuala Lumpur is a deliberate, useful stopover between Europe and Australia or New Zealand, and a qualifying itinerary can add a genuinely free domestic or regional leg through the Bonus Side Trip programme — a real saving, not a marketing line, though it excludes the cheapest Economy Value fare. oneworld membership since 2013 means Enrich miles credit into a network that already includes British Airways, Qatar Airways and Cathay Pacific, and Economy Value still checks a 20 kg bag, more generous than some cheapest fares in this comparison. Skytrax credits real recent investment on the A350 specifically and certifies the airline at four stars — it held five stars in the past, and MAG’s own December 2025 plan puts it 27th in the world today, targeting Skytrax’s top ten only by 2030. What actually moves it down this list is service recovery rather than the aircraft: Trustpilot puts it at 1.7 out of 5 from several hundred reviews, dominated by delay and customer-service complaints. Book it for the stopover and the fare, and budget extra patience if anything goes wrong.',
    spotlight: {
      label: 'The stopover is real; the Trustpilot score isn’t good',
      body: 'Bonus Side Trip adds a genuine no-base-fare leg on Basic fares and above, but Malaysia Airlines’ 1.7-out-of-5 Trustpilot score is the weakest service-recovery reputation of any airline in this guide.',
    },
  },
  {
    providerId: 'airindia',
    bestFor:
      'The most direct route into India on a Star Alliance ticket, with a bag on the cheapest international fare',
    verdict:
      'Air India’s case for a place here is different in kind from the Gulf and Turkish carriers above it: it is not primarily a connector onward across Asia, it is the most direct, often cheapest way from Europe into India itself, with Star Alliance status matching and a genuinely funded turnaround behind it. Skytrax raised its certification from three stars to four in 2026 on the strength of the Vihaan.AI programme — a Boeing 787 cabin retrofit whose first refreshed aircraft entered service in April 2026, and roughly 570 new aircraft on order since Tata Sons took the airline back from the state in 2022. The entry-level Value fare still checks a bag on international routes, which is not true of every airline’s cheapest fare in this comparison. Two things keep it at the bottom of this list. Skytrax’s own rating explicitly flags inconsistent product standards between retrofitted and legacy aircraft, so the cabin you are sold is not reliably the cabin you fly, and the airline is still operating under the shadow of the June 2025 Ahmedabad crash, whose investigation remained contested in public reporting as of August 2026 — a live overhang none of the other five carriers here has to answer for. AirHelp’s 2025 score placed it 72nd of 117 airlines, driven down chiefly by weak claims processing. Book it for the destination and the fare, not for a polished transfer experience.',
    spotlight: {
      label: 'A funded retrofit, and an unresolved investigation',
      body: 'The first cabin-refreshed Boeing 787 is already flying and Skytrax moved Air India to four stars on the strength of it — but Skytrax’s own write-up still flags an inconsistent fleet, and the June 2025 Ahmedabad crash investigation was unresolved in public reporting as of August 2026.',
    },
  },
]

const faq: FaqItem[] = [
  {
    q: 'Which of these airlines includes a checked bag in its cheapest fare?',
    a: 'Qatar Airways and Emirates both do, on every route: 20 kg on weight-concept routes, or one 23 kg piece to and from the Americas and Africa. Malaysia Airlines’ Economy Value also includes a 20 kg bag on every route it flies, and Air India’s Value fare includes one checked bag on international routes, though its domestic allowance is lighter. Etihad’s Economy Basic includes none anywhere. Turkish Airlines’ EcoFly varies by route and can be nil. That single difference is usually larger than the gap between the headline fares.',
  },
  {
    q: 'Do any of them let me choose a seat for free on the cheapest fare?',
    a: 'Not in advance, on the four carriers that publish a seat-selection fee schedule. Emirates and Qatar both charge to pre-select on their entry fares but assign a standard seat free once online check-in opens. Turkish charges on EcoFly and ExtraFly, with free standard selection starting at FlexFly. Etihad’s Economy Basic has no seat selection at all. Air India and Malaysia Airlines don’t publish an equivalent fee table as clearly, so check at booking on either. If you are two people who want to sit together, budget for it regardless of which of the six you book.',
  },
  {
    q: 'Which is the best airline of the six?',
    a: 'On independent assessment, Qatar Airways: it is the only one Skytrax certifies at five stars, it won the Skytrax World’s Best Airline title for 2025 and AirlineRatings named it world’s best for 2026. Emirates, Etihad, Turkish, Air India and Malaysia Airlines are all certified at four stars (Malaysia Airlines held five-star certification in the past). Bear in mind the 2026 Skytrax awards are not announced until September 2026, so nobody holds a 2026 Skytrax title yet.',
  },
  {
    q: 'Can I change or cancel a cheap ticket?',
    a: 'Rarely, and this is where the entry fares differ most. Qatar’s Economy Lite permits neither changes nor refunds at any price. Turkish’s EcoFly is non-refundable beyond the standard 24-hour window and changes are barred or charged depending on the route. Emirates gives one free date change network-wide on tickets booked from 2 April 2026 but excludes Economy Special from the wider flexibility terms it introduced in August 2026. Etihad’s Basic carries its most restrictive change and refund rules. Air India’s Value and Malaysia Airlines’ Economy Value are, in each airline’s own words, the most restrictive fares on their respective ladders too — check the current fare rules on each airline’s own site before booking either.',
  },
  {
    q: 'Which hub is least painful to connect through?',
    a: 'Abu Dhabi and Doha, for different reasons: Abu Dhabi is simply smaller and quieter, and Hamad International is a single terminal with concourses under one roof and no inter-terminal shuttle. Dubai is the busiest, at 95.2 million passengers in 2025 — its own operator describes it as running at the edge of physical capacity. Istanbul is the longest walk, an enormous terminal with no internal train. Delhi and Kuala Lumpur are a different case: neither is primarily a transfer airport for this itinerary, since most itineraries through them end, rather than pass through, in India or Malaysia.',
  },
  {
    q: 'Does any of them have a proper premium economy?',
    a: 'Only Emirates, which now fits it on every A350 and on retrofitted A380s and 777s. Qatar’s Comfort Plus is a paid extra-legroom seat inside the economy cabin, not a cabin of its own. Turkish has no premium economy and its chief executive described it in June 2026 as under evaluation for 2028. Neither Air India nor Malaysia Airlines currently runs a separate premium economy cabin either, based on their published fare ladders.',
  },
  {
    q: 'Is a stopover worth taking?',
    a: 'If your schedule has slack, yes — both Etihad and Turkish let you break the journey without repricing the ticket, Turkish including a hotel night on qualifying itineraries. Malaysia Airlines runs a related but different perk at Kuala Lumpur: Bonus Side Trip adds a free domestic or regional leg to a qualifying transit, at zero base fare, though it excludes the cheapest Economy Value fare. Air India has no equivalent programme. All of these carry conditions on connection length, booking lead time and eligibility, so read the current terms rather than the headline before planning a trip around one.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          This ranking is not built on hands-on flying — nobody samples six airlines across the same
          routes and dates, and guides that imply otherwise are describing one trip. What can be
          checked is what each carrier promises in writing: its published fare families, its baggage
          conditions, its seat-selection fees, and the certifications awarded to it by Skytrax and
          AirlineRatings. That is the basis for everything below.
        </p>
        <p>
          The finding that matters is simple. <strong>The entry fares are not comparable.</strong>{' '}
          One of these airlines sells a cheapest ticket with no checked bag at all, one sells a
          cheapest ticket that cannot be changed at any price, and one will not tell you what the
          allowance is until you reach the payment page. Normalise for that and the ordering below
          falls out.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best airlines for one-stop Europe–Asia flights" />
      </ArticleSection>

      <AuthorCard vertical="travel" />

      <ArticleSection id="normalise" title="What the cheapest fare leaves out">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Every one of these airlines sells an unbundled entry fare, and every one unbundles a
            different thing. Taken from each carrier’s own published conditions:
          </p>
          <ul>
            <li>
              <strong>Qatar Airways — Economy Lite.</strong> Includes 20 kg checked, or one 23 kg
              piece to and from the Americas and Africa. Standard seat free only once online
              check-in opens. <strong>No changes and no refunds at all</strong>, per Qatar’s own
              fare table.
            </li>
            <li>
              <strong>Emirates — Economy Special.</strong> Includes 20 kg checked, or one 23 kg
              piece on the same route groups. Advance seat selection chargeable from roughly US$7 to
              US$260 a sector. Excluded from the flexibility terms Emirates introduced for
              Dubai-bound travel in August 2026.
            </li>
            <li>
              <strong>Etihad — Economy Basic.</strong> <strong>No checked baggage at all</strong>,
              on any route, and no seat selection. Elite status does not add an allowance to it.
            </li>
            <li>
              <strong>Turkish Airlines — EcoFly.</strong> Checked allowance{' '}
              <strong>varies by route and can be nil</strong>; Turkish’s own fare rules refer to
              routes without a checked allowance in the package. Seat selection chargeable.
              Non-refundable beyond the 24-hour window.
            </li>
          </ul>
          <p>
            So among the four Gulf and Turkish carriers, a like-for-like comparison is not their
            headline entry fares side by side. It is{' '}
            <strong>
              Qatar’s Classic against Emirates’ Special against Etihad’s Value against Turkish’s
              ExtraFly
            </strong>{' '}
            — the cheapest fare on each airline that carries a bag and can be altered. Price those
            four and the ranking below is the one the numbers usually support. Air India and
            Malaysia Airlines are simpler by comparison on this one point: both check a bag on their
            cheapest fare already — Malaysia Airlines’ Economy Value on every route it flies, Air
            India’s Value on international routes — so neither needs the same fare-family
            translation before you can compare it fairly.
          </p>
          <p>
            One more line item people forget:{' '}
            <strong>
              none of the four Gulf and Turkish carriers includes advance seat selection in its
              cheapest fare.
            </strong>{' '}
            Emirates and Qatar both hand out a standard seat free once check-in opens, which is fine
            alone and useless if you are two people who want to sit together on a fourteen-hour
            sector. Air India and Malaysia Airlines don’t publish a comparably clear seat-fee
            schedule, so check the fare rules for your specific booking.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="detail" title="The six airlines in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="qatarairways"
        title="The only five-star airline of the six"
        body="Qatar Airways includes a checked bag, a meal and seat-back entertainment in every fare, and Doha is a single-terminal transfer. Price Economy Classic rather than Lite if your dates could move."
        cta="Search Qatar Airways fares →"
      />

      <ArticleSection id="hubs" title="Which hub hurts least" prose>
        <p>
          On a delayed inbound with ninety minutes to make a connection, the airport decides the
          trip. These six differ more than the airlines do — and two of them, Delhi and Kuala
          Lumpur, are not really playing the same game as the other four.
        </p>
        <ul>
          <li>
            <strong>Abu Dhabi</strong> is the smallest and quietest of the four Gulf and Turkish
            hubs, which is the whole argument for Etihad on a tight connection.
          </li>
          <li>
            <strong>Doha</strong> is a single terminal with concourses A to E under one roof and no
            inter-terminal shuttle. It handled 54.3 million passengers in 2025, a little over half
            Dubai’s volume, through a building expanded in March 2025.
          </li>
          <li>
            <strong>Dubai</strong> is the busiest. Dubai Airports reported 95.2 million passengers
            in 2025 and described the airport as operating at the edge of physical capacity.
            Emirates has Terminal 3 to itself, so most connections at least stay in one building.
          </li>
          <li>
            <strong>Istanbul</strong> is the longest walk: a terminal of roughly 1.44 million square
            metres with no internal train, and passport control between many transfers.
          </li>
          <li>
            <strong>Delhi</strong> is less a transfer hub than a destination in its own right on
            this itinerary: most Air India journeys through it end in India rather than pass
            through, and Star Alliance codeshares extend its reach rather than Delhi acting as a
            pure connecting point the way Doha or Istanbul do.
          </li>
          <li>
            <strong>Kuala Lumpur</strong> is built deliberately as a stopover rather than a quick
            transfer: eligible itineraries can add a free domestic or regional leg through Malaysia
            Airlines’ Bonus Side Trip programme, which none of the other five hubs here offers.
          </li>
        </ul>
        <p>
          Published minimum connection times for these airports disagree between sources, and none
          of the six airlines publishes one prominently. Treat whatever a booking engine sells you
          as the floor rather than the recommendation, and add time if you are checking a bag.
        </p>
      </ArticleSection>

      <ArticleSection id="money" title="What we earn, and from whom" prose>
        <p>
          Airlines are unusual in this market: most of them do not run consumer affiliate
          programmes, and the ones that do pay a small percentage of the base fare rather than of
          the ticket. That has one visible consequence on this page.
        </p>
        <p>
          <strong>Turkish Airlines is not a partner.</strong> Its own affiliate URLs no longer
          resolve and no network carries a listing we could verify, so its links here go straight to
          turkishairlines.com with <code>nofollow</code> and earn nothing. It is ranked fourth on
          the evidence, not because of that — and it stays in the ranking for the same reason
          Mullvad stays in our VPN guides. A list that only contains partners is a directory, not a
          ranking.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
