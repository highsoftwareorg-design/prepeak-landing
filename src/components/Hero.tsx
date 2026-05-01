import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <div className="absolute inset-0 bg-grid-mesh" aria-hidden />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-primary/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <Zap className="h-3 w-3 text-primary" />
          <span>We act before the peak</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-balance text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          AI-Powered Power Stability for{" "}
          <span className="text-gradient-accent">AI Data Centers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          PrePeak predicts GPU power spikes before they occur — preventing downtime, protecting equipment,
          and unlocking up to 30% of stranded power capacity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px] shadow-primary/60">
            <a href="#contact">
              Request a Pilot
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-surface/40 hover:bg-surface">
            <a href="#how">See How It Works</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-3xl"
        >
          <SpikeWaveform />
        </motion.div>
      </div>
    </section>
  );
}

function SpikeWaveform() {
  // Simulated power load with predicted spike — echoes the logo's waveform
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

        {/* fill under curve */}
        <motion.path
          d={`${path} L100,80 L0,80 Z`} fill="url(#fill)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1 }}
        />
        {/* main line */}
        <motion.path
          d={path} fill="none" stroke="url(#wave)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* spike marker */}
        <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 1.4 }} style={{ transformOrigin: "50px 18px" }}>
          <circle cx="50" cy="18" r="1.6" fill="oklch(0.86 0.2 140)" />
          <motion.circle cx="50" cy="18" r="1.6" fill="none" stroke="oklch(0.86 0.2 140)" strokeWidth="0.3"
            animate={{ r: [1.6, 5, 1.6], opacity: [0.9, 0, 0.9] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.g>
        {/* prediction window dotted */}
        <motion.line x1="50" y1="0" x2="50" y2="80" stroke="oklch(0.86 0.2 140 / 0.5)" strokeWidth="0.2" strokeDasharray="1 1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} />
      </svg>
      <div className="relative mt-3 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>t-1000ms</span>
        <span className="text-primary">⚡ spike predicted</span>
        <span>t+0</span>
      </div>
    </div>
  );
}
