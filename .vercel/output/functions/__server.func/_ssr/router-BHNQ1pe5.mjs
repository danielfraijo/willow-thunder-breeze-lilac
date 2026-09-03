import { i as __toESM } from "../_runtime.mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BHNQ1pe5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var cfdForce = [
	{
		mach: .6,
		alpha: 4,
		cl: .42,
		cd: .018,
		ld: 23.3
	},
	{
		mach: .8,
		alpha: 4,
		cl: .4,
		cd: .021,
		ld: 19
	},
	{
		mach: .95,
		alpha: 4,
		cl: .37,
		cd: .034,
		ld: 10.9
	},
	{
		mach: 1.05,
		alpha: 4,
		cl: .31,
		cd: .048,
		ld: 6.5
	},
	{
		mach: 1.2,
		alpha: 4,
		cl: .28,
		cd: .041,
		ld: 6.8
	},
	{
		mach: 1.5,
		alpha: 4,
		cl: .24,
		cd: .033,
		ld: 7.3
	},
	{
		mach: 2,
		alpha: 4,
		cl: .19,
		cd: .028,
		ld: 6.8
	},
	{
		mach: 2.5,
		alpha: 4,
		cl: .16,
		cd: .026,
		ld: 6.2
	},
	{
		mach: 3,
		alpha: 4,
		cl: .14,
		cd: .025,
		ld: 5.6
	}
];
var cbaeroHeat = [
	{
		time: 0,
		nose: 2,
		le: 1
	},
	{
		time: 10,
		nose: 8,
		le: 4
	},
	{
		time: 20,
		nose: 21,
		le: 11
	},
	{
		time: 30,
		nose: 46,
		le: 22
	},
	{
		time: 40,
		nose: 71,
		le: 34
	},
	{
		time: 50,
		nose: 88,
		le: 41
	},
	{
		time: 60,
		nose: 79,
		le: 37
	},
	{
		time: 80,
		nose: 54,
		le: 26
	},
	{
		time: 100,
		nose: 33,
		le: 16
	},
	{
		time: 120,
		nose: 21,
		le: 11
	},
	{
		time: 150,
		nose: 14,
		le: 7
	},
	{
		time: 180,
		nose: 9,
		le: 5
	}
];
var feaSpar = [
	{
		span: 0,
		vonMises: 186,
		allowable: 240
	},
	{
		span: .1,
		vonMises: 162,
		allowable: 240
	},
	{
		span: .2,
		vonMises: 141,
		allowable: 240
	},
	{
		span: .3,
		vonMises: 118,
		allowable: 240
	},
	{
		span: .4,
		vonMises: 97,
		allowable: 240
	},
	{
		span: .5,
		vonMises: 78,
		allowable: 240
	},
	{
		span: .6,
		vonMises: 61,
		allowable: 240
	},
	{
		span: .7,
		vonMises: 46,
		allowable: 240
	},
	{
		span: .8,
		vonMises: 33,
		allowable: 240
	},
	{
		span: .9,
		vonMises: 21,
		allowable: 240
	},
	{
		span: 1,
		vonMises: 12,
		allowable: 240
	}
];
var cfdPeak = cfdForce.reduce((best, row) => row.ld > best.ld ? row : best);
var cfdTransonic = cfdForce.reduce((worst, row) => row.cd > worst.cd ? row : worst);
var heatPeak = cbaeroHeat.reduce((best, row) => row.nose > best.nose ? row : best);
var feaRoot = feaSpar[0];
var SYSTEM_IDS = [
	"fulmen",
	"pilum",
	"contus",
	"aquila"
];
var systems = {
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
			{
				src: "/images/fulmen-release.jpg",
				caption: "Air-launch release, concept still"
			},
			{
				src: "/images/fulmen.jpg",
				caption: "Sustained flight over range"
			},
			{
				src: "/images/hero-range.jpg",
				caption: "Blue-hour range pass"
			}
		],
		specs: [
			{
				label: "Stencil",
				value: "FLM"
			},
			{
				label: "Class",
				value: "Air launched"
			},
			{
				label: "Meaning",
				value: "Thunderbolt"
			},
			{
				label: "Status",
				value: "Concept"
			},
			{
				label: "Analysis",
				value: "CFD force"
			},
			{
				label: "Public",
				value: "Name, class, stencil"
			}
		],
		features: [
			{
				title: "Air launched",
				body: "Sized to F-35-class stations. Radio call: Fulmen off the Lightning."
			},
			{
				title: "CFD pack",
				body: "Force coefficients versus Mach sit under the airframe. Peak L/D is a concept placeholder until the solver file is replaced."
			},
			{
				title: "Concept level",
				body: "Public pages stay at concept level. No seeker or payload layout is published here."
			}
		],
		highlights: [
			{
				label: "Peak L/D",
				value: `${cfdPeak.ld.toFixed(1)} @ M${cfdPeak.mach.toFixed(2)}`
			},
			{
				label: "Transonic CD",
				value: `${cfdTransonic.cd.toFixed(3)} @ M${cfdTransonic.mach.toFixed(2)}`
			},
			{
				label: "Envelope",
				value: `M ${cfdForce[0].mach.toFixed(1)}–${cfdForce[cfdForce.length - 1].mach.toFixed(1)}`
			},
			{
				label: "Alpha",
				value: "4.0°"
			}
		]
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
			{
				src: "/images/pilum-stand.jpg",
				caption: "Inspection stand, hangar light"
			},
			{
				src: "/images/pilum.jpg",
				caption: "From the guns"
			},
			{
				src: "/images/operators.jpg",
				caption: "Range picture"
			}
		],
		specs: [
			{
				label: "Stencil",
				value: "PLM"
			},
			{
				label: "Class",
				value: "155 artillery"
			},
			{
				label: "Meaning",
				value: "Heavy javelin"
			},
			{
				label: "Status",
				value: "Concept"
			},
			{
				label: "Analysis",
				value: "CBAERO heat"
			},
			{
				label: "Public",
				value: "Name, class, stencil"
			}
		],
		features: [
			{
				title: "155 class",
				body: "Ramjet-round concept from howitzer-class artillery. Radio call: Pilum from the guns."
			},
			{
				title: "CBAERO pack",
				body: "Heat flux versus time sits under the airframe. Nose and leading-edge traces are placeholders until the file is replaced."
			},
			{
				title: "Concept level",
				body: "Public pages stay at concept level. No seeker or payload layout is published here."
			}
		],
		highlights: [
			{
				label: "Peak nose",
				value: `${heatPeak.nose} W/cm²`
			},
			{
				label: "Peak LE",
				value: `${heatPeak.le} W/cm²`
			},
			{
				label: "At time",
				value: `t = ${heatPeak.time} s`
			},
			{
				label: "Window",
				value: `0–${cbaeroHeat[cbaeroHeat.length - 1].time} s`
			}
		]
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
			{
				src: "/images/contus-vls.jpg",
				caption: "Cell launch, concept still"
			},
			{
				src: "/images/contus.jpg",
				caption: "Air-breather in climb"
			},
			{
				src: "/images/hero-range.jpg",
				caption: "Range picture"
			}
		],
		specs: [
			{
				label: "Stencil",
				value: "CTS"
			},
			{
				label: "Class",
				value: "VLS"
			},
			{
				label: "Meaning",
				value: "Heavy lance"
			},
			{
				label: "Status",
				value: "Concept"
			},
			{
				label: "Analysis",
				value: "CFD force"
			},
			{
				label: "Marking",
				value: "CTS"
			}
		],
		features: [
			{
				title: "Cell launched",
				body: "VLS-class air-breather. Radio call: Contus off the rails. Say Vespasian Contus on slides."
			},
			{
				title: "Does not return",
				body: "A heavy lance: two-handed, hits from a distance. Canister marking CTS."
			},
			{
				title: "CFD pack",
				body: "Force coefficients versus Mach sit under the airframe until the solver file is replaced."
			}
		],
		highlights: [
			{
				label: "Peak L/D",
				value: `${cfdPeak.ld.toFixed(1)} @ M${cfdPeak.mach.toFixed(2)}`
			},
			{
				label: "Transonic CD",
				value: `${cfdTransonic.cd.toFixed(3)} @ M${cfdTransonic.mach.toFixed(2)}`
			},
			{
				label: "Envelope",
				value: `M ${cfdForce[0].mach.toFixed(1)}–${cfdForce[cfdForce.length - 1].mach.toFixed(1)}`
			},
			{
				label: "Returns",
				value: "No"
			}
		]
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
			{
				src: "/images/aquila-sea.jpg",
				caption: "Low over water, concept still"
			},
			{
				src: "/images/aquila.jpg",
				caption: "Eagle in the stack"
			},
			{
				src: "/images/operators.jpg",
				caption: "The picture around the airframe"
			}
		],
		specs: [
			{
				label: "Stencil",
				value: "AQL"
			},
			{
				label: "Class",
				value: "UAS"
			},
			{
				label: "Meaning",
				value: "Eagle"
			},
			{
				label: "Status",
				value: "Concept"
			},
			{
				label: "Analysis",
				value: "FEA spar"
			},
			{
				label: "Returns",
				value: "Yes"
			}
		],
		features: [
			{
				title: "Returns",
				body: "The only airframe that comes back. Radio call: Aquila in the stack."
			},
			{
				title: "FEA pack",
				body: "Spar von Mises versus span for a +3.0g pull-up. Replace the CSV with the real spar or bulkhead run."
			},
			{
				title: "Concept level",
				body: "Public pages stay at concept level. The mark is an eagle. The house mark is the same bird."
			}
		],
		highlights: [
			{
				label: "Root stress",
				value: `${feaRoot.vonMises} MPa`
			},
			{
				label: "Allowable",
				value: `${feaRoot.allowable} MPa`
			},
			{
				label: "Margin",
				value: `${((feaRoot.allowable - feaRoot.vonMises) / feaRoot.allowable * 100).toFixed(0)}%`
			},
			{
				label: "Load case",
				value: "+3.0g pull-up"
			}
		]
	}
};
var systemList = SYSTEM_IDS.map((id) => systems[id]);
function isSystemId(value) {
	return SYSTEM_IDS.includes(value);
}
function getSystem(id) {
	return isSystemId(id) ? systems[id] : void 0;
}
function nextSystem(id) {
	return systems[SYSTEM_IDS[(SYSTEM_IDS.indexOf(id) + 1) % SYSTEM_IDS.length]];
}
var house = {
	name: "Vespasian",
	stencils: "FLM · PLM · CTS · AQL · VGL",
	tagline: "Concept air vehicles and a common picture.",
	line: "Four airframes. One picture.",
	note: "Thrown weapons, a bolt from the sky, a bird that returns. Cacus is spare. Vigil stays off the airframes."
};
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-eagle.png",
						alt: "",
						className: "h-8 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tracking-[0.28em] uppercase",
						children: house.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-sm text-sm text-muted",
					children: [house.tagline, " Public pages stay at concept level."]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
					children: "Line"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: systemList.map((system) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/systems/$id",
						params: { id: system.id },
						className: "font-display text-sm tracking-[0.16em] text-fg uppercase hover:text-accent",
						children: [
							system.stencil,
							" · ",
							system.name
						]
					}) }, system.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
					children: "House"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 font-display text-sm tracking-[0.16em] uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/vigil",
							className: "hover:text-accent",
							children: "Vigil"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/analysis",
							className: "hover:text-accent",
							children: "Analysis"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/company",
							className: "hover:text-accent",
							children: "Company"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[10px] tracking-[0.2em] text-muted uppercase",
				children: [house.name, " · concept studies"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] tracking-[0.2em] text-muted uppercase",
				children: house.stencils
			})]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function spaced(value) {
	return value.split("").join(" ");
}
var links = [
	{
		to: "/systems",
		label: "Systems"
	},
	{
		to: "/vigil",
		label: "Vigil"
	},
	{
		to: "/analysis",
		label: "Analysis"
	},
	{
		to: "/company",
		label: "Company"
	}
];
function SiteNav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-200", scrolled || open ? "border-b border-line bg-bg/95" : "bg-gradient-to-b from-bg/80 to-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-14 items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-eagle.png",
						alt: "",
						className: "h-8 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tracking-[0.32em] uppercase",
						children: house.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("font-display text-[11px] tracking-[0.22em] uppercase transition-colors duration-150", pathname.startsWith(link.to) ? "text-fg" : "text-muted hover:text-fg"),
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center border border-line text-fg md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[calc(100svh-3.5rem)] flex-col bg-bg px-6 pt-6 pb-10 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1",
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					className: "font-display border-b border-line py-4 text-3xl tracking-[0.12em] uppercase",
					children: link.label
				}, link.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-px bg-line",
				children: systemList.map((system) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/systems/$id",
					params: { id: system.id },
					className: "bg-bg px-4 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
						children: system.stencil
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display mt-1 text-2xl tracking-[0.1em] uppercase",
						children: system.name
					})]
				}, system.id))
			})]
		}) : null]
	});
}
var styles_default = "/assets/styles-DdhfncZ4.css";
var APP_NAME = "VESPASIAN";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Vespasian. Concept air vehicles and analysis. Fulmen, Pilum, Contus, Aquila. Vigil is the picture."
			},
			{
				name: "theme-color",
				content: "#080808"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/logo-eagle.png"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Barlow:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "bg-bg antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-DHmcZOJ3.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./analysis-DWaRy5A1.mjs");
var Route$4 = createFileRoute("/analysis")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./company-CtZGCjuP.mjs");
var Route$3 = createFileRoute("/company")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./vigil-BS4i0i5S.mjs");
var Route$2 = createFileRoute("/vigil")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./systems.index-_YVZMpn5.mjs");
var Route$1 = createFileRoute("/systems/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./systems._id-TFc7pw68.mjs");
var Route = createFileRoute("/systems/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AnalysisRoute = Route$4.update({
	id: "/analysis",
	path: "/analysis",
	getParentRoute: () => Route$6
});
var CompanyRoute = Route$3.update({
	id: "/company",
	path: "/company",
	getParentRoute: () => Route$6
});
var VigilRoute = Route$2.update({
	id: "/vigil",
	path: "/vigil",
	getParentRoute: () => Route$6
});
var SystemsIndexRoute = Route$1.update({
	id: "/systems/",
	path: "/systems/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AnalysisRoute,
	CompanyRoute,
	VigilRoute,
	SystemsIdRoute: Route.update({
		id: "/systems/$id",
		path: "/systems/$id",
		getParentRoute: () => Route$6
	}),
	SystemsIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { getSystem as a, systemList as c, cfdForce as d, feaSpar as f, spaced as i, systems as l, Route as n, house as o, cn as r, nextSystem as s, router_exports as t, cbaeroHeat as u };
