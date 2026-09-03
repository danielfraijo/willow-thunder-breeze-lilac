import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-BHNQ1pe5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bracket-CNbQd0_q.js
var import_jsx_runtime = require_jsx_runtime();
var shell = "inline-flex min-h-11 items-center justify-center gap-2 px-4 font-display text-xs uppercase tracking-[0.22em] transition-colors duration-150";
function BracketLink({ to, hash, params, children, className, variant = "outline" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		hash,
		params,
		className: cn(shell, variant === "solid" ? "bg-fg text-bg hover:bg-accent" : variant === "ghost" ? "min-h-11 px-0 text-muted hover:text-fg" : "border border-line text-fg hover:border-fg", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: "[["
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: "]]"
			})
		]
	});
}
function BracketButton({ children, className, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn(shell, "border", active ? "border-fg text-fg" : "border-line text-muted hover:border-fg hover:text-fg", className),
		children
	});
}
function BracketAnchor({ href, children, className, download }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		download,
		className: cn(shell, "border border-line text-fg hover:border-fg", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: "[["
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: "]]"
			})
		]
	});
}
//#endregion
export { BracketButton as n, BracketLink as r, BracketAnchor as t };
