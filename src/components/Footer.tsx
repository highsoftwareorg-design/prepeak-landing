import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import highSoftwareLogo from "@/assets/highsoftware.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <div className="flex items-center gap-2 justify-self-start">
            <span className="font-semibold tracking-tight">
              PrePeak<span className="text-primary">.ai</span>
            </span>
          </div>

          <a
            href="https://high-software.org"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-center opacity-70 hover:opacity-100 transition-opacity"
            aria-label="High Software"
          >
            <img src={highSoftwareLogo} alt="High Software" className="h-10 w-auto" />
          </a>

          <div className="flex flex-col md:items-end items-start gap-3 justify-self-start md:justify-self-end">
            <p className="text-xs text-muted-foreground font-mono">
              © {new Date().getFullYear()} PrePeak.ai — We act before the peak.
            </p>
            <a
              href="https://www.linkedin.com/company/121304542"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 border-t border-border/30 pt-6 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms of Use
          </Link>
          <Link to="/cookies" className="hover:text-foreground transition-colors">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
