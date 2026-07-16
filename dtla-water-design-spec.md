# DTLA Water — Site Fork Spec
Forked from pureowater.com. Same features/functionality, distinct brand.

## 1. Setup
- [ ] Clone pureowater.com repo → new repo `dtla-water`
- [ ] New Vercel project (not a domain add-on to the existing one)
- [ ] Point `dtlawater.com` DNS to new Vercel project
- [ ] New env vars for: form submission endpoint/CRM, reCAPTCHA keys, analytics ID, any payment/scheduling integration — do NOT share Pure O Water's keys
- [ ] Swap `/logo.png`, `/og-image.png`, favicon → DTLA Water assets (logo file already provided: `dtla-water-logo.webp`)

## 2. Brand Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--primary` (navy) | `#1B3A6B` | Header bg, footer, primary text on light |
| `--accent` (sky blue) | `#29ABE2` | Links, highlights, "LA" portion of wordmark treatments |
| `--action` (near-black) | `#111111` | Buttons ("ORDER NOW" style — matches existing site) |
| `--bg-light` | `#F5F8FB` | Section backgrounds (cool off-white, not Pure O's warm white) |
| `--text` | `#1A1A1A` | Body copy |

> Pull exact hex values from the logo file with a color picker to match precisely — the above are close approximations from the image.

### Typography
- Headlines: **Barlow Condensed** or **Archivo** (bold, condensed — echoes the skyline's architectural lines). Pure O uses a softer/rounder sans, so this alone creates separation.
- Body: **Inter** (clean grotesk, good readability)
- Keep the current DTLA wordmark treatment (bold "DTLA" in navy + "WATER" in sky blue) as inline text styling anywhere the logo isn't used as an image, for consistency.

### Imagery direction
- Hero: downtown LA skyline (photo or graphic), not bottled-water product shots like Pure O's hero
- Supporting images: keep the existing lifestyle photos (person drinking water, delivery, family) — these transfer fine, they're generic stock, not Pure O-specific
- Avoid teal/aqua tones in any supporting graphics — keep everything in the navy/sky-blue family to stay distinct from Pure O's palette

## 3. Section-by-Section Notes
Same structure/functionality as Pure O, restyled:

1. **Hero** — Full-bleed skyline image or graphic behind headline. Keep the two-line value prop + phone number + CTA button pattern from the current DTLA site ("Stay Hydrated and Healthy with DTLA Water Service").
2. **Products** — Reuse Pure O's two-product-card layout (Purified / Alkaline) if DTLA offers both; otherwise adjust to DTLA's actual product lineup.
3. **How it works (process steps)** — Reuse structure, rewrite copy for DTLA's actual delivery model (they currently emphasize offices, industrial, film productions — not just residential).
4. **Order form** — Reuse Pure O's form logic/fields, restyle to navy/sky-blue, update service area list to DTLA's actual delivery zones (downtown LA + surrounding communities, not Ventura County cities).
5. **Testimonials** — Placeholder until real DTLA reviews are supplied; don't reuse Pure O's customer quotes.
6. **Footer** — DTLA Water contact info: (213) 371-4500, 1360 South Figueroa Street, Los Angeles, CA 90015. Social links: Facebook + Instagram (per current site).

## 4. Copy to Carry Over from DTLA's Existing Brand Voice
- "Small enough to care, big enough to deliver"
- "Reliable Bottled Water Delivery in Los Angeles"
- Audience emphasis: offices, industrial facilities, events, film productions in downtown LA — over 20 years in business

## 5. QA Checklist Before Launch
- [ ] No leftover Pure O Water text, images, phone numbers, or service-area references anywhere (search codebase for "Pure O", "Ventura", "Santa Clarita", "Antelope Valley")
- [ ] Form submits to DTLA's own inbox/CRM, not Pure O's
- [ ] All env vars/keys are DTLA-specific
- [ ] Meta tags (title, og:image, description) updated for DTLA Water
- [ ] Favicon and logo swapped everywhere (header, footer, og-image)
- [ ] Mobile responsive check on hero + form
