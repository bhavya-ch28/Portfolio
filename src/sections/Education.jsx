import React from 'react'

export default function Education() {
  const educationData = [
    {
      degree: 'Bachelor’s in Computer Science',
      duration: '2023 – 2024',
      institute: 'Blekinge Institute of Technology, Sweden',
    },
    {
      degree: 'Bachelor’s in Computer Science',
      duration: '2020 – 2023',
      institute: 'SPMVV, India',
    },
  ]

  return (
    <section
      id="education"
      data-aos="fade-up"
      className="min-h-screen text-white flex flex-col justify-center items-center px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12">Education</h2>

      <div className="education-list w-full">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="education-entry"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="edu-top flex justify-between items-center">
              <h3 className="edu-degree text-xl font-semibold">{edu.degree}</h3>
              <span className="edu-duration text-sm text-gray-400">{edu.duration}</span>
            </div>
            <p className="edu-institute text-gray-300 italic">{edu.institute}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
