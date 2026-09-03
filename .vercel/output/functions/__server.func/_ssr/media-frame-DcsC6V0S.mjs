import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-BHNQ1pe5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-frame-DcsC6V0S.js
var import_jsx_runtime = require_jsx_runtime();
function MediaFrame({ children, label, meta, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden border border-line bg-bg-elevated", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3 z-10 border border-line/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute top-3 left-3 z-10 h-3 w-3 border-t border-l border-fg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute top-3 right-3 z-10 h-3 w-3 border-t border-r border-fg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute bottom-3 left-3 z-10 h-3 w-3 border-b border-l border-fg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute right-3 bottom-3 z-10 h-3 w-3 border-r border-b border-fg/70" }),
			children,
			label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-4 left-5 z-10 font-mono text-[10px] tracking-[0.24em] text-fg/80 uppercase",
				children: label
			}) : null,
			meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-4 right-5 z-10 font-mono text-[10px] tracking-[0.24em] text-fg/70 uppercase",
				children: meta
			}) : null
		]
	});
}
//#endregion
export { MediaFrame as t };
