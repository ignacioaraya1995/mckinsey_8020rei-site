# 8020IQ Problem-Solving Program — Complete Docs Bundle

*All program documents in one markdown file, in reading order. Generated from the individual `.md` sources — those remain the source of truth.*

## Contents

1. The McKinsey Problem-Solving Method
2. From Hypothesis to Root Cause
3. Training Program (Flipped Classroom + Case Method)
4. Case Library — How to Run & Author Cases
5. Client Diagnostic Playbook
6. One-Page Diagnostic Memo — SCR Template
7. GNACC Funnel & Benchmark Reference
8. Glossary

---

<!-- ===== mckinsey-method.md ===== -->

# The McKinsey Problem-Solving Method — Reference

*Markdown version of `McKinsey-Problem-Solving-Guide.html` for agents and quick lookup. Seven steps in four phases, plus the toolbox: issue trees, MECE, the Pyramid Principle, and SCR. Taught through **one running wholesale case** that travels through every step.*

## The running case — Trinity River Home Buyers

Fictional wholesale investor, Dallas–Fort Worth, 8020REI client for two years. **Monthly profit after marketing spend declined two months in a row:** ~$235k baseline → $185k → $135k, with spend unchanged at **$15,000/month**. The healthy baseline uses the standard funnel counts and benchmarks (`gnacc-reference.md`): 500 GL → 350 NL (70%) → 70 appts (20%) → 14 contracts (20%) → ~10 closed deals (70%), with **$25,000 average gross profit per closed deal**. Baseline profit after marketing spend ≈ 10 × $25,000 − $15,000 = **$235k**.

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

## The engine underneath — four tools in a loop

The 7 steps look linear on paper. In practice they run on four tools used in an iterative loop: **hypothesis → issue tree → drill-down → synthesis**. Drill down into the data, pull up to revise the hypothesis, restructure the tree, drill down again — lather, rinse, repeat. It is the scientific method wearing a suit: hypothesis → experiment → conclusion, repeated until the conclusion stops moving.

**Trinity River, looped:** hypothesis "one funnel stage broke" → tree (one branch per stage) → drill down (walk the funnel) → finding (only NL→Appt broke) → revised hypothesis "first-contact speed collapsed" → new tree (speed buckets × time) → drill down (segmentation + change log) → synthesis. Two loops, two queries, one answer.

**Hypothesis first, frameworks second.** A hypothesis is a theory to be proved **or disproved** — proving it wrong still moves you to the right answer, because a dead branch is information. Had Trinity River's funnel walk come back healthy, that failure would have sent the search upstream to lead volume just as fast.

Frameworks are just templates of commonly used issue trees — the profit-identity tree in Step 2 is one. The failure mode has a name: the **framework robot** — force-fitting a memorized framework onto a problem with no hypothesis behind it. Custom-build the tree from the stated hypothesis, then run two validity tests:

1. **MECE** — no overlap, nothing missing (see the MECE section below).
2. **The conclusiveness test** — if every branch proves true, could the opposite conclusion still hold? If yes, a branch is missing. ("Spend flat, leads flat, all conversion rates healthy" — and profit still down? Then gross profit per deal or costs was missing from the tree.)

**The Five-Minute Hypothesis Rule.** If you haven't stated a hypothesis by minute 5 of a diagnostic, state your best guess immediately — and **label it as a guess**. Being early never kills you; being silent does. An early wrong hypothesis that gets tested beats a late right one, because the loop needs something to chew on.

**Problem isolation does the heavy lifting.** Roughly **75% of diagnostic time is problem definition** — isolating the cause by proving what the problem is *not*. Trinity River was solved mostly by elimination: not spend, not lead volume, not qualification, not closing — what remains is the answer. If you isolate the problem exceedingly well, usually the answer is extremely obvious. Corollary: **never propose fixes before isolation.** A fix pitched at minute 10 is a guess wearing a recommendation's clothes.

**Facts are friendly — but don't boil the ocean.** Data will not hurt you; drowning in it will. Gather only the minimally necessary data to prove or kill the current branch. Stop a branch at a logical dead end — once it is proved or disproved, it is done. If more data cannot change the conclusion, stop collecting it. Trinity River needed two queries, not a data-warehouse export.

**Issue trees vs. hypothesis trees — one line each:**

- **Issue tree** — answers "HOW could we achieve X?" Divergent; use it early, while the problem is still open and you need the full map.
- **Hypothesis tree** — answers "WHY do we believe Y?" Convergent; use it once you have a belief to test, decomposed into sub-hypotheses that each accept proof or disproof.

**A hypothesis is not a root cause — they sit on different rungs of the same ladder.** The loop above runs down six of them: **complaint → the break** (which number moved) **→ the segment** (which slice carries it) **→ the hypothesis** (why that slice behaves that way) **→ the root cause** (the one specific fixable thing inside it) **→ the trigger** (the change event that switched it on). Two consequences worth carrying into every diagnostic:

- **Every rung can hold a hypothesis; what changes is the evidence that settles it.** Rungs 1–2 are settled by arithmetic, rungs 3–4 by investigation, rung 5 by a timestamp. If you cannot say which of the three would settle your claim, you have not stated a claim yet.
- **MECE is a horizontal test.** It applies to siblings on one rung, never between a parent and its child. "Rep execution declined" and "the two reps hired in March were never trained" are not rivals — the second lives inside the first. Listing them side by side is the most common tree defect there is.

Segmentation is what moves you down a rung, and it does so at *every* level — not once at the start. Full treatment, including the branch generators, the two rounds of prioritization, the stop rules, and a student FAQ: **`hypothesis-to-root-cause.md`**.

*(Distilled from Victor Cheng's Case Interview Secrets and Ethan Rasiel's The McKinsey Way.)*

---

## Step 1 — Define the problem

Most weak diagnostic work is excellent analysis of the wrong question. Write the problem as a **problem** (a metric that moved, with numbers and dates) — never as an opportunity ("how do we grow?") or a pre-picked solution ("they need more leads").

**Not SMART:** "Trinity River isn't happy — how do we improve their results?" / "They need more volume — should they raise spend?"
**SMART:** "Trinity River's monthly profit after marketing spend fell from ~$235k to $135k over the last two months with spend unchanged at $15,000. Find the root cause and restore profit to the $235k baseline within 60 days, without increasing the marketing budget."

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

**Prioritize twice, and expect the first winner to be a segmentation rather than a hypothesis test.** Round 1 ranks branches before any evidence, on *could this explain the whole gap* × *how fast can I know* — and a cut usually wins, because it resolves several branches at once instead of one. Round 2 re-ranks after the cut, among only the hypotheses that survive inside the concentrated segment; several are now dead for free, and the survivors have new sizes. Round 1 is a guess, round 2 is a posterior, so never present round 1 as the plan of record. Two tie-breakers on top of the two questions: how often this is the answer *in this business* (a change event that timestamps to the inflection is a large boost), and what it costs to be wrong to skip it (compliance and data-lineage branches jump the queue on consequence, not likelihood).

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

**Query 1 — walk the funnel (baseline → last month):** spend $15,000 → $15,000 · GL 500 → 500 · NL 350 → 350 (70% → 70%; benchmark 50%) · **appts 70 → 40 (20% → 11%; benchmark 25%)** · contracts 14 → 8 (20% → 20%; benchmark 15%) · closed deals 10 → 6 (~71% → 75%; benchmark 70%). Exactly one stage broke. Prize: restore about four closed deals × $25,000 ≈ **+$100k/mo (~$1.2m/yr)**.

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

<!-- ===== hypothesis-to-root-cause.md ===== -->

# From Hypothesis to Root Cause

*The missing half of the method. `mckinsey-method.md` teaches the seven steps; `diagnostic-playbook.md` lists the hypotheses for each KPI. This file explains the part everybody trips on in between: **what a hypothesis actually is, how it differs from a root cause, when to segment, and how to decide what to test first.** Written for anyone running or sitting a case.*

---

## Why this document exists

Three questions come up in every session, and until now the answer lived in people's heads:

1. *"Cold callers are underperforming" and "the new cold callers were never trained" — which one is the hypothesis and which one is the root cause? Are they both hypotheses? Are they MECE?*
2. *I've built my tree. Now when — and why — do I segment?*
3. *I have six hypotheses. Why do we test them in this order and not another?*

They are the same question wearing three hats. Answering it needs one idea: **a diagnosis is a ladder, and every rung answers a different question with a different kind of evidence.**

---

## The one-page card

> **The ladder — climb down, one rung at a time**
>
> | # | Rung | The question it answers | What settles it |
> |---|---|---|---|
> | 0 | **Complaint** | What does the client feel? | Nothing — it's a feeling, not a claim |
> | 1 | **The break** | *Which number moved, from what to what?* | Arithmetic — walk the funnel |
> | 2 | **The segment** | *Which slice of the business is carrying it?* | Arithmetic — cut the broken KPI |
> | 3 | **The hypothesis** | *Why would that slice behave that way?* | Investigation — documents, lineage, records, recordings |
> | 4 | **The root cause** | *What exactly is broken, and who can fix it Monday?* | Investigation — narrowed until it names a thing |
> | 5 | **The trigger** | *When did it start, and what switched it on?* | A timestamp lined up against the inflection |
>
> **Segmentation moves you down a rung. Hypotheses tell you which cut to make next. You alternate until you can name a fix with an owner.**

---

## 1 · The ladder, rung by rung

### Rung 0 — the complaint

*"My ROI got worse." · "Your data sucks." · "Lead quality fell off a cliff."*

Not a hypothesis. Not a problem statement. It is the reason you were called. It usually contains at least one undefined word (*deals*, *ROI*, *quality*, *junk*) and one accusation. Your first job is to convert it into a number that moved — that's Step 1 of the method, and it is the whole of Q1 in a case.

### Rung 1 — the break

*"Net → Appointment fell from 20% to 11% while every other conversion held."*

This is **where in the funnel** the loss happens. You find it by walking every adjacent conversion before and after — not by theorizing. It is arithmetic, and arithmetic cannot be argued with, which is why it is the strongest thing you will say all day.

A break is not a cause. "Net → Appointment broke" tells you nothing about *why*; it tells you which half of the business to stop looking at. That is worth enormous amounts of time.

### Rung 2 — the segment

*"Leads first contacted within 5 minutes still book at 38%. Leads contacted after 30 minutes book at 9%. And the share contacted within 5 minutes fell from 80% to 20%."*

This is **where inside the business** the loss is concentrated. Still arithmetic — you are cutting the same broken KPI by a dimension the business actually operates on (channel, vendor, rep, piece, cohort, time bucket).

A segment is not a cause either. But it is the single highest-value move in the whole diagnostic, because one cut can kill several hypotheses at once. More on that in §4.

### Rung 3 — the hypothesis

*"The team is not contacting new leads fast enough."*

Now you are explaining **why** that segment behaves the way it does. This is the level the brainstorm question (Q3) is asking for. A rung-3 hypothesis is:

- **A mechanism, not a name.** "Contact coverage failed," not "Jen failed."
- **Falsifiable.** You can state, in advance, the evidence that would kill it.
- **MECE against its siblings.** It sits alongside four or five other explanations that together cover every way this stage could break (§3).

A rung-3 hypothesis is a *category of causes*, not a fix. "Contact coverage failed" could be a staffing problem, a routing problem, a queue problem, an hours-of-operation problem, or a vendor problem. You cannot act on it yet.

### Rung 4 — the root cause

*"The lead manager resigned ten weeks ago and was never backfilled, so calls now go out in end-of-day batches."*

The **one specific, fixable thing** inside the surviving branch. You are at rung 4 when the claim names something concrete — a person's absence, a setting, a version, a mapping, a rule, a workflow — and you can write a task with an owner and a date.

The move from rung 3 to rung 4 is *the same move* as rung 1 to rung 2: **you segment again, this time inside the branch.** More on that in §4.

### Rung 5 — the trigger

*"Week zero of the decline is the week the resignation took effect."*

The change event that switched the root cause on. It is not strictly necessary to be right — but a timestamp that lines up with a metric inflection is the fastest and cheapest confirmation available, and it is what stops the same failure from recurring. This is why `diagnostic-playbook.md` calls the missing change-event log the highest-leverage gap in the whole system: without it, rung 5 has to be reconstructed by hand from invoices, exports, tickets, proofs, and interviews.

---

## 2 · The three questions people actually ask

### "Which one is the hypothesis and which one is the root cause?"

Take the example directly. (Illustration only — not one of the library cases.)

| Claim | Rung | Why |
|---|---|---|
| "Deals are down and I think my cold callers have gotten lazy" | 0 · complaint | An undefined outcome and an accusation |
| "Gross → Net fell from 62% to 44%; every other conversion held" | 1 · break | A number that moved, found by arithmetic |
| "Four of the nine callers convert at 21% and carry ~40% of conversations; the other five are unchanged at 60%" | 2 · segment | The same KPI, cut by who does the work |
| **"Those callers aren't turning owner conversations into verified interest"** | **3 · hypothesis** | A mechanism. Testable. Not yet actionable |
| **"All four started within the last 90 days and never received the owner-verification training"** | **4 · root cause** | Names a thing. Someone can fix it this week |
| "The March hiring wave, after the trainer left in February" | 5 · trigger | A date and a record |

So: *"cold callers are performing badly"* is **rung 3**. *"the new cold callers were never trained"* is **rung 4**. They are not rivals — the second lives *inside* the first. Same branch, two depths.

### "Are they both hypotheses, then?"

**Yes.** Anything you believe and have not yet proved is a hypothesis, and you can hold one at every rung. Before you see the funnel, "I think the break is at Net → Appointment" is a hypothesis. Before you cut the data, "I think it's concentrated in one vendor" is a hypothesis.

What changes with the rung is not *whether* it's a hypothesis — it's **what kind of evidence settles it**:

> **Rungs 1–2 are settled by arithmetic. Rungs 3–4 are settled by investigation. Rung 5 is settled by a timestamp.**
>
> If you can't say which of those three would settle your claim, you haven't stated a claim yet.

That is the practical value of knowing your rung: it tells you what to go get.

### "So are they MECE with each other?"

No — and the question is a category error, which is worth saying out loud because it is the most common confusion in the room.

> **MECE is a horizontal test. You apply it to a set of siblings on one rung. It is never a test between a parent and its child.**

"Cold callers underperforming" and "new callers untrained" are parent and child. Asking whether they overlap is like asking whether *Texas* and *Dallas* are mutually exclusive. Of course they overlap — one is inside the other.

### The failure this creates: **layer mixing**

The real damage happens when rungs get mixed *among siblings*. A trainee lists:

> ~~offer economics · rep execution · the new rep who started in March · the market~~

Three of those are rung-3 branches; one is a rung-4 root cause that belongs *inside* rep execution. The list is no longer mutually exclusive, and worse, the specific item hijacks the conversation — everyone starts arguing about the new rep instead of testing the four branches.

**Two tells that you have mixed layers:**

1. One item is far more specific than the others.
2. One item names a **person, tool, vendor, version, or date** while the others name **categories**.

**The fix:** push the specific item down a rung. It isn't wrong — it's premature. Write it as a candidate *inside* its parent branch, and come back to it when the evidence gets there.

---

## 3 · Where the branches come from

A rung-3 list should never feel like a memorized set. It should feel *generated*, because it is. There are only two generators, and which one you use depends on what kind of alarm you have.

### Generator A — a conversion broke (a rate moved)

A conversion is one population turning into a smaller population. For that to happen, five things must be true. Ask them in order, in plain language:

| # | The question | The branch | Example failure |
|---|---|---|---|
| 1 | **Did the right thing arrive?** | **Input / fit** | Off-buy-box appointments, wrong-party phone numbers, suppressed records mailed |
| 2 | **Did we work it?** | **Coverage / capacity** | Too slow, too few attempts, shallow phone-position coverage, queue not staffed |
| 3 | **Did we work it well?** | **Execution / economics** | Offer formula too low, weak objection handling, wrong script |
| 4 | **Did we count it?** | **Measurement** | Stage definition changed, CRM migration, disposition mapping |
| 5 | **Did the other side change?** | **External** | Seller expectations, competing offers, market, regulation |

Five branches, always. They are MECE by construction: a conversion cannot fail for a reason outside "wrong input, no work, bad work, miscounted, or the world changed."

Run the **conclusiveness test** on it: if all five came back clean, could the rate still have dropped? No. That's what makes it collectively exhaustive.

### Generator B — a volume fell (a count dropped with rates intact)

Volume is not a conversion; it's a chain. Follow the record from intention to response:

**Planned → Eligible → Sent/Delivered → Reached → Responded**

Each arrow is a place volume disappears, and each has its own owner:

| Step | Volume vanishes because… |
|---|---|
| **Planned** | Spend, cadence, or selected-record volume fell |
| **Eligible** | Buy box, list source, exclusions, suppression, or a compliance hold shrank the usable audience |
| **Sent / Delivered** | Vendor config, carrier filtering, mail production, or a dialer failure |
| **Reached** | Wrong numbers, shallow phone-position coverage, returned mail, a broken response path |
| **Responded** | Creative, offer, saturation, or genuine market propensity |

Use the channel waterfalls in `case-library/README.md` to instantiate this for SMS, Cold Call, and Direct Mail.

### Which generator, and how to tell

> **If a rate moved, use Generator A. If a count fell but every rate held, use Generator B.**
>
> If a count fell *and* a rate moved, you have two problems. Quantify each, fix the larger, recompute the whole funnel, and let the residual pick the next branch (`diagnostic-playbook.md` §4.7).

---

## 4 · Segmentation — when, and why

This is the piece that most often feels like magic. It isn't.

> **Segmentation is not a hypothesis. It is the instrument that tells you which hypotheses are worth testing.**

### Segmentation does three different jobs

**1 · Segment to locate — *before* you theorize.**
You have an alarm and no belief yet. Cut the broken KPI by the dimensions the business runs on. You are not testing anything; you are finding out where the loss lives. This is cheap, uses data you already have, and — the important part — **one cut can kill several branches simultaneously.**

**2 · Segment to test — *after* you have a hypothesis.**
Now the cut *is* the experiment. A good hypothesis predicts a specific pattern: *"If the vendor's attempt depth is the cause, Gross → Net should differ by vendor and by highest phone position attempted — and should **not** differ by list source."* Run the cut. The pattern appears or it doesn't. State the prediction **before** you look, or you'll find a story in any table.

**3 · Segment to rule out — to protect the answer you already have.**
Cut the *other* way, deliberately looking for the thing that would embarrass you. If every rep shows the identical pattern, it is not the reps. If the decline is the same inside all three channels, channel is not causal. Ruling out is not wasted time; it is most of the time, and it is what makes a recommendation survive contact with the client.

### The loop: hypothesis and segmentation alternate

You do not build a tree and then test it. You do this:

```
alarm
  → cut  → the loss is concentrated over here
  → why? → 5 branches, and this cut already killed 2 of them
  → the surviving branch predicts a pattern
  → cut  → the loss is concentrated in this sub-slice
  → why? → 3 candidates inside the branch, and the cut killed 2
  → the survivor names a thing → root cause
  → find its date → trigger
```

**Every cut converts a "why?" question into a "where?" question, and every "where?" answer kills some "why"s for free.** That is the entire engine.

This is also the answer to *"when do I segment once I have my hypotheses?"* — **immediately, and again after every hypothesis.** Segmentation is not a phase that happens once between Q2 and Q3. It runs the whole way down the ladder.

### Segmentation gets you from rung 3 to rung 4, too

People think of segmentation as a rung-1→2 tool. It is equally the rung-3→4 tool. Take the cold-caller example all the way down:

| Step | Move | Result |
|---|---|---|
| Branch survives | "Caller execution is the problem" (rung 3) | Not actionable yet |
| Cut by caller | 4 of 9 callers are far below the rest | Narrower, still not a cause |
| Cut those 4 by tenure | All four started within the last 90 days | Now a pattern with a shape |
| Check the onboarding record | No owner-verification training was delivered | **Root cause (rung 4)** |
| Find the date | The March hiring wave; the trainer left in February | **Trigger (rung 5)** |

Notice what the tenure cut did for free: it killed *"the script changed"* and *"compensation changed"* without testing either, because those would have hit tenured callers too.

### Which dimension do I cut by first?

Two rules. Use the first when you have live competing hypotheses; use the second when you don't yet.

**Rule 1 — cut where your hypotheses disagree.** A cut is only useful if your candidate causes predict *different* patterns under it. If two hypotheses predict the same table, that cut cannot separate them — pick another. The best first cut is the one your live hypotheses disagree about most.

**Rule 2 — the standard order for this business.** When you have no strong prior, cut in this order. It is not arbitrary; each level is inside the one above it.

| Order | Cut | Why here |
|---|---|---|
| 1 | **Marketing channel** (SMS · Cold Call · Direct Mail) | Every operating unit lives inside a channel, and a blended number can hide one dead one. **Mandatory, even when it turns out not to be causal** — ruling it out is a result |
| 2 | **Time** | An inflection date is a free hypothesis filter: only causes that existed on that date survive |
| 3 | **Operating unit** inside the channel (vendor · caller · setter · rep · piece · campaign) | Separates a person/vendor problem from a system problem |
| 4 | **Population attribute** (buy-box fit · ARV band · county · skiptrace age · list source) | Separates "wrong records arrived" from "the work was bad" |
| 5 | **Process state** (speed bucket · attempt count · scheduled vs. attended · fallout reason) | Locates the exact step inside the stage |

### The one cut that separates people from systems

Worth memorizing on its own, because it resolves the most common false accusation in this business:

> **If every operator shows the same pattern, it is the system they share** — the tool, the formula, the data, the workflow, the version.
> **If one operator differs, it is that operator** — or the vendor, cohort, or file that only they touch.

Owners blame people; the data usually points at a shared setting. Run this cut before you agree to retrain anyone.

### When are recordings, interviews, and shadowing the right test?

**Second, never first.** Segmented data establishes *how widespread* something is; a recording explains *why* a cohort moved. Sample from the abnormal cohort **and a healthy control**, after the cut has told you which cohort to sample. A convenient random handful proves nothing about prevalence and will happily confirm whatever you already believed.

---

## 5 · Prioritization — why we test in that order

> **The sort rule, in one line: rank by *how much of the gap could this explain?* × *how fast can I know?* — then let change-log evidence and discriminating power break ties.**

### The four questions, in the order they bind

| # | Question | What it does | Cost |
|---|---|---|---|
| 1 | **Could this explain the whole gap?** | Screens out branches too small to be the answer. A cause that can only explain 10% of a 50% drop is not the main story | Free — back of envelope |
| 2 | **How fast can I know?** | Segmentations resolve today with data you have. Vendor audits take a week. Market studies take longer | Free to estimate |
| 3 | **How often is this the answer here?** | Prior likelihood, from `diagnostic-playbook.md` and the case library. A change event that timestamps to the inflection is a massive boost | Free |
| 4 | **What if I'm wrong to skip it?** | Compliance holds, suppression-tag leakage, and data-lineage defects jump the queue not because they're likely but because being wrong is expensive | Judgment |

Questions 1 and 2 do most of the sorting. Question 3 breaks ties. Question 4 overrides everything when the downside is regulatory or reputational.

### Prioritization happens twice — this is the part that's usually skipped

**Round 1 — before any evidence.** You rank the five branches on size × speed. Almost always, the winner of round 1 is **not a hypothesis test at all — it's a segmentation**, because a cut scores maximum on speed and re-ranks everything below it. That is why "what would you test first?" is nearly always answered with a cut.

**Round 2 — after the cut.** The loss is now concentrated somewhere. Re-rank, but only among hypotheses that survive *inside that segment*. Several branches are now dead for free, and the ones that remain have new sizes: a branch that could only have explained 10% before might explain 100% of the concentrated loss.

> **Round 1 is a guess. Round 2 is a posterior. Never present round 1 as your plan of record — present it as "here's the cut that will tell us what to test."**

### A worked sort

Alarm: **Net → Appointment fell 20% → 11%; every other conversion held.**

**Round 1:**

| Rank | Candidate | Could explain the gap? | How fast? | Verdict |
|---|---|---|---|---|
| 1 | **Cut by channel, then by first-contact-time bucket** | n/a — it's a cut, and it discriminates between coverage, execution, and external | Same day, existing CRM timestamps | **Do this first** |
| 2 | Coverage — leads not worked fast/often enough | Yes, fully | Answered by the cut above | Queued behind the cut |
| 3 | Input — the incremental leads aren't really net leads | Yes, fully | One buy-box-fit cut | Cheap; run alongside |
| 4 | Execution — booking conversation got worse | Yes, but only if it hit everyone | Needs recordings — slow | Only if the cut points here |
| 5 | External — sellers changed | Yes, but should hit all buckets equally | Market data, slow | Rule out last |
| 6 | Measurement — appointments not recorded | Rarely this large | One definition check | Cheap rule-out |

**Round 2, after the cut:** fast-contact leads still book at 38% (above the ≥35% healthy line); slow-contact leads book at 9%; the slow bucket grew from 20% to 80% of volume.

- **Execution dies** — the conversation still works when it happens.
- **External dies with it** — if sellers had changed, the fast bucket would have fallen too.
- **Input weakens** — the same leads convert fine when reached quickly.
- **Coverage is now the only branch that can carry the whole gap**, and it went from rank 2 to the only thing on the list.

One cut, four branches resolved. That is what "why we sorted it this way" means in practice: **you don't sort to find the answer, you sort to find the cheapest question whose answer re-sorts everything else.**

---

## 6 · Read the flat lines

The numbers that *didn't* move do most of the work, and beginners skip right past them.

When a client doubles the appointments they attend and the number of signed contracts lands on **exactly** its old value, that is not "no change." It is the loudest fact in the room: the added appointments produced **zero** contracts. A general decline in rep skill would have moved contracts a little, up or down. Exactly-flat says the added population is categorically different from the original one — and that points straight at Input, before any exhibit is opened.

Three flat-line reads worth having ready:

- **A stage held at its old absolute number while its input grew** → the added input is the problem, not the work.
- **Every conversion held while every count fell proportionally** → nothing broke inside the funnel; the problem is upstream volume (Generator B).
- **A blended rate held while its parts diverged** → the mix changed, not the performance. A blend can sit exactly on benchmark while one half is excellent and the other is broken. Never accept a blended number as evidence that a segment is healthy.

---

## 7 · Stop rules

**When is a hypothesis dead?** When a piece of evidence that the hypothesis *predicted* failed to appear. Dead branches are results — say them out loud. "It isn't the reps, and here's how I know" is worth as much as naming the cause, and it's most of what protects the recommendation.

**When is a root cause deep enough?** All three must be true:

1. **Actionable** — you can name an owner and a first task.
2. **Sufficient** — applied on paper to the funnel, it closes the gap. If it closes only part, you have a second issue; branch from the residual KPI.
3. **Preventable** — fixing it, plus a control, would stop the recurrence.

**Can you go too deep?** Yes. "No backfill policy" → "no workforce planning" → "the company grew too fast" are all true and none of them restores $100k this month. Stop at the layer the client can act on. Anything deeper is a **prevention item** for the recommendation, not the root cause.

**When are you done?** When the counterfactual funnel — your fix applied to the actual before/after numbers — reproduces the baseline. If it doesn't, you are not done, no matter how confident the story sounds.

---

## 8 · The full worked example — Trinity River

The running case from `mckinsey-method.md`, climbed all the way down. Baseline: 500 gross leads → 350 net (70%) → 70 appointments (20%) → 14 contracts (20%) → ~10 closings (~71%), at **$25,000** gross profit per closed deal and $15,000/month spend.

| Rung | Claim | Evidence that settled it |
|---|---|---|
| **0 · Complaint** | "Profit is down and nobody can tell me why" | — ($235k → $185k → $135k/mo) |
| **1 · Break** | Net → Appointment fell 20% → 11%; appointments 70 → 40. Spend, gross leads, net leads, and every other conversion flat | **Arithmetic.** One funnel walk, one query |
| **2 · Segment** | Leads contacted <5 min book at 38%; >30 min book at 9%. Share contacted <5 min fell 80% → 20% | **Arithmetic.** One cut by first-contact-time bucket |
| **3 · Hypothesis** | Of Input / Coverage / Execution / Measurement / External — only **Coverage** survives. Execution and External die because the fast bucket still converts above the ≥35% healthy line; Input dies because they're the same leads | **The cut itself**, plus the healthy control |
| **4 · Root cause** | The lead manager resigned and was never backfilled; first contact now happens in end-of-day batches | Roster + queue timestamps. Names a role, a gap, and a behavior |
| **5 · Trigger** | The decline starts the week the resignation took effect, ten weeks ago | A date against the inflection |

**Sufficiency check:** restore <5-minute contact → 70 appointments → 14 contracts → ~10 closings. Gap closes. **≈ +4 closed deals/month × $25,000 ≈ +$100k/mo (~$1.2m/yr).**

**Where a weaker answer stops:**

- **"Speed to lead is bad."** That's rung 3 dressed up as an answer. It names no owner and no task.
- **"Jen isn't performing."** Layer mixing — a person named among categories, and factually wrong: Jen left.
- **"They need a workforce-planning process."** Too deep. True, but it doesn't recover this month's $100k. Put it in the recommendation as the prevention control.

---

## 9 · Stuck? Find your rung

| If you catch yourself saying… | You're missing | Do this next |
|---|---|---|
| "Something's wrong with their funnel" | Rung 1 | Compute every adjacent conversion before/after. Usually exactly one moved |
| "It could be a hundred things" | Rung 2 | Cut the broken KPI by channel. The list shrinks by two-thirds in one move |
| "I think it's the reps" | Evidence | Ask: what cut would prove it *isn't* the reps? Run that cut |
| "I found the segment but I don't know why" | Rung 3 | Run the five questions: right input? worked it? worked it well? counted it? other side changed? |
| "I have a branch but no fix" | Rung 4 | Segment *inside* the branch until you can name an owner and a Monday task |
| "I'm sure of the cause but can't prove it" | Rung 5 | Find the date. Line the inflection up against a change event |
| "My fix doesn't close the whole gap" | A second issue | Recompute the entire funnel. The residual KPI names the next branch |
| "I have six hypotheses and no idea where to start" | The sort | Rank by *could this explain the whole gap* × *how fast can I know*. The winner is usually a cut, not a test |

---

## 10 · How this maps to the case interview

| Case question | Rungs in play | What the interviewer is scoring |
|---|---|---|
| **Opening prompt** | 0 | Do you convert a complaint into a measurable problem, or accept the client's accusation? |
| **Q1 · Structure** | 0 → 1 | Do you define the ambiguous words and name the evidence you need *before* theorizing? |
| **Q2 · Quant** | 1 | Do you walk every adjacent conversion, isolate the one that moved, and price it in **closings**? |
| **Q3 · Brainstorm** | 3, then 2, then 4 | Do you generate MECE branches at one rung, then pick the **cut** that separates them — rather than defending a favorite? |
| **Q4 · Synthesis** | 4 + 5 | Do you lead with the fix, name the trigger, and prove the branches you eliminated? |

The most common scoring failure in Q3 is not a missing hypothesis. It is **answering "what would you test first?" with a hypothesis instead of a cut.**

---

## FAQ

**Q. "The cold callers are underperforming" — hypothesis or root cause?**
Hypothesis, rung 3. It's the *Execution* branch of the five-branch tree. It's testable, but you can't act on it: there is no task called "fix underperformance."

**Q. And "the new cold callers were never trained"?**
Root cause, rung 4. It sits *inside* the hypothesis above. It names who, what, and what to do about it.

**Q. Are they both hypotheses?**
Yes. Anything unproved is a hypothesis. The rung doesn't change whether it's a hypothesis — it changes what evidence settles it. Rungs 1–2: arithmetic. Rungs 3–4: investigation. Rung 5: a timestamp.

**Q. Are they MECE with each other?**
The question doesn't apply. MECE is a test among **siblings on one rung**, never between a parent and its child. Asking whether they overlap is like asking whether Texas and Dallas are mutually exclusive.

**Q. My brainstorm list has "offer economics, rep execution, the new rep who started in March, and the market." What's wrong?**
Layer mixing. Three branches and one root cause standing among them. Push the specific one down inside *rep execution* and keep the siblings at the same altitude. The tell: one item names a person or a date while the others name categories.

**Q. How do I know I've gone deep enough?**
Three tests: **actionable** (you can name an owner and a first task), **sufficient** (applied on paper, it closes the whole gap), **preventable** (fixing it plus a control stops recurrence). Miss any one and you're not at rung 4 yet.

**Q. Can I go too deep?**
Yes. "No backfill policy" → "no workforce planning" → "grew too fast." All true, none recovers this month's money. Stop where the client can act; put the deeper layer in the recommendation as a prevention control.

**Q. When exactly do I segment — before or after I have hypotheses?**
Both, and repeatedly. Before, to find where the loss lives (you need almost no theory for this). After, because a hypothesis predicts a pattern and the cut is how you check it. Segmentation isn't a phase — it's the rung-change mechanism.

**Q. Why is "what do you test first?" almost always answered with a segmentation?**
Because a cut is the cheapest question with the biggest re-ranking effect. Testing one hypothesis resolves one branch. A good cut resolves several at once and re-prioritizes what's left. Speed × discriminating power beats confidence in a favorite theory.

**Q. Which dimension do I cut by first?**
Cut where your live hypotheses **disagree** — a cut that produces the same table under two hypotheses can't separate them. Absent a strong prior, use the house order: channel → time → operating unit → population attribute → process state.

**Q. The exhibit shows every rep with the same pattern. What does that tell me?**
That it isn't the reps. Identical behavior across independent operators points at the thing they **share**: the tool, the formula, the data version, the workflow. One operator differing points at that operator, their vendor, or their file.

**Q. My hypotheses feel like a random list. How do I know I'm not missing one?**
Stop listing and start generating. A rate moved → five questions (right input? worked it? worked it well? counted it? other side changed?). A count fell → the waterfall (planned → eligible → delivered → reached → responded). Then run the conclusiveness test: if all branches came back clean, could the number still have moved? If yes, you're missing a branch.

**Q. What if the segmentation shows nothing — every slice moved the same amount?**
That's a real result, not a failed test. A uniform decline points at something *shared by everything*: a company-wide setting, a definition change, a shared vendor, or a genuine external shift. It also tells you to stop cutting on that dimension and cut on another.

**Q. What if I can't segment — the data doesn't exist?**
Say so explicitly, then use the cheapest proxy: a manual sample, a date-bounded comparison, or a reconstruction from invoices, exports, proofs, and tickets. Name the missing instrumentation as a finding in its own right — that is exactly how the change-event-log gap was identified.

**Q. When do I listen to call recordings?**
After the cut, never before. Segmented data establishes *how widespread* something is; recordings explain *why* a cohort moved. Sample the abnormal cohort **and** a healthy control, or you'll confirm whatever you already believed.

**Q. Two things broke at once. Does the ladder still work?**
Yes — you run it twice. Quantify each break, fix the larger on paper, recompute the **entire** funnel, and let the residual KPI select the next branch. Cases 08 and 09 are built to teach exactly this. The trap is stopping at the first true cause: true and sufficient are different claims.

**Q. The client already told me the cause. Do I still build the tree?**
Yes, and quickly. The client's explanation becomes one branch, not the conclusion — treat it as the hypothesis with the highest prior, not as a finding. Half of these engagements end with the client's stated cause being real but not sufficient, or real but downstream of the actual trigger.

**Q. Isn't this just the Five Whys?**
Same instinct, more discipline. Five Whys walks a single chain and has no test for whether you've missed a branch or gone too deep. The ladder pairs each "why" with an explicit MECE branch set, a cut that discriminates, and a sufficiency check against the funnel.

---

*Companion files: `mckinsey-method.md` (the seven steps), `diagnostic-playbook.md` (hypotheses, tests, and actions per KPI), `gnacc-reference.md` (every benchmark — never invent a rate), `case-library/README.md` (the channel waterfalls and how cases are run).*

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
- Also read **"The engine underneath — four tools in a loop"** in the Method Reference (`mckinsey-method.html`) — the hypothesis-first mindset the live case runs on.
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

## 3. The case library

The library spans the diagnostic method through seven standard single-issue cases and two advanced multi-issue cases. Each follows the same interviewer-led structure: prompt → structure → exhibit/quant → brainstorm → synthesis + rubric + facilitator notes.

| # | Fictional client | Format | Access |
|---|---|---|---|
| 01 | Lone Star Home Buyers | Standard · single issue | 🔒 Encrypted casefile |
| 02 | Cedar Fork Property Group | Standard · single issue | 🔒 Encrypted casefile |
| 03 | Prairie Gate Investments | Standard · single issue | 🔒 Encrypted casefile |
| 04 | Red Oak Home Offers | Standard · single issue | 🔒 Encrypted casefile |
| 05 | Panther City Acquisitions | Standard · single issue | 🔒 Encrypted casefile |
| 06 | North Elm Property Buyers | Standard · single issue | 🔒 Encrypted casefile |
| 07 | Waxahachie Home Solutions | Standard · single issue | 🔒 Encrypted casefile |
| 08 | Cross Timbers Property Partners | Advanced · two issues | 🔒 Encrypted casefile |
| 09 | Trinity Bend Homebuyers | Advanced · three issues | 🔒 Encrypted casefile |

**Public-spoiler rule:** this program overview intentionally omits case-specific KPI values, root causes, exhibits, and answers. Facilitators access those only inside the password-protected Interview Casefile.

In the advanced cases, the facilitator releases evidence sequentially, applies a partial fix, and asks **"Are we done?"** The remaining KPI gap determines the next hypothesis; the final synthesis must sequence every required fix.

Source material for new cases: Knowledge Gap sessions (the 367 that informed the diagnostic pillars), real anonymized client inflections, and the red-flag items already codified in `clientDiagnosticFlow.ts` — every `redFlag` in that file is a case seed.

## 4. Design principles (why it's built this way)

1. **Real numbers everywhere.** Cases use the CG stage benchmarks (50/25/15/70), the preset's baseline funnel counts, and a confirmed typical-client gross-profit range of $20,000–$30,000 per closed deal (case midpoint: $25,000).
2. **The tree is pre-built; judgment is what's trained.** The client-diagnostic tool already holds the hypothesis tree. The skill being taught is steps 3–7: prioritizing, testing cheaply (segmentation first, change-log correlation first), and synthesizing SCR-style.
3. **Interviewer-led, not candidate-led.** Matches McKinsey's own format and keeps a 45-min time box; the facilitator can rescue a stuck room with the scripted coaching prompts.
4. **Every diagnosis feeds the playbook.** The memo template's last section is literally "playbook entry proposed." Training and knowledge management are the same loop.
5. **Channel first, then operator.** Every case segments the broken KPI by SMS, Cold Call, and Direct Mail before recommending a broad fix. Once a channel is isolated, the next cut matches its mechanics: state/carrier/vendor/campaign for SMS; call center/caller/attempt depth/phone position for Cold Call; piece type/printed response number/vendor/drop date for Direct Mail. For Cold Call, segment first and then listen to a few recordings from the abnormal cohort plus a healthy control; check identity verification, script, objections, dispositions, and premature disqualification.
6. **Audit our own fulfillment.** A client symptom can originate inside 8020REI. Reconcile the approved buy box to the import and final export, verify `SystemDMA` / `DoNotSend` and client-specific exclusions, compare source and row counts, and inspect a targeted record sample. For contactability declines, segment by skiptrace date/age—a file last refreshed 12 months ago can decay gradually.

## 5. Open items

- [ ] One-page SCR memo template (Google Doc)
- [ ] Decide cohort composition (CS only, or CS + sales + data?)
- [ ] Change-event logging on real clients (buy box edits, qualification/routing changes, creative changes) — the diagnostic shortcut taught across the cases only works in production if changes are timestamped somewhere queryable
- [ ] Optional later: AI case partner — an agent prompt that plays interviewer for solo practice (cheap once cases are written, since the interviewer guide is the prompt)

---

<!-- ===== case-library/README.md ===== -->

# Case Library — how to run and author cases

Wholesale-REI case interviews in the McKinsey interviewer-led format, used as the live-session core of the training program (see `../training-program.md`).

## Running a case (facilitator)

- **Format:** interviewer-led. You control direction and provide data only when asked — the candidate must ask for exhibits and segmentations, not receive them upfront.
- **Drip-feed background:** answer only the specific item the candidate asks for from the case's "If asked" block — never read the block wholesale, even when the candidate's question is broad.
- **Time box:** 45–60 min. Participants work in pairs (one leads, one seconds); rotate at each question.
- **Score** with the rubric in each case file (Structure / Quant / Insight / Synthesis / Coachability, 1–5).
- **Coach, don't rescue:** each case file has scripted coaching prompts for stuck candidates. Use them verbatim before improvising.
- **Debrief mapping** (do this every time): prompt = Step 1 (define) · Q1 = Step 2 (structure) · choosing what to test first = Step 3 (prioritize) · asking for exhibits = Step 4 (plan) · the math = Step 5 (analyze) · Q4 = Steps 6–7 (synthesize & recommend).

## Authoring a new case

Every case follows the same skeleton (see `case-01-lone-star.md` as the model):

1. **Opening prompt** — fictional client, one vague and realistic complaint, and one suspected culprit in the owner's voice. Do **not** include counts, rates, spend, stage-by-stage facts, or root-cause clues. The candidate must clarify the language and request the evidence; put the numeric funnel in Exhibit 1.
2. **Q1 — Structure**: define the client's ambiguous terms, state what evidence is needed, then build the funnel-first issue tree across the three diagnostic pillars + market. Include a coaching prompt that advances discovery without leaking Exhibit 1.
3. **Q2 — Quant exhibit**: before/after funnel table. A standard case has exactly **one** stage-conversion break and everything else stays stable. A case explicitly labeled **advanced** may contain two or three declared issues; its exhibits must let the candidate isolate them sequentially and show why correcting only one leaves a measurable residual gap. Candidate must isolate the pattern and size the $ exposure.
4. **Q3 — Brainstorm**: MECE hypothesis set for the alarm, then "what do you test first?" The taught move: **segment before you theorize** + **check the change log**. A standard Exhibit 2 confirms one hypothesis; an advanced case uses sequential Exhibits 2A/2B/2C with a partial-fix calculation after each. Three requirements, all enforced by `scripts/audit-cases.mjs`:
   - Label the brainstorm list as **hypotheses that are not yet root causes** (the phrase "Expected root-cause hypotheses" is banned — it conflates the two rungs the question is trying to separate).
   - Prefix each bullet with the generator branch it comes from, so the set reads as generated rather than memorized: **Input · Coverage · Execution · Measurement · External** for a broken conversion, or **Planned · Eligible · Delivered · Reached · Responded** for a volume loss.
   - Include a **Why this order** coach block before the exhibit, giving the round-1 (pre-evidence) and round-2 (post-cut) ranking and *why that particular cut discriminates*.
5. **Q4 — Synthesis**: two-minute elevator answer, SCR, recommendation first, with a risk and a monitoring metric.
6. **Rubric + facilitator notes** — including a one-line issue summary, the exact KPI that triggered the alarm, and which real red flag (from `../gnacc-reference.md` diagnostic table) the case dramatizes.
7. **Client context** — a `## Client context (coach — answer only when asked)` section between the opening prompt and Q1: a table of stable background (client profile, named team roster with headcount, marketing channels, tools & vendors, 8020REI engagement). The facilitator answers only the specific item asked. It must contain **no change events, dates of changes, exhibit content, or root-cause clues** — anything that changed belongs in Exhibit 2, not here. Roster names/labels must match whatever the exhibits use (for example, "Rep A / Rep B").
8. **Hypothesis ladder** — a `## Hypothesis ladder (coach — the layers behind this case)` section after the client context: a six-row table laying the case out rung by rung (**complaint · break · segment · hypothesis · root cause · trigger**), plus *the cut that does the work*, *what that cut kills for free*, and a *layer-mixing trap to watch for*. This is the coach's prep card and the answer to "why is this the root cause and that only a hypothesis?" It is coach-only and never shared. Definitions and stop rules live in `../hypothesis-to-root-cause.md`; keep the case card concrete rather than restating the theory.

**Rules of the house style:**
- Use real benchmarks from `../gnacc-reference.md`; the math must check out exactly (recompute every rate).
- Do not volunteer evidence in the opening, the Q1 ask, or the first Q1 re-router. When the candidate names the matched-period funnel data needed, hand over Exhibit 1.
- If the prompt says a metric is unchanged, keep the before/after exhibit values identical. Use **$25,000 gross profit per closed deal** for case sizing (typical range: $20,000–$30,000, or roughly 10%–15% of property value) unless the case provides a client-specific figure.
- Place the cause at the stage where the failure actually happens: no seller signature = **Appointment → Contract**; a signed contract that cannot monetize = **Contract → Close**; stable closings with lower gross profit per deal = **unit economics**, not a GNACC conversion break.
- The library is wholesale-first. If a case uses fix-and-flip or wholetail, make the acquisition close, rehab, listing, final resale, and revenue milestones explicit; do not default to a buyer-list/dispo diagnosis.
- Use one engineered root cause in a standard case. An advanced case may declare exactly two or three independent issues, but must expose them hypothesis by hypothesis: the first fix produces a partial recovery, the residual KPI points to the next test, and the final recommendation sequences every required fix. Do not hide a grab bag of causes behind one blended exhibit.
- Every case must contain a `**Channel check:**`. Segment the broken KPI by marketing channel first; if a single channel is already isolated, segment by that channel's operating unit. If channel is not causal, the exhibit must explicitly rule it out.
- Test 8020REI's own fulfillment output as well as the client's execution. Reconcile the approved buy box to the imported criteria and final export; count excluded-tag leakage (`SystemDMA`, `DoNotSend`, and any client-specific suppression tags); compare source totals, row counts, and a record sample before release. A manual export is a control point, not proof of correctness.
- Keep Reverse BuyBox and BuyBox IQ recommendations separate from the active, CSM-confirmed BuyBox. A written volume request does not bypass that release gate; outside-BuyBox records require a documented, CSM-approved test cohort or BuyBox revision.
- Fictional client names, realistic geography (DFW area so far).
- Every red flag in `clientDiagnosticFlow.ts` is a candidate case seed.

**Casefile role-card convention:** the renderer turns the opening prompt, each `**Ask:**` line, Exhibit 1, and Exhibit 2 into blue student-share cards. Expected answers, coaching prompts, reveals, model syntheses, rubrics, facilitator notes, and the `## Client context` and `## Hypothesis ladder` sections become amber coach-only cards. Keep those labels and headings intact so the generated cards remain screenshot-safe.

**Diagnostic vocabulary:** cases use one shared ladder — **complaint → break → segment → hypothesis → root cause → trigger**. A *hypothesis* is a mechanism that could explain the segment; a *root cause* is the specific fixable thing inside it, narrowed until you can name an owner and a first task. MECE is tested among siblings on one rung, never between a parent and its child. Full treatment, generators, prioritization rules, and the student FAQ: `../hypothesis-to-root-cause.md`.

**Glossary tooltip convention:** the renderer automatically wraps canonical domain terms — gross lead(s), net lead(s), lead(s), lead manager(s), acquisition rep(s), dispo manager, admin, appointment(s), assignment, wholesale — in hover tooltips (dotted underline; definitions live in `scripts/render-casefile.mjs` and mirror `../glossary.md`). Use those exact spellings in case files so the terms get tooltipped; add new terms to the renderer's list, not ad hoc.

## Required marketing-channel lens

A blended GNACC result can hide one broken marketing channel—or one vendor, caller, carrier, or mail piece inside that channel. Apply this cut before debating team-wide fixes:

| Marketing channel | Extend the funnel upstream | First within-channel segmentations |
|---|---|---|
| **SMS** | Selected records → Sent → Delivered → Response/Gross Lead | Jurisdiction, carrier, messaging vendor, registered campaign/sender, message version, delivery/error code, opt-out cohort |
| **Cold Call** | Selected records → Phone positions supplied → Positions attempted → Live answer → Correct owner → Interest/Net Lead | Call-center vendor, caller/team member, attempt count, highest phone position attempted, disposition, time/day, targeted call-recording QA |
| **Direct Mail** | Selected records → Pieces mailed → Delivered/returned → Working response path → Response/Gross Lead | Piece type (for example, Check Letter vs. Postcard), printed phone/tracking number or QR/URL, mail vendor, drop date, list/exposure cohort, offer |

For SMS, keep **legislation/regulation**, **carrier filtering/policy**, and **vendor configuration** as separate hypotheses. Do not teach a specific legal or carrier rule until its jurisdiction, effective date, and current official source have been verified. Carrier restrictions are not legislation.

For Cold Call, **segment before listening**. Select a small sample from the abnormal vendor/caller/disposition cohort plus a healthy control, then check owner-identity verification, script adherence, objection handling, disposition accuracy, and premature disqualification. A few recordings can explain *why* a segmented KPI moved; a convenient random handful cannot establish the prevalence of a problem.

For data fulfillment, compare what the client approved with what 8020REI actually delivered. Inspect buy-box version and field mapping, import/export lineage, exclusion-tag logic, source and row-count reconciliations, and a targeted record sample. When skiptrace performance declines, cohort contactability by **skiptrace date/age** before assuming the list or caller is bad; a file last refreshed 12 months ago can deteriorate gradually rather than fail on one obvious date.

## Case roster — spoiler-safe public view

The public roster identifies the fictional client and case format only. **KPI values, engineered root causes, exhibits, answers, rubrics, and facilitator notes stay inside the encrypted Interview Casefile.** Do not add case-specific diagnostics to this page or the public document bundle.

| # | Fictional client | Format | Access |
|---|---|---|---|
| 01 | Lone Star Home Buyers | Standard · single issue | 🔒 Encrypted casefile |
| 02 | Cedar Fork Property Group | Standard · single issue | 🔒 Encrypted casefile |
| 03 | Prairie Gate Investments | Standard · single issue | 🔒 Encrypted casefile |
| 04 | Red Oak Home Offers | Standard · single issue | 🔒 Encrypted casefile |
| 05 | Panther City Acquisitions | Standard · single issue | 🔒 Encrypted casefile |
| 06 | North Elm Property Buyers | Standard · single issue | 🔒 Encrypted casefile |
| 07 | Waxahachie Home Solutions | Standard · single issue | 🔒 Encrypted casefile |
| 08 | Cross Timbers Property Partners | Advanced · two issues | 🔒 Encrypted casefile |
| 09 | Trinity Bend Homebuyers | Advanced · three issues | 🔒 Encrypted casefile |

**Rendering & access:** all nine cases live in `interview-cases.html`, the password-protected Interview Casefile for facilitators. The individual case `.md` files are the private source of truth and are **not** copied to the public site or downloads page.

## Diagnostic coverage — not an answer key

Across the library, participants practice the following diagnostic domains. The public view deliberately does not map a domain, KPI, or confirmed cause to a particular case.

| Domain | Skills practiced |
|---|---|
| GNACC stage logic | Distinguish a volume loss from Gross → Net, Net → Appointment, Appointment → Contract, and Contract → Close conversion failures |
| Marketing channels | Cut the alarm by SMS, Cold Call, and Direct Mail before recommending a blended fix |
| Channel operations | Segment by jurisdiction/carrier/vendor, caller/attempt/phone position, or mail piece/vendor/response path as appropriate |
| 8020REI fulfillment | Reconcile approved buy box → import → exclusions → dedupe → final export and inspect targeted records |
| Sales and dispo operations | Test capacity, handoffs, offer execution, follow-up, buyer depth, and post-signature fallout at the correct stage |
| Advanced sequencing | Apply a partial fix, recompute the full funnel, and let the residual KPI select the next hypothesis |

The case-specific mapping of these domains, alarm KPIs, exhibits, and root causes is facilitator-only.

Run `node scripts/audit-cases.mjs` after substantive edits. Rebuild the encrypted page with `node scripts/rebuild-casefile.mjs`; it reads the existing casefile password from standard input, stores no password, and verifies the encrypted round trip.

---

<!-- ===== diagnostic-playbook.md ===== -->

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

### What rung the §4 tables live on — and why the "Hypothesis" column is not the answer

Every entry in the §4 hypothesis tables is a **rung-3 branch**: a mechanism that could explain the deviation, paired with the cut that would confirm or kill it. It is deliberately *not* a root cause. Compare:

| Rung | Example | Can you act on it? |
|---|---|---|
| 3 · Hypothesis (what a §4 row gives you) | "Correct-owner contactability declined" | No — it names a category, not a thing |
| 4 · Root cause (what the diagnostic must produce) | "The vendor's dialer mapping loads three of the fifteen supplied phone fields" | Yes — it has an owner and a first task |

The **Test / evidence** column moves you from rung 3 to rung 4, and it does so by segmenting *inside* the branch. The **If confirmed → action** column already assumes you got there: you cannot execute "correct the vendor SOW" until the evidence has named which rule, in which document, changed by whom. A diagnostic that stops at the Hypothesis column has produced a category, not a recommendation.

Two rules follow, and they explain the ordering used throughout §4:

1. **Prioritize twice.** Rank the branches before any evidence on *could this explain the whole gap* × *how fast can I know* — which is why every table's first row is a segmentation, not a theory. Then re-rank after the cut, among only the branches that survive inside the concentrated segment. The first ranking is a guess; the second is a posterior.
2. **Pick the cut where the live branches disagree.** A segmentation that produces the same table under two competing hypotheses cannot separate them. Channel comes first everywhere in §4 because almost every branch predicts a different channel pattern — and because a blended KPI can sit exactly on benchmark while one channel inside it is broken.

Vocabulary, the branch generators, the stop rules, and a student FAQ: `hypothesis-to-root-cause.md`.

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

### 3.1 8020REI targeting control model

Keep four layers distinct when diagnosing a targeting complaint:

1. **Feedback Loop evidence** — accurate lead, appointment, closed-deal, gross-profit, and exit-strategy outcomes supplied by the client.
2. **Reverse BuyBox / BuyBox IQ recommendations** — proposals generated from the client's historical successes and relevant market evidence.
3. **Active / approved BuyBox** — the criteria mutually confirmed and saved by the client and CSM after considering the client's exit strategy, buyer demand or capital/rehab capacity, and operating constraints.
4. **Fulfillment** — 8020REI applies that active version to selection, exclusions, dedupe, and export.

A recommendation does not silently change the active BuyBox, and a written request for more volume does not bypass the release gate. Outside-BuyBox opportunities, including high-Likely-Deal-Score records, belong in an explicitly documented, CSM-approved test cohort or approved BuyBox revision—not blended into core volume.

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
| 4 | Net Leads are outside the active buy box or routed to the wrong team | Segment by active-buy-box fit, imported buy-box version, routing rule, county, property type, and price band; compare on-box and off-box booking rates | Correct the fulfillment/import or routing defect; hard-stop or reroute **unapproved** off-box leads, while keeping any CSM-approved test cohort tagged and measured separately |
| 5 | Setter/caller discovery, objection handling, or disposition behavior weakened | Rate by setter/caller and disposition; after isolating the abnormal segment, compare targeted recordings with a healthy control | Coach the isolated behavior, correct scripts/dispositions, and re-audit a defined sample |

Key signature: **Net Leads rise or remain stable while attended Appointments do not**. If scheduled appointments are stable but attendance falls, the problem sits in confirmations, reminders, rescheduling, or no-show recovery—not lead qualification.

### 4.4 Appointment → Contract rate LOW (while appointments/visits are happening)

**Your hypothesis (the strong one):** the appointment is not producing a seller-acceptable offer — because the property does not meet acquisition criteria, the offer economics are wrong, or the rep fails to convert the seller. **Do not put "we signed it but could not find a cash buyer" here; that is a Contract → Close failure (§4.5).**

| # | Hypothesis | Test / evidence | If confirmed → action |
|---|---|---|---|
| 1 | Setter-to-acquisition handoff sends appointments outside the active buy box, so no viable offer is made | **Segment Appointment → Contract first** by active-buy-box fit, then by appointment setter and acquisition rep; compare visited-property characteristics with criteria; inspect required booking fields and routing changes | Reinstate required buy-box qualification before booking; hard-stop or reroute unapproved off-box leads; isolate any approved exploration cohort; QA by setter and rep |
| 2 | Offers going out but too low to convert | Offer-to-ARV / offer-to-ask spread vs. historical and vs. market comps | Revisit offer formula, MAO assumptions |
| 3 | Acquisition rep execution (rapport, negotiation, follow-up) | Segment by acquisition rep and channel; inspect follow-up cadence and lost-deal reasons; after isolating the abnormal cohort, compare a small matched recording sample with a healthy control | Coach the isolated behavior, enforce the follow-up process, and re-audit the same KPI segment |
| 4 | Competitive pressure in the market | Lost-deal reasons; market DOM / investor activity | Speed and offer positioning, not targeting |

Key signature: **appointments high + signed contracts low**. The seller has not signed yet, so tests belong on qualification/handoff, acquisition fit, offer economics, and rep conversion. If the appointment setter and the acquisition rep are different people, explicitly test that handoff.

### 4.5 Contract → Close rate LOW (signed contracts are not monetizing)

**Start with the stage fact:** the seller has already signed, but the contract did not become a closed deal. The table below is the **wholesale/assignment default**: buyer-list/dispo capacity is often the leading branch, but the fallout reasons determine which post-signature hypothesis deserves priority.

For a **fix-and-flip or wholetail** exit, replace the buyer-list branch with the actual operating milestones: acquisition financing/title → acquisition closing → rehab scope/budget/schedule → listing/resale → revenue. Acquisition closing is an intermediate milestone; under the canonical definition, the Closed Deal is the resale that produces revenue. Measure gross profit as sold price − purchase price − rehab costs and compare matured cohorts so unfinished projects are not mislabeled as fallout.

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
| 3. Prioritize | Two rounds. **Round 1**, before evidence: rank on *could this explain the whole gap* × *how fast can I know*, with prior likelihood (boosted hugely by change-log correlation) and cost-of-being-wrong as tie-breakers — the winner is almost always a segmentation, not a hypothesis test. **Round 2**, after the cut: re-rank only the branches surviving inside the concentrated segment. See §2. |
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

# Glossary — wholesale REI roles, KPIs & methodology terms

*For agents and new team members. Operating roles first, domain terms second, method terms third.*

## Wholesale-first investor operation roles & KPI ownership

Titles vary by company, and lean teams often combine several roles. In this section, **owns** means the role is accountable for keeping a metric defined, reviewing it on the stated rhythm, and leading the response when it moves. It does **not** mean that person is the only possible cause of the result.

Use the verified definitions and targets in `gnacc-reference.md`. A benchmark is a diagnostic reference, not an automatic individual quota.

### GNACC handoffs

| Funnel handoff | Primary operating owner | What that owner must protect |
|---|---|---|
| Marketing → **Gross Leads** | Marketing / lead generation + data/list operations | Correct audience, approved buy box, campaign delivery, source tracking, and clean CRM capture |
| **Gross → Net** | Prospecting rep, inbound intake, or lead manager — depending on channel | Correct-owner verification, seller interest, accurate dispositions, and no premature disqualification |
| **Net → Attended Appointment** | Lead manager / ISA / appointment setter | Fast response, persistent follow-up, basic buy-box qualification, booking, confirmation, and attendance |
| **Appointment → Contract** | Acquisition rep, supported by the acquisitions manager / underwriter | A real offer, sound ARV/repair/MAO logic, seller negotiation, follow-up, and a fully executed purchase agreement |
| **Contract → Close** | Exit-specific: dispositions + transaction coordination for wholesale; capital/closing + project/resale owners for fix-and-flip | The signed purchase agreement reaches the correct monetization event for the approved exit strategy |

### Client operating roles

| Role | What the role does | Metrics the role is accountable for | Regular review rhythm |
|---|---|---|---|
| **Owner / CEO** | Sets markets, buy box, exit strategy, capital allocation, targets, and final cross-functional priorities. | Full GNACC funnel; Closed Deals; revenue received; gross profit per Closed Deal; marketing ROI; buy-box-to-closed-deal alignment. | Weekly funnel scorecard; monthly economics; quarterly market, capacity, and buy-box review. |
| **COO / integrator / operations manager** | Turns strategy into staffing, service-level agreements (SLAs), handoffs, CRM discipline, meeting rhythms, and corrective actions. | Every GNACC stage volume and conversion by channel/rep; backlog and queue age; speed to lead; CRM field completion; closing forecast and capacity. | Daily exceptions; weekly operating review; monthly capacity and process review. |
| **Marketing / lead-generation manager** | Owns channel mix, budget, campaigns, creative, vendors, tracking, and test calendar. | Ad spend; Gross Leads by channel; cost per Lead (Gross Lead); direct-mail response rate; mail pieces per Closed Deal; Gross → Net as a lead-quality guardrail; marketing ROI. | Daily delivery/spend; weekly channel scorecard; monthly ROI, cohort, and test review. |
| **Data / list / CRM manager (marketing operations)** | Translates the approved buy box into lists and CRM rules; manages skip tracing, exclusions, dedupe, routing, fields, and reporting QA. | Selected → eligible → exported record counts; buy-box version and match; property-data errors; reachable/wrong-number rates; exclusion or duplicate exceptions; routing failures; CRM field completion. | QA every batch/import; daily routing exceptions; weekly data quality; buy box at least every 90 days with the owner/CSM. |
| **Prospecting rep / cold caller / outbound virtual assistant (VA)** | Works records and phone positions, reaches the correct owner, establishes selling interest, and records an accurate disposition. | Records and phone positions attempted; live-answer rate; correct-owner reach; Gross → Net by caller/channel; attempt depth; disposition and required-field accuracy. | Daily activity and conversion scorecard; weekly segmented recording QA. |
| **Lead manager / inside sales agent (ISA) / intake / appointment setter** | Responds to inbound leads, verifies owner and interest, runs follow-up, performs basic qualification, and books/confirms the appointment. | Speed to lead; Net Leads worked; backlog/queue age; completed contact attempts; Net → Appointment; scheduled → attended/show rate; qualification-field completeness. | Live queue monitoring; daily follow-up review; weekly conversion by source, owner, and response-time bucket. |
| **Underwriter / estimator** | Validates property facts, ARV, repairs, exit assumptions, and MAO before or during the offer process. In lean teams, an acquisitions manager or rep performs this role. | Underwriting turnaround; ARV and repair-estimate variance; offer/MAO exception rate; re-trades or cancellations caused by underwriting; expected vs. realized deal spread. | Per deal before offer; weekly exception review; monthly calibration against closed deals. |
| **Acquisition rep** | Runs the seller appointment, evaluates the property, presents the offer, negotiates, follows up, and obtains the signed purchase agreement. | Attended appointments and offers presented; Appointment → Contract; Contracts signed; follow-up completion; buy-box fit; lost-deal reasons; realized gross profit per deal as a quality guardrail. | Daily pipeline and follow-up; weekly conversion by rep, channel, market, price band, and buy-box fit. |
| **Acquisitions manager / sales manager** | Sets offer guardrails, assigns leads/territories, coaches reps, audits calls, approves exceptions, and forecasts contracts. | Team Appointment → Contract; Contracts signed; buy-box fit at appointment/contract; rep follow-up adherence; lost-deal reason completeness; pricing and gross-profit guardrails. | Daily pipeline/exception review; weekly rep scorecards and call QA; monthly loss and pricing review. |
| **Dispositions rep / dispositions manager** | Validates buyer demand, launches the contract to qualified buyers, collects bids, negotiates the assignment, maintains buyer relationships/proof of funds, and executes the approved wholesale exit. Recommends an exit change when buyer evidence invalidates the original plan. | Contract → Close; time from signature to first marketing and first bid; bids per contract; verified active buyers; end-buyer concentration; assignment spread/gross profit per Closed Deal; dispo-caused fallout. | Daily contract inventory and buyer follow-up; weekly closing/buyer scorecard; monthly buyer-depth and concentration review. |
| **Transaction coordinator / closing coordinator** | Moves the fully executed contract through title/escrow or the closing attorney; controls documents, access, inspections, signatures, contingencies, and deadlines. | Open contracts by milestone; deadline completion; days to close; exception/curative aging; missing documents; Contract → Close and fallout reason, shared with dispositions. | Daily open-file and exception review; weekly closing forecast and fallout review. |
| **Finance / bookkeeper / controller** | Reconciles deposits, wires, assignment fees, closing statements, commissions, revenue, marketing spend, and the profit-and-loss statement (P&L). | Revenue received; gross profit per Closed Deal; ad spend; marketing ROI; cash collection; Closed Deal-to-revenue reconciliation; commission accuracy. | Weekly cash and closing reconciliation; monthly P&L and marketing-economics review. |
| **Capital / lending manager** *(when the client takes title)* | Secures acquisition and construction funding, clears lender conditions, schedules wires, and manages liquidity and financing constraints. | Funding readiness; available/committed capital; lender-condition aging; acquisition-closing fallout; interest and carrying-cost exposure. | Per deal before closing; daily funding exceptions; weekly capital forecast. |
| **Fix-and-flip project / construction manager** | Converts the approved scope and budget into a completed renovation; manages contractors, permits, draws, schedule, quality, and change orders. | Days from acquisition to rehab start and completion; budget versus actual; change orders; rework; carrying days and costs. | Daily active-project review; weekly budget/schedule review; post-project variance review. |
| **Resale / listing manager or agent** | Prices, prepares, lists, markets, negotiates, and closes the renovated or wholetail property with the retail buyer. | Days from rehab completion to list; days on market; price reductions; list-to-sale spread; resale fallout; realized gross profit. | Weekly listing pipeline; per-offer review; monthly resale and margin review. |

### Exit-strategy ownership boundary

The owner sets the business-level exit strategy and capital guardrails. Before an offer goes to the seller, acquisitions and underwriting choose a deal-level primary and backup exit and confirm that the economics work. Post-signature ownership then changes by exit:

| Exit | Post-signature operating path | Canonical Closed Deal / gross-profit treatment |
|---|---|---|
| **Wholesale / assignment** | Dispositions validates buyer demand and markets the contract; transaction coordination moves seller, end buyer, and title/escrow to closing. | Closed when the end buyer closes and assignment revenue is received. Gross profit is sold/assignment price minus purchase-contract price. |
| **Fix-and-flip / wholetail** | Capital and transaction coordination close the acquisition; project/construction manages any rehab; resale/listing markets and closes the property. | Acquisition closing is an operating milestone. The canonical Closed Deal is the resale that produces revenue. Gross profit is sold price minus purchase price minus rehab costs. |

Keep these exits separate in reporting. A healthy wholesale buyer list does not prove that a flip can be funded or renovated, and a successful acquisition closing does not prove that the final resale economics were achieved.

### 8020REI partner roles

| Role | What the role does | Metrics the role is accountable for | Regular review rhythm |
|---|---|---|---|
| **8020REI CSM** | Runs engagement calls and client diagnostics, confirms the buy box, requests Feedback Loop data, coordinates action owners, and escalates fulfillment issues. The client still owns its operating results. | Engagement-call attendance; buy-box freshness; buy-box-to-closed-deal match; monthly Feedback Loop participation; action-item closure; client GNACC trend monitoring. | Follow up weekly on active issues; engagement call monthly; buy-box review at least every 90 days. |
| **8020REI fulfillment / data operations** | Converts the approved buy box into compliant campaign files, applies field mapping/exclusions/dedupe, manages data and skip-trace outputs, and completes delivery QA. | Approved → selected → eligible → exported row reconciliation; exclusion leakage; duplicates; required-field completeness; property-data errors; delivery timeliness; rework. | QA every file/campaign; daily exception handling; weekly defect/rework review. |

### Common external partners

| Partner | What the partner does | Operating measures to monitor | Internal accountable owner |
|---|---|---|---|
| **Title company / escrow / closing attorney** | Searches and clears title, holds funds, prepares closing documents, coordinates signing, funds, and records the transaction. | Title commitment/clear-to-close timing; curative-item age; on-time signing/funding; fallout by title or closing reason. | Transaction coordinator. |
| **Call center / marketing vendor** | Executes the contracted channel workflow: mail, SMS, cold calling, pay-per-click (PPC), or another source. | Selected/submitted/delivered/attempted counts; coverage and records exhausted; correct-owner reach; dispositions; rejects/suppression reasons; SLA exceptions. | Marketing manager for channel delivery; lead manager/operations for lead handling. |

### KPI ownership rules

1. **Give every KPI one named primary owner.** Shared contribution is real; shared accountability without a decision owner is not.
2. **Diagnose handoffs, not just people.** Segment a broken conversion by channel, rep, market, price band, buy-box fit, and fallout reason before concluding that a role failed.
3. **Separate activity, conversion, quality, and economics.** Activity shows whether work happened; conversion shows the handoff result; quality shows whether the outcome was usable; economics shows whether it was profitable.
4. **Review at the speed of the work.** Queues, new leads, live contracts, and closing exceptions need daily attention. Conversion rates need a weekly cohort view. Economics and buy-box alignment need monthly or quarterly review.
5. **Log changes manually for now.** There is no queryable change-event log for buy-box or creative edits yet, so the owner/operations team must reconstruct dates when diagnosing an inflection.

## Wholesale real estate / 8020REI domain

- **Wholesaling** — getting a property under contract below market value and assigning (selling) that contract to a cash buyer for a fee, without renovating or (usually) closing on the property yourself.
- **Assignment / assignment fee** — the wholesaler's profit: the price the end buyer pays for the contract minus the contracted purchase price.
- **Buy box** — a client's exit-strategy-specific target-property criteria: location (counties/zips), price band, property type, condition/repair level, equity, and seller situation, constrained by wholesale buyer demand or by the client's capital, rehab capacity, and resale economics. It drives which prospects get marketed to and which leads get pursued. *Stale or over-expanded buy boxes are the most common diagnostic root cause.*
- **Reverse BuyBox** — the 8020REI analysis that works backward from a client's historical successful deals to create targeting proposals. It informs a BuyBox; it does not silently overwrite the active configuration.
- **BuyBox IQ** — client-specific learning trained on the investor's closed-deal history. Its value depends on accurate, current Feedback Loop data.
- **Likely Deal Score (LDS)** — 8020REI's distress-based prioritization signal. It can support an explicitly approved test or opportunity outside the historical BuyBox; it is not permission to bypass the active BuyBox release gate.
- **Active / approved BuyBox** — the targeting configuration mutually confirmed and saved by the client and CSM. Fulfillment must use this version unless a documented, CSM-approved test cohort or revision replaces it.
- **Acquisitions** — the seller-facing side of the operation: turning an attended appointment into a signed purchase agreement through property evaluation, underwriting, offer presentation, negotiation, and follow-up.
- **Dispo (disposition)** — the sell side: the cash-buyer list and the process of assigning signed contracts to it. A buy box wider than dispo capacity produces contracts that cannot be assigned to an end buyer and therefore fail between **Contract → Close**.
- **Fix-and-flip** — buying the property, taking title, renovating it, and reselling it. Unlike an assignment, it requires acquisition capital, construction execution, carrying-cost control, and a retail resale.
- **Wholetail** — buying and taking title, performing limited cleanup or repairs, and reselling the property largely as-is. For 8020REI gross-profit reporting it follows the fix-and-flip treatment when the client invested money in the property.
- **Underwriting** — estimating ARV, repairs, holding/closing costs, buyer demand, and the maximum price the company can pay before an offer is approved.
- **Transaction coordination (TC)** — the administrative and deadline-control work between a fully executed Contract and a Closed Deal, usually across the seller, buyer, title/escrow or closing attorney, and internal acquisitions/dispositions teams.
- **ISA (Inside Sales Agent)** — the lead-management role that responds to, qualifies, follows up with, and books seller leads. Some teams call this intake, lead manager, or appointment setter.
- **VA (Virtual Assistant)** — a remote team member or vendor staffer. VA describes where/how the person works, not the function; score the person against the KPIs for the role they actually perform.
- **SLA (service-level agreement)** — the promised response-time, coverage, quality, or delivery standard for a team or vendor, such as speed to lead or records attempted.
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
- **CSM** — customer success manager; runs 8020REI client engagement calls and diagnostics, coordinates actions, and keeps the buy box and Feedback Loop current. The client remains accountable for its own operating results.
- **Feedback Loop** — clients submitting lead, appointment, and closed-deal outcomes back to 8020REI, including accurate purchase price, sold price, rehab cost, and exit strategy when applicable. These results feed ROI analysis, Reverse BuyBox proposals, and BuyBox IQ; without them the BuyBox is guesswork.
- **Knowledge Gap sessions** — recorded client Q&A/coaching sessions; 367 of them informed the diagnostic pillars.
- **ICP** — ideal customer profile (ICP1/ICP2 = client tiers).

## Methodology

- **7 steps / 4 phases** — Define (1) · Structure (2–3) · Analyze (4–5) · Synthesize (6–7). Full reference: `mckinsey-method.md`.
- **SMART problem statement** — specific, measurable, action-oriented, relevant, time-bound.
- **MECE** — mutually exclusive, collectively exhaustive; the rule that makes trees and pyramids defensible.
- **Issue tree vs. hypothesis tree** — open-question decomposition (data thin) vs. proposed-answer decomposition (strong hunch).
- **Hypothesis ladder** — the six rungs a diagnosis climbs down: **complaint → break → segment → hypothesis → root cause → trigger**. Each rung answers a different question and is settled by different evidence (rungs 1–2 by arithmetic, 3–4 by investigation, 5 by a timestamp). Full reference: `hypothesis-to-root-cause.md`.
- **Hypothesis (rung 3)** — a *mechanism* that could explain why a segment behaves as it does ("the callers aren't reaching real owners"). Testable and falsifiable, but not yet actionable: it names a category of causes, not a fix.
- **Root cause (rung 4)** — the one *specific fixable thing* inside a confirmed hypothesis ("the dialer loads three of fifteen phone fields"). You are there when the claim is **actionable** (an owner and a first task), **sufficient** (applied on paper it closes the whole gap), and **preventable** (a control stops the recurrence).
- **Trigger (rung 5)** — the timestamped change event that switched the root cause on. Often external even when the root cause is internal; it explains *when*, not *what to fix*.
- **Layer mixing** — the most common tree defect: listing a root cause ("the rep who started in March") beside category-level branches ("offer economics", "the market"). MECE is a test among siblings on one rung, never between a parent and its child. The tell: one item names a person, tool, vendor, version, or date while the others name categories.
- **Discriminating cut** — a segmentation whose result differs depending on which hypothesis is true. A cut that produces the same table under two hypotheses cannot separate them; pick the dimension your live hypotheses disagree about most.
- **The five-branch conversion tree** — the generator for a broken rate: *did the right thing arrive (Input) · did we work it (Coverage) · did we work it well (Execution) · did we count it (Measurement) · did the other side change (External)*.
- **The volume waterfall** — the generator for a lost count with rates intact: *planned → eligible → sent/delivered → reached → responded*. Find the step where the records disappear.
- **People versus systems** — if every operator shows the same pattern it is the thing they share (tool, formula, data version, workflow); if one operator differs it is that operator, vendor, or file.
- **Pyramid Principle** — think bottom-up, present top-down; answer first, then MECE supporting reasons.
- **SCR** — Situation → Complication → Resolution; the storyline of a memo or deck. RSC variant when the audience already agrees.
- **80/20** — spend analysis hours on the ~20% of branches driving ~80% of the effect.
- **Segment before you theorize** — the house diagnostic move: cut a broken KPI by rep/county/channel/price band before debating hypotheses; one query usually kills half the tree. Segmentation is not a hypothesis — it is the instrument that decides which hypotheses are worth testing, and it runs at *every* rung, not once at the start.
- **Change-log correlation** — matching a metric inflection to a timestamped account change (buy-box edit, creative change); the fastest confirmation there is.
- **Baseline vs. benchmark** — the client's own trailing history vs. cross-client/industry standards; deviations from either can trigger a diagnostic.
- **Flipped classroom** — theory consumed alone before class; live time reserved for supervised practice (the case).
- **Case interview (interviewer-led)** — McKinsey-style teaching/testing format: structure → quant exhibit → brainstorm → synthesis, with the interviewer controlling direction.
