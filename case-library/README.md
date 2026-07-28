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

**Rendering & access:** cases 01–03 currently live in `interview-cases.html` — the password-protected Interview Casefile (facilitators only; content is AES-encrypted in the page). Cases 04–07 are complete in source and require encrypted-payload regeneration. The case `.md` files here are the source of truth and are **not** published to the web or downloads page.

Case 06 matters because the method must also be able to conclude "it's not the client's execution" — that's what the market-context signals exist for.

Cases 01 and 03 intentionally share **Contract → Close** but teach different branches: deal-to-buyer fit vs. buyer concentration. Case 07 provides the distinct **Appointment → Contract** lesson: the seller rejects a miscalibrated offer before signing.
