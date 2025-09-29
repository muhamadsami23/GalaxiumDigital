import PageHero from "@/components/sections/page-hero"
import Portfolio from "@/components/sections/portfolio"
import FooterSection from "@/components/sections/footer"
import PortfolioHero from "@/components/sections/portfoliohero"

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
     <PortfolioHero/>
      <Portfolio />
      <FooterSection />
    </main>
  )
}
