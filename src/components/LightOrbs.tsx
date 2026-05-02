import { motion } from "framer-motion";

/** Animated grid background with floating light orbs */
export function LightOrbs({ density = "normal" }: { density?: "subtle" | "normal" | "dense" }) {
  const count = density === "subtle" ? 3 : density === "dense" ? 7 : 5;
  const orbs = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid-mesh opacity-60" />
      {orbs.map((i) => {
        const size = 220 + ((i * 73) % 260);
        const left = (i * 37) % 90;
        const top = (i * 53) % 80;
        const dur = 14 + ((i * 7) % 12);
        const delay = (i * 1.7) % 6;
        const hue = i % 2 === 0 ? "var(--primary)" : "var(--blue-glow)";
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: `radial-gradient(circle, color-mix(in oklab, ${hue} 28%, transparent), transparent 70%)`,
            }}
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -50, 30, 0],
              opacity: [0.4, 0.8, 0.5, 0.4],
            }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
