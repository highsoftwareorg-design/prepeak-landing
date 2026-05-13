import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { sendContactEmail } from "../../api/contact";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSent(false);
  }, [name, company, email, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContactEmail({ data: { name, company, email, message } as any });
      setSent(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
              Get in <span className="text-gradient-accent">touch</span>.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md text-xl">Get in touch</p>
          </div>

          <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground font-mono">NAME</label>
                <Input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 bg-background/40 border-border" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-mono">COMPANY</label>
                <Input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1.5 bg-background/40 border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono">EMAIL</label>
              <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5 bg-background/40 border-border" />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground">TELL US ABOUT YOUR INFRASTRUCTURE</label>
              <Textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1.5 bg-background/40 border-border resize-none" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="privacy" required />
              <label htmlFor="privacy" className="text-sm text-muted-foreground">I agree to the Privacy Policy</label>
            </div>
            <Button type="submit" disabled={loading || sent} size="lg" className="w-full h-12 text-base font-semibold bg-[image:var(--gradient-cta)] text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/60 transition-transform hover:scale-[1.02]">
              {sent ? "Message sent ✓" : loading ? "Sending..." : "send"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}