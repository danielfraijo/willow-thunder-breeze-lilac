import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { house, systemList } from "@/lib/systems";
import { cn } from "@/lib/utils";

const links = [
  { to: "/systems", label: "Systems" },
  { to: "/vigil", label: "Vigil" },
  { to: "/analysis", label: "Analysis" },
  { to: "/company", label: "Company" },
];

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled || open ? "border-b border-line bg-bg/95" : "bg-gradient-to-b from-bg/80 to-transparent",
      )}
    >
      <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-eagle.png" alt="" className="h-8 w-auto" />
          <span className="font-display text-sm tracking-[0.32em] uppercase">{house.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "font-display text-[11px] tracking-[0.22em] uppercase transition-colors duration-150",
                pathname.startsWith(link.to) ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-line text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open ? (
        <div className="flex min-h-[calc(100svh-3.5rem)] flex-col bg-bg px-6 pt-6 pb-10 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-display border-b border-line py-4 text-3xl tracking-[0.12em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-px bg-line">
            {systemList.map((system) => (
              <Link key={system.id} to="/systems/$id" params={{ id: system.id }} className="bg-bg px-4 py-5">
                <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">{system.stencil}</div>
                <div className="font-display mt-1 text-2xl tracking-[0.1em] uppercase">{system.name}</div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
