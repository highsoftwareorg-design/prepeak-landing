/** Subtle SVG wave divider between sections. */
export function SectionDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="relative w-full overflow-hidden pointer-events-none -my-px h-12 md:h-16"
      aria-hidden
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="divider-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.82 0.21 142 / 0.0)" />
            <stop offset="50%" stopColor="oklch(0.82 0.21 142 / 0.35)" />
            <stop offset="100%" stopColor="oklch(0.82 0.21 142 / 0.0)" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
          fill="oklch(0.19 0.018 160 / 0.55)"
        />
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40"
          fill="none"
          stroke="url(#divider-grad)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
