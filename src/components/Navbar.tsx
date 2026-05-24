import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/navbar-logo.png";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "The Solution", href: "#solution" },
  { label: "How it Works", href: "#how" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent bg-transparent backdrop-blur-md",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.img
            src={logo}
            alt="PrePeak"
            loading="eager"
            className="h-14 w-auto"
            whileHover={{ rotate: -4, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          />
          <span className="font-semibold tracking-tight text-foreground -ml-1">{"\n"}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-base font-semibold text-white hover:text-foreground transition-colors
                         after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                         after:bg-gradient-to-r after:from-primary after:to-transparent
                         after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground
                     hover:from-primary hover:to-primary shadow-[0_4px_16px_-4px] shadow-primary/50
                     transition-transform hover:scale-105 text-lg"
        >
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </motion.header>
  );
}
