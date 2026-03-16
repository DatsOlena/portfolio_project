import { useState, useEffect } from 'react'

import { Button } from '@/components/Button'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]


export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  function toggleMenu() {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} `}>
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          OD<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="block md:hidden p-2 text-foreground">
          <button
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-strong rounded-2xl p-4 animate-fade-in">
          <div className="container mx-auto p-6 flex flex-col gap-4">
            <button
              type="button"
              onClick={onToggleTheme}
              className="glass inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => { setIsMenuOpen(false) }}
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => { setIsMenuOpen(false) }}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}

    </header>
  )
}