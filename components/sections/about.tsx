// // // "use client"

// // // import type React from "react"
// // // import { motion } from "framer-motion"
// // // import FloatingIcons from "@/components/floating-icons"
// // // import { Lightbulb, Waves, Rocket, Zap, Handshake, Star } from "lucide-react"

// // // export default function About() {
// // //   return (
// // //     <section id="about" className="relative px-6 py-24">
// // //       <FloatingIcons
// // //         items={[
// // //           { key: "l", icon: <Lightbulb size={22} />, x: "10%", y: "65%", delay: 0.4 },
// // //           { key: "w", icon: <Waves size={22} />, x: "85%", y: "20%", delay: 1.1 },
// // //         ]}
// // //       />
// // //       <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
// // //         {/* left: short story */}
// // //         <div>
// // //           <motion.h2
// // //             className="text-3xl font-semibold md:text-4xl"
// // //             initial={{ opacity: 0, y: 16 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             We’re not another agency. We’re your digital co-pilot.
// // //           </motion.h2>
// // //           <motion.p
// // //             className="mt-4 max-w-prose text-muted-foreground"
// // //             initial={{ opacity: 0, y: 16 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ delay: 0.1 }}
// // //           >
// // //             At Galaxium, we blend tech, creativity, and strategy to launch your business into new digital orbits.
// // //           </motion.p>
// // //         </div>

// // //         {/* right: 3 animated objective cards */}
// // //         <div className="grid gap-4 sm:grid-cols-2">
// // //           <ObjectiveCard
// // //             Icon={Rocket}
// // //             title="Innovation First"
// // //             text="We love pushing limits with fresh ideas."
// // //             delay={0}
// // //           />
// // //           <ObjectiveCard
// // //             Icon={Zap}
// // //             title="Performance Obsessed"
// // //             text="Every project is crafted to scale and succeed."
// // //             delay={0.05}
// // //           />
// // //           <ObjectiveCard
// // //             Icon={Handshake}
// // //             title="Human Touch"
// // //             text="Tech that connects, not confuses."
// // //             delay={0.1}
// // //           />
// // //           <ObjectiveCard
// // //             Icon={Star} // any suitable icon
// // //             title="Future-Ready"
// // //             text="We design solutions that evolve with your business."
// // //             delay={0.15}
// // //           />
// // //         </div>

// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // function ObjectiveCard({
// // //   Icon,
// // //   title,
// // //   text,
// // //   delay = 0,
// // //   className = "",
// // // }: {
// // //   Icon: React.ElementType
// // //   title: string
// // //   text: string
// // //   delay?: number
// // //   className?: string
// // // }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 14 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 0.55, delay }}
// // //       className={`rounded-xl border border-dashed border-border bg-card/50 p-5 backdrop-blur ${className}`}
// // //     >
// // //       <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent">
// // //         <Icon size={18} />
// // //       </div>
// // //       <h3 className="text-base font-semibold">{title}</h3>
// // //       <p className="mt-1 text-sm text-muted-foreground">{text}</p>
// // //     </motion.div>
// // //   )
// // // }

// // "use client"

// // import type React from "react"
// // import { motion } from "framer-motion"
// // import FloatingIcons from "@/components/floating-icons"
// // import { Lightbulb, Waves, Rocket, Zap, Handshake, Star } from "lucide-react"

// // export default function About() {
// //   return (
// //     <section id="about" className="relative px-6 py-24">
// //       <FloatingIcons
// //         items={[
// //           { key: "l", icon: <Lightbulb size={22} />, x: "10%", y: "65%", delay: 0.4 },
// //           { key: "w", icon: <Waves size={22} />, x: "85%", y: "20%", delay: 1.1 },
// //         ]}
// //       />

// //       <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
// //         {/* Left: Short Story */}
// //         <div>
// //           <motion.h2
// //             className="text-3xl font-semibold md:text-4xl"
// //             initial={{ opacity: 0, y: 16 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             You don’t need an agency. You need a partner who builds like it’s their own.
// //           </motion.h2>

// //           <motion.p
// //             className="mt-4 max-w-prose text-muted-foreground"
// //             initial={{ opacity: 0, y: 16 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.1 }}
// //           >
// //             At Galaxium, we co-create digital solutions that scale with your business. From strategy to execution, we blend product thinking, design precision, and clean engineering — to deliver real-world results.
// //           </motion.p>

// //           {/* CTA */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 16 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2 }}
// //             className="mt-6"
// //           >
// //             <a
// //               href="/contact"
// //               className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-background transition hover:bg-primary/80"
// //             >
// //               Let’s Build Something
// //             </a>
// //           </motion.div>
// //         </div>

// //         {/* Right: 4 Objective Cards */}
// //         <div className="grid gap-4 sm:grid-cols-2">
// //           <ObjectiveCard
// //             Icon={Rocket}
// //             title="Built to Break Limits"
// //             text="We turn ambitious ideas into scalable, real-world products — fast."
// //             delay={0}
// //           />
// //           <ObjectiveCard
// //             Icon={Zap}
// //             title="Performance Engineered"
// //             text="Every line of code and every pixel — tuned to deliver results."
// //             delay={0.05}
// //           />
// //           <ObjectiveCard
// //             Icon={Handshake}
// //             title="People-First Design"
// //             text="We design for humans. Intuitive, inclusive, and frictionless."
// //             delay={0.1}
// //           />
// //           <ObjectiveCard
// //             Icon={Star}
// //             title="Future-Proofed"
// //             text="Modular. Flexible. Ready to evolve as your business grows."
// //             delay={0.15}
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // function ObjectiveCard({
// //   Icon,
// //   title,
// //   text,
// //   delay = 0,
// //   className = "",
// // }: {
// //   Icon: React.ElementType
// //   title: string
// //   text: string
// //   delay?: number
// //   className?: string
// // }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 14 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.55, delay }}
// //       className={`rounded-xl border border-dashed border-border bg-card/50 p-5 backdrop-blur ${className}`}
// //     >
// //       <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent">
// //         <Icon size={18} />
// //       </div>
// //       <h3 className="text-base font-semibold">{title}</h3>
// //       <p className="mt-1 text-sm text-muted-foreground">{text}</p>
// //     </motion.div>
// //   )
// // }

// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import FloatingIcons from "@/components/floating-icons"
// import { Lightbulb, Waves, Rocket, Zap, Handshake, Star } from "lucide-react"

// export default function About() {
//   return (
//     <section id="about" className="relative px-6 py-24">
//       <FloatingIcons
//         items={[
//           { key: "l", icon: <Lightbulb size={22} />, x: "10%", y: "65%", delay: 0.4 },
//           { key: "w", icon: <Waves size={22} />, x: "85%", y: "20%", delay: 1.1 },
//         ]}
//       />

//       <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
//         {/* Left Side */}
//         <div>
//           <motion.h2
//             className="text-3xl font-semibold md:text-4xl"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             Not an agency. A partner that builds like it’s their own.
//           </motion.h2>

//           <motion.p
//             className="mt-4 max-w-prose text-muted-foreground"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             Galaxium is where bold ideas become scalable products. We blend design precision, strategic thinking, and clean engineering to build digital solutions that actually work — fast.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mt-6"
//           >
//             <a
//               href="/contact"
//               className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-background transition hover:bg-primary/80"
//             >
//               Build With Us
//             </a>
//           </motion.div>
//         </div>

//         {/* Right Side */}
//         <div className="grid gap-4 sm:grid-cols-2">
//           <ObjectiveCard
//             Icon={Rocket}
//             title="Built to Break Limits"
//             text="We turn ambitious concepts into production-ready products — fast and sharp."
//             delay={0}
//           />
//           <ObjectiveCard
//             Icon={Zap}
//             title="Performance Obsessed"
//             text="From code to UI, every detail is tuned for speed and results."
//             delay={0.05}
//           />
//           <ObjectiveCard
//             Icon={Handshake}
//             title="Human-Centered Design"
//             text="We make things people actually want to use. Intuitive. Inclusive. Frictionless."
//             delay={0.1}
//           />
//           <ObjectiveCard
//             Icon={Star}
//             title="Future-Ready"
//             text="Modular and scalable — ready to grow as you do."
//             delay={0.15}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// function ObjectiveCard({
//   Icon,
//   title,
//   text,
//   delay = 0,
//   className = "",
// }: {
//   Icon: React.ElementType
//   title: string
//   text: string
//   delay?: number
//   className?: string
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 14 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.55, delay }}
//       className={`rounded-xl border border-dashed border-border bg-card/50 p-5 backdrop-blur ${className}`}
//     >
//       <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent">
//         <Icon size={18} />
//       </div>
//       <h3 className="text-base font-semibold">{title}</h3>
//       <p className="mt-1 text-sm text-muted-foreground">{text}</p>
//     </motion.div>
//   )
// }

"use client"

import type React from "react"
import { motion } from "framer-motion"
import FloatingIcons from "@/components/floating-icons"
import { Lightbulb, Waves, Rocket, Zap, Handshake, Star } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <FloatingIcons
        items={[
          { key: "l", icon: <Lightbulb size={22} />, x: "10%", y: "65%", delay: 0.4 },
          { key: "w", icon: <Waves size={22} />, x: "85%", y: "20%", delay: 1.1 },
        ]}
      />

      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
        {/* Left Side */}
        <div>
          {/* Top Label */}
          <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
            Overview
          </span>

          <motion.h2
            className="mt-4 text-3xl font-semibold md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Not an agency. A partner that builds like it’s their own.
          </motion.h2>

          <motion.p
            className="mt-4 max-w-prose text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Galaxium is where bold ideas become scalable products. We blend design precision, strategic thinking, and clean engineering to build digital solutions that actually work — fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <a
              href="/contact"
              className="inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-background transition hover:bg-primary/80"
            >
              Build With Us
            </a>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="grid gap-4 sm:grid-cols-2">
          <ObjectiveCard
            Icon={Rocket}
            title="Built to Break Limits"
            text="We turn ambitious concepts into production-ready products — fast and sharp."
            delay={0}
          />
          <ObjectiveCard
            Icon={Zap}
            title="Performance Obsessed"
            text="From code to UI, every detail is tuned for speed and results."
            delay={0.05}
          />
          <ObjectiveCard
            Icon={Handshake}
            title="Human-Centered Design"
            text="We make things people actually want to use. Intuitive. Inclusive. Frictionless."
            delay={0.1}
          />
          <ObjectiveCard
            Icon={Star}
            title="Future-Ready"
            text="Modular and scalable — ready to grow as you do."
            delay={0.15}
          />
        </div>
      </div>
    </section>
  )
}

function ObjectiveCard({
  Icon,
  title,
  text,
  delay = 0,
  className = "",
}: {
  Icon: React.ElementType
  title: string
  text: string
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`rounded-xl border border-dashed border-border bg-card/50 p-5 backdrop-blur ${className}`}
    >
      <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent">
        <Icon size={18} />
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{text}</p>
    </motion.div>
  )
}
