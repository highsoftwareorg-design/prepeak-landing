import { motion } from "framer-motion";
import { Target, Clock, Gauge, ShieldCheck, FileText, Cpu } from "lucide-react";
import { CountUp } from "./CountUp";

const stats = [
  { to: 98, suffix: "%", k: "Prediction Accuracy", icon: Target },
  { to: 1000, suffix: "ms", k: "Detection Lead Time", icon: Clock },
  { to: 1, prefix: "<", suffix: "s", k: "Response Before Spike", icon: Gauge },
  { to: 30, suffix: "%", k: "Stranded Capacity Unlocked", icon: ShieldCheck },
];

const customers = [
  { group: "AI Data Center Operators", names: ["Equinix", "Digital Realty", "NTT Global"] },
  { group: "GPU Cloud Providers", names: ["CoreWeave", "Lambda Labs", "Crusoe Energy"] },
  { group: "Edge AI & HPC", names: ["CERN", "Lawrence Berkeley", "Universities"] },
  { group: "Future Hyperscalers", names: ["AWS", "Google Cloud", "Microsoft Azure"] },
];

export function TechSpotlight() {
  return (
    <>
      <section id="results" className="relative py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-primary">Early Validation Results</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Proven on high-density <span className="text-gradient-accent">AI workload simulations.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Response time: up to 1 second BEFORE the spike. Solving a 1 MW power spike at a fraction of the cost of lithium-ion alternatives.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.k}
                initial={{ opacity: 0, y: 40, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass lift rounded-2xl p-6 hover:border-primary/40"
              >
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                <p className="mt-6 text-4xl font-semibold tracking-tight text-gradient">
                  <CountUp to={s.to} prefix={s.prefix ?? ""} suffix={s.suffix} duration={1.8} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.k}</p>
              </motion.div>
            ))}
          </div>

          {/* Cost comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 glass-strong rounded-2xl p-8"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Solving a 1 MW Power Spike — Total 20-Year Cost</p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="glass lift rounded-2xl p-6">
                <p className="text-xs font-mono text-muted-foreground">EXISTING SOLUTION</p>
                <p className="mt-2 text-sm text-muted-foreground">High-Rate Lithium-Ion · 6 cabinets · 9 tons</p>
                <p className="mt-6 text-4xl font-semibold text-foreground/70">
                  <CountUp to={2.2} decimals={1} prefix="$" suffix="M" duration={1.8} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">4 full replacements over 20 years</p>
              </div>
              <div className="lift rounded-2xl border border-primary/40 bg-primary/5 p-6 ring-1 ring-primary/20 backdrop-blur-xl">
                <p className="text-xs font-mono text-primary">PREPEAK</p>
                <p className="mt-2 text-sm text-muted-foreground">AI-Driven Supercapacitor · 660 kg · plug-and-play</p>
                <p className="mt-6 text-4xl font-semibold text-gradient-accent">
                  <CountUp to={150} prefix="$" suffix="K" duration={1.8} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">0 replacements · 20-year lifespan</p>
              </div>
            </div>
          </motion.div>

          {/* IP & Patent */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass lift rounded-2xl p-6 hover:border-primary/40"
            >
              <FileText className="h-5 w-5 text-primary" />
              <p className="mt-4 font-mono text-xs uppercase text-muted-foreground">Patent</p>
              <h4 className="mt-1 text-lg font-semibold">Predictive AI Control Layer</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Patent covers prevention of extreme electrical load spikes — including those caused by synchronized GPU workloads in AI data centers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass lift rounded-2xl p-6 hover:border-primary/40"
            >
              <Cpu className="h-5 w-5 text-primary" />
              <p className="mt-4 font-mono text-xs uppercase text-muted-foreground">Technology</p>
              <h4 className="mt-1 text-lg font-semibold">Deep Time-Series Prediction</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Time-series data prediction with deep learning. All technology, code and IP are fully owned by PrePeak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="market" className="relative py-32 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-mono uppercase tracking-widest text-primary">Market Size</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
                A multi-billion dollar <span className="text-gradient-accent">opportunity.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We start with high-pain operators and expand to integrators (Schneider, Vertiv, ABB) and hyperscalers after validation.
              </p>

              <dl className="mt-10 space-y-4">
                {[
                  { to: 42, decimals: 0, suffix: "B", v: "TAM — Global Data Center Market" },
                  { to: 25, decimals: 0, suffix: "B", v: "SAM — AI & Hyperscale Power" },
                  { to: 1.5, decimals: 1, suffix: "B", v: "SOM — Early AI Data Centers" },
                ].map((s, i) => (
                  <motion.div key={s.v}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex items-baseline gap-4 border-b border-border/40 pb-3"
                  >
                    <dt className="text-3xl font-semibold text-gradient w-28">
                      <CountUp to={s.to} decimals={s.decimals} prefix="$" suffix={s.suffix} duration={1.6} />
                    </dt>
                    <dd className="text-sm text-muted-foreground">{s.v}</dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <p className="text-xs font-mono uppercase tracking-widest text-primary">Target Customers &</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                  Beachhead <span className="text-gradient-accent">Market</span>
                </h3>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
              {customers.map((c) => (
                <motion.div
                  key={c.group}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="glass lift rounded-2xl p-5 hover:border-primary/40"
                >
                  <p className="text-xs font-mono uppercase text-primary">{c.group}</p>
                  <ul className="mt-3 space-y-1.5">
                    {c.names.map((n) => (
                      <li key={n} className="text-sm text-foreground/85">{n}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
