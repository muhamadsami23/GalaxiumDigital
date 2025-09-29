export default function AboutMetrics() {
  const metrics = [
    { label: "Years", value: "10+" },
    { label: "Projects", value: "200+" },
    { label: "Satisfaction", value: "98%" },
    { label: "Clients", value: "100+" },
  ]

  return (
    <section aria-labelledby="about-metrics-title" className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
              Track record
            </span>
            <h2
              id="about-metrics-title"
              className="mt-4 text-balance text-2xl font-semibold text-foreground md:text-3xl"
            >
              Driving digital evolution
            </h2>
            <p className="mt-3 max-w-prose text-pretty text-base leading-relaxed text-muted-foreground">
              We measure success by shipped value and sustained impact, not just launch day. These numbers reflect our
              commitment to outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="text-2xl font-semibold text-foreground">{m.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
