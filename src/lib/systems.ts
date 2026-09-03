import { cbaeroHeat, cfdForce, cfdPeak, cfdTransonic, feaRoot, feaSpar, heatPeak } from "./analysis-data";

export const SYSTEM_IDS = ["fulmen", "pilum", "contus", "aquila"] as const;
export type SystemId = (typeof SYSTEM_IDS)[number];

export type AnalysisKind = "cfd" | "cbaero" | "fea";

export type GalleryShot = {
  src: string;
  caption: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type System = {
  id: SystemId;
  stencil: string;
  name: string;
  meaning: string;
  classLabel: string;
  classShort: string;
  radio: string;
  subtitle: string;
  lede: string;
  note: string;
  status: string;
  launch: string;
  returns: boolean;
  analysisKind: AnalysisKind;
  csvHref: string;
  csvLabel: string;
  chartTitle: string;
  chartCaption: string;
  hero: string;
  gallery: GalleryShot[];
  specs: Spec[];
  features: Feature[];
  highlights: Spec[];
};

export const systems: Record<SystemId, System> = {
  fulmen: {
    id: "fulmen",
    stencil: "FLM",
    name: "Fulmen",
    meaning: "Thunderbolt",
    classLabel: "F-35-class air-launched",
    classShort: "Air launched",
    radio: "Fulmen off the Lightning",
    subtitle: "Thunderbolt. F-35-class air-launched concept.",
    lede: "Fulmen is the bolt from the sky. The public page carries the name, class, stencil, and the CFD pack. No seeker or payload layout on this site.",
    note: "Thrown from a Lightning-class station. Does not return.",
    status: "Concept",
    launch: "Air launched",
    returns: false,
    analysisKind: "cfd",
    csvHref: "/data/cfd-force.csv",
    csvLabel: "Download CFD CSV",
    chartTitle: "CFD · force coefficients vs Mach",
    chartCaption: "Placeholder CFD at α = 4°. Replace cfd-force.csv with the solver export.",
    hero: "/images/fulmen-release.jpg",
    gallery: [
      { src: "/images/fulmen-release.jpg", caption: "Air-launch release, concept still" },
      { src: "/images/fulmen.jpg", caption: "Sustained flight over range" },
      { src: "/images/hero-range.jpg", caption: "Blue-hour range pass" },
    ],
    specs: [
      { label: "Stencil", value: "FLM" },
      { label: "Class", value: "Air launched" },
      { label: "Meaning", value: "Thunderbolt" },
      { label: "Status", value: "Concept" },
      { label: "Analysis", value: "CFD force" },
      { label: "Public", value: "Name, class, stencil" },
    ],
    features: [
      {
        title: "Air launched",
        body: "Sized to F-35-class stations. Radio call: Fulmen off the Lightning.",
      },
      {
        title: "CFD pack",
        body: "Force coefficients versus Mach sit under the airframe. Peak L/D is a concept placeholder until the solver file is replaced.",
      },
      {
        title: "Concept level",
        body: "Public pages stay at concept level. No seeker or payload layout is published here.",
      },
    ],
    highlights: [
      { label: "Peak L/D", value: `${cfdPeak.ld.toFixed(1)} @ M${cfdPeak.mach.toFixed(2)}` },
      { label: "Transonic CD", value: `${cfdTransonic.cd.toFixed(3)} @ M${cfdTransonic.mach.toFixed(2)}` },
      { label: "Envelope", value: `M ${cfdForce[0].mach.toFixed(1)}–${cfdForce[cfdForce.length - 1].mach.toFixed(1)}` },
      { label: "Alpha", value: "4.0°" },
    ],
  },
  pilum: {
    id: "pilum",
    stencil: "PLM",
    name: "Pilum",
    meaning: "Heavy javelin",
    classLabel: "155-class ramjet-round",
    classShort: "155 artillery",
    radio: "Pilum from the guns",
    subtitle: "Heavy javelin. 155-class ramjet-round concept.",
    lede: "Pilum is thrown from the guns. Show heating and force coefficients here when the CBAERO and CFD runs are exported. Public pages stay at concept level.",
    note: "A heavy javelin. Ramjet-round, 155 class.",
    status: "Concept",
    launch: "155 artillery",
    returns: false,
    analysisKind: "cbaero",
    csvHref: "/data/cbaero-heat.csv",
    csvLabel: "Download CBAERO CSV",
    chartTitle: "CBAERO · heat flux vs time",
    chartCaption: "Placeholder heating. Replace cbaero-heat.csv with the aeroheating export.",
    hero: "/images/pilum-stand.jpg",
    gallery: [
      { src: "/images/pilum-stand.jpg", caption: "Inspection stand, hangar light" },
      { src: "/images/pilum.jpg", caption: "From the guns" },
      { src: "/images/operators.jpg", caption: "Range picture" },
    ],
    specs: [
      { label: "Stencil", value: "PLM" },
      { label: "Class", value: "155 artillery" },
      { label: "Meaning", value: "Heavy javelin" },
      { label: "Status", value: "Concept" },
      { label: "Analysis", value: "CBAERO heat" },
      { label: "Public", value: "Name, class, stencil" },
    ],
    features: [
      {
        title: "155 class",
        body: "Ramjet-round concept from howitzer-class artillery. Radio call: Pilum from the guns.",
      },
      {
        title: "CBAERO pack",
        body: "Heat flux versus time sits under the airframe. Nose and leading-edge traces are placeholders until the file is replaced.",
      },
      {
        title: "Concept level",
        body: "Public pages stay at concept level. No seeker or payload layout is published here.",
      },
    ],
    highlights: [
      { label: "Peak nose", value: `${heatPeak.nose} W/cm²` },
      { label: "Peak LE", value: `${heatPeak.le} W/cm²` },
      { label: "At time", value: `t = ${heatPeak.time} s` },
      { label: "Window", value: `0–${cbaeroHeat[cbaeroHeat.length - 1].time} s` },
    ],
  },
  contus: {
    id: "contus",
    stencil: "CTS",
    name: "Contus",
    meaning: "Heavy lance",
    classLabel: "VLS cell-launched air-breather",
    classShort: "VLS",
    radio: "Contus off the rails",
    subtitle: "Heavy lance. Cell-launched air-breather concept.",
    lede: "Two-handed, hits from a distance, does not come back. Canister marking: CTS. Say Vespasian Contus on slides.",
    note: "Off the rails. Cell-launched. Does not return.",
    status: "Concept",
    launch: "VLS",
    returns: false,
    analysisKind: "cfd",
    csvHref: "/data/cfd-force.csv",
    csvLabel: "Download CFD CSV",
    chartTitle: "CFD · force coefficients vs Mach",
    chartCaption: "Shared CFD placeholder. Replace cfd-force.csv with the Contus run.",
    hero: "/images/contus-vls.jpg",
    gallery: [
      { src: "/images/contus-vls.jpg", caption: "Cell launch, concept still" },
      { src: "/images/contus.jpg", caption: "Air-breather in climb" },
      { src: "/images/hero-range.jpg", caption: "Range picture" },
    ],
    specs: [
      { label: "Stencil", value: "CTS" },
      { label: "Class", value: "VLS" },
      { label: "Meaning", value: "Heavy lance" },
      { label: "Status", value: "Concept" },
      { label: "Analysis", value: "CFD force" },
      { label: "Marking", value: "CTS" },
    ],
    features: [
      {
        title: "Cell launched",
        body: "VLS-class air-breather. Radio call: Contus off the rails. Say Vespasian Contus on slides.",
      },
      {
        title: "Does not return",
        body: "A heavy lance: two-handed, hits from a distance. Canister marking CTS.",
      },
      {
        title: "CFD pack",
        body: "Force coefficients versus Mach sit under the airframe until the solver file is replaced.",
      },
    ],
    highlights: [
      { label: "Peak L/D", value: `${cfdPeak.ld.toFixed(1)} @ M${cfdPeak.mach.toFixed(2)}` },
      { label: "Transonic CD", value: `${cfdTransonic.cd.toFixed(3)} @ M${cfdTransonic.mach.toFixed(2)}` },
      { label: "Envelope", value: `M ${cfdForce[0].mach.toFixed(1)}–${cfdForce[cfdForce.length - 1].mach.toFixed(1)}` },
      { label: "Returns", value: "No" },
    ],
  },
  aquila: {
    id: "aquila",
    stencil: "AQL",
    name: "Aquila",
    meaning: "Eagle",
    classLabel: "UAS that returns",
    classShort: "UAS",
    radio: "Aquila in the stack",
    subtitle: "Eagle. The aircraft that returns.",
    lede: "Aquila is the bird in the stack. The structures case sits in the FEA plot until you replace the CSV with a spar or bulkhead run.",
    note: "The aircraft that returns. UAS concept.",
    status: "Concept",
    launch: "UAS",
    returns: true,
    analysisKind: "fea",
    csvHref: "/data/fea-spar.csv",
    csvLabel: "Download FEA CSV",
    chartTitle: "FEA · spar stress vs span",
    chartCaption: "Placeholder +3.0g pull-up. Replace fea-spar.csv with the structures run.",
    hero: "/images/aquila-sea.jpg",
    gallery: [
      { src: "/images/aquila-sea.jpg", caption: "Low over water, concept still" },
      { src: "/images/aquila.jpg", caption: "Eagle in the stack" },
      { src: "/images/operators.jpg", caption: "The picture around the airframe" },
    ],
    specs: [
      { label: "Stencil", value: "AQL" },
      { label: "Class", value: "UAS" },
      { label: "Meaning", value: "Eagle" },
      { label: "Status", value: "Concept" },
      { label: "Analysis", value: "FEA spar" },
      { label: "Returns", value: "Yes" },
    ],
    features: [
      {
        title: "Returns",
        body: "The only airframe that comes back. Radio call: Aquila in the stack.",
      },
      {
        title: "FEA pack",
        body: "Spar von Mises versus span for a +3.0g pull-up. Replace the CSV with the real spar or bulkhead run.",
      },
      {
        title: "Concept level",
        body: "Public pages stay at concept level. The mark is an eagle. The house mark is the same bird.",
      },
    ],
    highlights: [
      { label: "Root stress", value: `${feaRoot.vonMises} MPa` },
      { label: "Allowable", value: `${feaRoot.allowable} MPa` },
      { label: "Margin", value: `${(((feaRoot.allowable - feaRoot.vonMises) / feaRoot.allowable) * 100).toFixed(0)}%` },
      { label: "Load case", value: "+3.0g pull-up" },
    ],
  },
};

export const systemList: System[] = SYSTEM_IDS.map((id) => systems[id]);

export function isSystemId(value: string): value is SystemId {
  return (SYSTEM_IDS as readonly string[]).includes(value);
}

export function getSystem(id: string): System | undefined {
  return isSystemId(id) ? systems[id] : undefined;
}

export function nextSystem(id: SystemId): System {
  const i = SYSTEM_IDS.indexOf(id);
  return systems[SYSTEM_IDS[(i + 1) % SYSTEM_IDS.length]];
}

export const house = {
  name: "Vespasian",
  stencils: "FLM · PLM · CTS · AQL · VGL",
  tagline: "Concept air vehicles and a common picture.",
  line: "Four airframes. One picture.",
  note: "Thrown weapons, a bolt from the sky, a bird that returns. Cacus is spare. Vigil stays off the airframes.",
};

export { feaSpar };
