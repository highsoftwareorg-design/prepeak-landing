import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-mesh" aria-hidden />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-primary/10 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          <span>Enterprise-grade engineering · Powered by AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-balance text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Empowering Your Business Through{" "}
          <span className="text-gradient-accent">Digital Transformation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          We turn technical frustration into seamless, high-performance web and mobile solutions.
          From cluttered complexity to minimalist high-tech efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px] shadow-primary/60">
            <a href="#contact">
              Start Your Transformation
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-surface/40 hover:bg-surface">
            <a href="#services">View Our Work</a>
          </Button>
        </motion.div>

        {/* Architecture visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-3xl"
        >
          <ArchitectureFingerprint />
        </motion.div>
      </div>
    </section>
  );
}

function ArchitectureFingerprint() {
  // Software architecture pattern: nodes connected by animated lines
  const nodes = [
    { x: 10, y: 50 }, { x: 30, y: 20 }, { x: 30, y: 80 },
    { x: 50, y: 50 }, { x: 70, y: 25 }, { x: 70, y: 75 },
    { x: 90, y: 50 },
  ];
  const edges: Array<[number, number]> = [
    [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [1, 4], [2, 5],
  ];

  return (
    <div className="relative rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-xl shadow-[var(--shadow-card)]">
      <div className="absolute inset-0 bg-grid-fine rounded-2xl opacity-40" aria-hidden />
      <svg viewBox="0 0 100 100" className="relative w-full h-64" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.82 0.16 210)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.82 0.16 210)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.62 0.2 260)" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="node">
            <stop offset="0%" stopColor="oklch(0.95 0.1 220)" />
            <stop offset="100%" stopColor="oklch(0.62 0.2 260)" />
          </radialGradient>
        </defs>
        {edges.map(([a, b], i) => {
          const n1 = nodes[a], n2 = nodes[b];
          return (
            <motion.line
              key={i}
              x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
              stroke="url(#edge)" strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 + i * 0.08 }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.g key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle cx={n.x} cy={n.y} r="2.5" fill="url(#node)" />
            <motion.circle
              cx={n.x} cy={n.y} r="2.5" fill="none"
              stroke="oklch(0.82 0.16 210)" strokeWidth="0.3"
              animate={{ r: [2.5, 5, 2.5], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.g>
        ))}
      </svg>
      <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
        <span>// software_architecture.graph</span>
        <span className="text-primary">● live</span>
      </div>
    </div>
  );
}
