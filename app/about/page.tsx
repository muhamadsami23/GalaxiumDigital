// import PageHero from "@/components/sections/page-hero"
// import About from "@/components/sections/about"
// import AboutMethodology from "@/components/sections/about-methodology"
// import Contact from "@/components/sections/contact"
// import FooterSection from "@/components/sections/footer"
// import CompanyIntro from "@/components/sections/companyinfo"

// export default function AboutPage() {
//   return (
//     <main className="relative overflow-hidden">
//       <PageHero title="We Don’t Just Build. We Partner." image="/images/hero-generic.png" />
//       <CompanyIntro/>
//       <AboutMethodology />
//       <FooterSection />
//     </main>
//   )
// }

import AboutHero from "@/components/sections/abouthero"
import AboutEssence from "@/components/sections/about-essence"
import AboutMetrics from "@/components/sections/about-metric"
import AboutApproach from "@/components/sections/about-approach"
import Testimonials from "@/components/sections/testimonials"
import AboutMethodology from "@/components/sections/about-methodology"
import FooterSection from "@/components/sections/footer"
import Methods from "@/components/sections/methods"

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <AboutHero />
      <AboutEssence />
      <AboutMethodology/>
      <Methods/>
      <AboutApproach />
      <FooterSection/>
    </main>
  )
}
