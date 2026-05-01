import { motion } from "framer-motion";
import { Search, Code2, Layout, Rocket } from "lucide-react";

const phases = [
  {
    n: "01",
    icon: Search,
    title: "Identify Bottlenecks",
    desc: "We audit your stack, surface technical debt, and map the friction points blocking performance and scale.",
  },
  {
    n: "02",
    icon: Code2,
    title: "Architect Clean, Scalable Code",
    desc: "Modern patterns, typed contracts, and modular systems designed to grow with your product, not against it.",
  },
  {
    n: "03",
    icon: Layout,
    title: "Deploy Intuitive UI/UX",
    desc: "Interfaces that feel inevitable. Pixel-perfect, accessible, and engineered for measurable conversion.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Full Digital Mastery",
    desc: "Continuous delivery, observability, and AI-augmented workflows. You own a product that compounds.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">The Transformation</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            From cluttered complexity to <span className="text-gradient-accent">minimalist mastery.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A four-phase engineering blueprint we apply to every engagement.
          </p>
        </div>

        <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {phases.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-xl border border-border bg-surface/40 p-6 backdrop-blur-xl transition-all hover:border-primary/40 hover:bg-surface/70 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                    <p.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
