import React from 'react'
import { FaPhoneAlt, FaLinkedin, FaGithub, FaFileDownload, FaEye } from 'react-icons/fa'

const SimpleMailIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1A73E8"   // Google Blue
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>

      <p>
        <strong>Open to work and collaboration!</strong>
        <br />
        Feel free to reach out for projects, ideas, or just a friendly chat.
      </p>

      {/* Icons container */}
      <div className="icon-row">
        <a href="mailto:bsrich28@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <SimpleMailIcon />
        </a>
        <a href="tel:+46793437221" aria-label="Phone" target="_blank" rel="noopener noreferrer">
          <FaPhoneAlt size={28} color="#34A853" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} color="#0A66C2" />
        </a>
        <a href="https://github.com/your-github-username" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} color="#cbd5e1" />
        </a>
      </div>

      {/* Resume links container */}
      <div className="resume-links">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
          <FaEye size={18} />
          <span>View Resume</span>
        </a>
        <a href="/resume.pdf" download className="resume-link">
          <FaFileDownload size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  )
}