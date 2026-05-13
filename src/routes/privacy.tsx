import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PrePeak.ai" },
      {
        name: "description",
        content:
          "How PrePeak collects, uses, and protects information you share through our website.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <p>
            PrePeak (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy
            and is committed to protecting the information you share with us through our website.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-3">We may collect:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Company information</li>
              <li>Information submitted through contact forms</li>
              <li>Basic website usage data through analytics tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">How We Use Information</h2>
            <p className="mt-3">We use collected information to:</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Respond to inquiries</li>
              <li>Improve our website and services</li>
              <li>Communicate with potential partners, customers, or investors</li>
              <li>Analyze website traffic and performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Cookies &amp; Analytics</h2>
            <p className="mt-3">
              Our website may use cookies and third-party analytics services such as Google
              Analytics to better understand website usage and improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Data Protection</h2>
            <p className="mt-3">
              We take reasonable measures to protect the information submitted through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Third-Party Services</h2>
            <p className="mt-3">
              Our website may contain links to third-party services or platforms. We are not
              responsible for the privacy practices of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              If you have any questions regarding this Privacy Policy, please contact us at:{" "}
              <a href="mailto:musab@prepeak.ai" className="text-primary hover:underline">
                musab@prepeak.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
