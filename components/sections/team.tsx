"use client"

import { motion } from "framer-motion"
import FloatingIcons from "@/components/floating-icons"
import { UserCircle2 } from "lucide-react"
import Image from "next/image"

const team = [
  { name: "Alex Carter", role: "Principal Engineer" },
  { name: "Maya Lin", role: "Design & Motion Lead" },
  { name: "Rafael Gomez", role: "Full‑stack Developer" },
]

export default function Team() {
  return (
    <section id="team" className="relative px-6 py-24">
      <FloatingIcons items={[{ key: "u", icon: <UserCircle2 size={24} />, x: "85%", y: "18%", delay: 0.7 }]} />
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Team
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              className="rounded-xl border border-border bg-card/50 p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-accent/40">
                <Image src="/placeholder-user.jpg" alt={`${m.name} avatar`} fill className="object-cover" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-medium">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
