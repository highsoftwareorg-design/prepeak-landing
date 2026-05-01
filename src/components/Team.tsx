import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Musab Mahamid",
    role: "Founder & CEO",
    bio: "Senior Electrical Engineer with extensive experience designing large-scale, mission-critical electrical systems.",
    initials: "MM",
  },
  {
    name: "Muhammad Wattad",
    role: "Co-Founder & CTO",
    bio: "Ph.D in AI & Computer Vision from the Technion. Previously at Intel, eBay, and Mobileye.",
    initials: "MW",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">The Team</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Built by engineers who've shipped <span className="text-gradient-accent">mission-critical systems.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            All technology, code, and IP fully owned by PrePeak — patent covers a predictive AI control layer for synchronized GPU workloads.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div key={m.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-xl transition-all hover:border-primary/40"
            >
              <div className="flex items-start gap-5">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-blue-glow/20 ring-1 ring-primary/40 font-mono font-semibold text-foreground">
                  {m.initials}
                  <div className="absolute -inset-1 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-primary font-mono">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="mt-20">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-primary">Roadmap</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { y: "2025", t: "Patent & MVP" },
              { y: "2026", t: "R&D + PoC with strategic partners" },
              { y: "2027", t: "First commercial customer" },
              { y: "2028", t: "Integrator partnerships" },
            ].map((r, i) => (
              <motion.div key={r.y}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-surface/40 p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-2xl font-semibold text-gradient-accent">{r.y}</p>
                <p className="mt-2 text-sm text-muted-foreground">{r.t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
