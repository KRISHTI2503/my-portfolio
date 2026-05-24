import useReveal from '../hooks/useReveal'

const additionalProjects = [
  {
    title: 'Amazon-Inspired UI Clone',
    description: 'Built a responsive e-commerce interface to practice frontend layout structuring and UI development.',
    icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    title: 'ChatGPT Sidebar Extension',
    description: 'Developed a Chrome sidebar extension to improve ChatGPT conversation navigation and user experience.',
    icon: 'M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z',
    tags: ['JavaScript', 'Chrome API', 'HTML', 'CSS'],
    github: 'https://github.com/KRISHTI2503/chatgpt-sidebar-navigator-extension',
    live: '#',
  },
]

function MiniCard({ project, index }) {
  return (
    <div
      className={`reveal reveal-delay-${index + 1}
        group relative rounded-2xl p-5 sm:p-6
        bg-white/[0.02] border border-white/[0.07]
        hover:-translate-y-1.5 hover:border-teal-500/30
        hover:shadow-[0_8px_28px_rgba(0,0,0,0.18),0_0_0_1px_rgba(13,148,136,0.15)]
        transition-all duration-300 ease-out flex flex-col h-full`}
    >
      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={project.icon} />
        </svg>
      </div>

      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-teal-300 transition-colors leading-snug">
        {project.title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-teal-500/20 text-teal-400/80 bg-teal-500/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-3 border-t border-white/5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-500 hover:text-white text-xs transition-colors group/link"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span className="group-hover/link:underline">Source Code</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-500 hover:text-teal-400 text-xs transition-colors group/link ml-auto"
        >
          <span className="group-hover/link:underline">Live Demo</span>
          <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function AdditionalWork() {
  const ref = useReveal()

  return (
    <section id="additional-work" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[300px] sm:h-[300px] bg-teal-500/4 right-0 top-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <div className="reveal">
            <span className="section-label">Additional Work</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-2 leading-tight">
            Side Builds & <span className="gradient-text">Experiments</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 text-sm sm:text-base">
            Smaller experiments, utilities, and personal builds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl">
          {additionalProjects.map((project, i) => (
            <MiniCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
