import { Calendar, ExternalLink } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const achievements = [
  {
    title: 'DU Hacks 4.0 — GDSC DDU',
    description: 'Built a Stream Selection Platform to help students explore academic streams, colleges, and career paths after 10th grade.',
    date: '2025',
    type: 'Hackathon',
    cert: '/certificates/du-hacks-4.0.jpeg',
  },
  {
    title: 'DU Hacks 5.0 — GDSC DDU',
    description: 'Collaborated with a team to develop FundLedger, a community-driven funding platform that enables transparent proposal submission, verification, and democratic voting to support fair and community-based funding decisions.',
    date: '2026',
    type: 'Hackathon',
    cert: '/certificates/du-hacks-5.0.jpeg',
  },
  {
    title: "TIC-TECH-TOE '25 — DA-IICT",
    description: 'Developed an Intelligent Virtual Career Advisor to guide students in making informed academic and career decisions.',
    date: '2025',
    type: 'Hackathon',
    cert: '/certificates/tic-tech-toe-4.0.jpeg',
  },
  {
    title: 'Vibe2Ship — Coding Ninjas × Google for Developers',
    description: 'Built FinishLine AI — a proactive, multilingual AI productivity companion that plans deadlines, re-evaluates progress daily, and delivers real recovery plans before you miss what matters. Features autonomous daily briefing, crisis coaching, multilingual voice input (English, Hindi, Gujarati), and smart rescheduling powered by Gemini API.',
    date: '2026',
    type: 'Hackathon',
    cert: '/certificates/vibe2ship.jpeg',
  },
  {
    title: "TIC-TECH-TOE '26 — DA-IICT",
    description: 'AI-Integrated workflow automation engine resolving context fragmentation across developer messaging, issue tracking, and code repositories. Built customizable workflow engines triggering automated GitHub branch creation on task acceptance, integrated LangGraph orchestration for repository-aware debugging, and multi-channel urgency routing via Slack, SMS, and Email.',
    date: '2026',
    type: 'Hackathon',
    cert: '/certificates/tic_tech_Toe_certi_2026.pdf',
  },
  {
    title: 'CCNA: Introduction to Networks',
    description: 'Completed Cisco Networking Academy course covering network configuration, IPv4/IPv6 addressing, OSI model layers, switching, and security best practices.',
    date: '2026',
    type: 'Certification',
    org: 'Cisco Networking Academy',
    badge: { label: 'View Badge', href: '/certificates/ccna.png' },
    cert: { label: 'View Certificate', href: '/certificates/ccna-cert.jpeg' },
  },
  {
    title: 'AWS Academy Cloud Foundations',
    description: 'Completed 20-hour AWS Academy program covering core cloud concepts, AWS global infrastructure, core services, security, and cloud architecture fundamentals.',
    date: '2026',
    type: 'Certification',
    org: 'Amazon Web Services Academy',
    badge: { label: 'View Badge', href: '/certificates/aws.png' },
    cert: { label: 'View Certificate', href: '/certificates/aws-cert.jpeg' },
  },
  {
    title: 'AWS Students Community Day 2026',
    description: 'Participant in the Technical Track (Agentic AI) at AWS Students Community Day 2026, held on 26 September 2026 at DDU, Nadiad.',
    date: '2026',
    type: 'Event',
    org: 'AWS Student Builder Group, DDU Nadiad',
    cert: '/certificates/aws_event.png',
  },
]

const codingProfiles = [
  {
    label: 'Codolio',
    href: 'https://codolio.com/profile/Krishtipatel25',
    handle: 'Krishtipatel25',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Krishti25/',
    handle: 'Krishti25',
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/_Krishti251109',
    handle: '_Krishti251109',
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/krishti_2503',
    handle: 'krishti_2503',
  },
  {
    label: 'HackerRank',
    href: 'https://hackerrank.com/krishti2503',
    handle: 'krishti2503',
  },
  {
    label: 'GeeksForGeeks',
    href: 'https://www.geeksforgeeks.org/profile/krishti2511',
    handle: 'krishti2511',
  },
]

function AchievementCard({ item, index }) {
  return (
    <div className={`card card-hover p-6 flex flex-col gap-4 reveal reveal-delay-${(index % 3) + 1}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag tag-primary text-xs font-mono">
              {item.type}
            </span>
          </div>
          <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-1">
            {item.title}
          </h3>
          {item.org && (
            <p className="text-sm text-light-muted dark:text-dark-muted font-mono">
              {item.org}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-primary flex-shrink-0">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-mono">{item.date}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-light-muted dark:text-dark-muted leading-relaxed text-sm flex-1">
        {item.description}
      </p>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-light-border dark:border-dark-border">
        {/* For certifications with badge + cert */}
        {item.badge && item.cert && typeof item.cert === 'object' ? (
          <>
            <a
              href={item.badge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-colors"
            >
              {item.badge.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={item.cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-colors ml-auto"
            >
              {item.cert.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </>
        ) : (
          /* For hackathons with single cert link */
          <a
            href={item.cert}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-colors ml-auto"
          >
            View Certificate
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}

function CodingProfileCard({ profile, index }) {
  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`card card-hover p-6 flex items-center justify-between gap-4 group reveal reveal-delay-${(index % 3) + 1}`}
    >
      <div className="flex-1">
        <h3 className="text-lg font-bold text-light-text dark:text-dark-text group-hover:text-primary transition-colors mb-1">
          {profile.label}
        </h3>
        <p className="text-sm text-light-muted dark:text-dark-muted font-mono">
          {profile.handle}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-light-muted dark:text-dark-muted group-hover:text-primary transition-colors flex-shrink-0" />
    </a>
  )
}

export default function Achievements() {
  const ref = useReveal()

  return (
    <section id="achievements" className="section-padding bg-light-surface dark:bg-dark-surface" ref={ref}>
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-title">
              Achievements & <span className="gradient-text">More</span>
            </h2>
          </div>

          {/* Hackathons & Certifications */}
          <div>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-6 font-mono">
              Hackathons & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <AchievementCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-6 font-mono">
              Coding Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingProfiles.map((profile, index) => (
                <CodingProfileCard key={profile.label} profile={profile} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
