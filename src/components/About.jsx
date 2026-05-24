import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-64 h-64 sm:w-[400px] sm:h-[400px] bg-teal-500/5 -right-32 sm:-right-48 top-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">

        {/* Profile photo */}
        <div className="reveal flex justify-center md:justify-start">
          <div
            className="p-[2px] rounded-full flex-shrink-0"
            style={{ background: 'conic-gradient(from 180deg, #0d9488, #06b6d4, #10b981, #0d9488)' }}
          >
            <div className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden bg-[#030712]">
              <img
                src="/assets/profile.jpg"
                alt="Krishti Patel"
                className="w-full h-full object-cover object-center"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 items-center justify-center hidden text-slate-500 text-sm font-mono"
                aria-hidden="true"
              >
                photo.jpg
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="reveal">
            <span className="section-label">About Me</span>
          </div>

          <h2 className="reveal reveal-delay-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Passionate about<br />
            <span className="gradient-text">building for the world</span>
          </h2>

          <p className="reveal reveal-delay-2 text-slate-400 leading-relaxed mb-5 text-base sm:text-lg">
            Passionate B.Tech Information Technology student focused on web development, problem solving, and building practical digital solutions. I enjoy creating modern user-friendly applications and continuously improving my skills in Data Structures &amp; Algorithms, frontend development, and backend technologies.
          </p>

          <p className="reveal reveal-delay-3 text-slate-400 leading-relaxed text-sm sm:text-base">
            I actively participate in hackathons and collaborative projects, where I work with teams to build innovative solutions and gain real-world development experience.
          </p>
        </div>
      </div>
    </section>
  )
}
