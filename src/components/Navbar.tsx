import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/prepeak-logo.png";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "How it Works", href: "#how" },
  { label: "Results", href: "#results" },
  { label: "Market", href: "#market" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="PrePeak" className="h-9 w-auto" />
          <span className="font-semibold tracking-tight text-foreground -ml-1">
            PrePeak<span className="text-primary">.ai</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </motion.header>
  );
}
