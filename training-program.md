# 8020IQ Problem-Solving Program — Flipped Classroom + Case Method

*How the pieces fit: the teaching guide teaches the METHOD, the case library provides safe PRACTICE, the intranet tools are where the method runs on REAL clients, and the playbook is the reference that accumulates what we learn.*

```
McKinsey-Problem-Solving-Guide.html   →  learn the method (pre-work, self-paced)
case-library/*.md                     →  practice on fictional clients (live session)
client-diagnostic-checklist + gnacc-calc  →  apply to real clients (post-work)
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
| 75–90 | Connect to reality: open `tools/gnacc-calculator`, load the *8020REI Benchmarks* preset, and reproduce the case's baseline funnel and conversion math; use the case's $25k gross-profit assumption for dollar sizing. Then open `client-diagnostic-checklist.html` and show the 3 pillars = the hypothesis tree they just built by hand |

### Post-work — real client (async, CSM's own book)
- Pick one underperforming client. Run the 5-step diagnostic approach (Segment → Compare → Benchmark → Correlate → Prioritize) using the client-diagnostic checklist + roi-client-analysis.
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

Source material for new cases: Knowledge Gap sessions (the 367 that informed the diagnostic pillars), real anonymized client inflections, and the red-flag items already codified in `client-diagnostic-checklist.md` — every red flag in that checklist is a case seed.

## 4. Design principles (why it's built this way)

1. **Real numbers everywhere.** Cases use the CG stage benchmarks (50/25/15/70), the preset's baseline funnel counts, and a confirmed typical-client gross-profit range of $20,000–$30,000 per closed deal (case midpoint: $25,000).
2. **The tree is pre-built; judgment is what's trained.** The client-diagnostic checklist already holds the hypothesis tree. The skill being taught is steps 3–7: prioritizing, testing cheaply (segmentation first, change-log correlation first), and synthesizing SCR-style.
3. **Interviewer-led, not candidate-led.** Matches McKinsey's own format and keeps a 45-min time box; the facilitator can rescue a stuck room with the scripted coaching prompts.
4. **Every diagnosis feeds the playbook.** The memo template's last section is literally "playbook entry proposed." Training and knowledge management are the same loop.
5. **Channel first, then operator.** Every case segments the broken KPI by SMS, Cold Call, and Direct Mail before recommending a broad fix. Once a channel is isolated, the next cut matches its mechanics: state/carrier/vendor/campaign for SMS; call center/caller/attempt depth/phone position for Cold Call; piece type/printed response number/vendor/drop date for Direct Mail. For Cold Call, segment first and then listen to a few recordings from the abnormal cohort plus a healthy control; check identity verification, script, objections, dispositions, and premature disqualification.
6. **Audit our own fulfillment.** A client symptom can originate inside 8020REI. Reconcile the approved buy box to the import and final export, verify `SystemDMA` / `DoNotSend` and client-specific exclusions, compare source and row counts, and inspect a targeted record sample. For contactability declines, segment by skiptrace date/age—a file last refreshed 12 months ago can decay gradually.

## 5. Open items

- [ ] One-page SCR memo template (Google Doc)
- [ ] Decide cohort composition (CS only, or CS + sales + data?)
- [ ] Change-event logging on real clients (buy box edits, qualification/routing changes, creative changes) — the diagnostic shortcut taught across the cases only works in production if changes are timestamped somewhere queryable
- [ ] Optional later: AI case partner — an agent prompt that plays interviewer for solo practice (cheap once cases are written, since the interviewer guide is the prompt)
