import React, { useState } from 'react'

const projects = [
  {
    title: 'Cloud-based Web Server Hosting',
    link: 'https://github.com/yourgithub/cloud-web-server',
    description:
      'Improved scalability and performance of a web server using Amazon EC2, load balancing, and auto-scaling.',
    tech: 'AWS EC2, Load Balancer, Auto-scaling',
  },
  {
    title: 'Crop Price Prediction',
    link: 'https://github.com/yourgithub/crop-price-prediction',
    description:
      'Designed and implemented machine learning models to predict crop prices based on historical data.',
    tech: 'Python, Machine Learning',
  },
  {
    title: 'BTH Campus Connect App',
    link: 'https://github.com/yourgithub/bth-campus-connect',
    description:
      'Built a mobile app for university students using Kotlin, providing real-time info on campus events, navigation, and services.',
    tech: 'Kotlin, Mobile App',
  },
  {
    title: 'COVID-19 Spread Simulation',
    link: 'https://github.com/yourgithub/covid19-simulation',
    description:
      'Simulated pandemic spread using Markov Chains in Python, summarizing and visualizing trends for specific regions.',
    tech: 'Python, Data Analysis, Markov Chains',
  },
]

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(2)

  const showMore = () => setVisibleCount(projects.length)
  const showLess = () => setVisibleCount(2)

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="min-h-screen text-white flex flex-col justify-center items-center px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      {projects.slice(0, visibleCount).map(({ title, link, description, tech }, idx) => (
        <div key={idx} className="section-box w-full mb-8">
          <div className="project-header">
            <h3 className="project-title">{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Link
            </a>
          </div>

          <p className="project-description">{description}</p>

          <div className="project-tech">
            <span className="tech-label">Tech Used:</span>
            <span className="tech-text">{tech}</span>
          </div>
        </div>
      ))}

      {visibleCount < projects.length ? (
        <button
          onClick={showMore}
          className="toggle-button"
          aria-label="Show more projects"
        >
          More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="arrow-icon"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      ) : (
        <button
          onClick={showLess}
          className="toggle-button"
          aria-label="Show fewer projects"
        >
          Less
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="arrow-icon rotate"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </section>
  )
}
