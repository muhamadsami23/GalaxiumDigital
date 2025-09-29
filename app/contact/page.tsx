import PageHero from "@/components/sections/page-hero"
import About from "@/components/sections/about"
import AboutMethodology from "@/components/sections/about-methodology"
import Contact from "@/components/sections/contact"
import FooterSection from "@/components/sections/footer"
import ContactHero from "@/components/sections/contacthero"

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <ContactHero/>
      <Contact />
      <FooterSection />
    </main>
  )
}
