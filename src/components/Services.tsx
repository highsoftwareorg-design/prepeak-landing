import { motion } from "framer-motion";
import { Globe, Smartphone, Brain } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    tag: "Next.js · React · Edge",
    desc: "Responsive, SEO-optimized, and lightning-fast applications. Built on modern frameworks with edge-deployed performance.",
    features: ["Server Components", "Sub-second TTFB", "100/100 Lighthouse"],
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    tag: "iOS · Android · React Native",
    desc: "Native-grade interfaces that feel instinctive. We design and ship mobile experiences users return to daily.",
    features: ["Cross-platform", "Offline-first", "Native modules"],
  },
  {
    icon: Brain,
    title: "Generative AI Integration",
    tag: "Gemini · Imagen · GPT-5",
    desc: "World-class reasoning and content generation embedded into your product. From chat to multimodal pipelines.",
    features: ["RAG pipelines", "Streaming UX", "Vector search"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 border-t border-border/40">
      <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-widest text-primary">Core Capabilities</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              The full stack of <span className="text-gradient-accent">high software.</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Three disciplines, one team. Every engagement spans engineering, design, and intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-xl overflow-hidden transition-all hover:border-primary/40"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                </div>
                <p className="mt-6 font-mono text-xs text-muted-foreground">{s.tag}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
