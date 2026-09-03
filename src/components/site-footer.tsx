import { Link } from "@tanstack/react-router";
import { house, systemList } from "@/lib/systems";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-eagle.png" alt="" className="h-8 w-auto" />
            <span className="font-display text-sm tracking-[0.28em] uppercase">{house.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">{house.tagline} Public pages stay at concept level.</p>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">Line</div>
          <ul className="mt-3 space-y-2">
            {systemList.map((system) => (
              <li key={system.id}>
                <Link
                  to="/systems/$id"
                  params={{ id: system.id }}
                  className="font-display text-sm tracking-[0.16em] text-fg uppercase hover:text-accent"
                >
                  {system.stencil} · {system.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">House</div>
          <ul className="mt-3 space-y-2 font-display text-sm tracking-[0.16em] uppercase">
            <li>
              <Link to="/vigil" className="hover:text-accent">
                Vigil
              </Link>
            </li>
            <li>
              <Link to="/analysis" className="hover:text-accent">
                Analysis
              </Link>
            </li>
            <li>
              <Link to="/company" className="hover:text-accent">
                Company
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-5 sm:px-6">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          {house.name} · concept studies
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">{house.stencils}</span>
      </div>
    </footer>
  );
}
