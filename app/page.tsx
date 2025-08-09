import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import HomeSection from "@/components/home-section"
import PortfolioSection from "@/components/portfolio-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CustomCursor />
      <Navbar />
      <HomeSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
