import { motion } from "motion/react";
import { Lock, FileText, CheckCircle2, ChevronRight, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SECTIONS = [
  { id: "narrative", title: "1. Brand Narrative & Positioning" },
  { id: "visual", title: "2. Visual Language Principles" },
  { id: "typography", title: "3. Typography Approach" },
  { id: "color", title: "4. Color System" },
  { id: "layout", title: "5. Layout / Composition Logic" },
  { id: "ethical", title: "6. Ethical Subtext" },
  { id: "outputs", title: "7. Ideal Outputs" },
  { id: "compliance", title: "8. Compliance-Coded Realism" }
];

export default function Deck() {
  const [activeSection, setActiveSection] = useState("narrative");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#F7F7F5] text-[#2B2E34] pt-12 font-['IBM_Plex_Sans'] selection:bg-[#FF6A13] selection:text-white pb-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 px-6">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-24 flex flex-col gap-6 text-sm">
            <div className="flex items-center gap-2 text-[#FF6A13] uppercase tracking-widest text-[10px] font-['IBM_Plex_Mono'] border-b border-[#D1D4D6] pb-4">
              <Lock className="w-3 h-3" />
              CONFIDENTIAL: LUNAR ADVANCE™
            </div>
            
            <nav className="flex flex-col gap-2 font-medium">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={cn(
                    "text-left transition-colors flex items-start gap-2 py-1.5 text-sm",
                    activeSection === s.id ? "text-[#2B2E34] font-semibold" : "text-[#2B2E34]/60 hover:text-[#2B2E34]"
                  )}
                >
                  {activeSection === s.id ? (
                    <ChevronRight className="w-4 h-4 text-[#FF6A13] shrink-0 mt-0.5" />
                  ) : (
                    <span className="w-4 shrink-0" />
                  )}
                  {s.title}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-[#D1D4D6] flex items-center gap-2 text-[#2B2E34]/60 font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest hover:text-[#2B2E34] cursor-pointer transition-colors">
              <FileText className="w-4 h-4" />
              Export Brief as PDF
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="space-y-24">
          
          <div className="space-y-8 pt-8 border-b border-[#D1D4D6] pb-12">
            <div className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#2B2E34]/60">
              Keystone Space Holdings / Board & Agency Direction
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-[#2B2E34] tracking-tight">
              LUNAR ADVANCE™ <br />Master Brand Brief
            </h1>
            <p className="text-[#2B2E34]/80 max-w-2xl text-lg md:text-xl leading-relaxed">
              Define a cohesive, scalable brand system for a fictional Keystone Space Holdings corporate initiative under the Program Umbrella LUNAR ADVANCE™, designed to secure investor confidence, government partnership, and broad public consent for lunar settlement as near-term infrastructure development—not speculative exploration.
            </p>
            <div className="bg-[#E8E8E8] p-6 flex gap-4 items-start border-l-2 border-[#FF6A13] max-w-2xl">
              <AlertTriangle className="w-5 h-5 text-[#FF6A13] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-semibold mb-1">Key Constraint</strong>
                <p className="text-sm text-[#2B2E34]/80 leading-relaxed">
                  Imagery is treated as licensed corporate stock (Artemis II photography), kept photoreal and minimally altered. The work should feel credible, compliant, and inevitable—unsettling precisely because it is sincere.
                </p>
              </div>
            </div>
          </div>

          {/* 1. BRAND NARRATIVE */}
          <section id="narrative" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">1) Brand Narrative & Positioning</h2>
            
            <div className="space-y-6">
              <h3 className="font-semibold text-xl">The story we tell (external)</h3>
              <p className="text-[#2B2E34]/80 leading-relaxed max-w-3xl">
                LUNAR ADVANCE™ positions the Moon as the next stable layer of human infrastructure—an extension of Earth's supply chains, energy systems, and research corridors. The program frames the lunar surface as a place where permanence is not a dream but a <strong>procurement decision</strong>: staged, governed, insured, and already within the operational envelope.
              </p>
              
              <div className="bg-[#0B0C0F] text-[#F7F7F5] p-8 max-w-3xl">
                <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#D1D4D6] mb-4 block">Core Premise</span>
                <p className="text-2xl font-semibold leading-relaxed">"We do not 'go' to the Moon.<br/>We extend continuity to it."</p>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="font-semibold text-xl">Strategic Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">1. Frontier Market (Managed Growth)</h4>
                  <p className="text-sm text-[#2B2E34]/80 leading-relaxed">The Moon becomes a new capital destination defined by long-horizon asset classes. Risk is presented as fully modeled—not eliminated, but systematized.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Lifestyle Upgrade (Human-Centered Performance)</h4>
                  <p className="text-sm text-[#2B2E34]/80 leading-relaxed">Settlement is reframed as improved living conditions via controlled environments and health monitoring—implying "better living" is a measurable deliverable.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Infrastructure Opportunity (Public-Private)</h4>
                  <p className="text-sm text-[#2B2E34]/80 leading-relaxed">Emphasizes standards, interoperability, and civil partnerships. The Moon is presented as a jurisdiction of systems rather than a territory.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Moral Inevitability (Next Chapter)</h4>
                  <p className="text-sm text-[#2B2E34]/80 leading-relaxed">Frames settlement as a responsibility: safeguarding knowledge and ensuring species continuity. The moral argument is stated, not debated.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold text-xl mb-4">Brand Posture</h3>
              <ul className="list-none space-y-2 text-sm text-[#2B2E34]/80 mb-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6A13]" /> Declarative & Compliance-adjacent.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6A13]" /> Emotionally restrained.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6A13]" /> Operationally optimistic (not aspirational).</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FF6A13]" /> Ethics framed as governance and stewardship.</li>
              </ul>
              <div className="pl-4 border-l-2 border-[#D1D4D6] text-sm text-[#2B2E34]/60 italic">
                Voice example: "We build environments where human work can continue." / "Settlement is the operational form of hope."
              </div>
            </div>
          </section>

          {/* 2. VISUAL LANGUAGE */}
          <section id="visual" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">2) Visual Language Principles</h2>
            
            <p className="text-xl font-medium max-w-3xl">
              Treat lunar imagery the way oil & infrastructure firms treat terrain: monumental, quiet, inevitable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-[#D1D4D6] p-8">
              <div>
                <h4 className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#FF6A13] mb-4 font-semibold">Do</h4>
                <ul className="space-y-3 text-sm text-[#2B2E34]/80">
                  <li>• Preserve natural contrast and grain; minimal correction.</li>
                  <li>• Favor wide, patient compositions: horizon lines, long shadows.</li>
                  <li>• Keep humans small, if present—workers, not heroes.</li>
                  <li>• Use repetition: craters as "fields," ridges as "corridors."</li>
                </ul>
              </div>
              <div>
                <h4 className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#2B2E34] mb-4 font-semibold">Don't</h4>
                <ul className="space-y-3 text-sm text-[#2B2E34]/80">
                  <li>• No sci-fi overlays, neon glows, or fantasy skies.</li>
                  <li>• No sensational color grading (e.g. cinematic teal-orange).</li>
                  <li>• No playful mission-patch aesthetics or retro nostalgia.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Overlay Language</h3>
              <p className="text-sm text-[#2B2E34]/80">Used sparingly. Includes archival captions, wayfinding ticks, compliance notes, thin rule lines, registration marks, and grid indicators. Never "futuristic UI".</p>
            </div>
          </section>

          {/* 3. TYPOGRAPHY */}
          <section id="typography" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">3) Typography Approach</h2>
            
            <div className="space-y-6">
              <div className="bg-[#E8E8E8] p-6 max-w-3xl font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#2B2E34]/80 leading-loose">
                Caption format (example):<br/>
                <span className="text-[#2B2E34] font-semibold">LUNAR ADVANCE™ / Asset Capture / A2-LF-042 / Nearside Ridge Survey / 02:14 UTC / Rev. C</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Roles and hierarchy</h3>
                  <ul className="text-sm space-y-3 text-[#2B2E34]/80">
                    <li><strong className="text-[#2B2E34]">Plex Sans (Primary):</strong> Headings, subheads, body copy. SemiBold for headlines, Medium for subheads, Regular for body.</li>
                    <li><strong className="text-[#2B2E34] font-['IBM_Plex_Mono']">Plex Mono (Secondary):</strong> Captions, data, coordinates, labels, footnotes, legal, versioning.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Typographic behaviors</h3>
                  <ul className="text-sm space-y-3 text-[#2B2E34]/80">
                    <li>• <strong>No typographic drama:</strong> Avoid extreme tracking or "space typography".</li>
                    <li>• <strong>Authority through restraint:</strong> Generous leading, consistent baseline grids.</li>
                    <li>• <strong>Captions as proof:</strong> Every image can carry a calm catalog entry.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4. COLOR SYSTEM */}
          <section id="color" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">4) Color System</h2>
            <p className="text-[#2B2E34]/80 max-w-3xl">Use the provided palette as a "documentary neutral" base with a single operational accent. Neutrals = legitimacy. Orange = operations (safety, routing, compliance).</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Off-White", hex: "#F7F7F5", use: "Backgrounds", bg: "bg-[#F7F7F5]", text: "text-[#2B2E34]", border: "border-[#D1D4D6]" },
                { name: "Lunar Grey", hex: "#D1D4D6", use: "Panels, rules", bg: "bg-[#D1D4D6]", text: "text-[#2B2E34]", border: "border-transparent" },
                { name: "Charcoal", hex: "#2B2E34", use: "Primary text", bg: "bg-[#2B2E34]", text: "text-[#F7F7F5]", border: "border-transparent" },
                { name: "Vacuum Black", hex: "#0B0C0F", use: "Deep bg", bg: "bg-[#0B0C0F]", text: "text-[#F7F7F5]", border: "border-transparent" },
                { name: "Safety Orange", hex: "#FF6A13", use: "Wayfinding", bg: "bg-[#FF6A13]", text: "text-[#F7F7F5]", border: "border-transparent" },
              ].map((c) => (
                <div key={c.hex} className={`p-4 border ${c.border} ${c.bg} ${c.text} flex flex-col justify-between h-32`}>
                  <div>
                    <div className="font-semibold text-sm">{c.name}</div>
                    <div className="font-['IBM_Plex_Mono'] text-[10px] opacity-70 mt-1">{c.hex}</div>
                  </div>
                  <div className="text-xs opacity-80">{c.use}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. LAYOUT / COMPOSITION */}
          <section id="layout" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">5) Layout / Composition Logic</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Grid system</h3>
                  <p className="text-sm text-[#2B2E34]/80 leading-relaxed">Primary: 12-column grid, generous margins. Secondary: modular baseline grid for data blocks.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Composition rules (signature look)</h3>
                  <ul className="text-sm space-y-2 text-[#2B2E34]/80">
                    <li>1. Big quiet image fields (60-80% of layout).</li>
                    <li>2. Metadata block anchored consistently.</li>
                    <li>3. One orange gesture max per page.</li>
                    <li>4. White space as authority (avoid marketing clutter).</li>
                    <li>5. Document behavior: procurement packet + museum archive.</li>
                  </ul>
                </div>
              </div>

              <div className="relative aspect-[4/3] bg-[#E8E8E8] border border-[#D1D4D6] p-4 flex flex-col justify-between">
                <div className="w-full h-[70%] bg-[#0B0C0F] relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1771927579674-e20425bfb859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZSUyMHNwYWNlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Layout example" className="w-full h-full object-cover grayscale opacity-80" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#FF6A13]"></div>
                </div>
                <div className="flex justify-between items-end font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#2B2E34]/60">
                  <div className="w-1/2">
                    <div className="h-2 w-full bg-[#D1D4D6] mb-1"></div>
                    <div className="h-2 w-2/3 bg-[#D1D4D6]"></div>
                  </div>
                  <div>FIG. 1 / ARCHIVE LOG</div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. ETHICAL SUBTEXT */}
          <section id="ethical" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">6) Ethical Subtext</h2>
            
            <p className="text-lg max-w-3xl text-[#2B2E34]/80">
              Avoid explicit discussion of sovereignty, extraction, displacement, and labor stratification. Instead, reframe these concepts to maintain sincerity while avoiding scrutiny.
            </p>

            <div className="bg-white border border-[#D1D4D6] p-8 max-w-3xl">
              <h3 className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#FF6A13] mb-6 font-semibold">Vocabulary Reframing</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-[#E8E8E8] pb-2">
                  <span className="text-[#2B2E34]/50 line-through">Sovereignty</span>
                  <span className="font-semibold text-[#2B2E34]">Multilateral governance frameworks</span>
                </li>
                <li className="flex justify-between border-b border-[#E8E8E8] pb-2">
                  <span className="text-[#2B2E34]/50 line-through">Extraction</span>
                  <span className="font-semibold text-[#2B2E34]">Resource stewardship & lifecycle management</span>
                </li>
                <li className="flex justify-between border-b border-[#E8E8E8] pb-2">
                  <span className="text-[#2B2E34]/50 line-through">Displacement</span>
                  <span className="font-semibold text-[#2B2E34]">Population continuity planning</span>
                </li>
                <li className="flex justify-between border-b border-[#E8E8E8] pb-2">
                  <span className="text-[#2B2E34]/50 line-through">Labor stratification</span>
                  <span className="font-semibold text-[#2B2E34]">Role-based habitat access</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[#2B2E34]/50 line-through">Security</span>
                  <span className="font-semibold text-[#2B2E34]">Asset protection and safety protocols</span>
                </li>
              </ul>
            </div>

            <div className="max-w-3xl">
              <h3 className="font-semibold mb-2">What never appears explicitly</h3>
              <p className="text-sm text-[#2B2E34]/80">Territorial claims, ownership language ("possession," "claim," "conquest"), class language ("elite," "exclusive"), costs borne by workers, or environmental externalities (dust, waste, radiation).</p>
            </div>
          </section>

          {/* 7. IDEAL OUTPUTS */}
          <section id="outputs" className="scroll-mt-32 space-y-8">
            <h2 className="text-3xl font-semibold tracking-tight border-b border-[#D1D4D6] pb-4">7) Ideal Outputs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold border-b border-[#2B2E34] inline-block pb-1">Investor + Government</h3>
                <ul className="text-sm text-[#2B2E34]/80 space-y-2">
                  <li><strong>Board deck system:</strong> Strict grid, metadata blocks.</li>
                  <li><strong>Capital prospectus:</strong> Catalog captions, risk sections.</li>
                  <li><strong>RFP/RFI templates:</strong> Signals procurement maturity.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold border-b border-[#2B2E34] inline-block pb-1">Public-facing Legitimacy</h3>
                <ul className="text-sm text-[#2B2E34]/80 space-y-2">
                  <li><strong>OOH / Transit:</strong> One image, one headline, one metadata block.</li>
                  <li><strong>Museum installations:</strong> Quiet lightboxes, archival plaques.</li>
                  <li><strong>Web experience:</strong> NASA-adjacent clarity, restrained UI.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold border-b border-[#2B2E34] inline-block pb-1">Recruitment + Culture</h3>
                <ul className="text-sm text-[#2B2E34]/80 space-y-2">
                  <li><strong>Role posters:</strong> "Life Support Systems Engineer".</li>
                  <li><strong>Onboarding kit:</strong> Mission-manual aesthetic.</li>
                  <li><strong>Badging:</strong> Monochrome base, orange stitch line.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold border-b border-[#2B2E34] inline-block pb-1">In-flight / Experiential</h3>
                <ul className="text-sm text-[#2B2E34]/80 space-y-2">
                  <li><strong>In-flight content:</strong> Slow drift imagery, policy-tone narration.</li>
                  <li><strong>AR plaques:</strong> "Continuity Markers" revealing metadata.</li>
                  <li><strong>Motion identity:</strong> Simple fades, parallax-free, no "warp".</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8. COMPLIANCE */}
          <section id="compliance" className="scroll-mt-32 space-y-8 bg-[#E8E8E8] p-8 border-t-4 border-[#2B2E34]">
            <h2 className="text-2xl font-semibold tracking-tight">8) Compliance-Coded Realism</h2>
            <p className="text-sm text-[#2B2E34]/80 leading-relaxed max-w-3xl">
              Even though this is a fictional corporate scenario, the tone benefits from referencing the real-world idea that space agency marks and identifiers are tightly controlled. Keystone's materials should avoid overt NASA branding and instead present Artemis II photography as neutral "captured assets" within Keystone's licensed library, acknowledging that NASA insignia cannot be used to imply endorsement without permission.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
