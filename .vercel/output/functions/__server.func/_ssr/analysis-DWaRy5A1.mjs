import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as systemList } from "./router-BHNQ1pe5.mjs";
import { r as BracketLink, t as BracketAnchor } from "./bracket-CNbQd0_q.mjs";
import { i as HeatChart, n as CfdChart, r as FeaChart } from "./charts-DxppOd6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analysis-DWaRy5A1.js
var import_jsx_runtime = require_jsx_runtime();
var packs = [
	{
		title: "CFD",
		body: "Force coefficients vs Mach. File: cfd-force.csv. Used by Fulmen and Contus until their own runs replace it.",
		href: "/data/cfd-force.csv",
		label: "cfd-force.csv"
	},
	{
		title: "CBAERO",
		body: "Heat flux vs time. File: cbaero-heat.csv. Sits under Pilum.",
		href: "/data/cbaero-heat.csv",
		label: "cbaero-heat.csv"
	},
	{
		title: "FEA",
		body: "Spar stress vs span. File: fea-spar.csv. Sits under Aquila.",
		href: "/data/fea-spar.csv",
		label: "fea-spar.csv"
	}
];
function AnalysisPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 py-16 sm:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Data"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-4xl text-5xl tracking-[0.08em] sm:text-7xl",
						children: "How plots get on the page."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-sm text-muted",
						children: "Keep the filenames. Export CSV from the solver. Overwrite the file. If the column names change, the charts in this app need a matching edit."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid border-y border-line md:grid-cols-3",
				children: packs.map((pack) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-b border-line px-5 py-8 md:border-r md:border-b-0 md:last:border-r-0 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl tracking-[0.12em]",
							children: pack.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: pack.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketAnchor, {
								href: pack.href,
								download: true,
								children: pack.label
							})
						})
					]
				}, pack.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6 px-5 py-16 sm:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CfdChart, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeatChart, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaChart, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-line px-5 py-16 sm:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Under the airframes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl tracking-[0.08em]",
						children: "Which pack sits where"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[32rem] text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "font-mono text-[10px] tracking-[0.18em] text-muted uppercase",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-line",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 pr-4 font-medium",
											children: "Stencil"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 pr-4 font-medium",
											children: "Airframe"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 pr-4 font-medium",
											children: "Class"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 pr-4 font-medium",
											children: "Pack"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-3 font-medium",
											children: "File"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: systemList.map((system) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 pr-4 font-mono text-xs tracking-[0.16em]",
										children: system.stencil
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 pr-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
											to: `/systems/${system.id}`,
											variant: "ghost",
											className: "px-0 min-h-0",
											children: system.name
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 pr-4 text-muted",
										children: system.classShort
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 pr-4 uppercase",
										children: system.analysisKind
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-4 font-mono text-xs text-muted",
										children: system.csvHref.replace("/data/", "")
									})
								]
							}, system.id)) })]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { AnalysisPage as component };
