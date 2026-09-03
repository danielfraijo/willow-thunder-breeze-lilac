import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as systemList, i as spaced, o as house } from "./router-BHNQ1pe5.mjs";
import { t as MediaFrame } from "./media-frame-DcsC6V0S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/systems.index-_YVZMpn5.js
var import_jsx_runtime = require_jsx_runtime();
function SystemsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "px-5 py-16 sm:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.28em] text-muted uppercase",
					children: "Line"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-5xl tracking-[0.1em] sm:text-7xl",
					children: house.line
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-2xl text-sm text-muted",
					children: [house.note, " Public pages stay at concept level."]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grid border-t border-line sm:grid-cols-2",
			children: systemList.map((system) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/systems/$id",
				params: { id: system.id },
				className: "group border-b border-line sm:odd:border-r",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
					label: `${system.stencil} · ${system.classShort}`,
					meta: "Concept",
					className: "border-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: system.hero,
						alt: "",
						className: "h-[42vh] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line px-5 py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
							children: system.stencil
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-4xl tracking-[0.16em]",
							children: spaced(system.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: system.subtitle
						})
					]
				})]
			}, system.id))
		})]
	});
}
//#endregion
export { SystemsIndex as component };
