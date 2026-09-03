import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as cfdForce, f as feaSpar, u as cbaeroHeat } from "./router-BHNQ1pe5.mjs";
import { a as CartesianGrid, c as Legend, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/charts-DxppOd6d.js
var import_jsx_runtime = require_jsx_runtime();
var axis = {
	fill: "#9a9790",
	fontSize: 11,
	fontFamily: "IBM Plex Mono, ui-monospace, monospace"
};
var grid = { stroke: "rgba(240,238,232,0.08)" };
var tooltipStyle = {
	background: "#101010",
	border: "1px solid rgba(240,238,232,0.18)",
	borderRadius: 0,
	color: "#f0eee8",
	fontSize: 12,
	fontFamily: "Barlow, sans-serif"
};
function Frame({ title, caption, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-bg-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-end justify-between gap-3 border-b border-line px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-lg tracking-[0.12em] uppercase",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: caption
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[320px] p-2 sm:h-[360px]",
			children
		})]
	});
}
function CfdChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "CFD · force vs Mach",
		caption: "α = 4°. File: cfd-force.csv",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: cfdForce,
				margin: {
					top: 12,
					right: 16,
					left: 0,
					bottom: 8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...grid }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "mach",
						tick: axis,
						tickLine: false,
						axisLine: { stroke: "rgba(240,238,232,0.18)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: axis,
						tickLine: false,
						axisLine: { stroke: "rgba(240,238,232,0.18)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						color: "#9a9790",
						fontSize: 12
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "cl",
						name: "CL",
						stroke: "#f0eee8",
						strokeWidth: 1.6,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "cd",
						name: "CD",
						stroke: "#9a9790",
						strokeWidth: 1.6,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "ld",
						name: "L/D",
						stroke: "#c8c4bb",
						strokeWidth: 1.6,
						dot: false
					})
				]
			})
		})
	});
}
function HeatChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "CBAERO · heat flux vs time",
		caption: "File: cbaero-heat.csv · W/cm²",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: cbaeroHeat,
				margin: {
					top: 12,
					right: 16,
					left: 0,
					bottom: 8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...grid }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "time",
						tick: axis,
						tickLine: false,
						axisLine: { stroke: "rgba(240,238,232,0.18)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: axis,
						tickLine: false,
						axisLine: { stroke: "rgba(240,238,232,0.18)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						color: "#9a9790",
						fontSize: 12
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "nose",
						name: "Nose",
						stroke: "#f0eee8",
						strokeWidth: 1.6,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "le",
						name: "Leading edge",
						stroke: "#9a9790",
						strokeWidth: 1.6,
						dot: false
					})
				]
			})
		})
	});
}
function FeaChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "FEA · spar stress vs span",
		caption: "Load case +3.0g pull-up · fea-spar.csv",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data: feaSpar,
				margin: {
					top: 12,
					right: 16,
					left: 0,
					bottom: 8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...grid }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "span",
						tick: axis,
						tickLine: false,
						axisLine: { stroke: "rgba(240,238,232,0.18)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: axis,
						tickLine: false,
						axisLine: { stroke: "rgba(240,238,232,0.18)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
						color: "#9a9790",
						fontSize: 12
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "vonMises",
						name: "Von Mises MPa",
						stroke: "#f0eee8",
						strokeWidth: 1.6,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "allowable",
						name: "Allowable",
						stroke: "#9a9790",
						strokeWidth: 1.6,
						dot: false
					})
				]
			})
		})
	});
}
function AnalysisChart({ kind }) {
	if (kind === "cbaero") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeatChart, {});
	if (kind === "fea") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaChart, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CfdChart, {});
}
//#endregion
export { HeatChart as i, CfdChart as n, FeaChart as r, AnalysisChart as t };
