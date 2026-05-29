import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const rolePills = ['Frontend', 'Backend', 'Full-Stack']

export default function WorkExperience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[300px] sm:h-[300px] bg-cyan-500/5 -left-32 top-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="Career"
          title={<>Work <span className="gradient-text">Experience</span></>}
        />

        <div className="reveal reveal-delay-2 flex justify-center" data-aos="fade-up">
          <div className="glass-card border border-teal-500/25 bg-gradient-to-br from-teal-500/[0.06] to-cyan-500/[0.03] p-8 sm:p-12 text-center max-w-2xl w-full relative overflow-hidden">

            {/* Background accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

            {/* Rocket icon */}
            <div className="relative flex justify-center mb-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-teal-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
            </div>

            {/* Status badge */}
            <div className="relative flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Internships
              </span>
            </div>

            <h3 className="relative text-white font-bold text-xl sm:text-2xl mb-3">
              Open to Opportunities
            </h3>

            {/* Availability text */}
            <p className="relative text-teal-300/80 text-sm sm:text-base font-medium mb-4">
              Available for SDE internships — Summer/Fall 2026
            </p>

            <p className="relative text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-7">
              Actively looking for internships and collaborative opportunities where I can contribute, learn, and grow as a developer.
            </p>

            {/* Role preference pills */}
            <div className="relative flex flex-wrap justify-center gap-2 mb-8">
              {rolePills.map(role => (
                <span
                  key={role}
                  className="px-4 py-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 text-teal-300 text-sm font-medium hover:bg-teal-500/20 hover:border-teal-400/60 transition-all duration-200 cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold rounded-xl shadow-[0_0_16px_rgba(13,148,136,0.4)] hover:shadow-[0_0_24px_rgba(13,148,136,0.6)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
