import { createFileRoute } from "@tanstack/react-router";
import { BracketAnchor, BracketLink } from "@/components/bracket";
import { CfdChart, FeaChart, HeatChart } from "@/components/charts";
import { systemList } from "@/lib/systems";

export const Route = createFileRoute("/analysis")({ component: AnalysisPage });

const packs = [
  {
    title: "CFD",
    body: "Force coefficients vs Mach. File: cfd-force.csv. Used by Fulmen and Contus until their own runs replace it.",
    href: "/data/cfd-force.csv",
    label: "cfd-force.csv",
  },
  {
    title: "CBAERO",
    body: "Heat flux vs time. File: cbaero-heat.csv. Sits under Pilum.",
    href: "/data/cbaero-heat.csv",
    label: "cbaero-heat.csv",
  },
  {
    title: "FEA",
    body: "Spar stress vs span. File: fea-spar.csv. Sits under Aquila.",
    href: "/data/fea-spar.csv",
    label: "fea-spar.csv",
  },
];

function AnalysisPage() {
  return (
    <main className="pt-14">
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Data</div>
        <h1 className="mt-3 max-w-4xl text-5xl tracking-[0.08em] sm:text-7xl">How plots get on the page.</h1>
        <p className="mt-5 max-w-2xl text-sm text-muted">
          Keep the filenames. Export CSV from the solver. Overwrite the file. If the column names change, the charts in this app need a matching edit.
        </p>
      </section>

      <section className="grid border-y border-line md:grid-cols-3">
        {packs.map((pack) => (
          <article key={pack.title} className="border-b border-line px-5 py-8 md:border-r md:border-b-0 md:last:border-r-0 sm:px-6">
            <h2 className="text-3xl tracking-[0.12em]">{pack.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{pack.body}</p>
            <div className="mt-6">
              <BracketAnchor href={pack.href} download>
                {pack.label}
              </BracketAnchor>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-6 px-5 py-16 sm:px-8 lg:px-12">
        <CfdChart />
        <HeatChart />
        <FeaChart />
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">Under the airframes</div>
        <h2 className="mt-3 text-4xl tracking-[0.08em]">Which pack sits where</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-medium">Stencil</th>
                <th className="py-3 pr-4 font-medium">Airframe</th>
                <th className="py-3 pr-4 font-medium">Class</th>
                <th className="py-3 pr-4 font-medium">Pack</th>
                <th className="py-3 font-medium">File</th>
              </tr>
            </thead>
            <tbody>
              {systemList.map((system) => (
                <tr key={system.id} className="border-b border-line">
                  <td className="py-4 pr-4 font-mono text-xs tracking-[0.16em]">{system.stencil}</td>
                  <td className="py-4 pr-4">
                    <BracketLink to={`/systems/${system.id}`} variant="ghost" className="px-0 min-h-0">
                      {system.name}
                    </BracketLink>
                  </td>
                  <td className="py-4 pr-4 text-muted">{system.classShort}</td>
                  <td className="py-4 pr-4 uppercase">{system.analysisKind}</td>
                  <td className="py-4 font-mono text-xs text-muted">{system.csvHref.replace("/data/", "")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
