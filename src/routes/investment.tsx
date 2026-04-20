import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/FadeIn";
import { InquirySection } from "@/components/InquirySection";

import diningStill from "@/assets/dining-still.jpg";
import diningRoom from "@/assets/dining-room.jpg";
import gardenPath from "@/assets/garden-path.jpg";

export const Route = createFileRoute("/investment")({
  head: () => ({
    meta: [
      { title: "Investment — La Maison" },
      {
        name: "description",
        content:
          "A USD $3M raise unlocks La Maison's Sainte-Florence flagship. 8% fixed return, 25% upside participation, IRR 15.8–18.5%.",
      },
      { property: "og:title", content: "Invest in La Maison" },
      {
        property: "og:description",
        content:
          "Acquired and construction-ready. Revenue commencing 2027. A long-form opportunity in private living.",
      },
      { property: "og:image", content: diningStill },
      { name: "twitter:image", content: diningStill },
    ],
  }),
  component: InvestmentPage,
});

const highlights = [
  { v: "8%", l: "Fixed Annual Return", note: "Paid to investors throughout the hold period." },
  { v: "25%", l: "Upside Participation", note: "Shared in Maison appreciation and exit value." },
  { v: "100%", l: "Principal Returned", note: "Full principal repaid at the agreed exit." },
  { v: "15.8–18.5%", l: "IRR Potential", note: "Modeled across base and upside scenarios." },
];

const revenue = [
  "Membership Fees",
  "Boutique Hospitality",
  "Décor Sales",
  "Branded Home Goods",
  "Art & Antique Sales",
  "Wine & F&B Offerings",
  "Private Events & Short-Term Occupancy",
  "Vendor & Supplier Sponsorships",
  "Major Brand Partnerships",
];

function InvestmentPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-wine pt-32 text-bone">
        <img
          src={diningStill}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine via-wine/70 to-wine/40" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
          <FadeIn>
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-bone/70">
              Investment · Series A
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.98]">
              A long-form opportunity
              <em className="italic"> in private living.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/85">
              The market is not only ready — it is quietly yearning for a
              concept like La Maison. We invite a small group of partners to
              underwrite the flagship.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <FadeIn>
            <p className="eyebrow">Investor Highlights</p>
            <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Structured for
              <em className="italic text-wine"> conviction.</em>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-px bg-rule/60 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <FadeIn key={h.l} delay={i * 0.06} className="bg-bone p-8 md:p-10">
                <p className="font-display text-5xl text-wine md:text-6xl">{h.v}</p>
                <p className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-ink">
                  {h.l}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {h.note}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE */}
      <section className="border-t border-rule/40 bg-parchment/40 py-28 md:py-36">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <FadeIn>
              <p className="eyebrow">Diversified Revenue Streams</p>
              <h2 className="mt-6 max-w-md font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Multiple high-margin
                <em className="italic text-wine"> income channels.</em>
              </h2>
              <div className="mt-10 overflow-hidden border border-rule/40">
                <img
                  src={diningRoom}
                  alt="Dining room with chinoiserie murals"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <ul className="divide-y divide-rule/40">
                {revenue.map((r, i) => (
                  <li
                    key={r}
                    className="flex items-baseline gap-6 py-5"
                  >
                    <span className="font-display text-sm italic text-wine/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl text-ink">{r}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ESG */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <img
          src={gardenPath}
          alt=""
          aria-hidden
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-30 md:block"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-bone via-bone/95 to-bone/30 md:block" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="eyebrow">ESG · Responsible Development</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                Restoration
                <em className="italic text-wine"> over replacement.</em>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-ink/75">
                La Maison restores historically significant architecture using
                regional craftsmen, low-impact materials, and cultivation
                practices that honor the land. Our houses are designed to
                outlast us — and to leave their landscapes more vital than we
                found them.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHY THE MARKET */}
      <section className="py-28 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-[1fr_1.5fr] md:gap-24 md:px-10">
          <FadeIn>
            <p className="eyebrow">Why Now</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Private members' clubs are the new standard in lifestyle and
              real estate value. La Maison is the only operator pairing the
              members' club model with one-to-one design authorship and a
              fully acquirable interior.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70">
              The competitive set treats hospitality and design as distinct
              categories. We treat them as one — which is why a single Maison
              compounds across nine revenue streams instead of two.
            </p>
          </FadeIn>
        </div>
      </section>

      <InquirySection />
    </div>
  );
}
