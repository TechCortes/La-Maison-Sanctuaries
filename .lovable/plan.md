
## La Maison — Landing Site Plan

A hybrid site (landing + two dedicated pages) in a "Bordeaux warmth" palette: bone background, deep wine/bordeaux accents, soft terracotta highlights, with a refined serif display face (Cormorant Garamond) paired with Inter for body. Imagery from the PDF will be copied into the project and used throughout.

### Routes

1. **`/` — Landing page**
   - Hero: full-bleed building illustration, La Maison wordmark, tagline *"Private Design Sanctuaries"* and a quiet *"Request Introduction"* CTA.
   - Concept block: the members'-club / living-showroom positioning quote.
   - Five Brand Pillars in an elegant grid (Design & Art of Living, Experiential Luxury, Wellness & Restoration, The Living Showroom, Sustainability).
   - Flagship teaser card → links to `/maison-sainte-florence`.
   - Investment teaser → links to `/investment`.
   - Future Openings strip (Italy, UK).
   - Founders short bios (Lauren Lozano Ziol, Michelle Jolas, Holly-Mae Post).
   - Inquiry section anchor.

2. **`/maison-sainte-florence` — Flagship page**
   - Hero with the Sainte-Florence façade mark.
   - "Flagship Members' Designer Showhouse" intro.
   - Saint-Émilion location: short copy + the Bordeaux wine-region map image.
   - Design Intent gallery: landscape sketch, floor plan, exterior, spiral staircase, courtyard, bedrooms collage.
   - Scroll-tied imagery, captioned softly.

3. **`/investment` — Investment page**
   - Investment summary intro.
   - Investor Highlights cards: 8% fixed annual return, 25% upside participation, principal returned at exit, IRR potential (~15.8% / ~18.5%).
   - Diversified Revenue Streams list.
   - ESG & Responsible Development section.
   - Strategic Investment status (acquired, construction-ready, revenue 2027, USD $3M required).
   - Competitive landscape & "Why the market needs La Maison" condensed.
   - CTA → inquiry form.

### Shared shell
- Slim header with the M monogram + nav (Concept · Flagship · Investment · Contact).
- Footer with the three principals' names, emails, phones, and a discreet copyright line.

### Inquiry form (on `/` and `/investment`)
- Fields: Name, Email, Interest (Membership / Investor / Press / Other), Message.
- Zod validation, length limits, success toast. Submission opens a pre-filled mailto to all three principals (no backend needed for v1).
- The three contact cards displayed alongside the form.

### Design tokens
- Background `#F5EFE6` (bone), foreground `#1F1A17` (near-black ink).
- Primary accent `#5C1A24` (deep bordeaux), secondary `#B8654A` (soft terracotta), muted `#E8DCC8`.
- Display: Cormorant Garamond. Body: Inter. Generous letter-spacing on uppercase eyebrow labels.
- Hairline dividers, large white space, slow fade-in on scroll for sections and images.

### Imagery
- Copy key images from the PDF into `src/assets/` (façade marks, interior scenes, greenhouse, vineyard map, floorplan, staircase, courtyard, bedrooms collage, future-openings shots).
- Use them as hero backgrounds, gallery tiles, and accent crops.

### SEO / metadata
- Per-route `head()` with distinct titles, descriptions, og:title/og:description, and og:image (using the route's hero image).

### Out of scope (v1)
- CMS, real backend for the form, authentication, member portal — all can be added later.
