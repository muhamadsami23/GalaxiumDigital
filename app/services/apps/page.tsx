import { FeatureGrid } from "@/components/sections/appfeature-grid"
import { FeatureRow } from "@/components/sections/feature-row"
import FooterSection from "@/components/sections/footer"

export default function AppDevelopmentPage() {
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
                Mobile <span className="text-primary">App Development</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0">
                Galaxium Digital builds secure, scalable, and engaging mobile
                applications. From cross-platform solutions to native apps,
                we ensure performance, usability, and growth for your business.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src="/mobdev.png" // 👈 Update with your mobile app illustration path
                alt="App development illustration"
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
              "React Native", "Flutter", "Cross Platform", "Dart", "Firebase", "App Store", "Play Store"
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
        className="mx-auto max-w-6xl px-4 py-16 space-y-36"
      >
        <FeatureRow
          eyebrow="Cross-Platform Development"
          title="One codebase, multiple platforms"
          description="Save time and cost with apps that work seamlessly on both iOS and Android using modern frameworks like Flutter and React Native."
          imageAlt="Cross platform app illustration"
          imageQuery="cross platform mobile development 3d"
          imageUrl="/crossplat.png"
        />
        <FeatureRow
          eyebrow="Native App Experience"
          title="High performance and responsiveness"
          description="We deliver apps that fully leverage the power of native platforms, ensuring top-tier performance and smooth user experiences."
          imageAlt="Native app illustration"
          imageQuery="mobile app native ios android performance 3d"
          imageUrl="/nativeapp.jpg"
          
        />
        <FeatureRow
          eyebrow="UI/UX Focus"
          title="Design that delights users"
          description="Our apps combine intuitive navigation and modern design trends, providing engaging and user-friendly mobile experiences."
          imageAlt="Mobile UI design illustration"
          imageQuery="mobile ui ux design app screens 3d"
          imageUrl="/ui.jpg"
        />
        <FeatureRow
          eyebrow="Cloud & Backend Integration"
          title="Seamless data and service connections"
          description="We connect apps with secure cloud backends, APIs, and databases, ensuring reliability and scalability for businesses of all sizes."
          imageAlt="App backend integration illustration"
          imageQuery="mobile app backend cloud api 3d"
          imageUrl="/cla.png"
          
        />
        <FeatureRow
          eyebrow="App Deployment & Support"
          title="From launch to long-term growth"
          description="We guide you through app store submissions, updates, and provide ongoing support to ensure your app grows with your audience."
          imageAlt="App store launch illustration"
          imageQuery="app deployment support app store play store 3d"
          imageUrl="/all.png"
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
          Ready to <span className="text-primary">Launch</span> Your App?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Partner with Galaxium Digital to build high-quality mobile
          applications. From design to deployment, we ensure apps that
          deliver results.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-md"
          >
            Let’s Build Your App
          </a>
        </div>
      </section>

      <FooterSection/>
    </main>
  )
}