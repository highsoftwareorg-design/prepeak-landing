import { motion } from "framer-motion";

export function Problem() {
  return (
    <section id="problem" className="relative py-32 border-t border-border/40">
      <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary">The Problem</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            AI data centers are facing a new kind of{" "}
            <span className="text-gradient-accent">power instability.</span>
          </h2>

          <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Modern GPU clusters create ultra-fast, synchronized power spikes that traditional
              electrical infrastructure was never designed to handle.
            </p>
            <p>
              In milliseconds, these sudden load transients can push UPS systems into bypass mode,
              increase battery stress, and create costly downtime risks.
            </p>
            <p>
              To protect against these events, operators are forced to overbuild infrastructure —
              adding larger battery systems or leaving up to 30% of power capacity underutilized
              as a safety margin.
            </p>
          </div>

          <p className="mt-10 text-xl text-foreground leading-relaxed">
            The problem isn&apos;t energy.
            <br />
            It&apos;s the inability to{" "}
            <span className="text-gradient-accent font-semibold">
              predict and control power spikes
            </span>{" "}
            before they happen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
