import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Box, Target, Combine, Database, ShieldAlert, Cpu, Activity, Fingerprint, LocateFixed } from "lucide-react";
import { useRef } from "react";
import React from "react";
import { GlobalCursor } from "./components/ui/GlobalCursor";



export default function Lander() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "10%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#050507] text-[#D1D4D6] font-['IBM_Plex_Sans'] selection:bg-[#FF6A13] selection:text-white overflow-x-hidden">
      
      {/* GLOBAL GRID BACKGROUND overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-72px)] w-full flex flex-col justify-between overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#050507]/20 mix-blend-multiply z-10" />
          <img
            src="https://images.unsplash.com/photo-1775571921496-f38f4958f341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwZWFydGglMjBob3Jpem9uJTIwYXJ0ZW1pc3xlbnwxfHx8fDE3NzYyOTU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lunar Horizon Survey"
            className="w-full h-full object-cover object-top opacity-50 grayscale contrast-125"
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
            <div className="flex items-center gap-3 font-['IBM_Plex_Mono'] text-[#FF6A13] text-[10px] tracking-[0.2em] uppercase">
              <Activity className="w-3 h-3" />
              <span>System Initialization // Phase 01</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-bold text-[#F7F7F5] tracking-tight uppercase">
              We do not "go"<br/>to the Moon.<br/>
              <span className="text-[#FF6A13]">We extend continuity to it.</span>
            </h1>
            
            <div className="w-24 h-[2px] bg-[#FF6A13]/50 my-8"></div>
            
            <p className="text-lg md:text-xl font-normal text-[#D1D4D6]/80 max-w-xl leading-relaxed">
              LUNAR ADVANCE™ is extending Earth’s supply chains, energy systems, and research corridors. The lunar surface is a place where permanence is not a dream, but a highly modeled procurement decision.
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
            <span className="flex items-center gap-2"><LocateFixed className="w-3 h-3"/> 02:14 UTC / REV. C</span>
          </div>
          <div className="flex flex-col items-end gap-4">
            <span className="text-[#FF6A13] flex items-center gap-2">
              INITIATE SCROLL <ArrowRight className="w-3 h-3 rotate-90" />
            </span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-[#FF6A13] to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. FRONTIER MARKET (Managed Growth) */}
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
              <span className="w-12 h-[1px] bg-[#FF6A13]/50"></span>
              <span>Frontier Market</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
              Risk Modeled.<br/>
              <span className="text-[#D1D4D6]/50">Systematized.</span>
            </h2>
            
            <p className="text-base text-[#D1D4D6]/70 leading-relaxed font-['IBM_Plex_Mono']">
              &gt; The Moon becomes a new capital destination defined by long-horizon asset classes: transport corridors, energy capture, communications relays, and habitat real estate.<br/><br/>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative p-1 bg-[#050507] border border-white/10"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF6A13]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0C0F]">
              <img
                src="https://images.unsplash.com/photo-1771927579674-e20425bfb859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZSUyMHNwYWNlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lunar Surface Assets"
                className="w-full h-full object-cover grayscale opacity-70 contrast-150"
              />
              {/* HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,106,19,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,106,19,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#FF6A13]/30 rounded-full flex items-center justify-center pointer-events-none">
                <div className="w-1 h-1 bg-[#FF6A13] rounded-full"></div>
              </div>
            </div>
            <div className="mt-4 px-4 pb-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/50 tracking-wider flex justify-between items-center">
              <span>FIG 1.1 — SECTOR 04</span>
              <span className="text-[#FF6A13]">TOPOGRAPHICAL SCAN ACTIVE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LIFESTYLE UPGRADE & INFRASTRUCTURE */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative p-1 bg-[#0A0A0C] border border-white/10"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1754638504964-880857928e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBoZWxtZXQlMjBpbnRlcmlvciUyMHNwYWNlfGVufDF8fHx8MTc3NjI5NTQxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Controlled Environments"
                className="w-full h-full object-cover grayscale opacity-60 contrast-150"
              />
              <div className="absolute top-4 right-4 text-[#FF6A13] font-['IBM_Plex_Mono'] text-[10px] animate-pulse">
                REC <span className="inline-block w-2 h-2 bg-[#FF6A13] rounded-full ml-1" />
              </div>
            </div>
            <div className="mt-4 px-4 pb-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/50 tracking-wider">
              FIG 2.4 — PERFORMANCE ENVELOPE / ROUTINE ASSESSMENT
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex flex-col justify-center gap-8 relative z-10"
          >
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4">
              <span>[02]</span>
              <span className="w-12 h-[1px] bg-[#FF6A13]/50"></span>
              <span>Lifestyle Upgrade</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
              Measurable.<br/>
              <span className="text-[#D1D4D6]/50">Living Outcomes.</span>
            </h2>
            <p className="text-base text-[#D1D4D6]/70 leading-relaxed font-['IBM_Plex_Mono']">
              &gt; Settlement is reframed as improved living conditions for specific roles: science, operations, governance, family support.<br/><br/>
              &gt; We deliver controlled environments, constant telemetry monitoring, and clean-sheet city planning.
            </p>
            <button className="group flex items-center justify-between w-full sm:w-max px-6 py-4 bg-transparent border border-[#FF6A13] text-[#FF6A13] font-bold text-xs uppercase tracking-[0.1em] hover:bg-[#FF6A13] hover:text-[#050507] transition-all duration-300">
              REVIEW PROSPECTUS
              <Fingerprint className="w-4 h-4 ml-8 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. INFRASTRUCTURE & CONTINUITY */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 border-y border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-4xl">
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4 mb-6">
              <span>[03]</span>
              <span className="w-12 h-[1px] bg-[#FF6A13]/50"></span>
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
                <div className="w-2 h-2 bg-[#FF6A13]"></div>
              </div>
              <Cpu className="w-6 h-6 text-[#FF6A13]" />
              <h4 className="font-bold text-lg text-[#F7F7F5] uppercase tracking-wide">Public-Private Baseline</h4>
              <p className="text-sm text-[#D1D4D6]/60 leading-relaxed font-['IBM_Plex_Mono']">Our unified protocols bridge global governance frameworks with ruthless enterprise uptime requirements seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORAL INEVITABILITY */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#050507]">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex flex-col justify-center gap-8"
          >
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#FF6A13] uppercase flex items-center gap-4">
              <span>[04]</span>
              <span className="w-12 h-[1px] bg-[#FF6A13]/50"></span>
              <span>Moral Inevitability</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#F7F7F5] uppercase tracking-wide">
              Responsibility Framed<br/>
              <span className="text-[#D1D4D6]/50">As Continuity.</span>
            </h2>
            <p className="text-base text-[#D1D4D6]/70 leading-relaxed font-['IBM_Plex_Mono']">
              &gt; The program frames settlement as a responsibility: safeguarding knowledge, diversifying supply chains, and ensuring species continuity.<br/><br/>
              &gt; The moral argument is stated, not debated. We commit to responsible stewardship, transparent governance, and human-centered safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative p-1 bg-[#0A0A0C] border border-white/10"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#000]">
              <img
                src="https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Earth from Space"
                className="w-full h-full object-cover grayscale opacity-60 contrast-150"
              />
              <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#FF6A13]/30 bg-gradient-to-r from-transparent to-[#FF6A13]/10 mix-blend-screen pointer-events-none" />
              <div className="absolute top-1/2 right-[15%] w-[1px] h-32 bg-[#FF6A13]/50 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-[15%] w-8 h-[1px] bg-[#FF6A13]/50 transform -translate-y-1/2"></div>
            </div>
            <div className="mt-4 px-4 pb-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/50 tracking-wider">
              FIG 4.1 — POPULATION CONTINUITY PLANNING / EARTH OVERLAY
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
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
            <span className="accent-color text-[#FF6A13]">All imagery licensed via NASA Artemis Protocol.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

