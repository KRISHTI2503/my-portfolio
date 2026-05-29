import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import SectionTitle from './SectionTitle'

const EMAIL = 'krishti2503@gmail.com'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/KRISHTI2503',
    isStroke: false,
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krishti-patel-5027a831b/',
    isStroke: false,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

function CopyEmailRow() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="reveal reveal-delay-3 flex items-center justify-center gap-3 mb-8">
      {/* Email icon + address */}
      <a
        href={`mailto:${EMAIL}`}
        className="group flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-200"
      >
        <span className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-teal-400/50 group-hover:bg-teal-400/5 group-hover:shadow-[0_0_16px_rgba(13,148,136,0.2)] transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        <span className="text-sm font-mono">{EMAIL}</span>
      </a>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200
          ${copied
            ? 'bg-green-500/20 border-green-500/40 text-green-400'
            : 'bg-teal-500/10 border-teal-500/30 text-teal-400 hover:bg-teal-500/20 hover:border-teal-400/60 hover:scale-105'
          }`}
        aria-label="Copy email address"
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Copied ✓
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy Email
          </>
        )}
      </button>
    </div>
  )
}

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="orb w-72 h-72 sm:w-[400px] sm:h-[400px] bg-teal-500/5 left-1/2 -translate-x-1/2 top-0 pointer-events-none" />

      <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
        <SectionTitle
          label="Contact"
          title={<>Let's <span className="gradient-text">Connect</span></>}
          subtitle="Let us build the next useful thing."
        />

        <p className="reveal reveal-delay-2 text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto text-center -mt-6 mb-10">
          For internships, collaborations, and developer opportunities, feel free to connect directly through email or professional platforms.
        </p>

        {/* Email row with copy button */}
        <CopyEmailRow />

        {/* Social icons */}
        <div className="reveal reveal-delay-3 flex justify-center gap-6 sm:gap-8">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="group flex flex-col items-center gap-2.5"
            >
              <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-slate-400 group-hover:text-teal-400 group-hover:border-teal-400/50 group-hover:bg-teal-400/5 group-hover:shadow-[0_0_24px_rgba(13,148,136,0.2)] group-hover:-translate-y-1 transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  fill={s.isStroke ? 'none' : 'currentColor'}
                  stroke={s.isStroke ? 'currentColor' : 'none'}
                  strokeWidth={s.isStroke ? 2 : 0}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap={s.isStroke ? 'round' : undefined}
                    strokeLinejoin={s.isStroke ? 'round' : undefined}
                    d={s.path}
                  />
                </svg>
              </span>
              <span className="text-slate-500 text-xs font-mono group-hover:text-teal-400 transition-colors">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
