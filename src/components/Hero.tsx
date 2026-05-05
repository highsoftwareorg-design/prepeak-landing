import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LightOrbs } from "./LightOrbs";
import logo from "@/assets/logo-new.png";
import serverRoom from "@/assets/server-room-hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 min-h-[100vh] flex items-center isolate">
      {/* Server room background */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <img
          src={serverRoom}
          alt=""
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-100 brightness-[0.95] saturate-[0.6]"
          width={1920}
          height={1080}
        />

        {/* Animated green LED breathing pulse — global ambient (reduced) */}
        <motion.div
          className="absolute inset-0 mix-blend-screen pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 55%, oklch(0.82 0.21 142 / 0.04), transparent 70%)",
          }}
          animate={{ opacity: [0.06, 0.14, 0.08, 0.12, 0.06] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Flickering LED dots scattered along server racks */}
        <ServerLeds />

        {/* Soft overlays for legibility while keeping the room visible */}
        <div className="absolute inset-0 bg-background/15" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="absolute inset-0 -z-10 mix-blend-screen opacity-60">
        <LightOrbs density="subtle" />
      </div>

      {/* Floating animated blobs (gel/blob effect) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
        <span
          className="blob"
          style={{
            top: "-10%", left: "-8%", width: 520, height: 520,
            background: "radial-gradient(circle, oklch(0.82 0.21 142 / 0.45), transparent 70%)",
            animationDelay: "0s",
          }}
        />
        <span
          className="blob"
          style={{
            top: "20%", right: "-10%", width: 460, height: 460,
            background: "radial-gradient(circle, oklch(0.62 0.2 155 / 0.4), transparent 70%)",
            animationDelay: "-6s",
          }}
        />
        <span
          className="blob"
          style={{
            bottom: "-15%", left: "30%", width: 600, height: 600,
            background: "radial-gradient(circle, oklch(0.86 0.2 140 / 0.3), transparent 70%)",
            animationDelay: "-12s",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="absolute inset-0 -z-10 animated-gradient mix-blend-screen opacity-70" aria-hidden />

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
            className="h-40 md:h-56 lg:h-64 w-auto drop-shadow-[0_0_60px_oklch(0.82_0.21_142_/_0.6)] border-slate-200"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Heartbeat ECG line under the logo */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mx-auto mt-4 max-w-md"
        >
          <Heartbeat />
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="group h-14 px-8 text-base font-semibold tracking-tight
                       bg-[image:var(--gradient-cta)] text-primary-foreground
                       shadow-[0_10px_40px_-10px] shadow-primary/70
                       transition-all duration-300 hover:scale-[1.05]
                       hover:shadow-[0_20px_70px_-8px] hover:shadow-primary"
          >
            <a href="#contact">
              Request a Pilot
              <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base border-border/80 bg-surface/40 hover:bg-surface backdrop-blur-xl
                       transition-all duration-300 hover:scale-[1.05] hover:border-primary/60
                       hover:shadow-[0_18px_50px_-12px] hover:shadow-primary/40"
          >
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

function Heartbeat() {
  // ECG-style waveform: flat baseline, P wave, QRS spike, T wave, flat
  const d =
    "M0,20 L18,20 L22,18 L26,22 L30,20 L40,20 L43,12 L46,30 L49,4 L52,32 L55,18 L58,20 L70,20 L74,16 L80,22 L84,20 L100,20";

  return (
    <div className="relative h-12 w-full overflow-hidden rounded-lg border border-primary/20 bg-surface/30 backdrop-blur-sm px-3 py-1">
      <div className="absolute inset-0 bg-grid-fine opacity-20" aria-hidden />
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="relative h-full w-full">
        <defs>
          <linearGradient id="ecgFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.86 0.2 142)" stopOpacity="0" />
            <stop offset="20%" stopColor="oklch(0.86 0.2 142)" stopOpacity="1" />
            <stop offset="80%" stopColor="oklch(0.86 0.2 142)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.86 0.2 142)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Faint baseline (full path) */}
        <path
          d={d}
          fill="none"
          stroke="oklch(0.82 0.21 142 / 0.18)"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated drawing pulse */}
        <motion.path
          d={d}
          fill="none"
          stroke="url(#ecgFade)"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 4px oklch(0.86 0.2 142 / 0.9))",
          }}
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: [0, 1, 1], pathOffset: [0, 0, 1] }}
          transition={{
            duration: 2,
            times: [0, 0.7, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

function ServerLeds() {
  // Hand-placed positions roughly aligned to server racks; deterministic so SSR matches
  const leds = [
    { x: 8, y: 38, d: 1.6, h: 142 }, { x: 8, y: 46, d: 2.2, h: 142 },
    { x: 8, y: 54, d: 1.9, h: 150 }, { x: 8, y: 62, d: 2.6, h: 142 },
    { x: 18, y: 36, d: 1.8, h: 142 }, { x: 18, y: 48, d: 2.4, h: 150 },
    { x: 18, y: 60, d: 2.0, h: 142 }, { x: 28, y: 40, d: 2.2, h: 142 },
    { x: 28, y: 52, d: 1.7, h: 150 }, { x: 28, y: 64, d: 2.5, h: 142 },
    { x: 72, y: 38, d: 2.1, h: 142 }, { x: 72, y: 50, d: 1.9, h: 142 },
    { x: 72, y: 62, d: 2.3, h: 150 }, { x: 82, y: 40, d: 1.8, h: 142 },
    { x: 82, y: 52, d: 2.6, h: 142 }, { x: 82, y: 64, d: 2.0, h: 150 },
    { x: 92, y: 42, d: 2.2, h: 142 }, { x: 92, y: 56, d: 1.7, h: 142 },
    { x: 48, y: 30, d: 1.5, h: 142 }, { x: 52, y: 32, d: 1.5, h: 150 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none mix-blend-screen">
      {leds.map((l, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: 6,
            height: 6,
            background: `oklch(0.86 0.2 ${l.h})`,
            boxShadow: `0 0 10px 2px oklch(0.86 0.2 ${l.h} / 0.9), 0 0 24px 6px oklch(0.82 0.21 ${l.h} / 0.5)`,
          }}
          animate={{ opacity: [0.15, 1, 0.3, 0.95, 0.2], scale: [0.9, 1.15, 1, 1.1, 0.9] }}
          transition={{ duration: l.d + 1.6, repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.35 }}
        />
      ))}

      {/* Occasional fast blink — diagnostic LEDs */}
      {[{ x: 14, y: 44 }, { x: 24, y: 56 }, { x: 76, y: 46 }, { x: 88, y: 58 }].map((l, i) => (
        <motion.span
          key={`blink-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: 4,
            height: 4,
            background: "oklch(0.9 0.22 142)",
            boxShadow: "0 0 8px 2px oklch(0.86 0.2 142 / 0.9)",
          }}
          animate={{ opacity: [0, 1, 0, 0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
        />
      ))}
    </div>
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
