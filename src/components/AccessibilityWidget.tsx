import { useEffect, useState, useCallback } from "react";
import {
  Accessibility,
  Minus,
  Plus,
  Contrast,
  Link2,
  Type,
  Pause,
  RotateCcw,
  X,
} from "lucide-react";

type A11ySettings = {
  fontScale: number;
  highContrast: boolean;
  highlightLinks: boolean;
  readableFont: boolean;
  reduceMotion: boolean;
  bigCursor: boolean;
};

const DEFAULTS: A11ySettings = {
  fontScale: 1,
  highContrast: false,
  highlightLinks: false,
  readableFont: false,
  reduceMotion: false,
  bigCursor: false,
};

const STORAGE_KEY = "prepeak-a11y";

function applySettings(s: A11ySettings) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(s.fontScale));
  root.classList.toggle("a11y-contrast", s.highContrast);
  root.classList.toggle("a11y-links", s.highlightLinks);
  root.classList.toggle("a11y-readable", s.readableFont);
  root.classList.toggle("a11y-no-motion", s.reduceMotion);
  root.classList.toggle("a11y-big-cursor", s.bigCursor);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as A11ySettings;
        setSettings(parsed);
        applySettings(parsed);
        return;
      }
    } catch {
      /* ignore malformed storage */
    }
    applySettings(DEFAULTS);
  }, []);

  const update = useCallback((patch: Partial<A11ySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      applySettings(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSettings(DEFAULTS);
    applySettings(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggles: Array<{
    key: keyof A11ySettings;
    label: string;
    icon: typeof Contrast;
  }> = [
    { key: "highContrast", label: "High contrast", icon: Contrast },
    { key: "highlightLinks", label: "Highlight links", icon: Link2 },
    { key: "readableFont", label: "Readable font", icon: Type },
    { key: "reduceMotion", label: "Stop animations", icon: Pause },
    { key: "bigCursor", label: "Large cursor", icon: Accessibility },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Accessibility options"
        className="fixed bottom-6 left-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full
                   bg-primary text-primary-foreground shadow-lg outline-none
                   transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring
                   focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Accessibility className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-24 left-6 z-[100] w-72 rounded-2xl border border-border bg-popover p-4
                     text-popover-foreground shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Accessibility</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mb-3 rounded-xl border border-border p-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Text size</p>
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                aria-label="Decrease text size"
                onClick={() =>
                  update({ fontScale: Math.max(0.9, +(settings.fontScale - 0.1).toFixed(2)) })
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border
                           transition-colors hover:bg-accent hover:text-accent-foreground
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Minus className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="text-sm font-medium tabular-nums" aria-live="polite">
                {Math.round(settings.fontScale * 100)}%
              </span>
              <button
                type="button"
                aria-label="Increase text size"
                onClick={() =>
                  update({ fontScale: Math.min(1.5, +(settings.fontScale + 0.1).toFixed(2)) })
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border
                           transition-colors hover:bg-accent hover:text-accent-foreground
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <ul className="space-y-1.5">
            {toggles.map(({ key, label, icon: Icon }) => {
              const active = Boolean(settings[key]);
              return (
                <li key={key}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => update({ [key]: !active } as Partial<A11ySettings>)}
                    className={[
                      "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:bg-accent hover:text-accent-foreground",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={reset}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border
                       px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset settings
          </button>
        </div>
      )}
    </>
  );
}
