import { FeatureGrid } from "@/components/sections/designfeature-grid"
import { FeatureRow } from "@/components/sections/feature-row"
import FooterSection from "@/components/sections/footer"

export default function DesignPage() {
  return (
    <main className="min-h-dvh text-foreground">
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
                Creative <span className="text-primary">Design Solutions</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                Galaxium Digital crafts designs that inspire. From graphic
                design, posters, and logos to UI/UX for web and apps, we bring
                ideas to life with creativity and precision.
              </p>
            </div>
            {/* Right Image */}
            <div className="flex-1">
              <img
                src="/design.png" // 👈 Update with your design illustration
                alt="Design illustration"
                className="w-full max-w-lg md:max-w-xl mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech badges section */}
      <section className="mt-1 text-center px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              "Graphic Design",
              "Logo Design",
              "UI/UX",
              "Posters",
              "Branding",
              "Illustrations",
              "Social Media Graphics",
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
          eyebrow="Graphic Design"
          title="Visuals that Speak"
          description="From business cards to social media graphics, we design visuals that grab attention and tell your story effectively."
          imageAlt="Graphic design illustration"
          imageUrl="/3675525.jpg"
        />

        <FeatureRow
          eyebrow="Logo & Branding"
          title="Build Your Brand Identity"
          description="We craft memorable logos and branding guidelines that make your business stand out and stay consistent everywhere."
          imageAlt="Logo design illustration"
          imageUrl="/SL-031720-29020-09.jpg"
       
        />

        <FeatureRow
          eyebrow="UI/UX Design"
          title="Seamless User Experiences"
          description="Our UI/UX design process ensures intuitive navigation, attractive layouts, and engaging interfaces for apps and websites."
          imageAlt="UI UX design illustration"
          imageUrl="/5778985.jpg"
        />

        <FeatureRow
          eyebrow="Posters & Print"
          title="Creative Posters & Visuals"
          description="We design striking posters, brochures, and promotional material that leave a strong impression offline and online."
          imageAlt="Poster design illustration"
          imageUrl="/4964200.jpg"
          
        />

        <FeatureRow
          eyebrow="Social Media & Marketing"
          title="Content That Converts"
          description="From social media visuals to digital ads, we create content that attracts, engages, and helps your brand grow."
          imageAlt="Social media design illustration"imageUrl="/5476534.jpg"
        
          
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
          Let’s <span className="text-primary">Design</span> Your Vision
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Partner with Galaxium Digital to craft designs that inspire,
          communicate, and leave an impact across every medium.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
          >
            Start Your Design Project
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  )
}
