import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


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
        <Link to="/" className="group flex items-center gap-5">
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "font-display text-[1.5rem] leading-none tracking-[0.04em] transition-colors",
                scrolled ? "text-wine" : "text-white",
              )}
            >
              La Maison
            </span>
            <span className="hidden items-center gap-3 md:flex">
              <span
                className={cn(
                  "h-px w-6 transition-colors",
                  scrolled ? "bg-wine/40" : "bg-white/50",
                )}
              />
              <span
                className={cn(
                  "text-[0.6rem] font-medium uppercase tracking-[0.36em] transition-colors",
                  scrolled ? "text-ink/60" : "text-white/80",
                )}
              >
                Private Design Sanctuaries
              </span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "group relative text-[0.78rem] font-medium uppercase tracking-[0.22em] transition-colors",
                scrolled
                  ? "text-ink/70 hover:text-wine"
                  : "text-white hover:text-white/80",
              )}
              activeProps={{ className: scrolled ? "text-wine" : "text-white" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-500 group-hover:w-full",
                  scrolled ? "bg-wine" : "bg-white",
                )}
              />
            </Link>
          ))}
          <a
            href="#inquire"
            className={cn(
              "rounded-none border px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-all",
              scrolled
                ? "border-wine text-wine hover:bg-wine hover:text-bone"
                : "border-white text-white hover:bg-white hover:text-wine",
            )}
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
