"use client"

import { useEffect, useRef } from "react"

/**
 * Minimal GPU-friendly background:
 * - CSS vars track mouse and feed a gradient + parallax mask
 * - No heavy canvas; smooth and subtle
 */
export default function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const mx = (e.clientX / innerWidth - 0.5) * 2 // -1..1
      const my = (e.clientY / innerHeight - 0.5) * 2
      el.style.setProperty("--mx", String(mx))
      el.style.setProperty("--my", String(my))
    }
    window.addEventListener("mousemove", handler, { passive: true })
    return () => window.removeEventListener("mousemove", handler)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(1200px 800px at calc(50% + var(--mx,0) * 80px) calc(30% + var(--my,0) * 120px), color(display-p3 0.12 0.79 0.95 / 0.20), transparent 60%), radial-gradient(1000px 700px at calc(20% + var(--mx,0) * -120px) calc(70% + var(--my,0) * -80px), color(display-p3 0.99 0.83 0.43 / 0.10), transparent 60%)",
        mask: "radial-gradient(1200px 800px at calc(50% + var(--mx,0) * 60px) calc(50% + var(--my,0) * 60px), white 60%, transparent 100%)",
        filter: "saturate(120%)",
      }}
    />
  )
}
