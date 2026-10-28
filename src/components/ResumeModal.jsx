import { useEffect, useState, useRef } from 'react'
import { FileText, Download, ExternalLink, X } from 'lucide-react'

const RESUME_URL = '/resume.pdf'

export default function ResumeModal({ onClose }) {
  const [visible, setVisible] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const triggerRef = useRef(document.activeElement)
  const closeButtonRef = useRef(null)

  // Detect mobile (many mobile browsers can't render PDFs inline)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
  }, [])

  // Trigger show animation on mount
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true))
    
    // Focus trap: focus the close button after animation
    const focusTimeout = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus()
      }
    }, 250)
    
    return () => {
      cancelAnimationFrame(t)
      clearTimeout(focusTimeout)
    }
  }, [])

  // ESC key close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Prevent background scroll
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [])

  const handleClose = () => {
    setVisible(false)
    // Wait for fade-out before unmounting
    setTimeout(() => {
      onClose()
      // Return focus to trigger element
      if (triggerRef.current && triggerRef.current.focus) {
        triggerRef.current.focus()
      }
    }, 220)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.22s ease',
      }}
      onClick={handleBackdropClick}
    >
      {/* Modal panel */}
      <div
        className="relative w-full sm:max-w-[900px] max-h-[100vh] sm:max-h-[90vh] flex flex-col rounded-none sm:rounded-2xl overflow-hidden bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-xl"
        style={{
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(16px)',
          opacity: visible ? 1 : 0,
          transition: 'transform 0.25s ease, opacity 0.25s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg flex-shrink-0">
          {/* Left: Title */}
          <div className="flex items-center gap-2 text-light-text dark:text-dark-text">
            <FileText className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 id="resume-modal-title" className="text-base font-semibold font-mono">
              Resume
            </h2>
          </div>

          {/* Right: Action buttons */}
          <div className="flex items-center gap-2 flex-wrap justify-end">
            {/* Download Resume - Primary */}
            <a
              href={RESUME_URL}
              download="Krishti_Patel_Resume.pdf"
              className="btn-primary flex items-center gap-2 px-4 py-2 text-sm"
              aria-label="Download resume as PDF"
            >
              <Download className="w-4 h-4" />
              <span className="hidden xs:inline">Download Resume</span>
              <span className="xs:hidden">Download</span>
            </a>

            {/* Open Full Screen - Secondary */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm"
              aria-label="Open resume in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open Full Screen</span>
            </a>

            {/* Close */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              aria-label="Close modal"
              className="w-10 h-10 flex items-center justify-center rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-surface dark:hover:bg-dark-surface border border-light-border dark:border-dark-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hint strip */}
        <div className="px-4 sm:px-6 py-2 text-xs text-light-muted dark:text-dark-muted font-mono border-b border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg flex-shrink-0">
          Preview of my resume - feel free to download or open full screen.
        </div>

        {/* PDF body */}
        <div className="flex-1 overflow-auto bg-light-bg dark:bg-dark-bg">
          {iframeError || isMobile ? (
            // Fallback for mobile or iframe error
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center gap-6 px-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                  {isMobile ? 'PDF Preview Not Available' : 'Unable to preview resume'}
                </p>
                <p className="text-sm text-light-muted dark:text-dark-muted max-w-md">
                  {isMobile 
                    ? 'Your browser doesn\'t support inline PDF viewing. Please download or open in a new tab.'
                    : 'The PDF preview couldn\'t load. Please download or open in a new tab instead.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={RESUME_URL}
                  download="Krishti_Patel_Resume.pdf"
                  className="btn-primary flex items-center gap-2 px-6 py-3"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2 px-6 py-3"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Screen
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={RESUME_URL}
              title="Krishti Patel Resume"
              className="w-full h-full border-0"
              style={{ minHeight: '80vh' }}
              onError={() => setIframeError(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
