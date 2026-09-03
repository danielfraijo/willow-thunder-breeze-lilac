import { createFileRoute } from "@tanstack/react-router";
import { BracketLink } from "@/components/bracket";
import { MediaFrame } from "@/components/media-frame";
import { spaced } from "@/lib/utils";

export const Route = createFileRoute("/vigil")({ component: VigilPage });

const pillars = [
  {
    title: "Picture",
    body: "One common picture around Fulmen, Pilum, Contus, and Aquila. Vigil stays off the airframes.",
  },
  {
    title: "Packs",
    body: "CFD, CBAERO, and FEA sit under each airframe. Plots get on the page from the solver export.",
  },
  {
    title: "Restraint",
    body: "Public pages stay at concept level. Name, class, stencil, and which analysis files exist.",
  },
  {
    title: "Geometry",
    body: "The viewer is a stand-in. Drop a real .glb later; the frame stays.",
  },
];

function VigilPage() {
  return (
    <main>
      <section className="relative flex min-h-[78svh] items-end overflow-hidden">
        <img src="/images/vigil.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/25" />
        <div className="relative z-10 w-full px-5 pt-24 pb-14 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase">Software · VGL</div>
          <h1 className="mt-3 text-[clamp(3rem,10vw,7.5rem)] tracking-[0.16em]">{spaced("Vigil")}</h1>
          <p className="mt-2 font-display text-base tracking-[0.2em] text-muted uppercase">The picture</p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Vigil stays off the airframes. If a fifth word is needed, it is the software: the common picture around Fulmen, Pilum, Contus, and Aquila.
          </p>
        </div>
      </section>

      <section className="grid border-t border-line md:grid-cols-2">
        {pillars.map((pillar, i) => (
          <article key={pillar.title} className="border-b border-line px-5 py-10 md:odd:border-r sm:px-8">
            <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">0{i + 1} / 04</div>
            <h2 className="mt-4 text-3xl tracking-[0.12em]">{pillar.title}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{pillar.body}</p>
          </article>
        ))}
      </section>

      <section className="grid border-t border-line lg:grid-cols-2">
        <MediaFrame label="VGL · range picture" meta="Operators" className="min-h-[48vh]">
          <img src="/images/operators.jpg" alt="" className="h-full min-h-[48vh] w-full object-cover" />
        </MediaFrame>
        <div className="flex flex-col justify-center px-5 py-14 sm:px-10">
          <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Around the line</div>
          <h2 className="mt-3 text-4xl tracking-[0.08em]">A common picture.</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            Analysis packs live under the airframes. Vigil is the software that holds them in one place. This page is the stub until screenshots replace the stills.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BracketLink to="/analysis">Analysis</BracketLink>
            <BracketLink to="/systems">The line</BracketLink>
          </div>
        </div>
      </section>
    </main>
  );
}
