import { FadeIn } from "./FadeIn";
import { InquiryForm } from "./InquiryForm";

const principals = [
  {
    name: "Holly-Mae Post",
    role: "Partner & Memberships",
    email: "Holly-Mae@postproj.com",
  },
];

export function InquirySection() {
  return (
    <section
      id="inquire"
      className="scroll-mt-24 border-t border-rule/40 bg-parchment/30 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24">
          <div>
            <FadeIn>
              <p className="eyebrow">By Invitation</p>
              <h2 className="mt-5 max-w-md font-display text-5xl leading-[1.05] text-ink md:text-6xl">
                A private correspondence.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                La Maison welcomes a small circle of members, investors, and
                collaborators. Share a brief note and one of our principals will
                respond personally.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-12 space-y-8">
              {principals.map((p) => (
                <div
                  key={p.name}
                  className="border-l border-wine/40 pl-5"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.24em] text-wine">
                    {p.role}
                  </p>
                  <p className="mt-1 font-display text-2xl text-ink">{p.name}</p>
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-1 block text-sm text-ink/70 hover:text-wine"
                  >
                  {p.email}
                  </a>
                </div>
              ))}
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="border border-rule/60 bg-bone p-8 md:p-12">
              <InquiryForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
