"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutApproach() {
  return (
    <section
      aria-labelledby="approach-title"
      className="mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
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
            Customer-centric, outcome-first approach
          </h2>
          <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
            We work in small, focused increments, validating assumptions early
            and often. Clear roadmaps, demos, and open communication keep
            stakeholders aligned and projects predictable.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
            <li>• Transparent planning and milestones</li>
            <li>• Research-driven UX and accessibility</li>
            <li>• Engineering quality and performance budgets</li>
          </ul>
        </div>

        {/* Image Card */}
        <aside className="rounded-xl border border-border bg-card overflow shadow-md">
          <div className="relative h-56 w-full md:h-78">
            <Image
              src="/hehe.jpg" // replace with your image path
              alt="Collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </aside>
      </div>
    </section>
  )
}
