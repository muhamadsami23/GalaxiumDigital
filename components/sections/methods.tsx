// // "use client"

// // import { motion } from "framer-motion"

// // export default function Methods() {
// //   return (
// //     <section className="relative px-6 py-24">
// //       <div className="mx-auto max-w-4xl text-center">
// //         <motion.h2
// //           className="text-3xl font-semibold md:text-4xl"
// //           initial={{ opacity: 0, y: 14 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //         >
// //           Our methods? Simple.
// //         </motion.h2>
// //         <motion.p
// //           className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground"
// //           initial={{ opacity: 0, y: 14 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.05 }}
// //         >
// //           Strategy-driven creativity. Data-backed decisions. Relentless execution. That’s how we turn bold ideas into
// //           market-leading products.
// //         </motion.p>
// //         <motion.div
// //           className="mt-8"
// //           initial={{ opacity: 0, y: 14 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.1 }}
// //         >
// //           <a
// //             href="/contact"
// //             className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
// //           >
// //             Let’s Build Something Unforgettable
// //           </a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { motion } from "framer-motion"
// import { Lightbulb, LineChart, Zap, Rocket } from "lucide-react"

// const steps = [
//   {
//     icon: <Lightbulb size={20} />,
//     title: "Creative Strategy",
//     desc: "We craft a plan driven by insights and innovation.",
//   },
//   {
//     icon: <LineChart size={20} />,
//     title: "Data-Backed Decisions",
//     desc: "We validate with research and real-world data.",
//   },
//   {
//     icon: <Zap size={20} />,
//     title: "Relentless Execution",
//     desc: "We prototype, test, iterate — fast and fearlessly.",
//   },
//   {
//     icon: <Rocket size={20} />,
//     title: "Scalable Launch",
//     desc: "We build to perform — and scale with you.",
//   },
// ]

// export default function Methods() {
//   return (
//     <section className="relative px-6 py-24">
//       <div className="mx-auto max-w-5xl text-center">
//         {/* Header */}
//         <motion.h2
//           className="text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Our methods? Simple.
//         </motion.h2>
//         <motion.p
//           className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground"
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.05 }}
//         >
//           Strategy-driven creativity. Data-backed decisions. Relentless execution. That’s how we turn bold ideas into
//           market-leading products.
//         </motion.p>

//         {/* Flow Steps with Centered Arrows */}
//         <motion.div
//           className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:items-center sm:gap-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//         >
//           {steps.map((step, i) => (
//             <div key={i} className="flex flex-col items-center">
//               {/* Step Card */}
//               <div className="rounded-xl border border-border bg-card/50 p-5 text-left backdrop-blur w-[220px] sm:w-[200px]">
//                 <div className="mb-3 inline-flex rounded-full bg-accent/10 p-2 text-accent">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
//                 <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
//               </div>

//               {/* Down Arrow (Mobile Only) */}
//               {i < steps.length - 1 && (
//                 <div className="mt-6 sm:hidden">
//                   <ArrowDown />
//                 </div>
//               )}
//             </div>
//           )).flatMap((el, i) =>
//             i < steps.length - 1
//               ? [el,
//                   <div key={`arrow-${i}`} className="hidden sm:flex items-center justify-center">
//                     <ArrowRight />
//                   </div>
//                 ]
//               : [el]
//           )}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           className="mt-12"
//           initial={{ opacity: 0, y: 14 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           <a
//             href="/contact"
//             className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
//           >
//             Let’s Build Something Unforgettable
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // Arrow components (simple SVGs)
// function ArrowRight() {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
//       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//       className="text-muted-foreground">
//       <line x1="5" y1="12" x2="19" y2="12" />
//       <polyline points="12 5 19 12 12 19" />
//     </svg>
//   )
// }

// function ArrowDown() {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
//       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//       className="text-muted-foreground">
//       <line x1="12" y1="5" x2="12" y2="19" />
//       <polyline points="5 12 12 19 19 12" />
//     </svg>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { Lightbulb, LineChart, Zap, Rocket } from "lucide-react"

const steps = [
  {
    icon: <Lightbulb size={20} />,
    title: "Creative Strategy",
    desc: "We craft a plan driven by insights and innovation.",
  },
  {
    icon: <LineChart size={20} />,
    title: "Data-Backed Decisions",
    desc: "We validate with research and real-world data.",
  },
  {
    icon: <Zap size={20} />,
    title: "Relentless Execution",
    desc: "We prototype, test, iterate — fast and fearlessly.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Scalable Launch",
    desc: "We build to perform — and scale with you.",
  },
]

export default function Methods() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        {/* Label */}
        <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
          Methods
        </span>

        {/* Header */}
        <motion.h2
          className="mt-4 text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our methods? Simple.
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Strategy-driven creativity. Data-backed decisions. Relentless execution. That’s how we turn bold ideas into
          market-leading products.
        </motion.p>

        {/* Flow Steps with Centered Arrows */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:items-center sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {steps.map((step, i) => (
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
          )).flatMap((el, i) =>
            i < steps.length - 1
              ? [el,
                  <div key={`arrow-${i}`} className="hidden sm:flex items-center justify-center">
                    <ArrowRight />
                  </div>
                ]
              : [el]
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
          >
            Let’s Build Something Unforgettable
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Arrow components (simple SVGs)
function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-muted-foreground">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="text-muted-foreground">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="5 12 12 19 19 12" />
    </svg>
  )
}
