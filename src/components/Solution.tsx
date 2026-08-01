import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Prevention of UPS bypass events",
  "Reduced battery degradation",
  "Improved power stability",
  "Better utilization of existing power capacity",
  "Reduced need for costly infrastructure oversizing",
  "Protection of AI workload performance without interfering with computation",
];

export function Solution() {
  return (
    <section id="solution" className="relative py-32 border-t border-border/40">
      <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary">The Solution</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            An AI-powered{" "}
            <span className="text-gradient-accent">predictive infrastructure layer.</span>
          </h2>

          <div className="mt-10 space-y-6 text-xl text-white/90 leading-relaxed">
            <p>
              PrePeak is an AI-powered predictive infrastructure layer designed to manage power
              transients in AI data centers.
            </p>
            <p>
              The system continuously monitors real-time electrical, thermal, and infrastructure
              telemetry data from GPUs and power systems, identifying patterns that indicate
              imminent power spikes before they occur.
            </p>
            <p>
              When a potential event is detected, PrePeak automatically activates ultra-fast energy
              buffers such as flywheels, supercapacitors, or energy storage systems to stabilize the
              infrastructure and prevent excessive stress on the UPS.
            </p>
            <p>
              Unlike other approaches, PrePeak does not modify, throttle, or interfere with customer
              GPU workloads. The system operates entirely at the power infrastructure layer, without
              impacting compute performance, latency, or SLA commitments.
            </p>
          </div>

          <div className="mt-10 glass rounded-2xl p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Key benefits</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-xl text-foreground leading-relaxed">
            Instead of reacting after a power spike impacts the system,{" "}
            <span className="text-gradient-accent font-semibold">
              PrePeak predicts and mitigates the event in real time
            </span>{" "}
            before it happens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
