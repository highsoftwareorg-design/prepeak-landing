import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import musabImg from "@/assets/musab.jpg";
import muhammadImg from "@/assets/muhammad.jpg";

const team = [
  {
    name: "Musab Mahamid",
    role: "Founder & CEO",
    bio: "Senior Electrical Engineer with extensive experience designing large-scale, mission-critical electrical systems.",
    image: musabImg,
  },
  {
    name: "Muhammad Wattad",
    role: "Co-Founder & CTO",
    bio: "Ph.D in AI & Computer Vision from the Technion. Previously at Intel, eBay, and Mobileye.",
    image: muhammadImg,
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">The Team</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Built by engineers who've shipped{" "}
            <span className="text-gradient-accent">mission-critical systems.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            All technology, code, and IP fully owned by PrePeak — patent covers a predictive AI
            control layer for synchronized GPU workloads.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass lift rounded-2xl p-8 hover:border-primary/50"
            >
              <div className="flex items-start gap-5">
                <div className="relative h-20 w-20 shrink-0 rounded-2xl ring-1 ring-primary/40 bg-gradient-to-br from-primary/30 to-blue-glow/20 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute -inset-1 rounded-2xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    aria-hidden
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{m.name}</h3>
                  <p className="text-sm text-primary font-mono">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 inline-block"
                    >
                      <Linkedin className="h-4 w-4" />
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
