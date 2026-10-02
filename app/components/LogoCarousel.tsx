"use client";

import React from "react";

const row1Logos = [
  { name: "NEURAL CRAFT", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { name: "HYPERVISION", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
  { name: "SYNTHETIX AI", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "CHRONO LABS", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "LUMINA ART", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { name: "KINETIC ENGINE", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "ASTRAL DIGITAL", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { name: "APEX VISUALS", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
];

const row2Logos = [
  { name: "VOXEL MATRIX", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { name: "QUANTUM FRAME", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { name: "PULSE STUDIOS", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "CYBER GRAPH", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
  { name: "SOLARIS AI", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
  { name: "PRISM CINEMA", icon: "M7 4v16l13-8z" },
  { name: "NEXUS MIND", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "OVRDRIVE", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

export default function LogoCarousel() {
  // Multiply arrays to guarantee continuous loop width
  const row1Triple = [...row1Logos, ...row1Logos, ...row1Logos];
  const row2Triple = [...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden border-t border-b border-white/[0.06] bg-[#030305]">
      {/* ── Background Cosmic Glow Effects ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-pink-900/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-neutral-400">
          POWERED BY NEXT-GEN AI LABS & GLOBAL CREATIVE TEAMS
        </p>
      </div>

      {/* ── Marquee Containers ── */}
      <div className="relative carousel-mask space-y-6 sm:space-y-8 select-none z-10">
        
        {/* TOP ROW: Right -> Left */}
        <div className="flex w-max animate-marquee-left gap-6 sm:gap-10">
          {row1Triple.map((logo, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] backdrop-blur-md transition-all duration-300 group shrink-0"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300/80 group-hover:text-purple-300 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={logo.icon} />
              </svg>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: Left -> Right */}
        <div className="flex w-max animate-marquee-right gap-6 sm:gap-10">
          {row2Triple.map((logo, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] backdrop-blur-md transition-all duration-300 group shrink-0"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300/80 group-hover:text-pink-300 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={logo.icon} />
              </svg>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
