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
      { title: "High Software — Empowering Business Through Digital Transformation" },
      { name: "description", content: "High Software builds high-performance web, mobile, and AI-powered solutions. From cluttered complexity to minimalist high-tech efficiency." },
      { property: "og:title", content: "High Software — Digital Transformation, Engineered" },
      { property: "og:description", content: "Enterprise-grade web, mobile, and Generative AI solutions. We turn technical frustration into seamless products." },
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
