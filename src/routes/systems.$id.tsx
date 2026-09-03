import { Link, createFileRoute } from "@tanstack/react-router";
import { BracketAnchor, BracketLink } from "@/components/bracket";
import { AnalysisChart } from "@/components/charts";
import { MediaFrame } from "@/components/media-frame";
import { ModelStage } from "@/components/model-stage";
import { SpecGrid } from "@/components/spec-grid";
import { getSystem, nextSystem, type SystemId } from "@/lib/systems";
import { spaced } from "@/lib/utils";

export const Route = createFileRoute("/systems/$id")({ component: SystemPage });

function SystemPage() {
  const { id } = Route.useParams();
  const system = getSystem(id);

  if (!system) {
    return (
      <main className="flex min-h-svh flex-col items-center justify-center px-6 pt-14 text-center">
        <h1 className="text-4xl tracking-[0.14em]">Not on the line</h1>
        <p className="mt-3 text-sm text-muted">That stencil is not Fulmen, Pilum, Contus, or Aquila.</p>
        <div className="mt-8">
          <BracketLink to="/systems">The line</BracketLink>
        </div>
      </main>
    );
  }

  const next = nextSystem(system.id as SystemId);

  return (
    <main>
      <section className="relative flex min-h-[88svh] items-end overflow-hidden">
        <img src={system.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/15" />
        <div className="relative z-10 w-full px-5 pt-24 pb-14 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase">
            {system.stencil} · radio: {system.radio}
          </div>
          <h1 className="mt-3 text-[clamp(3rem,10vw,7.5rem)] tracking-[0.14em]">{spaced(system.name)}</h1>
          <p className="mt-2 font-display text-base tracking-[0.18em] text-muted uppercase sm:text-lg">{system.subtitle}</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">{system.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BracketLink to="/systems/$id" params={{ id: system.id }} hash="geometry">
              Geometry
            </BracketLink>
            <BracketLink to="/systems/$id" params={{ id: system.id }} hash="analysis">
              Analysis
            </BracketLink>
          </div>
        </div>
      </section>

      <section className="grid border-t border-line lg:grid-cols-[1.1fr_0.9fr]">
        <div className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Overview</div>
          <h2 className="mt-3 text-4xl tracking-[0.08em]">Features + specifications</h2>
          <p className="mt-4 max-w-xl text-sm text-muted">{system.note} {system.lede}</p>
          <SpecGrid specs={system.specs} className="mt-8" />
        </div>
        <div className="grid grid-cols-2 gap-px border-t border-line bg-line lg:border-t-0 lg:border-l">
          {system.highlights.map((item) => (
            <div key={item.label} className="bg-bg px-5 py-8">
              <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">{item.label}</div>
              <div className="font-display mt-2 text-3xl tracking-[0.06em] uppercase">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Build qualities</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em]">On the public page</h2>
        <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
          {system.features.map((feature, i) => (
            <article key={feature.title} className="bg-bg px-5 py-8">
              <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                0{i + 1} / 0{system.features.length}
              </div>
              <h3 className="mt-4 text-2xl tracking-[0.1em]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="geometry" className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Geometry</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em]">Handle the concept.</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Abstract stand-in for {system.name}. Not flight hardware. Drag to rotate.
        </p>
        <div className="mt-8">
          <ModelStage model={system.id} />
        </div>
      </section>

      <section id="analysis" className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Analysis pack</div>
            <h2 className="mt-3 text-4xl tracking-[0.08em]">{system.chartTitle}</h2>
            <p className="mt-3 max-w-xl text-sm text-muted">{system.chartCaption}</p>
          </div>
          <BracketAnchor href={system.csvHref} download>
            {system.csvLabel}
          </BracketAnchor>
        </div>
        <div className="mt-8">
          <AnalysisChart kind={system.analysisKind} />
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Gallery / 0{system.gallery.length}</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em]">Study stills</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {system.gallery.map((shot, i) => (
            <MediaFrame key={shot.src} label={shot.caption} meta={`0${i + 1} / 0${system.gallery.length}`}>
              <img src={shot.src} alt="" className="h-56 w-full object-cover sm:h-64" />
            </MediaFrame>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <Link to="/systems/$id" params={{ id: next.id }} className="group block px-5 py-14 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Next on the line</div>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl tracking-[0.16em] sm:text-6xl">{spaced(next.name)}</h2>
            <span className="font-display text-xs tracking-[0.22em] text-muted uppercase group-hover:text-fg">
              [[ Continue ]]
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{next.subtitle}</p>
        </Link>
      </section>
    </main>
  );
}
