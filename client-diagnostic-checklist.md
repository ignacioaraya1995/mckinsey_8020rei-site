# Client Diagnostic Checklist — 3-Pillar Account Health Assessment

*The structured client-health checklist formerly served as the intranet tool `/tools/client-diagnostic` (source config `clientDiagnosticFlow.ts`). The tool was retired from the intranet on 2026-08-06; **this document is now the source of truth** for the checklist and its benchmarks. Informed by 367 Knowledge Gap sessions (2024–2026). Companion to `diagnostic-playbook.md` — see §7 there for how the two fit together.*

---

## 1. What this is (and when to use it vs. the playbook)

Two diagnostic instruments, two triggers:

| Instrument | Trigger | Question it answers |
|---|---|---|
| **This checklist** | Client health review, QBR, at-risk escalation, engagement call prep | *Across the three controllable drivers, where is this account unhealthy?* |
| **`diagnostic-playbook.md`** | A specific KPI declined (Gross Leads or a GNACC conversion) | *Which hypothesis explains this specific break, and what test confirms it?* |

The checklist is a **breadth-first sweep** — assess every item, mark it Healthy / Watch / Issue, and leave with a prioritized action list. The playbook is **depth-first** — route one broken KPI to its hypothesis branch. A checklist "Issue" often becomes the entry point into a playbook branch.

**Who uses it:** CS team (CSMs, CS leadership) during client health reviews, QBRs, and at-risk escalations.

### How to run it

1. Read the **market context** signals first (§2) — external conditions inform, but do not score, the diagnosis.
2. Walk the three pillars in order (§3–§5). For every item: ask the client the question, compare the answer to the healthy signal and red flag, and mark **Healthy / Watch / Issue**.
3. Build the **executive summary** (§6): count of healthy/watch/issue, priority issues listed first.
4. For every priority issue, run the five-step **diagnostic sequence** (§6.1) before prescribing anything.

---

## 2. Market context — read before diagnosing

Five external signals that can explain performance before execution is judged. These are **not assessed** — they contextualize the pillar findings.

| Signal | How to check | Impact |
|---|---|---|
| Days on Market trend | Compare client county DOM to historical average | Rising = cooling market, more inventory. Falling = hot market, harder to find deals. |
| Months of supply | Current inventory relative to absorption rate | <6 months = seller's market (harder for investors). >6 months = buyer's market (more opportunity). |
| Distressed inventory vs 2019 baseline | Pre-foreclosure, tax liens, REO volume by county | Lower distress = smaller addressable market. May explain volume drop regardless of execution. |
| Cash buyer % vs historical | Institutional buyer activity in client counties | Spike = institutional competition (hedge funds, iBuyers). Compresses margins. |
| Foreclosure pipeline / tax lien season | Filing trends, moratoriums, auction calendars | Reduced filings = fewer leads at the source. Seasonal misalignment = marketing off-cycle. |

---

## 3. Pillar I — Targeting & Data Quality

**Question: are we sending the right leads with clean data?**

*Evidence basis: BuyBox staleness, cash offer tuning, missing client deal data, pre-foreclosure data errors, EMV discrepancies, mobile home classification, score confusion.*

| Check | Ask the client | Healthy signal | Red flag | Benchmark |
|---|---|---|---|---|
| BuyBox freshness | When did we last review your BuyBox criteria together? | Updated within 90 days | No update in 6+ months | ≤ 90 days |
| **BuyBox vs actual closed deals** ★ | Are you closing deals that match your BuyBox, or outside of it? | 80%+ of closed deals match BuyBox parameters | Closing outside BuyBox = stale targeting | ≥ 80% match |
| Cash offer % strategy | What cash offer % are you using? Is it tiered by price range? | Tiered by ARV bracket (e.g. 63/68/78%) | Flat % across all price ranges, or below 60% | Tiered, tested |
| **Client deal data shared** ★ | Have you shared your past deals, leads, and appointments with us? | Feedback Loop active, deals uploaded | No data shared = BuyBox is guesswork | Deals uploaded |
| Property data accuracy | Are you seeing wrong property types, missing APNs, or stale pre-foreclosure flags? | <5% error rate in client counties | Classification errors (land vs SFR), blank last-sale dates, wrong distress flags | < 5% errors |
| Skip trace quality | What % of phone numbers are working when you call? | >50% reachable contacts | High wrong-number rate, single phone per record | > 50% reachable |
| Score interpretation | Do you understand how Likely Deal Score differs from Overall Score? | Client can explain the difference | Confused by 0 Likely Deal + high Overall, or thinks stars are arbitrary | Clear understanding |

★ = key metric for the pillar.

---

## 4. Pillar II — Marketing Effectiveness

**Question: are we reaching sellers through the right channels with the right message?**

*Evidence basis: split test confusion, DM Force pricing, Rapid Response effectiveness, texting vendor alignment, recurring need to explain DM funnel math.*

| Check | Ask the client | Healthy signal | Red flag | Benchmark |
|---|---|---|---|---|
| **DM response rate** ★ | What response rate are you getting on your mail pieces? | ≥ 0.35% | < 0.2% = list fatigue, bad creative, or wrong audience | 0.35%+ |
| Mail pieces per deal | How many pieces are you mailing per closed deal? | < 10,000 | > 25,000 = funnel leaking at multiple stages | See DM funnel (§4.1) |
| A/B testing active | When did you last test a different mail piece or message? | Active testing — messaging variations AND different piece designs | Same piece for 6+ months, no test history | Test quarterly |
| Channel diversification | What marketing channels are you actively running besides DM? | 2–3 active (DM + cold call / SMS / PPC) | Single channel dependency | ≥ 2 channels |
| SMS / texting strategy | Do you have a texting cadence aligned with your mailing schedule? | 30/60/90 day texting aligned with DM drops | No texting, or texting without coordination with mail | Aligned cadence |
| Rapid Response usage | Are you using Rapid Response? How are the templates performing? | Active, customized templates, manages expectations on volume | Not using, or default templates with unrealistic volume expectations | Active + custom |
| **Marketing ROI trend** ★ | Is your revenue per marketing dollar improving or declining QoQ? | Stable or improving | Declining = spending more for less | Stable+ QoQ |

### 4.1 DM funnel reference — per 10,000 mail pieces

The first stage below average is the bottleneck. Fix it before optimizing downstream.

| Stage | Conversion | Worst | Average | Best |
|---|---|---:|---:|---:|
| Mail → Response | Response rate | 0.2% → 20 | 0.35% → 35 | 0.6% → 60 |
| Response → Qualified | Gross/net ratio | 30% → 6 | 35% → 12 | 40% → 24 |
| Qualified → Appointment | Lead/appt rate | 30% → 2 | 35% → 4 | 40% → 10 |
| Appointment → Contract | Appt/contract rate | 20% → 0 | 30% → 1 | 40% → 4 |
| Contract → Deal | Close rate | 75% → 0 | 83% → 1 | 90% → 3 |
| **Mail pieces per deal** | | **37,037** | **9,424** | **2,894** |

> **Benchmark guardrail** (same rule as `diagnostic-playbook.md` §4.0B): these operational health heuristics use different denominators than the canonical GNACC ratios in `gnacc-reference.md` (Gross → Net 50%, Net → Appt 25%, Appt → Contract 15%, Contract → Close 70%). Do not substitute one set for the other unless the populations are aligned.

---

## 5. Pillar III — Sales Operations & Engagement

**Question: are leads being worked properly and is the client engaged with us?**

*Evidence basis: churn is 30–33% with only 67–69% valid. Unengaged clients and teams with <5 people are highest risk. Feedback Loop data is critical but many clients don't submit.*

| Check | Ask the client | Healthy signal | Red flag | Benchmark |
|---|---|---|---|---|
| **Speed to lead** ★ | How quickly do you or your team contact new leads? | < 5 minutes for hot leads | > 30 min = 21x less likely to convert | < 5 min |
| Contact attempts | How many times do you try before giving up on a lead? | 6–8 attempts across call / text / voicemail | 1–2 attempts then disqualified | 6–8 attempts |
| Lead to appointment rate | What % of leads become appointments? | ≥ 35% | < 25% = weak follow-up or poor qualification | ≥ 35% |
| Appointment to contract rate | Of your appointments, how many end in a signed contract? | ≥ 30% | < 20% = pricing, negotiation, or unmotivated sellers | ≥ 30% |
| Pipeline stage bottleneck | Where do deals get stuck or die in your pipeline? | No single stage > 30% drop-off | Steep drop at one specific stage | Even flow |
| **Feedback Loop participation** ★ | Are you sharing closed deal data back through the Feedback Loop? | Active monthly submissions | Never submitted or stopped months ago | Monthly active |
| Engagement call attendance | When was your last engagement call with your CSM? | Monthly or more frequent | Skipping calls, unresponsive to scheduling | Monthly |
| Client team capacity | How many people on your team work leads and close deals? | ≥ 5 people, clear roles | < 5 = may lack capacity to execute recommendations | ≥ 5 people |
| CRM / tracking discipline | Are all your deals and activities tracked in your CRM? | > 90% field completion | No CRM, or incomplete data = can't diagnose anything | > 90% |

---

## 6. Synthesis — executive summary

Close every assessment with a one-glance summary, priority issues first (Pyramid Principle):

```
CLIENT PERFORMANCE DIAGNOSTIC — EXECUTIVE SUMMARY
Date: <date>
Coverage: <n> of 23 checks assessed

Healthy: <n> | Watch: <n> | Issues: <n>

PRIORITY ISSUES:
  - [<pillar>] <check label>
  ...

WATCH ITEMS:
  - [<pillar>] <check label>
  ...
```

### 6.1 Recommended diagnostic sequence

Use the same sequence for every priority issue, in order:

1. **Segment** — break by geography, property type, and price tier. Aggregates hide the truth: a client may be fine in County A and failing in County B.
2. **Compare** — current vs historical (YoY, QoQ, MoM). New problems point to recent changes; ongoing trends point to structural issues.
3. **Benchmark** — client vs top 25% of active 8020REI clients in similar markets. If top performers thrive in the same conditions, the market isn't the issue.
4. **Correlate** — which leading indicator changed first? Did engagement calls drop before deal flow? Did BuyBox updates stop before hit rates declined?
5. **Prioritize** — fix the biggest bottleneck first. A 2x improvement on a 50% conversion rate matters more than a 2x improvement on a 2% rate.

*(This is the checklist-flavored cousin of the playbook's SAE loop — Segment → Isolate → Explore. Same first move: segment before believing any aggregate.)*

### 6.2 Five performance dimensions

Every diagnostic finding maps to one of five dimensions:

| Dimension | Metrics | What it tells you |
|---|---|---|
| **Volume** | Leads, Appointments, Contracts, Closings | Are there enough opportunities in the pipeline? |
| **Velocity** | Days in stage, cycle time | How fast are deals moving? Where are they stalling? |
| **Value** | Avg deal size, margin %, ROI by channel | Are the deals worth enough? Are channels profitable? |
| **Efficiency** | Cost per acquisition, conversion rates | Is the client getting maximum output per dollar input? |
| **Quality** | Lead score accuracy, win rate trends | Is the targeting producing the right opportunities? |

---

## 7. Extended reference — the four-hypothesis deep-dive tables

The 3-pillar checklist above is the operational instrument. This section preserves the **extended reference version** of the framework (formerly `docs/CLIENT_DIAGNOSTIC_FRAMEWORK.md` in the intranet): four independent hypotheses off the symptom **Client Deal Flow < Target**, each with deeper sub-checks. Use it when a pillar "Issue" needs a second layer of specificity. Some of these benchmarks are aspirational reference values rather than measured 8020REI numbers — where they conflict with §3–§5 or `gnacc-reference.md`, the checklist and GNACC references win.

### 7.1 Hypothesis I — Data & Analytics Foundation

*Is the client working with the right data?*

**BuyBox analytics**

| Check | Benchmark | Why it matters |
|---|---|---|
| Last BuyBox update vs market shift | ≤ 90 days | Stale criteria miss current opportunities |
| Parameter drift from actuals | Compare to closed deals | If closing outside BuyBox, targeting is misaligned |
| Cap rate / ARV spreads vs market | Within 1 SD of county median | Overly aggressive = fewer qualifying leads |
| Geography vs opportunity heat map | ≥ 70% overlap | Protected counties must match where inventory exists |
| Hit rate vs top 25% | Compare to P75 | Below P25 suggests targeting, quality, or execution issue |

**Lead scoring model** (AI-driven scoring on distress signals: pre-foreclosure, tax liens, vacancy, probate, divorce, code violations)

| Check | Benchmark | Why it matters |
|---|---|---|
| Model accuracy vs outcomes | R² > 0.7 | High scores should predict conversion |
| Score drift (6 months) | Stable trend | Inflation without conversion = broken model |
| False positive rate | < 20% | Bad contacts waste outreach budget |
| Skip trace match rate | > 85% | Low match = fewer reachable leads |
| Motivation signal weighting | Appropriate for profile | Pre-foreclosure ≠ vacancy; weights must match strategy |

**Data pipeline health**

| Check | Benchmark | Why it matters |
|---|---|---|
| MLS / source sync latency | < 4 hours | Stale data = stale leads |
| List-to-marketed time | < 48 hours | Delays let competitors reach sellers first |
| Data completeness | > 95% key fields | Missing phones/addresses shrink usable pool |
| Duplicate rate | < 5% | Duplicates waste marketing spend |
| API / platform uptime | > 99.5% | Downtime during business hours = missed opportunities |

### 7.2 Hypothesis II — Market Dynamics & Positioning

*Are external conditions causing the underperformance, independent of execution?*

**Market indicators** — the same five signals as §2, plus mortgage-rate impact (strategy-dependent: affects both supply — more distress — and demand — fewer buyers).

**Competitive intelligence**

| Check | Context | Why it matters |
|---|---|---|
| Market share vs last quarter | Stable or growing QoQ | Declining share with stable market = execution/competition issue |
| New iBuyers / funds entering | Monitor for new entrants | Institutional cash offers can flood a market |
| Offer-to-list ratio vs peers | Compare to peer median | Low ratio = too selective or narrow BuyBox |
| Marketing spend per deal | See ROI tools | Above benchmark = weak conversion or inefficient channels |
| Speed to offer vs competitors | Fastest wins | First credible offer often wins motivated sellers |

**Seasonal & cycle analysis**

| Check | Context | Why it matters |
|---|---|---|
| Current vs 3-year seasonal avg | Within 15% | If matching seasonal norms, it's timing not execution |
| REO / foreclosure pipeline | Filing trends by county | Drying pipeline = naturally fewer deals |
| Tax lien season alignment | County-specific calendars | Marketing must align with motivation peaks |

### 7.3 Hypothesis III — Marketing Effectiveness & ROI

*Are channels performing efficiently? Is spend going to the highest-ROI channels?*

**Channel performance**

| Check | Benchmark | Why it matters |
|---|---|---|
| Direct mail response rate | See §4 / §4.1 (0.35% avg) | Declining = list fatigue, bad creative, or saturation |
| Cost per qualified lead by channel | Compare DM, SMS, CC, PPC | Not all leads equal; cheap bad leads beat expensive good ones only on paper |
| Digital vs traditional mix | At least 2 active channels | Over-reliance on one channel = risk |
| PPC conversion rate | > 3% | Below 2% = bad landing pages or targeting |
| SEO organic traffic growth | MoM growth | Reduces dependence on paid, lowers CAC |

**Message & creative testing**

| Check | Benchmark | Why it matters |
|---|---|---|
| A/B test win rate | > 30% | No testing = no improvement |
| Pain point vs benefits messaging | Match distress profile | Motivated sellers respond to different messaging |
| CTR vs industry P75 | 3–5% for REI ads | Low CTR + good targeting = creative problem |
| Localization impact | Measured | "We buy houses in [County]" outperforms generic |

**Attribution & ROI**

| Check | Benchmark | Why it matters |
|---|---|---|
| Attribution model | Consistent | 8020REI tracks Direct + Influenced attribution |
| CAC payback period | < 90 days | Longer payback = cash flow strain |
| Marketing efficiency ratio | Stable or improving QoQ | Declining ratio = spending more for same/less revenue |
| LTV / CAC ratio | > 3.0 | Below 3.0 = channel may not be sustainable |

### 7.4 Hypothesis IV — Sales Operations & Execution

*Is the client executing well on the leads they receive?*

**Lead response SLAs**

| Check | Benchmark | Why it matters |
|---|---|---|
| First contact speed | < 5 minutes for hot leads | 21x more likely to convert within 5 min vs 30 min |
| Average speed to lead trend | Stable or improving | Worsening = capacity issues (leading indicator) |
| Contact attempts before disqualification | 6–8 minimum | 1–2 attempts leaves deals on the table |
| Weekend / evening coverage | No gaps > 4 hours | Motivated sellers call outside business hours |
| Lead routing optimization | Strategy in place | Hot leads to best closer; cold leads to nurturing |

**Pipeline velocity**

| Check | Benchmark | Why it matters |
|---|---|---|
| Lead to Appointment rate | > 25% (checklist heuristic: ≥ 35%) | Top of funnel conversion |
| Appointment to Contract rate | > 40% (checklist heuristic: ≥ 30%) | Core conversion — low = pricing, negotiation, or qualification issue |
| Weekly conversion trend | Stable | Sudden drop at one stage = specific problem |
| Days in each stage vs target | Within 20% | Stalling in one stage = bottleneck |
| Drop-off by stage | Funnel analysis | Identifies exactly where deals die |

**Team performance management**

| Check | Benchmark | Why it matters |
|---|---|---|
| Quota attainment distribution | Shape matters | Even distribution = market issue; skewed = people issue |
| Top vs bottom quartile gap | Stable or shrinking | Widening gap = coaching gaps |
| Calls per day vs industry | 150–200 dials/day/caller | Low volume = understaffed or undertrained |
| CRM compliance | > 90% field completion | Low compliance = flying blind on diagnosis |
| Weekly 1:1 coaching | Happening consistently | Without coaching, performance issues compound |

---

## 8. Where the data lives — 8020REI dashboards

The interactive tool is retired; the underlying data surfaces remain in the intranet:

| Framework area | 8020REI dashboard / tool |
|---|---|
| BuyBox analytics | Client Health tab, Engagement Heatmap |
| Lead scoring | Distress Definitions scoring system |
| Data pipeline | Data Management admin page |
| Market indicators | Market Analysis tool, Datamap |
| Channel performance | Paid Ads dashboard, Marketing Summary |
| Attribution | Marketing Attribution tab |
| Pipeline velocity | Sales Pipeline tab |
| Team performance | Rep Benchmarking tool |
| Overall client health | CS Risk Analysis, Client Explorer |
| Funnel model & benchmarks | GNACC Calculator (`/tools/gnacc-calculator`) |
