# 8020IQ Problem-Solving Program — Complete Docs Bundle

*All program documents in one markdown file, in reading order. Generated from the individual `.md` sources — those remain the source of truth.*

## Contents

1. The McKinsey Problem-Solving Method
2. Training Program (Flipped Classroom + Case Method)
3. Case Library — How to Run & Author Cases
4. Client Diagnostic Playbook
5. One-Page Diagnostic Memo — SCR Template
6. GNACC Funnel & Benchmark Reference
7. Glossary

---



<!-- ===== mckinsey-method.md ===== -->

# The McKinsey Problem-Solving Method — Reference

*Markdown version of `McKinsey-Problem-Solving-Guide.html` for agents and quick lookup. Seven steps in four phases, plus the toolbox: issue trees, MECE, the Pyramid Principle, and SCR. Taught through **one running wholesale case** that travels through every step.*

## The running case — Trinity River Home Buyers

Fictional wholesale investor, Dallas–Fort Worth, 8020REI client for two years. **Monthly profit after marketing spend declined two months in a row:** ~$235k baseline → $185k → $135k, with spend unchanged at $15k/mo. The healthy baseline uses the standard funnel counts and benchmarks (`gnacc-reference.md`): 500 GL → 350 NL (70%) → 70 appts (20%) → 14 contracts (20%) → ~10 closed deals (70%), with **$25,000 average gross profit per closed deal**. Baseline profit after marketing spend ≈ 10 × $25,000 − $15,000 = **$235k**.

Engineered root cause (deliberately different from Case 01's buy-box story): the **lead manager resigned ten weeks ago**; speed-to-lead collapsed (share of leads contacted <5 min: ~80% → ~20%), so **Net→Appt fell 20% → 11%** (appts 70 → 40, contracts 14 → 8, closings ~10 → ~6). Everything else stayed flat. Restoring it recovers about four closed deals × $25,000 ≈ **+$100k/mo (~$1.2m/yr)**.

## The 4 phases and 7 steps

The seven steps are grouped into four phases; one phase can hold several steps. Client engagement runs underneath all four phases, not only at kickoff and readout.

| Phase | Contains | What happens | Produces |
|---|---|---|---|
| 1 · Define | Step 1 | Agree a single, SMART problem statement before analysis | A written problem statement |
| 2 · Structure | Steps 2–3 | Break into a MECE tree, rank branches by impact × ease | A prioritized issue tree |
| 3 · Analyze | Steps 4–5 | Build the workplan, then run the analyses | Tested hypotheses, findings |
| 4 · Synthesize | Steps 6–7 | Compress findings into a recommendation, deliver top-down | A recommendation, communicated |

---

## Step 1 — Define the problem

Most weak diagnostic work is excellent analysis of the wrong question. Write the problem as a **problem** (a metric that moved, with numbers and dates) — never as an opportunity ("how do we grow?") or a pre-picked solution ("they need more leads").

**Not SMART:** "Trinity River isn't happy — how do we improve their results?" / "They need more volume — should they raise spend?"
**SMART:** "Trinity River's monthly profit after marketing spend fell from ~$235k to $135k over the last two months with spend unchanged at $15k. Find the root cause and restore profit to the $235k baseline within 60 days, without increasing the marketing budget."

**The define checklist — answer all five in writing (three lines is enough):**

1. **Is it a problem, not an opportunity or a solution?** A metric that moved, not "how do we grow" or a fix chosen in advance.
2. **Which metric, from what to what, since when?** Numbers and dates.
3. **What does solved look like, and by when?** Target + deadline.
4. **What is out of bounds?** Budget, channels, team changes the client won't accept.
5. **Who decides, and where will the data come from?** Owner + data sources (the client's CRM; benchmarks in `gnacc-reference.md`).

> Teaching note: skipping this step feels fast when the client wants action. Resist. Twenty minutes of hard argument here saves weeks downstream.

## Step 2 — Structure the problem

You cannot analyze "profit is down." You can analyze one leaf of a tree. Solve the leaves and, by construction, you solve the root.

**Two ways to build the tree — pick by how much data you have:**

- **Hypothesis tree — data rich (our usual case: funnels live in the CRM).** Starts from a proposed answer, decomposed into testable sub-hypotheses. Running case: *"profit fell because exactly one funnel stage broke while spend and gross profit per closed deal stayed flat"* — one sub-hypothesis per funnel stage, each provable in a single query.
- **Issue tree — data thin (no CRM hygiene, no baseline).** Starts from open questions; explores before committing. Must still be MECE.

**Running-case issue tree:** "Why did profit fall from $235k to $135k/mo?" →
1. **Fewer closed deals** — less volume in (gross leads: spend, list size, response rate) | worse conversion anywhere in GNACC (GL→NL, NL→Appt, Appt→Contract, Contract→Close)
2. **Less gross profit per closed deal** — assignment spread vs. ARV; dispo pricing/renegotiations
3. **Higher costs** — marketing spend; operating overhead

MECE by construction — it mirrors the identity **profit = closed deals × gross profit per closed deal − costs**, so the branches cannot overlap and nothing else can move profit. When one dimension won't cut cleanly, cross two (e.g., funnel stage × county).

> Teaching note: build the tree out loud with the team. The argument about where a branch belongs is usually when someone spots the problem statement was fuzzy. That backward loop to Step 1 is healthy.

## Step 3 — Prioritize the issues

A perfectly MECE tree with thirty leaves bankrupts the timeline. Plot branches on **impact × ease**, attack top-right first. Rank; don't score to two decimals; judgment and the client's stakeholders belong in the call.

**Running case, ranked:** (A) funnel stage rates vs. baseline — one CRM query, decides everything → do first; (B) speed-to-lead & rep segmentation — cheap follow-up; (C) spend/cost lines — known flat → quick rule-out; (D) gross-profit-per-closed-deal trend — stable at $25,000 → quick rule-out; (E) market shift (DOM, supply) — only if execution checks out. Two same-day queries kill branches 2 and 3 by lunch.

## Step 4 — Plan the analyses

The least glamorous step and the most often shortcut. For every prioritized branch write down, **before** scheduling work: the hypothesis, the analysis that tests it, the data source, the owner + deadline, and the "so what" if true and if false.

**Running-case workplan:**

| Hypothesis | Analysis | Source | So what if true / false |
|---|---|---|---|
| One funnel stage broke | Stage-by-stage conversion rates, baseline vs. last 2 months | CRM funnel counts | True → isolate stage. False → volume problem, go upstream. |
| Speed-to-lead degraded | Median first-contact time by week; appt rate by response bucket | CRM timestamps | True → ops/staffing fix. False → check scripts & qualification. |
| Market cooled | DOM, months of supply, distressed inventory | MLS / county market data | True → reset expectations. False → execution problem confirmed. |

> Teaching note: if you cannot state what an analysis would prove either way, it is not ready to be scheduled.

## Step 5 — Conduct the analyses

Match rigor to the decision at stake. Find the **80/20** — the handful of queries resolving most of the uncertainty. Running case, two queries:

**Query 1 — walk the funnel (baseline → last month):** spend $15k → $15k · GL 500 → 500 · NL 350 → 350 (70% → 70%; benchmark 50%) · **appts 70 → 40 (20% → 11%; benchmark 25%)** · contracts 14 → 8 (20% → 20%; benchmark 15%) · closed deals 10 → 6 (~71% → 75%; benchmark 70%). Exactly one stage broke. Prize: restore about four closed deals × $25,000 ≈ **+$100k/mo (~$1.2m/yr)**.

**Query 2 — segment before you theorize + change log:** appt rate for leads called <5 min: 38% (healthy ≥35%); called >30 min: 9%. Share called <5 min: 80% → 20%. Change log: lead manager resigned ten weeks ago; calls returned in end-of-day batches. Red flag: first contact after 30 min ≈ 21× less likely to convert. Metric inflection + timestamped change = fastest confirmation there is.

> Teaching note: a regression on the wrong sample, dressed up in precision, is worse than a clean back-of-envelope — it looks authoritative. Deciding what to skip is a skill.

## Step 6 — Synthesize the findings

Analysis produces data; **synthesis turns data into a recommendation**. Ladder: data → insights → implications → "so what" → recommendation. Each rung compresses the one below it — repetition with more confident adjectives is the tell that synthesis isn't happening.

**Running case, climbed:** Data — spend flat, leads flat, appts 70→40, downstream rates stable, gross profit per closed deal steady at $25,000, <5-min contact share 80%→20%, lead manager resigned week zero → Insight — the funnel breaks at exactly one stage (NL→Appt), starting when first-contact speed collapsed → Implication — demand and downstream execution are healthy; fresh leads decay before anyone calls; staffing/process failure, not marketing → So what — restore first-contact speed and the funnel restores itself, no extra spend → **Recommendation — backfill the lead-manager role, route every fresh lead to a <5-minute first call this week, monitor NL→Appt weekly vs. the 20% baseline.**

## Step 7 — Develop recommendations & communicate

Rigor that never gets absorbed has zero impact. **The Pyramid Principle** (Minto): *think bottom-up, present top-down* — answer first, then MECE supporting reasons.

**Weak opening:** walks through two months of funnel charts, then suggests "exploring staffing options."
**Strong opening:** "Backfill your lead-manager role and route every fresh lead to a five-minute first call, starting this week — that restores roughly $100k of monthly profit." Then three reasons: appointments are the only broken stage; the break started the week the lead manager left; leads called within 5 minutes still convert at the healthy rate.

**SCR** structures the storyline: **Situation** (two years at ~20% NL→Appt and ~$235k/mo after marketing spend) → **Complication** (profit fell to ~$135k in two months; the appointment rate collapsed the week the lead manager left; every unstaffed week costs roughly $25k) → **Resolution** (backfill + <5-min routing; watch NL→Appt weekly vs. 20%; escalate if not recovered in four weeks). When the audience already agrees, reorder to **RSC** — the two-minute elevator format used in the case interviews.

---

## MECE — Mutually Exclusive, Collectively Exhaustive

Minto, 1960s. The single rule that makes every tree, pyramid, and bullet list defensible. **ME** — no category overlaps another. **CE** — nothing left out; buckets sum to the whole.

**Wholesale before/after (explaining the profit decline):**
- Not MECE — "lead quality / rep performance / marketing / the market": buckets overlap (lead quality is both marketing and targeting) and offer economics is missing; you could confirm all four and still not explain the decline.
- MECE — "fewer closed deals / less gross profit per closed deal / higher costs": an identity (profit = closed deals × gross profit per closed deal − costs); no overlap, nothing missing — the decline must live in at least one bucket.

MECE doesn't demand exhaustive analysis of every leaf. Pair with 80/20: structure everything, spend hours on the 20% of branches driving 80% of the effect — for Trinity River, one funnel query settled three branches at once.

## Bonus — 8 operating habits (*The McKinsey Mind*)

1. **Solve it at the first meeting** — form a fact-based hypothesis on day one
2. **Intuition counts as much as facts** — when data is thin, informed judgment is legitimate
3. **Research, don't reinvent** — find the 80/20 and quick wins before fresh analysis
4. **Tell the story behind the data** — numbers don't persuade; the narrative does
5. **Prewire everything** — brief decision makers before the meeting, not during
6. **Start with the conclusion** — lead with the answer, then justify
7. **Hit singles** — consistent deliverable progress beats a home-run swing that misses
8. **Respect your time** — work expands to fill the time given; delegate and set boundaries

---

*Sources: McKinsey internal problem-solving training materials; Slideworks.io explainers on the process, Pyramid Principle, SCR, and MECE; Iliyana Stareva's summary of "The McKinsey Mind." Trinity River Home Buyers is fictional; all benchmarks are 8020REI's own (`gnacc-reference.md`).*


---



<!-- ===== training-program.md ===== -->

# 8020IQ Problem-Solving Program — Flipped Classroom + Case Method

*How the pieces fit: the teaching guide teaches the METHOD, the case library provides safe PRACTICE, the intranet tools are where the method runs on REAL clients, and the playbook is the reference that accumulates what we learn.*

```
McKinsey-Problem-Solving-Guide.html   →  learn the method (pre-work, self-paced)
case-library/*.md                     →  practice on fictional clients (live session)
tools/client-diagnostic + gnacc-calc  →  apply to real clients (post-work)
diagnostic-playbook.md                →  reference: KPI → hypothesis trees (grows over time)
```

---

## 1. Why flipped classroom + case method

Lecture time spent explaining MECE is wasted — people nod and forget. The flip: theory is consumed alone before class (it's reading, not discussion), and the scarce live time is spent doing the hard part — running a case under pressure with feedback. This is exactly how consulting firms train: the case interview isn't just selection, it's their teaching instrument. We reuse it as one.

## 2. Program structure (two live sessions, ~2h live total; solo pre-work + async post-work)

### Pre-work (solo, self-paced, ~60 min)
- Read `McKinsey-Problem-Solving-Guide.html` — at minimum: the 4 phases, Step 1 (problem statements), Step 2 (issue trees), MECE section.
- Micro-exercise (submit before class, 15 min): *"A client says 'my cost per deal doubled.' Write a SMART problem statement and sketch a 2-level MECE tree."* — this is the accountability check that the reading happened; no exercise, no seat.

### Session 1 — the case (live, 90 min)
| Time | Activity |
|---|---|
| 0–10 | Warm-up: critique two problem statements (one vague, one SMART) |
| 10–55 | A case from the **Interview Casefile** (`interview-cases.html`, password-protected), run interviewer-led. Facilitator interviews; participants work in pairs (one leads, one seconds); rotate at each question |
| 55–75 | Debrief: map what just happened to the 7 steps; show the scoring rubric; replay the "segment before you theorize" moment |
| 75–90 | Connect to reality: open `tools/gnacc-calculator`, load the *8020REI Benchmarks* preset, and reproduce the case's baseline funnel and conversion math; use the case's $25k gross-profit assumption for dollar sizing. Then open `tools/client-diagnostic` and show the 3 pillars = the hypothesis tree they just built by hand |

### Post-work — real client (async, CSM's own book)
- Pick one underperforming client. Run the 5-step diagnostic approach (Segment → Compare → Benchmark → Correlate → Prioritize) using client-diagnostic + roi-client-analysis.
- Deliverable: **one-page SCR memo** — Situation, Complication, Resolution — recommendation first, ≤ 3 supporting exhibits.

### Session 2 — memo review (live, 45 min)
- 2–3 volunteers present their memo in the "two-minute elevator" format; group scores with the case rubric.
- Harvest: every confirmed root cause gets added to `diagnostic-playbook.md` as a playbook entry (hypothesis → test → action). **This is how the playbook compounds** — each cohort leaves it richer.

### Certification / progression
- **Level 1 — Solver:** completed a case as candidate + delivered an accepted SCR memo.
- **Level 2 — Interviewer:** ran a case as facilitator (you don't fully understand the method until you interview with it).
- Interviewers become facilitators for the next cohort → the program self-staffs.

## 3. The case library (build-out plan)

The library spans the GNACC funnel and can revisit a stage when the root causes and tests differ materially. Each case follows the Case 01 template (prompt → structure → exhibit/quant → brainstorm → synthesis + rubric + facilitator notes).

| # | Case | Broken stage | Engineered root cause | Status |
|---|---|---|---|---|
| 01 | Lone Star Home Buyers | Contract → Close | Buy box expanded beyond dispo capacity | ✅ drafted |
| 02 | Cedar Fork Property Group | Gross → Net | Stale list / skip-trace decay | ✅ drafted |
| 03 | Prairie Gate Investments | Contract → Close | Dispo buyer concentration — top end-buyer paused | ✅ drafted |
| 04 | Red Oak Home Offers | Mail → Response | Creative fatigue, no A/B test in 9 months | ✅ drafted |
| 05 | Panther City Acquisitions | Net → Appt | Speed-to-lead collapse after lead-manager departure | ✅ drafted |
| 06 | North Elm Property Buyers | Nothing (trap case) | Market contraction — distressed inventory down; execution is fine | ✅ drafted |
| 07 | Waxahachie Home Solutions | Appt → Contract | Flat 55% offer formula replaced tiered ARV brackets | ✅ drafted |

Case 06 matters: the method must also conclude *"it's not the client's execution"* — the market-context signals in client-diagnostic (DOM, months of supply, distressed inventory vs 2019, cash-buyer %) exist precisely for this.

Cases 01 and 03 intentionally share **Contract → Close**: Lone Star tests whether the buy box outran dispo capacity, while Prairie Gate tests buyer-concentration risk. Case 07 fills **Appointment → Contract** with a seller-side offer-calibration failure.

Source material for new cases: Knowledge Gap sessions (the 367 that informed the diagnostic pillars), real anonymized client inflections, and the red-flag items already codified in `clientDiagnosticFlow.ts` — every `redFlag` in that file is a case seed.

## 4. Design principles (why it's built this way)

1. **Real numbers everywhere.** Cases use the CG stage benchmarks (50/25/15/70), the preset's baseline funnel counts, and a confirmed typical-client gross-profit range of $20,000–$30,000 per closed deal (case midpoint: $25,000).
2. **The tree is pre-built; judgment is what's trained.** The client-diagnostic tool already holds the hypothesis tree. The skill being taught is steps 3–7: prioritizing, testing cheaply (segmentation first, change-log correlation first), and synthesizing SCR-style.
3. **Interviewer-led, not candidate-led.** Matches McKinsey's own format and keeps a 45-min time box; the facilitator can rescue a stuck room with the scripted coaching prompts.
4. **Every diagnosis feeds the playbook.** The memo template's last section is literally "playbook entry proposed." Training and knowledge management are the same loop.

## 5. Open items

- [ ] One-page SCR memo template (Google Doc)
- [ ] Decide cohort composition (CS only, or CS + sales + data?)
- [ ] Change-event logging on real clients (buy box edits, creative changes) — the diagnostic shortcut taught in Case 01 only works in production if changes are timestamped somewhere queryable
- [ ] Optional later: AI case partner — an agent prompt that plays interviewer for solo practice (cheap once cases are written, since the interviewer guide is the prompt)


---



<!-- ===== case-library/README.md ===== -->

# Case Library — how to run and author cases

Wholesale-REI case interviews in the McKinsey interviewer-led format, used as the live-session core of the training program (see `../training-program.md`).

## Running a case (facilitator)

- **Format:** interviewer-led. You control direction and provide data only when asked — the candidate must ask for exhibits and segmentations, not receive them upfront.
- **Time box:** 45–60 min. Participants work in pairs (one leads, one seconds); rotate at each question.
- **Score** with the rubric in each case file (Structure / Quant / Insight / Synthesis / Coachability, 1–5).
- **Coach, don't rescue:** each case file has scripted coaching prompts for stuck candidates. Use them verbatim before improvising.
- **Debrief mapping** (do this every time): prompt = Step 1 (define) · Q1 = Step 2 (structure) · choosing what to test first = Step 3 (prioritize) · asking for exhibits = Step 4 (plan) · the math = Step 5 (analyze) · Q4 = Steps 6–7 (synthesize & recommend).

## Authoring a new case

Every case follows the same skeleton (see `case-01-lone-star.md` as the model):

1. **Opening prompt** — fictional client, one headline symptom, one owner quote. Keep spend/volume numbers loadable into the GNACC calculator.
2. **Q1 — Structure**: "what framework?" Expected answer: funnel-first + the three diagnostic pillars + market. Include coaching prompt.
3. **Q2 — Quant exhibit**: before/after funnel table. Exactly **one** stage-conversion breaks and everything else stays stable — unless the case is explicitly designed as a market/context trap, in which case **no** conversion breaks. Candidate must isolate the pattern and size the $ exposure.
4. **Q3 — Brainstorm**: MECE hypothesis set for that broken stage, then "what do you test first?" The taught move: **segment before you theorize** + **check the change log**. Exhibit 2 = a segmentation + a change-log note that together confirm one hypothesis.
5. **Q4 — Synthesis**: two-minute elevator answer, SCR, recommendation first, with a risk and a monitoring metric.
6. **Rubric + facilitator notes** — including which real red flag (from `../gnacc-reference.md` diagnostic table) the case dramatizes.

**Rules of the house style:**
- Use real benchmarks from `../gnacc-reference.md`; the math must check out exactly (recompute every rate).
- If the prompt says a metric is unchanged, keep the before/after exhibit values identical. Use **$25,000 gross profit per closed deal** for case sizing (typical range: $20,000–$30,000, or roughly 10%–15% of property value) unless the case provides a client-specific figure.
- One engineered root cause per case. The decline's start date correlates with a supplied change event except in an explicit market/context trap, where the evidence must rule out client-side changes.
- Fictional client names, realistic geography (DFW area so far).
- Every red flag in `clientDiagnosticFlow.ts` is a candidate case seed.

## Build-out plan

| # | Broken stage | Engineered root cause | Status |
|---|---|---|---|
| 01 | Contract → Close | Buy box expanded beyond dispo capacity | ✅ `case-01-lone-star.md` |
| 02 | Gross → Net | Stale lists / skip-trace decay | ✅ `case-02-cedar-fork.md` |
| 03 | Contract → Close | Dispo buyer concentration — top end-buyer paused | ✅ `case-03-prairie-gate.md` |
| 04 | Mail → Response | Creative fatigue, no A/B test in 9 months | ✅ `case-04-red-oak.md` |
| 05 | Net → Appt | Speed-to-lead > 30 min after lead-manager departure | ✅ `case-05-panther-city.md` |
| 06 | None (trap case) | Market contraction — distressed inventory down; execution is fine | ✅ `case-06-north-elm.md` |
| 07 | Appt → Contract | Flat 55% offer formula replaced tiered ARV brackets | ✅ `case-07-waxahachie.md` |

**Rendering & access:** all seven cases live in `interview-cases.html` — the password-protected Interview Casefile (facilitators only; content is AES-encrypted in the page). The case `.md` files here are the source of truth and are **not** published to the web or downloads page.

Case 06 matters because the method must also be able to conclude "it's not the client's execution" — that's what the market-context signals exist for.

Cases 01 and 03 intentionally share **Contract → Close** but teach different branches: deal-to-buyer fit vs. buyer concentration. Case 07 provides the distinct **Appointment → Contract** lesson: the seller rejects a miscalibrated offer before signing.


---



<!-- ===== diagnostic-playbook.md ===== -->

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


---



<!-- ===== templates/scr-memo-template.md ===== -->

# One-Page Diagnostic Memo — SCR Template

*The post-work deliverable of the training program. One page. Recommendation first. At most three exhibits. Scored with the case rubric.*

---

**Client:** ______   **Author:** ______   **Date:** ______
**KPI flagged:** ______ (e.g., Appt → Contract, was ____% now ____%, baseline source: ______)

## Recommendation (write this first, one sentence)

> We should **[specific action]** because **[confirmed root cause]**, which we expect to recover **[$ or # per month]** within **[horizon]**.

## S — Situation (facts only, no advocacy)

2–3 sentences: the client's normal state. Funnel volumes/rates at baseline, spend, market context. Numbers, not adjectives.

## C — Complication (why act now)

2–3 sentences: what broke, when, how big. Include the timing correlation if there is one ("the decline began the week X changed").

## R — Resolution (most of the page)

- **Root cause, with evidence:** the segmentation or comparison that confirmed it (Exhibit 1/2). State which hypotheses were ruled out and by what.
- **Action plan:** who does what by when.
- **Size of the prize:** recovered contracts × expected Contract→Close rate × gross profit per closed deal; if the gap is already measured in closed deals, do **not** apply the close rate again.
- **Risk & monitoring:** the one metric to watch weekly, against what baseline, and the decision trigger if it doesn't recover.

## Exhibits (max 3)

1. Funnel before/after (stage rates, broken stage highlighted)
2. The confirming segmentation (by county / rep / channel / price band)
3. Optional: change log or market-context rule-out

## Playbook entry proposed (the harvest)

> KPI: ______ · Hypothesis confirmed: ______ · Test that confirmed it: ______ · Action: ______
> *(This row gets added to `../diagnostic-playbook.md` §3 in Session 2.)*

---

**Checklist before submitting:** recommendation is the first sentence · every number has a source · at least two hypotheses explicitly ruled out · one monitoring metric named · fits on one page.


---



<!-- ===== gnacc-reference.md ===== -->

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


---



<!-- ===== glossary.md ===== -->

# Glossary — wholesale REI & methodology terms

*For agents and new team members. Domain terms first, method terms second.*

## Wholesale real estate / 8020REI domain

- **Wholesaling** — getting a property under contract below market value and assigning (selling) that contract to a cash buyer for a fee, without renovating or (usually) closing on the property yourself.
- **Assignment / assignment fee** — the wholesaler's profit: the price the end buyer pays for the contract minus the contracted purchase price.
- **Buy box** — a client's target-property criteria: location (counties/zips), price band, property type, condition/repair level, equity, seller situation. Drives which prospects get marketed to and which leads get pursued. *Stale or over-expanded buy boxes are the most common diagnostic root cause.*
- **Dispo (disposition)** — the sell side: the cash-buyer list and the process of assigning signed contracts to it. A buy box wider than dispo capacity produces contracts that cannot be assigned to an end buyer and therefore fail between **Contract → Close**.
- **GNACC** — the canonical funnel: **G**ross Leads → **N**et Leads → **A**ppointments → **C**ontracts → **C**losings. Full definitions and benchmarks: `gnacc-reference.md`.
- **Gross lead / net lead** — anything entering the CRM vs. a verified owner who wants to sell (see `gnacc-reference.md`).
- **ARV (After Repair Value)** — estimated value of a property once renovated; the anchor for offer formulas.
- **MAO (Maximum Allowable Offer)** — the most an investor can pay and still profit, typically ARV × cash-offer % − repairs − fee.
- **Cash offer %** — the percentage of ARV used in offer letters; healthy practice is tiered by ARV bracket (e.g., 63/68/78%), red flag is a flat % or < 60%.
- **Check letter** — direct-mail piece resembling a check for a specific offer amount; a low anchor amount suppresses response rates.
- **Skip tracing** — finding owners' phone numbers/contact info for a property list; decaying skip-trace quality shows up as wrong-number rates.
- **Speed to lead** — time from lead arrival to first contact attempt; > 30 min ≈ 21× less likely to convert.
- **Driving for dollars / distressed lists** — lead sources built from visibly distressed or legally distressed (pre-foreclosure, tax lien, probate, REO) properties.
- **DOM (Days on Market)** — market-temperature signal; rising DOM = cooling market.
- **Months of supply** — inventory ÷ absorption; < 6 months = seller's market (harder for investors).
- **iBuyer / institutional buyer** — large-scale cash purchasers (hedge funds etc.); a spike in cash-buyer % means margin-compressing competition.
- **CSM** — customer success manager; runs engagement calls and diagnostics on 8020REI clients.
- **Feedback Loop** — clients submitting their closed-deal/lead/appointment data back to 8020REI; without it the buy box is guesswork.
- **Knowledge Gap sessions** — recorded client Q&A/coaching sessions; 367 of them informed the diagnostic pillars.
- **ICP** — ideal customer profile (ICP1/ICP2 = client tiers).

## Methodology

- **7 steps / 4 phases** — Define (1) · Structure (2–3) · Analyze (4–5) · Synthesize (6–7). Full reference: `mckinsey-method.md`.
- **SMART problem statement** — specific, measurable, action-oriented, relevant, time-bound.
- **MECE** — mutually exclusive, collectively exhaustive; the rule that makes trees and pyramids defensible.
- **Issue tree vs. hypothesis tree** — open-question decomposition (data thin) vs. proposed-answer decomposition (strong hunch).
- **Pyramid Principle** — think bottom-up, present top-down; answer first, then MECE supporting reasons.
- **SCR** — Situation → Complication → Resolution; the storyline of a memo or deck. RSC variant when the audience already agrees.
- **80/20** — spend analysis hours on the ~20% of branches driving ~80% of the effect.
- **Segment before you theorize** — the house diagnostic move: cut a broken KPI by rep/county/channel/price band before debating hypotheses; one query usually kills half the tree.
- **Change-log correlation** — matching a metric inflection to a timestamped account change (buy-box edit, creative change); the fastest confirmation there is.
- **Baseline vs. benchmark** — the client's own trailing history vs. cross-client/industry standards; deviations from either can trigger a diagnostic.
- **Flipped classroom** — theory consumed alone before class; live time reserved for supervised practice (the case).
- **Case interview (interviewer-led)** — McKinsey-style teaching/testing format: structure → quant exhibit → brainstorm → synthesis, with the interviewer controlling direction.


---
