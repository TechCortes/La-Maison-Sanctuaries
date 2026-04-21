import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import markWine from "@/assets/la-maison-mark-wine.png";

const nav = [
  { to: "/", label: "Concept" },
  { to: "/maison-sainte-florence", label: "Flagship" },
  { to: "/investment", label: "Investment" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    return router.subscribe("onResolved", () => setOpen(false));
  }, [router]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-rule/60 bg-bone/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={markWine}
            alt=""
            aria-hidden
            className="h-24 w-auto opacity-90 transition-opacity group-hover:opacity-100 md:h-36"
          />
          <span className="font-display text-2xl leading-none tracking-tight text-wine">
            La Maison
          </span>
          <span className="hairline hidden h-px w-8 bg-wine/40 md:block" />
          <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.32em] text-ink/60 md:block">
            Private Design Sanctuaries
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-[0.78rem] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-wine"
              activeProps={{ className: "text-wine" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-wine transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="#inquire"
            className="rounded-none border border-wine px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-wine transition-all hover:bg-wine hover:text-bone"
          >
            Inquire
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "h-px w-6 bg-ink transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-ink transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-ink transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-rule/60 bg-bone md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-rule/40 py-4 text-sm font-medium uppercase tracking-[0.22em] text-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#inquire"
              onClick={() => setOpen(false)}
              className="mt-6 inline-block border border-wine px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.24em] text-wine"
            >
              Inquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
