import { useState, useEffect } from 'react'

import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]


export default function Navbar() {
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


        <Button className="hidden md:block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          Let&apos;s Talk
        </Button>



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
            <Button>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}

    </header>
  )
}