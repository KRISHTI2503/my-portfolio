import { Briefcase } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const ref = useReveal()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="experience" className="section-padding bg-light-surface dark:bg-dark-surface" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="section-eyebrow">Career</span>
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Open to Opportunities Card */}
          <div className="reveal">
            <div className="card p-8 text-center space-y-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to Internships
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                Looking for Opportunities
              </h3>

              {/* Description */}
              <p className="text-light-muted dark:text-dark-muted max-w-lg mx-auto leading-relaxed">
                Actively seeking internships and collaborative opportunities where I can contribute, learn, and grow as a developer.
              </p>

              {/* Role Chips */}
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Frontend', 'Backend', 'Full-Stack'].map((role) => (
                  <span key={role} className="tag tag-primary font-medium">
                    {role}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="btn btn-primary mt-4"
              >
                <Briefcase className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
