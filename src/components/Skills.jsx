import { 
  Network, 
  Database as LucideDatabase, 
  Puzzle, 
  Box, 
  Globe as LucideGlobe, 
  Smartphone,
  Webhook,
  Radio,
  Coffee,
  Code2,
  FileCode
} from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiVercel,
  SiJenkins
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { TbBrandCpp } from 'react-icons/tb'
import { VscCode } from 'react-icons/vsc'
import useReveal from '../hooks/useReveal'

// Icon mapping for each skill
const skillIcons = {
  // Languages
  'Java': { icon: Coffee, color: '#007396', darkColor: '#4B9FD5' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E', darkColor: '#F7DF1E' },
  'C++': { icon: TbBrandCpp, color: '#00599C', darkColor: '#0088CC' },
  'C': { icon: FileCode, color: '#A8B9CC', darkColor: '#A8B9CC' },
  'Python': { icon: SiPython, color: '#3776AB', darkColor: '#FFD43B' },
  'SQL': { icon: LucideDatabase, color: '#CC2927', darkColor: '#F29111' },
  'HTML5': { icon: FaHtml5, color: '#E34F26', darkColor: '#E34F26' },
  'CSS3': { icon: FaCss3Alt, color: '#1572B6', darkColor: '#1572B6' },

  // Frontend
  'React.js': { icon: SiReact, color: '#61DAFB', darkColor: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', darkColor: '#3178C6' },
  'JSP': { icon: Coffee, color: '#007396', darkColor: '#4B9FD5' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', darkColor: '#06B6D4' },
  'Responsive Design': { icon: Smartphone, color: '#14B8A6', darkColor: '#14B8A6' },
  'Django': { icon: SiDjango, color: '#092E20', darkColor: '#0C4B33' },
  'Redux': { icon: SiRedux, color: '#764ABC', darkColor: '#764ABC' },
  'Axios': { icon: Webhook, color: '#5A29E4', darkColor: '#5A29E4' },

  // Backend
  'Java Servlets': { icon: Coffee, color: '#007396', darkColor: '#4B9FD5' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F', darkColor: '#6DB33F' },
  'Spring MVC': { icon: SiSpring, color: '#6DB33F', darkColor: '#6DB33F' },
  'Spring Security': { icon: SiSpring, color: '#6DB33F', darkColor: '#6DB33F' },
  'Hibernate': { icon: SiHibernate, color: '#59666C', darkColor: '#BCAE79' },
  'REST APIs': { icon: Webhook, color: '#14B8A6', darkColor: '#14B8A6' },
  'WebSockets': { icon: Radio, color: '#010101', darkColor: '#14B8A6' },
  'Advanced Java': { icon: Coffee, color: '#007396', darkColor: '#4B9FD5' },

  // ORM & Databases
  'Hibernate (JPA)': { icon: SiHibernate, color: '#59666C', darkColor: '#BCAE79' },
  'Spring Data JPA': { icon: SiSpring, color: '#6DB33F', darkColor: '#6DB33F' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', darkColor: '#4169E1' },
  'MySQL': { icon: SiMysql, color: '#4479A1', darkColor: '#00758F' },

  // Core CS & Architecture
  'DSA': { icon: Network, color: '#14B8A6', darkColor: '#14B8A6' },
  'DBMS & Normalization': { icon: LucideDatabase, color: '#CC2927', darkColor: '#F29111' },
  'Problem Solving': { icon: Puzzle, color: '#14B8A6', darkColor: '#14B8A6' },
  'OOP': { icon: Box, color: '#14B8A6', darkColor: '#14B8A6' },
  'Computer Networks': { icon: LucideGlobe, color: '#14B8A6', darkColor: '#14B8A6' },

  // Tools & Platforms
  'Git': { icon: SiGit, color: '#F05032', darkColor: '#F05032' },
  'GitHub': { icon: SiGithub, color: '#181717', darkColor: '#E5E7EB' },
  'VS Code': { icon: VscCode, color: '#007ACC', darkColor: '#007ACC' },
  'Docker': { icon: SiDocker, color: '#2496ED', darkColor: '#2496ED' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5', darkColor: '#326CE5' },
  'Postman': { icon: SiPostman, color: '#FF6C37', darkColor: '#FF6C37' },
  'NetBeans': { icon: Coffee, color: '#1B6AC6', darkColor: '#1B6AC6' },
  'Vercel': { icon: SiVercel, color: '#000000', darkColor: '#E5E7EB' },
  'Jenkins': { icon: SiJenkins, color: '#D24939', darkColor: '#D24939' },
}

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'JavaScript', 'C++', 'C', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JSP', 'Tailwind CSS', 'Responsive Design', 'Django', 'Redux', 'Axios'],
  },
  {
    category: 'Backend',
    skills: ['Java Servlets', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'REST APIs', 'WebSockets', 'Advanced Java'],
  },
  {
    category: 'ORM & Databases',
    skills: ['Hibernate (JPA)', 'Spring Data JPA', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Core CS & Architecture',
    skills: ['DSA', 'DBMS & Normalization', 'Problem Solving', 'OOP', 'Computer Networks'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Kubernetes', 'Postman', 'NetBeans', 'Vercel', 'Jenkins'],
  },
]

function SkillChip({ skill }) {
  const iconData = skillIcons[skill]
  const Icon = iconData?.icon

  if (!Icon) {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-sm font-medium text-light-text dark:text-dark-text transition-all hover:border-primary hover:-translate-y-0.5">
        {skill}
      </span>
    )
  }

  return (
    <span 
      className="skill-chip inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-sm font-medium text-light-text dark:text-dark-text transition-all hover:border-primary hover:-translate-y-0.5"
      style={{
        '--icon-light-color': iconData.color,
        '--icon-dark-color': iconData.darkColor,
      }}
    >
      <Icon 
        className="w-4 h-4 flex-shrink-0 skill-icon" 
      />
      <span className="whitespace-nowrap">{skill}</span>
    </span>
  )
}

function SkillCard({ group, index }) {
  return (
    <div
      className={`card card-hover p-6 space-y-4 reveal reveal-delay-${(index % 3) + 1}`}
    >
      {/* Header */}
      <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
        {group.category}
      </h3>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillChip key={skill} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section-padding bg-light-surface dark:bg-dark-surface" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="section-eyebrow">Tech Stack</span>
            <h2 className="section-title">
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
