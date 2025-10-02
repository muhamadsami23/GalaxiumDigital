import { FeatureGrid } from "@/components/sections/marketingfeature-grid"
import { FeatureRow } from "@/components/sections/feature-row"
import FooterSection from "@/components/sections/footer"

export default function MarketingPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="text-center md:text-left flex-1">
              <h1
                id="hero-title"
                className="mt-4 text-4xl font-bold leading-tight md:text-6xl"
              >
                Digital <span className="text-primary">Marketing</span> Solutions
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                Galaxium Digital helps businesses grow online with strategies
                tailored for results. From social media to ad campaigns and
                email outreach, we connect your brand to the right audience.
              </p>
            </div>
            {/* Right Image */}
            <div className="flex-1">
              <img
                src="/marketing.png" // 👈 Update with your marketing illustration
                alt="Marketing illustration"
                className="w-full max-w-lg md:max-w-xl mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>

        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-accent/30 blur-2xl"
        />
      </section>

      {/* Marketing badges */}
      <section className="mt-12 text-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              "Social Media Marketing",
              "Google Ads",
              "Meta Ads",
              "Email Marketing",
              "Cold Outreach",
              "SEO",
              "Analytics",
              "Campaign Strategy",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-5 py-1 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid section */}
      <section className="mt-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Alternating full-width feature sections */}
      <div
        id="features"
        className="mx-auto max-w-6xl px-4 py-16 space-y-24"
      >
        <FeatureRow
          eyebrow="Social Media Marketing"
          title="Grow Your Brand Online"
          description="We craft strategies for platforms like Instagram, TikTok, LinkedIn, and Facebook to increase visibility and engagement."
          imageAlt="Social media marketing illustration"
          imageQuery="social media marketing growth 3d"
        />

        <FeatureRow
          eyebrow="Google & Meta Ads"
          title="Reach the Right Audience"
          description="Our ad campaigns on Google and Meta (Facebook & Instagram) are optimized for conversions and ROI."
          imageAlt="Google Ads illustration"
          imageQuery="google meta ads campaign digital 3d"
          reverse
        />

        <FeatureRow
          eyebrow="Email Marketing"
          title="Direct Outreach That Works"
          description="From cold emails to automated campaigns, we create messages that build relationships and drive results."
          imageAlt="Email marketing illustration"
          imageQuery="email marketing cold outreach automation 3d"
        />

        <FeatureRow
          eyebrow="SEO & Content Strategy"
          title="Rank Higher, Gain Trust"
          description="We optimize websites and content to rank higher in search engines, improving long-term visibility and brand trust."
          imageAlt="SEO optimization illustration"
          imageQuery="seo content marketing website rank 3d"
          reverse
        />

        <FeatureRow
          eyebrow="Analytics & Optimization"
          title="Data-Driven Decisions"
          description="We track performance across campaigns and optimize strategies, ensuring your business achieves measurable growth."
          imageAlt="Analytics dashboard illustration"
          imageQuery="marketing analytics data dashboard 3d"
        />
      </div>

      {/* CTA */}
      <section
        id="cta"
        aria-labelledby="cta-title"
        className="mx-auto max-w-5xl px-4 py-24 text-center"
      >
        <h2
          id="cta-title"
          className="text-3xl font-bold md:text-4xl text-balance"
        >
          Ready to <span className="text-primary">Boost</span> Your Business?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Partner with Galaxium Digital to launch marketing campaigns that
          attract, convert, and retain customers across every platform.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
          >
            Start Your Campaign
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
