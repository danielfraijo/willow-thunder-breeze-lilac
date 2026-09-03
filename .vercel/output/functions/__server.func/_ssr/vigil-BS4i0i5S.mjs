import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as spaced } from "./router-BHNQ1pe5.mjs";
import { r as BracketLink } from "./bracket-CNbQd0_q.mjs";
import { t as MediaFrame } from "./media-frame-DcsC6V0S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vigil-BS4i0i5S.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Picture",
		body: "One common picture around Fulmen, Pilum, Contus, and Aquila. Vigil stays off the airframes."
	},
	{
		title: "Packs",
		body: "CFD, CBAERO, and FEA sit under each airframe. Plots get on the page from the solver export."
	},
	{
		title: "Restraint",
		body: "Public pages stay at concept level. Name, class, stencil, and which analysis files exist."
	},
	{
		title: "Geometry",
		body: "The viewer is a stand-in. Drop a real .glb later; the frame stays."
	}
];
function VigilPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[78svh] items-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/vigil.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 w-full px-5 pt-24 pb-14 sm:px-8 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] tracking-[0.28em] text-accent uppercase",
							children: "Software · VGL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-[clamp(3rem,10vw,7.5rem)] tracking-[0.16em]",
							children: spaced("Vigil")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-base tracking-[0.2em] text-muted uppercase",
							children: "The picture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-sm leading-relaxed text-muted",
							children: "Vigil stays off the airframes. If a fifth word is needed, it is the software: the common picture around Fulmen, Pilum, Contus, and Aquila."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grid border-t border-line md:grid-cols-2",
			children: pillars.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-b border-line px-5 py-10 md:odd:border-r sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
						children: [
							"0",
							i + 1,
							" / 04"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl tracking-[0.12em]",
						children: pillar.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm leading-relaxed text-muted",
						children: pillar.body
					})
				]
			}, pillar.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid border-t border-line lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
				label: "VGL · range picture",
				meta: "Operators",
				className: "min-h-[48vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/operators.jpg",
					alt: "",
					className: "h-full min-h-[48vh] w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center px-5 py-14 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Around the line"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl tracking-[0.08em]",
						children: "A common picture."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-sm leading-relaxed text-muted",
						children: "Analysis packs live under the airframes. Vigil is the software that holds them in one place. This page is the stub until screenshots replace the stills."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
							to: "/analysis",
							children: "Analysis"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
							to: "/systems",
							children: "The line"
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { VigilPage as component };
