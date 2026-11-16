# Rolex Phone — Foolproof Plan (website + pitch)

## 1. Research findings (what the sharks will already know)

| Fact | Source | Use it for |
|---|---|---|
| Vertu (Nokia-founded luxury phone, est. 1998) went into liquidation in 2017. Phones £11k–£39k / from $6,900; collapsed after iPhone made usability matter more than luxury; weak software/camera couldn't justify price; £128M deficit, ~200 jobs lost. | [Silicon UK](https://www.silicon.co.uk/mobility/smartphones/vertu-collapses-smartphone-217323), [Which?](https://www.which.co.uk/news/article/vertu-goes-bankrupt-farewell-to-the-worlds-most-unnecessarily-expensive-smartphone-aZ1pG1L6olao), [Android Central](https://www.androidcentral.com/vertu-going-out-business) | **The #1 shark question.** Prepare the answer: we never compete on tech. Flagship-grade internals (partner-sourced), our craft goes into body, glass, finish, service. Vertu sold jewellery on a stale phone; we sell servicing for life on a current one. |
| Rolex makes ~1.18M watches/yr, ~CHF 10.5B revenue (analyst estimates, Rolex doesn't publish), cut production in 2024 yet sales rose ~5% via price/mix. ~32% luxury-watch share. | [Fortune/Morgan Stanley](https://dc.fortune.com/europe/2024/02/29/rolex-record-sales-more-than-5-competitors-combined-morgan-stanley-luxury-brand-dominant-position/), [Bob's Watches](https://www.bobswatches.com/rolex-blog/editorial/how-many-watches-rolex-makes.html) | Proof that scarcity + low volume = pricing power. Line: "Rolex made fewer watches and earned more." |
| India luxury goods ~US$10.6B (2025) growing to ~$14.3B by 2030; India luxury watches ~US$1.7B (IMARC; other firms say 0.6B – estimates vary widely). India's UHNW population projected +50% 2023–28. | [Ken Research](https://www.kenresearch.com/industry-reports/india-luxury-goods-market.md), [IMARC](https://www.imarcgroup.com/india-luxury-watch-market), [Free Press Journal](https://www.freepressjournal.in/amp/india/indias-ultra-rich-population-to-rise-by-50-by-2028-fastest-globally-report) | Market slide. Quote ONE number and say "estimates vary". |
| India smartphones 2025: premium (₹30k+) = record ~22–23% of shipments; super-premium (₹50k+) grew 45% YoY; Apple = 28% value share on ~9% volume; ~2/3 of premium purchases financed. | [Free Press Journal/Counterpoint](https://www.freepressjournal.in/tech/over-one-in-every-five-smartphones-shipped-in-india-is-now-premium-counterpoint), [Business Today](https://www.businesstoday.in/technology/news/story/india-s-smartphone-market-hits-record-value-growth-driven-by-premium-demand-and-festive-sales-500683-2025-11-04) | "Value, not volume" is already how Apple wins in India: 9% of units, 28% of revenue. Perfect support for our scarcity logic. Also: offer EMI. |

Gaps I could not verify (do **not** quote as fact): Rolex gross margin, exact India UHNW head-count, ₹45k+ share. Say "estimates".

## 2. The numbers problem (fix before presenting)

**Your placeholder ask doesn't add up.** ₹50L for 5% = ₹10 Cr valuation, but 1,000 titanium/sapphire phones cost far more than ₹50L to build (at an illustrative ₹70k cost each = ₹7 Cr in parts alone). A shark will catch this in 10 seconds and it hits the 10% "Numbers & Ask" rubric and the 20% Q&A.

Recommended coherent version (all **assumptions, label them as such**):
- Price: ₹1,50,000 per phone. Cost (parts + finishing + warranty reserve): ~₹70,000 → ~53% gross margin on hardware.
- Series I: 1,000 numbered units = ₹15 Cr revenue, ~₹8 Cr gross profit.
- Service plan: ₹15,000/yr for lifetime service, assume 40% attach → ₹60L/yr recurring on 1,000 units.
- Capital need: ~₹3 Cr (tooling/design with an ODM partner, first batch, certification).
- **Ask: ₹3 Cr for 5%** (₹60 Cr post-money), de-risked with **300 refundable ₹25,000 deposits** collected before production (₹75L, shows demand).
- Alternative if the group keeps ₹50L/5%: shrink scope to "prototype + 50-unit Founders Edition", say so out loud.
- One unit-economics sentence to memorise: "Each phone sells at ₹1.5L, costs ~₹70k to make, so about half is margin, before service revenue."
- Break-even on the ask: ₹3,00,00,000 ÷ ₹80,000 gross profit per unit ≈ 375 units, i.e. 37.5% of the 1,000-unit run.

## 3. Risks and pre-loaded answers (add to your 3)
1. **Vertu died** → see table. Differentiator: current internals + lifetime service.
2. **Who makes the chip/OS?** → Android on flagship Snapdragon via ODM partner; we own design, materials, finishing, service. (Same as Apple-silicon-free luxury houses partnering for movements.)
3. **Why would a ₹1.5L buyer not buy iPhone Pro Max?** → They own one. This is a second object, like a watch, not a replacement.
4. **Lifetime servicing is a liability** → Priced as a paid plan, modular battery/glass, reserve 8% of revenue.
5. **Brand name / trademark** → Pitch codename. Say "working name; final brand would be our own". Site carries a disclaimer: not affiliated with Rolex SA. Do not use the Rolex logo, crown mark or colours (green).
6. **Scarcity is artificial** → Yes, by design; it's what a numbered edition means. Resale value is the proof; plan a certified resale registry.

## 4. Website plan (static HTML/CSS/JS, no build step)

| Page | Contents |
|---|---|
| `index.html` Product | Hero "Luxury never upgrades." → **sticky scroll morph**: box phone → corners soften → turns into a sphere (cavemen gripping stones) → rotates to side profile: flat sapphire face, domed palm-filling back → six feature cards → close. |
| `pitch.html` The Pitch | Problem, Solution, Fit, USP vs Apple/Samsung table, business model (3 revenue streams), team (5 members, one rubric chunk each), Q&A accordion. |
| `numbers.html` Numbers & Ask | Section 2 above, animated bars, use-of-funds, the ask. |

Design: near-black + gold, Cormorant Garamond headings, Inter body. Mobile-first, respects reduced-motion. Footer disclaimer: hypothetical student concept, placeholder figures.
Status: `style.css` and `site.js` (morph engine) are written in `~/Desktop/Claude Code/rolex-phone/`; the three HTML pages are the remaining build.

## 5. Delivery plan (rubric-mapped)
| Rubric | Weight | Owner | Slide/website tie-in |
|---|---|---|---|
| Problem + Solution + Fit | 25% | Members 1–2 | Pitch page |
| Numbers & Ask | 10% | Member 3 | Numbers page |
| Delivery & persuasion | 20% | Member 4 (hook + close) | Hero line |
| Q&A | 20% | Member 5 (but all rehearse) | Q&A accordion |
| Shark role | 25% | Everyone | Prepare 2 questions each about the *other* team's numbers |

Run-time: hook 0:30, problem 1:30, solution 2:00, numbers 2:00, ask 1:00 = 7:00, leaving buffer inside 8–10. Rehearse twice with a timer; each person says one number from memory.

## 6. Ship plan (GitHub → Vercel)
1. Build the 3 pages, check in browser at desktop and 375px mobile.
2. `git init`, commit, `gh repo create rolex-phone --public --source . --push` (gh is already logged in as Arthamjain; **public repo — confirm first**).
3. Vercel CLI isn't installed and the Vercel connector needs authorising: either run `/mcp` to authorise Vercel, or import the GitHub repo at vercel.com/new (framework "Other", no build command, output dir `.`). Every push then redeploys.
4. Submit the live URL with the deck before S20.


## UPDATE: premium repositioning (current numbers on the site)
Price ₹4,50,000; build cost ~₹1.6L; gross profit ~₹2.9L (64%); Series I revenue ₹45 Cr; service ₹30k/yr at 40% attach = ₹1.2 Cr/yr; ask ₹3 Cr for 5% (₹60 Cr post); 300 refundable ₹50k deposits = ₹1.5 Cr; break-even ≈ 103 units. USP: one unchanged design for life, restored never replaced. Sought-after cues: 1,000 numbered units, by appointment, waitlist.
