import React from 'react'

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'TechNova Solutions',
    duration: 'June 2024 – August 2024',
    description:
      'Worked on developing scalable backend APIs and integrated cloud services to optimize data pipelines. Collaborated with frontend teams using Agile methodology.',
    tech: 'Node.js, AWS Lambda, MongoDB',
  },
  {
    role: 'Research Assistant',
    company: 'XYZ University, Dept. of AI',
    duration: 'Jan 2023 – May 2023',
    description:
      'Assisted in building a deep learning model for image segmentation tasks, contributed to research papers, and maintained experiment pipelines.',
    tech: 'Python, PyTorch, OpenCV',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      className="min-h-screen text-white flex flex-col justify-center items-center px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <div className="experience-list w-full">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="experience-entry"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="exp-header">
              <h3 className="exp-role">{exp.role}</h3>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-description">{exp.description}</p>
            <div className="exp-tech">
              <span className="exp-label">Tech Used:</span>
              <span className="exp-tech-text">{exp.tech}</span>
            </div>
            {idx !== experiences.length - 1 && <hr className="exp-divider" />}
          </div>
        ))}
      </div>
    </section>
  )
}
