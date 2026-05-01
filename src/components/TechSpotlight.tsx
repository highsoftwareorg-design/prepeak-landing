import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const codeLines: Array<{ t: string; c?: "k" | "s" | "f" | "n" | "p" | "v" | "co" }[]> = [
  [{ t: "// architecture/clean.ts", c: "co" }],
  [{ t: "import", c: "k" }, { t: " { " }, { t: "Service", c: "n" }, { t: ", " }, { t: "Pipeline", c: "n" }, { t: " } " }, { t: "from", c: "k" }, { t: " " }, { t: "'@high/core'", c: "s" }],
  [{ t: "" }],
  [{ t: "export", c: "k" }, { t: " " }, { t: "async function", c: "k" }, { t: " " }, { t: "transform", c: "f" }, { t: "(" }, { t: "input", c: "p" }, { t: ": " }, { t: "Payload", c: "n" }, { t: ") {" }],
  [{ t: "  const", c: "k" }, { t: " " }, { t: "pipeline", c: "v" }, { t: " = " }, { t: "new", c: "k" }, { t: " " }, { t: "Pipeline", c: "n" }, { t: "()" }],
  [{ t: "    ." }, { t: "use", c: "f" }, { t: "(" }, { t: "Service", c: "n" }, { t: "." }, { t: "validate", c: "f" }, { t: ")" }],
  [{ t: "    ." }, { t: "use", c: "f" }, { t: "(" }, { t: "Service", c: "n" }, { t: "." }, { t: "enrich", c: "f" }, { t: ")" }],
  [{ t: "    ." }, { t: "use", c: "f" }, { t: "(" }, { t: "Service", c: "n" }, { t: "." }, { t: "persist", c: "f" }, { t: ")" }],
  [{ t: "" }],
  [{ t: "  return", c: "k" }, { t: " " }, { t: "pipeline", c: "v" }, { t: "." }, { t: "run", c: "f" }, { t: "(" }, { t: "input", c: "p" }, { t: ")" }],
  [{ t: "}" }],
];

const colorFor = (c?: string) => {
  switch (c) {
    case "k": return "text-[oklch(0.78_0.16_300)]"; // keyword purple
    case "s": return "text-[oklch(0.78_0.14_140)]"; // string green
    case "f": return "text-[oklch(0.82_0.16_210)]"; // function cyan
    case "n": return "text-[oklch(0.85_0.14_70)]"; // type yellow
    case "p": return "text-[oklch(0.78_0.10_30)]"; // param orange
    case "v": return "text-foreground";
    case "co": return "text-muted-foreground italic";
    default: return "text-foreground/80";
  }
};

export function TechSpotlight() {
  return (
    <section id="tech" className="relative py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary">Tech Spotlight</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Clean code is a <span className="text-gradient-accent">competitive advantage.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our codebases read like documentation. Strong types, composable services, and zero magic — engineered to be modified safely by the next engineer who touches them.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6">
            {[
              { k: "100%", v: "Type-safe" },
              { k: "<200ms", v: "P95 latency" },
              { k: "0", v: "Tech debt left behind" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold text-gradient">{s.k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" aria-hidden />
          <div className="relative rounded-xl border border-border bg-[oklch(0.13_0.02_252)] shadow-[var(--shadow-card)] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.2_25)]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.15_85)]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.75_0.16_140)]/60" />
              </div>
              <div className="ml-2 flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Terminal className="h-3.5 w-3.5" />
                clean.ts
              </div>
            </div>
            <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                    className="flex"
                  >
                    <span className="select-none w-8 text-muted-foreground/40 text-right pr-4">{i + 1}</span>
                    <span>
                      {line.map((tok, j) => (
                        <span key={j} className={colorFor(tok.c)}>{tok.t}</span>
                      ))}
                    </span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
