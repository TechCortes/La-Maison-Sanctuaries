import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";


import exterior from "@/assets/exterior-doors.jpg";
import map from "@/assets/bordeaux-map.jpg";

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
function FlagshipPage() {
  return (
    <div className="bg-wine text-bone">
      {/* INTRO */}
      <section className="py-28 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[1fr_1.5fr] md:gap-24 md:px-10">
          <FadeIn>
            <p className="eyebrow !text-ink">A Private Members' Experience</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Maison Sainte-Florence is the inaugural La Maison house — a
              private members' experience conceived as a living showroom, with
              every surface, antique, and textile authored by Lozano Jolas
              Interiors and acquirable in residence.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75">
              Members are received by appointment. The house operates as a
              one-to-one atelier — design consultation, hospitality, and quiet
              retreat braided into a single experience reserved for the
              membership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-t border-ink/15 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <FadeIn>
              <p className="eyebrow !text-ink">A Discreetly Connected Retreat</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Saint-Émilion
                <em className="italic text-ink/70"> · Bordeaux.</em>
              </h2>
              <div className="mt-8 max-w-md space-y-5 text-base leading-relaxed text-ink/80">
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
              <div className="overflow-hidden border border-ink/15 bg-bone p-4">
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

      <section className="border-t border-ink/15 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <FadeIn>
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-ink/70">
              By appointment only
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              <em className="italic">Visits to Maison Sainte-Florence</em> are
              arranged in private correspondence.
            </h2>
            <a
              href="/#inquire"
              className="mt-12 inline-flex items-center gap-4 border border-ink/80 px-8 py-4 text-xs uppercase tracking-[0.28em] text-ink transition-all hover:bg-ink hover:text-sage"
            >
              Request an introduction
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
