import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Box,
  Target,
  Combine,
  Shield,
  Cpu,
  Building2,
  Home,
  Link2,
  Sprout,
  Users,
} from "lucide-react";
import { useRef } from "react";

const HOUSED = [
  {
    name: "Orbital Systems & Assurance (OSA)",
    role: "Institutional standards and assurance",
    Icon: Shield,
  },
  {
    name: "Lunar Reserve Residences",
    role: "Luxury real assets · premium habitation",
    Icon: Home,
  },
  {
    name: "Lunar Reserve Commons",
    role: "Dignified, standardized civic habitation",
    Icon: Building2,
  },
  {
    name: "LunarLink Systems™",
    role: "Prime contractor · cislunar infrastructure integrator",
    Icon: Link2,
  },
  {
    name: "Continuum Uplink™",
    role: "Connectivity layer under LunarLink Systems™",
    Icon: Cpu,
  },
  {
    name: "Lunar Balance Initiative",
    role: "Philanthropy-funded subsidiary · sustainable agriculture systems",
    Icon: Sprout,
  },
  {
    name: "Lunar Trade Bureau",
    role: "Workforce pipeline · training · credentialing",
    Icon: Users,
  },
] as const;

const HEADLINES = [
  "A permanent horizon for human operations.",
  "Continuity is a system. We are extending it.",
  "Infrastructure first. Settlement follows.",
];

export default function Lander() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 0.35], ["0%", "16%"]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.22], ["0%", "6%"]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.35], [1.08, 1]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="la-page-shell"
    >
      {/* Hero — big quiet image field, metadata anchored */}
      <section className="sticky top-0 flex min-h-[calc(100vh-5rem)] w-full flex-col justify-between overflow-hidden bg-vacuum">
        <motion.div
          style={{ y: heroImageY, scale: heroImageScale }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 z-10 bg-gradient-to-t from-vacuum via-vacuum/20 to-transparent"
            aria-hidden
          />
          <img
            src="https://images.unsplash.com/photo-1775571921496-f38f4958f341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwZWFydGglMjBob3Jpem9uJTIwYXJ0ZW1pc3xlbnwxfHx8fDE3NzYyOTU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1920"
            alt=""
            className="h-full w-full object-cover object-top opacity-[0.72] contrast-[1.05] grayscale"
          />
        </motion.div>

        <motion.div
          style={{ y: heroContentY }}
          className="relative z-10 mt-20 px-6 md:mt-24 md:px-12 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <p className="la-kicker text-[18px] text-lunar-grey">
              LUNAR ADVANCE™
            </p>
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-tight text-paper md:text-6xl lg:text-7xl">
              We do not &ldquo;go&rdquo; to the Moon.
              <br />
              <p className="text-lg font-normal leading-relaxed text-lunar-grey md:text-xl">We extend continuity to it.</p>
            </h1>
            <p className="max-w-xl text-lg font-normal leading-relaxed text-lunar-grey md:text-xl">
              LUNAR ADVANCE™ extends Earth&rsquo;s supply chains, energy systems,
              and research corridors. The lunar surface is where permanence is not a
              dream, but a procurement decision: staged, governed, insured, and
              inside the operational envelope.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: opacityFade }}
          className="relative z-10 flex flex-col gap-4 border-t border-lunar-grey/30 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-lunar-grey md:flex-row md:items-end md:justify-between md:px-12 lg:px-24"
        >
          <div className="flex flex-col gap-1">
            <span>
              LUNAR ADVANCE™ / Asset Capture / A2-LF-042 / Nearside Ridge Survey /
              02:14 UTC / Rev. C
            </span>
          </div>
          <div className="flex items-center gap-2 text-safety-orange">
            <span>Operational scroll</span>
            <ArrowRight className="h-3 w-3 rotate-90" aria-hidden />
          </div>
        </motion.div>
      </section>

      {/* Sample headlines — alternate bank */}
      <section
        className="relative z-20 -mt-16 rounded-t-[2rem] border-y border-lunar-grey bg-paper px-6 py-12 shadow-[0_-24px_80px_rgba(11,12,15,0.22)] md:-mt-20 md:px-12 md:pt-16 lg:px-24"
        aria-labelledby="headlines-label"
      >
        <div className="la-container">
          <p
            id="headlines-label"
            className="la-kicker-muted mb-6"
          >
            Approved headline bank
          </p>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-8">
            {HEADLINES.map((line) => (
              <li
                key={line}
                className="border-l-2 border-safety-orange pl-4 text-base font-semibold leading-snug text-charcoal md:text-lg"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="la-caption mt-8 text-charcoal/45">
            Alternate: Governed expansion. / Measured risk. Durable return. /
            Stewardship at lunar scale.
          </p>
        </div>
      </section>

      {/* Pillar 01 + image */}
      <section className="la-section">
        <div className="la-container la-grid-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center gap-8 md:col-span-5"
          >
            <div className="la-rule-label text-charcoal">
              <span>01</span>
              <span className="h-px w-8 bg-charcoal" aria-hidden />
              <span>Frontier Market</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-charcoal md:text-4xl">
              Managed growth. Risk modeled and systematized.
            </h2>
            <p className="la-body-muted">
              The Moon becomes a capital destination defined by long-horizon asset
              classes: transport corridors, energy capture, communications relays,
              and habitat real estate. Risk is not eliminated; it is governed.
            </p>
            <div className="grid grid-cols-1 gap-8 border-t border-lunar-grey pt-8 sm:grid-cols-2">
              <div className="space-y-2">
                <Target className="h-4 w-4 text-safety-orange" aria-hidden />
                <h3 className="text-sm font-semibold">Asset classes</h3>
                <p className="la-caption text-charcoal/55">
                  Class A corridors
                </p>
              </div>
              <div className="space-y-2">
                <Box className="h-4 w-4 text-safety-orange" aria-hidden />
                <h3 className="text-sm font-semibold">Modeled exposure</h3>
                <p className="la-caption text-charcoal/55">
                  Regolith futures
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="border border-lunar-grey bg-paper p-3 md:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-vacuum">
              <img
                src="https://images.unsplash.com/photo-1771927579674-e20425bfb859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZSUyMHNwYWNlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1200"
                alt=""
                className="h-full w-full object-cover contrast-[1.05] grayscale opacity-90"
              />
              <div
                className="pointer-events-none absolute inset-0 border border-safety-orange/15"
                aria-hidden
              />
            </div>
            <p className="la-caption mt-3 text-charcoal/55">
              Fig 1.1 — Topographical asset survey · Sector 04
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillar 02 — night field */}
      <section className="la-section bg-vacuum text-paper">
        <div className="la-container la-grid-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="order-2 border border-lunar-grey/40 bg-vacuum-elevated p-3 md:order-1 md:col-span-7"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1754638504964-880857928e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBoZWxtZXQlMjBpbnRlcmlvciUyMHNwYWNlfGVufDF8fHx8MTc3NjI5NTQxNnww&ixlib=rb-4.1.0&q=80&w=1200"
                alt=""
                className="h-full w-full object-cover contrast-[1.05] grayscale opacity-85"
              />
              <div
                className="absolute right-4 top-4 h-4 w-4 border-t-2 border-r-2 border-safety-orange"
                aria-hidden
              />
            </div>
            <p className="la-caption mt-3 text-lunar-grey/80">
              Fig 2.4 — Human-centered performance envelope · Routine assessment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="order-1 flex flex-col justify-center gap-8 md:order-2 md:col-span-5"
          >
            <div className="la-rule-label text-lunar-grey">
              <span>02</span>
              <span className="h-px w-8 bg-lunar-grey" aria-hidden />
              <span>Lifestyle Upgrade</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Measurable living outcomes.
            </h2>
            <p className="la-body text-lunar-grey">
              Settlement is improved conditions for defined roles: science,
              operations, governance, family support. Controlled environments,
              health monitoring, and clean-sheet planning make &ldquo;better
              living&rdquo; a deliverable—not a promise.
            </p>
            <a
              href="/brand"
              className="inline-flex w-full max-w-md items-center justify-between border border-safety-orange bg-safety-orange px-6 py-3 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-safety-orange/90 sm:w-max"
            >
              Review habitat prospectus
              <ArrowRight className="ml-4 h-4 w-4" aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pillar 03 — infrastructure */}
      <section className="la-section">
        <div className="la-container space-y-16">
          <div className="max-w-3xl">
            <div className="la-rule-label mb-6 text-charcoal">
              <span>03</span>
              <span className="h-px w-8 bg-charcoal" aria-hidden />
              <span>Infrastructure Opportunity</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-charcoal md:text-5xl">
              Standards, interoperability, and civil partnerships.
            </h2>
            <p className="la-body-muted mt-6">
              The Moon is a jurisdiction of systems—not a territory. Ports,
              corridors, and continuity facilities scale when protocols align.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 border-t border-lunar-grey pt-12 md:grid-cols-3 md:gap-8">
            <div className="space-y-4">
              <Combine className="h-5 w-5 text-safety-orange" aria-hidden />
              <h3 className="text-lg font-semibold text-charcoal">
                Ports &amp; corridors
              </h3>
              <p className="la-body text-sm text-charcoal/80">
                Transport and logistics follow published interfaces. Growth reads as
                engineering, not spectacle.
              </p>
            </div>
            <div className="space-y-4">
              <Shield className="h-5 w-5 text-safety-orange" aria-hidden />
              <h3 className="text-lg font-semibold text-charcoal">
                Continuity facilities
              </h3>
              <p className="la-body text-sm text-charcoal/80">
                Safeguarding knowledge and diversifying supply chains supports
                species continuity with procedural clarity.
              </p>
            </div>
            <div className="space-y-4">
              <Cpu className="h-5 w-5 text-safety-orange" aria-hidden />
              <h3 className="text-lg font-semibold text-charcoal">
                Public–private baseline
              </h3>
              <p className="la-body text-sm text-charcoal/80">
                Unified protocols bridge multilateral governance with enterprise
                uptime requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Housed brands — Keystone architecture */}
      <section
        className="la-section bg-paper"
        aria-labelledby="housed-heading"
      >
        <div className="la-container">
          <div className="mb-12 max-w-3xl">
            <p className="la-kicker-muted">
              Keystone architecture
            </p>
            <h2
              id="housed-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-charcoal md:text-4xl"
            >
              Housed programs &amp; products
            </h2>
            <p className="la-body-muted mt-4">
              Each line operates under the LUNAR ADVANCE™ umbrella with its own
              procurement posture—shared governance, discrete accountabilities.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-px bg-lunar-grey md:grid-cols-2 lg:grid-cols-3">
            {HOUSED.map(({ name, role, Icon }) => (
              <li
                key={name}
                className="flex flex-col gap-3 bg-paper p-6 transition-colors hover:bg-lunar-grey/20"
              >
                <Icon className="h-4 w-4 text-safety-orange" aria-hidden />
                <p className="font-semibold leading-snug text-charcoal">{name}</p>
                <p className="la-caption la-body text-charcoal/55">
                  {role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillar 04 — moral inevitability */}
      <section className="la-section bg-lunar-grey/25">
        <div className="la-container la-grid-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center gap-8 md:col-span-5"
          >
            <div className="la-rule-label text-charcoal">
              <span>04</span>
              <span className="h-px w-8 bg-charcoal" aria-hidden />
              <span>Moral Inevitability</span>
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-charcoal md:text-4xl">
              Responsibility framed as continuity.
            </h2>
            <p className="la-body-muted">
              Settlement is stewardship: safeguarding knowledge, diversifying
              supply chains, and supporting species continuity. The moral case is
              stated—not debated. We commit to responsible stewardship,
              transparent governance, and human-centered safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="border border-lunar-grey bg-paper p-3 md:col-span-7"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-vacuum">
              <img
                src="https://images.unsplash.com/photo-1770723965117-cffbc9e307a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZSUyMGJlYXV0aWZ1bHxlbnwxfHx8fDE3NzYyOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1600"
                alt=""
                className="h-full w-full object-cover contrast-[1.08] grayscale opacity-90"
              />
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-1/3 border-l border-safety-orange/25"
                aria-hidden
              />
            </div>
            <p className="la-caption mt-3 text-charcoal/55">
              Fig 4.1 — Population continuity planning · Earth overlay
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual metaphor + governance strip */}
      <section className="la-section-compact">
        <div className="la-container la-caption la-body text-charcoal/55">
          <p className="text-charcoal">
            Visual metaphor: <span className="text-charcoal/80">survey + stewardship</span>
            . Imagery is treated as licensed library photography—photoreal, minimally
            altered. Overlays remain archival: captions, coordinates, thin rules—not
            speculative UI.
          </p>
        </div>
      </section>

      <footer className="la-section-compact bg-vacuum text-lunar-grey">
        <div className="la-container flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="la-caption space-y-3 tracking-[0.2em]">
            <p className="font-sans text-xl font-semibold normal-case tracking-tight text-paper">
              Keystone Space Holdings
            </p>
            <p>Program umbrella · LUNAR ADVANCE™</p>
            <p className="text-lunar-grey/70">Internal reference · 2026</p>
            <p className="mt-4 text-safety-orange">Operational routing</p>
          </div>
          <div className="la-caption la-body max-w-md space-y-3 text-right md:text-right">
            <p className="text-paper/90">
              &ldquo;Settlement is the operational form of hope.&rdquo;
            </p>
            <p className="text-lunar-grey/60">
              Lunar photography is presented as neutral captured assets within
              Keystone&rsquo;s licensed library. No agency endorsement implied;
              marks and identifiers remain under their owners&rsquo; control.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
