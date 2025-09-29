// "use client"

// import { motion } from "framer-motion"
// import { Code2, Smartphone, Palette, BarChart3, PenTool, Cog } from "lucide-react"
// import FloatingIcons from "@/components/floating-icons"
// import Link from "next/link"

// const services = [
//   {
//     title: "Websites that work harder than you do.",
//     desc: "High‑performance, SEO‑strong sites.",
//     Icon: Code2,
//     slug: "websites",
//   },
//   {
//     title: "Apps that grow with your business.",
//     desc: "Cross‑platform apps that scale.",
//     Icon: Smartphone,
//     slug: "apps",
//   },
//   {
//     title: "Designs that make brands unforgettable.",
//     desc: "Brand systems and UI with motion.",
//     Icon: Palette,
//     slug: "design",
//   },
//   {
//     title: "Marketing that makes noise — and results.",
//     desc: "Acquisition, content, and funnels.",
//     Icon: BarChart3,
//     slug: "marketing",
//   },
//   { title: "Words that turn browsers into buyers.", desc: "Copy that converts.", Icon: PenTool, slug: "copywriting" },
//   {
//     title: "Automation that saves you hours, not just clicks.",
//     desc: "Workflows, APIs, data pipes.",
//     Icon: Cog,
//     slug: "automation",
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="relative px-6 py-24">
//       <FloatingIcons
//         items={[
//           { key: "c1", icon: <Cog size={22} />, x: "12%", y: "12%", delay: 0.5 },
//           { key: "c2", icon: <Code2 size={22} />, x: "82%", y: "72%", delay: 1.0 },
//         ]}
//       />
//       <div className="mx-auto max-w-6xl">
//         <motion.h2
//           className="text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           What we do best:
//         </motion.h2>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {services.map(({ title, desc, Icon, slug }, i) => (
//             <motion.div
//               key={title}
//               className="group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:shadow-[0_0_40px_-10px_var(--color-accent)]"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//             >
//               <Link href={`/services/${slug}`} className="block focus:outline-none">
//                 {/* decorative mini-image/icon background */}
//                 <div className="absolute -right-6 -top-6 opacity-10">
//                   <Icon size={88} />
//                 </div>
//                 <div className="p-6">
//                   <div className="mb-4 inline-flex rounded-full bg-accent/10 p-2 text-accent">
//                     <Icon />
//                   </div>
//                   <h3 className="text-base font-semibold">{title}</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
//                   <span className="mt-4 inline-flex items-center text-sm text-accent">Explore more →</span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { motion } from "framer-motion"
// import { Code2, Smartphone, Palette, BarChart3, PenTool, Cog } from "lucide-react"
// import FloatingIcons from "@/components/floating-icons"
// import Link from "next/link"
// import clsx from "clsx"

// const services = [
//   {
//     title: "Websites that work harder than you do.",
//     desc: "High‑performance, SEO‑strong sites.",
//     Icon: Code2,
//     slug: "websites",
//     image: "/website.png", // Add your real images here
//   },
//   {
//     title: "Apps that grow with your business.",
//     desc: "Cross‑platform apps that scale.",
//     Icon: Smartphone,
//     slug: "apps",
//     image: "/images/service-apps.jpg",
//   },
//   {
//     title: "Designs that make brands unforgettable.",
//     desc: "Brand systems and UI with motion.",
//     Icon: Palette,
//     slug: "design",
//     image: "/images/service-design.jpg",
//   },
//   {
//     title: "Marketing that makes noise — and results.",
//     desc: "Acquisition, content, and funnels.",
//     Icon: BarChart3,
//     slug: "marketing",
//     image: "/images/service-marketing.jpg",
//   },
//   {
//     title: "Words that turn browsers into buyers.",
//     desc: "Copy that converts.",
//     Icon: PenTool,
//     slug: "copywriting",
//     image: "/images/service-copy.jpg",
//   },
//   {
//     title: "Automation that saves you hours, not just clicks.",
//     desc: "Workflows, APIs, data pipes.",
//     Icon: Cog,
//     slug: "automation",
//     image: "/images/service-automation.jpg",
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="relative px-6 py-24">
//       <FloatingIcons
//         items={[
//           { key: "c1", icon: <Cog size={22} />, x: "12%", y: "12%", delay: 0.5 },
//           { key: "c2", icon: <Code2 size={22} />, x: "82%", y: "72%", delay: 1.0 },
//         ]}
//       />
//       <div className="mx-auto max-w-6xl">
//         <motion.h2
//           className="text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           What we do best:
//         </motion.h2>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {services.map(({ title, desc, Icon, slug, image }, i) => (
//             <motion.div
//               key={title}
//               className={clsx(
//                 "group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:shadow-[0_0_40px_-10px_var(--color-accent)]",
//                 "bg-cover bg-center"
//               )}
//               style={{ backgroundImage: `url(${image})` }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.05 }}
//             >
//               <Link href={`/services/${slug}`} className="block focus:outline-none">
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition" />

//                 {/* Content aligned to bottom */}
//                 <div className="relative z-10 flex h-full flex-col justify-end p-6">
//                   <div className="mb-4 inline-flex rounded-full bg-accent/10 p-2 text-accent">
//                     <Icon />
//                   </div>
//                   <h3 className="text-base font-semibold text-white">{title}</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
//                   <span className="mt-4 inline-flex items-center text-sm text-accent">Explore more →</span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Palette, BarChart3, PenTool, Cog } from "lucide-react"
import FloatingIcons from "@/components/floating-icons"
import Link from "next/link"
import clsx from "clsx"

const services = [
  {
    title: "Websites that work harder than you do.",
    desc: "High-performance, SEO-strong sites.",
    Icon: Code2,
    slug: "websites",
    image: "/website.png",
  },
  {
    title: "Apps that grow with your business.",
    desc: "Cross-platform apps that scale.",
    Icon: Smartphone,
    slug: "apps",
    image: "/appdev.png",
  },
  {
    title: "Designs that make brands unforgettable.",
    desc: "Brand systems and UI with motion.",
    Icon: Palette,
    slug: "design",
    image: "/gfx.png",
  },
  {
    title: "Marketing that makes noise — and results.",
    desc: "Acquisition, content, and funnels.",
    Icon: BarChart3,
    slug: "marketing",
    image: "/digital.png",
  },
  {
    title: "Words that turn browsers into buyers.",
    desc: "Copy that converts.",
    Icon: PenTool,
    slug: "Copywriting",
    image: "/copy.png",
  },
  {
    title: "Automation that saves you hours, not just clicks.",
    desc: "Workflows, APIs, data pipes.",
    Icon: Cog,
    slug: "automation",
    image: "/automation.png",
  },
]
export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <FloatingIcons
        items={[
          { key: "c1", icon: <Cog size={22} />, x: "12%", y: "12%", delay: 0.5 },
          { key: "c2", icon: <Code2 size={22} />, x: "82%", y: "72%", delay: 1.0 },
        ]}
      />
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Services
        </span>

        {/* Heading */}
        <motion.h2
          className="mt-4 text-3xl font-bold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What we do best:
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ title, desc, Icon, slug, image }, i) => (
            <motion.div
              key={title}
              className={clsx(
                "group relative overflow-hidden rounded-xl border border-border bg-card/50 transition-all hover:shadow-[0_0_40px_-10px_var(--color-accent)]",
                "bg-cover bg-center"
              )}
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/services/${slug}`} className="block focus:outline-none">
                <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-2 text-accent">
                    <Icon size={18} />
                    <span className="text-sm font-semibold capitalize tracking-wide">{slug}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  <span className="mt-4 inline-flex items-center text-sm text-accent">
                    Explore more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}