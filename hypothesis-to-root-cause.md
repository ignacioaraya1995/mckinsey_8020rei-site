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
