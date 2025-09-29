"use client"

import type React from "react"

import { motion } from "framer-motion"
import FloatingIcons from "@/components/floating-icons"
import { LayoutGrid, Cog } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center px-6 py-24">
      {/* video background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/741.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Background motion video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      <FloatingIcons
        items={[
          { key: "i1", icon: <LayoutGrid size={22} />, x: "12%", y: "20%", delay: 0.2 },
          { key: "i2", icon: <Cog size={22} />, x: "82%", y: "70%", delay: 0.8 },
        ]}
      />

      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-balance text-5xl font-semibold md:text-7xl"
        >
          Digital experiences that feel alive.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground md:text-lg font-bold"
        >
          From code to creativity — we build digital experiences that connect, inspire, and last.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function FeatureLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3 text-left">
      <span className="shrink-0">{icon}</span>
      <p className="text-sm font-medium leading-6 md:text-base">{text}</p>
    </div>
  )
}
