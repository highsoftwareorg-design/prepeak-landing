import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Services } from "@/components/Services";
import { TechSpotlight } from "@/components/TechSpotlight";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrePeak.ai — AI-Powered Power Stability for AI Data Centers" },
      { name: "description", content: "PrePeak predicts GPU power spikes before they occur, preventing downtime and unlocking up to 30% of stranded power capacity in AI data centers." },
      { property: "og:title", content: "PrePeak.ai — We act before the peak" },
      { property: "og:description", content: "An embedded AI control layer that predicts and prevents power spikes in AI data centers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ProcessTimeline />
        <Services />
        <TechSpotlight />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
