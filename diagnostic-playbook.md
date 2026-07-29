# Client Diagnostic Playbook — Working Notes

*Organizing the idea from the Gemini conversation (McKinsey 7-step applied to 8020REI client funnels). Companion to `McKinsey-Problem-Solving-Guide.html` (the teaching guide). Last updated: 2026-07-29.*

---

## 1. The core idea in one paragraph

Build a **diagnostic playbook** that turns client funnel KPIs into root-cause hypotheses, the way a McKinsey team would — but pre-built and repeatable. When a conversion rate is below baseline or trending down, the playbook says which hypotheses to test, what data confirms or kills each one, and what the fix is. The McKinsey guide is the *method*; this playbook is the method *instantiated for the wholesale REI acquisition funnel*. Eventually an AI agent inside the client-diagnostic tool runs it automatically.

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

Upstream of Gross Leads sits the marketing layer (the "prospect → lead" ratio from the original conversation): the DM funnel benchmarks live in `clientDiagnosticFlow.ts` (Mail → Response 0.35% avg; mail pieces per deal ~9,400 avg, ~2,900 best).

---

## 4. Hypothesis playbook (entries drafted so far)

### 4.0 Diagnose the financial symptom before choosing a funnel stage

Do not force every revenue or profit decline into GNACC. Start with the identity:

**Gross profit contribution = closed deals × gross profit per closed deal − operating/marketing costs.**

| Observed pattern | Correct diagnostic branch | First tests |
|---|---|---|
| Closed deals fell; gross profit per deal is stable | Volume or GNACC conversion | Compare every adjacent-stage rate before/after; segment the first broken rate; check change history |
| Closed deals are stable; revenue or gross profit per deal fell | Unit economics — **not** a GNACC conversion failure | Segment gross profit per closed deal first by market, property type, ARV band, acquisition rep, and exit type; compare contract price, buyer price, repair revisions, assignment-fee/JV splits, and concessions; check pricing/formula changes |
| Both closed deals and gross profit per deal fell | Two simultaneous branches | Quantify the contribution of deal-count loss versus unit-economics compression, then diagnose each separately |
| Closed deals and gross profit per deal are stable; profit fell | Cost branch | Compare marketing, labor, financing, transaction, and operating costs before/after |

Common unit-economics hypotheses include a worse deal mix, thinner assignment spreads, acquisition prices rising faster than buyer prices, repair/ARV misses that force price reductions, more JV or double-close costs, and inconsistent revenue recognition. The first test is still segmentation plus change history. **A lower gross profit per closed deal can coexist with a healthy Contract → Close rate.**

### 4.1 Appointment → Contract rate LOW (while appointments/visits are happening)

**Your hypothesis (the strong one):** the appointment is not producing a seller-acceptable offer — because the property does not meet acquisition criteria, the offer economics are wrong, or the rep fails to convert the seller. **Do not put "we signed it but could not find a cash buyer" here; that is a Contract → Close failure (§4.2).**

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Setter-to-acquisition handoff sends appointments outside the active buy box, so no viable offer is made | **Segment Appointment → Contract first** by active-buy-box fit, then by appointment setter and acquisition rep; compare visited-property characteristics with criteria; inspect required booking fields and routing changes | Reinstate required buy-box qualification before booking; hard-stop or reroute off-box leads; QA by setter and rep |
| 2 | Offers going out but too low to convert | Offer-to-ARV / offer-to-ask spread vs. historical and vs. market comps | Revisit offer formula, MAO assumptions |
| 3 | Acquisition rep execution (rapport, follow-up) | Rate by rep; call recordings; follow-up cadence data | Coaching / process |
| 4 | Competitive pressure in the market | Lost-deal reasons; market DOM / investor activity | Speed and offer positioning, not targeting |

Key signature: **appointments high + signed contracts low**. The seller has not signed yet, so tests belong on qualification/handoff, acquisition fit, offer economics, and rep conversion. If the appointment setter and the acquisition rep are different people, explicitly test that handoff.

### 4.2 Contract → Close rate LOW (signed contracts are not monetizing)

**Start with the stage fact:** the seller has already signed, but the contract did not become a closed deal. Buyer-list/dispo capacity is often the leading branch, but the fallout reasons determine which post-signature hypothesis deserves priority.

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Buyer-list depth, concentration, or demand loss | **Segment Contract → Close first** by fallout reason and end buyer; measure verified active buyers, buyer share of exits, bid coverage, time-to-first-bid, and buyer pause dates; check change history | Re-verify and expand the buyer list, pre-market contracts, and cap concentration |
| 2 | Buy box expanded beyond dispo capacity | Segment by county, price band, and property type; compare signed-contract mix with verified buyer demand; correlate the decline with buy-box edits | Pause/revert unsupported criteria, refocus on proven segments, and build verified buyer depth before re-expanding |
| 3 | Contracts priced too high to assign | Contract price, repairs, ARV, expected buyer margin, and assignment spread vs. closed deals | Tighten MAO/underwriting; renegotiate current contracts |
| 4 | Dispo execution or closing window is too slow/short | Time from signature to first marketing, buyer follow-up, bid count, and days remaining before close | Market on day zero, assign ownership/SLA, and negotiate realistic closing windows |
| 5 | Title, transaction, or seller fallout | Title, inspection, withdrawal, financing, and missed-deadline reason codes | Fix title/process controls; extend timelines or address the documented seller-side cause |

Key signature: **signed contracts flat + closings down**. `"No buyer found"` points to buyer-list/dispo or deal-to-buyer fit; title and seller withdrawals point to different branches. If closings are flat but gross profit per closed deal is down, return to §4.0 — that is unit economics, not Contract → Close.

### 4.3 Prospect → Lead rate DECLINING

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Data quality dropped (stale lists, bad skiptracing) | Contact-rate / valid-number rate over time; list source age | Refresh lists, change skiptrace vendor |
| 2 | Content unchanged → creative fatigue | Content change history: if it hasn't changed in a while, fatigue is plausible; if it *just* changed, the new content itself is suspect | Refresh creative / rotate hooks |
| 3 | Offer anchor too low (e.g., check letters with low amounts) | Response rate by offer amount band | Raise anchor / restructure the letter |
| 4 | Channel-specific breakdown | **Segment the ratio by channel / communication type** — isolates whether it's global or one channel | Fix or reweight that channel |
| 5 | Targeting drift (wrong audience, low motivation) | List criteria vs. converting-lead profile; motivation indicators | Retarget list pulls |

**Pattern to reuse for every entry:** segmenting the KPI (by channel, by rep, by list source, by property type) is itself the cheapest first test — it usually kills half the tree in one query.

### 4.4 Remaining entries to draft
- Lead → Appointment declining (speed-to-lead, lead manager capacity, script)
- Additional Appointment → Contract branches (offer level, competition, negotiation)
- Volume problems vs. ratio problems (top-of-funnel spend/list size vs. conversion) — keep these separate; they have different trees

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

**Implication:** the hypothesis-tree half of this playbook is substantially built. What §4 adds on top of `clientDiagnosticFlow.ts` is the *trigger* layer (which KPI deviation activates which branch) and the *test/action* columns; what's missing entirely is the change-event log (§6) and the teaching layer (see `training-program.md`).

---

## 8. The AI agent prompt (deferred, deliberately)

Don't write it yet. The prompt Gemini produced was too broad because the playbook didn't exist to feed it. Once §3, §4, and §6 are locked, the agent prompt is short and mechanical:

> *Context: [KPI definitions] + [hypothesis playbook for the flagged KPI] + [client's data: ratios, trends, segments, change log].*
> *Task: execute steps 3–7 — prioritize the hypotheses given the change log, run/request the listed tests, state the confirmed root cause with evidence, deliver an SCR-structured recommendation.*

One template, parameterized by KPI + client. The playbook is the product; the prompt is packaging.

---

## 9. Suggested next steps

1. **Lock the funnel taxonomy** (§3) — stage names and ratio definitions, MECE, agreed with the team.
2. **Audit the change-event log** — what's captured today for buy box / content / channel changes, and where.
3. **Finish the playbook tables** — the two drafted entries plus the four missing ones (§4.3), each hypothesis with test + data source + action.
4. **Pick the baseline approach** (§6) — recommend starting with self-trend + change-log correlation, adding cohort bands later.
5. **Then** write the agent prompt and wire it into `client-diagnostic`.
