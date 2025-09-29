import PageHero from "@/components/sections/page-hero"
import Services from "@/components/sections/services"
import ServicesWorkflow from "@/components/sections/services-workflow"
import ServicesMethodologies from "@/components/sections/services-methodologies"
import FooterSection from "@/components/sections/footer"
import ServiceHero from "@/components/sections/servicehero"

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <ServiceHero/>
      <Services />
      <ServicesWorkflow />
      <ServicesMethodologies />
      <FooterSection />
    </main>
  )
}
