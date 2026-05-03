import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import WeatherSection from "../components/WeatherSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import LeadershipSection from "../components/LeadershipSection"
import ReceptionSection from "../components/ReceptionSection"
import ContactSection from "../components/ContactSection"
import NewsSection from "../components/NewsSection"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main>
        <HeroSection />
        <WeatherSection />
        <AboutSection />
        <ServicesSection />
        <LeadershipSection />
        <ReceptionSection />
        <ContactSection />
        <NewsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
