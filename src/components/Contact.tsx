import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [privacy, setPrivacy] = useState(false);
  const [fieldError, setFieldError] = useState<{ field: string; msg: string } | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const privacyRef = useRef<HTMLButtonElement>(null);

  const Tooltip = ({ msg }: { msg: string }) => (
    <div className="absolute z-10 mt-1 bg-[#fffbe6] text-gray-800 text-sm px-3 py-2 rounded shadow-md border border-yellow-300 flex items-center gap-2 whitespace-nowrap">
      ⚠️ {msg}
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldError(null);

    if (!name.trim()) {
      setFieldError({ field: "name", msg: "Please fill in this field." });
      nameRef.current?.focus();
      return;
    }
    if (!email.trim()) {
      setFieldError({ field: "email", msg: "Please fill in this field." });
      emailRef.current?.focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError({
        field: "email",
        msg: `Please include an '@' in the email address. '${email}' is missing an '@'.`,
      });
      emailRef.current?.focus();
      return;
    }
    if (!message.trim()) {
      setFieldError({ field: "message", msg: "Please fill in this field." });
      messageRef.current?.focus();
      return;
    }
    if (!privacy) {
      setFieldError({ field: "privacy", msg: "You must agree to the Privacy Policy." });
      privacyRef.current?.focus();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }
      setSent(true);
      setTimeout(() => {
        setName("");
        setCompany("");
        setEmail("");
        setMessage("");
        setPrivacy(false);
        setSent(false);
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border/40 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
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
            <p className="mt-4 text-white/90 leading-relaxed max-w-md text-xl">Get in touch</p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl p-6 space-y-4 bg-black/70 border border-green-500/20"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-base text-white font-mono">NAME</label>
                <div className="relative">
                  <Input
                    ref={nameRef}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setFieldError(null);
                    }}
                    className="mt-1.5 bg-background/40 border-border"
                  />
                  {fieldError?.field === "name" && <Tooltip msg={fieldError.msg} />}
                </div>
              </div>
              <div>
                <label className="text-base text-white font-mono">COMPANY</label>
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1.5 bg-background/40 border-border"
                />
              </div>
            </div>
            <div>
              <label className="text-base text-white font-mono">EMAIL</label>
              <div className="relative">
                <Input
                  ref={emailRef}
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setFieldError(null);
                  }}
                  className="mt-1.5 bg-background/40 border-border"
                />
                {fieldError?.field === "email" && <Tooltip msg={fieldError.msg} />}
              </div>
            </div>
            <div>
              <label className="text-base font-mono text-white">MESSAGE</label>
              <div className="relative">
                <Textarea
                  ref={messageRef}
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setFieldError(null);
                  }}
                  className="mt-1.5 bg-background/40 border-border resize-none"
                />
                {fieldError?.field === "message" && <Tooltip msg={fieldError.msg} />}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Checkbox
                  ref={privacyRef}
                  id="privacy"
                  checked={privacy}
                  onCheckedChange={(v) => {
                    setPrivacy(v as boolean);
                    setFieldError(null);
                  }}
                />
                <label htmlFor="privacy" className="text-sm text-white">
                  I agree to the Privacy Policy
                </label>
              </div>
              {fieldError?.field === "privacy" && (
                <div className="relative">
                  <Tooltip msg={fieldError.msg} />
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading || sent}
              size="lg"
              className="w-full h-12 text-base font-semibold bg-[image:var(--gradient-cta)] text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/60 transition-transform hover:scale-[1.02]"
            >
              {sent ? "Message sent ✓" : loading ? "Sending..." : "send"}
            </Button>

            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3">
                <p className="text-red-400 text-sm font-mono">{error}</p>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
