import { Code2, Globe, Server, Database, Wrench, Cpu } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const skillGroups = [
  {
    category: 'Languages',
    icon: Code2,
    skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    icon: Globe,
    skills: ['React.js', 'Tailwind CSS', 'JSP', 'Responsive Design', 'Redux', 'Axios'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Java Servlets', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Django', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Databases & ORM',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Hibernate (JPA)', 'Spring Data JPA'],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Postman', 'VS Code', 'Vercel', 'Jenkins'],
  },
  {
    category: 'Core CS',
    icon: Cpu,
    skills: ['DSA', 'DBMS', 'OOP', 'Computer Networks', 'Problem Solving'],
  },
]

function SkillCard({ group, index }) {
  return (
    <div
      className={`card card-hover p-6 space-y-4 reveal reveal-delay-${(index % 3) + 1}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
          <group.icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {group.category}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <SkillCard key={group.category} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
