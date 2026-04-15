import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Box, Target, Combine, Database, ShieldAlert, Cpu } from "lucide-react";
import { useRef } from "react";

export default function Lander() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#F7F7F5] text-[#2B2E34] font-['IBM_Plex_Sans'] selection:bg-[#FF6A13] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-72px)] w-full flex flex-col justify-between overflow-hidden bg-[#0B0C0F]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-transparent to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1775571921496-f38f4958f341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwZWFydGglMjBob3Jpem9uJTIwYXJ0ZW1pc3xlbnwxfHx8fDE3NzYyOTU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Lunar Horizon Survey"
            className="w-full h-full object-cover object-top opacity-70 grayscale contrast-105"
          />
        </motion.div>

        <div className="relative z-10 p-6 md:p-12 lg:p-24 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold text-[#F7F7F5] tracking-tight">
              We do not "go" to the Moon.
              <br />
              We extend continuity to it.
            </h1>
            <p className="text-lg md:text-xl font-normal text-[#D1D4D6] max-w-xl leading-relaxed">
              LUNAR ADVANCE™ is extending Earth’s supply chains, energy systems, and research corridors. The lunar surface is a place where permanence is not a dream, but a procurement decision.
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: opacityFade }}
          className="relative z-10 p-6 md:p-12 lg:p-24 flex justify-between items-end font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#D1D4D6]"
        >
          <div className="flex flex-col gap-1">
            <span>LUNAR ADVANCE™ / Asset Capture / A2-LF-042</span>
            <span>Nearside Ridge Survey / 02:14 UTC / Rev. C</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#FF6A13]">Operational Scroll</span>
            <ArrowRight className="w-3 h-3 rotate-90 text-[#FF6A13]" />
          </div>
        </motion.div>
      </section>

      {/* 2. FRONTIER MARKET (Managed Growth) */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 border-b border-[#D1D4D6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-5 flex flex-col justify-center gap-8"
          >
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-widest text-[#2B2E34] uppercase flex items-center gap-4">
              <span>01</span>
              <span className="w-8 h-[1px] bg-[#2B2E34]"></span>
              <span>Frontier Market</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B2E34]">
              Risk modeled and systematized.
            </h2>
            <p className="text-base text-[#2B2E34]/80 leading-relaxed">
              The Moon becomes a new capital destination defined by long-horizon asset classes: transport corridors, energy capture, communications relays, and habitat real estate. Risk is not eliminated, but fully governed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#D1D4D6]">
              <div className="space-y-2">
                <Target className="w-4 h-4 text-[#FF6A13]" />
                <h4 className="font-semibold text-sm">Asset Classes</h4>
                <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#2B2E34]/60">Class A Corridors</p>
              </div>
              <div className="space-y-2">
                <Box className="w-4 h-4 text-[#FF6A13]" />
                <h4 className="font-semibold text-sm">Managed Growth</h4>
                <p className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#2B2E34]/60">Regolith Futures</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative bg-[#E8E8E8] p-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B0C0F]">
              <img
                src="https://images.unsplash.com/photo-1771927579674-e20425bfb859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZSUyMHNwYWNlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lunar Surface Assets"
                className="w-full h-full object-cover grayscale opacity-90 contrast-105"
              />
              <div className="absolute top-0 left-0 w-full h-full border-[1px] border-[#FF6A13]/20 pointer-events-none mix-blend-difference" />
            </div>
            <div className="mt-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#2B2E34]/60 tracking-wider">
              Fig 1.1 — Topographical asset survey mapping / Sector 04
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. LIFESTYLE UPGRADE & INFRASTRUCTURE */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0B0C0F] text-[#F7F7F5]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative p-4 bg-[#1A1C23]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1754638504964-880857928e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBoZWxtZXQlMjBpbnRlcmlvciUyMHNwYWNlfGVufDF8fHx8MTc3NjI5NTQxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Controlled Environments"
                className="w-full h-full object-cover grayscale opacity-80 contrast-105"
              />
              {/* Wayfinding tick */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#FF6A13]" />
            </div>
            <div className="mt-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#D1D4D6]/70 tracking-wider">
              Fig 2.4 — Human-centered performance envelope / Routine Assessment
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-5 flex flex-col justify-center gap-8"
          >
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-widest text-[#D1D4D6] uppercase flex items-center gap-4">
              <span>02</span>
              <span className="w-8 h-[1px] bg-[#D1D4D6]"></span>
              <span>Lifestyle Upgrade</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Measurable living outcomes.
            </h2>
            <p className="text-base text-[#D1D4D6] leading-relaxed">
              Settlement is reframed as improved living conditions for specific roles: science, operations, governance, family support. We deliver controlled environments, constant health monitoring, and clean-sheet city planning. 
            </p>
            <button className="flex items-center justify-between w-full sm:w-max px-6 py-3 bg-[#FF6A13] text-[#F7F7F5] font-semibold text-sm tracking-wide hover:bg-[#E55A0D] transition-colors duration-300">
              REVIEW HABITAT PROSPECTUS
              <ArrowRight className="w-4 h-4 ml-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. INFRASTRUCTURE & CONTINUITY */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 border-b border-[#D1D4D6]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-widest text-[#2B2E34] uppercase flex items-center gap-4 mb-6">
              <span>03</span>
              <span className="w-8 h-[1px] bg-[#2B2E34]"></span>
              <span>Infrastructure Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-[#2B2E34]">
              Standards, interoperability, and civil partnerships.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#D1D4D6] pt-12">
            <div className="space-y-4">
              <Combine className="w-5 h-5 text-[#FF6A13]" />
              <h4 className="font-semibold text-lg text-[#2B2E34]">Doors & Corners</h4>
              <p className="text-sm text-[#2B2E34]/80 leading-relaxed">The Moon is presented as a jurisdiction of systems rather than a territory. Transport logistics scale predictably.</p>
            </div>
            <div className="space-y-4">
              <ShieldAlert className="w-5 h-5 text-[#FF6A13]" />
              <h4 className="font-semibold text-lg text-[#2B2E34]">Continuity Facilities</h4>
              <p className="text-sm text-[#2B2E34]/80 leading-relaxed">Safeguarding knowledge and diversifying supply chains ensure species continuity with mathematical certainty.</p>
            </div>
            <div className="space-y-4">
              <Cpu className="w-5 h-5 text-[#FF6A13]" />
              <h4 className="font-semibold text-lg text-[#2B2E34]">Public-Private Baseline</h4>
              <p className="text-sm text-[#2B2E34]/80 leading-relaxed">Our unified protocols bridge global governance frameworks with enterprise uptime requirements seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORAL INEVITABILITY */}
      <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 bg-[#E8E8E8]">
        <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-5 flex flex-col justify-center gap-8"
          >
            <div className="font-['IBM_Plex_Mono'] text-[10px] tracking-widest text-[#2B2E34] uppercase flex items-center gap-4">
              <span>04</span>
              <span className="w-8 h-[1px] bg-[#2B2E34]"></span>
              <span>Moral Inevitability</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#2B2E34]">
              Responsibility framed as continuity.
            </h2>
            <p className="text-base text-[#2B2E34]/80 leading-relaxed">
              The program frames settlement as a responsibility: safeguarding knowledge, diversifying supply chains, and ensuring species continuity. The moral argument is stated, not debated. We commit to responsible stewardship, transparent governance, and human-centered safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="md:col-span-7 relative p-4 bg-white border border-[#D1D4D6]"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0C0F]">
              <img
                src="https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Earth from Space"
                className="w-full h-full object-cover grayscale opacity-90 contrast-125"
              />
              <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#FF6A13]/30 pointer-events-none mix-blend-difference" />
            </div>
            <div className="mt-4 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#2B2E34]/60 tracking-wider">
              Fig 4.1 — Population continuity planning / Earth Overlay
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#0B0C0F] text-[#D1D4D6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest leading-loose">
          <div className="flex flex-col gap-2">
            <span className="text-[#F7F7F5] font-['IBM_Plex_Sans'] text-xl font-semibold mb-4 normal-case tracking-normal">Keystone Space Holdings</span>
            <span>Program Umbrella: LUNAR ADVANCE™</span>
            <span>Est. 2026 // Off-World Operations</span>
            <span className="text-[#FF6A13] mt-4">Authorized Personnel Only</span>
          </div>
          <div className="flex flex-col gap-2 md:text-right">
            <span>"Settlement is the operational form of hope."</span>
            <span className="text-[#D1D4D6]/50">All imagery licensed via NASA Artemis Protocol.</span>
            <span className="text-[#D1D4D6]/50">CONFIDENTIAL - DO NOT DISTRIBUTE UNLESS CLASSIFIED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
