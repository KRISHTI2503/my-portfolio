import { MapPin, GraduationCap, Award } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  const quickFacts = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech IT, DDU',
    },
    {
      icon: Award,
      label: 'CPI',
      value: '8.57',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nadiad, Gujarat',
    },
  ]

  return (
    <section id="about" className="section-padding bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">
              Passionate about building <br className="hidden sm:block" />
              <span className="gradient-text">for the world</span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-start">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="reveal">
                <p className="text-lg text-light-text dark:text-dark-text leading-relaxed">
                  Passionate B.Tech Information Technology student focused on web development, problem solving, and building practical digital solutions. I enjoy creating modern user-friendly applications and continuously improving my skills in Data Structures & Algorithms, frontend development, and backend technologies.
                </p>
              </div>

              <div className="reveal reveal-delay-1">
                <p className="text-lg text-light-text dark:text-dark-text leading-relaxed">
                  I actively participate in hackathons and collaborative projects, where I work with teams to build innovative solutions and gain real-world development experience.
                </p>
              </div>
            </div>

            {/* Right: Quick Facts Card */}
            <div className="reveal reveal-delay-2">
              <div className="card p-6 space-y-4 min-w-[280px]">
                <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">
                  Quick Facts
                </h3>
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <fact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-light-muted dark:text-dark-muted font-medium">
                        {fact.label}
                      </p>
                      <p className="text-base text-light-text dark:text-dark-text font-semibold">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
