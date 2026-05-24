import { motion } from "framer-motion";
import { Activity, Brain, Zap, ShieldCheck } from "lucide-react";

const phases = [
  {
    n: "01",
    icon: Activity,
    title: "Monitor",
    desc: "Sensors track real-time current, voltage, and temperature across the entire data center.",
  },
  {
    n: "02",
    icon: Brain,
    title: "Predict",
    desc: "AI learns workload patterns and predicts power spikes up to 1000ms before they occur.",
  },
  {
    n: "03",
    icon: Zap,
    title: "Trigger",
    desc: "Upon detection, the system instantly activates energy from dedicated high-speed buffers.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Stabilize",
    desc: "Stabilizes the system before the load impacts critical infrastructure or GPUs.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="how" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            How PrePeak Works
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            From reactive to{" "}
            <span className="text-gradient-accent">predictive power management.</span>
          </h2>
          <p className="mt-4 text-white/90 text-lg">
            PrePeak combines sensors, AI algorithms, and intelligent control into one embedded
            layer.
          </p>
        </div>

        <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="relative glass lift rounded-2xl p-6 hover:border-primary/40 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                    <p.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
