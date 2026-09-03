import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as systemList, i as spaced, o as house } from "./router-BHNQ1pe5.mjs";
import { r as BracketLink } from "./bracket-CNbQd0_q.mjs";
import { t as MediaFrame } from "./media-frame-DcsC6V0S.mjs";
import { n as SpecGrid, t as ModelStage } from "./spec-grid-BtoO6Zv6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DHmcZOJ3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SystemChapter({ system, reverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
				label: `${system.stencil} · ${system.name}`,
				meta: system.classShort,
				className: reverse ? "min-h-[52vh] lg:order-2" : "min-h-[52vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: system.hero,
					alt: "",
					className: "h-full min-h-[52vh] w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: [
							system.stencil,
							" · ",
							system.classLabel
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-5xl tracking-[0.16em] sm:text-6xl",
						children: spaced(system.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg tracking-[0.14em] text-muted uppercase",
						children: system.meaning
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-sm leading-relaxed text-muted",
						children: system.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecGrid, {
						specs: system.highlights,
						className: "mt-8"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
							to: `/systems/${system.id}`,
							children: "Learn more"
						})
					})
				]
			})]
		})
	});
}
function Home() {
	const [model, setModel] = (0, import_react.useState)("fulmen");
	const [reduceMotion, setReduceMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduceMotion(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-svh items-end overflow-hidden",
			children: [
				reduceMotion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-range.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "absolute inset-0 h-full w-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: "/images/hero-range.jpg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/videos/hero.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 w-full px-5 pt-24 pb-16 sm:px-8 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] tracking-[0.36em] text-accent uppercase",
							children: "Concept studies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-[clamp(3.4rem,12vw,9rem)] tracking-[0.16em]",
							children: spaced("Vespasian")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-sm tracking-[0.34em] text-muted uppercase sm:text-base",
							children: "Fulmen · Pilum · Contus · Aquila"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base",
							children: [house.tagline, " Four Latin names. Vigil is the software. Analysis packs sit under each airframe: CFD, CBAERO, FEA. Public pages stay at concept level."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
								to: "/systems",
								variant: "solid",
								children: "The line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
								to: "/",
								hash: "geometry",
								children: "Geometry"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-wrap items-center justify-between gap-3 border-y border-line px-5 py-3 font-mono text-[10px] tracking-[0.22em] text-muted uppercase sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vespasian" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: house.stencils }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Public · concept" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-5 py-16 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: "Line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl text-4xl tracking-[0.08em] sm:text-6xl",
					children: house.line
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: house.note
				})
			]
		}),
		systemList.map((system, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemChapter, {
			system,
			reverse: i % 2 === 1
		}, system.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "geometry",
			className: "border-t border-line px-5 py-20 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: "Geometry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl tracking-[0.08em] sm:text-6xl",
					children: "Handle the concept."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: "Drag to rotate. These are abstract stand-ins, not flight hardware. Drop a real .glb later; the frame stays."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelStage, {
						model,
						onModelChange: setModel,
						showSwitcher: true
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid border-t border-line lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center px-5 py-16 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Software"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl tracking-[0.1em] sm:text-6xl",
						children: spaced("Vigil")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display tracking-[0.16em] text-muted uppercase",
						children: "The picture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-sm leading-relaxed text-muted",
						children: "Vigil stays off the airframes. If a fifth word is needed, it is the software: the common picture around Fulmen, Pilum, Contus, and Aquila."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
							to: "/vigil",
							children: "Open Vigil"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
				label: "VGL · common picture",
				meta: "Range control",
				className: "min-h-[48vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/operators.jpg",
					alt: "",
					className: "h-full min-h-[48vh] w-full object-cover"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line px-5 py-20 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: "Data"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl tracking-[0.08em] sm:text-6xl",
					children: "How plots get on the page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: "Keep the filenames. Export CSV from the solver. Overwrite the file. CFD, CBAERO, and FEA packs sit under the airframes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
						to: "/analysis",
						children: "Open analysis"
					})
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
