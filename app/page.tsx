"use client";

import React, { useState } from "react";
import FrameCanvas from "./components/FrameCanvas";
import LogoCarousel from "./components/LogoCarousel";
import BentoGrid from "./components/BentoGrid";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [generatorOpen, setGeneratorOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedResult(true);
    }, 1200);
  };

  return (
    <main className="relative bg-black text-white min-h-screen">
      {/* Tall scroll container – 400vh drives the canvas frame animation */}
      <div style={{ height: "400vh" }} className="relative bg-black">

      {/* Cinematic canvas – fixed behind everything, z-0 */}
      <FrameCanvas />

      {/* Sticky hero – stays visible while user scrolls through the 400vh */}
      <div
        style={{ position: "sticky", top: 0, height: "100vh", zIndex: 10 }}
        className="overflow-hidden"
      >

        {/* ───────── ORIGINAL HERO (unchanged) ───────── */}
        <div className="min-h-screen bg-transparent text-white selection:bg-white selection:text-black flex flex-col justify-between relative overflow-hidden">

          {/* ── Cinematic left atmospheric shadow for text contrast ── */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
              background: [
                "radial-gradient(ellipse 52% 90% at 10% 42%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 24%, rgba(0,0,0,0.28) 42%, transparent 58%)",
                "linear-gradient(to right, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.22) 22%, transparent 48%)",
              ].join(", "),
            }}
          />

          {/* ----------------- TOP NAVIGATION BAR ----------------- */}
          <header
            className="relative z-30 w-full px-6 sm:px-10 pt-5 pb-3 flex items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* ── Left: Logo ── */}
            <div className="flex items-center gap-2.5 min-w-[140px]">
              {/* Logo Mark — stylised DF monogram */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
                <rect x="2" y="4" width="8" height="20" rx="1.5" stroke="white" strokeWidth="1.8" fill="none" />
                <rect x="6" y="4" width="8" height="20" rx="1.5" stroke="white" strokeWidth="1.8" fill="none" />
                <line x1="18" y1="4" x2="18" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="18" y1="4" x2="25" y2="4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="18" y1="13" x2="24" y2="13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="text-sm sm:text-base font-semibold tracking-wide text-white uppercase">
                DreamFrame
              </span>
            </div>

            {/* ── Center: Navigation links ── */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {[
                { label: "Home", active: true },
                { label: "Products", active: false },
                { label: "Technology", active: false },
                { label: "About", active: false },
                { label: "Contact", active: false },
              ].map((link) => (
                <a
                  key={link.label}
                  href={`#${link.label.toLowerCase()}`}
                  className={`relative px-4 py-1.5 text-sm tracking-wide transition-colors duration-200 ${
                    link.active
                      ? "text-white font-medium"
                      : "text-white/55 hover:text-white/85 font-normal"
                  }`}
                >
                  {link.label}
                  {link.active && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1 h-1 rounded-full bg-white"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* ── Right: Controls ── */}
            <div className="flex items-center gap-3 min-w-[140px] justify-end">
              {/* Sun/moon theme toggle icon (decorative) */}
              <button
                aria-label="Toggle theme"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full text-white/50 hover:text-white/80 transition-colors cursor-pointer"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeWidth={1.5} d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </button>

              {/* Dark circular hamburger menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
                style={{
                  background: "rgba(10,10,12,0.9)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
                }}
              >
                <div className="flex flex-col justify-center gap-[5px] w-[18px]">
                  <span className="w-full h-[1.5px] bg-white/80 rounded-full" />
                  <span className="w-full h-[1.5px] bg-white/80 rounded-full" />
                </div>
              </button>
            </div>
          </header>

          {/* ----------------- MAIN HERO LAYOUT ----------------- */}
          <main className="relative z-20 flex-1 flex flex-col w-full px-6 sm:px-10 lg:px-16 pb-0">

            {/* ── Upper area: massive headline + subtitle/CTAs ── */}
            <div className="flex-1 flex flex-col justify-center max-w-[90vw] pt-4 sm:pt-0">

              {/* Massive bold headline — reference-inspired */}
              <h1
                className="leading-[0.92] uppercase"
                style={{
                  fontSize: "clamp(3.2rem, 10.5vw, 12rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  backgroundImage: "linear-gradient(165deg, #ffffff 0%, #f0eaff 40%, #e0d0ff 70%, #f5f5f5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 4px 40px rgba(0,0,0,0.7)) drop-shadow(0 2px 12px rgba(0,0,0,0.5))",
                }}
              >
                Create.<br />
                Reimagine.<br />
                Generate.
              </h1>

              {/* Subtitle + dual CTA row — below headline */}
              <div className="mt-6 sm:mt-8 lg:mt-10 max-w-lg">
                <p
                  className="text-sm sm:text-base lg:text-lg font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  AI-powered image generation that sees more, creates more, and keeps you ahead.
                </p>

                {/* Dual CTA buttons */}
                <div className="flex items-center gap-4 mt-6 sm:mt-8">
                  {/* Primary CTA — dark pill with arrow */}
                  <button
                    onClick={() => setGeneratorOpen(true)}
                    className="group relative inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full text-white text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={{
                      background: "rgba(20,20,22,0.85)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                    }}
                  >
                    <span>Discover More</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-1 transition-transform duration-300 group-hover:translate-x-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </button>

                  {/* Secondary CTA — Watch Video */}
                  <button
                    onClick={() => setGeneratorOpen(true)}
                    className="group inline-flex items-center gap-3 text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        boxShadow: "0 2px 16px rgba(255,255,255,0.15)",
                      }}
                    >
                      <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Bottom glassmorphic feature strip ── */}
            <div className="w-full mb-2 sm:mb-4">
              <div
                className="w-full rounded-2xl px-4 sm:px-8 py-4 sm:py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                }}
              >
                {/* Feature 1 */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/90">Text-to-Image</p>
                    <p className="text-[10px] sm:text-xs text-white/40 font-light">Studio-grade visuals from prompts.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/90">Prompt Engine v4</p>
                    <p className="text-[10px] sm:text-xs text-white/40 font-light">Advanced AI understanding.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/90">Ultra HD Output</p>
                    <p className="text-[10px] sm:text-xs text-white/40 font-light">High-resolution rendering.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/90">AI Assistance</p>
                    <p className="text-[10px] sm:text-xs text-white/40 font-light">Smart help, whenever you need.</p>
                  </div>
                </div>
              </div>

              {/* SCROLL TO EXPLORE indicator */}
              <div className="flex flex-col items-center gap-1.5 mt-3 pb-1">
                <div
                  className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
                  style={{ border: "1.5px solid rgba(255,255,255,0.25)" }}
                >
                  <div
                    className="w-1 h-2.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      animation: "scrollDot 2s ease-in-out infinite",
                    }}
                  />
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/35 font-light">
                  Scroll to Explore
                </span>
              </div>
            </div>

          </main>

          {/* ----------------- MINIMAL SLIDE-OUT MENU ----------------- */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
              <div
                onClick={() => setMenuOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <div className="relative w-full max-w-sm bg-[#0A0A0A] border-l border-white/10 h-full p-8 flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                    <span className="text-sm font-light uppercase tracking-widest text-neutral-400">
                      Navigation
                    </span>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="text-neutral-400 hover:text-white p-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col gap-6 text-sm font-light text-neutral-300">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setGeneratorOpen(true);
                      }}
                      className="text-left hover:text-white transition-colors"
                    >
                      Image Studio
                    </button>
                    <a href="#models" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
                      AI Models
                    </a>
                    <a href="#showcase" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
                      Showcase Gallery
                    </a>
                    <a href="#api" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">
                      API Documentation
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs text-neutral-600 font-light">
                  DREAMFRAME © 2026. Minimal AI image generation.
                </div>
              </div>
            </div>
          )}

          {/* ----------------- MINIMAL GENERATOR MODAL ----------------- */}
          {generatorOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <div
                onClick={() => setGeneratorOpen(false)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />

              <div className="relative w-full max-w-xl bg-[#0D0D0E] border border-white/15 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <h3 className="text-sm font-normal text-white uppercase tracking-wider">
                      DreamFrame Studio
                    </h3>
                  </div>
                  <button
                    onClick={() => setGeneratorOpen(false)}
                    className="text-neutral-400 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleGenerate} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-light mb-2">
                      Describe what you want to create
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. Minimalist architectural concept, muted black and concrete tones, natural lighting..."
                      rows={3}
                      className="w-full bg-black border border-white/15 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-white/40 resize-none font-light placeholder:text-neutral-600"
                    />
                  </div>

                  {isGenerating ? (
                    <div className="py-4 text-center">
                      <div className="inline-block w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-2" />
                      <p className="text-xs text-neutral-400 font-light">Synthesizing image frames...</p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#8E44AD] text-sm font-normal text-white hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Generate Image
                    </button>
                  )}

                  {generatedResult && (
                    <div className="mt-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] text-center">
                      <p className="text-xs text-neutral-300 font-light mb-1">
                        Image generation simulated successfully.
                      </p>
                      <p className="text-[11px] text-neutral-500 font-mono">
                        &ldquo;{prompt}&rdquo;
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

        </div>
        {/* ───────── END ORIGINAL HERO ───────── */}

      </div>
      {/* end sticky wrapper */}

    </div>
    {/* end 400vh hero scroll container */}

    {/* ───────────────── NEW SECTIONS BELOW HERO ───────────────── */}
    <div className="relative z-20 bg-[#020204]">
      <LogoCarousel />
      <BentoGrid />
    </div>
  </main>
  );
}


