import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";

import sfLogo from "@/assets/sf-logo.png";
import exterior from "@/assets/exterior-doors.jpg";
import map from "@/assets/bordeaux-map.jpg";
import floorplan from "@/assets/floorplan.jpg";
import staircase from "@/assets/staircase.jpg";
import courtyard from "@/assets/courtyard.jpg";
import bedroom from "@/assets/bedroom.jpg";
import diningRoom from "@/assets/dining-room.jpg";
import diningStill from "@/assets/dining-still.jpg";

export const Route = createFileRoute("/maison-sainte-florence")({
  head: () => ({
    meta: [
      { title: "Maison Sainte-Florence — La Maison Flagship" },
      {
        name: "description",
        content:
          "The flagship private members' experience on the Dordogne, within Saint-Émilion's historic vineyards.",
      },
      {
        property: "og:title",
        content: "Maison Sainte-Florence — La Maison Flagship",
      },
      {
        property: "og:description",
        content:
          "A private members' experience along the Dordogne — the inaugural La Maison Designer Showhouse in Bordeaux.",
      },
      { property: "og:image", content: exterior },
      { name: "twitter:image", content: exterior },
    ],
  }),
  component: FlagshipPage,
});

const gallery = [
  { src: staircase, alt: "Wrought-iron spiral staircase rising through the entrance hall", caption: "The Staircase" },
  { src: courtyard, alt: "Ivy-arched courtyard threshold", caption: "The Courtyard" },
  { src: diningRoom, alt: "Hand-painted chinoiserie dining room", caption: "The Dining Room" },
  { src: bedroom, alt: "Restored ceiling reliefs in a guest suite", caption: "The Suites" },
  { src: diningStill, alt: "Still life of lemons and copper in the kitchen", caption: "The Kitchen" },
  { src: exterior, alt: "Arched front doors opening to the gardens", caption: "The Threshold" },
];

function FlagshipPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <img
          src={exterior}
          alt="The arched entrance doors of Maison Sainte-Florence opening to the gardens"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48">
          <FadeIn>
            <img
              src={sfLogo}
              alt="Maison Sainte-Florence emblem"
              className="h-32 w-auto brightness-0 invert md:h-40"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-[0.72rem] uppercase tracking-[0.42em] text-bone/70">
              The Flagship Members' Designer Showhouse
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1] text-bone">
              An authored house on
              <em className="italic"> the Dordogne.</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[1fr_1.5fr] md:gap-24 md:px-10">
          <FadeIn>
            <p className="eyebrow">A Living Atelier</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Maison Sainte-Florence is the inaugural La Maison house — a
              private residence reimagined as a living showroom, with every
              surface, antique, and textile authored by Lozano Jolas Interiors
              and acquirable in residence.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70">
              Members are received by appointment. The house operates as a
              one-to-one atelier — design consultation, hospitality, and quiet
              retreat braided into a single experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-rule/40 bg-parchment/40 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <FadeIn>
              <p className="eyebrow">A Discreetly Connected Retreat</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Saint-Émilion
                <em className="italic text-wine"> · Bordeaux.</em>
              </h2>
              <div className="mt-8 max-w-md space-y-5 text-base leading-relaxed text-ink/75">
                <p>
                  The Maison sits in a secluded riverside setting along the
                  Dordogne, balancing rural calm with exceptional connectivity
                  to Bordeaux's private aviation infrastructure.
                </p>
                <p>
                  Saint-Émilion's historic vineyards, the Atlantic coast, and
                  the great châteaux of the Médoc all lie within an easy drive
                  — discreetly arranged for international members.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="overflow-hidden border border-rule/40 bg-bone p-4">
                <img
                  src={map}
                  alt="Watercolor map of Bordeaux's Rive Gauche and Rive Droite wine regions"
                  className="h-full w-full object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DESIGN INTENT */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <FadeIn>
            <p className="eyebrow">Design Intent</p>
            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Six bedrooms,
              <em className="italic text-wine"> one continuous narrative.</em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-16 overflow-hidden border border-rule/40 bg-bone p-4">
            <img
              src={floorplan}
              alt="Architectural floor plan study of the bedroom level by ButonCipel architectes"
              className="h-full w-full object-contain"
            />
          </FadeIn>

          <div className="mt-20 grid gap-px bg-rule/40 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <FadeIn
                key={g.caption}
                delay={(i % 3) * 0.08}
                className="group bg-bone"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between p-5">
                  <p className="font-display text-xl text-ink">{g.caption}</p>
                  <p className="text-[0.62rem] uppercase tracking-[0.3em] text-ink/50">
                    {String(i + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule/40 bg-wine py-28 text-bone md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <FadeIn>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-bone/70">
              By appointment only
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-6xl">
              <em className="italic">Visits to Maison Sainte-Florence</em> are
              arranged in private correspondence.
            </h2>
            <a
              href="/#inquire"
              className="mt-12 inline-flex items-center gap-4 border border-bone/80 px-8 py-4 text-xs uppercase tracking-[0.28em] text-bone transition-all hover:bg-bone hover:text-wine"
            >
              Request an introduction
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
