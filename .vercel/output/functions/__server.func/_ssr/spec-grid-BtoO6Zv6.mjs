import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as systems, r as cn } from "./router-BHNQ1pe5.mjs";
import { n as BracketButton } from "./bracket-CNbQd0_q.mjs";
import { t as MediaFrame } from "./media-frame-DcsC6V0S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/spec-grid-BtoO6Zv6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function buildModel(THREE, id) {
	const metal = new THREE.MeshStandardMaterial({
		color: 13223615,
		metalness: .82,
		roughness: .28
	});
	const dark = new THREE.MeshStandardMaterial({
		color: 2764083,
		metalness: .45,
		roughness: .48
	});
	const group = new THREE.Group();
	const fuselage = (len, r) => {
		const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 8, 28), metal);
		mesh.rotation.z = Math.PI / 2;
		return mesh;
	};
	if (id === "fulmen") {
		group.add(fuselage(1.35, .055));
		const wing = new THREE.Mesh(new THREE.BoxGeometry(.3, .012, .46), dark);
		wing.position.set(-.08, 0, 0);
		group.add(wing);
		const canard = new THREE.Mesh(new THREE.BoxGeometry(.12, .008, .18), dark);
		canard.position.set(.48, 0, 0);
		group.add(canard);
		for (const y of [.09, -.09]) {
			const fin = new THREE.Mesh(new THREE.BoxGeometry(.1, .01, .16), dark);
			fin.position.set(-.64, y, 0);
			group.add(fin);
		}
		const inlet = new THREE.Mesh(new THREE.TorusGeometry(.05, .01, 8, 24), dark);
		inlet.rotation.y = Math.PI / 2;
		inlet.position.x = .22;
		group.add(inlet);
	} else if (id === "pilum") {
		const cyl = new THREE.Mesh(new THREE.CylinderGeometry(.068, .068, 1.08, 28), metal);
		cyl.rotation.z = Math.PI / 2;
		group.add(cyl);
		const nose = new THREE.Mesh(new THREE.ConeGeometry(.068, .22, 24), metal);
		nose.rotation.z = -Math.PI / 2;
		nose.position.x = .65;
		group.add(nose);
		const canard = new THREE.Mesh(new THREE.BoxGeometry(.1, .008, .2), dark);
		canard.position.set(.28, 0, 0);
		group.add(canard);
		const ring = new THREE.Mesh(new THREE.TorusGeometry(.07, .012, 8, 28), dark);
		ring.rotation.y = Math.PI / 2;
		ring.position.x = -.42;
		group.add(ring);
		const tail = new THREE.Mesh(new THREE.CylinderGeometry(.05, .062, .18, 20), dark);
		tail.rotation.z = Math.PI / 2;
		tail.position.x = -.58;
		group.add(tail);
	} else if (id === "contus") {
		group.add(fuselage(1.72, .072));
		const inlet = new THREE.Mesh(new THREE.TorusGeometry(.078, .014, 8, 28), dark);
		inlet.rotation.y = Math.PI / 2;
		inlet.position.x = .52;
		group.add(inlet);
		for (const y of [.11, -.11]) {
			const fin = new THREE.Mesh(new THREE.BoxGeometry(.14, .012, .24), dark);
			fin.position.set(-.78, y, 0);
			group.add(fin);
		}
		const wing = new THREE.Mesh(new THREE.BoxGeometry(.22, .012, .36), dark);
		wing.position.set(-.18, 0, 0);
		group.add(wing);
	} else {
		const fuse = new THREE.Mesh(new THREE.CapsuleGeometry(.055, .72, 8, 20), metal);
		fuse.rotation.z = Math.PI / 2;
		group.add(fuse);
		const wing = new THREE.Mesh(new THREE.BoxGeometry(.32, .016, 1.22), dark);
		wing.position.set(-.04, 0, 0);
		group.add(wing);
		const tail = new THREE.Mesh(new THREE.BoxGeometry(.18, .16, .018), dark);
		tail.position.set(-.44, .08, 0);
		group.add(tail);
		const vstab = new THREE.Mesh(new THREE.BoxGeometry(.14, .12, .016), dark);
		vstab.position.set(-.44, .14, 0);
		group.add(vstab);
	}
	return group;
}
function ModelStage({ model, onModelChange, showSwitcher = false }) {
	const canvasRef = (0, import_react.useRef)(null);
	const modelRef = (0, import_react.useRef)(model);
	modelRef.current = model;
	const system = systems[model];
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		let disposed = false;
		let frame = 0;
		let renderer;
		let onLost;
		const state = {
			dragging: false,
			lx: 0,
			ly: 0,
			ax: .28,
			ay: .7
		};
		const onDown = (e) => {
			state.dragging = true;
			state.lx = e.clientX;
			state.ly = e.clientY;
			canvas.setPointerCapture(e.pointerId);
		};
		const onUp = () => {
			state.dragging = false;
		};
		const onMove = (e) => {
			if (!state.dragging) return;
			state.ay += (e.clientX - state.lx) * .008;
			state.ax += (e.clientY - state.ly) * .008;
			state.lx = e.clientX;
			state.ly = e.clientY;
		};
		canvas.addEventListener("pointerdown", onDown);
		canvas.addEventListener("pointerup", onUp);
		canvas.addEventListener("pointerleave", onUp);
		canvas.addEventListener("pointermove", onMove);
		import("../_libs/three.mjs").then((n) => n.t).then((THREE) => {
			if (disposed || !canvasRef.current) return;
			renderer = new THREE.WebGLRenderer({
				canvas,
				antialias: true,
				alpha: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setClearColor(0, 0);
			onLost = (event) => event.preventDefault();
			canvas.addEventListener("webglcontextlost", onLost);
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(35, 1, .1, 80);
			camera.position.set(.95, .38, 2.55);
			scene.add(new THREE.AmbientLight(9081760, .55));
			const key = new THREE.DirectionalLight(15789800, 1.15);
			key.position.set(2.2, 3.1, 4);
			const rim = new THREE.DirectionalLight(8954040, .7);
			rim.position.set(-3.2, 1.1, -2.4);
			const fill = new THREE.HemisphereLight(12109008, 1118481, .35);
			scene.add(key, rim, fill);
			const grid = new THREE.GridHelper(6, 24, 2763306, 1710618);
			grid.position.y = -.42;
			scene.add(grid);
			let group = buildModel(THREE, modelRef.current);
			scene.add(group);
			const resize = () => {
				const w = canvas.clientWidth;
				const h = canvas.clientHeight;
				renderer?.setSize(w, h, false);
				camera.aspect = w / Math.max(h, 1);
				camera.updateProjectionMatrix();
			};
			const ro = new ResizeObserver(resize);
			ro.observe(canvas);
			resize();
			const tick = () => {
				if (disposed) return;
				if (!state.dragging) state.ay += .004;
				group.rotation.y = state.ay;
				group.rotation.x = state.ax * .14;
				renderer?.render(scene, camera);
				frame = requestAnimationFrame(tick);
			};
			tick();
			const applyModel = () => {
				scene.remove(group);
				group.traverse((obj) => {
					if (obj instanceof THREE.Mesh) {
						obj.geometry.dispose();
						if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
						else obj.material.dispose();
					}
				});
				group = buildModel(THREE, modelRef.current);
				scene.add(group);
			};
			const poll = window.setInterval(() => {
				if (group.userData.id !== modelRef.current) {
					applyModel();
					group.userData.id = modelRef.current;
				}
			}, 160);
			group.userData.id = modelRef.current;
			cleanupExtra = () => {
				window.clearInterval(poll);
				ro.disconnect();
				scene.remove(group);
				grid.geometry.dispose();
			};
		});
		let cleanupExtra = () => {};
		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			canvas.removeEventListener("pointerdown", onDown);
			canvas.removeEventListener("pointerup", onUp);
			canvas.removeEventListener("pointerleave", onUp);
			canvas.removeEventListener("pointermove", onMove);
			if (onLost) canvas.removeEventListener("webglcontextlost", onLost);
			cleanupExtra();
			renderer?.dispose();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showSwitcher ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 flex flex-wrap gap-2",
		children: Object.keys(systems).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BracketButton, {
			active: id === model,
			onClick: () => onModelChange?.(id),
			children: [
				systems[id].stencil,
				" · ",
				systems[id].name
			]
		}, id))
	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaFrame, {
		label: `${system.stencil} · ${system.name}`,
		meta: "Drag to rotate · abstract stand-in",
		className: "min-h-[380px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block h-[380px] w-full cursor-grab active:cursor-grabbing sm:h-[460px]"
		})
	})] });
}
function SpecGrid({ specs, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: cn("grid grid-cols-2 gap-px bg-line", className),
		children: specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-bg px-3 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-mono text-[10px] tracking-[0.22em] text-muted uppercase",
				children: spec.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "font-display mt-1 text-xl tracking-[0.06em] text-fg uppercase",
				children: spec.value
			})]
		}, spec.label))
	});
}
//#endregion
export { SpecGrid as n, ModelStage as t };
