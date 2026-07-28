# GNACC Funnel & Benchmark Reference

*Single source of truth for stage definitions, benchmarks, and formulas used across the playbook, cases, and training. Everything here is verified against the intranet code — cite this file instead of inventing numbers.*

**GNACC = Gross Leads → Net Leads → Appointments → Contracts → Closings.**

## Stage definitions (Collective Genius standard, Dallas TX — March 2026)

| Stage | Definition |
|---|---|
| **Gross Lead** | Any lead that enters the CRM. Includes all inbound inquiries, even removal requests. Only confirmed spam (no real person) is excluded. |
| **Net Lead** | A verified human contact who owns a property and has expressed interest in selling. Not necessarily qualified. |
| **Attended Appointment** | An appointment (virtual or in person) where the seller engages with the buyer and an offer is presented. |
| **Contract** | Seller has agreed to terms and signed the purchase agreement along with the purchasing company — fully executed. |
| **Closed Deal** | Revenue received from the sale, or the property added to the balance sheet if retained as a rental. |

## Stage-to-stage benchmarks (CG standard)

| Transition | Benchmark |
|---|---|
| Gross → Net | 50% |
| Net → Appointment | 25% |
| Appointment → Contract | 15% |
| Contract → Close | 70% *(may be lower for virtual acquisitions)* |

Verdict bands vs. a target (from `classifyVsBenchmark`): **below** = under target · **meeting** = target up to +20% · **exceeding** = above +20%.

## Full-funnel benchmarks (Gross Lead → outcome)

| Tier | Source | Ratio | % | Measures |
|---|---|---|---|---|
| Floor | Gary Harper / CG | 1 in 70–100 | 1.0–1.4% | GL → Closed (matches 50% × 25% × 15% × 70%) |
| Mid | Benmont | 1 in 10–20 | 5–10% | GL → Closed (practitioner average, ICP1/ICP2-biased) |
| Top | ICP1 | 1 in ~14–20 | 5–7% | GL → **Contract** (≈3.5–4.9% closed at 70% close rate) |

Tier classification of GL→Contract (from `classifyFunnelTier`): ≥5% top · ≥1.5% mid · ≥0.5% floor.

## The "8020REI Benchmarks" preset (monthly)

$15,000 spend · 500 gross leads · 350 net leads (70%) · 70 appointments (20%) · 14 contracts (20%) · $3,500 avg profit/deal.
Derived: cost/lead $30 · cost/net lead ~$43 · cost/appt ~$214 · cost/contract ~$1,071 · revenue $49,000 · ROI ≈ 2.3x.
*(Industry-average preset: $10k spend, 300 GL, 180 NL, 36 appts, 5 contracts, $2,500/deal.)*

**Training-case economics (confirmed July 2026):** typical 8020REI clients generate approximately **$20,000–$30,000 in gross profit per closed deal**, or roughly **10%–15% of property value**. Use **$25,000** as the midpoint for case sizing unless client-specific economics are provided. This is deliberately distinct from the calculator's existing, code-backed **$3,500 preset value**; do not present that preset input as the typical client gross profit.

## Direct-mail funnel benchmarks (per 10,000 pieces)

| Stage | Metric | Worst | Average | Best |
|---|---|---|---|---|
| Mail → Response | Response rate | 0.2% → 20 | 0.35% → 35 | 0.6% → 60 |
| Response → Qualified | Gross/net ratio | 30% → 6 | 35% → 12 | 40% → 24 |
| Qualified → Appointment | Lead/appt rate | 30% → 2 | 35% → 4 | 40% → 10 |
| Appointment → Contract | Appt/contract rate | 20% → 0 | 30% → 1 | 40% → 4 |
| Contract → Deal | Close rate | 75% → 0 | 83% → 1 | 90% → 3 |

**Mail pieces per closed deal:** worst ~37,000 · average ~9,400 · best ~2,900. Red flag threshold: >25,000/deal = funnel leaking at multiple stages; healthy <10,000.

## Formulas (as implemented in the GNACC calculator)

- Conversion rates: each stage ÷ previous stage; `glToContractRate` = contracts ÷ gross leads (headline tier metric)
- Cost per X = total ad spend ÷ X (leads, net leads, appointments, contracts)
- Total revenue = contracts × avg profit per deal · Net profit = revenue − ad spend · ROI = net profit ÷ ad spend

## Selected diagnostic benchmarks (client-diagnostic pillars)

| Item | Healthy | Red flag |
|---|---|---|
| BuyBox freshness | Reviewed ≤ 90 days | No update in 6+ months |
| BuyBox vs. closed deals | ≥ 80% of closed deals match buy box | Closing outside buy box = stale targeting |
| Cash offer % | Tiered by ARV bracket (e.g. 63/68/78%) | Flat % across price ranges, or < 60% |
| Skip-trace quality | > 50% reachable | High wrong-number rate |
| Property data accuracy | < 5% errors | Classification errors, stale distress flags |
| DM response rate | ≥ 0.35% | < 0.2% (list fatigue / bad creative / wrong audience) |
| A/B testing | Active, quarterly | Same piece 6+ months |
| Channel mix | 2–3 active channels | Single-channel dependency |
| Speed to lead | < 5 min (hot leads) | > 30 min = 21× less likely to convert |
| Contact attempts | 6–8 across call/text/VM | 1–2 then disqualified |
| Lead → appointment | ≥ 35% | < 25% (weak follow-up or qualification) |
| Appt → contract | ≥ 30% | < 20% (pricing, negotiation, unmotivated sellers) |
| Pipeline flow | No stage > 30% drop-off | Steep drop at one stage |
| Team capacity | ≥ 5 people, clear roles | < 5 = execution risk |
| CRM hygiene | > 90% field completion | No CRM / incomplete = can't diagnose |
| Churn context | — | Churn 30–33%; unengaged clients and teams < 5 highest risk |

## Market-context signals (read-only, rule-in/rule-out the market)

- **Days on Market trend** — rising = cooling market, more inventory; falling = hot, harder to find deals
- **Months of supply** — < 6 = seller's market (harder for investors); > 6 = buyer's market
- **Distressed inventory vs. 2019 baseline** — lower distress = smaller addressable market; may explain volume drop regardless of execution
- **Cash-buyer % vs. historical** — spike = institutional competition compressing margins
- **Foreclosure pipeline / tax-lien season** — fewer filings = fewer leads at the source; seasonal misalignment = marketing off-cycle

## Source files (intranet repo: `/Volumes/External Drive/Projects/8020REI/intranet`)

- `src/lib/config/gnaccCalculator.ts` — stages, CG benchmarks, presets, tiers, formulas
- `src/lib/config/clientDiagnosticFlow.ts` — 3-pillar diagnostic tree, DM funnel, market signals, 5-step approach
- Tools (UI): `src/routes/(authenticated)/tools/{gnacc-calculator, client-diagnostic, roi-calculator, roi-client-analysis}`
