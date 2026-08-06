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
- Every red flag in `client-diagnostic-checklist.md` is a candidate case seed.

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
