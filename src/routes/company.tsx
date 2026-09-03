import { createFileRoute } from "@tanstack/react-router";
import { BracketLink } from "@/components/bracket";
import { MediaFrame } from "@/components/media-frame";
import { house } from "@/lib/systems";
import { spaced } from "@/lib/utils";

export const Route = createFileRoute("/company")({ component: CompanyPage });

const names = [
  { mark: "Vespasian", role: "House", note: "The line. Concept studies." },
  { mark: "Fulmen", role: "FLM", note: "Thunderbolt. Air launched." },
  { mark: "Pilum", role: "PLM", note: "Heavy javelin. 155 class." },
  { mark: "Contus", role: "CTS", note: "Heavy lance. VLS." },
  { mark: "Aquila", role: "AQL", note: "Eagle. The aircraft that returns." },
  { mark: "Vigil", role: "VGL", note: "The picture. Off the airframes." },
  { mark: "Cacus", role: "Spare", note: "Unused. Kept off the line." },
];

function CompanyPage() {
  return (
    <main>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img src="/images/hero-range.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" />
        <div className="relative z-10 w-full px-5 pt-24 pb-14 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.28em] text-accent uppercase">Company</div>
          <h1 className="mt-3 text-[clamp(3rem,10vw,7.5rem)] tracking-[0.16em]">{spaced("Vespasian")}</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{house.tagline}</p>
        </div>
      </section>

      <section className="grid border-t border-line lg:grid-cols-2">
        <div className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Doctrine</div>
          <h2 className="mt-3 text-4xl tracking-[0.08em]">Public pages stay at concept level.</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
            Four Latin names. Vigil is the software. Analysis packs sit under each airframe: CFD, CBAERO, FEA. The public site carries name, class, stencil, and which files exist. No seeker or payload layout.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">{house.note}</p>
          <div className="mt-8">
            <BracketLink to="/systems">The line</BracketLink>
          </div>
        </div>
        <MediaFrame label="House mark" meta="Aquila" className="min-h-[42vh]">
          <div className="flex min-h-[42vh] items-center justify-center bg-bg">
            <img src="/logo-eagle.png" alt="Vespasian eagle" className="h-48 w-auto sm:h-64" />
          </div>
        </MediaFrame>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Names</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em]">Say Vespasian Contus on slides.</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left">
            <thead className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-medium">Name</th>
                <th className="py-3 pr-4 font-medium">Mark</th>
                <th className="py-3 font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {names.map((row) => (
                <tr key={row.mark} className="border-b border-line">
                  <td className="py-4 pr-4 font-display text-xl tracking-[0.12em] uppercase">{row.mark}</td>
                  <td className="py-4 pr-4 font-mono text-xs tracking-[0.16em] text-muted">{row.role}</td>
                  <td className="py-4 text-sm text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
