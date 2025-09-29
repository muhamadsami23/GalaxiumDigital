"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

/* Reusable floating icons with gentle loop + hover bounce */
export default function FloatingIcons({
  items,
}: {
  items: Array<{ key: string; icon: ReactNode; x: string; y: string; delay?: number }>
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {items.map((it) => (
        <motion.div
          key={it.key}
          className="absolute text-accent/60"
          style={{ left: it.x, top: it.y }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: it.delay ?? 0 }}
          whileHover={{ scale: 1.05 }}
        >
          {it.icon}
        </motion.div>
      ))}
    </div>
  )
}
