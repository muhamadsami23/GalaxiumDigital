import { FeatureGrid } from "@/components/sections/automation-feature-grid"
import { FeatureRow } from "@/components/sections/feature-row"
import FooterSection from "@/components/sections/footer"

export default function AutomationPage() {
  return (
    <main className="relative z-10 min-h-dvh text-foreground">

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
                Workflow <span className="text-primary">Automation</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                Automate repetitive tasks, integrate tools, and optimize your business 
                processes with Galaxium Digital. From n8n and Zapier to custom 
                automation pipelines, we help you save time and scale efficiently.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative z-10">
              <img
                src="/hand-drawn-flat-design-rpa-illustration.png"
                alt="Workflow automation illustration"
                className="w-full max-w-lg md:max-w-xl mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>

        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8%] top-20 h-56 w-56 rounded-full bg-accent/30 blur-2xl -z-10"
        />
      </section>

      {/* Tech badges section */}
      <section className="mt-12 text-center px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              "n8n", "Zapier", "Integromat", "Make", "APIs",
              "RPA", "Slack Bots", "Airtable", "Google Sheets", "Automation Pipelines"
            ].map((t) => (
              <span
                key={t}
                className="rounded-full px-5 py-1 text-xs font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid section */}
      <section className="mt-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FeatureGrid />
        </div>
      </section>

      {/* Alternating full-width feature sections */}
      <div
        id="features"
        className="mx-auto max-w-6xl px-4 py-16 space-y-24 relative z-10"
      >
        <FeatureRow
          eyebrow="Custom Workflows"
          title="Automate your unique processes"
          description="From lead management to reporting, we design workflows that fit your exact needs, helping your team work smarter, not harder. Our automations adapt to your business logic and scale as your operations grow. We focus on reducing human error and saving valuable time.s"
          imageAlt="Workflow automation illustration"
          imageUrl="/qwe.png"
        />
        <FeatureRow
          eyebrow="Third-Party Integrations"
          title="Seamlessly connect your tools"
          description="We integrate platforms like Slack, Airtable, Notion, and CRMs with automation tools like n8n or Zapier for smooth workflows. This ensures real-time data sync across your systems and eliminates the hassle of manual updates. Your entire tech stack works as one."
          imageAlt="Integration illustration"
          imageUrl="/20944138.jpg"
          />
        <FeatureRow
          eyebrow="RPA & Bots"
          title="Automate repetitive tasks"
          description="Eliminate manual data entry and repetitive operations with Robotic Process Automation and custom bots. Our bots handle complex, rule-based tasks quickly and accurately, freeing your team to focus on high-impact work. Efficiency without compromise."
          imageAlt="RPA bots illustration"
          imageUrl="/117444640_600.jpg"
        />
        <FeatureRow
          eyebrow="API Automation"
          title="Powerful and scalable automations"
          description="Build API-driven automations that connect multiple apps, fetch data, and trigger actions seamlessly. We design secure and maintainable integrations that enhance productivity and reduce latency. Perfect for data-heavy or fast-growing environments."
          imageAlt="API automation illustration"
          imageUrl="/7100345.jpg"
          
        />
        <FeatureRow
          eyebrow="Monitoring & Support"
          title="Stay optimized and supported"
          description="We continuously monitor automations, fix errors, and provide reliable support to ensure your workflows run smoothly. Regular audits keep your systems stable and up to date. You focus on strategy while we handle the technical reliability."
          imageAlt="Monitoring illustration"
          imageUrl="/representation-user-experience-interface-design.jpg"
        />
      </div>

      {/* CTA */}
      <section
        id="cta"
        aria-labelledby="cta-title"
        className="mx-auto max-w-5xl px-4 py-24 text-center relative z-10"
      >
        <h2
          id="cta-title"
          className="text-3xl font-bold md:text-4xl text-balance"
        >
          Ready to <span className="text-primary">Automate</span> Your Workflow?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Partner with Galaxium Digital to simplify processes and scale faster.
          From integrations to custom automations, we deliver efficiency that drives growth.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
          >
            Let’s Automate Together
          </a>
        </div>
      </section>

      <FooterSection/>
    </main>
  )
}
