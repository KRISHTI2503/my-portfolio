import { GraduationCap, Briefcase, Rocket } from 'lucide-react'
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

export default function Experience() {
  const ref = useReveal()

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
              Background
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Work Experience - Open to Opportunities */}
            <div className="reveal">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Work Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Professional journey and opportunities
                  </p>
                </div>
              </div>

              <div className="card p-8 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Open to Internships
                </div>

                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Looking for Opportunities
                </h4>

                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                  Actively seeking internships and collaborative opportunities where I can contribute, learn, and grow as a developer.
                </p>

                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {['Frontend', 'Backend', 'Full-Stack'].map((role) => (
                    <span
                      key={role}
                      className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="btn btn-primary mt-4"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Education */}
            <div className="reveal reveal-delay-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Academic background and achievements
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className={`card p-6 reveal reveal-delay-${index + 2}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {item.degree}
                        </h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                          {item.institution}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.location}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                        <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
                          {item.period}
                        </span>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
                            {item.score}
                          </span>
                          <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                            item.status === 'Pursuing'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
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
