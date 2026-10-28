import { useState } from 'react'
import { Mail, Copy, Check } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const EMAIL = 'krishti2503@gmail.com'

// GitHub Icon SVG
const GitHubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

// LinkedIn Icon SVG
const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="contact" className="py-12 px-6 sm:py-14 md:py-16 lg:py-20 bg-light-bg dark:bg-dark-bg" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-mono text-primary bg-primary/10 rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-3">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-sm text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
              Open to internships, collaborations, and developer opportunities.
            </p>
          </div>

          {/* Email Card */}
          <div className="card p-4 mb-4 reveal">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              
              <div className="flex-1 text-center sm:text-left min-w-0">
                <p className="text-xs text-light-muted dark:text-dark-muted mb-0.5">
                  Email me at
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-medium text-light-text dark:text-dark-text hover:text-primary transition-colors break-all sm:break-normal"
                >
                  {EMAIL}
                </a>
              </div>

              <button
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-colors min-h-[44px] sm:min-h-0 ${
                  copied
                    ? 'bg-green-600 hover:bg-green-700 text-white border border-green-600'
                    : 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg border border-light-border dark:border-dark-border'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid sm:grid-cols-2 gap-3 reveal reveal-delay-1">
            <a
              href="https://github.com/KRISHTI2503"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover p-4 flex items-center gap-3 group min-h-[60px]"
            >
              <div className="w-9 h-9 rounded-lg bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center transition-colors flex-shrink-0">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-light-muted dark:text-dark-muted mb-0.5">
                  GitHub
                </p>
                <p className="text-sm font-medium text-light-text dark:text-dark-text group-hover:text-primary transition-colors">
                  @KRISHTI2503
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/krishti-patel-5027a831b/"
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover p-4 flex items-center gap-3 group min-h-[60px]"
            >
              <div className="w-9 h-9 rounded-lg bg-light-bg dark:bg-dark-bg text-light-muted dark:text-dark-muted group-hover:bg-primary/10 group-hover:text-primary flex items-center justify-center transition-colors flex-shrink-0">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-light-muted dark:text-dark-muted mb-0.5">
                  LinkedIn
                </p>
                <p className="text-sm font-medium text-light-text dark:text-dark-text group-hover:text-primary transition-colors">
                  Krishti Patel
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
