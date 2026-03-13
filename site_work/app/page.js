import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Properties from "../components/Properties"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CTASection from "../components/CTASection"
import WhyChooseUs from "../components/WhyToChooseUs"

export default function Home() {
  return (
    <main>
      <Hero />
      <Properties />
      <CTASection />
      <WhyChooseUs />
      <About />
      <Contact />
    </main>
  )
}