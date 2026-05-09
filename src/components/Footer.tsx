import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-tight">
              PrePeak<span className="text-primary">.ai</span>
            </span>
          </div>

          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} PrePeak.ai — We act before the peak.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 border-t border-border/30 pt-6 text-xs text-muted-foreground">
          <a href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-foreground transition-colors">
            Terms of Use
          </a>
          <a href="/cookies" className="hover:text-foreground transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
