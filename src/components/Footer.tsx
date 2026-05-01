import { Activity, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30">
            <Activity className="h-4 w-4 text-primary" strokeWidth={2.5} />
          </div>
          <span className="font-semibold tracking-tight">
            High <span className="text-muted-foreground font-normal">Software</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} High Software. Crafted with precision.
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-4 w-4" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
