import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const devicons = {
  'C':          `${DEVICON_BASE}/c/c-original.svg`,
  'C++':        `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  'Java':       `${DEVICON_BASE}/java/java-original.svg`,
  'Python':     `${DEVICON_BASE}/python/python-original.svg`,
  'JavaScript': `${DEVICON_BASE}/javascript/javascript-original.svg`,
  'HTML':       `${DEVICON_BASE}/html5/html5-original.svg`,
  'CSS':        `${DEVICON_BASE}/css3/css3-original.svg`,
  'Django':     `${DEVICON_BASE}/django/django-plain.svg`,
  'PostgreSQL': `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  'Git':        `${DEVICON_BASE}/git/git-original.svg`,
  'Docker':     `${DEVICON_BASE}/docker/docker-original.svg`,
}

const skillGroups = [
  {
    category: 'Programming',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: ['C', 'C++', 'JavaScript', 'Python', 'Java'],
  },
  {
    category: 'Web Development',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    skills: ['HTML', 'CSS', 'Django'],
  },
  {
    category: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Java Servlets', 'Hibernate', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'CS Fundamentals',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    skills: ['DSA', 'DBMS', 'Problem Solving', 'OOP', 'Computer Networks'],
  },
  {
    category: 'Tools & Platforms',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Git', 'GitHub', 'VS Code', 'PostgreSQL', 'Docker', 'NetBeans', 'Vercel'],
  },
]

function SkillPill({ skill }) {
  const icon = devicons[skill]
  return (
    <span
      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
        bg-transparent border border-teal-500/30 text-teal-300
        hover:bg-teal-500/10 hover:border-teal-400/60 hover:scale-105
        transition-all duration-200 cursor-default"
    >
      {icon && (
        <img
          src={icon}
          alt={skill}
          width={16}
          height={16}
          className="flex-shrink-0"
          style={{ marginRight: '2px' }}
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      )}
      {skill}
    </span>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Tech Stack"
          title={<>Skills & <span className="gradient-text">Technologies</span></>}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${gi + 1}
                rounded-2xl p-5 sm:p-6
                bg-white/[0.03] dark:bg-white/[0.03]
                border border-white/[0.08]
                hover:border-teal-500/30 hover:-translate-y-1
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                transition-all duration-300 ease-out`}
             
              data-aos-delay={gi * 80}
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0 text-teal-400">
                  {group.icon}
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
