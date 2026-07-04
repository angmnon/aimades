# DESIGN.md — MADES (Spaceship-inspired)

## Product Soul
MADES — the Industrial World Model. Inspired by spaceship.com's bold, playful-yet-premium space odyssey, we reinterpret the aesthetic for an industrial-AI audience. Think: a mission-control viewing deck at night, the warm white glow of a launch pad against the deep cosmos, friendly but sharp typography, bold oversized headlines that feel like a mission brief, and rounded friendly cards that feel tactile like spacecraft control panels. Not cold/blue sci-fi — warm, confident, adventurous, like gearing up for launch.

## Visual Strategy
- Hero uses a cinematic deep-space image (spacecraft + nebula) with heavy dark overlay + vignette + slow parallax drift; background sections use `bg-stars.jpg` (starfield) fixed, plus soft radial glows in electric violet and warm cyan.
- Cards: very rounded (20–28px / rounded-3xl / rounded-[28px]), soft subtle border (white/8), filled bg-surface with slight backdrop-blur, soft hover lift + soft glow, friendly and tactile — not razor-thin sharp.
- Typography: **big, bold, confident** — huge headlines (64–96px), tight leading, mixed case (not all caps everywhere). Use Inter (friendly modern sans) as primary; Space Grotesk for display; JetBrains Mono for tags/numbers. Subtle gradient text reserved for key accents.
- Buttons: pill-shaped (rounded-full), primary is filled gradient (electric violet → fuchsia → cyan glow?), or solid white-on-dark for strong CTA. Secondary is outlined with white/20 border. No tiny sharp-cornered buttons.
- Navigation: glass pill nav (rounded-full), fixed, translucent backdrop-blur-xl, with icon logo on left, links in middle, CTA button on right. Mobile collapses to hamburger.
- Motion: smooth, slow, cinematic — 0.5–0.8s fade-ups with ease-out; gentle breathing glow on hero orbs; subtle parallax on hero image; soft scale on hover (1.02). No harsh neon flashes.
- Accents: **electric violet (#7C3AED / #A855F7)**, **warm cyan (#22D3EE)**, touch of **coral/pink (#F472B6)** for playful highlights — like spaceship's palette (they use bold purple/pink/orange). Primary CTA can be a white button with dark text for strong contrast.

## Color Tokens
- bg-base: #070414 (deep indigo-black, warmer than pure black)
- bg-surface: rgba(255,255,255,0.06) with white/10 border
- bg-elevated: rgba(255,255,255,0.10)
- text-primary: #FFFFFF (pure white headings, confident)
- text-secondary: rgba(255,255,255,0.72)
- text-muted: rgba(255,255,255,0.50)
- accent-violet: #A855F7 (primary brand)
- accent-cyan: #22D3EE (secondary)
- accent-pink: #F472B6 (playful highlight)
- gradient-primary: from-violet-500 via-fuchsia-500 to-cyan-400

## Typography
- Display: Space Grotesk 700 (or Inter 800) — huge, tight tracking -0.03em
- Body: Inter 400/500, leading 1.65, friendly and readable
- Mono: JetBrains Mono 500 for chips, IDs, parameters

## Layout & Rhythm
- Max content width 1280px (max-w-7xl)
- Generous section padding: py-24 / py-32 desktop, py-16 mobile
- Cards: rounded-3xl (24px), sometimes rounded-[28px] for hero cards
- Generous whitespace; breathe between blocks; playful section dividers (not just lines)

## Rounded & UI Details
- Buttons: rounded-full (pill)
- Inputs: rounded-2xl
- Cards: rounded-3xl
- Nav bar: rounded-full (floating pill)
- Badges/chips: rounded-full
- Subtle soft inner shadow / glow on buttons
- Hover: translateY(-2px) + soft shadow + brightness bump

## Motion
- Hero image: slow drift (`animate-drift`, 30s ease-in-out infinite alternate)
- Glow orbs: breathing opacity 6s loops
- Framer Motion: `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 24 }}`; 0.6s duration, ease [0.16, 1, 0.3, 1]
- Button hover: scale 1.03, subtle glow
- Cursor-follow glow optional

## Design Taboos
- No razor-thin 1px borders with tiny radii — keep rounded, friendly
- No generic "enterprise blue"
- No heavy drop shadows; use soft glow + blur
- No harsh neon flashing
- No Chinese text; English only
- Don't overcrowd — let space hero image breathe
