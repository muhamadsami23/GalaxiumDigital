// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function AboutMethodology() {
//   return (
//     <section className="px-6 py-24">
//       <div className="mx-auto max-w-6xl">
//         <motion.h2
//           className="text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Our Methodology
//         </motion.h2>

//         <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
//           <motion.div
//             className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border"
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <Image
//               src="/images/hero-generic.png"
//               alt="Our methodology"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
//           </motion.div>

//           <motion.p
//             className="text-muted-foreground"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             We work in tight cycles. We ship fast. And we focus on what moves the needle. From discovery to delivery, our process is built around clarity, velocity, and sharp execution — not bloated timelines or buzzwords.
//           </motion.p>
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           <motion.div
//             className="rounded-xl border border-border bg-card/50 p-6"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-semibold">Vision</h3>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Digital experiences should feel like magic — seamless, inspiring, and effortless.
//             </p>
//           </motion.div>

//           <motion.div
//             className="rounded-xl border border-border bg-card/50 p-6"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-semibold">Mission</h3>
//             <p className="mt-2 text-sm text-muted-foreground">
//               To deliver real value through bold design, clean code, and relentless focus.
//             </p>
//           </motion.div>

//           <motion.div
//             className="rounded-xl border border-border bg-card/50 p-6"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-lg font-semibold">Objective</h3>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Ship reliable, scalable products — on time, with impact that lasts.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"

export default function AboutMethodology() {
  return (
    <section aria-labelledby="methodology-title" className="px-6 py-24 mx-auto max-w-6xl">
      <div className="text-center">
        {/* Tag */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Methodology
        </span>

        {/* Heading */}
        <motion.h2
          id="methodology-title"
          className="mt-4 text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
           What You Can Expect
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          We’re not into buzzwords or bloated process.
          What we do care about? Clear communication. Fast iterations. Building real stuff that makes a difference.  
          Here's how we work — and how we make sure you're always in the loop.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <StepCard
          title="1. Listen First"
          desc="We start by understanding your goals, pain points, and where you’re trying to go — not by pitching you a process."
        />
        <StepCard
          title="2. Sketch & Shape"
          desc="We’ll co-create a direction with you — wireframes, flows, and a shared vision of what matters most."
        />
        <StepCard
          title="3. Build & Iterate"
          desc="We build in fast, focused cycles — keeping things modular, scalable, and always real-world ready."
        />
        <StepCard
          title="4. Launch Smoothly"
          desc="We don’t disappear at launch. We stay close, fine-tune, and make sure everything lands right."
        />
        <StepCard
          title="5. Improve Together"
          desc="Post-launch is where things get interesting — we help optimize, adapt, and grow as you scale."
        />
        <StepCard
          title="6. Stay in Touch"
          desc="The build might end, but the relationship doesn’t. We’re here to support, advise, and jump back in when you need us."
        />
      </div>
    </section>
  )
}

function StepCard({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-card/50 p-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  )
}
