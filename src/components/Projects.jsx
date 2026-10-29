import { ExternalLink } from 'lucide-react'
import useReveal from '../hooks/useReveal'

// GitHub Icon SVG
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const projects = [
  {
    title: 'Stream Selection Platform',
    description: 'Responsive platform to help students explore academic streams and career options. Displays colleges, career paths, and placement opportunities. Built during the DU Hacks 4.0 hackathon.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    live: 'https://panth1101.github.io/Innovators-/',
    hackathon: true,
  },
  {
    title: 'FundLedger',
    description: 'Django-based community funding platform for transparent, democratic funding decisions. Pitchers submit proposals that admins verify, donors cast sealed votes in time-bound funding rounds, and winners are funded from category fund pools, with every transaction recorded in an auditable ledger. Includes role-based access (Pitcher, Donor, Admin), donor wallets, and public transparency dashboards. Built during the DU Hacks 5.0 hackathon.',
    tags: ['Django', 'Python', 'HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/PANTH1101/fundledger-django',
    live: 'https://fundledger-django.onrender.com/',
    hackathon: true,
  },
  {
    title: 'GuideX',
    description: 'AI-powered career navigation platform built for TIC-TECH-TOE \'25 — DA-IICT Hackathon. An OpenAI-powered chatbot gives personalized career guidance, skill-gap analysis and interview prep, alongside an ATS-friendly resume builder, a skill assessment tool that shows market demand and related job roles, a networking hub, and a feedback portal. Features a terminal-style chat interface with light/dark mode.',
    tags: ['HTML', 'CSS', 'JavaScript', 'OpenAI API'],
    github: null,
    live: null,
    hackathon: true,
  },
  {
    title: 'BugSense',
    description: 'AI-Assisted Project & Issue Management Platform built for TIC-TECH-TOE \'26 — DA-IICT Hackathon. Fixes real accountability gaps in issue tracking — being assigned a ticket and actually accepting it are two separate steps, keeping workload and velocity numbers honest. AI suggests assignees and estimates story points but never acts without human sign-off. Each project independently runs Scrum or Kanban.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'LangGraph', 'OpenAI API', 'PostgreSQL', 'Slack API', 'GitHub', 'Sentry'],
    github: null,
    live: null,
    hackathon: true,
  },
  {
    title: 'FinishLine AI',
    description: 'AI-powered productivity companion that breaks down goals into actionable plans, delivers autonomous daily briefings, and intervenes with a real recovery plan when deadlines are at risk. Built solo for Vibe2Ship — India\'s Biggest Vibe-Coding Hackathon (Coding Ninjas × Google for Developers).',
    tags: ['React', 'TypeScript', 'Firebase', 'Gemini API'],
    github: 'https://github.com/KRISHTI2503/FinishLine-AI',
    live: 'https://finishline-ai-820143287124.us-west1.run.app/',
    hackathon: true,
  },
  {
    title: 'PaperWise',
    description: 'Academic Paper Management System built with Java. Implemented filtering, paper voting ("Mark as Useful"), and a paper request system. Integrated PostgreSQL via JDBC following MVC architecture.',
    tags: ['Java', 'Servlets', 'JSP', 'PostgreSQL'],
    github: null,
    live: null,
    status: 'Source code coming soon',
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className={`card card-hover group reveal reveal-delay-${(index % 3) + 1} overflow-hidden flex flex-col h-full`}
    >
      <div className="p-6 space-y-4 flex flex-col flex-1">
        {/* Hackathon Badge */}
        {project.hackathon && (
          <div className="flex items-center gap-2">
            <span className="tag tag-primary text-xs font-mono">
              Hackathon
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-light-muted dark:text-dark-muted leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag tag-primary text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Links or Status */}
        <div className="flex items-center gap-3 pt-4 border-t border-light-border dark:border-dark-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              Source
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          
          {project.status && (
            <p className="text-sm text-light-muted dark:text-dark-muted italic font-mono">
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
    <section id="projects" className="section-padding bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="section-eyebrow">My Work</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of projects I've built, from hackathons to personal experiments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
