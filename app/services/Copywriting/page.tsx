import { FeatureGrid } from "@/components/sections/copyfeature-grid"
import { FeatureRow } from "@/components/sections/feature-row"
import FooterSection from "@/components/sections/footer"

export default function CopywritingPage() {
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
                Professional <span className="text-primary">Copywriting</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                Galaxium Digital delivers words that inspire, connect, and convert. 
                From blog articles and website copy to resumes, proposals, and social media — 
                our writing ensures clarity, engagement, and results.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src="/copywriting.png" // 👈 Replace with your illustration path
                alt="Copywriting illustration"
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

      {/* Tech badges section */}
      <section className="mt-12 text-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              "Articles", "Web Copy", "Social Media Posts", "SEO Blogs", "Resumes", "Cover Letters", "Proposals"
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

      {/* Alternating feature rows */}
      <div
        id="features"
        className="mx-auto max-w-6xl px-4 py-16 space-y-24"
      >
        <FeatureRow
          eyebrow="Professional Writing"
          title="Polished words that build authority"
          description="We craft business documents, reports, and professional communication with clarity and precision, helping you leave a lasting impression."
          imageAlt="Professional writing illustration"
          imageQuery="professional writing desk pen paper 3d"
        />
        <FeatureRow
          eyebrow="Content Writing"
          title="Engaging articles & blogs"
          description="Our SEO-friendly articles, blogs, and website content boost your brand’s visibility while keeping readers engaged."
          imageAlt="Content writing illustration"
          imageQuery="content writing blog article laptop 3d"
          reverse
        />
        <FeatureRow
          eyebrow="Marketing Copy"
          title="Words that sell & persuade"
          description="From social media posts to ad campaigns and product descriptions, we create compelling copy that drives conversions."
          imageAlt="Marketing copy illustration"
          imageQuery="marketing copy megaphone social media 3d"
        />
        <FeatureRow
          eyebrow="Resumes & Proposals"
          title="Stand out with every document"
          description="We design impactful resumes, cover letters, and proposals tailored to your goals and industry, highlighting your strengths effectively."
          imageAlt="Resume writing illustration"
          imageQuery="resume proposal cover letter 3d"
          reverse
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
          Ready to <span className="text-primary">Elevate</span> Your Content?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Partner with Galaxium Digital to make your words work harder. 
          From web copy to professional writing, we create content that engages, inspires, and converts.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
          >
            Let’s Write Together
          </a>
        </div>
      </section>

      <FooterSection/>
    </main>
  )
}
