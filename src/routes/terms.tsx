import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — PrePeak.ai" },
      {
        name: "description",
        content: "The terms governing your use of the PrePeak website.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="text-sm text-primary hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-2 text-sm text-muted-foreground font-mono">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <p>By accessing or using this website, you agree to these Terms of Use.</p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
            <p className="mt-3">
              All content on this website, including text, graphics, branding, and technology
              descriptions, is the property of PrePeak unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Website Use</h2>
            <p className="mt-3">
              You agree not to misuse the website or attempt to interfere with its operation or
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">No Warranty</h2>
            <p className="mt-3">
              The information provided on this website is for informational purposes only. We make
              no warranties regarding the accuracy or completeness of the content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
            <p className="mt-3">
              PrePeak shall not be liable for any direct, indirect, or consequential damages
              resulting from the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">External Links</h2>
            <p className="mt-3">
              This website may contain links to third-party websites. We are not responsible for
              external content or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Changes</h2>
            <p className="mt-3">
              We may update these Terms of Use from time to time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              For any questions regarding these Terms, please contact:{" "}
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
