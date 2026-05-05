import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/prepeak-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">
            PrePeak<span className="text-primary">.ai</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} PrePeak.ai — We act before the peak.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
