import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Services } from "@/components/Services";
import { TechSpotlight } from "@/components/TechSpotlight";
import { Competitors } from "@/components/Competitors";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrePeak.ai — Predict Spikes. Protect Uptime." },
      { name: "description", content: "PrePeak's embedded AI control layer predicts GPU power spikes 1000ms before they occur, preventing downtime and unlocking 30% of stranded power capacity in AI data centers." },
      { property: "og:title", content: "PrePeak.ai — We act before the peak" },
      { property: "og:description", content: "AI-powered power stability for AI data centers. From reactive to predictive power management." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider flip />
        <ProcessTimeline />
        <SectionDivider />
        <TechSpotlight />
        <SectionDivider flip />
        <Competitors />
        <SectionDivider />
        <Team />
        <SectionDivider flip />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}
