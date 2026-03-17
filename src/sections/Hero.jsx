import { Button } from '@/components/Button'
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'

import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'

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
  const cvUrl = '/CV/CV_Olena_Dats_Frontend.pdf'
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }
  const downloadCV = () => {
    const anchor = document.createElement('a')
    anchor.href = cvUrl
    anchor.download = 'CV_Olena_Dats_Frontend.pdf'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidde"
    >
      <div className="absolute inset-0">
        <img
          src="/public/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background">
        </div>
      </div>
      {/*Green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        |{[...Array(30)].map((_, index) => (
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
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend developer & React Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">Clean, Modern</span> Interfaces
                <br />
                <span className="font-serif italic font-normal text-foreground">for the Web</span>

              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Olena Dats - a frontend developer with a passion for creating clean, modern interfaces.
                I specialise in React, Next.js, Tailwind CSS, and TypeScript.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap animate-fade-in animation-delay-300">
              <Button size="lg" type="button" onClick={scrollToContact}>
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton onClick={downloadCV} aria-label="Download CV PDF">
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-muted-foreground text-sm"> Follow me on</span>
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  href: 'https://github.com/DatsOlena',
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  href: 'https://www.linkedin.com/in/olenadats/',
                },
              ].map(({ icon, href }, index) => (
                <a href={href} key={index} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <span className="h-5 w-5">{icon}</span>
                </a>
              ))}

            </div>
          </div>

          <div className="relative max-w-md mx-auto">
            <div
              className="absolute inset-0 
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
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">
                  Years Exp.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
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


    </section>
  )
}