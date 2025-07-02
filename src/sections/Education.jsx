import React from 'react'

export default function Education() {
  return (
    <section
  id="education"
  data-aos="fade-up"
  className="min-h-screen text-white flex flex-col justify-center items-center px-6 max-w-5xl mx-auto"
>
  <h2 className="text-4xl font-bold mb-12">Education</h2>

  <div className="education-list w-full">
    {[
      {
        degree: 'Master’s in Computer Science',
        duration: '2023 – 2025',
        institute: 'Blekinge Institute of Technology, Sweden',
      },
      {
        degree: 'Bachelor’s in Computer Science',
        duration: '2019 – 2023',
        institute: 'XYZ University, India',
      },
    ].map((edu, idx) => (
      <div
        key={idx}
        className="education-entry"
        data-aos="fade-up"
        data-aos-delay={idx * 100}
      >
        <div className="edu-top">
          <h3 className="edu-degree">{edu.degree}</h3>
          <span className="edu-duration">{edu.duration}</span>
        </div>
        <p className="edu-institute">{edu.institute}</p>
        
      </div>
    ))}
  </div>
</section>


  )
}
