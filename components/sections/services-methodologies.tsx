"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Layers } from "lucide-react"

const methods = [
  { title: "Agile", desc: "Iterative delivery, continuous feedback.", Icon: Zap },
  { title: "Scrum", desc: "Sprints, ceremonies, and clear roles.", Icon: Clock },
  { title: "Kanban", desc: "Visual flow and continuous improvement.", Icon: Layers },
]

export default function ServicesMethodologies() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Framework label */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground">
            Framework
          </span>

          {/* Heading */}
          <motion.h3
            className="text-3xl font-bold text-white mt-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frameworks we follow
          </motion.h3>

          <motion.p
            className="mt-3 max-w-2xl mx-auto text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Proven frameworks that help us deliver quality, on time, every time.
          </motion.p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 relative">
          {/* Left side content */}
          <div className="space-y-8">
            {methods.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={title}
                className="flex items-start space-x-4 bg-card/50 border border-border p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent">
                  <Icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{title}</h4>
                  <p className="text-muted-foreground text-sm mt-2">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side Circles + Infinity */}
          <div className="hidden md:flex items-center justify-center relative">
            <div className="relative w-72 h-72">
              {/* 3 Jumbled Circles */}
              <div className="absolute w-40 h-40 border-2 border-accent/30 rounded-full top-0 left-6 animate-spin-slow"></div>
              <div className="absolute w-36 h-36 border-2 border-accent/20 rounded-full bottom-6 right-6 animate-spin-slower"></div>
              <div className="absolute w-32 h-32 border-2 border-accent/10 rounded-full top-12 right-0 animate-spin-slowest"></div>

              {/* Infinity Sign in center */}
              <svg
                viewBox="0 0 200 100"
                className="absolute inset-0 m-auto w-40 h-20"
              >
                <path
                  d="M20,50 C20,20 80,20 100,50 C120,80 180,80 180,50 C180,20 120,20 100,50 C80,80 20,80 20,50 Z"
                  fill="none"
                  stroke="url(#glow)"
                  strokeWidth="4"
                />
                <defs>
                  <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent">
                      <animate
                        attributeName="offset"
                        values="-1; 1"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="50%" stopColor="var(--accent)" stopOpacity="1">
                      <animate
                        attributeName="offset"
                        values="0; 2"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Spin Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 20s linear infinite;
        }
        .animate-spin-slowest {
          animation: spin 28s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
