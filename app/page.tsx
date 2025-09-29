"use client"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Portfolio from "@/components/sections/portfolio"
import Contact from "@/components/sections/contact"
import FooterSection from "@/components/sections/footer"
import AnimatedBackground from "@/components/animated-bg"
import TechStack from "@/components/sections/tech-stack"
import Methods from "@/components/sections/methods"
import Testimonials from "@/components/sections/testimonials"
import CtaDiscuss from "@/components/sections/cta-discss"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Methods />
      <Portfolio />
      <Testimonials/>
      <CtaDiscuss/>
      <FooterSection />
    </main>
  )
}
