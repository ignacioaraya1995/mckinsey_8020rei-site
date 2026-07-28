# Client Diagnostic Playbook — Working Notes

*Organizing the idea from the Gemini conversation (McKinsey 7-step applied to 8020REI client funnels). Companion to `McKinsey-Problem-Solving-Guide.html` (the teaching guide). Last updated: 2026-07-28.*

---

## 1. The core idea in one paragraph

Build a **diagnostic playbook** that turns client funnel KPIs into root-cause hypotheses, the way a McKinsey team would — but pre-built and repeatable. When a conversion rate is below baseline or trending down, the playbook says which hypotheses to test, what data confirms or kills each one, and what the fix is. The McKinsey guide is the *method*; this playbook is the method *instantiated for the wholesale REI acquisition funnel*. Eventually an AI agent inside the client-diagnostic tool runs it automatically.

Three ingredients, all necessary:

1. **KPI framework** — canonical funnel stages and conversion ratios, with a baseline (or at minimum a trend) per client.
2. **Hypothesis playbook** — for each KPI that is low/declining, a MECE tree of candidate root causes, each with a test and a recommended action.
3. **Change-event log** — buy box edits, content/creative changes, channel changes, script changes, list source changes. A metric inflection that lines up with a logged change is the fastest diagnosis there is (the buy-box example below).

---

## 2. The funnel (KPI taxonomy — CONFIRMED: it's GNACC)

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

## 3. Hypothesis playbook (entries drafted so far)

### 3.1 Appointment → Contract rate LOW (while appointments/visits are happening)

**Your hypothesis (the strong one):** the appointment is not producing a seller-acceptable offer — because the property does not meet acquisition criteria, the offer economics are wrong, or the rep fails to convert the seller. **Do not put "we signed it but could not find a cash buyer" here; that is a Contract → Close failure (§3.2).**

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Appointments do not fit the acquisition criteria, so no viable offer is made | Compare characteristics of visited properties (price band, repair level, neighborhood) vs. target criteria; check change log — did the decline start when someone edited the criteria? | Recalibrate appointment routing and acquisition criteria |
| 2 | Offers going out but too low to convert | Offer-to-ARV / offer-to-ask spread vs. historical and vs. market comps | Revisit offer formula, MAO assumptions |
| 3 | Acquisition rep execution (rapport, follow-up) | Rate by rep; call recordings; follow-up cadence data | Coaching / process |
| 4 | Competitive pressure in the market | Lost-deal reasons; market DOM / investor activity | Speed and offer positioning, not targeting |

Key signature: **appointments high + signed contracts low**. The seller has not signed yet, so tests belong on acquisition fit, offer economics, and rep conversion.

### 3.2 Contract → Close rate LOW (signed contracts are not monetizing)

**Your hypothesis (the strong one):** the signed contracts do not fit the available cash-buyer demand — the buy box has expanded beyond dispo capacity.

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Buy box expanded beyond dispo capacity | **Segment Contract → Close first** by county, price band, and property type; compare signed-contract mix with verified buyer demand; inspect fallout reasons; correlate the decline with buy-box edits | Pause/revert unsupported criteria, refocus on proven segments, and build verified buyer depth before re-expanding |
| 2 | Buyer concentration or demand loss | Closings and active demand by end buyer; buyer share of exits; buyer pause dates | Rebuild buyer depth, pre-market contracts, and cap concentration |
| 3 | Contracts priced too high to assign | Contract price, repairs, ARV, expected buyer margin, and assignment spread vs. closed deals | Tighten MAO/underwriting; renegotiate current contracts |
| 4 | Transaction or seller fallout | Title, inspection, withdrawal, and missed-deadline reason codes | Fix title/process controls; extend timelines or address the seller-side cause |

Key signature: **signed contracts flat + closings down + "no buyer found" fallout concentrated in a newly added segment ⇒ buy-box-to-dispo mismatch.**

### 3.3 Prospect → Lead rate DECLINING

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Data quality dropped (stale lists, bad skiptracing) | Contact-rate / valid-number rate over time; list source age | Refresh lists, change skiptrace vendor |
| 2 | Content unchanged → creative fatigue | Content change history: if it hasn't changed in a while, fatigue is plausible; if it *just* changed, the new content itself is suspect | Refresh creative / rotate hooks |
| 3 | Offer anchor too low (e.g., check letters with low amounts) | Response rate by offer amount band | Raise anchor / restructure the letter |
| 4 | Channel-specific breakdown | **Segment the ratio by channel / communication type** — isolates whether it's global or one channel | Fix or reweight that channel |
| 5 | Targeting drift (wrong audience, low motivation) | List criteria vs. converting-lead profile; motivation indicators | Retarget list pulls |

**Pattern to reuse for every entry:** segmenting the KPI (by channel, by rep, by list source, by property type) is itself the cheapest first test — it usually kills half the tree in one query.

### 3.4 Remaining entries to draft
- Lead → Appointment declining (speed-to-lead, lead manager capacity, script)
- Offer → Contract declining (offer level, competition, negotiation)
- Volume problems vs. ratio problems (top-of-funnel spend/list size vs. conversion) — keep these separate; they have different trees

---

## 4. How this maps to the 7 steps

| McKinsey step | In the playbook |
|---|---|
| 1. Define | Triggered by KPI vs. baseline/trend. Template: *"Client X's [ratio] fell from A% to B% between [dates]; identify root cause and restore to baseline within [horizon]."* |
| 2. Structure | Pre-built: the hypothesis tree for that KPI (§3). Built once, MECE, reused. |
| 3. Prioritize | Rank hypotheses by prior likelihood (boosted hugely by change-log correlation) × ease of testing. Segmentation tests first. |
| 4. Plan | Each hypothesis row already names its data pull. |
| 5. Analyze | Run the pulls against client data. |
| 6. Synthesize | SCR: *Situation* (baseline), *Complication* (decline + timing), *Resolution* (confirmed root cause). |
| 7. Recommend | The "action" column of the confirmed row, sized with the ROI tools. |

The insight that makes this scalable: **steps 1–4 are done once per KPI** (that's the playbook). A live diagnostic — human or AI — only executes steps 3–7 against a specific client. This is exactly why the Gemini prompt felt too broad: it asked the model to redo all seven steps from nothing each time instead of handing it the pre-built tree.

---

## 5. Baselines — the open methodology question

Three options, probably combined:

1. **Self-trend** (what you described): the client's own trailing history. No absolute benchmark needed — an inflection correlated with a change event is diagnostic on its own. Cheapest to ship; works from day one of the change log.
2. **Cohort benchmark**: percentile bands across clients, segmented by market and channel mix ("appointment→contract of 10% vs. 30%"). Needed to catch clients who were *never* healthy (no inflection to see).
3. **Hybrid**: alert on self-trend deviation; contextualize severity with the cohort band.

**Prerequisite either way: the change-event log.** If buy box edits, content changes, and channel changes aren't timestamped somewhere queryable today, that's the first data gap to close — it's the single highest-leverage diagnostic signal in the whole system.

---

## 6. Where the intranet tools fit (verified in code)

| Tool | What it actually is |
|---|---|
| `client-diagnostic` | **Already a McKinsey-style diagnostic tree** (`clientDiagnosticFlow.ts`): 3 pillars — Targeting & Data Quality, Marketing Effectiveness, Sales Ops & Engagement — each with ask/healthy/red-flag/benchmark per item, informed by 367 Knowledge Gap sessions. Plus market-context signals (DOM, supply, distress, cash-buyer %) and the 5-step approach: Segment → Compare → Benchmark → Correlate → Prioritize. Has TreeView + Wizard modes. |
| `gnacc-calculator` | The funnel model itself (GNACC = Gross→Net→Appt→Contract→Close): per-stage conversion + cost metrics, CG benchmarks, 8020REI/industry presets, tiered full-funnel benchmarks, channel/rep comparison. |
| `roi-client-analysis` | Per-client performance analysis (funnel data source for diagnostics). |
| `roi-calculator` | Sizes dollar impact of gaps → step 3 prioritization and step 7 recommendation sizing. |

**Implication:** the hypothesis-tree half of this playbook is substantially built. What §3 adds on top of `clientDiagnosticFlow.ts` is the *trigger* layer (which KPI deviation activates which branch) and the *test/action* columns; what's missing entirely is the change-event log (§5) and the teaching layer (see `training-program.md`).

---

## 7. The AI agent prompt (deferred, deliberately)

Don't write it yet. The prompt Gemini produced was too broad because the playbook didn't exist to feed it. Once §2, §3, and §5 are locked, the agent prompt is short and mechanical:

> *Context: [KPI definitions] + [hypothesis playbook for the flagged KPI] + [client's data: ratios, trends, segments, change log].*
> *Task: execute steps 3–7 — prioritize the hypotheses given the change log, run/request the listed tests, state the confirmed root cause with evidence, deliver an SCR-structured recommendation.*

One template, parameterized by KPI + client. The playbook is the product; the prompt is packaging.

---

## 8. Suggested next steps

1. **Lock the funnel taxonomy** (§2) — stage names and ratio definitions, MECE, agreed with the team.
2. **Audit the change-event log** — what's captured today for buy box / content / channel changes, and where.
3. **Finish the playbook tables** — the two drafted entries plus the four missing ones (§3.3), each hypothesis with test + data source + action.
4. **Pick the baseline approach** (§5) — recommend starting with self-trend + change-log correlation, adding cohort bands later.
5. **Then** write the agent prompt and wire it into `client-diagnostic`.
