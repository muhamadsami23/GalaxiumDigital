// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import FloatingIcons from "@/components/floating-icons"
// import { Grid3X3, Stars } from "lucide-react"
// import Image from "next/image"

// const projects = [
//   {
//     title: "Neon Dashboard",
//     img: "/neon-analytics-dashboard.jpg",
//     github: "https://github.com/example/neon-dashboard",
//   },
//   {
//     title: "E‑commerce Motion UI",
//     img: "/animated-ecommerce-ui.jpg",
//     github: "https://github.com/example/ecommerce-motion",
//   },
//   { title: "3D Product Teaser", img: "/3d-product-teaser.jpg", github: "https://github.com/example/3d-teaser" },
// ]

// export default function Portfolio() {
//   const [open, setOpen] = useState<number | null>(null)

//   return (
//     <section id="work" className="relative px-6 py-24">
//       <FloatingIcons
//         items={[
//           { key: "g", icon: <Grid3X3 size={22} />, x: "18%", y: "10%", delay: 0.3 },
//           { key: "st2", icon: <Stars size={20} />, x: "78%", y: "80%", delay: 0.8 },
//         ]}
//       />
//       <div className="mx-auto max-w-6xl">
//         {/* Label */}
//         <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
//           Portfolio
//         </span>

//         <motion.h2
//           className="mt-4 text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Featured Projects
//         </motion.h2>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {projects.map((p, i) => (
//             <motion.figure
//               key={p.title}
//               className="group overflow-hidden rounded-xl border border-border bg-card"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.06 }}
//               whileHover={{ y: -4 }}
//             >
//               <button
//                 type="button"
//                 onClick={() => setOpen(open === i ? null : i)}
//                 className="block w-full text-left"
//                 aria-expanded={open === i}
//                 aria-controls={`proj-${i}`}
//               >
//                 <div className="relative aspect-[4/3]">
//                   <Image src={p.img || "/placeholder.svg"} alt={p.title} fill className="object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
//                 </div>
//                 <figcaption className="p-4">
//                   <p className="font-medium">{p.title}</p>
//                   <p className="text-sm text-muted-foreground">Framer Motion • React • Tailwind</p>
//                 </figcaption>
//               </button>

//               <AnimatePresence initial={false}>
//                 {open === i && (
//                   <motion.div
//                     id={`proj-${i}`}
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     className="border-t border-border p-4"
//                   >
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-accent underline underline-offset-4"
//                     >
//                       View on GitHub
//                     </a>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.figure>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import FloatingIcons from "@/components/floating-icons"
// import { Grid3X3, Stars, X } from "lucide-react"
// import Image from "next/image"

// const projects = [
//   {
//     title: "University's Academic Portal",
//     img: "/sapmas.png",
//     desc: "A comprehensive system built for University to manage students, teachers and other staff. It comes with features like attendance, results, fee management, library management, and more..",
//     stack: ["React", "Typescript", "Node.Js", "MySQL"],
//   },
//   {
//     title: "Autonomous Space Rover Navigator",
//     img: "/rover.png",
//     desc: "An intelligent autonomous rover, capable of detecting obstacles and finding an optimal path or terrain terrain. Uses computer vision and machine learning to navigate in a simulated Mars environment.",
//     stack: ["C++", "C", "Unity","C#", "Data Structures"],
//   },
//   {
//     title: "Mind Mechanics Portfolio Website",
//     img: "/mind.png",
//     desc: "A holistic website designed for Mind Mechanics to promote mental, physical, and emotional wellness through expert services. The platform features a clean design and intuitive user experience for easy navigation and bookings..",
//     stack: ["Next.Js", "React", "Tailwind"],
//   },
// ]

// export default function Portfolio() {
//   const [open, setOpen] = useState<number | null>(null)

//   return (
//     <section id="work" className="relative px-6 py-24">
//       <FloatingIcons
//         items={[
//           { key: "g", icon: <Grid3X3 size={22} />, x: "18%", y: "10%", delay: 0.3 },
//           { key: "st2", icon: <Stars size={20} />, x: "78%", y: "80%", delay: 0.8 },
//         ]}
//       />
//       <div className="mx-auto max-w-6xl">
//         {/* Label */}
//         <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
//           Portfolio
//         </span>

//         <motion.h2
//           className="mt-4 text-3xl font-semibold md:text-4xl"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           Featured Projects
//         </motion.h2>

//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           {projects.map((p, i) => (
//             <motion.figure
//               key={p.title}
//               className="group overflow-hidden rounded-xl border border-border bg-card"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.06 }}
//               whileHover={{ y: -4 }}
//             >
//               <button
//                 type="button"
//                 onClick={() => setOpen(i)}
//                 className="block w-full text-left"
//               >
//                 <div className="relative aspect-[16/9]">
//                   <Image src={p.img} alt={p.title} fill className="object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
//                 </div>
//                 <figcaption className="p-4">
//                   <p className="font-medium">{p.title}</p>
//                   <p className="text-sm font-medium text-blue-400 hover:text-blue-500 transition-colors blac
//                   k/60">More Details
//                       <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
//                   </p>
//                 </figcaption>
//               </button>
//             </motion.figure>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {open !== null && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setOpen(null)} // close when clicking outside
//           >
//             <motion.div
//               className="relative w-full max-w-lg rounded-xl bg-card shadow-xl overflow-hidden"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()} // prevent backdrop closing
//             >
//               {/* Close button */}
//               <button
//                 onClick={() => setOpen(null)}
//                 className="absolute right-4 top-4 z-10 rounded-full bg-background/90 p-1.5 shadow hover:bg-accent/20"
//               >
//                 <X size={20} />
//               </button>

//               {/* Image */}
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={projects[open].img}
//                   alt={projects[open].title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4">
//                 <h3 className="text-2xl font-semibold">{projects[open].title}</h3>
//                 <p className="text-muted-foreground">{projects[open].desc}</p>

//                 <div>
//                   <h4 className="mb-2 font-medium">Tech Stack</h4>
//                   <ul className="flex flex-wrap gap-2 text-sm">
//                     {projects[open].stack.map((s) => (
//                       <li
//                         key={s}
//                         className="rounded-full bg-accent/30 px-3 py-1 text-foreground"
//                       >
//                         {s}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <p className="text-sm text-muted-foreground">
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FloatingIcons from "@/components/floating-icons"
import { Grid3X3, Stars, X, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Full Stack University's Academic Portal",
    img: "/sapmas.png",
    desc: "A comprehensive system built for University to manage students, teachers and other staff. It comes with features like attendance, results, fee management, library management, and more.",
    stack: ["React", "Typescript", "Node.Js", "MySQL"],
  },
  {
    title: "Autonomous Space Rover Navigator",
    img: "/rover.png",
    desc: "An intelligent autonomous rover, capable of detecting obstacles and finding an optimal path or terrain. Uses computer vision and machine learning to navigate in a simulated Mars environment.",
    stack: ["C++", "C", "Unity", "C#", "Data Structures"],
    // no link here → optional
  },
   {
    title: "HavenDrop Shopify Store",
    img: "/WhatsApp Image 2025-10-06 at 20.09.15_0c15fa02.jpg",
desc:"A sleek and modern Shopify-powered store crafted for seamless shopping and stylish interiors. Built to showcase home fashion with a user-friendly experience and bold visual appeal."
    , stack: ["Next.Js", "React", "Tailwind"],
    link: "https://mindmechanicss.com", // ✅ optional
  },
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
                onClick={() => setOpen(i)}
                className="block w-full text-left"
              >
                <div className="relative aspect-[16/9]">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <figcaption className="p-4">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm font-medium text-blue-400 hover:text-blue-500 transition-colors">
                    More Details
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-xl bg-card shadow-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/90 p-1.5 shadow hover:bg-accent/20"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={projects[open].img}
                  alt={projects[open].title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{projects[open].title}</h3>
                <p className="text-muted-foreground">{projects[open].desc}</p>

                <div>
                  <h4 className="mb-2 font-medium">Tech Stack</h4>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    {projects[open].stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full bg-accent/30 px-3 py-1 text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ✅ Optional Project Link */}
                {projects[open].link && (
                  <div className="pt-4">
                    <Link
                      href={projects[open].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      View Project
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
