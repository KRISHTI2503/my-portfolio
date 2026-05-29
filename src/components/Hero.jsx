import { useEffect, useState, useRef } from 'react'
import ResumeModal from './ResumeModal'

const roles = ['Aspiring Developer', 'Problem Solver', 'Hackathon Enthusiast']

function Particle({ style }) {
  return <div className="absolute w-1 h-1 rounded-full bg-teal-400/40 animate-float" style={style} />
}

function StatCounter({ target, label, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const isFloat = String(target).includes('.')
    const numTarget = parseFloat(target)
    const duration = 1200
    const steps = 40
    const increment = numTarget / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numTarget) {
        setCount(numTarget)
        clearInterval(timer)
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  const display = String(target).includes('.') ? count.toFixed(2) : Math.floor(count)

  return (
    <div ref={ref}
      className="flex flex-col items-center px-4 py-2.5 rounded-full border border-teal-500/40 bg-teal-500/8 backdrop-blur-sm hover:border-teal-400/70 hover:bg-teal-500/15 transition-all duration-300 min-w-[90px]"
    >
      <span className="text-teal-300 font-black text-base font-mono leading-tight">
        {display}{suffix}
      </span>
      <span className="text-slate-400 text-[11px] font-medium mt-0.5 whitespace-nowrap">{label}</span>
    </div>
  )
}

function TerminalCard() {
  return (
    <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20 w-[300px] xl:w-[340px]">
      <div className="rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(13,148,136,0.15)] overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.07]">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-slate-500 text-xs font-mono">portfolio.js</span>
        </div>
        {/* Code body */}
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          <div>
            <span className="text-purple-400">function</span>
            {' '}
            <span className="text-teal-300">solve</span>
            <span className="text-slate-300">(</span>
            <span className="text-orange-300">problem</span>
            <span className="text-slate-300">) {'{'}</span>
          </div>
          <div className="ml-4 mt-1">
            <span className="text-cyan-400">think</span>
            <span className="text-slate-300">();</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-400">build</span>
            <span className="text-slate-300">();</span>
          </div>
          <div className="ml-4">
            <span className="text-cyan-400">ship</span>
            <span className="text-slate-300">();</span>
          </div>
          <div className="mt-1">
            <span className="text-slate-300">{'}'}</span>
          </div>
          <div className="mt-3 text-slate-500 text-xs">
            <span className="text-teal-500/70">// </span>
            <span className="text-slate-500">repeat until awesome</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-teal-400/70 text-xs">▶</span>
            <span className="text-green-400 text-xs">Output: success ✓</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [resumeOpen, setResumeOpen] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIndex((roleIndex + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = document.documentElement.classList.contains('dark')
      ctx.strokeStyle = isDark
        ? 'rgba(13, 148, 136, 0.07)'
        : 'rgba(148, 163, 184, 0.2)'
      ctx.lineWidth = 1
      const size = 60
      for (let x = 0; x < canvas.width; x += size) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += size) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }
    }
    resize()
    window.addEventListener('resize', resize)
    const observer = new MutationObserver(drawGrid)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => {
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  const particles = Array.from({ length: 16 }, (_, i) => ({
    style: {
      left: `${(i * 6.25) % 100}%`,
      top: `${(i * 13) % 100}%`,
      animationDelay: `${(i * 0.4) % 6}s`,
      animationDuration: `${6 + (i % 4) * 1.5}s`,
      opacity: 0.3 + (i % 3) * 0.15,
      width: `${1 + (i % 3)}px`,
      height: `${1 + (i % 3)}px`,
    }
  }))

  return (
    <section id="hero" className="relative min-h-screen min-h-[600px] flex items-center justify-center overflow-hidden px-4">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Orbs */}
      <div className="orb w-72 h-72 sm:w-[500px] sm:h-[500px] bg-teal-500/10 -top-32 -left-32" style={{ animationDelay: '0s' }} />
      <div className="orb w-64 h-64 sm:w-[400px] sm:h-[400px] bg-cyan-500/8 top-1/2 -right-32 sm:-right-48" style={{ animationDelay: '3s' }} />
      <div className="orb w-48 h-48 sm:w-[300px] sm:h-[300px] bg-emerald-500/8 bottom-0 left-1/3" style={{ animationDelay: '1.5s' }} />

      {particles.map((p, i) => <Particle key={i} style={p.style} />)}

      {/* Floating terminal card — desktop only */}
      <TerminalCard />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-24 sm:py-32">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight animate-slide-up">
          Hi, I'm <span className="gradient-text">Krishti Patel</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 my-5 sm:my-8 min-h-[2rem] sm:min-h-[2.5rem]">
          <span className="text-slate-500 font-mono text-sm sm:text-lg flex-shrink-0">&gt;</span>
          <span className="text-base sm:text-xl md:text-2xl font-mono text-cyan-300 text-left break-all sm:break-words">
            {displayed}
            <span className="inline-block w-0.5 h-4 sm:h-6 bg-teal-400 ml-1 animate-pulse align-middle" />
          </span>
        </div>

        {/* Professional info line */}
        <p className="text-sm sm:text-base font-medium tracking-wide text-cyan-300/75 mb-6 sm:mb-8 animate-fade-in">
          B.Tech IT Student&nbsp;&nbsp;|&nbsp;&nbsp;CPI: 8.57
        </p>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1 sm:px-2"></p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-10">
          <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
            Explore Projects
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View Resume
          </button>
        </div>

        {/* Stat counter pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <StatCounter target={4} label="Projects" />
          <StatCounter target={3} label="Hackathons" />
          <StatCounter target={8.57} label="CPI" />
        </div>
      </div>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </section>
  )
}
