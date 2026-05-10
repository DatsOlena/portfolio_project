import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/Button'
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'

import { ArrowRight, Download, X } from 'lucide-react'
import { socialLinks } from '@/data/social'

const CV_FILENAME = 'CV_FE_Olena_Dats.pdf'

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

const skills = [
  "Redux",
  "HTML5",
  "Cypress",
  "GraphQL",
  "Figma",
  "Python",
  "Responsive Design",
  "GitLab",
  "Next.js",
  "Claude Code",
  "UI/UX",
  "Bootstrap",
  "Jest",
  "Cursor",
  "CSS3/SASS",
  "AI-enabled workflows",
  "Git",
  "Firebase",
  "REST APIs",
  "Cross Browser Compatibility",
  "Tailwind",
  "React",
  "CMS",
  "Codex",
  "API Data Handling",
  "JavaScript",
  "Pimcore",
  "GitHub",
  "TypeScript",
  "Testing"
]


export const Hero = ({ theme = 'dark' }) => {
  const profileImage =
    theme === 'light' ? '/profile_photo_light.png' : '/profile_photo.png'
  const cvUrl = `${import.meta.env.BASE_URL}CV/${CV_FILENAME}`

  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [cvEmail, setCvEmail] = useState('')
  const [cvError, setCvError] = useState('')
  const [cvSending, setCvSending] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const triggerCvDownload = () => {
    const anchor = document.createElement('a')
    anchor.href = cvUrl
    anchor.download = CV_FILENAME
    anchor.rel = 'noopener noreferrer'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  const handleCvButtonClick = () => {
    setCvError('')
    setCvModalOpen(true)
  }

  const closeCvModal = () => {
    if (cvSending) return
    setCvModalOpen(false)
    setCvError('')
    setCvSending(false)
  }

  const handleCvSubmit = async (e) => {
    e.preventDefault()
    const trimmed = cvEmail.trim()
    if (!isValidEmail(trimmed)) {
      setCvError('Please enter a valid email address.')
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId =
      import.meta.env.VITE_EMAILJS_CV_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setCvError(
        'Email notifications are not configured. Add EmailJS variables to .env and restart the dev server.'
      )
      return
    }

    setCvSending(true)
    setCvError('')
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: 'CV download',
          email: trimmed,
          message: 'Requested portfolio CV download (Hero section).',
        },
        publicKey
      )
      triggerCvDownload()
      setCvEmail('')
      setCvModalOpen(false)
      setCvError('')
    } catch (err) {
      console.error('EmailJS (CV):', err)
      setCvError(
        err?.text ||
          err?.message ||
          'Could not send your email. Please try again or use the contact form.'
      )
    } finally {
      setCvSending(false)
    }
  }

  useEffect(() => {
    if (!cvModalOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape' && !cvSending) {
        setCvModalOpen(false)
        setCvError('')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cvModalOpen, cvSending])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
        </div>
      </div>
      {/*Green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div className="absolute inset-0 w-1.5 h-1.5 opacity-60 rounded-full" key={index}
            style={{
              backgroundColor: "#8b9469",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

      </div>

      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in reveal-on-scroll">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animated-sheen">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend developer & React Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 reveal-on-scroll">
                Crafting <span className="text-primary glow-text">Clean, Modern</span> Interfaces
                <br />
                <span className="font-serif italic font-normal text-foreground">for the Web</span>

              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 reveal-on-scroll">
                Hi, I'm Olena Dats - a frontend software engineer with a passion for creating clean, modern interfaces.
                I specialise in React, Next.js, Tailwind CSS, and TypeScript.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap animate-fade-in animation-delay-300 reveal-on-scroll">
              <Button size="lg" type="button" onClick={scrollToContact}>
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                onClick={handleCvButtonClick}
                aria-label="Download CV PDF"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 reveal-on-scroll">
              <span className="text-muted-foreground text-sm"> Follow me on</span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

            </div>
          </div>

          <div className="relative max-w-md mx-auto animate-fade-in animation-delay-400 reveal-on-scroll">
            <div
              className="absolute inset-0 animate-drift-x
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src={profileImage}
                alt="Olena Dats"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground">
                  Years Exp.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600 reveal-on-scroll">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {cvModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm disabled:pointer-events-none"
            aria-label="Close dialog"
            onClick={closeCvModal}
            disabled={cvSending}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-download-title"
            className="relative z-10 w-full max-w-md glass rounded-3xl border border-primary/30 p-6 shadow-xl"
          >
            <button
              type="button"
              onClick={closeCvModal}
              disabled={cvSending}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-surface transition-colors disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h2
              id="cv-download-title"
              className="text-xl font-semibold pr-10"
            >
              Download CV
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Your email is sent to me via EmailJS so I know who downloaded the
              CV, then the PDF downloads.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleCvSubmit} noValidate>
              <div>
                <label htmlFor="cv-email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="cv-email"
                  type="email"
                  autoComplete="email"
                  value={cvEmail}
                  onChange={(e) => {
                    setCvEmail(e.target.value)
                    if (cvError) setCvError('')
                  }}
                  disabled={cvSending}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-60"
                />
                {cvError && (
                  <p className="text-sm text-red-400 mt-2">{cvError}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" size="default" disabled={cvSending}>
                  <Download className="w-4 h-4" />
                  {cvSending ? 'Sending…' : 'Download'}
                </Button>
                <button
                  type="button"
                  onClick={closeCvModal}
                  disabled={cvSending}
                  className="px-6 py-3 text-sm font-medium rounded-full border border-border text-foreground hover:border-primary/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  )
}