import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, Cpu } from "lucide-react";
import { TiltCard } from "./TiltCard";

const impacts = [
  {
    icon: AlertTriangle,
    title: "Operational Impact",
    tag: "Instability & Downtime",
    desc: "AI workloads ramp thousands of GPUs simultaneously, creating unpredictable millisecond-scale power spikes.",
    features: ["UPS bypass failures", "Costly downtime events", "Damage to GPUs and critical equipment", "System instability"],
  },
  {
    icon: DollarSign,
    title: "Economic Impact",
    tag: "Per Site / Per MW",
    desc: "Each downtime event and every megawatt of stranded capacity carries a measurable bottom-line cost.",
    features: ["$500K+ per downtime event", "Up to 30% stranded power capacity", "$1.5M infrastructure cost per 1 MW", "$300K/year in unused GPUs per 1 MW"],
  },
  {
    icon: Cpu,
    title: "The PrePeak Solution",
    tag: "Embedded AI Layer",
    desc: "An AI-controlled layer that predicts spikes from workload ramp patterns and triggers a dedicated energy buffer.",
    features: ["Predictive — not reactive", "Plug-and-play deployment", "Independent of software stack", "Unlocks up to 30% capacity"],
  },
];

export function Services() {
  return (
    <section id="problem" className="relative py-32 border-t border-border/40">
      <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-primary">The Peak — The Problem</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              AI data centers are becoming <span className="text-gradient-accent">unstable.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            The spike hits. Downtime. Damage. Loss. PrePeak acts before the peak.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {impacts.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <TiltCard className="h-full rounded-2xl">
                <div className="group relative h-full rounded-2xl border border-border bg-surface/50 p-8 backdrop-blur-xl overflow-hidden transition-colors hover:border-primary/50">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 ring-1 ring-primary/30">
                      <s.icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                    </div>
                    <p className="mt-6 font-mono text-xs text-muted-foreground">{s.tag}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
