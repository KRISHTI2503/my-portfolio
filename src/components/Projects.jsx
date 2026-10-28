import { ExternalLink, Star } from 'lucide-react'
import useReveal from '../hooks/useReveal'

// GitHub Icon SVG
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const projects = [
  {
    title: 'BugSense',
    description: 'AI-Assisted Project & Issue Management Platform built for TIC-TECH-TOE \'26 — DA-IICT Hackathon. Fixes real accountability gaps in issue tracking — being assigned a ticket and actually accepting it are two separate steps, keeping workload and velocity numbers honest. AI suggests assignees and estimates story points but never acts without human sign-off.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'LangGraph', 'PostgreSQL'],
    github: null,
    live: null,
    status: 'Hackathon Project — Under Development',
    featured: true,
  },
  {
    title: 'FinishLine AI',
    description: 'AI-powered productivity companion that breaks down goals into actionable plans, delivers autonomous daily briefings, and intervenes with a real recovery plan when deadlines are at risk. Built solo for Vibe2Ship — India\'s Biggest Vibe-Coding Hackathon.',
    tags: ['React', 'TypeScript', 'Firebase', 'Gemini API'],
    github: 'https://github.com/KRISHTI2503/FinishLine-AI',
    live: 'https://finishline-ai-820143287124.us-west1.run.app/',
    featured: true,
  },
  {
    title: 'FundLedger',
    description: 'Community funding platform enabling transparent proposal submission, verification, and democratic voting across funding rounds to support fair, community-driven funding decisions. Built during the DU Hacks 5.0 hackathon.',
    tags: ['Django', 'HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/PANTH1101/fundledger-django',
    live: 'https://fundledger-django.onrender.com/',
    featured: true,
  },
  {
    title: 'PaperWise',
    description: 'Academic Paper Management System built with Java. Implemented filtering, paper voting ("Mark as Useful"), and a paper request system. Integrated PostgreSQL via JDBC following MVC architecture.',
    tags: ['Java', 'Servlets', 'JSP', 'PostgreSQL'],
    github: null,
    live: null,
    status: 'Source code coming soon',
  },
  {
    title: 'Stream Selection Platform',
    description: 'Responsive platform to help students explore academic streams and career options. Displays colleges, career paths, and placement opportunities. Built during the DU Hacks 4.0 hackathon.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    live: 'https://panth1101.github.io/Innovators-/',
  },
  {
    title: 'Joke Generator',
    description: 'Fun side project: A simple, delightful random joke generator built with vanilla JavaScript. Clean UI with smooth animations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: null,
    live: '/joke-generator.html',
    isInternal: true,
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className={`card card-hover group reveal reveal-delay-${(index % 3) + 1} overflow-hidden ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {/* Project Header with gradient accent */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 to-violet-600" />

      <div className="p-6 space-y-4">
        {/* Featured Badge */}
        {project.featured && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links or Status */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              Source
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target={project.isInternal ? '_self' : '_blank'}
              rel={project.isInternal ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              {project.isInternal ? 'View' : 'Live Demo'}
            </a>
          )}
          
          {project.status && !project.github && !project.live && (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              {project.status}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-bg-alt" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of projects I've built, from hackathons to personal experiments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
