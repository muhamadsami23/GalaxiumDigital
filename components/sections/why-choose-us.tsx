"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have an idea, let's trasform
        </motion.h2>

        <div className="mt-8 grid gap-6">
          <p className="text-pretty text-muted-foreground">
            {/* dashed line lead-in */}
            <span className="inline-block border-t border-dashed border-border pt-4">
              Reliability & Security — Robust practices and safe-by-default engineering.
            </span>
          </p>
          <p className="text-pretty text-muted-foreground">
            <span className="inline-block border-t border-dashed border-border pt-4">
              Support & Maintenance — Long-term partnership with proactive care.
            </span>
          </p>
          <p className="text-pretty text-muted-foreground">
            <span className="inline-block border-t border-dashed border-border pt-4">
              Excellence — Quality, timelines, and delightful details.
            </span>
          </p>
          <p className="text-pretty text-muted-foreground">
            <span className="inline-block border-t border-dashed border-border pt-4">
              Efficiency — Lean processes for faster outcomes.
            </span>
          </p>
          <p className="text-pretty text-muted-foreground">
            <span className="inline-block border-t border-dashed border-border pt-4">
              Performance First — Ship fast and keep it fast.
            </span>
          </p>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Start your project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
