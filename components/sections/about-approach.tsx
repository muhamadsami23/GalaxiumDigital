"use client"

import { motion } from "framer-motion"

export default function AboutApproach() {
  return (
    <section aria-labelledby="approach-title" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Text Column */}
        <div>
          <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
            Partnership
          </span>
          <h2
            id="approach-title"
            className="mt-4 text-balance text-2xl font-semibold text-foreground md:text-3xl"
          >
            Customer‑centric, outcome‑first approach
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
            We work in small, focused increments, validating assumptions early and often. Clear roadmaps, demos, and
            open communication keep stakeholders aligned and projects predictable.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
            <li>• Transparent planning and milestones</li>
            <li>• Research-driven UX and accessibility</li>
            <li>• Engineering quality and performance budgets</li>
          </ul>
        </div>

        {/* Quote Card */}
        <aside className="rounded-xl border border-border bg-card p-6">
          <p className="text-pretty text-sm leading-relaxed text-foreground">
            “They approached our challenges with empathy and technical rigor— the result was a product that delighted
            our users and simplified our operations.”
          </p>
          <div className="mt-4 text-xs text-muted-foreground">VP of Product, Fintech Client</div>
        </aside>
      </div>
    </section>
  )
}
