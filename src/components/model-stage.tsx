import { useEffect, useRef } from "react";
import type { SystemId } from "@/lib/systems";
import { systems } from "@/lib/systems";
import { BracketButton } from "./bracket";
import { MediaFrame } from "./media-frame";

type ThreeNS = typeof import("three");

function buildModel(THREE: ThreeNS, id: SystemId) {
  const metal = new THREE.MeshStandardMaterial({
    color: 0xc9c6bf,
    metalness: 0.82,
    roughness: 0.28,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x2a2d33,
    metalness: 0.45,
    roughness: 0.48,
  });
  const group = new THREE.Group();

  const fuselage = (len: number, r: number) => {
    const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 8, 28), metal);
    mesh.rotation.z = Math.PI / 2;
    return mesh;
  };

  if (id === "fulmen") {
    group.add(fuselage(1.35, 0.055));
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.012, 0.46), dark);
    wing.position.set(-0.08, 0, 0);
    group.add(wing);
    const canard = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.008, 0.18), dark);
    canard.position.set(0.48, 0, 0);
    group.add(canard);
    for (const y of [0.09, -0.09]) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.01, 0.16), dark);
      fin.position.set(-0.64, y, 0);
      group.add(fin);
    }
    const inlet = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.01, 8, 24), dark);
    inlet.rotation.y = Math.PI / 2;
    inlet.position.x = 0.22;
    group.add(inlet);
  } else if (id === "pilum") {
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 1.08, 28), metal);
    cyl.rotation.z = Math.PI / 2;
    group.add(cyl);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.068, 0.22, 24), metal);
    nose.rotation.z = -Math.PI / 2;
    nose.position.x = 0.65;
    group.add(nose);
    const canard = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.008, 0.2), dark);
    canard.position.set(0.28, 0, 0);
    group.add(canard);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 8, 28), dark);
    ring.rotation.y = Math.PI / 2;
    ring.position.x = -0.42;
    group.add(ring);
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.062, 0.18, 20), dark);
    tail.rotation.z = Math.PI / 2;
    tail.position.x = -0.58;
    group.add(tail);
  } else if (id === "contus") {
    group.add(fuselage(1.72, 0.072));
    const inlet = new THREE.Mesh(new THREE.TorusGeometry(0.078, 0.014, 8, 28), dark);
    inlet.rotation.y = Math.PI / 2;
    inlet.position.x = 0.52;
    group.add(inlet);
    for (const y of [0.11, -0.11]) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.012, 0.24), dark);
      fin.position.set(-0.78, y, 0);
      group.add(fin);
    }
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.012, 0.36), dark);
    wing.position.set(-0.18, 0, 0);
    group.add(wing);
  } else {
    const fuse = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.72, 8, 20), metal);
    fuse.rotation.z = Math.PI / 2;
    group.add(fuse);
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.016, 1.22), dark);
    wing.position.set(-0.04, 0, 0);
    group.add(wing);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.018), dark);
    tail.position.set(-0.44, 0.08, 0);
    group.add(tail);
    const vstab = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.016), dark);
    vstab.position.set(-0.44, 0.14, 0);
    group.add(vstab);
  }

  return group;
}

export function ModelStage({
  model,
  onModelChange,
  showSwitcher = false,
}: {
  model: SystemId;
  onModelChange?: (id: SystemId) => void;
  showSwitcher?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef(model);
  modelRef.current = model;
  const system = systems[model];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let disposed = false;
    let frame = 0;
    let renderer: import("three").WebGLRenderer | undefined;
    let onLost: ((event: Event) => void) | undefined;

    const state = { dragging: false, lx: 0, ly: 0, ax: 0.28, ay: 0.7 };

    const onDown = (e: PointerEvent) => {
      state.dragging = true;
      state.lx = e.clientX;
      state.ly = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onUp = () => {
      state.dragging = false;
    };
    const onMove = (e: PointerEvent) => {
      if (!state.dragging) return;
      state.ay += (e.clientX - state.lx) * 0.008;
      state.ax += (e.clientY - state.ly) * 0.008;
      state.lx = e.clientX;
      state.ly = e.clientY;
    };

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onUp);
    canvas.addEventListener("pointermove", onMove);

    void import("three").then((THREE) => {
      if (disposed || !canvasRef.current) return;
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      onLost = (event: Event) => event.preventDefault();
      canvas.addEventListener("webglcontextlost", onLost);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 80);
      camera.position.set(0.95, 0.38, 2.55);

      scene.add(new THREE.AmbientLight(0x8a93a0, 0.55));
      const key = new THREE.DirectionalLight(0xf0eee8, 1.15);
      key.position.set(2.2, 3.1, 4);
      const rim = new THREE.DirectionalLight(0x88a0b8, 0.7);
      rim.position.set(-3.2, 1.1, -2.4);
      const fill = new THREE.HemisphereLight(0xb8c4d0, 0x111111, 0.35);
      scene.add(key, rim, fill);

      const grid = new THREE.GridHelper(6, 24, 0x2a2a2a, 0x1a1a1a);
      grid.position.y = -0.42;
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
        if (!state.dragging) state.ay += 0.004;
        group.rotation.y = state.ay;
        group.rotation.x = state.ax * 0.14;
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

  return (
    <div>
      {showSwitcher ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {(Object.keys(systems) as SystemId[]).map((id) => (
            <BracketButton key={id} active={id === model} onClick={() => onModelChange?.(id)}>
              {systems[id].stencil} · {systems[id].name}
            </BracketButton>
          ))}
        </div>
      ) : null}
      <MediaFrame
        label={`${system.stencil} · ${system.name}`}
        meta="Drag to rotate · abstract stand-in"
        className="min-h-[380px]"
      >
        <canvas ref={canvasRef} className="block h-[380px] w-full cursor-grab active:cursor-grabbing sm:h-[460px]" />
      </MediaFrame>
    </div>
  );
}
