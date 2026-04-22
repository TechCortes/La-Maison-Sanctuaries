import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { InquirySection } from "@/components/InquirySection";

import lmLogo from "@/assets/lm-logo.jpg";
import hallway from "@/assets/hallway.jpg";
import interiorTapestry from "@/assets/interior-tapestry.jpg";
import conceptGathering from "@/assets/concept-salon.jpg";
import diningRoom from "@/assets/maison-sainte-florence-bar.jpg";
import diningStill from "@/assets/dining-still.jpg";
import courtyard from "@/assets/courtyard.jpg";
import italy from "@/assets/italy.jpg";
import uk from "@/assets/uk.jpg";
import hamptons from "@/assets/hamptons.jpg";
import caribbean from "@/assets/caribbean.jpg";
import foundersBg from "@/assets/founders-bg.jpg";
import markBone from "@/assets/la-maison-mark-bone.png";
import markWine from "@/assets/la-maison-mark-wine.png";
import laMaisonLogo from "@/assets/la-maison-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Maison — Private Design Sanctuaries" },
      {
        name: "description",
        content:
          "A one-to-one design sanctuary where deeply private interiors double as living showrooms. By invitation.",
      },
      { property: "og:title", content: "La Maison — Private Design Sanctuaries" },
      {
        property: "og:description",
        content:
          "Private members' design sanctuaries. Maison Sainte-Florence is the flagship in Bordeaux's Saint-Émilion.",
      },
      { property: "og:image", content: lmLogo },
      { name: "twitter:image", content: lmLogo },
    ],
  }),
  component: LandingPage,
});

const pillars = [
  {
    n: "01",
    title: "Design & Art of Living",
    body: "Curated interiors authored by master designers, conceived as authored environments rather than catalogs.",
  },
  {
    n: "02",
    title: "Experiential Luxury",
    body: "Private dinners, atelier visits, and quietly orchestrated gatherings — luxury rendered as occasion.",
  },
  {
    n: "03",
    title: "Wellness & Restoration",
    body: "Bespoke programs of rest, treatment, and seasonal cuisine grounded in the rhythm of the land.",
  },
  {
    n: "04",
    title: "The Living Showroom",
    body: "Every object, fabric, and finish is acquirable — the Maison itself is the sample book.",
  },
  {
    n: "05",
    title: "Sustainability",
    body: "Restoration over replacement. Provenance over novelty. A long view of the houses we keep.",
  },
];

const founders = [
  {
    name: "Lauren Lozano Ziol",
    line: "Lauren Lozano Ziol's extensive experience in interior design, antiques, and art history has gained her recognition across the luxury interior design space, being featured in international publications all over the world including Elle Decor, Country & Town House Interiors, Wall Street Journal, Architectural Digest, and more. With projects around the globe, her passion shines, pulling inspiration from her degrees in both Interior Design and Art History — with an additional year spent studying Art History at University of Oxford. Living in London, Paris, and Chicago, along with her deep portfolio of travels, has helped Lauren refine her eye for history, detail, and cosmopolitan design, as well as inspire her own line of furniture available through the Lozano Jolas Interiors. Lauren is the principal interior designer of the Lozano Jolas Interiors London and Chicago offices.",
  },
  {
    name: "Michelle Jolas",
    line: "As a co-founder of Lozano Jolas Interiors, Michelle Jolas brings unparalleled skill in graphic and interior design to the table, helping propel Lozano Jolas Interiors to a position as a top interior design firm. Michelle's affection for design spans from the graphic arts to cultivated interiors to worldview photography. Before Lozano Jolas Interiors, she gained experience at top global advertising agencies by managing campaigns for luxury brands including The Peninsula Chicago, Beverly Hills, New York and Hästens Beds. After owning a boutique graphic design and advertising agency for 17 years, she joined forces with Lauren to now share her talent through a keen eye for vintage finds and intriguing photography available for purchase through the Lozano Jolas Interiors.",
  },
  {
    name: "Holly-Mae Post",
    line: "Holly-Mae Post began her professional journey in FinTech, joining the mergers and acquisitions team of an Indian-owned financial technology firm. Motivated by the brilliance and ambition around her, Holly-Mae pursued a degree at New York University in Sustainability, Economics, and Business Leadership, followed by a specialized certification in Energy. During this transformative period, she made a bold industry shift — first into luxury retail with one of America's most iconic fashion houses, and later into high-end construction, where she discovered her true calling. Today, as an owner's representative, Holly-Mae empowers clients to bring their visions to life, delivering beautiful, complex projects around the world that reflect architectural excellence and the values of creativity, collaboration, and purpose that define her brand.",
  },
];

function LandingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-wine">
        <div className="absolute inset-0">
          <img
            src={hallway}
            alt="A long corridor of hand-painted panels at La Maison"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wine/70 via-wine/50 to-wine/90" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14"
          >
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.42em] text-bone/70">
                Maison · Sainte-Florence · Bordeaux
              </p>
              <h1 className="mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] text-bone">
                La Maison.
                <br />
                <em className="font-light italic text-bone/85">
                  Private design sanctuaries.
                </em>
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-bone/80">
                A one-to-one design sanctuary where deeply private interiors
                double as living showrooms — curated for those who value trust,
                authorship, and considered luxury.
              </p>
              <div className="mt-14 flex flex-wrap items-center gap-8">
                <a
                  href="#inquire"
                  className="group inline-flex items-center gap-4 border border-bone/80 px-8 py-4 text-xs uppercase tracking-[0.28em] text-bone transition-all hover:bg-bone hover:text-wine"
                >
                  Request Introduction
                  <span className="inline-block h-px w-6 bg-bone transition-all group-hover:w-12 group-hover:bg-wine" />
                </a>
                <Link
                  to="/maison-sainte-florence"
                  className="text-xs uppercase tracking-[0.28em] text-bone/70 underline-offset-8 hover:text-bone hover:underline"
                >
                  Visit the Flagship →
                </Link>
              </div>
            </div>
            <img
              src={laMaisonLogo}
              alt="La Maison emblem"
              className="order-first w-[14rem] justify-self-start md:order-none md:w-[22rem] md:justify-self-end lg:w-[26rem]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[0.62rem] uppercase tracking-[0.5em] text-bone/50"
        >
          Scroll
        </motion.div>
      </section>

      {/* CONCEPT */}
      <section className="relative py-28 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:gap-24">
            <FadeIn>
              <p className="eyebrow">The Concept</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-7xl">
                <em className="italic text-wine">"The market is not only ready —</em>
                <br />
                it is quietly yearning for a concept like La Maison."
              </h2>
              <div className="mt-10 max-w-lg space-y-6 text-base leading-relaxed text-ink/75">
                <p>
                  Today's discerning individuals crave intimacy, curation, and
                  privacy. Private members' clubs are becoming the new standard
                  in lifestyle and real estate value.
                </p>
                <p>
                  La Maison answers that appetite with houses authored as
                  living showrooms — every textile, antique, and wall surface
                  acquirable, every visit choreographed in private.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={conceptGathering}
                  alt="Two women in evening gowns seated on a damask sofa within a candlelit Italian salon"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-rule/40 bg-parchment/40 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <FadeIn>
            <p className="eyebrow">Five Brand Pillars</p>
            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              The architecture of a quieter luxury.
            </h2>
          </FadeIn>

          <div className="mt-20 grid gap-px bg-rule/60 md:grid-cols-6">
            {pillars.map((p, i) => (
              <FadeIn
                key={p.n}
                delay={i * 0.08}
                className={`bg-parchment/40 p-10 md:p-12 ${
                  i < 3 ? "md:col-span-2" : "md:col-span-3"
                }`}
              >
                <p className="font-display text-4xl italic text-wine/70">
                  {p.n}
                </p>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {p.body}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP TEASER */}
      <section className="relative py-28 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={diningRoom}
                  alt="Teal-lacquered bar room at Maison Sainte-Florence with marble-topped island, candelabra, and gilt portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="eyebrow">Flagship · Saint-Émilion</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Maison
                <br />
                <em className="italic text-wine">Sainte-Florence.</em>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
                Set along the Dordogne River and within the historic vineyards
                of Saint-Émilion, the flagship is the inaugural private
                members' experience — a living atelier conceived by Lozano
                Jolas Interiors.
              </p>
              <Link
                to="/maison-sainte-florence"
                className="mt-10 inline-flex items-center gap-4 border border-wine bg-bone px-8 py-4 text-xs uppercase tracking-[0.28em] text-wine transition-all hover:bg-wine hover:text-bone"
              >
                Enter the Flagship
                <span className="inline-block h-px w-6 bg-wine transition-all group-hover:w-12" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* INVESTMENT TEASER */}
      <section className="relative overflow-hidden bg-wine py-28 text-bone md:py-36">
        <img
          src={diningStill}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-wine/60" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-24">
            <FadeIn>
              <p className="text-[0.7rem] uppercase tracking-[0.32em] text-bone/70">
                Investment
              </p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
                A long-form opportunity in
                <em className="italic text-bone/90"> private living.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base leading-relaxed text-bone/85">
                Acquired and construction-ready. A USD $3M raise unlocks the
                Sainte-Florence flagship, with revenue beginning 2027 and IRR
                projected at 15.8–18.5%.
              </p>
              <Link
                to="/investment"
                className="mt-10 inline-flex items-center gap-4 border border-bone/80 px-8 py-4 text-xs uppercase tracking-[0.28em] text-bone transition-all hover:bg-bone hover:text-wine"
              >
                Investment Overview
              </Link>
            </FadeIn>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-px bg-bone/15 md:grid-cols-4">
            {[
              ["8%", "Fixed annual return"],
              ["25%", "Upside participation"],
              ["18.5%", "IRR potential"],
              ["2027", "Revenue commencement"],
            ].map(([v, l]) => (
              <div key={l} className="bg-wine p-8 md:p-10">
                <p className="font-display text-5xl text-bone">{v}</p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-bone/70">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE OPENINGS */}
      <section className="border-t border-rule/40 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <FadeIn>
            <p className="eyebrow">Portfolio Pipeline</p>
            <h2 className="mt-6 max-w-xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Houses
              <em className="italic text-wine"> in waiting.</em>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { img: italy, label: "Italy" },
              { img: uk, label: "United Kingdom" },
              { img: hamptons, label: "United States" },
              { img: caribbean, label: "The Caribbean" },
            ].map((o, i) => (
              <FadeIn key={o.label} delay={i * 0.1}>
                <div className="group relative overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={o.img}
                      alt={o.label}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-rule/40 py-5">
                    <p className="font-display text-2xl text-ink">{o.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="relative overflow-hidden border-t border-rule/40 py-28 md:py-36">
        <img
          src={foundersBg}
          alt=""
          aria-hidden
          className="absolute right-0 top-0 hidden h-full w-1/2 object-cover opacity-25 md:block"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-bone via-bone/95 to-bone/30 md:block" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <FadeIn>
            <img
              src={markWine}
              alt=""
              aria-hidden
              className="mb-8 h-16 w-auto opacity-40"
            />
            <p className="eyebrow">The Principals</p>
            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Three voices,
              <em className="italic text-wine"> one vision.</em>
            </h2>
          </FadeIn>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {founders.map((f, i) => (
              <FadeIn key={f.name} delay={i * 0.1}>
                <div className="border-t border-wine/40 pt-6">
                  <p className="font-display text-2xl text-ink">{f.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    {f.line}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COURTYARD INTERLUDE */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={courtyard}
          alt="An ivy-clad courtyard threshold leading into Maison Sainte-Florence"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent" />
      </section>

      <InquirySection />
    </div>
  );
}
