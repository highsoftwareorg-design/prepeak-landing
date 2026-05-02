import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LightOrbs } from "./LightOrbs";
import logo from "@/assets/prepeak-logo.png";
import serverRoom from "@/assets/server-room-hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 min-h-[100vh] flex items-center isolate">
      {/* Server room background */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <img
          src={serverRoom}
          alt=""
          className="h-full w-full object-cover object-center opacity-90"
          width={1920}
          height={1080}
        />

        {/* Animated green LED breathing pulse — global ambient */}
        <motion.div
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 55%, oklch(0.82 0.21 142 / 0.35), transparent 70%)",
          }}
          animate={{ opacity: [0.4, 0.9, 0.45, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Flickering LED dots scattered along server racks */}
        <ServerLeds />

        {/* Soft overlays for legibility while keeping the room visible */}
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="absolute inset-0 -z-10 mix-blend-screen opacity-60">
        <LightOrbs density="subtle" />
      </div>
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 text-center w-full">
        {/* Big animated logo (replaces wordmark) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex items-center justify-center"
        >
          <motion.img
            src={logo}
            alt="PrePeak"
            className="h-40 md:h-56 lg:h-64 w-auto drop-shadow-[0_0_60px_oklch(0.82_0.21_142_/_0.6)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono text-primary backdrop-blur"
        >
          <Zap className="h-3 w-3" />
          <span>PREDICT SPIKES · PROTECT UPTIME</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 text-balance text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
        >
          AI-Powered Power Stability for{" "}
          <span className="text-gradient-accent">AI Data Centers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          We predict GPU power spikes <strong className="text-foreground">1000ms before they occur</strong> —
          preventing downtime, protecting equipment, and unlocking up to 30% of stranded power capacity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px] shadow-primary/60">
            <a href="#contact">
              Request a Pilot
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-surface/40 hover:bg-surface backdrop-blur">
            <a href="#how">See How It Works</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <SpikeWaveform />
        </motion.div>
      </div>
    </section>
  );
}

function SpikeWaveform() {
  const points = [
    [0, 60], [8, 58], [15, 62], [22, 55], [30, 60], [38, 50], [44, 65],
    [50, 18], [54, 70], [60, 55], [68, 60], [76, 52], [84, 58], [92, 56], [100, 60],
  ];
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");

  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-xl shadow-[var(--shadow-card)]">
      <div className="absolute inset-0 bg-grid-fine rounded-2xl opacity-40" aria-hidden />
      <div className="relative flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
        <span>// gpu_load.signal</span>
        <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> predicting</span>
      </div>
      <svg viewBox="0 0 100 80" className="relative w-full h-56" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.86 0.2 140)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="oklch(0.86 0.2 140)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.6 0.22 150)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.21 142)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.82 0.21 142)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={`${path} L100,80 L0,80 Z`} fill="url(#fill)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.8 }}
        />
        <motion.path
          d={path} fill="none" stroke="url(#wave)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
        />
        <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 3 }} style={{ transformOrigin: "50px 18px" }}>
          <circle cx="50" cy="18" r="1.6" fill="oklch(0.86 0.2 140)" />
          <motion.circle cx="50" cy="18" r="1.6" fill="none" stroke="oklch(0.86 0.2 140)" strokeWidth="0.3"
            animate={{ r: [1.6, 5, 1.6], opacity: [0.9, 0, 0.9] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.g>
        <motion.line x1="50" y1="0" x2="50" y2="80" stroke="oklch(0.86 0.2 140 / 0.5)" strokeWidth="0.2" strokeDasharray="1 1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} />
      </svg>
      <div className="relative mt-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>t-1000ms</span>
        <span className="text-primary">⚡ spike predicted</span>
        <span>t+0</span>
      </div>
    </div>
  );
}
