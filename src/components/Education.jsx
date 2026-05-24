import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const icons = {
  btech: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  hsc:   'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  ssc:   'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
}

const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Dharmsinh Desai University',
    location: 'Nadiad, Gujarat',
    period: '2024 – 2028',
    score: 'CPI: 8.57',
    status: 'Pursuing',
    icon: icons.btech,
    accentLine: 'bg-teal-500',
    iconBg: 'bg-teal-500/15 border-teal-500/30',
    iconColor: 'text-teal-400',
    scoreBg: 'bg-teal-500/10 text-teal-300 border-teal-500/25',
    statusBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
  },
  {
    degree: 'HSC — 12th Grade',
    institution: 'DGES School',
    location: 'Idar, Gujarat',
    period: '2023 – 2024',
    score: '94.66%',
    status: 'Completed',
    icon: icons.hsc,
    accentLine: 'bg-cyan-500',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    scoreBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
    statusBg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  },
  {
    degree: 'SSC — 10th Grade',
    institution: 'DGES School',
    location: 'Idar, Gujarat',
    period: '2021 – 2022',
    score: '92.16%',
    status: 'Completed',
    icon: icons.ssc,
    accentLine: 'bg-emerald-500',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    scoreBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    statusBg: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  },
]

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[350px] sm:h-[350px] bg-teal-500/5 -right-32 top-1/4 pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <SectionTitle
          label="Background"
          title={<span className="gradient-text">Education</span>}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="hidden sm:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent" />

          <div className="space-y-5 sm:space-y-6">
            {education.map((edu, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative sm:pl-[72px]`}>

                {/* Timeline node — desktop */}
                <div className={`hidden sm:flex absolute left-0 top-7 w-[56px] h-[56px] rounded-2xl ${edu.iconBg} border items-center justify-center shadow-sm`}>
                  <svg className={`w-5 h-5 ${edu.iconColor}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={edu.icon} />
                  </svg>
                </div>

                {/* Card */}
                <div className="glass-card p-6 sm:p-7 group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] active:scale-[0.99] overflow-hidden relative">

                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${edu.accentLine} opacity-60`} />

                  {/* Top row: degree + badges */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    {/* Left: icon (mobile) + degree */}
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Mobile icon */}
                      <div className={`sm:hidden w-9 h-9 rounded-xl ${edu.iconBg} border flex items-center justify-center flex-shrink-0`}>
                        <svg className={`w-4 h-4 ${edu.iconColor}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={edu.icon} />
                        </svg>
                      </div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-teal-300 transition-colors">
                        {edu.degree}
                      </h3>
                    </div>

                    {/* Right: year badge */}
                    <span className="flex-shrink-0 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                      {edu.period}
                    </span>
                  </div>

                  {/* Institution */}
                  <p className="text-teal-400 font-semibold text-sm mb-0.5">{edu.institution}</p>
                  <p className="text-slate-500 text-xs font-mono mb-4">{edu.location}</p>

                  {/* Score + status badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${edu.scoreBg}`}>
                      {edu.score}
                    </span>
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${edu.statusBg}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
