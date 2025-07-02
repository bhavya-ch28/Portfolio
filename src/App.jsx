import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import CenteredTest from './CenteredTest'  // your test component

export default function App() {
  const [loading, setLoading] = useState(true)
  const [testMode, setTestMode] = useState(false) // toggle to test CenteredTest easily

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (testMode) {
    // Show only the CenteredTest component if testMode enabled
    return <CenteredTest />
  }

 
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
