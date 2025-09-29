"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Code2, CheckCircle2, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Lightbulb size={20} />,
    title: "Discovery",
    desc: "We understand your goals, challenges, and opportunities.",
  },
  {
    icon: <Palette size={20} />,
    title: "Design",
    desc: "We craft intuitive, delightful experiences that engage users.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Development",
    desc: "We bring designs to life with clean, scalable code.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "QA",
    desc: "We rigorously test to ensure quality, stability, and performance.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Launch",
    desc: "We ship, monitor, and optimize for lasting impact.",
  },
]

export default function ServicesWorkflow() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Label */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Workflow
        </span>

        {/* Header */}
        <motion.h2
          className="text-3xl font-semibold md:text-4xl mt-4"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Workflow
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          From idea to impact — a structured yet flexible process to deliver products that work, scale, and inspire.
        </motion.p>

        {/* Steps with Arrows */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:items-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {steps
            .map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Step Card */}
                <div className="rounded-xl border border-border bg-card/50 p-5 text-left backdrop-blur w-[220px] sm:w-[200px]">
                  <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>

                {/* Down Arrow (Mobile Only) */}
                {i < steps.length - 1 && (
                  <div className="mt-6 sm:hidden">
                    <ArrowDown />
                  </div>
                )}
              </div>
            ))
            .flatMap((el, i) =>
              i < steps.length - 1
                ? [
                    el,
                    <div key={`arrow-${i}`} className="hidden sm:flex items-center justify-center">
                      <ArrowRight />
                    </div>,
                  ]
                : [el]
            )}
        </motion.div>
      </div>
    </section>
  )
}

// Arrow components
function ArrowRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-muted-foreground"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-muted-foreground"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="5 12 12 19 19 12" />
    </svg>
  )
}
