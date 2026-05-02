import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LightOrbs } from "./LightOrbs";
import logo from "@/assets/prepeak-logo.png";

export function Hero() {
  const word = "PREPEAK";
  const letters = word.split("");

  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      <LightOrbs density="dense" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 flex items-center justify-center"
        >
          <motion.img
            src={logo}
            alt="PrePeak logo"
            className="h-20 w-auto drop-shadow-[0_0_30px_oklch(0.82_0.21_142_/_0.5)]"
            initial={{ filter: "blur(12px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>

        {/* Wordmark text-reveal */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[1] text-gradient-accent"
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
              hidden: {},
            }}
          >
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { y: "110%", opacity: 0 },
                  show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {l}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary backdrop-blur"
        >
          <Zap className="h-3 w-3" />
          <span>Predict Spikes. Protect Uptime.</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1 }}
          className="mt-6 text-balance text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]"
        >
          AI-Powered Power Stability for{" "}
          <span className="text-gradient-accent">AI Data Centers.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          PrePeak predicts GPU power spikes <strong className="text-foreground">1000ms before they occur</strong> —
          preventing downtime, protecting equipment, and unlocking up to 30% of stranded power capacity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.2 }}
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
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }}
          className="relative mx-auto mt-20 max-w-3xl"
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
