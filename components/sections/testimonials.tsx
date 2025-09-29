"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "They delivered fast, polished work that moved our metrics.",
    name: "A. Patel",
    org: "Orbit Labs",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "Motion, performance, and UX—dialed. Loved collaborating.",
    name: "J. Rivera",
    org: "Northstar",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "Professional team that truly cares about outcomes.",
    name: "K. Tan",
    org: "Mercury Co.",
    img: "https://i.pravatar.cc/150?img=3",
  },
]

export default function Testimonials() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* Label */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Testimonials
        </span>

        <h2 className="text-3xl font-semibold md:text-4xl mb-12 mt-4">
          What they’re saying about us
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-border bg-card/60 p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              {/* Avatar */}
              <img
                src={t.img}
                alt={t.name}
                className="h-20 w-20 rounded-full object-cover border-2 border-border mb-4"
              />

              {/* Quote */}
              <p className="text-center text-lg leading-relaxed text-pretty mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Name & Org */}
              <footer className="text-center">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="block text-sm text-muted-foreground">{t.org}</span>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
