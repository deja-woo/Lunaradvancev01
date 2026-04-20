import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Box, Target, Combine, Database, ShieldAlert, Cpu, Activity, Fingerprint, LocateFixed } from "lucide-react";
import React, { useCallback, useRef, useState } from "react";
import { GlobalCursor } from "./components/ui/GlobalCursor";

export default function Lander() {
  const containerRef = useRef<HTMLDivElement>(null);       // ← page wrapper / scroll
  const imageContainerRef = useRef<HTMLDivElement>(null);  // ← image cursor tracking

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "10%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Section 2

  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [inside, setInside] = useState(false);
  const [hoveredPoi, setHoveredPoi] = useState<string | null>(null);

  // Section 3 — Lifestyle
const imageContainer3Ref = useRef<HTMLDivElement>(null);
const [pos3, setPos3] = useState({ x: -200, y: -200 });
const [inside3, setInside3] = useState(false);
const [hoveredPoi3, setHoveredPoi3] = useState<string | null>(null);

const handleMouseMove3 = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
  const rect = imageContainer3Ref.current!.getBoundingClientRect();
  setPos3({ x: e.clientX - rect.left, y: e.clientY - rect.top });
}, []);

// Section 5 — Moral Inevitability
const imageContainer5Ref = useRef<HTMLDivElement>(null);
const [pos5, setPos5] = useState({ x: -200, y: -200 });
const [inside5, setInside5] = useState(false);

const handleMouseMove5 = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
  const rect = imageContainer5Ref.current!.getBoundingClientRect();
  setPos5({ x: e.clientX - rect.left, y: e.clientY - rect.top });
}, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imageContainerRef.current!.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#050507] text-[#D1D4D6] font-['IBM_Plex_Sans'] selection:bg-[#FF6A13] selection:text-white overflow-x-hidden"
    >

      {/* GLOBAL GRID BACKGROUND overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ═══════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-72px)] w-full flex flex-col justify-between overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#050507]/20 mix-blend-multiply z-10" />
          <img
            src="https://live.staticflickr.com/65535/55193180468_fcb303f796_k.jpg"
            alt="Lunar Horizon Survey"
            className="w-full h-full object-cover object-top opacity-50 contrast-125"
          />
        </motion.div>

        {/* Tech Borders */}
        <div className="absolute inset-4 z-20 pointer-events-none border border-white/5" />
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#FF6A13] z-20" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#FF6A13] z-20" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#FF6A13] z-20" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#FF6A13] z-20" />

        <div className="relative z-10 p-6 md:p-12 lg:p-24 mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-3 font-['IBM_Plex_Mono'] text-[#FF6A13] text-[13px] tracking-[0.2em] uppercase">
              <Activity className="w-4 h-3" />
              <span>System Initialization // Phase 01</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-bold text-[#F7F7F5] tracking-tight uppercase">
              We do not "go" to the Moon.<br />
              <span className="text-[#FF6A13]">We extend continuity to it.</span>
            </h1>
            <div className="w-24 h-[2px] bg-[#FF6A13]/50 my-8" />
            <p className="text-lg md:text-xl font-normal text-[#D1D4D6]/80 max-w-xl leading-relaxed">
              LUNAR ADVANCE™ is extending Earth's supply chains, energy systems, and research corridors. The lunar surface is a place where permanence is not a dream, but a highly modeled procurement decision.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: opacityFade }}
          className="relative z-10 p-6 md:p-12 lg:p-24 flex justify-between items-end font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#D1D4D6]/50"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#FF6A13]">ASSET CAPTURE // A2-LF-042</span>
            <span>NEARSIDE RIDGE SURVEY</span>
            <span className="flex items-center gap-2"><LocateFixed className="w-3 h-3" /> 02:14 UTC / REV. C</span>
          </div>
          <div className="flex flex-col items-end gap-4">
            <span className="text-[#FF6A13] flex items-center gap-2">
              INITIATE SCROLL <ArrowRight className="w-3 h-3 rotate-90" />
            </span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-[#FF6A13] to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          2. FRONTIER MARKET
      ═══════════════════════════════════════ */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex flex-col justify-center gap-8 relative z-10"
          >
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4">
              <span>[01]</span>
              <span className="w-12 h-[1px] bg-[#FF6A13]/50" />
              <span>Frontier Market</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
              Risk Modeled.<br />
              <span className="text-[#FF6A13]">Systematized.</span>
            </h2>
            <p className="text-base text-[#D1D4D6]/70 leading-relaxed font-['IBM_Plex_Mono']">
              &gt; The Moon becomes a new capital destination defined by long-horizon asset classes: transport corridors, energy capture, communications relays, and habitat real estate.<br /><br />
              &gt; Risk is not eliminated. It is fully governed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10 mt-4">
              <div className="p-4 bg-white/5 border border-white/5 hover:border-[#FF6A13]/50 transition-colors">
                <Target className="w-4 h-4 text-[#FF6A13] mb-4" />
                <h4 className="font-bold text-sm text-[#F7F7F5] uppercase mb-1">Asset Classes</h4>
                <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#D1D4D6]/50">Class A Corridors</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 hover:border-[#FF6A13]/50 transition-colors">
                <Box className="w-4 h-4 text-[#FF6A13] mb-4" />
                <h4 className="font-bold text-sm text-[#F7F7F5] uppercase mb-1">Managed Growth</h4>
                <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#D1D4D6]/50">Regolith Futures</p>
              </div>
            </div>
          </motion.div>

          {/* ── Topographic Image Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative p-1 bg-[#050507] border border-white/10"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF6A13]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

            {/* Image container — uses imageContainerRef, NOT containerRef */}
              <div
                  ref={imageContainerRef}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0C0F] cursor-none"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setInside(true)}
                  onMouseLeave={() => setInside(false)}
                >
                  <img
                    src="https://live.staticflickr.com/65535/55193002296_38b8afac3c_k.jpg"
                    alt="Lunar Surface Assets"
                    className="w-full h-full object-cover opacity-50 contrast-100"
                  />

                  {/* Grid overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,106,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,19,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  {/* Radial glow follows cursor */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10 transition-[background] duration-75"
                    style={{
                      background: inside
                        ? `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, rgba(255,106,19,0.08) 0%, transparent 80%)`
                        : "none",
                    }}
                  />

                  {/* POI Nodes */}
                  {[
                    { id: "tycho",         label: "TYCHO",         sub: "85km · 108Ma",         x: 72, y:48  },
                    { id: "ceres major",   label: "CERES MAJOR",   sub: "163km · ~3.9Ga",       x: 46, y: 50 },
                    { id: "ceres minor",   label: "CERES MINOR",   sub: "140km · ~2.1Ga",       x: 30, y: 38 },
                    { id: "sasserides",    label: "SASSERIDES",    sub: "92km · 110Ma",         x: 72, y: 18 },
                    { id: "pictet",        label: "PICTET",        sub: "62km · 70Ma",          x: 89, y: 30 },
                    { id: "clavius",       label: "CLAVIUS",       sub: "280km · ~6.0GA",       x: 22, y: 85 },
                    { id: "wilhelm",       label: "WILHELM",       sub: "107km · 115MA",        x: 55, y: 7 },
                    { id: "maginus",       label: "MAGINUS",       sub: "107km · 115MA",        x: 40, y: 22 },
                  ].map((poi) => {
                    const isHovered = hoveredPoi === poi.id;
                    return (
                      <div
                        key={poi.id}
                        className="absolute z-30"
                        style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
                        onMouseEnter={() => setHoveredPoi(poi.id)}
                        onMouseLeave={() => setHoveredPoi(null)}
                      >
                        {/* Center dot */}
                        <div
                          className="absolute w-[5px] h-[5px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
                          style={{ background: isHovered ? "#FF6A13" : "rgba(255,106,19,0.7)" }}
                        />
                        {/* Animated pulse — dims on hover */}
                        <div
                          className="absolute rounded-full border border-[#FF6A13]/40 -translate-x-1/2 -translate-y-1/2 animate-ping"
                          style={{
                            width: "18px",
                            height: "18px",
                            animationDuration: "2.4s",
                            opacity: isHovered ? 0 : 1,
                          }}
                        />
                        {/* Static ring — expands on hover */}
                        <div
                          className="absolute rounded-full border -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                          style={{
                            width: isHovered ? "28px" : "18px",
                            height: isHovered ? "28px" : "18px",
                            borderColor: isHovered ? "rgba(255,106,19,0.7)" : "rgba(255,106,19,0.25)",
                          }}
                        />

                        {/* Label — hidden until hover */}
                        <div
                          className="absolute left-4 top-[-24px] flex flex-col gap-[2px] transition-all duration-200"
                          style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? "translateY(0px)" : "translateY(4px)",
                            pointerEvents: "none",
                          }}
                        >
                          {/* Connector line */}
                          <div className="absolute left-[-10px] top-[6px] w-[8px] h-[1px] bg-[#FF6A13]/50" />
                          {/* Name */}
                          <span className="font-['IBM_Plex_Mono'] text-[9px] tracking-[0.15em] text-[#FF6A13] uppercase whitespace-nowrap leading-none">
                            {poi.label}
                          </span>
                          {/* Sub label */}
                          <span className="font-['IBM_Plex_Mono'] text-[8px] text-[#D1D4D6]/50 uppercase whitespace-nowrap leading-none tracking-wider">
                            {poi.sub}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Cursor ring + dot — always on top */}
                  <div
                    className="absolute top-0 left-0 pointer-events-none z-40 will-change-transform"
                    style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
                  >
                    <div
                      className="absolute border border-[#FF6A13]/60 rounded-full"
                      style={{
                        width: "72px",
                        height: "72px",
                        transform: "translate(-50%, -50%)",
                        boxShadow: "0 0 10px rgba(255,106,19,0.2)",
                        opacity: inside ? 1 : 0,
                        transition: "opacity 150ms ease",
                      }}
                    />
                    <div
                      className="absolute bg-[#FF6A13] rounded-full"
                      style={{
                        width: "5px",
                        height: "5px",
                        transform: "translate(-50%, -50%)",
                        opacity: inside ? 1 : 0,
                        transition: "opacity 150ms ease",
                      }}
                    />
                  </div>
                </div>

            {/* Footer label */}
            <div className="mt-4 px-4 pb-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/50 tracking-wider flex justify-between items-center">
              <span>FIG 1.1 — SECTOR 04</span>
              <span className="text-[#FF6A13]">TOPOGRAPHICAL SCAN ACTIVE</span>
            </div>
          </motion.div>

        </div>
      </section>



{/* ═══════════════════════════════════════
    3. LIFESTYLE UPGRADE & INFRASTRUCTURE
═══════════════════════════════════════ */}
<section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050507]">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-12 gap-16 items-center">

    {/* ── Image Card ── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-7 relative p-1 bg-[#0A0A0C] border border-white/10"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF6A13]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div
  ref={imageContainer3Ref}
  className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0C0F] cursor-none"
  onMouseMove={handleMouseMove3}
  onMouseEnter={() => setInside3(true)}
  onMouseLeave={() => setInside3(false)}
>
  {/* ── Base image — desaturated default state ── */}
<img
  src="src\exploration-settlements-different-planets.jpg"
  alt="Lunar Habitation Concept"
  className="absolute inset-0 w-full h-full object-cover opacity-30 contrast-120 grayscale"
/>

{/* ── Per-POI colour reveal layer ── */}
{[
  { id: "habitat-a", x: 4,  y: 52, w: 38, h: 32 },
  { id: "tower",     x: 22, y: 17, w: 20, h: 40 },
  { id: "airlock",   x: 46, y: 60, w: 24, h: 24 },
  { id: "habitat-b", x: 64, y: 45, w: 35, h: 24 },
  { id: "launchpad", x: 80, y: 12, w: 20, h: 29 },
].map((r) => (
  <div
    key={r.id}
    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
    style={{ opacity: hoveredPoi3 === r.id ? 1 : 0 }}
  >
    {/* NODE REVEAL */}
    <img
      src="src\exploration-settlements-different-planets.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover contrast-125"
      style={{
        opacity: 1,
        filter: "grayscale(0%) brightness(1.35) contrast(1.15)",
        clipPath: `inset(${r.y}% ${100 - r.x - r.w}% ${100 - r.y - r.h}% ${r.x}%)`,
      }}
    />
    {/* WIPE OVERLAY */}
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${r.x}%`,
        top: `${r.y}%`,
        width: `${r.w}%`,
        height: `${r.h}%`,
        backgroundImage: `
          linear-gradient(rgba(255,106,19,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,106,19,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "12px 12px",
        border: "1px solid rgba(255,106,19,0.2)",
      }}
    />
  </div>
))}

  {/* ── Base grid ── */}
  <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(255,106,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,19,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

  {/* ── Scan line ── */}
  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
    <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6A13]/70 to-transparent animate-scan" />
    <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FF6A13]/[0.04] animate-scan" style={{ marginTop: "-64px" }} />
  </div>

  {/* ── POI Nodes ── */}
{[
  { id: "habitat-a", label: "HABITAT MODULE A", sub: "PRESSURIZED // 340m²",   x: 18, y: 62 },
  { id: "tower",     label: "CENTRAL TOWER",    sub: "OPERATIONS HUB // +42m", x: 33, y: 31 },
  { id: "airlock",   label: "AIRLOCK",          sub: "SEALED LINK // CLASS B", x: 60, y: 70 },
  { id: "habitat-b", label: "HABITAT MODULE B", sub: "RESIDENTIAL // 220m²",   x: 87, y: 53 },
  { id: "launchpad", label: "LAUNCH PAD",       sub: "ACTIVE // REV. D",       x: 95, y: 30 },
].map((poi) => {
  const isHovered = hoveredPoi3 === poi.id;
  const flipLeft = poi.x > 55;
  const flipDown = poi.y < 25;

  return (
    <div
      key={poi.id}
      className="absolute z-30"
      style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
      onMouseEnter={() => setHoveredPoi3(poi.id)}
      onMouseLeave={() => setHoveredPoi3(null)}
    >
      {/* Blinking dot */}
      <div
        className="absolute w-[5px] h-[5px] rounded-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
        style={{
          background: "#FF6A13",
          animation: isHovered ? "none" : "poi-blink 1.6s ease-in-out infinite",
        }}
      />

      {/* Outer pulse ring */}
      <div
        className="absolute rounded-none border border-[#FF6A13]/40 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "18px", height: "18px",
          animation: isHovered ? "none" : "ping 2s cubic-bezier(0,0,0.2,1) infinite",
          opacity: isHovered ? 0 : 1,
          transition: "opacity 150ms ease",
        }}
      />

      {/* Static ring */}
      <div
        className="absolute rounded-none border -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          width: isHovered ? "28px" : "18px",
          height: isHovered ? "28px" : "18px",
          borderColor: isHovered ? "rgba(255,106,19,0.8)" : "rgba(255,106,19,0.25)",
        }}
      />

      {/* Label card — flips based on edge proximity */}
      <div
        className="absolute pointer-events-none transition-all duration-200"
        style={{
          ...(flipLeft ? { right: "14px" } : { left: "14px" }),
          ...(flipDown ? { top: "10px" }  : { bottom: "10px" }),
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0px)" : "translateY(5px)",
        }}
      >
        {/* Connector line — mirrors label side */}
        <div
          className="absolute top-[10px] w-[8px] h-[1px] bg-[#FF6A13]/50"
          style={flipLeft ? { right: "-10px" } : { left: "-10px" }}
        />
        {/* Card */}
        <div
          className="flex flex-col gap-[3px] px-2 py-[5px] border border-[#FF6A13]/30"
          style={{
            background: "rgba(5,5,7,0.75)",
            backdropFilter: "blur(4px)",
            textAlign: flipLeft ? "right" : "left",
          }}
        >
          <span className="font-['IBM_Plex_Mono'] text-[12px] tracking-[0.25em] text-[#FF6A13] uppercase whitespace-nowrap leading-none">
            {poi.label}
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] text-[#D1D4D6]/50 uppercase whitespace-nowrap leading-none tracking-wider">
            {poi.sub}
          </span>
        </div>
      </div>

    </div>
  );
})}

  {/* ── Square reticle cursor ── */}
  <div
    className="absolute top-0 left-0 pointer-events-none z-40 will-change-transform"
    style={{
      transform: `translate(${pos3.x}px, ${pos3.y}px)`,
      opacity: inside3 ? 1 : 0,
      transition: "opacity 150ms ease",
    }}
  >
    <div
      className="absolute"
      style={{ width: "30px", height: "30px", transform: "translate(-50%, -50%)" }}
    >
      <div className="absolute inset-0" style={{ border: "1px dashed rgba(255,106,19,0.35)" }} />
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-1 border-l-1 border-[#FF6A13]" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t-1 border-r-1 border-[#FF6A13]" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b-1 border-l-1 border-[#FF6A13]" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-1 border-r-1 border-[#FF6A13]" />
      <div className="absolute top-1/2 left-1/2 w-[3px] h-[3px] bg-[#FF6A13] rounded-full -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>

</div>

      {/* Footer */}
      <div className="mt-4 px-4 pb-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/50 tracking-wider flex justify-between items-center">
        <span>FIG 2.4 — SECTOR 07 / HABITAT CLUSTER</span>
        <span className="text-[#FF6A13]">STRUCTURAL SCAN ACTIVE</span>
      </div>
    </motion.div>

    {/* ── Text Column — unchanged ── */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-5 flex flex-col justify-center gap-8 relative z-10"
    >
      <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4">
        <span>[02]</span>
        <span className="w-12 h-[1px] bg-[#FF6A13]/50" />
        <span>Lifestyle Upgrade</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
        Measurable.<br />
        <span className="text-[#D1D4D6]/50">Living Outcomes.</span>
      </h2>
      <p className="text-base text-[#D1D4D6]/70 leading-relaxed font-['IBM_Plex_Mono']">
        &gt; Settlement is reframed as improved living conditions for specific roles: science, operations, governance, family support.<br /><br />
        &gt; We deliver controlled environments, constant telemetry monitoring, and clean-sheet city planning.
      </p>
      <button className="btn-outline group">
        REVIEW PROSPECTUS
        <Fingerprint className="w-4 h-4 ml-8 group-hover:scale-110 transition-transform" />
      </button>
    </motion.div>

  </div>
</section>


{/* ═══════════════════════════════════════
    4. INFRASTRUCTURE & CONTINUITY
═══════════════════════════════════════ */}
<section className="relative w-full py-32 px-6 md:px-12 lg:px-24 border-y border-white/5 bg-[#0A0A0C]">
  <div className="max-w-7xl mx-auto space-y-16">
    <div className="max-w-4xl">
      <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4 mb-6">
        <span>[03]</span>
        <span className="w-12 h-[1px] bg-[#FF6A13]/50" />
        <span>Infrastructure Opportunity</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
        Standards, Interoperability,<br />
        <span className="text-[#D1D4D6]/50">and Civil Partnerships.</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
      <div className="space-y-4 p-6 bg-[#050507] border border-white/5 hover:border-[#FF6A13]/30 transition-colors">
        <Combine className="w-6 h-6 text-[#FF6A13]" />
        <h4 className="font-bold text-lg text-[#F7F7F5] uppercase tracking-wide">Ports & Corridors</h4>
        <p className="text-sm text-[#D1D4D6]/60 leading-relaxed font-['IBM_Plex_Mono']">The Moon is presented as a jurisdiction of systems rather than a territory. Transport logistics scale predictably under our governance.</p>
      </div>
      <div className="space-y-4 p-6 bg-[#050507] border border-white/5 hover:border-[#FF6A13]/30 transition-colors">
        <ShieldAlert className="w-6 h-6 text-[#FF6A13]" />
        <h4 className="font-bold text-lg text-[#F7F7F5] uppercase tracking-wide">Continuity Facilities</h4>
        <p className="text-sm text-[#D1D4D6]/60 leading-relaxed font-['IBM_Plex_Mono']">Safeguarding knowledge and diversifying supply chains ensure species continuity with absolute mathematical certainty.</p>
      </div>
      <div className="space-y-4 p-6 bg-[#050507] border border-[#FF6A13]/20 hover:border-[#FF6A13]/50 transition-colors relative overflow-hidden">
        <div className="absolute top-0 right-0 w-8 h-8 bg-[#FF6A13]/10 flex items-start justify-end p-1">
          <div className="w-2 h-2 bg-[#FF6A13]" />
        </div>
        <Cpu className="w-6 h-6 text-[#FF6A13]" />
        <h4 className="font-bold text-lg text-[#F7F7F5] uppercase tracking-wide">Public-Private Baseline</h4>
        <p className="text-sm text-[#D1D4D6]/60 leading-relaxed font-['IBM_Plex_Mono']">Our unified protocols bridge global governance frameworks with ruthless enterprise uptime requirements seamlessly.</p>
      </div>
    </div>
  </div>
</section>


{/* ═══════════════════════════════════════
    5. MORAL INEVITABILITY
═══════════════════════════════════════ */}
<section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050507]">
  <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-16 items-center">

    {/* ── Text Column ── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-5 flex flex-col justify-center gap-8"
    >
      <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4">
        <span>[04]</span>
        <span className="w-12 h-[1px] bg-[#FF6A13]/50" />
        <span>Moral Inevitability</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
        Responsibility Framed<br />
        <span className="text-[#D1D4D6]/50">As Continuity.</span>
      </h2>
      <p className="text-base text-[#D1D4D6]/70 leading-relaxed font-['IBM_Plex_Mono']">
        &gt; The program frames settlement as a responsibility: safeguarding knowledge, diversifying supply chains, and ensuring species continuity.<br /><br />
        &gt; The moral argument is stated, not debated. We commit to responsible stewardship, transparent governance, and human-centered safety.
      </p>
    </motion.div>

    {/* ── Image Card ── */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-7 relative p-1 bg-[#0A0A0C] border border-white/10"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF6A13]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div
        ref={imageContainer5Ref}
        className="relative aspect-[16/9] w-full overflow-hidden bg-[#000] cursor-none"
        onMouseMove={handleMouseMove5}
        onMouseEnter={() => setInside5(true)}
        onMouseLeave={() => setInside5(false)}
      >
        <img
          src="https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Earth from Space"
          className="w-full h-full object-cover grayscale opacity-60 contrast-150"
        />

        {/* Existing decorative overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#FF6A13]/30 bg-gradient-to-r from-transparent to-[#FF6A13]/10 mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 right-[15%] w-[1px] h-32 bg-[#FF6A13]/50 transform -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-[15%] w-8 h-[1px] bg-[#FF6A13]/50 transform -translate-y-1/2 pointer-events-none" />

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,106,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,19,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-[background] duration-75"
          style={{
            background: inside5
              ? `radial-gradient(circle 160px at ${pos5.x}px ${pos5.y}px, rgba(255,106,19,0.08) 0%, transparent 80%)`
              : "none",
          }}
        />

        {/* ════════════════════════════════
            OVERLAY INTERACTION GOES HERE
            ════════════════════════════════ */}

        {/* Cursor ring + dot */}
        <div
          className="absolute top-0 left-0 pointer-events-none z-40 will-change-transform"
          style={{ transform: `translate(${pos5.x}px, ${pos5.y}px)` }}
        >
          <div
            className="absolute border border-[#FF6A13]/60 rounded-full"
            style={{
              width: "72px",
              height: "72px",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(255,106,19,0.2)",
              opacity: inside5 ? 1 : 0,
              transition: "opacity 150ms ease",
            }}
          />
          <div
            className="absolute bg-[#FF6A13] rounded-full"
            style={{
              width: "5px",
              height: "5px",
              transform: "translate(-50%, -50%)",
              opacity: inside5 ? 1 : 0,
              transition: "opacity 150ms ease",
            }}
          />
        </div>
      </div>

      <div className="mt-4 px-4 pb-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/50 tracking-wider">
        FIG 4.1 — POPULATION CONTINUITY PLANNING / EARTH OVERLAY
      </div>
    </motion.div>

  </div>
</section>

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#0A0A0C] border-t border-[#FF6A13]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest leading-loose">
          <div className="flex flex-col gap-2">
            <span className="text-[#F7F7F5] font-['IBM_Plex_Sans'] text-xl font-bold tracking-widest uppercase mb-4">Keystone Space Holdings</span>
            <span className="text-[#D1D4D6]/60">Program Umbrella: LUNAR ADVANCE™</span>
            <span className="text-[#D1D4D6]/60">Est. 2026 // Off-World Operations</span>
            <span className="text-[#FF6A13] mt-4 flex items-center gap-2"> // CLEARED FOR PUBLIC VIEW</span>
          </div>
          <div className="flex flex-col gap-2 md:text-right">
            <span className="text-[#F7F7F5]">"Settlement is the operational form of hope."</span>
            <span className="text-[#FF6A13]">All imagery licensed via NASA Artemis Protocol.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}