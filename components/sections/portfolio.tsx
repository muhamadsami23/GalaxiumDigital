"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FloatingIcons from "@/components/floating-icons"
import { Grid3X3, Stars } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Neon Dashboard",
    img: "/neon-analytics-dashboard.jpg",
    github: "https://github.com/example/neon-dashboard",
  },
  {
    title: "E‑commerce Motion UI",
    img: "/animated-ecommerce-ui.jpg",
    github: "https://github.com/example/ecommerce-motion",
  },
  { title: "3D Product Teaser", img: "/3d-product-teaser.jpg", github: "https://github.com/example/3d-teaser" },
]

export default function Portfolio() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="work" className="relative px-6 py-24">
      <FloatingIcons
        items={[
          { key: "g", icon: <Grid3X3 size={22} />, x: "18%", y: "10%", delay: 0.3 },
          { key: "st2", icon: <Stars size={20} />, x: "78%", y: "80%", delay: 0.8 },
        ]}
      />
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Portfolio
        </span>

        <motion.h2
          className="mt-4 text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.figure
              key={p.title}
              className="group overflow-hidden rounded-xl border border-border bg-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="block w-full text-left"
                aria-expanded={open === i}
                aria-controls={`proj-${i}`}
              >
                <div className="relative aspect-[4/3]">
                  <Image src={p.img || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <figcaption className="p-4">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-muted-foreground">Framer Motion • React • Tailwind</p>
                </figcaption>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`proj-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-border p-4"
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent underline underline-offset-4"
                    >
                      View on GitHub
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
