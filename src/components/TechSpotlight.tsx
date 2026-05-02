import { motion } from "framer-motion";
import { Target, Clock, Gauge, ShieldCheck, FileText, Cpu } from "lucide-react";

const stats = [
  { v: "98%", k: "Prediction Accuracy", icon: Target },
  { v: "1000ms", k: "Detection Lead Time", icon: Clock },
  { v: "<1s", k: "Response Before Spike", icon: Gauge },
  { v: "30%", k: "Stranded Capacity Unlocked", icon: ShieldCheck },
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
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-xl"
              >
                <s.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                <p className="mt-6 text-4xl font-semibold tracking-tight text-gradient">{s.v}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.k}</p>
              </motion.div>
            ))}
          </div>

          {/* Cost comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-xl"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Solving a 1 MW Power Spike — Total 20-Year Cost</p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border/60 bg-background/40 p-6">
                <p className="text-xs font-mono text-muted-foreground">EXISTING SOLUTION</p>
                <p className="mt-2 text-sm text-muted-foreground">High-Rate Lithium-Ion · 6 cabinets · 9 tons</p>
                <p className="mt-6 text-4xl font-semibold text-foreground/70">$2.2M</p>
                <p className="mt-1 text-xs text-muted-foreground">4 full replacements over 20 years</p>
              </div>
              <div className="rounded-xl border border-primary/40 bg-primary/5 p-6 ring-1 ring-primary/20">
                <p className="text-xs font-mono text-primary">PREPEAK</p>
                <p className="mt-2 text-sm text-muted-foreground">AI-Driven Supercapacitor · 660 kg · plug-and-play</p>
                <p className="mt-6 text-4xl font-semibold text-gradient-accent">$150K</p>
                <p className="mt-1 text-xs text-muted-foreground">0 replacements · 20-year lifespan</p>
              </div>
            </div>
          </motion.div>
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
                  { k: "$42B", v: "TAM — Global Data Center Market" },
                  { k: "$25B", v: "SAM — AI & Hyperscale Power" },
                  { k: "$1.5B", v: "SOM — Early AI Data Centers" },
                ].map((s) => (
                  <div key={s.v} className="flex items-baseline gap-4 border-b border-border/40 pb-3">
                    <dt className="text-3xl font-semibold text-gradient w-28">{s.k}</dt>
                    <dd className="text-sm text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {customers.map((c) => (
                <div key={c.group} className="rounded-xl border border-border bg-surface/40 p-5 backdrop-blur-xl">
                  <p className="text-xs font-mono uppercase text-primary">{c.group}</p>
                  <ul className="mt-3 space-y-1.5">
                    {c.names.map((n) => (
                      <li key={n} className="text-sm text-foreground/85">{n}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
