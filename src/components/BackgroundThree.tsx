"use client";

/**
 * Interactive Three.js background — a glowing "geodesic network".
 *
 * An icosphere whose triangulation edges form a wireframe net with glowing
 * nodes at its vertices, wrapped by a sparser counter-rotating shell and an
 * ambient dust field. Reacts to pointer (parallax tilt), scroll (extra spin +
 * palette shift cyan -> violet) and theme (dark/light palette). Idle keeps a
 * slow rotation and gentle breathing pulse.
 *
 * Guards: respects prefers-reduced-motion (renders a single static frame),
 * caps DPR, pauses while the tab is hidden, and no-ops if WebGL is missing.
 */

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

type Palette = {
  base: THREE.Color;
  nodeStart: THREE.Color;
  nodeEnd: THREE.Color;
  lineStart: THREE.Color;
  lineEnd: THREE.Color;
  dust: THREE.Color;
  additive: boolean;
  nodeOpacity: number;
  lineOpacity: number;
  dustOpacity: number;
};

const PALETTES: Record<"dark" | "light", Palette> = {
  dark: {
    base: new THREE.Color(0x060a14),
    nodeStart: new THREE.Color(0x4ce8ff),
    nodeEnd: new THREE.Color(0xb070ff),
    lineStart: new THREE.Color(0x2bd2ff),
    lineEnd: new THREE.Color(0x8a6cff),
    dust: new THREE.Color(0x9fe9ff),
    additive: true,
    nodeOpacity: 0.9,
    lineOpacity: 0.22,
    dustOpacity: 0.35,
  },
  light: {
    base: new THREE.Color(0xf6f8fc),
    nodeStart: new THREE.Color(0x37b0cf),
    nodeEnd: new THREE.Color(0x7b70de),
    lineStart: new THREE.Color(0x66b6cf),
    lineEnd: new THREE.Color(0x9a90e6),
    dust: new THREE.Color(0x6cc0d6),
    additive: false,
    nodeOpacity: 0.5,
    lineOpacity: 0.18,
    dustOpacity: 0.0,
  },
};

function makeGlowTexture() {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.6)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export function BackgroundThree() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef<"dark" | "light">("dark");

  useEffect(() => {
    themeRef.current = resolvedTheme === "light" ? "light" : "dark";
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      return; // WebGL unavailable → CSS fallback background stays
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 3.8;

    // --- geometry -----------------------------------------------------
    const glow = makeGlowTexture();
    const group = new THREE.Group();
    scene.add(group);

    const icoGeo = new THREE.IcosahedronGeometry(1.5, 3);

    const nodeMat = new THREE.PointsMaterial({
      size: 0.055,
      map: glow,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const nodes = new THREE.Points(icoGeo, nodeMat);
    group.add(nodes);

    const lineMat = new THREE.LineBasicMaterial({ transparent: true, depthWrite: false });
    const lines = new THREE.LineSegments(new THREE.WireframeGeometry(icoGeo), lineMat);
    group.add(lines);

    const shellMat = new THREE.LineBasicMaterial({ transparent: true, depthWrite: false });
    const shell = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.35, 1)),
      shellMat
    );
    scene.add(shell);

    // ambient dust
    const DUST = 320;
    const dustPos = new Float32Array(DUST * 3);
    for (let i = 0; i < DUST; i++) {
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dustPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      dustPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      dustPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.03,
      map: glow,
      transparent: true,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // --- interaction state -------------------------------------------
    const pointer = { x: 0, y: 0 };
    let scroll = 0;

    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll = max > 0 ? window.scrollY / max : 0;
    };
    // reduced-motion: static frame must be redrawn after resize/theme change
    let dirty = true;
    let lastTheme: "dark" | "light" | null = null;

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      dirty = true;
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    // --- render -------------------------------------------------------
    const timer = new THREE.Timer();
    timer.connect(document); // ignores time spent in a hidden tab
    const nodeColor = new THREE.Color();
    const lineColor = new THREE.Color();

    function applyPalette() {
      const p = PALETTES[themeRef.current];
      renderer.setClearColor(p.base, 1);
      const blending = p.additive ? THREE.AdditiveBlending : THREE.NormalBlending;
      nodeColor.copy(p.nodeStart).lerp(p.nodeEnd, scroll);
      lineColor.copy(p.lineStart).lerp(p.lineEnd, scroll);
      nodeMat.color.copy(nodeColor);
      nodeMat.opacity = p.nodeOpacity;
      nodeMat.blending = blending;
      lineMat.color.copy(lineColor);
      lineMat.opacity = p.lineOpacity;
      lineMat.blending = blending;
      shellMat.color.copy(lineColor);
      shellMat.opacity = p.lineOpacity * 0.6;
      shellMat.blending = blending;
      dustMat.color.copy(p.dust);
      dustMat.opacity = p.dustOpacity;
      dustMat.blending = blending;
    }

    function frame(timestamp: number) {
      timer.update(timestamp);
      const t = timer.getElapsed();

      // idle spin + scroll-driven extra turn
      const targetY = pointer.x * 0.35 + scroll * Math.PI * 2 + t * 0.06;
      const targetX = pointer.y * 0.28;
      group.rotation.y += (targetY - group.rotation.y) * 0.05;
      group.rotation.x += (targetX - group.rotation.x) * 0.05;

      // breathing pulse
      const s = 1 + Math.sin(t * 0.6) * 0.03;
      group.scale.setScalar(s);
      nodeMat.size = 0.055 + Math.sin(t * 1.6) * 0.008;

      shell.rotation.y -= 0.0016;
      shell.rotation.x = group.rotation.x * 0.5;
      dust.rotation.y += 0.0004;

      applyPalette();
      renderer.render(scene, camera);
    }

    let raf = 0;
    let running = true;
    const loop = (timestamp: number) => {
      if (reducedMotion) {
        // static frame, re-rendered only when size or theme changed
        if (dirty || lastTheme !== themeRef.current) {
          applyPalette();
          renderer.render(scene, camera);
          dirty = false;
          lastTheme = themeRef.current;
        }
      } else if (running) {
        frame(timestamp);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    // --- cleanup ------------------------------------------------------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      icoGeo.dispose();
      lines.geometry.dispose();
      shell.geometry.dispose();
      dustGeo.dispose();
      nodeMat.dispose();
      lineMat.dispose();
      shellMat.dispose();
      dustMat.dispose();
      glow.dispose();
      timer.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
    />
  );
}
