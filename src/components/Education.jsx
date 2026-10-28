import { GraduationCap } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Dharmsinh Desai University',
    location: 'Nadiad, Gujarat',
    period: '2024 – 2028',
    status: 'Pursuing',
    score: 'CPI: 8.57',
  },
  {
    degree: 'HSC (12th Grade)',
    institution: 'DGES School',
    location: 'Idar, Gujarat',
    period: '2023 – 2024',
    status: 'Completed',
    score: '94.66%',
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'DGES School',
    location: 'Idar, Gujarat',
    period: '2021 – 2022',
    status: 'Completed',
    score: '92.16%',
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="section-padding bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="section-eyebrow">Background</span>
            <h2 className="section-title">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden sm:block absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`reveal reveal-delay-${index + 1} relative sm:pl-16`}
                >
                  {/* Timeline Node (Desktop) */}
                  <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-primary/20 border-4 border-primary items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>

                  {/* Card */}
                  <div className="card card-hover p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                      {/* Left: Icon (Mobile) + Degree */}
                      <div className="flex items-start gap-3">
                        {/* Mobile Icon */}
                        <div className="sm:hidden w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-1">
                            {item.degree}
                          </h3>
                          <p className="text-primary font-semibold">{item.institution}</p>
                          <p className="text-sm text-light-muted dark:text-dark-muted font-mono">
                            {item.location}
                          </p>
                        </div>
                      </div>

                      {/* Right: Period */}
                      <span className="tag font-mono text-sm flex-shrink-0 self-start">
                        {item.period}
                      </span>
                    </div>

                    {/* Score + Status Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="tag tag-primary font-mono font-semibold">
                        {item.score}
                      </span>
                      <span className={`tag font-mono ${
                        item.status === 'Pursuing'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
                          : ''
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
