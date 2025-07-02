// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

const sections = ['about', 'skills', 'projects', 'education', 'certifications', 'contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(sections[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3
      let current = activeSection
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPos) {
          current = section
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-lg z-50 border-b border-indigo-600 shadow-md">
      <div className="flex justify-center gap-8 px-6 py-4 max-w-[1200px] mx-auto">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`
              relative text-md font-semibold tracking-wide uppercase transition-all duration-200
              hover:text-white hover:scale-105 focus:outline-none
              ${
                activeSection === section
                  ? 'text-cyan-400 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[2px] after:bg-cyan-400 after:rounded-full after:shadow-[0_0_6px_cyan]'
                  : 'text-gray-400'
              }
            `}
            aria-current={activeSection === section ? 'page' : undefined}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}
