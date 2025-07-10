import React from 'react'

const experiences = [
  {
    role: 'Freelance Developer – AI & Web Projects',
    company: 'Remote',
    duration: 'May 2024 – Present',
    description: [
      'Developed a ReactJS and Firebase website featuring 450+ DSA questions, video content, bookmarking, note-taking, and progress tracking to support coding learners.',
      'Created a gesture-controlled virtual mouse using Python and OpenCV, showcasing AI and computer vision integration.',
    ],
    tech: 'ReactJS, Firebase, Python, OpenCV',
  },
  {
    role: 'AI & ML Internship',
    company: 'Lomaa IT',
    duration: 'May 2023 – June 2023',
    description:
      'Built and evaluated machine learning models using Python, applying AI, statistics, and deep learning concepts. Processed real-time datasets with NumPy and Pandas for model training.',
    tech: 'Python, NumPy, Pandas, Machine Learning',
  },
  {
    role: 'Cybersecurity Trainee (Coursera)',
    company: 'Google',
    duration: 'Jan 2025 – Mar 2025',
    description:
      'Gained hands-on experience with Python, Linux, SQL, and cybersecurity tools focused on threat detection and automation. Developed secure coding practices aligned with cloud-native and AI-driven development.',
    tech: 'Python, Linux, SQL, Cybersecurity',
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
            <div className="exp-header flex justify-between items-center">
              <h3 className="exp-role text-xl font-semibold">{exp.role}</h3>
              <span className="exp-duration text-sm text-gray-400">{exp.duration}</span>
            </div>
            <p className="exp-company text-gray-300 italic mb-2">{exp.company}</p>
            {Array.isArray(exp.description) ? (
              <ul className="exp-description list-disc ml-6 mb-3">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="exp-description mb-3">{exp.description}</p>
            )}
            <div className="exp-tech text-sm">
              <span className="exp-label font-semibold">Tech Used: </span>
              <span className="exp-tech-text">{exp.tech}</span>
            </div>
            {idx !== experiences.length - 1 && <hr className="exp-divider my-6 border-gray-700" />}
          </div>
        ))}
      </div>
    </section>
  )
}
