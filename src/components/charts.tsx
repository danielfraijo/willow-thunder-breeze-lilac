import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cbaeroHeat, cfdForce, feaSpar } from "@/lib/analysis-data";
import type { AnalysisKind } from "@/lib/systems";

const axis = { fill: "#9a9790", fontSize: 11, fontFamily: "IBM Plex Mono, ui-monospace, monospace" };
const grid = { stroke: "rgba(240,238,232,0.08)" };
const tooltipStyle = {
  background: "#101010",
  border: "1px solid rgba(240,238,232,0.18)",
  borderRadius: 0,
  color: "#f0eee8",
  fontSize: 12,
  fontFamily: "Barlow, sans-serif",
};

function Frame({ title, caption, children }: { title: string; caption: string; children: React.ReactNode }) {
  return (
    <div className="border border-line bg-bg-elevated">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line px-4 py-3">
        <div>
          <div className="font-display text-lg tracking-[0.12em] uppercase">{title}</div>
          <p className="mt-1 text-xs text-muted">{caption}</p>
        </div>
      </div>
      <div className="h-[320px] p-2 sm:h-[360px]">{children}</div>
    </div>
  );
}

export function CfdChart() {
  return (
    <Frame title="CFD · force vs Mach" caption="α = 4°. File: cfd-force.csv">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cfdForce} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid {...grid} />
          <XAxis dataKey="mach" tick={axis} tickLine={false} axisLine={{ stroke: "rgba(240,238,232,0.18)" }} />
          <YAxis tick={axis} tickLine={false} axisLine={{ stroke: "rgba(240,238,232,0.18)" }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ color: "#9a9790", fontSize: 12 }} />
          <Line type="monotone" dataKey="cl" name="CL" stroke="#f0eee8" strokeWidth={1.6} dot={false} />
          <Line type="monotone" dataKey="cd" name="CD" stroke="#9a9790" strokeWidth={1.6} dot={false} />
          <Line type="monotone" dataKey="ld" name="L/D" stroke="#c8c4bb" strokeWidth={1.6} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Frame>
  );
}

export function HeatChart() {
  return (
    <Frame title="CBAERO · heat flux vs time" caption="File: cbaero-heat.csv · W/cm²">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={cbaeroHeat} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid {...grid} />
          <XAxis dataKey="time" tick={axis} tickLine={false} axisLine={{ stroke: "rgba(240,238,232,0.18)" }} />
          <YAxis tick={axis} tickLine={false} axisLine={{ stroke: "rgba(240,238,232,0.18)" }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ color: "#9a9790", fontSize: 12 }} />
          <Line type="monotone" dataKey="nose" name="Nose" stroke="#f0eee8" strokeWidth={1.6} dot={false} />
          <Line type="monotone" dataKey="le" name="Leading edge" stroke="#9a9790" strokeWidth={1.6} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Frame>
  );
}

export function FeaChart() {
  return (
    <Frame title="FEA · spar stress vs span" caption="Load case +3.0g pull-up · fea-spar.csv">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={feaSpar} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid {...grid} />
          <XAxis dataKey="span" tick={axis} tickLine={false} axisLine={{ stroke: "rgba(240,238,232,0.18)" }} />
          <YAxis tick={axis} tickLine={false} axisLine={{ stroke: "rgba(240,238,232,0.18)" }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ color: "#9a9790", fontSize: 12 }} />
          <Line type="monotone" dataKey="vonMises" name="Von Mises MPa" stroke="#f0eee8" strokeWidth={1.6} dot={false} />
          <Line type="monotone" dataKey="allowable" name="Allowable" stroke="#9a9790" strokeWidth={1.6} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Frame>
  );
}

export function AnalysisChart({ kind }: { kind: AnalysisKind }) {
  if (kind === "cbaero") return <HeatChart />;
  if (kind === "fea") return <FeaChart />;
  return <CfdChart />;
}
