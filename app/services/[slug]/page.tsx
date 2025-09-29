import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

const details: Record<string, { title: string; blurb: string; bullets: string[] }> = {
  "web-development": {
    title: "Web Development",
    blurb: "Modern, maintainable web platforms built with performance, accessibility, and motion design baked in.",
    bullets: [
      "Next.js App Router with RSC and SWR patterns",
      "Design systems with Tailwind and shadcn/ui",
      "A/B testing, analytics, and SEO baked in",
    ],
  },
  "app-development": {
    title: "App Development",
    blurb: "Cross‑platform apps with unified design systems and native-feeling interactions.",
    bullets: ["React Native & Expo", "Offline-first and sync strategies", "Secure auth, payments, and push"],
  },
  ecommerce: {
    title: "Ecommerce",
    blurb: "Conversion‑first storefronts with delightful motion and a11y.",
    bullets: ["Headless architecture", "Optimized product discovery", "Checkout integrations"],
  },
  "branding-ui": {
    title: "Branding & UI",
    blurb: "Identity, typography, and components that scale with your product.",
    bullets: ["Design tokens & theming", "Motion language", "Component libraries"],
  },
  automation: {
    title: "Automation & Integrations",
    blurb: "Streamline operations with robust pipelines and data flows.",
    bullets: ["Workflow orchestration", "Third‑party API integrations", "Monitoring & alerts"],
  },
  performance: {
    title: "SEO & Performance",
    blurb: "Ship fast, rank higher, and stay fast at scale.",
    bullets: ["Core Web Vitals targets", "Static + dynamic hybrid rendering", "Image & asset optimization"],
  },
}

export function generateStaticParams() {
  return Object.keys(details).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = (details as any)[params.slug]
  if (!data) {
    return { title: "Service – Galaxium Digital" }
  }
  return {
    title: `${data.title} – Galaxium Digital`,
    description: data.blurb,
  }
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const data = details[params.slug]
  if (!data) return notFound()
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/services"
        className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>
      <h1 className="text-pretty text-3xl font-semibold md:text-4xl">{data.title}</h1>
      <p className="mt-3 max-w-prose text-muted-foreground">{data.blurb}</p>
      <ul className="mt-6 grid gap-3">
        {data.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
