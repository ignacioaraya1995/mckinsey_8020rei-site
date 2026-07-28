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
