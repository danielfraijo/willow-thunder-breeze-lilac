export type CfdRow = {
  mach: number;
  alpha: number;
  cl: number;
  cd: number;
  ld: number;
};

export type HeatRow = {
  time: number;
  nose: number;
  le: number;
};

export type FeaRow = {
  span: number;
  vonMises: number;
  allowable: number;
};

export const cfdForce: CfdRow[] = [
  { mach: 0.6, alpha: 4, cl: 0.42, cd: 0.018, ld: 23.3 },
  { mach: 0.8, alpha: 4, cl: 0.4, cd: 0.021, ld: 19.0 },
  { mach: 0.95, alpha: 4, cl: 0.37, cd: 0.034, ld: 10.9 },
  { mach: 1.05, alpha: 4, cl: 0.31, cd: 0.048, ld: 6.5 },
  { mach: 1.2, alpha: 4, cl: 0.28, cd: 0.041, ld: 6.8 },
  { mach: 1.5, alpha: 4, cl: 0.24, cd: 0.033, ld: 7.3 },
  { mach: 2.0, alpha: 4, cl: 0.19, cd: 0.028, ld: 6.8 },
  { mach: 2.5, alpha: 4, cl: 0.16, cd: 0.026, ld: 6.2 },
  { mach: 3.0, alpha: 4, cl: 0.14, cd: 0.025, ld: 5.6 },
];

export const cbaeroHeat: HeatRow[] = [
  { time: 0, nose: 2, le: 1 },
  { time: 10, nose: 8, le: 4 },
  { time: 20, nose: 21, le: 11 },
  { time: 30, nose: 46, le: 22 },
  { time: 40, nose: 71, le: 34 },
  { time: 50, nose: 88, le: 41 },
  { time: 60, nose: 79, le: 37 },
  { time: 80, nose: 54, le: 26 },
  { time: 100, nose: 33, le: 16 },
  { time: 120, nose: 21, le: 11 },
  { time: 150, nose: 14, le: 7 },
  { time: 180, nose: 9, le: 5 },
];

export const feaSpar: FeaRow[] = [
  { span: 0.0, vonMises: 186, allowable: 240 },
  { span: 0.1, vonMises: 162, allowable: 240 },
  { span: 0.2, vonMises: 141, allowable: 240 },
  { span: 0.3, vonMises: 118, allowable: 240 },
  { span: 0.4, vonMises: 97, allowable: 240 },
  { span: 0.5, vonMises: 78, allowable: 240 },
  { span: 0.6, vonMises: 61, allowable: 240 },
  { span: 0.7, vonMises: 46, allowable: 240 },
  { span: 0.8, vonMises: 33, allowable: 240 },
  { span: 0.9, vonMises: 21, allowable: 240 },
  { span: 1.0, vonMises: 12, allowable: 240 },
];

export const cfdPeak = cfdForce.reduce((best, row) => (row.ld > best.ld ? row : best));
export const cfdTransonic = cfdForce.reduce((worst, row) => (row.cd > worst.cd ? row : worst));
export const heatPeak = cbaeroHeat.reduce((best, row) => (row.nose > best.nose ? row : best));
export const feaRoot = feaSpar[0];
