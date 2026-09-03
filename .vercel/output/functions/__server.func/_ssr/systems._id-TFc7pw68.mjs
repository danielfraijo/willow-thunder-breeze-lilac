import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getSystem, i as spaced, n as Route, s as nextSystem } from "./router-BHNQ1pe5.mjs";
import { r as BracketLink, t as BracketAnchor } from "./bracket-CNbQd0_q.mjs";
import { t as AnalysisChart } from "./charts-DxppOd6d.mjs";
import { t as MediaFrame } from "./media-frame-DcsC6V0S.mjs";
import { n as SpecGrid, t as ModelStage } from "./spec-grid-BtoO6Zv6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/systems._id-TFc7pw68.js
var import_jsx_runtime = require_jsx_runtime();
function SystemPage() {
	const { id } = Route.useParams();
	const system = getSystem(id);
	if (!system) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-svh flex-col items-center justify-center px-6 pt-14 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl tracking-[0.14em]",
				children: "Not on the line"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "That stencil is not Fulmen, Pilum, Contus, or Aquila."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
					to: "/systems",
					children: "The line"
				})
			})
		]
	});
	const next = nextSystem(system.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[88svh] items-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: system.hero,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 w-full px-5 pt-24 pb-14 sm:px-8 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-[10px] tracking-[0.28em] text-accent uppercase",
							children: [
								system.stencil,
								" · radio: ",
								system.radio
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-[clamp(3rem,10vw,7.5rem)] tracking-[0.14em]",
							children: spaced(system.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-base tracking-[0.18em] text-muted uppercase sm:text-lg",
							children: system.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-sm leading-relaxed text-muted",
							children: system.lede
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
								to: "/systems/$id",
								params: { id: system.id },
								hash: "geometry",
								children: "Geometry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketLink, {
								to: "/systems/$id",
								params: { id: system.id },
								hash: "analysis",
								children: "Analysis"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid border-t border-line lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-14 sm:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl tracking-[0.08em]",
						children: "Features + specifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-sm text-muted",
						children: [
							system.note,
							" ",
							system.lede
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecGrid, {
						specs: system.specs,
						className: "mt-8"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-px border-t border-line bg-line lg:border-t-0 lg:border-l",
				children: system.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-bg px-5 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display mt-2 text-3xl tracking-[0.06em] uppercase",
						children: item.value
					})]
				}, item.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line px-5 py-16 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: "Build qualities"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl tracking-[0.08em]",
					children: "On the public page"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-line md:grid-cols-3",
					children: system.features.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-bg px-5 py-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
								children: [
									"0",
									i + 1,
									" / 0",
									system.features.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl tracking-[0.1em]",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: feature.body
							})
						]
					}, feature.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "geometry",
			className: "border-t border-line px-5 py-16 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: "Geometry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl tracking-[0.08em]",
					children: "Handle the concept."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-sm text-muted",
					children: [
						"Abstract stand-in for ",
						system.name,
						". Not flight hardware. Drag to rotate."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModelStage, { model: system.id })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "analysis",
			className: "border-t border-line px-5 py-16 sm:px-8 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Analysis pack"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl tracking-[0.08em]",
						children: system.chartTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-sm text-muted",
						children: system.chartCaption
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BracketAnchor, {
					href: system.csvHref,
					download: true,
					children: system.csvLabel
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalysisChart, { kind: system.analysisKind })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line px-5 py-16 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: ["Gallery / 0", system.gallery.length]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl tracking-[0.08em]",
					children: "Study stills"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: system.gallery.map((shot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
						label: shot.caption,
						meta: `0${i + 1} / 0${system.gallery.length}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: shot.src,
							alt: "",
							className: "h-56 w-full object-cover sm:h-64"
						})
					}, shot.src))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/systems/$id",
				params: { id: next.id },
				className: "group block px-5 py-14 sm:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
						children: "Next on the line"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl tracking-[0.16em] sm:text-6xl",
							children: spaced(next.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs tracking-[0.22em] text-muted uppercase group-hover:text-fg",
							children: "[[ Continue ]]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: next.subtitle
					})
				]
			})
		})
	] });
}
//#endregion
export { SystemPage as component };
