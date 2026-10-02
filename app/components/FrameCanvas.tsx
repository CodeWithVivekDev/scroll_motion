"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 50;
// Frames are named ezgif-frame-001.png … ezgif-frame-050.png (1-indexed)
const FRAME_PATH = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.png`;

export default function FrameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(
    Array(TOTAL_FRAMES).fill(null)
  );
  const loadedRef = useRef<boolean[]>(Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = useRef(0); // smooth lerped frame (float)
  const targetFrameRef = useRef(0);  // exact frame index from scroll
  const rafRef = useRef<number | null>(null);
  const reducedMotion = useRef(false);
  // Store DPR separately so resize and draw both use the same value
  const dprRef = useRef(1);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── DPR-aware resize ──────────────────────────────────────────────────────
    function resize() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;

      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // CRITICAL: reset transform before re-applying scale, otherwise
      // calling scale() multiple times accumulates and corrupts rendering.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawFrame(Math.round(currentFrameRef.current));
    }

    window.addEventListener("resize", resize);
    resize(); // initial sizing

    // ── Draw a single frame (0-based index) ──────────────────────────────────
    function drawFrame(idx: number) {
      if (!canvas || !ctx) return;
      const dpr = dprRef.current;
      // Logical (CSS) pixel dimensions — ctx transform already scales for DPR
      const W = canvas.width  / dpr;
      const H = canvas.height / dpr;

      // Deep luxury black/dark gold background — seamless with frames
      ctx.fillStyle = "#080600";
      ctx.fillRect(0, 0, W, H);

      const img = framesRef.current[idx];
      if (!img || !loadedRef.current[idx]) return;

      // Cover-fit: fills viewport while preserving aspect ratio
      const iW = img.naturalWidth;
      const iH = img.naturalHeight;
      const scale = Math.max(W / iW, H / iH);
      const rW = iW * scale;
      const rH = iH * scale;
      const x  = (W - rW) / 2;
      const y  = (H - rH) / 2;

      ctx.drawImage(img, x, y, rW, rH);
    }

    // ── Scroll → target frame ─────────────────────────────────────────────────
    // The page outer div is 400vh tall.
    // The sticky element is 100vh.  
    // Therefore maximum scrollY = (400 - 100)vh = 300vh = 3 × innerHeight.
    // We map that full range to frames 0 → 49.
    function updateTarget() {
      const maxScroll = window.innerHeight * 3; // 300vh — actual scrollable distance
      const scrolled  = Math.min(Math.max(window.scrollY, 0), maxScroll);
      const progress  = scrolled / maxScroll;             // 0.0 → 1.0
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1); // 0 → 49
    }

    window.addEventListener("scroll", updateTarget, { passive: true });
    updateTarget();

    // ── Persistent rAF loop with adaptive lerp ────────────────────────────────
    function loop() {
      const target  = targetFrameRef.current;
      const current = currentFrameRef.current;
      const dist    = Math.abs(target - current);

      let lerpFactor: number;
      if (reducedMotion.current) {
        lerpFactor = 1; // instant snap for reduced-motion users
      } else {
        // Faster lerp when frames are far apart (avoids visual lag on quick scroll)
        // Slower lerp near the destination for a cinematic ease-out
        lerpFactor = dist > 5 ? 0.22 : dist > 1 ? 0.15 : 0.10;
      }

      const next = current + (target - current) * lerpFactor;
      currentFrameRef.current = next;

      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(next)));
      drawFrame(clamped);

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    // ── Progressive frame loading ─────────────────────────────────────────────
    function loadFrame(frameNumber: number): Promise<void> {
      // frameNumber is 1-indexed (1 … 50)
      return new Promise((resolve) => {
        const idx = frameNumber - 1; // convert to 0-based array index
        const img = new Image();
        img.src = FRAME_PATH(frameNumber);
        img.onload = () => {
          framesRef.current[idx]  = img;
          loadedRef.current[idx]  = true;
          resolve();
        };
        img.onerror = () => resolve(); // silently skip missing frames
      });
    }

    async function loadAllFrames() {
      // Load frame 1 first so something is visible immediately
      await loadFrame(1);
      drawFrame(0);

      // Load remaining frames 2-50 in parallel
      await Promise.all(
        Array.from({ length: TOTAL_FRAMES - 1 }, (_, i) => loadFrame(i + 2))
      );
    }

    loadAllFrames();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateTarget);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        display: "block",
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
}
