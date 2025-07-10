import React, { useState } from 'react'

const projects = [
  {
    title: "COVID‑19 Spread Simulation",
    link: "https://github.com/bhavya-ch28/covid-19-simulation",
    description: "Simulated COVID-19 spread using Markov Chains and analyzed trends with Pandas and Matplotlib.",
    tech: "Python · Pandas · Matplotlib · Markov Chains",
  },
  {
    "title": "Campus Connect App",
    "link": "https://github.com/bhavya-ch28/CampusConnectApp",
    "description": "Developed a Kotlin app delivering real-time campus updates, navigation, and student services with location-based features.",
    "tech": "Kotlin, Android"
  },
  {
    "title": "Cloud-based Web Server Hosting",
    "link": "https://github.com/bhavya-ch28/cloud-project-docs-",
    "description": "Improved web server scalability and availability using AWS EC2, Load Balancer, and Auto Scaling with system monitoring and optimization.",
    "tech": "AWS EC2, Load Balancer, Auto Scaling"
  },
  {
    "title": "Interactive Narrative Game System",
    "link": "https://github.com/bhavya-ch28/interactive-narrative-game",
    "description": "Developed a modular, object-oriented adventure game with GRASP principles featuring scene interaction, inventory management, and a smart in-game assistant.",
    "tech": "Java, GRASP, OOP, Game Design"
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
