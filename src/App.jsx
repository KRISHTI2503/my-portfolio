import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AdditionalWork from './components/AdditionalWork'
import Achievements from './components/Achievements'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 60 })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AdditionalWork />
        <Achievements />
        <Education />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
