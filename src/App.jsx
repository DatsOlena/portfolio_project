import { useEffect, useState } from 'react'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'
import Navbar from '@/layout/Navbar'
import Footer from '@/layout/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll('.reveal-on-scroll')
    )

    if (!revealElements.length) return

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const delay = entry.target.getAttribute('data-reveal-delay')
          if (delay) {
            entry.target.style.transitionDelay = `${delay}ms`
          }

          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0, rootMargin: '0px 0px 18% 0px' }
    )

    revealElements.forEach((element) => revealObserver.observe(element))

    return () => revealObserver.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
