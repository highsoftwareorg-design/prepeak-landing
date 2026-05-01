import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Muhammad",
    role: "CEO & Co-founder",
    bio: "Product strategist with a decade of shipping high-stakes software. Drives vision, partnerships, and the relentless pursuit of polish.",
    initials: "MU",
  },
  {
    name: "Mahmoud",
    role: "CTO & Technical Lead",
    bio: "Systems engineer obsessed with clean architecture. Leads R&D across web, mobile, and applied AI integrations.",
    initials: "MA",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">Leadership</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            A partnership built on <span className="text-gradient-accent">innovation & friendship.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Two founders, one mission: prove that small teams build the most consequential software.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
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
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
