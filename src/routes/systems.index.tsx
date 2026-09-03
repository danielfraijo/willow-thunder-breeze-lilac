import { Link, createFileRoute } from "@tanstack/react-router";
import { MediaFrame } from "@/components/media-frame";
import { house, systemList } from "@/lib/systems";
import { spaced } from "@/lib/utils";

export const Route = createFileRoute("/systems/")({ component: SystemsIndex });

function SystemsIndex() {
  return (
    <main className="pt-14">
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Line</div>
        <h1 className="mt-3 text-5xl tracking-[0.1em] sm:text-7xl">{house.line}</h1>
        <p className="mt-5 max-w-2xl text-sm text-muted">{house.note} Public pages stay at concept level.</p>
      </section>
      <section className="grid border-t border-line sm:grid-cols-2">
        {systemList.map((system) => (
          <Link
            key={system.id}
            to="/systems/$id"
            params={{ id: system.id }}
            className="group border-b border-line sm:odd:border-r"
          >
            <MediaFrame label={`${system.stencil} · ${system.classShort}`} meta="Concept" className="border-0">
              <img
                src={system.hero}
                alt=""
                className="h-[42vh] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </MediaFrame>
            <div className="border-t border-line px-5 py-6">
              <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">{system.stencil}</div>
              <h2 className="mt-2 text-4xl tracking-[0.16em]">{spaced(system.name)}</h2>
              <p className="mt-2 text-sm text-muted">{system.subtitle}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
