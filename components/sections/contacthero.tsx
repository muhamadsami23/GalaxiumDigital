export default function ContactHero() {
  return (
    <section aria-labelledby="about-hero-title" className="relative overflow-hidden rounded-2xl border border-border">
      {/* Background gradient using tokens (no raw colors) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 id="about-hero-title" className="text-balance text-3xl font-semibold text-foreground md:text-5xl">
          Your Next Big Move Starts Here.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
         We’re just a message away — share your vision, and let’s explore how we can bring it to life together.
        </p>
      </div>
    </section>
  )
}
