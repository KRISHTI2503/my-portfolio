import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const projects = [
  {
    title: 'FundLedger',
    description: 'Community funding platform enabling transparent proposal submission, verification, and democratic voting across funding rounds to support fair, community-driven funding decisions. Built during the DU Hacks 5.0 hackathon.',
    tags: ['Django', 'HTML', 'Tailwind CSS', 'JavaScript'],
    icon: 'M21 12V7H5a2 2 0 010-4h14v4M21 12a2 2 0 010 4H5a2 2 0 010-4m0 0h16',
    color: 'from-teal-500/20 to-cyan-500/5',
    headerGradient: 'from-teal-600/40 to-cyan-900/30',
    accent: '#0d9488',
    github: 'https://github.com/PANTH1101/fundledger-django',
    live: 'https://fundledger-django.onrender.com/',
    featured: true,
  },
  {
    title: 'PaperWise',
    description: 'Academic Paper Management System built with Java. Implemented filtering, paper voting ("Mark as Useful"), and a paper request system. Integrated PostgreSQL via JDBC following MVC architecture.',
    tags: ['Java', 'Servlets', 'JSP', 'PostgreSQL'],
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: 'from-blue-500/20 to-indigo-500/5',
    headerGradient: 'from-blue-600/40 to-indigo-900/30',
    accent: '#3b82f6',
    github: null,
    live: null,
    status: 'Source code coming soon',
    featured: false,
  },
  {
    title: 'Stream Selection Platform',
    description: 'Responsive platform to help students explore academic streams and career options. Displays colleges, career paths, and placement opportunities. Built during the DU Hacks 4.0 hackathon.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    color: 'from-purple-500/20 to-blue-500/5',
    headerGradient: 'from-purple-600/40 to-blue-900/30',
    accent: '#8b5cf6',
    github: 'https://github.com/Hetbhalodiya91/Innoveters',
    live: 'https://panth1101.github.io/Innovators-/',
    featured: false,
  },
  {
    title: 'Expense Tracker',
    description: 'Java application to record and categorize daily expenses. Applied Object-Oriented Programming principles for modular and maintainable design.',
    tags: ['Java', 'OOP'],
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    color: 'from-emerald-500/20 to-teal-500/5',
    headerGradient: 'from-emerald-600/40 to-teal-900/30',
    accent: '#10b981',
    github: null,
    live: null,
    status: 'Project under development',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className={`reveal reveal-delay-${(index % 6) + 1} group relative glass-card bg-gradient-to-br ${project.color} flex flex-col h-full overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25),0_0_0_1px_rgba(13,148,136,0.35)]`}
      style={{ '--accent': project.accent }}
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}15, transparent 70%)` }} />

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
          ⭐ Featured
        </div>
      )}

      {/* Gradient header block */}
      <div
        className={`relative w-full h-20 bg-gradient-to-br ${project.headerGradient} flex items-center justify-center flex-shrink-0 border-b border-white/[0.06]`}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:border-teal-400/40 transition-all duration-300">
          <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={project.icon} />
          </svg>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-teal-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Links row */}
        {(project.github || project.live) ? (
          <div className="flex gap-3 pt-4 border-t border-white/5 items-center flex-wrap">
            {project.github && (
              <a href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors group/link">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="group-hover/link:underline">Source</span>
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold
                  bg-teal-500 hover:bg-teal-400 text-white
                  shadow-[0_0_12px_rgba(13,148,136,0.4)] hover:shadow-[0_0_20px_rgba(13,148,136,0.6)]
                  transition-all duration-200 hover:-translate-y-0.5"
              >
                Live Demo
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        ) : project.status ? (
          <div className="pt-4 border-t border-white/5">
            <span className="text-xs text-slate-500 font-mono italic">{project.status}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-[400px] h-[400px] bg-teal-500/5 right-0 bottom-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="My Work"
          title={<>Featured <span className="gradient-text">Projects</span></>}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
