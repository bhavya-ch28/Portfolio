import React from 'react'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111', color: '#555' }}>
      <section id="contact" className="p-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#00d8ff' }}>
          Get In Touch
        </h2>
        <p className="mb-4">Feel free to reach out for collaborations, projects, or just a friendly chat!</p>

        <div className="flex justify-center space-x-10 mb-6 text-2xl">
          <a href="mailto:bsrich28@gmail.com" aria-label="Email" className="hover:text-[#ffaa00]">
            <FaEnvelope />
          </a>
          <a href="tel:+917093175773" aria-label="Phone" className="hover:text-[#ffaa00]">
            <FaPhone />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#ffaa00]">
            <FaLinkedin />
          </a>
        </div>

        <div className="space-x-4">
          <a href="/_Resume_.pdf" target="_blank" rel="noreferrer" className="btn">
            View Resume
          </a>
          <a href="/_Resume_.pdf" download className="btn">
            Download Resume
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-600">
          © 2025 Bhavya Sri Chennamsetty. All rights reserved.
        </p>
      </section>
    </footer>
  )
}
