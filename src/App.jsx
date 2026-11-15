import About from './components/About'
import Legal from './components/Legal'
import CTA from './components/CTA'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Services from './components/Services'
import TrustSection from './components/TrustSection'
import VirtualAssistant from './components/VirtualAssistant'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <VirtualAssistant />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <CTA />
        <FAQ />
        <Contact />
        <Legal />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  )
}

export default App
