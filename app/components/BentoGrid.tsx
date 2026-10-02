"use client";

import React from "react";

export default function BentoGrid() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#020204] text-white overflow-hidden border-b border-white/[0.06]">
      {/* ── Background Cosmic Glow Elements ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-900/20 via-pink-900/15 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-purple-200/90 font-medium">
              System Architecture & Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl">
            Engineered for high-precision <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-300">AI visual synthesis</span>
          </h2>
        </div>

        {/* ── BENTO GRID CONTAINER ── */}
        {/* Layout matching exact structure of reference image:
            Top Left (60% width), Top Right (40% width)
            Bottom Left (Tall ~38% width), Middle Right (Wide ~62%),
            Bottom Right split: Bottom Center (38%) + Bottom Far Right Stack (24%)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* ════════════ 1. TOP-LEFT CARD (Wide Headline & Creative Feature) ════════════ */}
          <div className="lg:col-span-7 group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.1] hover:border-purple-500/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
            {/* Soft inner purple glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-500" />
            
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-purple-300/80 bg-purple-950/40 px-3 py-1 rounded-full border border-purple-500/20">
                  CORE ENGINE v4.2
                </span>
                <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4 uppercase leading-none">
                  NEURAL <br /> CANVAS PRO
                </h3>
              </div>

              {/* Decorative status indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[11px]">8K ULTRA</span>
              </div>
            </div>

            {/* Bottom visual preview element */}
            <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-6 border-t border-white/[0.08]">
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md leading-relaxed">
                Multi-latent diffusion pipelines optimized for zero-artifact frame generation and sub-second prompt evaluation.
              </p>
              
              {/* Creator avatars preview */}
              <div className="flex items-center -space-x-2 shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 border-2 border-black flex items-center justify-center text-[10px] font-bold">DF</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-black flex items-center justify-center text-[10px] font-bold">AI</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-amber-500 border-2 border-black flex items-center justify-center text-[10px] font-bold">8K</div>
              </div>
            </div>
          </div>

          {/* ════════════ 3. TOP-RIGHT CARD (Stage Lights & Dynamic Wave Matrix) ════════════ */}
          <div className="lg:col-span-5 group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.1] hover:border-pink-500/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
            {/* Top row in card: Title + 4-circle logo indicator */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">
                  HYPER-REAL DYNAMICS
                </h4>
                <p className="text-xs text-neutral-400 font-light mt-1">
                  VOLUMETRIC LIGHTING & RAY SYNTHESIS
                </p>
              </div>

              {/* 4-circle matrix logo icon (matching reference image top-right badge) */}
              <div className="w-10 h-10 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                <div className="grid grid-cols-2 gap-1 w-full h-full">
                  <div className="rounded-full bg-purple-400" />
                  <div className="rounded-full bg-pink-400" />
                  <div className="rounded-full bg-pink-400" />
                  <div className="rounded-full bg-purple-400" />
                </div>
              </div>
            </div>

            {/* Middle stage lighting art visualizer */}
            <div className="relative my-4 h-28 w-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center">
              {/* Simulated stage spotlight beams */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-transparent" />
              <div className="absolute bottom-0 w-full h-1/2 flex items-end justify-center gap-1.5 px-4">
                {[40, 70, 30, 90, 60, 100, 75, 45, 85, 50, 95, 65].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-purple-500 to-pink-400/80 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Bottom info */}
            <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 pt-2 border-t border-white/[0.08]">
              <span className="font-mono text-[11px] text-purple-300">SPECTRUM AUDIO-SYNC</span>
              <span className="text-white font-medium">100% LATENT PRESERVATION</span>
            </div>
          </div>

          {/* ════════════ 2. BOTTOM-LEFT TALL CARD (Full Height Vertical Visual) ════════════ */}
          <div className="lg:col-span-4 lg:row-span-2 group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-white/[0.07] via-[#090710] to-[#040308] border border-white/[0.1] hover:border-purple-500/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[460px] sm:min-h-[520px]">
            {/* Top indicator: Glowing circle (matching yellow circle in reference image) */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              <span className="text-xs uppercase tracking-widest text-neutral-300 font-medium">
                CINEMATIC FRAME LERPING
              </span>
            </div>

            {/* Center artwork showcase space */}
            <div className="relative my-6 flex-1 rounded-2xl bg-gradient-to-b from-purple-950/30 to-black border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6 group-hover:border-purple-500/30 transition-colors">
              {/* Decorative AI visual element */}
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-950/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 mb-4">
                  <svg className="w-10 h-10 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-white uppercase tracking-tight">
                  120 FPS
                </div>
                <div className="text-[11px] text-purple-300 font-mono tracking-wider mt-1 uppercase">
                  SMOOTH MOTION SYNTHESIS
                </div>
              </div>
            </div>

            {/* Bottom text description */}
            <div className="relative z-10 pt-4 border-t border-white/[0.08]">
              <h5 className="text-sm font-semibold text-white uppercase tracking-wide">
                NEURAL FRAME INTERPOLATION
              </h5>
              <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                Seamless temporal consistency across hundreds of consecutive video generation steps.
              </p>
            </div>
          </div>

          {/* ════════════ 4. MIDDLE-RIGHT WIDE BANNER CARD (Headline + Large Arrow Button) ════════════ */}
          <div className="lg:col-span-8 group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-r from-purple-950/30 via-white/[0.04] to-transparent border border-white/[0.1] hover:border-purple-400/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[220px]">
            {/* Top Row: Title + Circular Arrow Button (matching top-right circular arrow in reference image) */}
            <div className="relative z-10 flex justify-between items-start gap-4">
              <div className="max-w-xl">
                <span className="text-[10px] uppercase tracking-[0.25em] text-pink-300 font-medium">
                  ENTERPRISE GENERATIVE SUITE
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase mt-2 leading-tight">
                  NEXT-GEN STUDIO FOR CREATIVE DIRECTORS
                </h3>
              </div>

              {/* Large Circular Action Arrow Button */}
              <button
                aria-label="Explore Enterprise Suite"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/[0.08] hover:bg-white border border-white/20 hover:text-black text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Bottom Row: Version & Date tag line */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-300 font-mono">
              <span>GLOBAL RELEASE v3.5</span>
              <span className="text-purple-300 font-semibold">Q4 2026 EDITION</span>
            </div>
          </div>

          {/* ════════════ 5. BOTTOM-CENTER CARD (Certified SLA / Holographic Document) ════════════ */}
          <div className="lg:col-span-5 group relative rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] hover:border-purple-500/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[200px]">
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-emerald-400">
                100% COMMERCIAL RIGHTS
              </span>
              <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase mt-2">
                ENTERPRISE IP DIPLOMA & LICENSING
              </h4>
            </div>

            <div className="relative z-10 mt-4 flex items-center justify-between pt-4 border-t border-white/[0.08]">
              <span className="text-xs text-neutral-400 font-light">Full copyright guarantee</span>
              <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-purple-200">
                VERIFIED SLA
              </div>
            </div>
          </div>

          {/* ════════════ 6 & 7. BOTTOM-FAR-RIGHT STACK (Logo Card + Location Pill Card) ════════════ */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            
            {/* Card 6: DF Labs Logo Emblem Card */}
            <div className="group flex-1 relative rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1] hover:border-purple-500/40 backdrop-blur-2xl transition-all duration-500 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white tracking-wider uppercase">DREAMFRAME</div>
                <div className="text-[10px] text-neutral-400 font-light uppercase">RESEARCH LABS</div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold text-xs">
                DF
              </div>
            </div>

            {/* Card 7: Location / Cluster Pill Card */}
            <div className="group relative rounded-3xl p-5 sm:p-6 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.1] hover:border-pink-500/40 backdrop-blur-2xl transition-all duration-500 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-xs font-semibold text-neutral-200 tracking-wider uppercase">
                  PARIS • TOKYO • NY
                </span>
              </div>
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
