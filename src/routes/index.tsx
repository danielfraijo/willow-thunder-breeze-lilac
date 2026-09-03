import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BracketLink } from "@/components/bracket";
import { ModelStage } from "@/components/model-stage";
import { MediaFrame } from "@/components/media-frame";
import { SystemChapter } from "@/components/system-chapter";
import { house, systemList, type SystemId } from "@/lib/systems";
import { spaced } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [model, setModel] = useState<SystemId>("fulmen");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <main>
      <section className="relative flex min-h-svh items-end overflow-hidden">
        {reduceMotion ? (
          <img src="/images/hero-range.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-range.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
        <div className="relative z-10 w-full px-5 pt-24 pb-16 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.36em] text-accent uppercase">Concept studies</div>
          <h1 className="mt-3 text-[clamp(3.4rem,12vw,9rem)] tracking-[0.16em]">{spaced("Vespasian")}</h1>
          <p className="mt-2 font-display text-sm tracking-[0.34em] text-muted uppercase sm:text-base">
            Fulmen · Pilum · Contus · Aquila
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{house.tagline} Four Latin names. Vigil is the software. Analysis packs sit under each airframe: CFD, CBAERO, FEA. Public pages stay at concept level.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BracketLink to="/systems" variant="solid">
              The line
            </BracketLink>
            <BracketLink to="/" hash="geometry">
              Geometry
            </BracketLink>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-3 border-y border-line px-5 py-3 font-mono text-[10px] tracking-[0.22em] text-muted uppercase sm:px-8">
        <span>Vespasian</span>
        <span>{house.stencils}</span>
        <span>Public · concept</span>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Line</div>
        <h2 className="mt-3 max-w-3xl text-4xl tracking-[0.08em] sm:text-6xl">{house.line}</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">{house.note}</p>
      </section>

      {systemList.map((system, i) => (
        <SystemChapter key={system.id} system={system} reverse={i % 2 === 1} />
      ))}

      <section id="geometry" className="border-t border-line px-5 py-20 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Geometry</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em] sm:text-6xl">Handle the concept.</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Drag to rotate. These are abstract stand-ins, not flight hardware. Drop a real .glb later; the frame stays.
        </p>
        <div className="mt-8">
          <ModelStage model={model} onModelChange={setModel} showSwitcher />
        </div>
      </section>

      <section className="grid border-t border-line lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10">
          <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Software</div>
          <h2 className="mt-3 text-4xl tracking-[0.1em] sm:text-6xl">{spaced("Vigil")}</h2>
          <p className="mt-2 font-display tracking-[0.16em] text-muted uppercase">The picture</p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
            Vigil stays off the airframes. If a fifth word is needed, it is the software: the common picture around Fulmen, Pilum, Contus, and Aquila.
          </p>
          <div className="mt-8">
            <BracketLink to="/vigil">Open Vigil</BracketLink>
          </div>
        </div>
        <MediaFrame label="VGL · common picture" meta="Range control" className="min-h-[48vh]">
          <img src="/images/operators.jpg" alt="" className="h-full min-h-[48vh] w-full object-cover" />
        </MediaFrame>
      </section>

      <section className="border-t border-line px-5 py-20 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Data</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em] sm:text-6xl">How plots get on the page.</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Keep the filenames. Export CSV from the solver. Overwrite the file. CFD, CBAERO, and FEA packs sit under the airframes.
        </p>
        <div className="mt-8">
          <BracketLink to="/analysis">Open analysis</BracketLink>
        </div>
      </section>
    </main>
  );
}
