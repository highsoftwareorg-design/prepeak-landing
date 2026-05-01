import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-primary">Contact</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to <span className="text-gradient-accent">transform?</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              Tell us about your product. We respond within one business day with a candid assessment and next steps.
            </p>
            <a
              href="mailto:hello@highsoftware.dev"
              className="mt-8 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@highsoftware.dev
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-xl shadow-[var(--shadow-card)] space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground font-mono">NAME</label>
                <Input required placeholder="Jane Doe" className="mt-1.5 bg-background/40 border-border" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-mono">COMPANY</label>
                <Input placeholder="Acme Inc." className="mt-1.5 bg-background/40 border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono">EMAIL</label>
              <Input required type="email" placeholder="you@company.com" className="mt-1.5 bg-background/40 border-border" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono">PROJECT</label>
              <Textarea required rows={4} placeholder="What are you building?" className="mt-1.5 bg-background/40 border-border resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
              {sent ? "Message sent ✓" : "Send message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
