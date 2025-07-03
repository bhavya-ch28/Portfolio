// src/components/Navbar.jsx
import { useState, useEffect } from 'react'

const sections = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact']

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
    <nav className="navbar">
      <div className="navbar-container">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`navbar-button ${activeSection === section ? 'active' : 'inactive'}`}
            aria-current={activeSection === section ? 'page' : undefined}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}
