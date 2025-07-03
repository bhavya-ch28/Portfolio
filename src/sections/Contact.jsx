import React from 'react'
import { FaPhoneAlt, FaLinkedin, FaGithub, FaFileDownload, FaEye } from 'react-icons/fa'


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
        <img 
          src="/communication.png" 
          alt="Communication" 
          style={{ width: 28, height: 28, cursor: 'pointer' }} 
          onClick={() => window.open('mailto:bhavyasri.ch28@gmail.com', '_self')}
        />
        
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