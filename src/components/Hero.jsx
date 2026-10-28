import { useState, useEffect } from 'react'
import { ArrowRight, FileText } from 'lucide-react'
import ResumeModal from './ResumeModal'

// GitHub Icon SVG
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

// LinkedIn Icon SVG
const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

// Mail Icon SVG
const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const roles = ['Aspiring Developer', 'Problem Solver', 'Hackathon Enthusiast']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [showResumeModal, setShowResumeModal] = useState(false)

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 section-padding"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-light-bg dark:via-dark-bg to-primary/5 -z-10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Photo First */}
          <div className="flex justify-center mb-8 md:hidden">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Krishti Patel" 
                  className="w-full h-full object-cover"
                  width="160"
                  height="160"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Desktop: Text and Photo Layout */}
          <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center md:text-left">
              {/* Open to Internships Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm font-medium mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to Internships
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-text dark:text-dark-text mb-6 animate-slide-up">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Krishti Patel
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="flex items-center justify-center md:justify-start gap-2 my-6 min-h-[2.5rem] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-light-muted dark:text-dark-muted font-mono text-lg">&gt;</span>
                <span className="text-xl md:text-2xl font-mono text-primary">
                  {displayed}
                  <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse align-middle" />
                </span>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted font-medium mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                B.Tech IT Student • CPI: 8.57
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn btn-primary w-full sm:w-auto group"
                >
                  Explore Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="btn btn-secondary w-full sm:w-auto group"
                >
                  <FileText className="w-4 h-4" />
                  View Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="https://github.com/KRISHTI2503"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-all hover:-translate-y-1"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krishti-patel-5027a831b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-all hover:-translate-y-1"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:krishti2503@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-all hover:-translate-y-1"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Profile Photo (Desktop Only) */}
            <div className="hidden md:flex justify-center">
              <div className="relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                  <img 
                    src="/assets/profile.jpg" 
                    alt="Krishti Patel" 
                    className="w-full h-full object-cover"
                    width="320"
                    height="320"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && <ResumeModal onClose={() => setShowResumeModal(false)} />}
    </section>
  )
}
