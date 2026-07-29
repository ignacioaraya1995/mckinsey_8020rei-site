# Client Diagnostic Playbook — Working Notes

*Organizing the idea from the Gemini conversation (McKinsey 7-step applied to 8020REI client funnels). Companion to `McKinsey-Problem-Solving-Guide.html` (the teaching guide). Last updated: 2026-07-29.*

---

## 1. The core idea in one paragraph

Build a **diagnostic playbook** that turns client funnel KPIs into root-cause hypotheses, the way a McKinsey team would — but pre-built and repeatable. When Gross Lead volume or a GNACC conversion is below baseline or trending down, the playbook says which hypotheses to test, what data confirms or kills each one, and what the fix is. The McKinsey guide is the *method*; this playbook is the method *instantiated for the wholesale REI acquisition funnel*. Eventually an AI agent inside the client-diagnostic tool runs it automatically.

Three ingredients, all necessary:

1. **KPI framework** — canonical funnel stages and conversion ratios, with a baseline (or at minimum a trend) per client.
2. **Hypothesis playbook** — for each KPI that is low/declining, a MECE tree of candidate root causes, each with a test and a recommended action.
3. **Change-event log** — buy box edits, content/creative changes, channel changes, script changes, list source changes. A metric inflection that lines up with a logged change is the fastest diagnosis there is (the buy-box example below).

---

## 2. Framing the problem: a quantified gap (R1 vs R2)

Before any hypothesis tree gets touched, write the problem down as a **gap between two numbers**:

- **R1 — the undesired result, quantified.** What the client's KPI is doing now (e.g., Appointment → Contract at 9% and falling).
- **R2 — the desired result, quantified.** What it should be (e.g., the 15% CG benchmark, or the client's own pre-decline 18%).

If R2 isn't a number, you can't tell when you're done — "improve conversions" is not a problem statement, it's a wish. Every engagement starts by filling four boxes, in order:

| Box | Question it answers | 8020REI version |
|---|---|---|
| **Opening Scene** | What does normal look like? | The client's funnel as it runs today — GNACC stages, volumes, and conversion rates over the trailing period |
| **Disturbing Event** | What changed? | The event (or realization) that knocked the funnel off its opening scene |
| **R1** | Where are we now? | The KPI deviation vs. the client's own history — specific stage, specific rate, specific dates |
| **R2** | Where should we be? | The benchmark value from `gnacc-reference.md` (CG standard), or the client's pre-decline baseline |

The output is a one-sentence problem statement — the same template used at step 1 of the 7-step mapping (§5): *"Client X's [ratio] fell from A% to B% between [dates]; identify root cause and restore to baseline within [horizon]."*

### The Disturbing Event has exactly three flavors

1. **External** — the market moved (rates, DOM, investor competition, seasonality). Nobody at the client did anything; the environment changed under them.
2. **Internal** — the client changed something: buy-box edit, creative swap, new list source, new script, pricing/formula change, rep turnover.
3. **Recently recognized** — it was always broken; the client just noticed (first time the funnel was instrumented, or first time anyone looked at the rate by segment).

This typology is why the **change-event log is the highest-leverage missing asset**. Internal disturbances are the most common and the cheapest to confirm — but only if buy-box edits and creative swaps are timestamped somewhere queryable, which today they are not (§6). Until that log exists, the first diagnostic job on every engagement is **reconstructing "what changed" with the client** — a structured interview against the funnel timeline. That is why segmentation checks and change-log correlation always come first in priority in the hypothesis tables.

### Step zero: is it us or the market?

Before dissecting any funnel, separate client-specific causes from market-wide ones: compare the client's trend against peers in the same market and against the market's own seasonality. If every wholesaler in the metro saw Appointment → Contract compress in the same month, the Disturbing Event is external and the fix is positioning, not targeting. If the client's rate broke while peers held, it's internal — go find the change. Skipping this step is how teams end up rewriting their buy box in response to a rate hike.

### SAE — the working algorithm: Segment → Isolate → Explore

Once the gap is quantified and the market question is answered, the diagnostic itself runs on a three-step loop (from the Spanish mnemonic **Segmentar → Aislar → Explorar**):

1. **Segment** the numbers first. Totals and averages mislead — a funnel-wide 9% can be one dead channel, one dead rep, or one dead county hiding under healthy ones. Cut every flagged KPI by channel, list source, rep, county, price band, and buy-box fit before believing any aggregate.
2. **Isolate** the funnel stage and driver carrying the bulk of the deviation. Quantify each candidate cause's share of the total gap (R2 − R1) and attack the biggest — a cause that explains 60% of the gap beats three that explain 10% each, even when the small ones are easier to test.
3. **Explore** fixes only after the first two steps. Brainstorming solutions before the gap is allocated produces confident answers to the wrong problem.

This is the algorithm behind the hypothesis table in §4: each entry's "segment first" test column is SAE step 1, the key-signature lines are step 2, and the action column is deliberately last because exploring comes last.

*(Problem-definition framework after Barbara Minto; SAE from classic case-interview literature.)*

---

## 3. The funnel (KPI taxonomy — CONFIRMED: it's GNACC)

The taxonomy already exists and is codified in the intranet (`src/lib/config/gnaccCalculator.ts`), standardized at the Collective Genius vendor meeting (Dallas, March 2026). **GNACC = Gross → Net → Appointments → Contracts → Closings.**

```
Ad Spend → Gross Leads → Net Leads → Appointments Attended → Contracts Signed → Closed Deals
```

| Transition | CG benchmark | 8020REI preset implies |
|---|---|---|
| Gross → Net | 50% | 70% (350/500) |
| Net → Appt | 25% | 20% (70/350) |
| Appt → Contract | 15% | 20% (14/70) |
| Contract → Close | 70% (lower for virtual) | — |
| Full funnel GL → Closed | floor 1.0–1.4%, mid 5–10% | — |

Upstream of Gross Leads sits the **channel-specific marketing layer**; there is no single canonical "Prospect → Lead" denominator across SMS, Cold Call, and Direct Mail. Diagnose each channel through its own operating waterfall (§4.6). Verified Direct Mail benchmarks live in `clientDiagnosticFlow.ts` (Mail → Response 0.35% avg; mail pieces per deal ~9,400 avg, ~2,900 best); do not invent equivalent SMS or Cold Call benchmarks.

---

## 4. KPI decline guide — common hypotheses to test first

This is the quick routing guide. It does **not** claim that 8020REI has measured the statistical frequency of every cause by KPI; it prioritizes the recurring hypotheses already encoded in `clientDiagnosticFlow.ts`, the case library, and the operating patterns supplied by the team. Always start with **segmentation and change-timeline reconstruction**, then test the highest-impact branch.

### 4.0A Route the count decline to the correct ratio

| What visibly declined | First KPI to diagnose | Why |
|---|---|---|
| Gross Leads | Marketing activity / delivery / response **upstream of GNACC** | Gross Leads is the funnel's entry volume; there is no universal Gross Lead count benchmark |
| Net Leads while Gross Leads are stable | **Gross → Net** | Fewer CRM inquiries become verified interested owners |
| Attended Appointments while Net Leads are stable | **Net → Appointment** | Verified interested owners are not reaching an attended offer conversation |
| Contracts while attended Appointments are stable | **Appointment → Contract** | Offers are presented, but fewer sellers sign |
| Closings while signed Contracts are stable | **Contract → Close** | Fully executed agreements are not monetizing |
| Every downstream count falls in the same proportion while all adjacent conversions stay stable | **Gross Lead volume** | The full funnel is processing fewer inputs; do not invent a conversion failure |
| Two or more adjacent conversions move | **Multiple branches** | Quantify each break separately, fix the largest, recompute the funnel, and follow the residual KPI |
| Closings stay stable but gross profit per closed deal falls | **Unit economics, not GNACC** | Deal value or cost changed even though the funnel still converts |

### 4.0B One-page hypothesis map

| Alarm KPI | Canonical reference | Common hypotheses to test first | First segmentation / evidence request |
|---|---:|---|---|
| **Gross Lead volume ↓** | Client baseline at comparable marketing input; no universal count target | One channel stopped operating or delivering; spend/volume shifted; SMS vendor/compliance/carrier suppression; Cold Call activity or contact coverage fell; Direct Mail delivery/response path/piece performance failed; buy-box/list/import/exclusion error; eligible market inventory declined | Channel → vendor/campaign/piece → activity/delivery/contact/response; correlate the first decline with invoices, exports, proofs, tickets, settings, and market supply |
| **Gross → Net ↓** | **50%** | Wrong-party contacts or stale phone data; caller/vendor stops before reaching the owner; wrong audience from buy-box/list/import/tag failure; low-intent responses/removal requests; caller verification/script/disposition or CRM-definition change | Channel → vendor/caller/list/skiptrace age/phone position → rejection reason; compare correct-owner reach and interest once owner reached; then review targeted recordings |
| **Net → Appointment ↓** | **25%** | Slow response or backlog; lead-management capacity did not scale; too few follow-up attempts; off-buy-box Net Leads or bad routing; scheduling availability; confirmation/reminder failure or no-shows; setter/caller execution | Channel → lead owner/setter → first-contact-time bucket → scheduled vs. attended → buy-box fit; inspect queue, attempts, calendar events, and targeted recordings |
| **Appointment → Contract ↓** | **15%** | Appointments outside the active buy box; offer formula/MAO too low; acquisition-rep negotiation or follow-up; seller motivation/price expectations; market competition | Channel → active-buy-box fit → setter → acquisition rep → ARV/price band/property type; compare offer economics and lost-deal reasons |
| **Contract → Close ↓** | **70%** *(may be lower for virtual acquisitions)* | Buyer-list depth/concentration; buy box wider than dispo demand; contract price/repairs/ARV make deals unassignable; slow dispo or short closing window; title, seller, inspection, financing, or deadline fallout | Channel → fallout reason → end buyer → county/price/property type → days-to-first-bid; compare buyer pause and buy-box change timing |
| **Closed Deals ↓ but no single ratio is obvious** | Product of Gross Lead volume and all four adjacent conversions | The first upstream volume/rate change; two simultaneous leaks hidden by downstream counts; CRM definition/completeness problem | Rebuild the full before/after funnel; calculate every adjacent rate; do not treat downstream count losses as separate root causes |
| **Gross profit per Closed Deal ↓** | Client history; typical training-case midpoint is **$25,000**, not a performance target | Worse deal/exit mix; thinner assignment spread; higher acquisition price; ARV/repair miss; buyer concession; JV/double-close cost; revenue-recognition inconsistency | Market → property/ARV band → acquisition rep → exit type → end buyer; bridge contract price, buyer price, revisions, fees, and concessions |

**Benchmark guardrail:** use the canonical GNACC ratios above for the defined GNACC stages. The broader client-diagnostic health heuristics (for example, Lead → Appointment ≥35% and Appointment → Contract ≥30%) may use different operational denominators; do not substitute them for the canonical 25% and 15% ratios unless the populations are aligned.

**Five-minute sequence:** quantify the decline → calculate every adjacent rate → segment the first broken KPI by marketing channel → reconstruct what changed → test the leading hypothesis → recompute the entire funnel. If a material residual remains, continue to the next branch.

### 4.0C Financial symptom guardrail

Do not force every revenue or profit decline into GNACC. Start with the identity:

**Operating contribution = closed deals × gross profit per closed deal − operating/marketing costs.**

| Observed pattern | Correct diagnostic branch | First tests |
|---|---|---|
| Closed deals fell; gross profit per deal is stable | Volume or GNACC conversion | Compare every adjacent-stage rate before/after; segment the first broken rate; check change history |
| Closed deals are stable; revenue or gross profit per deal fell | Unit economics — **not** a GNACC conversion failure | Segment gross profit per closed deal first by market, property type, ARV band, acquisition rep, and exit type; compare contract price, buyer price, repair revisions, assignment-fee/JV splits, and concessions; check pricing/formula changes |
| Both closed deals and gross profit per deal fell | Two simultaneous branches | Quantify the contribution of deal-count loss versus unit-economics compression, then diagnose each separately |
| Closed deals and gross profit per deal are stable; profit fell | Cost branch | Compare marketing, labor, financing, transaction, and operating costs before/after |

Common unit-economics hypotheses include a worse deal mix, thinner assignment spreads, acquisition prices rising faster than buyer prices, repair/ARV misses that force price reductions, more JV or double-close costs, and inconsistent revenue recognition. The first test is still segmentation plus change history. **A lower gross profit per closed deal can coexist with a healthy Contract → Close rate.**

### 4.1 Gross Lead volume DECLINING

**Start with the stage fact:** Gross Leads is an absolute input volume, not a conversion rate. Compare it with the client's own prior period at comparable marketing spend and operating volume. If every downstream count falls proportionally while adjacent GNACC conversions remain stable, diagnose the marketing layer before touching sales.

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | One marketing channel stopped operating, delivering, or producing responses | **Segment Gross Leads and operating volume first by SMS, Cold Call, and Direct Mail**, then by week and vendor/campaign/piece; reconcile submitted → delivered → response for SMS, records/positions → attempts → live answers for Cold Call, and exported → mailed → delivered → working response path → response for Direct Mail; reconstruct the change timeline | Restore or deliberately reweight the isolated channel; repair its specific vendor/configuration/activity failure instead of applying a company-wide sales fix |
| 2 | 8020REI fulfillment delivered a different population than the client approved | Reconcile approved buy-box version → imported rules/field map → pre-export population → exclusions → dedupe → final export; compare row counts and inspect a targeted record sample | Quarantine the affected campaign/file, rebuild and reissue it from the approved criteria, add hard-fail reconciliation and QA/CSM sign-off |
| 3 | Direct Mail delivery, piece performance, or response access failed | Segment by piece type, version, vendor, drop date, exposure cohort, and returned-mail rate; live-test every printed phone/tracking number and QR/URL from the final proof | Correct the response path or vendor issue; restore a measured piece mix and retain a controlled holdout |
| 4 | SMS audience or delivery was suppressed | Reconcile selected → eligible → uploaded → vendor-suppressed → submitted → delivered by jurisdiction, vendor, campaign/sender, carrier, and reason/error code; keep legislation, carrier policy, and vendor configuration as separate branches | Keep only the affected segment paused; preserve consent/DNC/suppression evidence; obtain qualified review where needed; fix vendor/configuration controls and re-enable only approved traffic |
| 5 | Cold Call coverage or contactability declined | Compare selected records, phone positions supplied/loaded/attempted, records exhausted, live answers, and correct-owner reach by vendor, caller, skiptrace age, and highest position attempted | Correct vendor SOW/dialer mapping/attempt rules or refresh only the stale eligible contact cohort; do not repull distress data unless targeting evidence also fails |
| 6 | The addressable distressed-property supply or seller response propensity declined | Compare the client with local peers and market signals: distress filings, seasonality, DOM, supply, and cash-buyer activity; verify that within-channel operating yield stayed stable | Reset the recoverable forecast and test adjacent sources/geographies only where economics and dispo capacity support them |

Key signature: **Gross Leads down + all four GNACC conversions stable**. A channel-level activity or yield loss can still be a client/vendor problem; only proportional channel declines with stable within-channel yields support an external market-volume conclusion.

### 4.2 Gross → Net rate LOW

**Start with the definition:** a Net Lead is a verified human contact who owns a property and has expressed interest in selling. It is **not yet an acquisition-qualified property**. The diagnostic question is why more CRM inquiries now fail owner verification or seller-interest criteria.

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Correct-owner / decision-maker contactability declined | **Segment Gross → Net first by channel**, then list source, skiptrace date/age, vendor, caller, highest phone position attempted, owner-reach result, and rejection reason; compare correct-owner reach separately from interest once the owner is reached | Refresh the stale eligible contact cohort or correct phone-position/attempt coverage; keep property targeting and skiptrace enrichment as separate controls |
| 2 | Vendor or caller execution declined | Rate by call-center vendor/caller/disposition; inspect identity-verification and qualification fields; only after isolating the abnormal cohort, review a small matched recording sample against a healthy control | Correct the vendor SOW/dialer workflow or coach the isolated caller on verification, objections, dispositions, and premature disqualification |
| 3 | Channel or response mix shifted toward lower-intent inquiries | Segment by channel, campaign, piece/message version, response type, and removal-request share; compare each segment's own rate before and after | Rebalance the channel/creative mix using qualified-lead and closed-deal economics, not Gross Leads alone |
| 4 | Wrong audience entered the campaign through buy-box, import, list-source, or exclusion-tag failure | Segment by fulfillment batch, active-buy-box fit, imported criteria version, source, and `SystemDMA` / `DoNotSend` / client-suppression status; anti-join final IDs against exclusions | Contain and reissue the affected fulfillment; enforce the approved buy box and zero excluded-tag intersection before release |
| 5 | CRM definition, capture, or disposition rules changed | Compare Gross/Net definitions, required fields, duplicate logic, and disposition mapping before/after; audit representative records around the inflection | Restore the canonical definitions, remap historical/current reporting, retrain users, and monitor field completion |

Key signature: **Gross Leads stable + Net Leads down**. For Cold Call, test correct-owner reach before concluding that seller motivation declined. Recordings explain why a segmented cohort moved; cohort data establishes how widespread the issue is.

### 4.3 Net → Appointment rate LOW

**Start with the definition:** the denominator is verified interested owners; the numerator is **attended** appointments where an offer is presented. Separate failure to contact/book from failure to attend.

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Lead-management capacity or speed-to-lead failed, especially after volume increased | **Segment Net → Appointment first by channel**, lead owner/setter, lead-arrival period, first-contact-time bucket, and backlog; compare Net Leads per owner and queue size before/after | Stage volume the team cannot absorb, assign overflow ownership, add/rebalance trained coverage, and restore the hot-lead SLA before rescaling spend |
| 2 | Too few follow-up attempts or premature disqualification | Segment by attempt count, cadence completion, last disposition, and owner; compare with the 6–8-attempt diagnostic control | Enforce the follow-up cadence and stopping rules; audit completion and appointment yield by owner |
| 3 | Booking/show process failed | Split **scheduled versus attended**; inspect calendar availability, confirmation/reminder events, reschedules, cancellations, and no-show reasons by channel and setter | Restore booking capacity and confirmation/reminder workflows; assign no-show recovery and monitor Scheduled → Attended |
| 4 | Net Leads are outside the active buy box or routed to the wrong team | Segment by active-buy-box fit, imported buy-box version, routing rule, county, property type, and price band; compare on-box and off-box booking rates | Correct the fulfillment/import or routing defect; hard-stop or reroute off-box leads rather than blaming setters |
| 5 | Setter/caller discovery, objection handling, or disposition behavior weakened | Rate by setter/caller and disposition; after isolating the abnormal segment, compare targeted recordings with a healthy control | Coach the isolated behavior, correct scripts/dispositions, and re-audit a defined sample |

Key signature: **Net Leads rise or remain stable while attended Appointments do not**. If scheduled appointments are stable but attendance falls, the problem sits in confirmations, reminders, rescheduling, or no-show recovery—not lead qualification.

### 4.4 Appointment → Contract rate LOW (while appointments/visits are happening)

**Your hypothesis (the strong one):** the appointment is not producing a seller-acceptable offer — because the property does not meet acquisition criteria, the offer economics are wrong, or the rep fails to convert the seller. **Do not put "we signed it but could not find a cash buyer" here; that is a Contract → Close failure (§4.5).**

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Setter-to-acquisition handoff sends appointments outside the active buy box, so no viable offer is made | **Segment Appointment → Contract first** by active-buy-box fit, then by appointment setter and acquisition rep; compare visited-property characteristics with criteria; inspect required booking fields and routing changes | Reinstate required buy-box qualification before booking; hard-stop or reroute off-box leads; QA by setter and rep |
| 2 | Offers going out but too low to convert | Offer-to-ARV / offer-to-ask spread vs. historical and vs. market comps | Revisit offer formula, MAO assumptions |
| 3 | Acquisition rep execution (rapport, negotiation, follow-up) | Segment by acquisition rep and channel; inspect follow-up cadence and lost-deal reasons; after isolating the abnormal cohort, compare a small matched recording sample with a healthy control | Coach the isolated behavior, enforce the follow-up process, and re-audit the same KPI segment |
| 4 | Competitive pressure in the market | Lost-deal reasons; market DOM / investor activity | Speed and offer positioning, not targeting |

Key signature: **appointments high + signed contracts low**. The seller has not signed yet, so tests belong on qualification/handoff, acquisition fit, offer economics, and rep conversion. If the appointment setter and the acquisition rep are different people, explicitly test that handoff.

### 4.5 Contract → Close rate LOW (signed contracts are not monetizing)

**Start with the stage fact:** the seller has already signed, but the contract did not become a closed deal. Buyer-list/dispo capacity is often the leading branch, but the fallout reasons determine which post-signature hypothesis deserves priority.

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Buyer-list depth, concentration, or demand loss | **Segment Contract → Close first** by acquisition channel, fallout reason, and end buyer; measure verified active buyers, buyer share of exits, bid coverage, time-to-first-bid, and buyer pause dates; check change history | Start with 8020REI's existing **Buyers List**; validate current activity, buy-box/price fit, capacity, and proof of funds; activate relevant buyers, pre-market contracts, and cap concentration |
| 2 | Buy box expanded beyond dispo capacity | Segment by county, price band, and property type; compare signed-contract mix with verified buyer demand; correlate the decline with buy-box edits | Pause/revert unsupported criteria, refocus on proven segments, and build verified buyer depth before re-expanding |
| 3 | Contracts priced too high to assign | Contract price, repairs, ARV, expected buyer margin, and assignment spread vs. closed deals | Tighten MAO/underwriting; renegotiate current contracts |
| 4 | Dispo execution or closing window is too slow/short | Time from signature to first marketing, buyer follow-up, bid count, and days remaining before close | Market on day zero, assign ownership/SLA, and negotiate realistic closing windows |
| 5 | Title, transaction, or seller fallout | Title, inspection, withdrawal, financing, and missed-deadline reason codes | Fix title/process controls; extend timelines or address the documented seller-side cause |

Key signature: **signed contracts flat + closings down**. `"No buyer found"` points to buyer-list/dispo or deal-to-buyer fit; title and seller withdrawals point to different branches. If closings are flat but gross profit per closed deal is down, return to §4.0C — that is unit economics, not Contract → Close.

### 4.6 Marketing-channel and 8020REI fulfillment drill-down

Use this after the channel-first cut identifies where the alarm lives. Compare both the **absolute operating volume** and the **yield between each upstream step**.

| Area | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| SMS | Vendor/compliance suppression or an internal pause reduced eligible/submitted volume | Reconcile selected → eligible → uploaded → suppressed → submitted by jurisdiction, vendor, campaign, and suppression reason; timestamp the change | Preserve records, resolve ownership and qualified review, repair eligibility/configuration controls, and re-enable only approved traffic |
| SMS | Carrier policy/filtering, sender registration, routing, or vendor configuration reduced delivery | Segment Sent → Delivered by carrier, vendor, campaign/sender, message version, and error code | Correct the isolated registration/configuration/routing issue; do not label a carrier restriction as legislation |
| SMS | Delivery stayed stable but message, offer, timing, audience saturation, reply routing, or CRM ingestion reduced responses | Compare response per delivered message by version, list source, buy-box cohort, send time, and vendor; send a controlled reply and trace it into the CRM | Restore the working response path and run a measured creative/timing test against a control |
| Cold Call | Vendor staffing, dialer mapping, attempt depth, stopping rules, or shallow phone-position coverage reduced record coverage | Reconcile phone positions supplied → loaded → attempted → records exhausted by vendor, caller, and highest position attempted; do not rely on total dial count alone | Correct the vendor SOW, field mapping, staffing, cadence, and approved stopping rules |
| Cold Call | Aging skiptrace, wrong-party numbers, ownership mismatch, or omitted fields reduced live-answer/correct-owner reach | Segment live answers and correct-owner reach by skiptrace date/age, source, vendor, caller, and phone position; compare matched workflows using the same selected-property file | Re-skiptrace only the stale eligible cohort or fix output mapping; establish a client-specific age alert from measured decay |
| Cold Call | Identity verification, script/objection handling, premature disqualification, dispositions, or CRM capture reduced owner-to-lead yield | Segment by vendor, caller, and disposition; compare required fields; then listen to a small matched recording sample from the abnormal cohort and a healthy control | Coach the isolated behavior or correct the vendor/CRM rule; retain focused recording QA |
| Direct Mail | Export loss, partial/missed drop, cadence, budget, or vendor production reduced mailed volume | Reconcile approved rows → final export → vendor-accepted rows → produced/mailed pieces using manifests, invoices, and drop records | Reissue the missing eligible records and require source-to-mail quantity reconciliation |
| Direct Mail | Returned mail, address quality, vendor/drop change, wrong printed phone number, broken QR/URL, or bad routing blocked responses | Segment delivery/returns by vendor, drop date, list cohort, and geography; live-test every response path from the final production proof | Correct and reissue the affected piece; add production-proof sign-off and live-routing QA |
| Direct Mail | Piece-mix shift, creative fatigue/new weak creative, offer, overexposure, or targeting drift reduced response despite healthy delivery | Measure response and downstream economics by piece type (for example Check Letter vs. Postcard), version, vendor, drop, exposure cohort, and offer | Restore a measured mix, retain a randomized control, refresh the isolated creative/offer, and manage cost per Net Lead/Close—not the blend |
| 8020REI fulfillment | Wrong/stale buy-box import, field mapping, manual filter, suppression, dedupe, or export truncation changed the delivered population | Reconcile approved buy-box version → imported criteria → pre-export population → exclusions → dedupe → final export; inspect row counts and targeted records | Quarantine/rebuild/reissue; hard-fail the release unless lineage, counts, active-buy-box fit, and approvals reconcile |
| 8020REI fulfillment | Aging skiptrace, omitted phone fields, stale addresses, wrong file/batch, or schema mismatch reduced usable/contactable records | Segment contactability by fulfillment batch, skiptrace date/age, vendor, caller, and phone position; compare source/export schemas and sample records | Refresh only the stale eligible records, correct mapping, and retain a versioned manifest |
| 8020REI fulfillment | `SystemDMA`, `DoNotSend`, or client-suppression leakage, wrong audience, inaccurate property fields, or duplicate/overexposed cohorts reduced Gross → Net or Net → Appointment | Segment by batch, buy-box version, exclusion-tag status, source, and exposure cohort; anti-join exported IDs against exclusions | Contain the campaign, correct criteria/exclusions, notify the proper internal owner, reissue safely, and add automated checks plus two-person approval |

**When to check call recordings:** recordings are a targeted second-step test, not the starting point. First isolate the abnormal channel, vendor, caller, skiptrace-age cohort, or disposition. Then compare a small sample with a healthy control for owner-identity verification, script adherence, objection handling, premature disqualification, disposition accuracy, and evidence of slow follow-up. Recordings explain *why* a cohort moved; the segmented data establishes prevalence.

**Service boundaries and caveats:**

- Skiptrace supplies possible phone numbers for already-selected records; it does not provide distress, property-condition, or buy-box data.
- Do not prescribe a universal skiptrace-refresh cadence; use the client's measured contactability decay by age cohort.
- Treat legislation, carrier policy, and vendor configuration as separate SMS hypotheses.
- Treat `SystemDMA` and `DoNotSend` as case-defined exclusion tags unless their production meaning is independently verified.
- A fulfillment defect may not reduce Gross Leads: exclusion-tagged records can create real removal inquiries that count as Gross Leads but produce no Net Leads.

### 4.7 Multi-issue stop rule

Do not stop because the first hypothesis is true. Apply the proposed correction to a counterfactual funnel and recompute every volume and adjacent conversion:

1. **If the full gap closes**, the cause is sufficient.
2. **If one KPI recovers but another remains below baseline**, branch from the residual KPI.
3. **If counts improve but the rate worsens**, the first fix may have exposed a second defect hidden by the prior mix.
4. **If no KPI responds**, reject or refine the hypothesis before scaling the action.

Cases 08 and 09 demonstrate the method: each partial fix is necessary, none is sufficient alone, and the final recommendation sequences all confirmed fixes.

---

## 5. How this maps to the 7 steps

| McKinsey step | In the playbook |
|---|---|
| 1. Define | Triggered by KPI vs. baseline/trend. Template: *"Client X's [ratio] fell from A% to B% between [dates]; identify root cause and restore to baseline within [horizon]."* |
| 2. Structure | Pre-built: the hypothesis tree for that KPI (§4). Built once, MECE, reused. |
| 3. Prioritize | Rank hypotheses by prior likelihood (boosted hugely by change-log correlation) × ease of testing. Segmentation tests first. |
| 4. Plan | Each hypothesis row already names its data pull. |
| 5. Analyze | Run the pulls against client data. |
| 6. Synthesize | SCR: *Situation* (baseline), *Complication* (decline + timing), *Resolution* (confirmed root cause). |
| 7. Recommend | The "action" column of the confirmed row, sized with the ROI tools. |

The insight that makes this scalable: **steps 1–4 are done once per KPI** (that's the playbook). A live diagnostic — human or AI — only executes steps 3–7 against a specific client. This is exactly why the Gemini prompt felt too broad: it asked the model to redo all seven steps from nothing each time instead of handing it the pre-built tree.

---

## 6. Baselines — the open methodology question

Three options, probably combined:

1. **Self-trend** (what you described): the client's own trailing history. No absolute benchmark needed — an inflection correlated with a change event is diagnostic on its own. Cheapest to ship; works from day one of the change log.
2. **Cohort benchmark**: percentile bands across clients, segmented by market and channel mix ("appointment→contract of 10% vs. 30%"). Needed to catch clients who were *never* healthy (no inflection to see).
3. **Hybrid**: alert on self-trend deviation; contextualize severity with the cohort band.

**Prerequisite either way: the change-event log.** If buy box edits, content changes, and channel changes aren't timestamped somewhere queryable today, that's the first data gap to close — it's the single highest-leverage diagnostic signal in the whole system.

---

## 7. Where the intranet tools fit (verified in code)

| Tool | What it actually is |
|---|---|
| `client-diagnostic` | **Already a McKinsey-style diagnostic tree** (`clientDiagnosticFlow.ts`): 3 pillars — Targeting & Data Quality, Marketing Effectiveness, Sales Ops & Engagement — each with ask/healthy/red-flag/benchmark per item, informed by 367 Knowledge Gap sessions. Plus market-context signals (DOM, supply, distress, cash-buyer %) and the 5-step approach: Segment → Compare → Benchmark → Correlate → Prioritize. Has TreeView + Wizard modes. |
| `gnacc-calculator` | The funnel model itself (GNACC = Gross→Net→Appt→Contract→Close): per-stage conversion + cost metrics, CG benchmarks, 8020REI/industry presets, tiered full-funnel benchmarks, channel/rep comparison. |
| `roi-client-analysis` | Per-client performance analysis (funnel data source for diagnostics). |
| `roi-calculator` | Sizes dollar impact of gaps → step 3 prioritization and step 7 recommendation sizing. |

**Implication:** the hypothesis-tree half of this playbook is substantially built. What §4 adds on top of `clientDiagnosticFlow.ts` is the *trigger* layer (which KPI deviation activates which branch) and the *test/action* columns. The queryable change-event log is still missing (§6), and the existing teaching layer (`training-program.md`) is not yet integrated into the intranet workflow.

---

## 8. The AI agent prompt (deferred, deliberately)

Do not deploy an unconstrained version yet. The earlier broad prompt asked the model to recreate the diagnostic logic on every run. Once the data interfaces and §6 change evidence are ready, the agent prompt is short and mechanical:

> *Context: [KPI definitions] + [hypothesis playbook for the flagged KPI] + [client's data: ratios, trends, segments, change log].*
> *Task: execute steps 3–7 — prioritize the hypotheses given the change log, run/request the listed tests, state the confirmed root cause with evidence, deliver an SCR-structured recommendation.*

One template, parameterized by KPI + client. The playbook is the product; the prompt is packaging.

---

## 9. Suggested next steps

1. **Operationalize the KPI router** (§4.0A–B) — make every alert identify the first broken volume/rate and load only that hypothesis branch.
2. **Audit the change-event log** — determine what is captured today for buy-box, fulfillment, content, channel, vendor, script, and staffing changes, and where.
3. **Name each data pull and owner** — connect every test in §4 to the system/export, query, CSM, analyst, vendor, or client responsible for supplying it.
4. **Pick the baseline approach** (§6) — start with self-trend + reconstructed change correlation, then add aligned cohort bands.
5. **Then** parameterize the agent prompt by alarm KPI and wire the guide into `client-diagnostic`.
