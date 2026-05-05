import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  "Predicts peaks before they happen",
  "Easy plug-and-play deployment",
  "Independent of software stack",
  "No extra batteries required",
  "Space saving footprint",
  "Maximizes GPU utilization",
  "No impact on job scheduling",
];

const competitors = [
  { name: "PrePeak", highlight: true, scores: [true, true, true, true, true, true, true] },
  { name: "NIVAI", scores: [true, false, false, true, true, false, false] },
  { name: "ABB", scores: [false, false, true, false, false, true, true] },
  { name: "Vertiv", scores: [false, false, true, false, false, true, true] },
  { name: "Schneider", scores: [false, false, true, false, false, true, true] },
];

export function Competitors() {
  return (
    <section id="competitors" className="relative py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">Competitive Edge</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            PrePeak vs. <span className="text-gradient-accent">the rest.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The only solution that combines predictive AI, plug-and-play deployment, and supercapacitor efficiency.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 overflow-x-auto glass-strong rounded-2xl"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left px-6 py-5 font-mono text-xs uppercase text-muted-foreground">Capability</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`px-4 py-5 text-center text-xs font-mono uppercase ${c.highlight ? "text-primary" : "text-muted-foreground"}`}>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f} className="border-b border-border/30 last:border-0 hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4 text-foreground/90">{f}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className={`px-4 py-4 text-center ${c.highlight ? "bg-primary/5" : ""}`}>
                      {c.scores[i] ? (
                        <Check className={`mx-auto h-5 w-5 ${c.highlight ? "text-primary" : "text-foreground/60"}`} />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
