import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — PrePeak.ai" },
      {
        name: "description",
        content: "How PrePeak uses cookies and similar technologies on our website.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">Cookie Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <p>
            This website uses cookies and similar technologies to improve user experience and
            analyze website traffic.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">What Are Cookies?</h2>
            <p className="mt-3">
              Cookies are small text files stored on your device when visiting a website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">How We Use Cookies</h2>
            <p className="mt-3">We may use cookies for:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Website functionality</li>
              <li>Analytics and performance monitoring</li>
              <li>Understanding visitor behavior</li>
              <li>Improving website experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Cookies</h2>
            <p className="mt-3">
              Some third-party services, such as Google Analytics, may place cookies on your
              device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Managing Cookies</h2>
            <p className="mt-3">
              Most web browsers allow you to control or disable cookies through browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              If you have any questions about our Cookie Policy, please contact:{" "}
              <a href="mailto:info@prepeak.ai" className="text-primary hover:underline">
                info@prepeak.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
