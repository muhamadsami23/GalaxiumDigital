"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import FloatingIcons from "@/components/floating-icons"

export default function WebDevelopment() {
  const features = [
    "Custom Web Design",
    "Responsive Layouts",
    "Security Implementation",
    "Maintenance & Support",
  ]

  const columns = [
    {
      title: "Custom Web Solutions",
      desc: "We create tailor-made websites that fit your business goals and deliver unique experiences for your users.",
      icon: "/animated-laptop1.png", // replace with your animated laptop image or gif
    },
    {
      title: "Responsive Design",
      desc: "Our designs adapt to every device, ensuring a seamless experience on mobile, tablet, and desktop screens.",
      icon: "/animated-laptop2.png",
    },
    {
      title: "High Performance & SEO",
      desc: "Optimized for speed and search engines, your website will rank higher and perform faster for all users.",
      icon: "/animated-laptop3.png",
    },
  ]

  return (
    <section className="relative px-6 py-24">
      <FloatingIcons
        items={[
          { key: "f1", icon: <CheckCircle size={22} />, x: "12%", y: "12%", delay: 0.5 },
        ]}
      />

      {/* Hero Section */}
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Website Development
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          We build high-performance, secure, and responsive websites that drive business growth.
        </p>
      </div>

      {/* Features with ticks */}
      <div className="mt-12 max-w-3xl mx-auto grid gap-4">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-3 text-foreground">
            <CheckCircle className="text-accent w-6 h-6 flex-shrink-0" />
            <span className="text-lg font-medium">{f}</span>
          </div>
        ))}
      </div>

      {/* Columns with icon and description */}
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {columns.map(({ title, desc, icon }, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center md:text-left md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="relative h-40 w-40 mb-4">
              <Image src={icon} alt={title} fill className="object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <motion.button
          className="rounded-full bg-accent px-8 py-3 text-lg font-semibold text-background hover:bg-accent/80 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Build Your Website
        </motion.button>
      </div>
    </section>
  )
}
