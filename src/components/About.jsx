import { MapPin, GraduationCap, Code } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  const quickFacts = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nadiad, Gujarat',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech IT, DDU',
    },
    {
      icon: Code,
      label: 'Focus',
      value: 'Full Stack Development',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-bg-alt" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate about building <br className="hidden sm:block" />
              <span className="gradient-text">for the world</span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Profile Image */}
            <div className="flex justify-center md:justify-end reveal">
              <div className="relative group">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img
                    src="/assets/profile.jpg"
                    alt="Krishti Patel"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div className="reveal reveal-delay-1">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Passionate B.Tech Information Technology student focused on web development, problem solving, and building practical digital solutions. I enjoy creating modern user-friendly applications and continuously improving my skills in Data Structures & Algorithms, frontend development, and backend technologies.
                </p>
              </div>

              <div className="reveal reveal-delay-2">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I actively participate in hackathons and collaborative projects, where I work with teams to build innovative solutions and gain real-world development experience.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="pt-6 space-y-4 reveal reveal-delay-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <fact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {fact.label}
                      </p>
                      <p className="text-base text-gray-900 dark:text-white font-semibold">
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
