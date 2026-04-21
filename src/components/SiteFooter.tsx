import { Link } from "@tanstack/react-router";
import markWine from "@/assets/la-maison-mark-wine.png";

const principals = [
  {
    name: "Lauren Lozano Ziol",
    role: "Co-Founder · Design Direction",
  },
  {
    name: "Michelle Jolas",
    role: "Co-Founder · Atelier",
  },
  {
    name: "Holly-Mae Post",
    role: "Managing Partner & Membership",
    email: "Holly-Mae@postproj.com",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule/60 bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <img
              src={markWine}
              alt="La Maison house mark"
              className="mb-5 h-20 w-auto opacity-85"
            />
            <p className="font-display text-3xl text-wine">La Maison</p>
            <p className="mt-3 text-sm text-ink/60">
              Private Design Sanctuaries.
              <br />
              By invitation.
            </p>
            <div className="mt-8 flex gap-6 text-[0.7rem] uppercase tracking-[0.24em] text-ink/60">
              <Link to="/" className="hover:text-wine">
                Concept
              </Link>
              <Link to="/maison-sainte-florence" className="hover:text-wine">
                Flagship
              </Link>
              <Link to="/investment" className="hover:text-wine">
                Investment
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {principals.map((p) => (
              <div key={p.name}>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-wine">
                  {p.role}
                </p>
                <p className="mt-2 font-display text-xl text-ink">{p.name}</p>
                {p.email && (
                  <a
                    href={`mailto:${p.email}`}
                    className="mt-3 block text-sm text-ink/70 hover:text-wine"
                  >
                    {p.email}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-rule/40 pt-6 text-xs text-ink/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} La Maison. All rights reserved.</p>
          <p className="italic">Maison Sainte-Florence · Bordeaux · Saint-Émilion</p>
        </div>
      </div>
    </footer>
  );
}
