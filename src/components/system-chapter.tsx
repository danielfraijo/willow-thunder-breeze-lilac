import type { System } from "@/lib/systems";
import { spaced } from "@/lib/utils";
import { BracketLink } from "./bracket";
import { MediaFrame } from "./media-frame";
import { SpecGrid } from "./spec-grid";

export function SystemChapter({ system, reverse = false }: { system: System; reverse?: boolean }) {
  return (
    <article className="border-t border-line">
      <div className="grid lg:grid-cols-2">
        <MediaFrame
          label={`${system.stencil} · ${system.name}`}
          meta={system.classShort}
          className={reverse ? "min-h-[52vh] lg:order-2" : "min-h-[52vh]"}
        >
          <img src={system.hero} alt="" className="h-full min-h-[52vh] w-full object-cover" />
        </MediaFrame>
        <div className="flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-14">
          <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">
            {system.stencil} · {system.classLabel}
          </div>
          <h2 className="mt-3 text-5xl tracking-[0.16em] sm:text-6xl">{spaced(system.name)}</h2>
          <p className="mt-2 font-display text-lg tracking-[0.14em] text-muted uppercase">{system.meaning}</p>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">{system.lede}</p>
          <SpecGrid specs={system.highlights} className="mt-8" />
          <div className="mt-8">
            <BracketLink to={`/systems/${system.id}`}>Learn more</BracketLink>
          </div>
        </div>
      </div>
    </article>
  );
}
